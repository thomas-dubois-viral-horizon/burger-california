// Menu Data
const menuData = {
    burgers: [
        { name: "Menu California Burger", image: "images/california-burger.jpeg", desc: "Pain maison, steak 160g, salade, sauce California, bacon, oignons confits, cheddar fondu + Frites maison + Boisson", price: 11.90, icon: "🍔" },
        { name: "Menu Double Cheese Burger", image: "images/double-cheese.jpeg", desc: "Pain maison, 2 steaks, salade, sauce ketchup, tomate, oignons confits, cornichon, cheddar fondu + Frites maison + Boisson", price: 11.90, icon: "🍔" },
        { name: "Menu Truffe Burger", desc: "Pain maison, steak 160g, salade, sauce maison, oignons confits, cornichon, fromage truffe + Frites maison + Boisson", price: 13.90, icon: "🧈" },
        { name: "Menu Cheese Burger", desc: "Pain maison, steak, salade, sauce ketchup, tomate, oignons confits, cornichon, cheddar fondu + Frites maison + Boisson", price: 9.90, icon: "🧀" },
        { name: "Menu Chili Burger", image: "images/chili-burger.jpeg", desc: "Pain maison, steak, sauce piment, salade, oignons confits, cornichon, cheddar fondu + Frites maison + Boisson", price: 9.90, icon: "🌶️" },
        { name: "Menu Chicken Burger", image: "images/chicken-burger.jpeg", desc: "Pain maison, steak chicken, sauce maison, salade, oignons confits, cornichon, cheddar fondu + Frites maison + Boisson", price: 9.90, icon: "🐔" },
        { name: "Menu Chicken Avocat Burger", image: "images/avocat-burger.jpeg", desc: "Pain maison, steak chicken, sauce maison, avocat, salade, oignon rouge, cornichon, cheddar fondu + Frites maison + Boisson", price: 10.90, icon: "🥑" },
        { name: "Menu Avocat Burger", image: "images/avocat-burger.jpeg", desc: "Pain maison, steak, sauce maison, salade, avocat, oignon rouge, cornichon, cheddar fondu + Frites maison + Boisson", price: 10.90, icon: "🥑" },
        { name: "Menu Veggie Burger", desc: "Pain maison, steak veggie, sauce ketchup, salade, tomate, oignons confits, cornichon, cheddar fondu + Frites maison + Boisson", price: 10.90, icon: "🌱" },
        { name: "Menu Bacon Burger", image: "images/bacon-burger.jpeg", desc: "Pain maison, steak, sauce BBQ, salade, bacon, oignon rouge, cornichon, cheddar fondu + Frites maison + Boisson", price: 10.90, icon: "🥓" },
        { name: "Menu Fish Burger", desc: "Pain maison, fish, sauce mayonnaise, salade, oignons confits, cornichon, cheddar fondu + Frites maison + Boisson", price: 9.90, icon: "🐟" },
        { name: "Menu Bleu Burger", desc: "Pain maison, steak, sauce bleu, salade roquette, oignons confits, cornichon, fromage bleu + Frites maison + Boisson", price: 9.90, icon: "🧀" },
        { name: "Menu Comté Burger", image: "images/comte-burger.jpeg", desc: "Pain maison, steak, sauce maison, salade, tomate, oignons confits, cornichon, comté + Frites maison + Boisson", price: 11.90, icon: "🧀" },
        { name: "Menu Oeuf Burger", desc: "Pain maison, steak, oeuf, sauce maison, salade, oignons confits, cornichon, fromage raclette + Frites maison + Boisson", price: 10.90, icon: "🥚" },
        { name: "Menu Mushroom Burger", image: "images/mushroom-burger.png", desc: "Pain maison, steak, sauce maison, salade, oignon rouge, champignons, cornichon, fromage comté + Frites maison + Boisson", price: 11.90, icon: "🍄" }
    ],
    pizzas: [
        { name: "Hot California", desc: "Sauce piment, mozzarella, viande hachée, champignons, oignon et olives", sizes: { junior: 7.90, senior: 10.50, mega: 14.00 }, icon: "🌶️" },
        { name: "Végétarienne", desc: "Sauce tomate, mozzarella, champignons, artichaut, aubergine et poivrons", sizes: { junior: 7.90, senior: 10.50, mega: 14.00 }, icon: "🥬" },
        { name: "Barbecue", desc: "Sauce barbecue, mozzarella, viande hachée et poivron", sizes: { junior: 7.90, senior: 10.50, mega: 14.00 }, icon: "🍖" },
        { name: "Marguerite", desc: "Sauce tomate, mozzarella, origan", sizes: { junior: 7.90, senior: 10.50, mega: 14.00 }, icon: "🍕" },
        { name: "Reine", desc: "Sauce tomate, mozzarella, champignons et jambon, origan", sizes: { junior: 7.90, senior: 10.50, mega: 14.00 }, icon: "👑" },
        { name: "Calzone", desc: "Sauce tomate, mozzarella, jambon, oeuf", sizes: { junior: 7.90, senior: 10.50, mega: 14.00 }, icon: "🥟" },
        { name: "4 Fromages", image: "images/4-fromages.jpeg", desc: "Sauce tomate, mozzarella, chèvre, raclette et blue, origan", sizes: { junior: 7.90, senior: 10.50, mega: 14.00 }, icon: "🧀" },
        { name: "Orientale", desc: "Sauce tomate, mozzarella, merguez, poivron, oignon, olive et œuf", sizes: { junior: 7.90, senior: 10.50, mega: 14.00 }, icon: "🌍" },
        { name: "Mexicaine", image: "images/mexicaine.jpeg", desc: "Sauce tomate, mozzarella, merguez, viande hachée et poivron, origan", sizes: { junior: 7.90, senior: 10.50, mega: 14.00 }, icon: "🇲🇽" },
        { name: "Boursin", image: "images/boursin.jpeg", desc: "Sauce tomate, mozzarella, viande hachée et boursin, origan", sizes: { junior: 7.90, senior: 10.50, mega: 14.00 }, icon: "🧀" },
        { name: "4 Saisons", desc: "Sauce tomate, mozzarella, jambon, artichaut, champignon, poivron", sizes: { junior: 7.90, senior: 10.50, mega: 14.00 }, icon: "🌈" },
        { name: "Emilia", desc: "Sauce tomate, mozzarella, thon, oignon, origan", sizes: { junior: 7.90, senior: 10.50, mega: 14.00 }, icon: "🐟" },
        { name: "Chicken", image: "images/chicken.jpeg", desc: "Crème fraiche, mozzarella, poulet et pomme de terre, origan", sizes: { junior: 7.90, senior: 10.50, mega: 14.00 }, icon: "🐔" },
        { name: "Chèvre Miel", desc: "Crème fraiche, mozzarella, chèvre et miel", sizes: { junior: 7.90, senior: 10.50, mega: 14.00 }, icon: "🍯" },
        { name: "Norvégienne", desc: "Crème fraiche, mozzarella, et saumon fumé", sizes: { junior: 7.90, senior: 10.50, mega: 14.00 }, icon: "🐟" },
        { name: "Raclette", image: "images/raclette.jpeg", desc: "Crème fraiche, mozzarella, lardons, pomme de terre et raclette", sizes: { junior: 7.90, senior: 10.50, mega: 14.00 }, icon: "🧀" },
        { name: "California", image: "images/california.jpeg", desc: "Crème fraiche, mozzarella, viande hachée, bacon, cheddar, origan", sizes: { junior: 7.90, senior: 10.50, mega: 14.00 }, icon: "🍕" }
    ],
    texmex: [
        { name: "Nuggets 6 pièces", desc: "6 Nuggets de poulet croustillants", price: 5.00, icon: "🍗" },
        { name: "Nuggets 8 pièces", desc: "8 Nuggets de poulet croustillants", price: 6.50, icon: "🍗" },
        { name: "Nuggets 10 pièces", desc: "10 Nuggets de poulet croustillants", price: 8.00, icon: "🍗" },
        { name: "Menu Nuggets", desc: "6 Nuggets + Frites maison + Boisson 33cl", price: 7.90, icon: "🍗" },
        { name: "Tenders 4 pièces", desc: "4 Tenders de poulet", price: 6.00, icon: "🍗" },
        { name: "Tenders 6 pièces", desc: "6 Tenders de poulet", price: 7.50, icon: "🍗" },
        { name: "Tenders 8 pièces", desc: "8 Tenders de poulet", price: 10.50, icon: "🍗" },
        { name: "Menu Tenders", desc: "6 Tenders + Frites maison + Boisson 33cl", price: 8.90, icon: "🍗" },
        { name: "Oignons Rings 5 pièces", desc: "5 Anneaux d'oignons frits", price: 4.00, icon: "🧅" },
        { name: "Oignons Rings 10 pièces", desc: "10 Anneaux d'oignons frits", price: 7.50, icon: "🧅" },
        { name: "Oignons Rings 15 pièces", desc: "15 Anneaux d'oignons frits", price: 10.50, icon: "🧅" },
        { name: "Menu Oignons Rings", desc: "6 Oignons Rings + Frites maison + Boisson 33cl", price: 7.90, icon: "🧅" },
        { name: "Frites maison", desc: "Portion de frites maison", price: 3.00, icon: "🍟" },
        { name: "Frites Cheddar + Bacon", desc: "Frites avec cheddar fondu et bacon", price: 5.00, icon: "🍟" }
    ],
    desserts: [
        { name: "Cookie", desc: "Cookie maison", price: 3.00, icon: "🍪" },
        { name: "Gâteau Chocolat", desc: "Moelleux au chocolat", price: 3.00, icon: "🍰" },
        { name: "Tarte aux Daims", desc: "Tarte gourmande aux daims", price: 3.00, icon: "🥧" },
        { name: "Tiramisu", desc: "Tiramisu traditionnel", price: 3.50, icon: "🍮" },
        { name: "Cheesecake", desc: "Cheesecake New York style", price: 3.50, icon: "🍰" }
    ],
    boissons: [
        { name: "Coca-Cola 33cl", desc: "Coca, Coca Zéro ou Coca Light", price: 1.90, icon: "🥤" },
        { name: "Oasis 33cl", desc: "Oasis tropical", price: 1.90, icon: "🥤" },
        { name: "Sprite 33cl", desc: "Sprite citron", price: 1.90, icon: "🥤" },
        { name: "7-Up 33cl", desc: "7-Up ou 7-Up Mojito", price: 1.90, icon: "🥤" },
        { name: "Orangina 33cl", desc: "Orangina", price: 1.90, icon: "🥤" },
        { name: "Schweppes 33cl", desc: "Schweppes Tonic", price: 1.90, icon: "🥤" },
        { name: "Ice Tea 33cl", desc: "Ice Tea pêche", price: 1.90, icon: "🥤" },
        { name: "Café", desc: "Expresso", price: 1.50, icon: "☕" }
    ]
};

// Shopping cart
let cart = [];

// Load menu items
function loadMenuItems(category) {
    const container = document.getElementById('menuItemsContainer');
    const items = menuData[category] || [];
    
    if (items.length === 0) {
        container.innerHTML = '<p style="text-align: center; color: #999;">Aucun article dans cette catégorie</p>';
        return;
    }

    let html = '<div class="menu-grid">';
    
    items.forEach((item, index) => {
        // Determine image display
        let imageHtml;
        if (item.image) {
            imageHtml = `<div class="menu-item-image has-image"><img src="${item.image}" alt="${item.name}" loading="lazy"></div>`;
        } else {
            imageHtml = `<div class="menu-item-image">${item.icon}</div>`;
        }

        if (item.sizes) {
            // Pizza with sizes
            html += `
                <div class="menu-item">
                    ${imageHtml}
                    <div class="menu-item-content">
                        <h3>${item.name}</h3>
                        <p>${item.desc}</p>
                        <div class="pizza-sizes">
                            <button class="size-btn active" data-size="junior" data-price="${item.sizes.junior}">
                                <span class="size-name">Junior 26cm</span>
                                <span class="size-price">${item.sizes.junior.toFixed(2)}€</span>
                            </button>
                            <button class="size-btn" data-size="senior" data-price="${item.sizes.senior}">
                                <span class="size-name">Senior 31cm</span>
                                <span class="size-price">${item.sizes.senior.toFixed(2)}€</span>
                            </button>
                            <button class="size-btn" data-size="mega" data-price="${item.sizes.mega}">
                                <span class="size-name">Méga 34cm</span>
                                <span class="size-price">${item.sizes.mega.toFixed(2)}€</span>
                            </button>
                        </div>
                        <button class="add-to-cart-btn" onclick="addPizzaToCart('${item.name.replace(/'/g, "\\'")}', this)">
                            Ajouter au panier
                        </button>
                    </div>
                </div>
            `;
        } else {
            // Regular item
            html += `
                <div class="menu-item">
                    ${imageHtml}
                    <div class="menu-item-content">
                        <h3>${item.name}</h3>
                        <p>${item.desc}</p>
                        <div class="menu-item-footer">
                            <span class="price">${item.price.toFixed(2)}€</span>
                            <button class="add-to-cart-btn" onclick="addToCart('${item.name.replace(/'/g, "\\'")}', ${item.price})">
                                Ajouter
                            </button>
                        </div>
                    </div>
                </div>
            `;
        }
    });
    
    html += '</div>';
    container.innerHTML = html;

    // Add size button handlers for pizzas
    document.querySelectorAll('.size-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const parent = this.closest('.pizza-sizes');
            parent.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
        });
    });
}

// Add to cart (regular items)
function addToCart(name, price) {
    const existingItem = cart.find(item => item.name === name && !item.size);
    
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ 
            name: name,
            displayName: name, // Always set displayName
            price: price, 
            quantity: 1,
            size: null // Regular items don't have size
        });
    }
    
    updateCart();
    showCartNotification();
}

// Add pizza to cart
function addPizzaToCart(name, button) {
    const menuItem = button.closest('.menu-item');
    const activeSize = menuItem.querySelector('.size-btn.active');
    const size = activeSize.dataset.size;
    const price = parseFloat(activeSize.dataset.price);
    
    const sizeNames = { junior: 'Junior (26cm)', senior: 'Senior (31cm)', mega: 'Méga (34cm)' };
    const fullName = `${name} - ${sizeNames[size]}`;
    
    const existingItem = cart.find(item => item.name === name && item.size === size);
    
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ 
            name: name,
            displayName: fullName, 
            price: price, 
            quantity: 1, 
            size: size 
        });
    }
    
    updateCart();
    showCartNotification();
}

// Update cart display
function updateCart() {
    const cartItemsEl = document.getElementById('cartItems');
    const cartCountEl = document.getElementById('cartCount');
    const cartTotalEl = document.getElementById('cartTotal');
    const checkoutBtn = document.getElementById('checkoutBtn');
    
    if (cart.length === 0) {
        cartItemsEl.innerHTML = '<p class="cart-empty">Votre panier est vide</p>';
        cartCountEl.textContent = '0';
        cartTotalEl.textContent = '0.00€';
        checkoutBtn.disabled = true;
        return;
    }
    
    let total = 0;
    let totalItems = 0;
    let html = '';
    
    cart.forEach((item, index) => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        totalItems += item.quantity;
        
        const displayName = item.displayName || item.name;
        
        html += `
            <div class="cart-item">
                <div class="cart-item-header">
                    <div class="cart-item-name">${displayName}</div>
                    <button class="cart-item-remove" onclick="removeFromCart(${index})">✕</button>
                </div>
                <div class="cart-item-footer">
                    <div class="quantity-controls">
                        <button class="qty-btn" onclick="updateQuantity(${index}, -1)">−</button>
                        <span class="qty-display">${item.quantity}</span>
                        <button class="qty-btn" onclick="updateQuantity(${index}, 1)">+</button>
                    </div>
                    <div class="cart-item-price">${itemTotal.toFixed(2)}€</div>
                </div>
            </div>
        `;
    });
    
    cartItemsEl.innerHTML = html;
    cartCountEl.textContent = totalItems;
    cartTotalEl.textContent = total.toFixed(2) + '€';
    checkoutBtn.disabled = false;
}

// Update quantity
function updateQuantity(index, change) {
    cart[index].quantity += change;
    
    if (cart[index].quantity <= 0) {
        cart.splice(index, 1);
    }
    
    updateCart();
}

// Remove from cart
function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

// Show cart notification
function showCartNotification() {
    const cartToggle = document.getElementById('cartToggle');
    cartToggle.style.transform = 'scale(1.2)';
    setTimeout(() => {
        cartToggle.style.transform = 'scale(1)';
    }, 200);
}

// Toggle cart sidebar
function toggleCart() {
    const cartSidebar = document.getElementById('cartSidebar');
    cartSidebar.classList.toggle('open');
}

// Checkout - STRIPE COMPATIBLE VERSION
async function checkout() {
    if (cart.length === 0) {
        alert("Votre panier est vide");
        return;
    }

    try {
        // Build line items for Stripe
        const lineItems = cart.map(item => {
            // Ensure all required fields are present and valid
            if (!item.name || !item.price || !item.quantity) {
                throw new Error("Invalid cart item: missing required fields");
            }
            
            const displayName = item.displayName || item.name;
            const priceInCents = Math.round(parseFloat(item.price) * 100); // Stripe uses cents
            
            return {
                price_data: {
                    currency: 'eur',
                    product_data: {
                        name: displayName,
                        description: item.size ? `Taille: ${item.size}` : undefined
                    },
                    unit_amount: priceInCents
                },
                quantity: parseInt(item.quantity)
            };
        });

        const payload = { line_items: lineItems };

        console.log("Sending Stripe checkout payload:", payload); // Debug log

        const res = await fetch("/api/create-checkout-session", {
            method: "POST",
            headers: { 
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        });

        const data = await res.json();
        
        if (!res.ok) {
            console.error("Checkout error:", data);
            alert(data.error || `Erreur ${res.status}: Impossible de créer la session de paiement`);
            return;
        }

        if (data.error) {
            alert(data.error);
            return;
        }

        if (!data.url) {
            alert("Erreur: URL de paiement manquante");
            return;
        }

        // Redirect to Stripe checkout
        window.location.href = data.url;
        
    } catch (error) {
        console.error("Checkout failed:", error);
        alert("Erreur lors du paiement: " + error.message);
    }
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    // Load default category
    loadMenuItems('burgers');
    
    // Category buttons
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            loadMenuItems(this.dataset.category);
        });
    });
    
    // Cart toggle
    document.getElementById('cartToggle').addEventListener('click', toggleCart);
    document.getElementById('cartClose').addEventListener('click', toggleCart);
    
    // Checkout button
    document.getElementById('checkoutBtn').addEventListener('click', checkout);
    
    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in').forEach(element => {
        observer.observe(element);
    });

    // Contact form
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Merci pour votre message ! Nous vous répondrons dans les plus brefs délais.');
            this.reset();
        });
    }
});
