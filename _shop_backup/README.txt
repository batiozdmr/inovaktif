SHOP BACKUP (hidden from live site)
===================================
These files are the boxing e-commerce shop pages, scripts, and product images.
They are NOT linked from the public website menus.

Contents:
  products.html, product-detail.html, cart.html, checkout.html
  distance-sales-agreement.html, cancellation-refund.html
  js/cart.js, js/shop-ui.js
  images/* (product + payment badge images)

To restore later:
  1. Move HTML files back to the project root.
  2. Move js/* to assets/js/
  3. Move images/* to assets/images/
  4. Re-add Products / Cart menu links and cart.js / shop-ui.js script tags.
  5. Re-enable ensureShopLinks() in assets/js/i18n.js if needed.
