const URHIDU_CONFIG = {
  heroImage: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=1400&q=80', // Premium dining table setup
  logoImage: '/Images/sena_logo.jpg',
  currency: 'ETB ', 
  
  // Google Forms Integration for Reviews
  googleFormBaseUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSfS8jOOD7apNDlQU-1QmpdiRYVbkexIq39fSChDg0_mCvu9GQ/viewform?usp=pp_url',
  googleFormItemEntry: 'entry.1088581625=TEST_FOOD',

  // Real-looking social links
  social: [
    { icon: 'fa-brands fa-instagram', label: 'Instagram', url: 'https://instagram.com/urhidu' },
    { icon: 'fa-brands fa-tiktok', label: 'TikTok', url: 'https://tiktok.com/@urhidu' },
    { icon: 'fa-brands fa-facebook-f', label: 'Facebook', url: 'https://facebook.com/urhidu' }
  ], 

  categories: ['Breakfast', 'Burger Dishes', 'Sandwich Dishes', 'Traditional Food', 'Arabian Dishes', 'Beef & Goat Dishes', 'Salad Dishes', 'Chicken & Fish Dishes', 'Soup', 'Other Dishes','Drinks', 'Desserts', 'Extra'],
  
 dietaryFilters: ['Vegetarian', 'Cold Drinks',   'Hot Drinks', 'Vegan', 'Gluten-free', 'Signature', 'Spicy'], 

  // Multi-language Dictionary with FULL STORYTELLING
  dict: {
    // Brand & UI Globals
    restaurantName: { en: 'Sena Restaurant & Cafe', am: 'ሴና ሬስቶራንት ', om: 'Seenaa Reesturant fi Kaaffee' },
    tagline: { en: 'Elevating Hospitality', am: 'የላቀ መስተንግዶ', om: 'Kessummeessuu Olaanaa' },
    footerTagline: { 
      en: 'A sanctuary of luxury and culinary excellence in the heart of the city. Experience world-class dining, every time.', 
      am: 'በከተማው እምብርት የሚገኝ የቅንጦት እና የምግብ ጥበብ ማዕከል። የላቀ መስተንግዶን ዘወትር ይለማመዱ።', 
      om: 'Magaalaa keessatti iddoo jireenya qananii fi aadaa nyaataa addaa. Yeroo hunda tajaajila addunyaa sadarkaa qabu argadhu.' 
    },
    phoneRaw: '+251911000000',
    phone: { en: '+251 911 000 000', am: '+251 911 000 000', om: '+251 911 000 000' },
    todayHours: { en: 'Open 6:00 AM - 11:30 PM', am: 'ከ 12:00 ጠዋት እስከ 5:30 ማታ ክፍት ነው', om: 'Banaa 12:00 ganama - 5:30 halkan' },
    openingHoursShort: { en: 'Daily, 6:00 AM - 11:30 PM', am: 'ዘወትር, 12:00 ጠዋት - 5:30 ማታ', om: 'Guyyaa hunda, 12:00 ganama - 5:30 halkan' },
    address: { en: 'Aliyyi, Jarba, Sabian, Dire Dawa, Ethiopia', am: 'ቦሌ አዲስ አበባ፣ ኢትዮጵያ', om: 'Kutaa Bolee, Finfinnee, Itoophiyaa' },
    
    // Detailed Storytelling Paragraphs
    eyebrowHero: { en: 'A Journey of Taste', am: 'የጣዕም ጉዞ', om: 'Imala Dhandhamaa' },
    heroEm: { en: 'Digital Menu', am: 'ዲጂታል ሜኑ', om: 'Baafata Digital'},
    heroCopy: { 
      en: 'Welcome to Sena Restaurant. Our mission is to serve you exceptional, freshly prepared dishes paired with a modern, seamless experience. Explore our curated menu and let us elevate your meal today.', 
      am: 'እንኳን ወደ ሴና ሬስቶራንት በሰላም መጡ። ዓላማችን ዘመናዊ እና ምቹ በሆነ አቀራረብ፣ ልዩ እና ትኩስ ምግቦችን ለእርስዎ ማቅረብ ነው። የተመረጡ አማራጮቻችንን በመቃኘት የምግብ ጊዜዎን ዛሬውኑ ልዩ ያድርጉት።', 
      
      om: 'Baga gara Sena Restaurant nagaan dhuftan. Kaayyoon keenya tajaajila ammayyaa fi salphaa ta\'een, nyaata addaa fi haaraa qophaa\'e isiniif dhiyeessudha. Filannoowwan qophaa\'an daawwachuun har\'a tursiisa keessan adda taasisaa.' 
    },
    eyebrowMenu: { en: 'Curated selection', am: 'የተመረጡ ምግቦች', om: 'Filannoo Addaa' },
    menuTitle: { en: 'Explore the Menu', am: 'ሜኑውን ያስሱ', om: 'Baafata Qoradhu' },
    menuSub: { en: 'Search, filter by category, or view your saved favorites to find your perfect meal.', am: 'ምግብ ይፈልጉ፣ በምድብ ይለዩ፣ ወይም ተመራጭ ምግቦችዎን ይመልከቱ።', om: 'Nyaata barbaadi, ramaddiin filadhu, ykn nyaata filatte ilaali.' },
    btnViewMenu: { en: 'View Menu', am: 'ሜኑ ይመልከቱ', om: ' Gosa Nyaataa Ilaali' },
    
    eyebrowAbout: { en: 'Our Story', am: 'የእኛ ታሪክ', om: 'Seenaa Keenya' },
    aboutTitle: { en: 'Crafting Culinary Memories', am: 'የማይረሳ የምግብ ጥበብ', om: 'Seenaa Nyaataa Uumuu' },
    aboutText: { 
      en: 'At Urhidu, dining is more than just food—it is an immersion into culture. Our culinary team seamlessly bridges Ethiopian heritage with international gastronomy. From farm-fresh organic ingredients sourced from local highlands to precise modern plating, we deliver an unforgettable ambiance and flavors that linger long after your stay.', 
      am: 'በኡርሂዱ፣ መመገብ ከምግብነት ባለፈ ከባህል ጋር መዋሃድ ነው። የምግብ ባለሙያዎቻችን የኢትዮጵያን ባህል ከአለም አቀፍ የምግብ አሰራር ጋር በሚያምር ሁኔታ ያዋህዳሉ። ከአካባቢው አርሶ አደሮች ከሚመጡ ትኩስ ግብዓቶች ጀምሮ እስከ ዘመናዊ አቀራረብ ድረስ፣ የማይረሳ ድባብ እና ጣዕም እናቀርባለን።', 
      om: 'Urhidu keessatti, nyaachuun nyaata qofa osoo hin taane, aadaa keessa lixuudha. Ogeeyyiin keenya aadaa Itoophiyaa fi nyaata addunyaa walitti fidu. Midhaan haaraa qonnaan bultoota irraa argamu irraa eegalee hanga dhiyeessa ammayyaatti, haala fi dhandhama yeroo dheeraaf sammuu keessatti hafu isiniif dhiyeessina.' 
    },
    stat1: { en: 'Locally Sourced', am: 'ከሀገር በቀል አምራቾች', om: 'Biyya Keessaa Fudhatame' },
    stat1Sub: { en: '100% Organic ingredients', am: '100% ተፈጥሯዊ ግብዓቶች', om: '100% Uumamaa' },
    stat2: { en: 'Award Winning', am: 'ተሸላሚ', om: 'Badhaafamaa' },
    stat2Sub: { en: 'Master Chefs & Mixologists', am: 'ምርጥ የምግብ እና የመጠጥ ባለሙያዎች', om: 'Ogeeyyii Nyaataa fi Dhugaatii' },
    
    eyebrowContact: { en: 'Reservations & Info', am: 'ቦታ ማስያዝ እና መረጃ', om: 'Iddoo Qabachuu fi Odeeffannoo' },
    contactTitle: { en: 'Get in Touch', am: 'ያግኙን', om: 'Nu Quunnamaa' },
    contactPhone: { en: 'Call Us', am: 'ይደውሉልን', om: 'Nuuf Bilbilaa' },
    contactLocation: { en: 'Location', am: 'አድራሻ', om: 'Iddoo' },
    contactHours: { en: 'Hours', am: 'የስራ ሰዓት', om: 'Sa\'aatii Hojii' },

    // UI Elements
    navMenu: { en: 'Menu', am: 'ሜኑ', om: 'Baafata' },
    navAbout: { en: 'About', am: 'ስለ እኛ', om: 'Waa\'ee keenya' },
    navContact: { en: 'Contact', am: 'አድራሻ', om: 'Teessoo' },
    navPayment: { en: 'Payment', am: 'ክፍያ', om: 'Kaffaltii' },
    navWifi: { en: 'Wi-Fi', am: 'Wi-Fi', om: 'Wi-Fi' },
    All: { en: 'All Items', am: 'ሁሉም', om: 'Hunda' },
    Favorites: { en: 'Favorites', am: 'ተመራጮች', om: 'Filatamoo' },
    searchPlaceholder: { en: 'Search dishes, drinks...', am: 'ምግብ፣ መጠጥ ይፈልጉ...', om: 'Nyaata, dhugaatii barbaadi...' },
    showingItems: { en: 'Showing {n} items', am: '{n} ምግቦች ተገኝተዋል', om: 'Wantoota {n} agarsiisaa jira' },
    noItems: { en: 'No items match your filters.', am: 'የሚዛመድ ምግብ አልተገኘም።', om: 'Wanti ati barbaadde hin argamne.' },
    linkCopied: { en: 'Link copied!', am: 'ሊንኩ ተቀድቷል!', om: 'Liinkii garagalfameera!' },
    
    // Modals & Buttons
    allergens: { en: 'Allergens', am: 'አለርጂዎች', om: 'Alerjiikii' },
    pairing: { en: 'Best Paired With', am: 'ከምን ጋር ይጣመራል', om: 'Waan wajjin fudhatamu' },
    btnOrder: { en: 'Order', am: 'ይዘዙ', om: 'ajajadhu' },
    btnShare: { en: 'Share', am: 'አጋራ', om: 'Qoodi' },
    btnReview: { en: 'Rate Dish', am: 'ደረጃ ይስጡ', om: 'Madaali' },
    
    
    
    




// Add these inside the dict: { ... } object in config.js
    wifiTitle: { en: 'Guest Wi-Fi', am: 'ነፃ ዋይፋይ', om: 'Wi-Fi Keessummaa' },
    paymentTitle: { en: 'Accepted Payments', am: 'የክፍያ አማራጮች', om: 'Kaffaltii Fudhatamuu' },
    wifiID: { en: 'Urhidu_Guest_5G', am: 'Urhidu_Guest_5G', om: 'Urhidu_Guest_5G' },
    wifiPass: { en: 'Urhidu2026', am: 'Urhidu2026', om: 'Urhidu2026' },





    
    // Categories Translated
    Breakfast: { en: 'Breakfast', am: 'ቁርስ', om: 'Ciree' },
    Lunch: { en: 'Lunch', am: 'ምሳ', om: 'Laaqana' },
    Dinner: { en: 'Dinner', am: 'እራት', om: 'Irbaata' },
    Drinks: { en: 'Drinks', am: 'መጠጦች', om: 'Dhugaatii' },
    Desserts: { en: 'Desserts', am: 'ጣፋጭ', om: 'Dhandhama' },
    
    // Dietary Translated
    Vegetarian: { en: 'Vegetarian', am: 'የፆም', om: 'Nyaata Biqiltuu' },
    Vegan: { en: 'Vegan', am: 'ቪጋን', om: 'Viigaan' },
    Hotdrinks: { en: 'Hot Drinks', am: 'ትኩስ መጠጦች', om: 'Dhugaatii Oowwaa' },
    Colddrinks: { en: 'Cold Drinks', am: 'ቀዝቃዛ መጠጦች', om: 'Dhugaatii Qabbanaawaa' },
    'Gluten-free': { en: 'Gluten-Free', am: 'ግሉተን-ነፃ', om: 'Guluuteen-Bilisummaa' },
    Signature: { en: 'Signature', am: 'ልዩ', om: 'Adda' },
    Spicy: { en: 'Spicy', am: 'የሚያቃጥል', om: 'Mimi\'aawaa' }
  },












  // 24 AUTO-COMPLETED FULL MENU ITEMS
  menuItems: [
    /* ================= BREAKFAST (17) ================= */
    { 
      id: 'b1', category: 'Breakfast', 
      name: { en: 'Scrabbled Egg', am: '', om: '' }, 
      description: {
        en: '',
        am: '',
        om: ''
      },
      price: 250, tags: ['', ''], allergens: { en: '', am: '', om: '' }, 
      pairing: { en: '', am: '', om: '' },
      image: '/Images/b1.jpg' 
    },
    { 
      id: 'b2', category: 'Breakfast', 
      name: { en: 'Scrabbled Egg With Meat', am: '', om: '' }, 
      description: {
        en: '',
        am: '',
        om: ''
      },
      price: 350, tags: ['', ''], allergens: { en: '', am: '', om: '' }, 
      pairing: { en: '', am: '', om: '' },
      image: '/Images/b2.jpg' 
    },
    { 
      id: 'b3', category: 'Breakfast', 
      name: { en: 'Scrabbled Egg With Tomato Sauce', am: '', om: '' }, 
      description: {
        en: '',
        am: '',
        om: ''
      },
      price: 300, tags: ['', ''], allergens: { en: '', am: '', om: '' }, 
      pairing: { en: '', am: '', om: '' },
      image: '/Images/b3.jpg' 
    },
    { 
      id: 'b4', category: 'Breakfast', 
      name: { en: 'Full', am: '', om: '' }, 
      description: {
        en: '',
        am: '',
        om: ''
      },
      price: 200, tags: ['', ''], allergens: { en: '', am: '', om: '' }, 
      pairing: { en: '', am: '', om: '' },
      image: '' 
    },
    { 
      id: 'b5', category: 'Breakfast', 
      name: { en:'Full With Tuna', am: '', om: '' }, 
      description: {
        en: '',
        am: '',
        om: ''
      },
      price: 350, tags: ['', ''], allergens: { en: '', am: '', om: '' }, 
      pairing: { en: '', am: '', om: '' },
      image: '' 
    },



    { 
      id: 'b6', category: 'Breakfast', 
      name: { en: 'Full With Egg', am: '', om: '' }, 
      description: {
        en: '',
        am: '',
        om: ''
      },
      price: 300, tags: ['', ''], allergens: { en: '', am: '', om: '' }, 
      pairing: { en: '', am: '', om: '' },
      image: '' 
    },


{ 
      id: 'b7', category: 'Breakfast', 
      name: { en: 'Special Full', am: '', om: '' }, 
      description: {
        en: '',
        am: '',
        om: ''
      },
      price: 330, tags: ['', ''], allergens: { en: '', am: '', om: '' }, 
      pairing: { en: '', am: '', om: '' },
      image: '' 
    },
    
    
    { 
      id: 'b8', category: 'Breakfast', 
      name: { en: 'Omelet', am: '', om: '' }, 
      description: {
        en: '',
        am: '',
        om: ''
      },
      price: 250, tags: ['', ''], allergens: { en: '', am: '', om: '' }, 
      pairing: { en: '', am: '', om: '' },
      image:'/Images/b8.jpg'
    },
    
    
    
    { 
      id: 'b9', category: 'Breakfast', 
      name: { en: ' Special Omlet', am: '', om: '' }, 
      description: {
        en: '',
        am: '',
        om: ''
      },
      price: 380, tags: ['', ''], allergens: { en: '', am: '', om: '' }, 
      pairing: { en: '', am: '', om: '' },
      image: '' 
    },
    
    
    
    { 
      id: 'b10', category: 'Breakfast', 
      name: { en: ' Melewa', am: '', om: '' }, 
      description: {
        en: '',
        am: '',
        om: ''
      },
      price: 190, tags: ['', ''], allergens: { en: '', am: '', om: '' }, 
      pairing: { en: '', am: '', om: '' },
      image: '/Images/b10.jpg' 
    },
    
    
    
    { 
      id: 'b11', category: 'Breakfast', 
      name: { en: ' Fetira With Egg', am: '', om: '' }, 
      description: {
        en: '',
        am: '',
        om: ''
      },
      price: 230, tags: ['', ''], allergens: { en: '', am: '', om: '' }, 
      pairing: { en: '', am: '', om: '' },
      image: '/Images/b11.jpg' 
    },



{ 
      id: 'b12', category: 'Breakfast', 
      name: { en: 'Chechebsa', am: '', om: '' }, 
      description: {
        en: '',
        am: '',
        om: ''
      },
      price: 190, tags: ['', ''], allergens: { en: '', am: '', om: '' }, 
      pairing: { en: '', am: '', om: '' },
      image: '/Images/b12.jpeg' 
    },



{ 
      id: 'b13', category: 'Breakfast', 
      name: { en: 'Fasting Firfir', am: '', om: '' }, 
      description: {
        en: '',
        am: '',
        om: ''
      },
      price: 250, tags: ['', ''], allergens: { en: '', am: '', om: '' }, 
      pairing: { en: '', am: '', om: '' },
      image: '/Images/b13.jpeg' 
    },
    
    
    
    { 
      id: 'b14', category: 'Breakfast', 
      name: { en: 'Sega Firfir', am: '', om: '' }, 
      description: {
        en: '',
        am: '',
        om: ''
      },
      price: 380, tags: ['', ''], allergens: { en: '', am: '', om: '' }, 
      pairing: { en: '', am: '', om: '' },
      image: '/Images/b14.jpeg' 
    },
    
    
    
    
    { 
      id: 'b15', category: 'Breakfast', 
      name: { en: 'Quanta Firfir', am: '', om: '' }, 
      description: {
        en: '',
        am: '',
        om: ''
      },
      price: 400, tags: ['', ''], allergens: { en: '', am: '', om: '' }, 
      pairing: { en: '', am: '', om: '' },
      image: '/Images/b15.jpg' 
    },
    
    
    
    
    
    { 
      id: 'b16', category: 'Breakfast', 
      name: { en: 'Tibs Firfir', am: '', om: '' }, 
      description: {
        en: '',
        am: '',
        om: ''
      },
      price: 380, tags: ['', ''], allergens: { en: '', am: '', om: '' }, 
      pairing: { en: '', am: '', om: '' },
      image: '' 
    },
    
    
    
    
    
    { 
      id: 'b17', category: 'Breakfast', 
      name: { en: 'Tuna Firfir', am: '', om: '' }, 
      description: {
        en: '',
        am: '',
        om: ''
      },
      price: 500, tags: ['', ''], allergens: { en: '', am: '', om: '' }, 
      pairing: { en: '', am: '', om: '' },
      image: '/Images/b17.jpg' 
    },
    
    


    /* =================BURGER DISHES (8 ITEMS) ================= */
    { 
      id: 'bd1', category: 'Burger Dishes', 
      name: { en: 'Beef Burger', am: '', om: '' }, 
      description: {
        en: '',
        am: '',
        om: ''
      },
      price: 550, tags: ['Burger',''], allergens: { en: '', am: '', om: '' }, 
      pairing: { en: '', am: '', om: '' },
      image: '/Images/bd1.jpg' 
    },
    
     { 
      id: 'bd2', category: 'Burger Dishes', 
      name: { en: 'Cheese Burger', am: '', om: '' }, 
      description: {
        en: '',
        am: '',
        om: ''
      },
      price: 850, tags: ['Burger',''], allergens: { en: '', am: '', om: '' }, 
      pairing: { en: '', am: '', om: '' },
      image: '/Images/bd2.jpeg'
    },
    
    
   { 
      id: 'bd3', category: 'Burger Dishes', 
      name: { en: 'Double Burger', am: '', om: '' }, 
      description: {
        en: '',
        am: '',
        om: ''
      },
      price: 850, tags: ['Burger',''], allergens: { en: '', am: '', om: '' }, 
      pairing: { en: '', am: '', om: '' },
      image: '/Images/bd3.webp' 
    },


    { 
      id: 'bd4', category: 'Burger Dishes', 
      name: { en: 'Sena Special Burger', am: '', om: '' }, 
      description: {
        en: '',
        am: '',
        om: ''
      },
      price: 830, tags: ['Burger',''], allergens: { en: '', am: '', om: '' }, 
      pairing: { en: '', am: '', om: '' },
      image: '' 
    },
    
    
   { 
      id: 'bd5', category: 'Burger Dishes', 
      name: { en: 'Grilled Chicken Burger', am: '', om: '' }, 
      description: {
        en: '',
        am: '',
        om: ''
      },
      price: 680, tags: ['Burger',''], allergens: { en: '', am: '', om: '' }, 
      pairing: { en: '', am: '', om: '' },
      image: '/Images/bd5.jpg' 
    },
    
    
    { 
      id: 'bd6', category: 'Burger Dishes', 
      name: { en: 'Fried Chicken  Burger', am: '', om: '' }, 
      description: {
        en: '',
        am: '',
        om: ''
      },
      price: 700, tags: ['Burger',''], allergens: { en: '', am: '', om: '' }, 
      pairing: { en: '', am: '', om: '' },
      image: '/Images/bd6.jpeg' 
    },
    
    
    
    
    { 
      id: 'bd7', category: 'Burger Dishes', 
      name: { en: 'Tuna Burger', am: '', om: '' }, 
      description: {
        en: '',
        am: '',
        om: ''
      },
      price: 600, tags: ['Burger',''], allergens: { en: '', am: '', om: '' }, 
      pairing: { en: '', am: '', om: '' },
      image: '/Images/bd7.jpeg' 
    },
    
    { 
      id: 'bd8', category: 'Burger Dishes', 
      name: { en: 'French Fries', am: '', om: '' }, 
      description: {
        en: '',
        am: '',
        om: ''
      },
      price: 270, tags: ['',''], allergens: { en: '', am: '', om: '' }, 
      pairing: { en: '', am: '', om: '' },
      image: '/Images/bd8.jpg' 
    },

    /* ================= SANDWICH DISHES (6 ITEMS) ================= */

{ 
      id: 'swd1', category: 'Sandwich Dishes', 
      name: { en: 'Tuna Sandwich', am: '', om: '' }, 
      description: {
        en: '',
        am: '',
        om: ''
      },
      price: 550, tags: [], allergens: { en: '', am: '', om: '' }, 
      pairing: { en: '', am: '', om: '' },
      image: '/Images/swd1.jpeg' 
    },

{ 
      id: 'swd2', category: 'Sandwich Dishes', 
      name: { en: 'Egg Sandwich', am: '', om: '' }, 
      description: {
        en: '',
        am: '',
        om: ''
      },
      price: 380, tags: [], allergens: { en: '', am: '', om: '' }, 
      pairing: { en: '', am: '', om: '' },
      image: '/Images/swd2.jpeg' 
    },

  { 
      id: 'swd3', category: 'Sandwich Dishes', 
      name: { en: 'Fish Sandwich', am: '', om: '' }, 
      description: {
        en: '',
        am: '',
        om: ''
      },
      price: 500, tags: [], allergens: { en: '', am: '', om: '' }, 
      pairing: { en: '', am: '', om: '' },
      image: '/Images/swd3.jpg' 
    },
    
    
    { 
      id: 'swd4', category: 'Sandwich Dishes', 
      name: { en: 'Steak Sandwich', am: '', om: '' }, 
      description: {
        en: '',
        am: '',
        om: ''
      },
      price: 550, tags: [], allergens: { en: '', am: '', om: '' }, 
      pairing: { en: '', am: '', om: '' },
      image: '/Images/swd4.jpg' 
    },

{ 
      id: 'swd5', category: 'Sandwich Dishes', 
      name: { en: 'Vegetable Sandwich', am: '', om: '' }, 
      description: {
        en: '',
        am: '',
        om: ''
      },
      price: 400, tags: [], allergens: { en: '', am: '', om: '' }, 
      pairing: { en: '', am: '', om: '' },
      image: '/Images/swd5.jpeg' 
    },


{ 
      id: 'swd6', category: 'Sandwich Dishes', 
      name: { en: 'Club Sandwich', am: '', om: '' }, 
      description: {
        en: '',
        am: '',
        om: ''
      },
      price: 680, tags: [], allergens: { en: '', am: '', om: '' }, 
      pairing: { en: '', am: '', om: '' },
      image: '/Images/swd6.jpeg' 
    },





    /* ================= OTHER DISHES (15 ITEMS) ================= */
    { 
      id: 'od1', category: 'Other Dishes', 
      name: { en: 'Spaghetti With Meat Sauce', am: '', om: '' }, 
      description: {
        en: '',
        am: '',
        om: ''
      },
      price: 450, tags: [], allergens: { en: '', am: '', om: '' }, 
      pairing: { en: '', am: '', om: '' },
      image: '/Images/od1.jpg' 
    },
    
    
    { 
      id: 'od2', category: 'Other Dishes', 
      name: { en: 'Spaghetti With Tomato Sauce', am: '', om: '' }, 
      description: {
        en: '',
        am: '',
        om: ''
      },
      price: 450, tags: [], allergens: { en: '', am: '', om: '' }, 
      pairing: { en: '', am: '', om: '' },
      image: '/Images/od2.jpg' 
    },
    
    
    
    { 
      id: 'od3', category: 'Other Dishes', 
      name: { en: 'Spaghetti With Vegetable', am: '', om: '' }, 
      description: {
        en: '',
        am: '',
        om: ''
      },
      price: 380, tags: [], allergens: { en: '', am: '', om: '' }, 
      pairing: { en: '', am: '', om: '' },
      image: '/Images/od3.jpeg' 
    },
    
    
    
    { 
      id: 'od4', category: 'Other Dishes', 
      name: { en: 'Spaghetti With Tuna', am: '', om: '' }, 
      description: {
        en: '',
        am: '',
        om: ''
      },
      price: 500, tags: [], allergens: { en: '', am: '', om: '' }, 
      pairing: { en: '', am: '', om: '' },
      image: '/Images/od4.jpg' 
    },
    
    
    { 
      id: 'od5', category: 'Other Dishes', 
      name: { en: 'Rice With Meat Sauce', am: '', om: '' }, 
      description: {
        en: '',
        am: '',
        om: ''
      },
      price: 450, tags: [], allergens: { en: '', am: '', om: '' }, 
      pairing: { en: '', am: '', om: '' },
      image:'/Images/od5.jpg'
    },
    
    
{ 
      id: 'od6', category: 'Other Dishes', 
      name: { en: 'Rice With Tomato Sauce', am: '', om: '' }, 
      description: {
        en: '',
        am: '',
        om: ''
      },
      price: 350, tags: [], allergens: { en: '', am: '', om: '' }, 
      pairing: { en: '', am: '', om: '' },
      image:'/Images/od6.jpeg'
    },
    
    { 
      id: 'od7', category: 'Other Dishes', 
      name: { en: 'Rice With Vegetable', am: '', om: '' }, 
      description: {
        en: '',
        am: '',
        om: ''
      },
      price: 450, tags: [], allergens: { en: '', am: '', om: '' }, 
      pairing: { en: '', am: '', om: '' },
      image:'/Images/od7.jpg'
    },
    
    
   { 
      id: 'od8', category: 'Other Dishes', 
      name: { en: 'Rice With Tuna ', am: '', om: '' }, 
      description: {
        en: '',
        am: '',
        om: ''
      },
      price: 500, tags: [], allergens: { en: '', am: '', om: '' }, 
      pairing: { en: '', am: '', om: '' },
      image: '/Images/od8.jpeg' 
    },
    

{ 
      id: 'od9', category: 'Other Dishes', 
      name: { en: 'Penne With Meat Sauce', am: '', om: '' }, 
      description: {
        en: '',
        am: '',
        om: ''
      },
      price: 450, tags: [], allergens: { en: '', am: '', om: '' }, 
      pairing: { en: '', am: '', om: '' },
      image: '/Images/od9.jpg' 
    },
    
    
    { 
      id: 'od10', category: 'Other Dishes', 
      name: { en: 'Penne With Tomato Sauce', am: '', om: '' }, 
      description: {
        en: '',
        am: '',
        om: ''
      },
      price: 350, tags: [], allergens: { en: '', am: '', om: '' }, 
      pairing: { en: '', am: '', om: '' },
      image: '/Images/od10.jpeg' 
    },
    
    
    { 
      id: 'od11', category: 'Other Dishes', 
      name: { en: 'Penne With Vegetable', am: '', om: '' }, 
      description: {
        en: '',
        am: '',
        om: ''
      },
      price: 350, tags: [], allergens: { en: '', am: '', om: '' }, 
      pairing: { en: '', am: '', om: '' },
      image: '/Images/od11.jpeg' 
    },
    
    
    { 
      id: 'od12', category: 'Other Dishes', 
      name: { en: 'Penne With Tuna', am: '', om: '' }, 
      description: {
        en: '',
        am: '',
        om: ''
      },
      price: 500, tags: [], allergens: { en: '', am: '', om: '' }, 
      pairing: { en: '', am: '', om: '' },
      image: '/Images/od12.jpg' 
    },
    
    
        /* ================= ARABIAN DISHES ========================== */
    { 
      id: 'ad1', category: 'Arabian Dishes', 
      name: { en: 'Full Hanid', am: '', om: '' }, 
      description: {
        en: '',
        am: '',
        om: ''
      },
      price: 2400, tags: [], allergens: { en: '', am: '', om: '' }, 
      pairing: { en: '', am: '', om: '' },
      image: '/Images/ad1.jpg' 
    },
    
    
{ 
      id: 'ad2', category: 'Arabian Dishes', 
      name: { en: 'Half Hanid', am: '', om: '' }, 
      description: {
        en: '',
        am: '',
        om: ''
      },
      price: 1200, tags: [], allergens: { en: '', am: '', om: '' }, 
      pairing: { en: '', am: '', om: '' },
      image: '/Images/ad2.jpg' 
    },
    
    
    { 
      id: 'ad3', category: 'Arabian Dishes', 
      name: { en: 'Full Chicken', am: '', om: '' }, 
      description: {
        en: '',
        am: '',
        om: ''
      },
      price: 2600, tags: [], allergens: { en: '', am: '', om: '' }, 
      pairing: { en: '', am: '', om: '' },
      image: '/Images/ad3.jpg' 
    },
    
    
    { 
      id: 'ad4', category: 'Arabian Dishes', 
      name: { en: 'Half Chicken', am: '', om: '' }, 
      description: {
        en: '',
        am: '',
        om: ''
      },
      price: 1400, tags: [], allergens: { en: '', am: '', om: '' }, 
      pairing: { en: '', am: '', om: '' },
      image: '/Images/ad4.jpg' 
    },
    
    
        /* ================= BEEF AND GOAT DISH CATEGORY ========================== */
    
    { 
      id: 'bdg1', category: 'Beef & Goat Dishes', 
      name: { en: ' Beef Tibs', am: '', om: '' }, 
      description: {
        en: '',
        am: '',
        om: ''
      },
      price: 700, tags: [], allergens: { en: '', am: '', om: '' }, 
      pairing: { en: '', am: '', om: '' },
      image: '/Images/bgd1.jpg' 
    },
    
    
    
  { 
      id: 'bdg2', category: 'Beef & Goat Dishes', 
      name: { en: 'Beef Cutlet', am: '', om: '' }, 
      description: {
        en: '',
        am: '',
        om: ''
      },
      price: 800, tags: [], allergens: { en: '', am: '', om: '' }, 
      pairing: { en: '', am: '', om: '' },
      image: '/Images/bdg2.jpeg' 
    },
    
    
    { 
      id: 'bgd3', category: 'Beef & Goat Dishes', 
      name: { en: 'Beef Goulash', am: '', om: '' }, 
      description: {
        en: '',
        am: '',
        om: ''
      },
      price: 880, tags: [], allergens: { en: '', am: '', om: '' }, 
      pairing: { en: '', am: '', om: '' },
      image: '/Images/bdg3.jpeg' 
    },
    
    
    { 
      id: 'bgd4', category: 'Beef & Goat Dishes', 
      name: { en: 'Derek Tibs', am: '', om: '' }, 
      description: {
        en: '',
        am: '',
        om: ''
      },
      price: 750, tags: [], allergens: { en: '', am: '', om: '' }, 
      pairing: { en: '', am: '', om: '' },
      image: '/Images/bdg4.jpeg' 
    },
    
    
    { 
      id: 'bgd5', category: 'Beef & Goat Dishes', 
      name: { en: 'Goat Tibs', am: '', om: '' }, 
      description: {
        en: '',
        am: '',
        om: ''
      },
      price: 750, tags: [], allergens: { en: '', am: '', om: '' }, 
      pairing: { en: '', am: '', om: '' },
      image: '/Images/bdg5.jpg' 
    },
    

    /* ================= DRINKS SUPER CATEGORY ========================== */
    
    
    // COLD DRINKS (5 ITEMS)
    { 
      id: 'dr1', category: 'Drinks', 
      name: { en: 'Soft Drink', am: '', om: '' }, 
      description: {
        en: '',
        am: '',
        om: ''
      },
      price: 50, tags: ['', ''], allergens: { en: '', am: '', om: '' }, 
      pairing: { en: '', am: '', om: '' },
      image: '/Images/dr1.jpg' 
    },
    
    { 
      id: 'dr2', category: 'Drinks', 
      name: { en: 'Ambo Water', am: '', om: '' }, 
      description: {
        en: '',
        am: '',
        om: ''
      },
      price: 50, tags: ['', ''], allergens: { en: '', am: '', om: '' }, 
      pairing: { en: '', am: '', om: '' },
      image: '/Images/dr2.jpeg' 
    },
    
    { 
      id: 'dr3', category: 'Drinks', 
      name: { en: 'Water 0.5L', am: '', om: '' }, 
      description: {
        en: '',
        am: '',
        om: ''
      },
      price: 40, tags: ['', ''], allergens: { en: '', am: '', om: '' }, 
      pairing: { en: '', am: '', om: '' },
      image: '' 
    },
    
    { 
      id: 'dr4', category: 'Drinks', 
      name: { en: 'Water 1L', am: '', om: '' }, 
      description: {
        en: '',
        am: '',
        om: ''
      },
      price: 50, tags: ['', ''], allergens: { en: '', am: '', om: '' }, 
      pairing: { en: '', am: '', om: '' },
      image: '' 
    },
    
    
       { 
      id: 'dr5', category: 'Drinks', 
      name: { en:'Water 2L', am: '', om: '' }, 
      description: {
        en: '',
        am: '',
        om: ''
      },
      price: 60, tags: ['', ''], allergens: { en: '', am: '', om: '' }, 
      pairing: { en: '', am: '', om: '' },
      image:''
    },
    
    
   // HOT DRINKS (16 ITEMS)
    
       { 
      id: 'dr6', category: 'Drinks', 
      name: { en: ' Traditional Coffee', am: '', om: '' }, 
      description: {
        en: '',
        am: '',
        om: ''
      },
      price: 40, tags: ['Hot Drink', ''], allergens: { en: '', am: '', om: '' }, 
      pairing: { en: '', am: '', om: '' },
      image: '' 
    },
    
    
       { 
      id: 'dr7', category: 'Drinks', 
      name: { en: 'Tea', am: '', om: '' }, 
      description: {
        en: '',
        am: '',
        om: ''
      },
      price: 30, tags: ['Hot Drink', ''], allergens: { en: '', am: '', om: '' }, 
      pairing: { en: '', am: '', om: '' },
      image: '/Images/dr7.jpg' 
    },
    
       { 
      id: 'dr8', category: 'Drinks', 
      name: { en:'Special Tea', am: '', om: '' }, 
      description: {
        en: '',
        am: '',
        om: ''
      },
      price: 50, tags: ['Hot Drink', ''], allergens: { en: '', am: '', om: '' }, 
      pairing: { en: '', am: '', om: '' },
      image: '/Images/dr8.webp' 
    },
    
       { 
      id: 'dr9', category: 'Drinks', 
      name: { en: 'Tea With Coffee', am: '', om: '' }, 
      description: {
        en: '',
        am: '',
        om: ''
      },
      price: 50, tags: ['Hot Drink', ''], allergens: { en: '', am: '', om: '' }, 
      pairing: { en: '', am: '', om: '' },
      image: '/Images/dr9.jpg' 
    },
    
    
       { 
      id: 'dr10', category: 'Drinks', 
      name: { en: 'Green Tea', am: '', om: '' }, 
      description: {
        en: '',
        am: '',
        om: ''
      },
      price: 50, tags: ['Hot Drink', ''], allergens: { en: '', am: '', om: '' }, 
      pairing: { en: '', am: '', om: '' },
      image: '/Images/dr10.jpg' 
    },
    
       { 
      id: 'dr11', category: 'Drinks', 
      name: { en: 'Ginger Tea', am: '', om: '' }, 
      description: {
        en: '',
        am: '',
        om: ''
      },
      price: 50, tags: ['Hot Drink', ''], allergens: { en: '', am: '', om: '' }, 
      pairing: { en: '', am: '', om: '' },
      image:'/Images/dr11.jpeg'
    },
    
    
       { 
      id: 'dr12', category: 'Drinks', 
      name: { en: 'Ginger With Milk', am: '', om: '' }, 
      description: {
        en: '',
        am: '',
        om: ''
      },
      price: 60, tags: ['Hot Drink', ''], allergens: { en: '', am: '', om: '' }, 
      pairing: { en: '', am: '', om: '' },
      image: '/Images/dr12.jpg' 
    },
    
    
       { 
      id: 'dr13', category: 'Drinks', 
      name: { en: 'Coffee', am: '', om: '' }, 
      description: {
        en: '',
        am: '',
        om: ''
      },
      price: 40, tags: ['Hot Drink', ''], allergens: { en: '', am: '', om: '' }, 
      pairing: { en: '', am: '', om: '' },
      image:''
    },
    
    
       { 
      id: 'dr14', category: 'Drinks', 
      name: { en: 'Milk', am: '', om: '' }, 
      description: {
        en: '',
        am: '',
        om: ''
      },
      price: 60, tags: ['Hot Drink', ''], allergens: { en: '', am: '', om: '' }, 
      pairing: { en: '', am: '', om: '' },
      image: '' 
    },
    
    
       { 
      id: 'dr15', category: 'Drinks', 
      name: { en:'Makiyato', am: '', om: '' }, 
      description: {
        en: '',
        am: '',
        om: ''
      },
      price: 80, tags: ['Hot Drink', ''], allergens: { en: '', am: '', om: '' }, 
      pairing: { en: '', am: '', om: '' },
      image: '/Images/dr15.webp' 
    },
    
       { 
      id: 'dr16', category: 'Drinks', 
      name: { en: 'Milk With Coffee', am: '', om: '' }, 
      description: {
        en: '',
        am: '',
        om: ''
      },
      price: 60, tags: ['Hot Drink', ''], allergens: { en: '', am: '', om: '' }, 
      pairing: { en: '', am: '', om: '' },
      image: '/Images/dr16.jpg' 
    },
    
    
       { 
      id: 'dr17', category: 'Drinks', 
      name: { en: 'Milk With Tea', am: '', om: '' }, 
      description: {
        en: '',
        am: '',
        om: ''
      },
      price: 60, tags: ['Hot Drink', ''], allergens: { en: '', am: '', om: '' }, 
      pairing: { en: '', am: '', om: '' },
      image: '/Images/dr17.jpg' 
    },
    
       { 
      id: 'dr18', category: 'Drinks', 
      name: { en:'Peanut Tea', am: '', om: '' }, 
      description: {
        en: '',
        am: '',
        om: ''
      },
      price: 70, tags: ['Hot Drink', ''], allergens: { en: '', am: '', om: '' }, 
      pairing: { en: '', am: '', om: '' },
      image: '/Images/dr18.jpg' 
    },
    
       { 
      id: 'dr19', category: 'Drinks', 
      name: { en:'Peanut With Milk', am: '', om: '' }, 
      description: {
        en: '',
        am: '',
        om: ''
      },
      price: 70, tags: ['Hot Drink', ''], allergens: { en: '', am: '', om: '' }, 
      pairing: { en: '', am: '', om: '' },
      image: '/Images/dr19.jpeg' 
    },

// JUICE AND MILKSHAKES (16 ITEMS)

   { 
      id: 'dr20', category: 'Drinks', 
      name: { en: 'Papaya Juice', am: '', om: '' }, 
      description: {
        en: '',
        am: '',
        om: ''
      },
      price: 200, tags: ['Juice', ''], allergens: { en: '', am: '', om: '' }, 
      pairing: { en: '', am: '', om: '' },
      image: '/Images/dr20.jpeg' 
    },
    
    
       { 
      id: 'dr21', category: 'Drinks', 
      name: { en: ' Papaya Milkshake', am: '', om: '' }, 
      description: {
        en: '',
        am: '',
        om: ''
      },
      price: 280, tags: ['Juice', ''], allergens: { en: '', am: '', om: '' }, 
      pairing: { en: '', am: '', om: '' },
      image: '/Images/dr21.jpg' 
    },
    
    
       { 
      id: 'dr22', category: 'Drinks', 
      name: { en: 'Avocado Juice', am: '', om: '' }, 
      description: {
        en: '',
        am: '',
        om: ''
      },
      price: 300, tags: ['Juice', ''], allergens: { en: '', am: '', om: '' }, 
      pairing: { en: '', am: '', om: '' },
      image: '/Images/dr22.jpg' 
    },
    
    
       { 
      id: 'dr23', category: 'Drinks', 
      name: { en: 'Avocado Milkshake', am: '', om: '' }, 
      description: {
        en: '',
        am: '',
        om: ''
      },
      price: 350, tags: ['Juice', ''], allergens: { en: '', am: '', om: '' }, 
      pairing: { en: '', am: '', om: '' },
      image: '/Images/dr23.jpeg' 
    },
    
    
       { 
      id: 'dr24', category: 'Drinks', 
      name: { en: 'Mango Juice', am: '', om: '' }, 
      description: {
        en: '',
        am: '',
        om: ''
      },
      price: 280, tags: ['Juice', ''], allergens: { en: '', am: '', om: '' }, 
      pairing: { en: '', am: '', om: '' },
      image: '/Images/dr24.jpg' 
    },
    
    
       { 
      id: 'dr25', category: 'Drinks', 
      name: { en: 'Mango Milkshake', am: '', om: '' }, 
      description: {
        en: '',
        am: '',
        om: ''
      },
      price: 330, tags: ['Juice', ''], allergens: { en: '', am: '', om: '' }, 
      pairing: { en: '', am: '', om: '' },
      image:'/Images/dr25.jpeg'
    },
    
    
       { 
      id: 'dr26', category: 'Drinks', 
      name: { en: ' Strawberry Juice', am: '', om: '' }, 
      description: {
        en: '',
        am: '',
        om: ''
      },
      price: 300, tags: ['Juice', ''], allergens: { en: '', am: '', om: '' }, 
      pairing: { en: '', am: '', om: '' },
      image: '/Images/dr26.jpeg' 
    },
    
    
       { 
      id: 'dr27', category: 'Drinks', 
      name: { en: 'Strawberry Milkshake', am: '', om: '' }, 
      description: {
        en: '',
        am: '',
        om: ''
      },
      price: 350, tags: ['Juice', ''], allergens: { en: '', am: '', om: '' }, 
      pairing: { en: '', am: '', om: '' },
      image: '/Images/dr27.jpg' 
    },
    
        { 
      id: 'dr28', category: 'Drinks', 
      name: { en: 'Orange Juice', am: '', om: '' }, 
      description: {
        en: '',
        am: '',
        om: ''
      },
      price: 350, tags: ['Juice', ''], allergens: { en: '', am: '', om: '' }, 
      pairing: { en: '', am: '', om: '' },
      image: '' 
    },
    
    
    
       { 
      id: 'dr29', category: 'Drinks', 
      name: { en: 'Watermelon Juice', am: '', om: '' }, 
      description: {
        en: '',
        am: '',
        om: ''
      },
      price: 280, tags: ['Juice', ''], allergens: { en: '', am: '', om: '' }, 
      pairing: { en: '', am: '', om: '' },
      image: '/Images/dr29.jpg' 
    },
    
       { 
      id: 'dr30', category: 'Drinks', 
      name: { en: 'Lemon Juice', am: '', om: '' }, 
      description: {
        en: '',
        am: '',
        om: ''
      },
      price: 300, tags: ['Juice', ''], allergens: { en: '', am: '', om: '' }, 
      pairing: { en: '', am: '', om: '' },
      image: '/Images/dr30.jpeg' 
    },
    
       { 
      id: 'dr31', category: 'Drinks', 
      name: { en: 'Mixed Juice', am: '', om: '' }, 
      description: {
        en: '',
        am: '',
        om: ''
      },
      price: 350, tags: ['Juice', ''], allergens: { en: '', am: '', om: '' }, 
      pairing: { en: '', am: '', om: '' },
      image: '' 
    },
    
       { 
      id: 'dr32', category: 'Drinks', 
      name: { en: 'Sena Special Juice', am: '', om: '' }, 
      description: {
        en: '',
        am: '',
        om: ''
      },
      price: 450, tags: ['', ''], allergens: { en: '', am: '', om: '' }, 
      pairing: { en: '', am: '', om: '' },
      image: '' 
    },
    
       { 
      id: 'dr33', category: 'Drinks', 
      name: { en: 'Fruit Punch', am: '', om: '' }, 
      description: {
        en: '',
        am: '',
        om: ''
      },
      price: 300, tags: ['', ''], allergens: { en: '', am: '', om: '' }, 
      pairing: { en: '', am: '', om: '' },
      image: '/Images/dr33.jpeg' 
    },
    
    
       { 
      id: 'dr34', category: 'Drinks', 
      name: { en: 'Sena Fruit Punch', am: '', om: '' }, 
      description: {
        en: '',
        am: '',
        om: ''
      },
      price: 370, tags: ['', ''], allergens: { en: '', am: '', om: '' }, 
      pairing: { en: '', am: '', om: '' },
      image: '' 
    },


      { 
      id: 'dr35', category: 'Drinks', 
      name: { en: 'Watermelon Slice', am: '', om: '' }, 
      description: {
        en: '',
        am: '',
        om: ''
      },
      price: 300, tags: ['', ''], allergens: { en: '', am: '', om: '' }, 
      pairing: { en: '', am: '', om: '' },
      image: '' 
    },

    /* ================= SOUP CATEGORY ========================== */
    
    { 
      id: 'so1', category: 'Soup', 
      name: { en: 'Vegetable Soup', am: '', om: '' }, 
      description: {
        en: '',
        am: '',
        om: ''
      },
      price: 190, tags: [], allergens: { en: '', am: '', om: '' }, 
      pairing: { en: '', am: '', om: '' },
      image: '/Images/so1.jpeg' 
    },
    
    { 
      id: 'so2', category: 'Soup', 
      name: { en: 'Tomato Soup', am: '', om: '' }, 
      description: {
        en: '',
        am: '',
        om: ''
      },
      price: 190, tags: [], allergens: { en: '', am: '', om: '' }, 
      pairing: { en: '', am: '', om: '' },
      image:'/Images/so1.jpg'
    },
    
    
    
        /* ================= SALAD DISHES CATEGORY ========================== */
    
    { 
      id: 'sd1', category: 'Salad Dishes', 
      name: { en: 'Special  Salad', am: '', om: '' }, 
      description: {
        en: '',
        am: '',
        om: ''
      },
      price: 400, tags: [], allergens: { en: '', am: '', om: '' }, 
      pairing: { en: '', am: '', om: '' },
      image: '/Images/sd1.jpeg' 
    },
    
    
    { 
      id: 'sd2', category: 'Salad Dishes', 
      name: { en: 'Tuna Salad', am: '', om: '' }, 
      description: {
        en: '',
        am: '',
        om: ''
      },
      price: 350, tags: [], allergens: { en: '', am: '', om: '' }, 
      pairing: { en: '', am: '', om: '' },
      image: '/Images/sd2.jpg' 
    },
    
    { 
      id: 'sd3', category: 'Salad Dishes', 
      name: { en: 'Mixed Salad', am: '', om: '' }, 
      description: {
        en: '',
        am: '',
        om: ''
      },
      price: 250, tags: [], allergens: { en: '', am: '', om: '' }, 
      pairing: { en: '', am: '', om: '' },
      image: '' 
    },
    
    { 
      id: 'sd4', category: 'Salad Dishes', 
      name: { en: 'Russian Salad', am: '', om: '' }, 
      description: {
        en: '',
        am: '',
        om: ''
      },
      price: 290, tags: [], allergens: { en: '', am: '', om: '' }, 
      pairing: { en: '', am: '', om: '' },
      image: '/Images/sd4.jpg' 
    },
    
    { 
      id: 'sd5', category: 'Salad Dishes', 
      name: { en: 'Penne Salad', am: '', om: '' }, 
      description: {
        en: '',
        am: '',
        om: ''
      },
      price: 290, tags: [], allergens: { en: '', am: '', om: '' }, 
      pairing: { en: '', am: '', om: '' },
      image: '' 
    },
    
    { 
      id: 'sd6', category: 'Salad Dishes', 
      name: { en: 'Rice Salad', am: '', om: '' }, 
      description: {
        en: '',
        am: '',
        om: ''
      },
      price: 290, tags: [], allergens: { en: '', am: '', om: '' }, 
      pairing: { en: '', am: '', om: '' },
      image: '/Images/sd6.jpeg' 
    },
    
    

    /* ================= CHICKEN & FISH DISHES========================== */
    
{ 
      id: 'cfd1', category: 'Chicken & Fish Dishes', 
      name: { en: 'Grilled Chicken', am: '', om: '' }, 
      description: {
        en: '',
        am: '',
        om: ''
      },
      price: 650, tags: [], allergens: { en: '', am: '', om: '' }, 
      pairing: { en: '', am: '', om: '' },
      image: '/Images/cfd1.jpg' 
    },
    
    
    { 
      id: 'cfd2', category: 'Chicken & Fish Dishes', 
      name: { en: 'Chicken Showarma', am: '', om: '' }, 
      description: {
        en: '',
        am: '',
        om: ''
      },
      price: 700, tags: [], allergens: { en: '', am: '', om: '' }, 
      pairing: { en: '', am: '', om: '' },
      image: '/Images/cfd2.jpg' 
    },
    
    
    { 
      id: 'cfd3', category: 'Chicken & Fish Dishes', 
      name: { en: 'Sena Special Showarma', am: '', om: '' }, 
      description: {
        en: '',
        am: '',
        om: ''
      },
      price: 1000, tags: [], allergens: { en: '', am: '', om: '' }, 
      pairing: { en: '', am: '', om: '' },
      image: '/Images/cfd3.jpeg' 
    },
    
    
    { 
      id: 'cfd4', category: 'Chicken & Fish Dishes', 
      name: { en: 'Vegetable Showarma', am: '', om: '' }, 
      description: {
        en: '',
        am: '',
        om: ''
      },
      price: 400, tags: [], allergens: { en: '', am: '', om: '' }, 
      pairing: { en: '', am: '', om: '' },
      image: '/Images/cfd4.jpeg' 
    },
    
    { 
      id: 'cfd5', category: 'Chicken & Fish Dishes', 
      name: { en: 'Fish Cutlet', am: '', om: '' }, 
      description: {
        en: '',
        am: '',
        om: ''
      },
      price: 600, tags: [], allergens: { en: '', am: '', om: '' }, 
      pairing: { en: '', am: '', om: '' },
      image: '/Images/cfd5.jpg' 
    },
    
    { 
      id: 'cfd6', category: 'Chicken & Fish Dishes', 
      name: { en: 'Fish Goulash', am: '', om: '' }, 
      description: {
        en: '',
        am: '',
        om: ''
      },
      price: 500, tags: [], allergens: { en: '', am: '', om: '' }, 
      pairing: { en: '', am: '', om: '' },
      image: '/Images/cfd1.jpeg' 
    },
    
    { 
      id: 'cfd7', category: 'Chicken & Fish Dishes', 
      name: { en: 'Full Chicken Beriyan', am: '', om: '' }, 
      description: {
        en: '',
        am: '',
        om: ''
      },
      price: 2500, tags: [], allergens: { en: '', am: '', om: '' }, 
      pairing: { en: '', am: '', om: '' },
      image: '/Images/cfd7.jpg' 
    },
    
    
    { 
      id: 'cfd8', category: 'Chicken & Fish Dishes', 
      name: { en: 'Half Chicken', am: '', om: '' }, 
      description: {
        en: '',
        am: '',
        om: ''
      },
      price: 1250, tags: [], allergens: { en: '', am: '', om: '' }, 
      pairing: { en: '', am: '', om: '' },
      image: '/Images/cfd8.jpg' 
    },
    
    

    /* ================= TRADITIONAL FOOD========================== */
    { 
      id: 'tf1', category: 'Traditional Food', 
      name: { en: 'Tegabino', am: '', om: '' }, 
      description: {
        en: '',
        am: '',
        om: ''
      },
      price: 300, tags: [], allergens: { en: '', am: '', om: '' }, 
      pairing: { en: '', am: '', om: '' },
      image: '/Images/tf1.jpg' 
    },
    
    

{ 
      id: 'tf2', category: 'Traditional Food', 
      name: { en: 'Shero', am: '', om: '' }, 
      description: {
        en: '',
        am: '',
        om: ''
      },
      price: 250, tags: [], allergens: { en: '', am: '', om: '' }, 
      pairing: { en: '', am: '', om: '' },
      image:'/Images/tf2.jpeg'
    },
    
    
    { 
      id: 'tf3', category: 'Traditional Food', 
      name: { en: 'Hulbet', am: '', om: '' }, 
      description: {
        en: '',
        am: '',
        om: ''
      },
      price: 400, tags: [], allergens: { en: '', am: '', om: '' }, 
      pairing: { en: '', am: '', om: '' },
      image: '/Images/tf3.jpg' 
    },
    
    { 
      id: 'tf4', category: 'Traditional Food', 
      name: { en: 'Shero With Tuna', am: '', om: '' }, 
      description: {
        en: '',
        am: '',
        om: ''
      },
      price: 400, tags: [], allergens: { en: '', am: '', om: '' }, 
      pairing: { en: '', am: '', om: '' },
      image: '/Images/tf4.jpeg' 
    },
    




    /* ================= DESSERTS (11 Items) ================= */
    { 
      id: 'ds1', category: 'Desserts', 
      name: { en: 'Chocolate Cake', am: '', om: '' }, 
      description: {
        en: '',
        am: '',
        om: ''
      },
      price: 250, tags: ['', ''], allergens: { en: '', am: '', om: '' }, 
      pairing: { en: '', am: '', om: '' },
      image: '/Images/ds1.jpg' 
    },
    
    
    { 
      id: 'ds2', category: 'Desserts', 
      name: { en: 'Black Forest Cake', am: '', om: '' }, 
      description: {
        en: '',
        am: '',
        om: ''
      },
      price: 200, tags: ['', ''], allergens: { en: '', am: '', om: '' }, 
      pairing: { en: '', am: '', om: '' },
      
      image: '/Images/ds2.jpg' 
    },
    
    { 
      id: 'ds3', category: 'Desserts', 
      name: { en: 'White Forest Cake', am: '', om: '' }, 
      description: {
        en: '',
        am: '',
        om: ''
      },
      price: 300, tags: ['', ''], allergens: { en: '', am: '', om: '' }, 
      pairing: { en: '', am: '', om: '' },
      image: '/Images/ds3.jpg'
    },
    
    { 
      id: 'ds4', category: 'Desserts', 
      name: { en: 'Caramel Cake', am: '', om: '' }, 
      description: {
        en: '',
        am: '',
        om: ''
      },
      price: 300, tags: ['', ''], allergens: { en: '', am: '', om: '' }, 
      pairing: { en: '', am: '', om: '' },
      image: '/Images/ds4.png'
    },
    
    
    { 
      id: 'ds5', category: 'Desserts', 
      name: { en: 'English Cake', am: '', om: '' }, 
      description: {
        en: '',
        am: '',
        om: ''
      },
      price: 120, tags: ['', ''], allergens: { en: '', am: '', om: '' }, 
      pairing: { en: '', am: '', om: '' },
      image:'/Images/ds5.jpg'
    }, 
    
    
     { 
      id: 'ds6', category: 'Desserts', 
      name: { en: 'Strawberry Cake', am: '', om: '' }, 
      description: {
        en: '',
        am: '',
        om: ''
      },
      price: 200, tags: ['', ''], allergens: { en: '', am: '', om: '' }, 
      pairing: { en: '', am: '', om: '' },
      image: '/Images/ds6.jpg' 
    },
    
    
    { 
      id: 'ds7', category: 'Desserts', 
      name: { en: 'Donut', am: '', om: '' }, 
      description: {
        en: '',
        am: '',
        om: ''
      },
      price: 60, tags: ['', ''], allergens: { en: '', am: '', om: '' }, 
      pairing: { en: '', am: '', om: '' },
      image: '/Images/ds7.jpeg'
    },
    
    
     { 
      id: 'ds8', category: 'Desserts', 
      name: { en: 'Cookies', am: '', om: '' }, 
      description: {
        en: '',
        am: '',
        om: ''
      },
      price: 120, tags: ['', ''], allergens: { en: '', am: '', om: '' }, 
      pairing: { en: '', am: '', om: '' },
      image: '/Images/ds8.webp' 
    },
    
    
     { 
      id: 'ds9', category: 'Desserts', 
      name: { en: 'Bonbolino', am: '', om: '' }, 
      description: {
        en: '',
        am: '',
        om: ''
      },
      price: 50, tags: ['', ''], allergens: { en: '', am: '', om: '' }, 
      pairing: { en: '', am: '', om: '' },
      image: '/Images/ds9.jpg' 
    },
    
    
     { 
      id: 'ds10', category: 'Desserts', 
      name: { en: 'Cinamen Roll', am: '', om: '' }, 
      description: {
        en: '',
        am: '',
        om: ''
      },
      price: 150, tags: ['', ''], allergens: { en: '', am: '', om: '' }, 
      pairing: { en: '', am: '', om: '' },
      image:'/Images/ds10.jpg'
    },
    
     { 
      id: 'ds11', category: 'Desserts', 
      name: { en: 'Samosa', am: '', om: '' }, 
      description: {
        en: '',
        am: '',
        om: ''
      },
      price: 60, tags: ['', ''], allergens: { en: '', am: '', om: '' }, 
      pairing: { en: '', am: '', om: '' },
      image: '/Images/ds11.jpg'
    },
    
    
        /* ================= EXTRA CATEGORY  ========================== */
  { 
      id: 'ex1', category: 'Extra', 
      name: { en: 'Pizza Togo', am: '', om: '' }, 
      description: {
        en: '',
        am: '',
        om: ''
      },
      price: 70, tags: [], allergens: { en: '', am: '', om: '' }, 
      pairing: { en: '', am: '', om: '' },
      image:'/Images/ex1.png'
    },
    
    
    { 
      id: 'ex2', category: 'Extra', 
      name: { en: 'Juice Togo', am: '', om: '' }, 
      description: {
        en: '',
        am: '',
        om: ''
      },
      price: 50, tags: [], allergens: { en: '', am: '', om: '' }, 
      pairing: { en: '', am: '', om: '' },
      image: '/Images/ex2.png' 
    },
    
    
    { 
      id: 'ex3', category: 'Extra', 
      name: { en: 'Bread', am: '', om: '' }, 
      description: {
        en: '',
        am: '',
        om: ''
      },
      price: 40, tags: [], allergens: { en: '', am: '', om: '' }, 
      pairing: { en: '', am: '', om: '' },
      image: '/Images/ex3.jpg' 
    },
    
    
    { 
      id: 'ex4', category: 'Extra', 
      name: { en: 'Enjera', am: '', om: '' }, 
      description: {
        en: '',
        am: '',
        om: ''
      },
      price: 40, tags: [], allergens: { en: '', am: '', om: '' }, 
      pairing: { en: '', am: '', om: '' },
      image: '/Images/ex4.jpg' 
    },
    
    
    { 
      id: 'ex5', category: 'Extra', 
      name: { en:'Ketchup', am: '', om: '' }, 
      description: {
        en: '',
        am: '',
        om: ''
      },
      price: 30, tags: [], allergens: { en: '', am: '', om: '' }, 
      pairing: { en: '', am: '', om: '' },
      image: '/Images/ex5.jpg' 
    },
    
    
    { 
      id: 'ex6', category: 'Extra', 
      name: { en: 'Shitini', am: '', om: '' }, 
      description: {
        en: '',
        am: '',
        om: ''
      },
      price: 30, tags: [], allergens: { en: '', am: '', om: '' }, 
      pairing: { en: '', am: '', om: '' },
      image: '/Images/ex6.jpg' 
    },
    
    
    { 
      id: 'ex7', category: 'Extra', 
      name: { en: 'Cheese', am: '', om: '' }, 
      description: {
        en: '',
        am: '',
        om: ''
      },
      price: 100, tags: [], allergens: { en: '', am: '', om: '' }, 
      pairing: { en: '', am: '', om: '' },
      image: '/Images/ex7.jpg' 
    },
    
    
    { 
      id: 'ex8', category: 'Extra', 
      name: { en: 'Tuna', am: '', om: '' }, 
      description: {
        en: '',
        am: '',
        om: ''
      },
      price: 180, tags: [], allergens: { en: '', am: '', om: '' }, 
      pairing: { en: '', am: '', om: '' },
      image: '/Images/ex8.png' 
    },
    
    
    { 
      id: 'ex9', category: 'Extra', 
      name: { en: 'Honey', am: '', om: '' }, 
      description: {
        en: '',
        am: '',
        om: ''
      },
      price: 60, tags: [], allergens: { en: '', am: '', om: '' }, 
      pairing: { en: '', am: '', om: '' },
      image: '/Images/ex9.jpg' 
    },
    
    
    { 
      id: 'ex10', category: 'Extra', 
      name: { en: 'Egg', am: '', om: '' }, 
      description: {
        en: '',
        am: '',
        om: ''
      },
      price: 50, tags: [], allergens: { en: '', am: '', om: '' }, 
      pairing: { en: '', am: '', om: '' },
      image: '/Images/ex10.jpg' 
    },
    
    { 
      id: 'ex11', category: 'Extra', 
      name: { en: 'Extra Rice', am: '', om: '' }, 
      description: {
        en: '',
        am: '',
        om: ''
      },
      price: 350, tags: [], allergens: { en: '', am: '', om: '' }, 
      pairing: { en: '', am: '', om: '' },
      image: '/Images/ex11.jpg' 
    }
    
  ]
};