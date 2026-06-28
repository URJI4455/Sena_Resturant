function observeReveals() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); } });
  }, { threshold: 0.16, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.reveal:not(.is-visible)').forEach((element) => observer.observe(element));
}

function initTilt() {
  document.querySelectorAll('[data-tilt]').forEach((card) => {
    card.onpointermove = (event) => {
      const rect = card.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      card.style.transform = `rotateX(${(-y * 7).toFixed(2)}deg) rotateY(${(x * 7).toFixed(2)}deg) translateY(-6px)`;
    };
    card.onpointerleave = () => { card.style.transform = ''; };
  });
}

function createParticles() {
  const field = document.getElementById('particles');
  if (!field) return;
  field.innerHTML = Array.from({ length: 28 }, (_, index) => `<span class="particle" style="--x:${Math.random() * 100}vw;--y:${Math.random() * 100}vh;--speed:${5 + (index % 8)}s;left:${Math.random() * 100}%;top:${Math.random() * 100}%"></span>`).join('');
}

function initRipples() {
  document.querySelectorAll('.ripple').forEach((button) => button.addEventListener('click', (event) => {
    const dot = document.createElement('span');
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    dot.className = 'ripple-dot';
    dot.style.width = dot.style.height = `${size}px`;
    dot.style.left = `${event.clientX - rect.left - size / 2}px`;
    dot.style.top = `${event.clientY - rect.top - size / 2}px`;
    button.appendChild(dot);
    setTimeout(() => dot.remove(), 650);
  }));
}

function setupMotion() {
  createParticles();
  observeReveals();
  initTilt();
  initRipples();
  window.addEventListener('scroll', () => {
    const visual = document.querySelector('.hero-visual');
    if (visual) visual.style.translate = `0 ${Math.min(window.scrollY * 0.08, 36)}px`;
  }, { passive: true });
}
