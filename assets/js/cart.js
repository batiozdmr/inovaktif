/* Inovaktif Shop - Cart System */
var InoCart = (function () {
    var STORAGE_KEY = 'inovaktif_cart';

    var products = [
        { id: 1, name: 'Pro Boxing Gloves 12 oz', price: 1899, category: 'Gloves', image: 'assets/images/boxing-gloves.jpg', badge: 'Popular', description: 'Premium synthetic leather boxing gloves with reinforced thumb lock and multi-layer foam padding. Ideal for bag work, mitt training, and sparring sessions.', features: ['12 oz competition weight', 'Breathable mesh palm panel', 'Hook-and-loop wrist strap', 'Multi-layer shock absorption', 'Unisex fit — S to XL'] },
        { id: 2, name: 'Heavy Punching Bag 120 cm', price: 3499, category: 'Bags', image: 'assets/images/heavy-punching-bag.png', badge: 'Best Seller', description: 'Professional-grade hanging heavy bag filled with textile scraps for a realistic strike feel. Includes heavy-duty chains and swivel mount.', features: ['120 cm × 40 cm diameter', 'Durable PU outer shell', 'Reinforced top mounting loop', 'Chains and swivel included', 'Suitable for home or gym'] },
        { id: 3, name: 'Boxing Socks — 3 Pack', price: 349, category: 'Apparel', image: 'assets/images/boxing-socks.png', badge: 'New', description: 'High-cut boxing socks with arch support and moisture-wicking fabric. Designed to stay in place inside boots during intense training.', features: ['3 pairs per pack', 'Reinforced heel and toe', 'Anti-slip cuff', 'Breathable cotton blend', 'One size fits most'] },
        { id: 4, name: 'Elastic Hand Wraps 4.5 m', price: 199, category: 'Protection', image: 'assets/images/elastic-hand-wraps.png', badge: 'Essential', description: 'Professional hand wraps with thumb loop and hook-and-loop closure. Protects knuckles, wrists, and thumb before putting on gloves.', features: ['4.5 m length — adult size', 'Elastic cotton blend', 'Washable and reusable', 'Sold as a pair', 'Multiple color options'] },
        { id: 5, name: 'Open-Face Head Guard', price: 1299, category: 'Protection', image: 'assets/images/open-face-head-guard.png', badge: 'Pro', description: 'Lightweight head guard with open-face design for maximum visibility. High-density foam padding absorbs impact during sparring.', features: ['Open-face competition style', 'Adjustable rear strap', 'CE-certified padding', 'Breathable inner lining', 'Sizes S / M / L'] },
        { id: 6, name: 'Double-End Speed Ball', price: 899, category: 'Training', image: 'assets/images/double-end-speed-ball.png', badge: 'Training', description: 'Leather speed ball with adjustable top and floor elastics. Improves hand speed, timing, rhythm, and defensive reflexes.', features: ['Genuine leather striking surface', 'Adjustable elastic cords', 'Ceiling and floor mounts included', 'Pump and needle in box', 'Ideal for home gyms'] },
        { id: 7, name: 'Boxing Boots — Low Cut', price: 2199, category: 'Apparel', image: 'assets/images/boxing-boots.png', badge: 'Premium', description: 'Lightweight low-cut boxing boots with non-marking rubber sole and ankle support. Built for fast footwork in the ring.', features: ['Suede and synthetic upper', 'Non-slip pivot sole', 'Lace-up with hook strap', 'Lightweight ring shoe', 'EU sizes 39–45'] },
        { id: 8, name: 'Groin Guard & Cup', price: 449, category: 'Protection', image: 'assets/images/groin-guard-cup.png', badge: 'Safety', description: 'Adjustable groin protector with hard-shell cup and elastic waistband. Essential safety equipment for sparring and competition.', features: ['Hard polycarbonate cup', 'Elastic waist strap', 'Breathable mesh panel', 'Unisex adjustable fit', 'Washable outer cover'] },
        { id: 9, name: 'Speed Jump Rope — Steel Cable', price: 279, category: 'Training', image: 'assets/images/speed-jump-rope.png', badge: 'Cardio', description: 'Ball-bearing speed rope with steel cable and foam grips. Perfect for warm-up, footwork drills, and conditioning before boxing sessions.', features: ['Steel cable with PVC coating', 'Ball-bearing handles', 'Adjustable length', 'Lightweight and fast', 'Includes spare cable'] },
        { id: 10, name: 'Starter Boxing Kit', price: 4999, category: 'Kits', image: 'assets/images/starter-boxing-kit.png', badge: 'Complete', description: 'Everything you need to start training at home: 12 oz gloves, hand wraps, jump rope, and a 120 cm punching bag with mounting hardware.', features: ['12 oz boxing gloves included', 'Hand wraps + jump rope', '120 cm heavy bag with chains', 'Mounting hardware included', 'Save 15% vs buying separately'] }
    ];

    function getCart() {
        try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || []; } catch (e) { return []; }
    }

    function saveCart(cart) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
        updateCartBadge();
    }

    function addItem(productId, qty) {
        qty = qty || 1;
        var cart = getCart();
        var existing = cart.find(function (i) { return i.id === productId; });
        if (existing) {
            existing.qty += qty;
        } else {
            cart.push({ id: productId, qty: qty });
        }
        saveCart(cart);
        showAddedToast();
    }

    function removeItem(productId) {
        var cart = getCart().filter(function (i) { return i.id !== productId; });
        saveCart(cart);
    }

    function updateQty(productId, qty) {
        var cart = getCart();
        var item = cart.find(function (i) { return i.id === productId; });
        if (item) { item.qty = qty; }
        if (qty <= 0) { return removeItem(productId); }
        saveCart(cart);
    }

    function clearCart() {
        localStorage.removeItem(STORAGE_KEY);
        updateCartBadge();
    }

    function getCartItems() {
        return getCart().map(function (ci) {
            var p = products.find(function (p) { return p.id === ci.id; });
            return p ? Object.assign({}, p, { qty: ci.qty, total: p.price * ci.qty }) : null;
        }).filter(Boolean);
    }

    function getCartTotal() {
        return getCartItems().reduce(function (sum, i) { return sum + i.total; }, 0);
    }

    function getCartCount() {
        return getCart().reduce(function (sum, i) { return sum + i.qty; }, 0);
    }

    function getProductById(id) {
        return products.find(function (p) { return p.id === id; }) || null;
    }

    function getAllProducts() { return products; }

    function updateCartBadge() {
        var count = getCartCount();
        var badges = document.querySelectorAll('.cart-badge');
        badges.forEach(function (b) {
            b.textContent = count;
            b.style.display = count > 0 ? 'inline-block' : 'none';
        });
    }

    function showAddedToast() {
        var toast = document.getElementById('cart-toast');
        if (!toast) {
            toast = document.createElement('div');
            toast.id = 'cart-toast';
            toast.innerHTML = '&#10003; Added to cart';
            toast.style.cssText = 'position:fixed;bottom:30px;right:30px;background:#333;color:#fff;padding:12px 20px;border-radius:4px;z-index:9999;font-family:Montserrat,sans-serif;font-size:14px;opacity:0;transition:opacity .3s';
            document.body.appendChild(toast);
        }
        toast.style.opacity = '1';
        clearTimeout(toast._t);
        toast._t = setTimeout(function () { toast.style.opacity = '0'; }, 2500);
    }

    function formatPrice(n) {
        return n.toLocaleString('en-US', { style: 'currency', currency: 'TRY', minimumFractionDigits: 0 });
    }

    document.addEventListener('DOMContentLoaded', function () { updateCartBadge(); });

    return { addItem: addItem, removeItem: removeItem, updateQty: updateQty, clearCart: clearCart, getCartItems: getCartItems, getCartTotal: getCartTotal, getCartCount: getCartCount, getProductById: getProductById, getAllProducts: getAllProducts, formatPrice: formatPrice, updateCartBadge: updateCartBadge, getProductFeatures: function (id) { var p = getProductById(id); return p && p.features ? p.features : []; } };
})();
