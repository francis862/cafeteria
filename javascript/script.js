// Menu Items Data - Coffee Shop Catalog
const menuItems = [
    // CAFÉS EXPRESSO (Diversos)
    {
        id: 1,
        name: "Espresso Tradicional",
        description: "O clássico italiano com grãos 100% arábica, torrado escuro para sabor intenso e encorpado.",
        price: 12.90,
        category: "coffee",
        brand: "Illy",
        brandLogo: "☕",
        quality: "premium",
        qualityTags: ["100% Arábica", "Torrado Italiano", "Intenso"],
        image: "https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=400&q=80"
    },
    {
        id: 2,
        name: "Espresso Duplo",
        description: "Dupla dose de espresso para os verdadeiros amantes de café forte.",
        price: 15.90,
        category: "coffee",
        brand: "Lavazza",
        brandLogo: "☕",
        quality: "premium",
        qualityTags: ["Dupla Dose", "Intenso", "Tradicional"],
        image: "https://images.unsplash.com/photo-1590615370691-417b9c719a49?w=400&q=80"
    },
    {
        id: 3,
        name: "Espresso Ristretto",
        description: "Extração curta e concentrada, sabor intenso e sofisticado.",
        price: 13.90,
        category: "coffee",
        brand: "Artesanal",
        brandLogo: "🎯",
        quality: "artisan",
        qualityTags: ["Concentrado", "Aromático", "Barista"],
        image: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=400&q=80"
    },
    {
        id: 4,
        name: "Espresso Lungo",
        description: "Espresso estendido com mais água, sabor suave e prolongado.",
        price: 12.90,
        category: "coffee",
        brand: "Nespresso",
        brandLogo: "☕",
        quality: "premium",
        qualityTags: ["Suave", "Prolongado", "Clássico"],
        image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&q=80"
    },
    {
        id: 5,
        name: "Espresso Corretto",
        description: "Espresso com toque de licor de café, tradição italiana.",
        price: 18.90,
        category: "coffee",
        brand: "Italian Style",
        brandLogo: "🇮🇹",
        quality: "premium",
        qualityTags: ["Licor de Café", "Tradicional", "Adulto"],
        image: "https://images.unsplash.com/photo-1550614000-4b9519e0269b?w=400&q=80"
    },
    {
        id: 6,
        name: "Espresso Cremoso",
        description: "Com espuma de leite vaporizada, suave e deliciosamente cremoso.",
        price: 14.90,
        category: "coffee",
        brand: "Starbucks",
        brandLogo: "⭐",
        quality: "premium",
        qualityTags: ["Espuma Cremosa", "Suave", "Aromatizado"],
        image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400&q=80"
    },
    {
        id: 7,
        name: "Espresso Descafeinado",
        description: "Mesmo sabor intenso, sem cafeína. Para qualquer hora do dia.",
        price: 13.90,
        category: "coffee",
        brand: "Illy",
        brandLogo: "😌",
        quality: "premium",
        qualityTags: ["Sem Cafeína", "Suave", "100% Arábica"],
        image: "https://images.unsplash.com/photo-1498804103079-a6351b050096?w=400&q=80"
    },
    
    // CAFÉS DE FUBÁ (Tradicionais Brasileiros)
    {
        id: 8,
        name: "Café com Fubá",
        description: "O café tradicional brasileiro com fubá fininho, feito na panelinha.",
        price: 8.90,
        category: "coffee",
        brand: "Raiz Brasileiro",
        brandLogo: "🇧🇷",
        quality: "artisan",
        qualityTags: ["Tradicional", "Caseiro", "Fubá Fininho"],
        image: "https://images.unsplash.com/photo-1504624244670-3cce0d9d6f55?w=400&q=80"
    },
    {
        id: 9,
        name: "Café Pingado com Fubá",
        description: "Café fresquinho com leite quente e fubá, conforto brasileiro.",
        price: 10.90,
        category: "coffee",
        brand: "Vó Brazil",
        brandLogo: "🏠",
        quality: "artisan",
        qualityTags: ["Com Leite", "Conforto", "Tradicional"],
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?w=400&q=80"
    },
    {
        id: 10,
        name: "Café de Fubá Especial",
        description: "Fubá de moinho de pedra, preparo artesanal e sabor inconfundível.",
        price: 12.90,
        category: "coffee",
        brand: "Moinho de Pedra",
        brandLogo: "🪨",
        quality: "organic",
        qualityTags: ["Moinho de Pedra", "Artesanal", "Sabor Caseiro"],
        image: "https://images.unsplash.com/photo-1507133750069-bef72f3707a9?w=400&q=80"
    },
    {
        id: 11,
        name: "Pingo de Café",
        description: "Café passado no coador de pano com fubá, o clássico de boteco.",
        price: 7.90,
        category: "coffee",
        brand: "Boteco Tradicional",
        brandLogo: "🍺",
        quality: "artisan",
        qualityTags: ["Coador de Pano", "Clássico", "Econômico"],
        image: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=400&q=80"
    },
    {
        id: 12,
        name: "Café com Fubá e Canela",
        description: "O tradicional com toque de canela, aroma irresistível.",
        price: 9.90,
        category: "coffee",
        brand: "Casa da Vó",
        brandLogo: "🌿",
        quality: "artisan",
        qualityTags: ["Canela", "Aromático", "Conforto"],
        image: "https://images.unsplash.com/photo-1517701604599-bb29b5dd7359?w=400&q=80"
    },
    {
        id: 13,
        name: "Café Preto com Fubá",
        description: "Forte e encorpado, o café do dia a dia do brasileiro.",
        price: 7.90,
        category: "coffee",
        brand: "Brasil Tradicional",
        brandLogo: "☕",
        quality: "artisan",
        qualityTags: ["Forte", "Econômico", "Diário"],
        image: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=400&q=80"
    },
    {
        id: 14,
        name: "Café de Fubá com Rapadura",
        description: "Adoçado com rapadura natural, doce e acolhedor.",
        price: 11.90,
        category: "coffee",
        brand: "Açúcar Natural",
        brandLogo: "🎋",
        quality: "organic",
        qualityTags: ["Rapadura", "Natural", "Doce"],
        image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?w=400&q=80"
    },
    
    // CAFÉS ORGÂNICOS
    {
        id: 15,
        name: "Café Orgânico do Sítio",
        description: "Grãos cultivados sem agrotóxicos, comercio justo e sustentável.",
        price: 14.90,
        category: "coffee",
        brand: "Café do Sítio",
        brandLogo: "🌱",
        quality: "organic",
        qualityTags: ["Certificado Orgânico", "Fair Trade", "Sustentável"],
        image: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=400&q=80"
    },
    {
        id: 16,
        name: "Cold Brew Orgânico",
        description: "Preparado por 18 horas em água fria, extração lenta e suave.",
        price: 16.90,
        category: "coffee",
        brand: "Grão Verde",
        brandLogo: "🌿",
        quality: "organic",
        qualityTags: ["Low Acid", "Natural", "Fresco"],
        image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&q=80"
    },
    {
        id: 17,
        name: "Café Verde Fit",
        description: "Grãos não torrados, ricos em antioxidantes e clorofila.",
        price: 18.90,
        category: "coffee",
        brand: "BioCafé",
        brandLogo: "💚",
        quality: "organic",
        qualityTags: ["Antioxidantes", "Detox", "Natural"],
        image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=400&q=80"
    },
    
    // CAFÉS ESPECIAIS
    {
        id: 18,
        name: "Cappuccino Classico",
        description: "Perfeita combinação de espresso, leite vaporizado e espuma cremosa.",
        price: 16.90,
        category: "coffee",
        brand: "Nespresso",
        brandLogo: "🏆",
        quality: "premium",
        qualityTags: ["Espresso Premium", "Leite Integral", "Canela"],
        image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400&q=80"
    },
    {
        id: 19,
        name: "Latte Macchiato",
        description: "Leite vaporizado com um toque de espresso, camadas distintas.",
        price: 17.90,
        category: "coffee",
        brand: "Starbucks",
        brandLogo: "⭐",
        quality: "premium",
        qualityTags: ["3 Camadas", "Leite Cremoso", "Aroma Suave"],
        image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?w=400&q=80"
    },
    {
        id: 20,
        name: "Mocha Especial",
        description: "Espresso com chocolate belga, leite vaporizado e chantilly.",
        price: 19.90,
        category: "coffee",
        brand: "Godiva",
        brandLogo: "🍫",
        quality: "premium",
        qualityTags: ["Chocolate Belga", "Chantilly", "Doce"],
        image: "https://images.unsplash.com/photo-1524350876685-274059332603?w=400&q=80"
    },
    {
        id: 21,
        name: "Affogato al Caffè",
        description: "Espresso derramado sobre sorvete de creme artesanal.",
        price: 22.90,
        category: "coffee",
        brand: "Artesanal",
        brandLogo: "🎨",
        quality: "artisan",
        qualityTags: ["Gelado", "Sobremesa", "Italian Style"],
        image: "https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?w=400&q=80"
    },
    
    // BEBIDAS ESPECIAIS
    {
        id: 22,
        name: "Frappuccino Caramel",
        description: "Bebida gelada com café, leite, calda de caramelo e chantilly.",
        price: 24.90,
        category: "drink",
        brand: "Starbucks",
        brandLogo: "⭐",
        quality: "premium",
        qualityTags: ["Gelado", "Caramelo", "Refrescante"],
        image: "https://images.unsplash.com/photo-1585238342024-78d387f4a707?w=400&q=80"
    },
    {
        id: 23,
        name: "Chaí Latte",
        description: "Chá preto com especiarias indianas, leite e toque de mel.",
        price: 15.90,
        category: "drink",
        brand: "Teavana",
        brandLogo: "🍃",
        quality: "premium",
        qualityTags: ["Especiarias", "Quente", "Aromático"],
        image: "https://images.unsplash.com/photo-1558857563-b371033873b8?w=400&q=80"
    },
    {
        id: 24,
        name: "Chocolate Quente Belga",
        description: "Chocolate 70% cacau com leite, finalização com marshmallows.",
        price: 17.90,
        category: "drink",
        brand: "Godiva",
        brandLogo: "🍫",
        quality: "premium",
        qualityTags: ["70% Cacau", "Marshmallows", "Creamy"],
        image: "https://images.unsplash.com/photo-1544776193-352d25ca82cd?w=400&q=80"
    },
    {
        id: 25,
        name: "Smoothie de Café",
        description: "Café gelado com banana, aveia e leite de amêndoas.",
        price: 19.90,
        category: "drink",
        brand: "Healthy",
        brandLogo: "💪",
        quality: "organic",
        qualityTags: ["Proteico", "Vegano", "Energético"],
        image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=400&q=80"
    },
    
    // COMIDAS
    {
        id: 26,
        name: "Croissant de Manteiga",
        description: "Massa folhada artesanal, assado na hora com manteiga francesa.",
        price: 12.90,
        category: "food",
        brand: "Artesanal",
        brandLogo: "🥐",
        quality: "artisan",
        qualityTags: ["Manteiga Francesa", "Caseiro", "Fresco"],
        image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400&q=80"
    },
    {
        id: 27,
        name: "Muffin de Blueberry",
        description: "Muffin úmido com blueberries frescos e streusel de aveia.",
        price: 11.90,
        category: "food",
        brand: "Caseiro",
        brandLogo: "🫐",
        quality: "artisan",
        qualityTags: ["Blueberry", "Aveia", "Natural"],
        image: "https://images.unsplash.com/photo-1607958966338-410eb07a0943?w=400&q=80"
    },
    {
        id: 28,
        name: "Sanduíche de Frango",
        description: "Frango grelhado, rúcula, tomate e maionese de ervas em pão ciabatta.",
        price: 24.90,
        category: "food",
        brand: "Gourmet",
        brandLogo: "🥪",
        quality: "premium",
        qualityTags: ["Gourmet", "Proteico", "Fresco"],
        image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400&q=80"
    },
    {
        id: 29,
        name: "Torta de Limão",
        description: "Base de biscoito, creme de limão siciliano e merengue suíço.",
        price: 16.90,
        category: "food",
        brand: "Pâtisserie",
        brandLogo: "🍋",
        quality: "artisan",
        qualityTags: ["Merengue", "Siciliano", "Sofisticado"],
        image: "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?w=400&q=80"
    },
    {
        id: 30,
        name: "Brownie de Chocolate",
        description: "Brownie de chocolate 70% com nozes e centro cremoso.",
        price: 13.90,
        category: "food",
        brand: "Caseiro",
        brandLogo: "🍫",
        quality: "premium",
        qualityTags: ["70% Cacau", "Nozes", "Fudge"],
        image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476d?w=400&q=80"
    },
    {
        id: 31,
        name: "Quiche Lorraine",
        description: "Massa crocante com bacon, queijo gruyère e ovos cremosos.",
        price: 18.90,
        category: "food",
        brand: "Gourmet",
        brandLogo: "🧀",
        quality: "premium",
        qualityTags: ["Bacon", "Gruyère", "Clássico"],
        image: "https://images.unsplash.com/photo-1575853121743-60c24f0a7502?w=400&q=80"
    }
];

// Cart State
let cart = [];

// DOM Elements
const menuGrid = document.getElementById('menuGrid');
const cartSidebar = document.getElementById('cartSidebar');
const cartItems = document.getElementById('cartItems');
const cartTotal = document.getElementById('cartTotal');
const cartCount = document.getElementById('cartCount');
const cartBtn = document.getElementById('cartBtn');
const closeCart = document.getElementById('closeCart');
const checkoutBtn = document.getElementById('checkoutBtn');
const notification = document.getElementById('notification');
const notificationText = document.getElementById('notificationText');
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navLinks = document.querySelector('.nav-links');
const filterBtns = document.querySelectorAll('.filter-btn');
const contactForm = document.getElementById('contactForm');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderMenuItems('all');
    setupEventListeners();
    loadCartFromStorage();
});

// Render Menu Items
function renderMenuItems(category) {
    const filteredItems = category === 'all' 
        ? menuItems 
        : menuItems.filter(item => item.category === category);
    
    menuGrid.innerHTML = filteredItems.map(item => createMenuItemHTML(item)).join('');
}

// Create Menu Item HTML
function createMenuItemHTML(item) {
    const qualityClass = item.quality;
    const qualityLabel = {
        'premium': 'Premium',
        'organic': 'Orgânico',
        'artisan': 'Artesanal'
    }[qualityClass];
    
    const qualityTagsHTML = item.qualityTags.map(tag => 
        `<span class="quality-tag">✓ ${tag}</span>`
    ).join('');
    
    return `
        <div class="menu-item" data-id="${item.id}">
            <div class="menu-item-image">
                <img src="${item.image}" alt="${item.name}" loading="lazy">
                <span class="quality-badge ${qualityClass}">${qualityLabel}</span>
                <span class="brand-tag">${item.brandLogo} ${item.brand}</span>
            </div>
            <div class="menu-item-content">
                <div class="menu-item-header">
                    <h3>${item.name}</h3>
                </div>
                <p class="description">${item.description}</p>
                <div class="quality-info">
                    ${qualityTagsHTML}
                </div>
                <div class="menu-item-footer">
                    <div class="price">
                        R$ ${item.price.toFixed(2).replace('.', ',')}
                        <small>/unidade</small>
                    </div>
                    <button class="add-to-cart" onclick="addToCart(${item.id})">
                        +
                    </button>
                </div>
            </div>
        </div>
    `;
}

// Add to Cart
function addToCart(id) {
    const item = menuItems.find(i => i.id === id);
    const existingItem = cart.find(i => i.id === id);
    
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ ...item, quantity: 1 });
    }
    
    updateCart();
    showNotification(`${item.name} adicionado ao carrinho!`);
    saveCartToStorage();
}

// Remove from Cart
function removeFromCart(id) {
    cart = cart.filter(i => i.id !== id);
    updateCart();
    saveCartToStorage();
}

// Update Quantity
function updateQuantity(id, change) {
    const item = cart.find(i => i.id === id);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(id);
        } else {
            updateCart();
            saveCartToStorage();
        }
    }
}

// Update Cart Display
function updateCart() {
    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="empty-cart">
                <span>🛒</span>
                <p>Seu carrinho está vazio</p>
                <p>Adicione alguns cafés deliciosos!</p>
            </div>
        `;
    } else {
        cartItems.innerHTML = cart.map(item => `
            <div class="cart-item">
                <div class="cart-item-image">
                    <img src="${item.image}" alt="${item.name}">
                </div>
                <div class="cart-item-info">
                    <h4>${item.name}</h4>
                    <span class="brand">${item.brandLogo} ${item.brand}</span>
                    <div class="cart-item-controls">
                        <button class="qty-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                        <span>${item.quantity}</span>
                        <button class="qty-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                        <span class="cart-item-price">R$ ${(item.price * item.quantity).toFixed(2).replace('.', ',')}</span>
                        <button class="cart-item-remove" onclick="removeFromCart(${item.id})">×</button>
                    </div>
                </div>
            </div>
        `).join('');
    }
    
    // Update total
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotal.textContent = `R$ ${total.toFixed(2).replace('.', ',')}`;
    
    // Update count
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = count;
}

// Show Notification
function showNotification(message) {
    notificationText.textContent = message;
    notification.classList.add('show');
    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
}

// Setup Event Listeners
function setupEventListeners() {
    // Cart button
    cartBtn.addEventListener('click', () => {
        cartSidebar.classList.add('active');
    });
    
    // Close cart
    closeCart.addEventListener('click', () => {
        cartSidebar.classList.remove('active');
    });
    
    // Checkout
    checkoutBtn.addEventListener('click', () => {
        if (cart.length === 0) {
            showNotification('Seu carrinho está vazio!');
            return;
        }
        
        const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        const itemsList = cart.map(item => `${item.name} (x${item.quantity})`).join(', ');
        
        showNotification('Pedido enviado! Entraremos em contato em breve.');
        cartSidebar.classList.remove('active');
        cart = [];
        updateCart();
        saveCartToStorage();
        
        console.log('Pedido:', { items: cart, total });
    });
    
    // Mobile menu
    mobileMenuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
    
    // Filter buttons
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderMenuItems(btn.dataset.category);
        });
    });
    
    // Contact form
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);
        showNotification('Mensagem enviada! Responderemos em breve.');
        contactForm.reset();
    });
    
    // Close cart on outside click
    document.addEventListener('click', (e) => {
        if (!cartSidebar.contains(e.target) && !cartBtn.contains(e.target)) {
            cartSidebar.classList.remove('active');
        }
    });
    
    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                navLinks.classList.remove('active');
            }
        });
    });
}

// Local Storage
function saveCartToStorage() {
    localStorage.setItem('coffeeShopCart', JSON.stringify(cart));
}

function loadCartFromStorage() {
    const savedCart = localStorage.getItem('coffeeShopCart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCart();
    }
}

// Scroll effects
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(44, 24, 16, 0.98)';
        header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.3)';
    } else {
        header.style.background = 'rgba(44, 24, 16, 0.95)';
        header.style.boxShadow = 'none';
    }
});

