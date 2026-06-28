// FIX: Safely load configuration regardless of browser scope
const cfg = typeof URHIDU_CONFIG !== 'undefined' ? URHIDU_CONFIG : window.URHIDU_CONFIG;
const $ = (s, p = document) => p.querySelector(s);
const $$ = (s, p = document) => [...p.querySelectorAll(s)];

const state = {
  lang: localStorage.getItem('urhidu_lang') || 'en',
  theme: localStorage.getItem('urhidu_theme') || 'system',
  category: 'All',
  dietary: 'All',
  query: '',
  favorites: JSON.parse(localStorage.getItem('urhidu_favs')) || []
};

// --- Language & Translation (With Safeguards) ---
function t(keyObjectOrString) {
  if (!keyObjectOrString) return '';
  if (typeof keyObjectOrString === 'string') {
    // Look up in global dictionary, fallback to the string itself if missing
    const dict = (cfg.dict && cfg.dict[keyObjectOrString]) ? cfg.dict[keyObjectOrString] : null;
    return dict ? (dict[state.lang] || dict.en || keyObjectOrString) : keyObjectOrString;
  }
  // It's an object {en, am, om} on the item itself
  return keyObjectOrString[state.lang] || keyObjectOrString.en;
}

function applyTranslations() {
  $$('[data-i18n]').forEach(node => {
    node.textContent = t(node.dataset.i18n);
  });
  if ($('#menuSearch')) {
    $('#menuSearch').placeholder = t('searchPlaceholder');
  }
}

// --- Theme Management ---
function applyTheme() {
  const root = document.documentElement;
  const isDark = state.theme === 'dark' || (state.theme === 'system' && matchMedia('(prefers-color-scheme: dark)').matches);
  root.dataset.theme = isDark ? 'dark' : 'light';
  
  const icon = $('#themeSwitcher i');
  if (icon) {
    icon.className = isDark ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
  }
}

// --- App Config Bootstrapping ---
function bootConfig() {
  if ($('#langSwitcher')) $('#langSwitcher').value = state.lang;
  applyTheme();
  applyTranslations();

  // Images & Links
  if ($('#heroImage')) $('#heroImage').src = cfg.heroImage;
  if ($('#logoImage')) $('#logoImage').src = cfg.logoImage;
  if ($('#footerLogo')) $('#footerLogo').src = cfg.logoImage;
  
  $$('a[data-i18n="phone"], #modalCall').forEach(el => {
    if (cfg.dict && cfg.dict.phoneRaw) el.href = `tel:${cfg.dict.phoneRaw}`;
  });

  // Socials
  if ($('#socialLinks')) {
    $('#socialLinks').innerHTML = (cfg.social || []).map(s => 
      `<a href="${s.url}" aria-label="${s.label}" target="_blank" rel="noopener"><i class="${s.icon}"></i></a>`
    ).join('');
  }
}

// --- Menu Rendering & Filtering ---
function formatPrice(value) {
  return `${cfg.currency || '$'}${Number(value).toFixed(0)}`;
}

function renderCategories() {
  // Build category list (Inject 'Favorites' dynamically if localized)
  const cats = ['All', 'Favorites', ...(cfg.categories || [])];
  if ($('#categoryBar')) {
    $('#categoryBar').innerHTML = cats.map(cat => 
      `<button class="category-tab" role="tab" aria-selected="${state.category === cat}" data-category="${cat}">${t(cat)}</button>`
    ).join('');
  }
  
  // Build Dietaries
  const diets = ['All', ...(cfg.dietaryFilters || [])];
  if ($('#dietaryBar')) {
    $('#dietaryBar').innerHTML = diets.map(diet => 
      `<button class="filter-chip ${state.dietary === diet ? 'is-active' : ''}" data-dietary="${diet}">${t(diet)}</button>`
    ).join('');
  }
}

function filteredItems() {
  const q = state.query.toLowerCase();
  return (cfg.menuItems || []).filter(item => {
    // 1. Favorite Filter check
    if (state.category === 'Favorites' && !state.favorites.includes(item.id)) return false;
    
    // 2. Normal Category Check
    const matchCat = (state.category === 'All' || state.category === 'Favorites') || item.category === state.category;
    
    // 3. Dietary
    const matchDiet = state.dietary === 'All' || (item.tags && item.tags.includes(state.dietary));
    
    // 4. Search
    const searchString = `${t(item.name)} ${t(item.description)} ${item.category}`.toLowerCase();
    const matchQuery = !q || searchString.includes(q);
    
    return matchCat && matchDiet && matchQuery;
  });
}

function renderMenu() {
  const items = filteredItems();
  const statusTxt = items.length ? t('showingItems').replace('{n}', items.length) : t('noItems');
  
  if ($('#menuStatus')) $('#menuStatus').textContent = statusTxt;

  const grid = $('#menuGrid');
  if (!grid) return;

  if (!items.length) {
    grid.innerHTML = `<div class="empty-state"><i class="fa-solid fa-plate-wheat"></i><p>${t('noItems')}</p></div>`;
    return;
  }

  grid.innerHTML = items.map((item) => {
    const isFav = state.favorites.includes(item.id);
    const tagsHtml = (item.tags || []).map(tag => `<span class="pill">${t(tag)}</span>`).join('');
    
    return `
    <article class="menu-card reveal filter-enter is-visible" data-id="${item.id}" data-tilt>
      <button class="fav-btn ${isFav ? 'active' : ''}" aria-label="Favorite" data-fav="${item.id}">
        <i class="${isFav ? 'fa-solid' : 'fa-regular'} fa-heart"></i>
      </button>
      <img src="${item.image}" alt="${t(item.name)}" loading="lazy">
      <div class="card-body">
        <div class="card-top"><h3>${t(item.name)}</h3><span class="price">${formatPrice(item.price)}</span></div>
        <p>${t(item.description)}</p>
        <div class="tag-list">
          <span class="pill"><i class="fa-solid fa-tag"></i> ${t(item.category)}</span>
          ${tagsHtml}
        </div>
      </div>
    </article>`
  }).join('');
  
  // Re-initialize animations
  if (typeof initTilt === 'function') initTilt();
  if (typeof observeReveals === 'function') observeReveals();
}

// --- Interactions ---
function toggleFavorite(id, btnElement) {
  const idx = state.favorites.indexOf(id);
  if (idx > -1) {
    state.favorites.splice(idx, 1);
    btnElement.classList.remove('active');
    btnElement.innerHTML = '<i class="fa-regular fa-heart"></i>';
  } else {
    state.favorites.push(id);
    btnElement.classList.add('active');
    btnElement.innerHTML = '<i class="fa-solid fa-heart"></i>';
  }
  localStorage.setItem('urhidu_favs', JSON.stringify(state.favorites));
  if (state.category === 'Favorites') renderMenu();
}

function openModal(item) {
  const name = t(item.name);
  $('#modalImage').src = item.image;
  $('#modalImage').alt = name;
  $('#modalCategory').textContent = `${t(item.category)} • ${formatPrice(item.price)}`;
  $('#modalTitle').textContent = name;
  $('#modalDescription').textContent = t(item.description);
  
  $('#modalMeta').innerHTML = `
    <span><strong>${t('allergens')}:</strong> ${t(item.allergens)}</span>
    <span><strong>${t('pairing')}:</strong> ${t(item.pairing)}</span>
  `;

  // Deep Link Sharing
  const shareUrl = `${window.location.origin}${window.location.pathname}?item=${item.id}`;
  $('#modalShare').onclick = () => {
    if (navigator.share) {
      navigator.share({ title: name, text: t(item.description), url: shareUrl }).catch(e => console.log(e));
    } else {
      navigator.clipboard.writeText(shareUrl);
      alert(t('linkCopied'));
    }
  };

  // Google Form Linking
  if (cfg.googleFormBaseUrl) {
    const reviewUrl = `${cfg.googleFormBaseUrl}&${cfg.googleFormItemEntry}=${encodeURIComponent(name)}`;
    $('#modalReview').href = reviewUrl;
  }

  $('#itemModal').hidden = false;
  document.body.style.overflow = 'hidden';
}

function wireEvents() {
  if ($('#langSwitcher')) {
    $('#langSwitcher').addEventListener('change', (e) => {
      state.lang = e.target.value;
      localStorage.setItem('urhidu_lang', state.lang);
      applyTranslations();
      renderCategories();
      renderMenu();
    });
  }

  if ($('#themeSwitcher')) {
    $('#themeSwitcher').addEventListener('click', () => {
      state.theme = state.theme === 'dark' ? 'light' : 'dark';
      localStorage.setItem('urhidu_theme', state.theme);
      applyTheme();
    });
  }

  const nav = $('#navLinks'), btn = $('#hamburger');
  if (btn && nav) {
    btn.addEventListener('click', () => btn.setAttribute('aria-expanded', nav.classList.toggle('open')));
    $$('#navLinks a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));
  }

  if ($('#categoryBar')) {
    $('#categoryBar').addEventListener('click', e => {
      const b = e.target.closest('.category-tab');
      if (!b) return;
      state.category = b.dataset.category;
      renderCategories(); renderMenu();
    });
  }

  if ($('#dietaryBar')) {
    $('#dietaryBar').addEventListener('click', e => {
      const b = e.target.closest('.filter-chip');
      if (!b) return;
      state.dietary = b.dataset.dietary;
      renderCategories(); renderMenu();
    });
  }

  if ($('#menuSearch')) {
    $('#menuSearch').addEventListener('input', e => { state.query = e.target.value; renderMenu(); });
  }

  if ($('#menuGrid')) {
    $('#menuGrid').addEventListener('click', e => {
      const favBtn = e.target.closest('.fav-btn');
      if (favBtn) {
        e.stopPropagation();
        toggleFavorite(favBtn.dataset.fav, favBtn);
        return;
      }
      const card = e.target.closest('.menu-card');
      if (card) {
        const item = cfg.menuItems.find(i => i.id === card.dataset.id);
        if (item) openModal(item);
      }
    });
  }

  $$('[data-close-modal]').forEach(el => el.addEventListener('click', () => {
    $('#itemModal').hidden = true;
    document.body.style.overflow = '';
  }));
}

function checkDeepLink() {
  const params = new URLSearchParams(window.location.search);
  const itemId = params.get('item');
  if (itemId) {
    const item = cfg.menuItems.find(i => i.id === itemId);
    if (item) {
      setTimeout(() => openModal(item), 500);
    }
    window.history.replaceState({}, document.title, window.location.pathname);
  }
}

// Initialize application
document.addEventListener('DOMContentLoaded', () => {
  bootConfig();
  renderCategories();
  renderMenu();
  wireEvents( );
  checkDeepLink();
  if (typeof setupMotion === 'function') setupMotion();
  
  
  
// --- Universal 1-Tap Copy Logic (Wi-Fi & Payments) ---
  $$('.copy-action').forEach(btn => {
    btn.addEventListener('click', (e) => {
      // Find the ID of the text we want to copy
      const targetId = btn.dataset.target;
      const textElement = $('#' + targetId);
      
      if (textElement) {
        // Strip spaces so banking apps don't throw errors when pasted
        const cleanText = textElement.textContent.replace(/\s/g, '');
        navigator.clipboard.writeText(cleanText);
        
        // Visual feedback: Turn green with a checkmark!
        const originalHtml = btn.innerHTML;
        btn.innerHTML = '<i class="fa-solid fa-check"></i>';
        btn.style.color = '#18C98B';
        btn.style.borderColor = '#18C98B';
        
        // Reset back to normal after 2 seconds
        setTimeout(() => {
          btn.innerHTML = originalHtml;
          btn.style.color = '';
          btn.style.borderColor = '';
        }, 2000);
      }
    });
  });
  
  
});