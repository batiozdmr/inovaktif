/* Inovaktif Shop - Shared UI (footer badges, legal links) */
var InoShopUI = (function () {
    var PAYMENT_BAND = 'assets/images/payment-methods-band.png?v=2';
    var IYZICO_BADGE = 'assets/images/iyzico-ile-ode.png?v=2';

    function tx(key, fallback) {
        return (window.InoI18n && InoI18n.t(key)) || fallback;
    }

    function paymentBannerHtml() {
        return '<div class="ino-payment-badges">' +
            '<p class="ino-secure-payment-label">' + tx('shop.secure', 'Secure Payment') + '</p>' +
            '<div class="ino-payment-banner-wrap">' +
            '<img src="' + PAYMENT_BAND + '" alt="iyzico, Mastercard, Visa, American Express, Troy" class="ino-payment-band" loading="lazy"/>' +
            '</div>' +
            '<div class="ino-iyzico-wrap">' +
            '<img src="' + IYZICO_BADGE + '" alt="Pay with iyzico" class="ino-iyzico-badge" loading="lazy"/>' +
            '</div>' +
            '</div>';
    }

    function legalLinksHtml() {
        return '<div class="ino-legal-links">' +
            '<a href="privacy-policy.html">' + tx('nav.privacy', 'Privacy Policy') + '</a>' +
            '<a href="distance-sales-agreement.html">' + tx('nav.distance', 'Distance Sales Agreement') + '</a>' +
            '<a href="cancellation-refund.html">' + tx('nav.cancel', 'Cancellation & Refund Policy') + '</a>' +
            '<a href="cookie-policy.html">' + tx('nav.cookies', 'Cookie Policy') + '</a>' +
            '</div>';
    }

    function shopFooterExtrasHtml() {
        return legalLinksHtml() + paymentBannerHtml();
    }

    function init() {
        document.querySelectorAll('[data-ino-shop-footer]').forEach(function (el) {
            el.innerHTML = shopFooterExtrasHtml();
        });
        document.querySelectorAll('[data-ino-payment-banner]').forEach(function (el) {
            el.innerHTML = paymentBannerHtml();
        });
    }

    document.addEventListener('DOMContentLoaded', init);
    document.addEventListener('ino-lang', init);

    return {
        paymentBannerHtml: paymentBannerHtml,
        legalLinksHtml: legalLinksHtml,
        shopFooterExtrasHtml: shopFooterExtrasHtml
    };
})();
