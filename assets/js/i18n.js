/* Inovaktif — TR / EN */
var InoI18n = (function () {
    var KEY = 'ino_lang';

    var dict = {
        'nav.home': { en: 'Inovaktif', tr: 'Inovaktif' },
        'nav.security': { en: 'Information Security Policy', tr: 'Bilgi Güvenliği Politikası' },
        'nav.cookies': { en: 'Cookie Policy', tr: 'Çerez Politikası' },
        'nav.privacy': { en: 'Privacy Policy', tr: 'Gizlilik Politikası' },
        'nav.investments': { en: 'Investments', tr: 'Yatırımlar' },
        'nav.solutions': { en: 'Solutions', tr: 'Çözümler' },
        'nav.products': { en: 'Products', tr: 'Ürünler' },
        'nav.contact': { en: 'Contact', tr: 'İletişim' },
        'nav.cart': { en: 'Cart', tr: 'Sepet' },
        'nav.distance': { en: 'Distance Sales Agreement', tr: 'Mesafeli Satış Sözleşmesi' },
        'nav.cancel': { en: 'Cancellation & Refund Policy', tr: 'İptal ve İade Politikası' },
        'brand.tag': { en: 'Creative Digital Solutions', tr: 'Yaratıcı Dijital Çözümler' },
        'home.title': { en: 'Inovaktif', tr: 'Inovaktif' },
        'home.tagline': {
            en: 'Where<em> Active</em> &amp; <em>Innovation</em> come together in harmony',
            tr: '<em>Aktif</em> ile <em>İnovasyon</em>un bir arada uyum bulduğu yer'
        },
        'home.slideTitle': { en: 'Creative Digital Solutions', tr: 'Yaratıcı Dijital Çözümler' },
        'home.slideText': {
            en: 'Custom designed products to fit market needs of the evolving world',
            tr: 'Değişen dünyanın ihtiyaçlarına göre tasarlanmış ürünler'
        },
        'home.tech': { en: 'Technologies', tr: 'Teknolojiler' },
        'home.aboutTitle': { en: 'About Us', tr: 'Hakkımızda' },
        'home.about': {
            en: 'Inovaktif specializes in helping corporations and consumers use software as a service tools, products to better micro mobility and applications to connect with customers and prospects. What brought us together was a fundamental belief that technology, while maturing nicely for individual use, is in its infancy for corporate use and brand building. We make strategic product planning, guided by our unique ability to think beyond what people are looking for and innovating to meet those standards. Our platforms and in-house creative, planning, design and development teams combine to provide worthwhile advantages wanting to maximize the potential of technology in every day life.',
            tr: 'Inovaktif, kurumların ve kullanıcıların yazılım hizmetlerini, mikro mobilite ürünlerini ve müşterileriyle buluşan uygulamaları daha iyi kullanmasına yardımcı olur. Bizi bir araya getiren şey, teknolojinin bireysel kullanımda olgunlaşırken kurumsal kullanım ve marka inşasında hâlâ başlangıç aşamasında olduğu inancıydı. İnsanların aradığının ötesini düşünerek stratejik ürün planlaması yapar, bu standartları karşılayacak şekilde yenilik üretiriz. Platformlarımız ile kurum içi yaratıcı, planlama, tasarım ve geliştirme ekiplerimiz teknolojinin günlük hayattaki potansiyelini birlikte değerlendirir.'
        },
        'contact.title': { en: 'Contact', tr: 'İletişim' },
        'contact.name': { en: 'Your Name (required)', tr: 'Adınız (zorunlu)' },
        'contact.email': { en: 'Your Email (required)', tr: 'E-postanız (zorunlu)' },
        'contact.subject': { en: 'Subject', tr: 'Konu' },
        'contact.message': { en: 'Your Message', tr: 'Mesajınız' },
        'contact.send': { en: 'Send', tr: 'Gönder' },
        'contact.address': { en: 'Address:', tr: 'Adres:' },
        'contact.legal': { en: 'Legal name:', tr: 'Resmî unvan:' },
        'contact.tel': { en: 'Phone:', tr: 'Telefon:' },
        'contact.mail': { en: 'Email:', tr: 'E-posta:' },
        'solutions.title': { en: 'Solutions', tr: 'Çözümler' },
        'solutions.lead': { en: 'Inovaktif offers 360 degree solutions to selected startups', tr: 'Inovaktif, seçili girişimlere 360 derece çözüm sunar' },
        'invest.title': { en: 'Investments', tr: 'Yatırımlar' },
        'invest.lead': { en: 'Products made by Inovaktif', tr: 'Inovaktif ürünleri' },
        'security.title': { en: 'Information Security policy', tr: 'Bilgi Güvenliği Politikası' },
        'security.doc': { en: 'Inovaktif Information Security Policy (Turkish document)', tr: 'İnovaktif Bilişim Bilgi Güvenliği Politikamız' },
        'security.note': { en: 'The downloadable policy document is in Turkish.', tr: 'Politika belgesini Türkçe olarak indirebilirsiniz.' },
        'cookies.title': { en: 'Inovaktif Cookie Policy', tr: 'Çerez Politikası' },
        'products.title': { en: 'Boxing Products', tr: 'Boks Ürünleri' },
        'products.lead': { en: 'Professional boxing gloves, bags, apparel and training gear', tr: 'Profesyonel boks eldivenleri, çuvallar, giyim ve antrenman ekipmanı' },
        'cart.title': { en: 'My Cart', tr: 'Sepetim' },
        'checkout.title': { en: 'Secure Checkout', tr: 'Güvenli Ödeme' },
        'checkout.lead': { en: 'Enter your details and complete your order', tr: 'Bilgilerinizi girin ve siparişinizi tamamlayın' },
        'detail.title': { en: 'Product Details', tr: 'Ürün Detayı' },
        'detail.lead': { en: 'Service details and pricing', tr: 'Ürün bilgisi ve fiyat' },
        'detail.home': { en: 'Home', tr: 'Ana sayfa' },
        'detail.priceNote': { en: 'Prices exclude VAT. Free shipping on orders over ₺2,000.', tr: 'Fiyatlara KDV dahil değildir. ₺2.000 üzeri siparişlerde kargo ücretsizdir.' },
        'detail.goCart': { en: 'Go to Cart', tr: 'Sepete Git' },
        'detail.ssl': { en: '256-bit SSL secure checkout', tr: '256-bit SSL ile güvenli ödeme' },
        'detail.support': { en: 'Support on business days', tr: 'İş günlerinde destek' },
        'detail.guarantee': { en: '14-day withdrawal right', tr: '14 gün cayma hakkı' },
        'distance.title': { en: 'Distance Sales Agreement', tr: 'Mesafeli Satış Sözleşmesi' },
        'distance.lead': { en: 'Under the Turkish Consumer Protection Law No. 6502', tr: '6502 sayılı Tüketicinin Korunması Hakkında Kanun kapsamında' },
        'cancel.title': { en: 'Cancellation & Refund Policy', tr: 'İptal ve İade Politikası' },
        'cancel.lead': { en: 'Under Law No. 6502 and the Distance Contracts Regulation', tr: '6502 sayılı Kanun ve Mesafeli Sözleşmeler Yönetmeliği kapsamında' },
        'privacy.title': { en: 'Privacy Policy', tr: 'Gizlilik Politikası' },
        'privacy.lead': { en: 'Personal data notice under KVKK Law No. 6698', tr: '6698 sayılı KVKK kapsamında aydınlatma metni' },
        'shop.all': { en: 'All', tr: 'Tümü' },
        'shop.gloves': { en: 'Gloves', tr: 'Eldiven' },
        'shop.bags': { en: 'Bags', tr: 'Çuvallar' },
        'shop.apparel': { en: 'Apparel', tr: 'Giyim' },
        'shop.protection': { en: 'Protection', tr: 'Koruma' },
        'shop.training': { en: 'Training', tr: 'Antrenman' },
        'shop.kits': { en: 'Kits', tr: 'Setler' },
        'shop.details': { en: 'Details', tr: 'İncele' },
        'shop.add': { en: 'Add to Cart', tr: 'Sepete Ekle' },
        'shop.vat': { en: '+ VAT', tr: '+ KDV' },
        'shop.added': { en: 'Added to cart', tr: 'Sepete eklendi' },
        'shop.secure': { en: 'Secure Payment', tr: 'Güvenli Ödeme' },
        'shop.emptyTitle': { en: 'Your cart is empty', tr: 'Sepetiniz boş' },
        'shop.emptyText': { en: "You haven't added any products yet.", tr: 'Henüz ürün eklemediniz.' },
        'shop.start': { en: 'Start Shopping', tr: 'Alışverişe Başla' },
        'shop.cartCount': { en: 'Cart ({n} items)', tr: 'Sepet ({n} ürün)' },
        'shop.product': { en: 'Product', tr: 'Ürün' },
        'shop.qty': { en: 'Qty', tr: 'Adet' },
        'shop.unit': { en: 'Unit Price', tr: 'Birim Fiyat' },
        'shop.total': { en: 'Total', tr: 'Toplam' },
        'shop.subtotal': { en: 'Subtotal', tr: 'Ara Toplam' },
        'shop.vatLine': { en: 'VAT (18%)', tr: 'KDV (%18)' },
        'shop.grand': { en: 'Grand Total', tr: 'Genel Toplam' },
        'shop.checkout': { en: 'Proceed to Checkout', tr: 'Ödemeye Geç' },
        'shop.continue': { en: 'Continue Shopping', tr: 'Alışverişe Devam' },
        'shop.summary': { en: 'Order Summary', tr: 'Sipariş Özeti' },
        'shop.ssl': { en: 'Secure checkout with 256-bit SSL', tr: '256-bit SSL ile güvenli ödeme' },
        'shop.remove': { en: 'Remove', tr: 'Kaldır' },
        'shop.back': { en: 'Back', tr: 'Geri Dön' },
        'shop.features': { en: 'Features', tr: 'Özellikler' },
        'shop.related': { en: 'You may also like', tr: 'Bunlar da ilginizi çekebilir' },
        'shop.view': { en: 'View', tr: 'İncele' },
        'shop.stepCart': { en: 'Cart', tr: 'Sepet' },
        'shop.stepPay': { en: 'Payment', tr: 'Ödeme' },
        'shop.stepDone': { en: 'Confirmation', tr: 'Onay' },
        'shop.billing': { en: 'Billing / Contact Information', tr: 'Fatura / İletişim Bilgileri' },
        'shop.first': { en: 'First Name *', tr: 'Ad *' },
        'shop.last': { en: 'Last Name *', tr: 'Soyad *' },
        'shop.email': { en: 'Email *', tr: 'E-posta *' },
        'shop.phone': { en: 'Phone *', tr: 'Telefon *' },
        'shop.company': { en: 'Company Name', tr: 'Şirket Unvanı' },
        'shop.taxOffice': { en: 'Tax Office', tr: 'Vergi Dairesi' },
        'shop.taxId': { en: 'Tax ID / National ID', tr: 'Vergi No / T.C. Kimlik No' },
        'shop.address': { en: 'Address *', tr: 'Adres *' },
        'shop.city': { en: 'City *', tr: 'Şehir *' },
        'shop.select': { en: 'Select', tr: 'Seçiniz' },
        'shop.other': { en: 'Other', tr: 'Diğer' },
        'shop.zip': { en: 'Postal Code', tr: 'Posta Kodu' },
        'shop.payMethod': { en: 'Payment Method', tr: 'Ödeme Yöntemi' },
        'shop.card': { en: 'Credit / Debit Card', tr: 'Kredi / Banka Kartı' },
        'shop.wire': { en: 'Bank Transfer', tr: 'Havale / EFT' },
        'shop.cardName': { en: 'Name on Card *', tr: 'Kart Üzerindeki İsim *' },
        'shop.cardNo': { en: 'Card Number *', tr: 'Kart Numarası *' },
        'shop.exp': { en: 'Expiry Date *', tr: 'Son Kullanma *' },
        'shop.cvv': { en: 'CVV *', tr: 'CVV *' },
        'shop.install': { en: 'Installments', tr: 'Taksit' },
        'shop.single': { en: 'Single Payment', tr: 'Tek Çekim' },
        'shop.inst2': { en: '2 Installments', tr: '2 Taksit' },
        'shop.inst3': { en: '3 Installments', tr: '3 Taksit' },
        'shop.inst6': { en: '6 Installments', tr: '6 Taksit' },
        'shop.inst9': { en: '9 Installments', tr: '9 Taksit' },
        'shop.inst12': { en: '12 Installments', tr: '12 Taksit' },
        'shop.needName': { en: 'Please fill in your first name and email.', tr: 'Lütfen adınızı ve e-posta adresinizi girin.' },
        'shop.needChecks': { en: 'Please read and accept all agreements.', tr: 'Lütfen tüm sözleşmeleri okuyup onaylayın.' },
        'shop.modalTitle': { en: 'Payments Currently Unavailable', tr: 'Ödeme şu an alınamıyor' },
        'shop.modalBody': {
            en: 'We are currently unable to accept payments as our <strong>iyzico</strong> membership process is still in progress.<br><br>To complete your order, please contact us or use <strong>bank transfer</strong>.<br><br>📧 <strong>info@inovaktif.com</strong><br>📞 <strong>+90 212 258 80 34</strong>',
            tr: '<strong>iyzico</strong> üyelik sürecimiz devam ettiği için şu an kartla ödeme alamıyoruz.<br><br>Siparişi tamamlamak için bizimle iletişime geçin veya <strong>havale / EFT</strong> kullanın.<br><br>📧 <strong>info@inovaktif.com</strong><br>📞 <strong>+90 212 258 80 34</strong>'
        },
        'shop.modalOk': { en: 'OK, Got It', tr: 'Tamam' },
        'shop.payNow': { en: 'Complete Payment', tr: 'Ödemeyi Tamamla' },
        'shop.bankTitle': { en: 'Bank Account Details', tr: 'Banka Hesap Bilgileri' },
        'shop.bank': { en: 'Bank:', tr: 'Banka:' },
        'shop.accountName': { en: 'Account Name:', tr: 'Hesap Adı:' },
        'shop.reference': { en: 'Reference:', tr: 'Açıklama:' },
        'shop.referenceNote': { en: 'Please include your order number', tr: 'Lütfen sipariş numaranızı yazın' },
        'shop.wireNote': { en: 'After completing your bank transfer, please send the receipt to info@inovaktif.com. Your service will be activated once payment is verified.', tr: 'Havale işleminizden sonra dekontu info@inovaktif.com adresine gönderin. Ödeme doğrulandıktan sonra hizmetiniz etkinleştirilir.' },
        'shop.agreements': { en: 'Agreements', tr: 'Sözleşmeler' },
        'shop.acceptDistance': { en: 'I have read and accept the <a href="distance-sales-agreement.html" target="_blank">Distance Sales Agreement</a>. *', tr: '<a href="distance-sales-agreement.html" target="_blank">Mesafeli Satış Sözleşmesi</a>\'ni okudum ve kabul ediyorum. *' },
        'shop.acceptCancel': { en: 'I have read and accept the <a href="cancellation-refund.html" target="_blank">Cancellation and Refund Policy</a>. *', tr: '<a href="cancellation-refund.html" target="_blank">İptal ve İade Politikası</a>\'nı okudum ve kabul ediyorum. *' },
        'shop.acceptPrivacy': { en: 'I have read and accept the <a href="privacy-policy.html" target="_blank">Privacy Policy</a> on the processing of my personal data. *', tr: 'Kişisel verilerimin işlenmesine ilişkin <a href="privacy-policy.html" target="_blank">Gizlilik Politikası</a>\'nı okudum ve onaylıyorum. *' },
        'shop.phFirst': { en: 'Your first name', tr: 'Adınız' },
        'shop.phLast': { en: 'Your last name', tr: 'Soyadınız' },
        'shop.phEmail': { en: 'name@company.com', tr: 'ad@sirket.com' },
        'shop.phPhone': { en: '+90 5xx xxx xx xx', tr: '+90 5xx xxx xx xx' },
        'shop.phCompany': { en: 'Company name (optional)', tr: 'Şirket unvanı (isteğe bağlı)' },
        'shop.phTaxOffice': { en: 'Tax office', tr: 'Vergi dairesi' },
        'shop.phTaxId': { en: 'Tax / ID number', tr: 'Vergi no / T.C. kimlik no' },
        'shop.phAddress': { en: 'Billing address', tr: 'Fatura adresi' },
        'shop.phCardName': { en: 'FULL NAME', tr: 'AD SOYAD' },
        'footer.copy': {
            en: '&copy; 2024 Inovaktif - <a href="https://tanfer.group/" target="_blank">a Tanfer Group Company</a>',
            tr: '&copy; 2024 Inovaktif - <a href="https://tanfer.group/" target="_blank">bir Tanfer Group şirketidir</a>'
        },
        'footer.mail': { en: 'Send Mail', tr: 'E-posta Gönder' }
    };

    var NAV_FILES = {
        'index.html': 'nav.home',
        'information-security-policy.html': 'nav.security',
        'cookie-policy.html': 'nav.cookies',
        'privacy-policy.html': 'nav.privacy',
        'investments.html': 'nav.investments',
        'solutions.html': 'nav.solutions',
        'contact.html': 'nav.contact'
    };

    var H1 = {
        'Inovaktif': 'home.title',
        'Contact': 'contact.title',
        'İletişim': 'contact.title',
        'Solutions': 'solutions.title',
        'Çözümler': 'solutions.title',
        'Investments': 'invest.title',
        'Yatırımlar': 'invest.title',
        'Information Security policy': 'security.title',
        'Information Security Policy': 'security.title',
        'Bilgi Güvenliği Politikası': 'security.title',
        'Inovaktif Cookie Policy': 'cookies.title',
        'Cookie Policy': 'cookies.title',
        'Çerez Politikası': 'cookies.title',
        'Boxing Products': 'products.title',
        'Boks Ürünleri': 'products.title',
        'My Cart': 'cart.title',
        'Sepetim': 'cart.title',
        'Secure Checkout': 'checkout.title',
        'Güvenli Ödeme': 'checkout.title',
        'Product Details': 'detail.title',
        'Ürün Detayı': 'detail.title',
        'Privacy Policy': 'privacy.title',
        'Gizlilik Politikası': 'privacy.title',
        'Mesafeli Satış Sözleşmesi': 'distance.title',
        'Distance Sales Agreement': 'distance.title',
        'İptal ve İade Politikası': 'cancel.title',
        'Cancellation & Refund Policy': 'cancel.title'
    };

    function lang() {
        var saved = localStorage.getItem(KEY);
        if (saved === 'tr' || saved === 'en') return saved;
        return (navigator.language || '').toLowerCase().indexOf('tr') === 0 ? 'tr' : 'en';
    }

    function t(key) {
        var row = dict[key];
        if (!row) return '';
        return row[lang()] || row.en || '';
    }

    function fileOf(href) {
        if (!href) return '';
        var clean = href.split('#')[0].split('?')[0];
        var parts = clean.split('/');
        return parts[parts.length - 1];
    }

    function prefixFrom(href) {
        if (!href) return '';
        var i = href.lastIndexOf('/');
        return i >= 0 ? href.slice(0, i + 1) : '';
    }

    function setText(el, value) {
        var badge = el.querySelector('.cart-badge, .nav-cart-badge');
        if (!badge) {
            el.textContent = value;
            return;
        }
        var keep = badge.cloneNode(true);
        el.textContent = value + ' ';
        el.appendChild(keep);
    }

    function ensureSwitcher() {
        if (document.getElementById('ef-wpml-lang-switcher')) return;
        var ul = document.createElement('ul');
        ul.id = 'ef-wpml-lang-switcher';
        ul.innerHTML = '<li data-lang-btn="tr"><a href="#" data-set-lang="tr">TR</a></li>' +
            '<li data-lang-btn="en"><a href="#" data-set-lang="en">EN</a></li>';
        document.body.appendChild(ul);
        ul.addEventListener('click', function (e) {
            var btn = e.target.closest('[data-set-lang]');
            if (!btn) return;
            e.preventDefault();
            localStorage.setItem(KEY, btn.getAttribute('data-set-lang'));
            apply();
        });
    }

    function markActive() {
        var current = lang();
        document.querySelectorAll('#ef-wpml-lang-switcher [data-lang-btn]').forEach(function (li) {
            li.classList.toggle('ef-active-lang', li.getAttribute('data-lang-btn') === current);
        });
    }

    function ensurePrivacyLink() {
        var cookie = document.querySelector('a[href$="cookie-policy.html"]');
        if (!cookie || !cookie.parentElement || !cookie.parentElement.parentElement) return;
        var list = cookie.parentElement.parentElement;
        if (list.querySelector('a[href$="privacy-policy.html"]')) return;
        var prefix = prefixFrom(cookie.getAttribute('href'));
        var li = document.createElement('li');
        li.className = 'menu-item menu-item-privacy-policy';
        li.innerHTML = '<a rel="privacy-policy" href="' + prefix + 'privacy-policy.html"></a>';
        cookie.parentElement.insertAdjacentElement('afterend', li);
    }

    function removeShopLinks() {
        document.querySelectorAll(
            '#menu-menu-1 a[href*="products.html"], #menu-menu-1 a[href*="cart.html"], #menu-menu-1 a[href*="checkout.html"], #menu-menu-1 a[href*="product-detail.html"]'
        ).forEach(function (a) {
            var li = a.closest('li');
            if (li) li.parentNode.removeChild(li);
        });
        document.querySelectorAll('.cart-float, .nav-cart-link, [data-ino-shop-footer], .ino-payment-badges, .ino-legal-links').forEach(function (el) {
            if (el.parentNode) el.parentNode.removeChild(el);
        });
    }

    function ensureFooter() {
        var footer = document.querySelector('#ef-footer-inner');
        if (!footer || footer.querySelector('[data-ino-legal], [data-ino-shop-footer]')) return;
        var sample = document.querySelector('a[href$="cookie-policy.html"], a[href$="index.html"], a[href$="../index.html"]');
        var prefix = '';
        var any = document.querySelector('a[href*="cookie-policy"]');
        if (any) prefix = prefixFrom(any.getAttribute('href'));
        else if (location.pathname.indexOf('/projects/') !== -1) prefix = '../';
        var p = document.createElement('p');
        p.className = 'ino-footer-legal';
        p.setAttribute('data-ino-legal', '');
        p.innerHTML = '<a href="' + prefix + 'privacy-policy.html"></a>' +
            '<a href="' + prefix + 'cookie-policy.html"></a>';
        footer.appendChild(p);
        sample = sample;
    }

    function applyNav() {
        document.querySelectorAll('#menu-menu-1 a[href], .ino-legal-links a[href]').forEach(function (a) {
            var key = NAV_FILES[fileOf(a.getAttribute('href'))];
            if (!key) return;
            if (a.querySelector('img')) return;
            setText(a, t(key));
        });
        document.querySelectorAll('.ino-footer-legal a').forEach(function (a) {
            var file = fileOf(a.getAttribute('href'));
            if (file === 'privacy-policy.html') a.textContent = t('nav.privacy');
            if (file === 'cookie-policy.html') a.textContent = t('nav.cookies');
        });
    }

    function applyKeyed() {
        document.querySelectorAll('[data-i18n]').forEach(function (el) {
            var value = t(el.getAttribute('data-i18n'));
            if (value) setText(el, value);
        });
        document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
            var value = t(el.getAttribute('data-i18n-html'));
            if (value) el.innerHTML = value;
        });
        document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
            var value = t(el.getAttribute('data-i18n-placeholder'));
            if (value) el.setAttribute('placeholder', value);
        });
        document.querySelectorAll('[data-i18n-value]').forEach(function (el) {
            var value = t(el.getAttribute('data-i18n-value'));
            if (value) el.value = value;
        });
    }

    function applyKnown() {
        var title = document.getElementById('ef-main-title');
        if (title && !title.hasAttribute('data-i18n')) {
            var key = H1[title.textContent.trim()];
            if (key) title.textContent = t(key);
        }
        document.querySelectorAll('#ef-brand em, .ef-fancy').forEach(function (el) {
            var text = el.textContent.trim();
            if (text === 'Creative Digital Solutions' || text === 'Yaratıcı Dijital Çözümler') {
                el.textContent = t('brand.tag');
            }
        });
        var cue = document.querySelector('#ef-to-content > span');
        if (cue) {
            var cueText = cue.textContent.trim();
            if (cueText === 'Technologies' || cueText === 'Teknolojiler') cue.textContent = t('home.tech');
        }
        document.querySelectorAll('#ef-menu-widgets .widget p, #ef-menu-widgets .widget').forEach(function (el) {
            if (el.querySelector('p') && el.tagName !== 'P') return;
            if (el.textContent.indexOf('specializes in helping') !== -1 || el.textContent.indexOf('mikro mobilite') !== -1) {
                el.innerHTML = '<strong>' + t('home.aboutTitle') + '</strong><br>' + t('home.about');
            }
        });
        document.querySelectorAll('#ef-footer p').forEach(function (p) {
            if (p.hasAttribute('data-ino-legal')) return;
            if (p.textContent.indexOf('Tanfer') !== -1) p.innerHTML = t('footer.copy');
        });
        document.querySelectorAll('a.icon-ef-mail').forEach(function (a) {
            var title = a.getAttribute('title');
            if (title === 'Send Mail' || title === 'E-posta Gönder') a.setAttribute('title', t('footer.mail'));
        });
        var desc = document.getElementById('ef-main-description');
        if (desc && !desc.hasAttribute('data-i18n') && !desc.hasAttribute('data-i18n-html')) {
            var raw = desc.textContent.replace(/\s+/g, ' ').trim();
            if (raw.indexOf('Active') !== -1 || raw.indexOf('İnovasyon') !== -1 || raw.indexOf('Inovasyon') !== -1) {
                desc.innerHTML = t('home.tagline');
            } else if (raw.indexOf('Professional boxing') !== -1 || raw.indexOf('Profesyonel boks') !== -1) {
                desc.textContent = t('products.lead');
            } else if (raw.indexOf('6502') !== -1 && raw.indexOf('Mesafeli Sözleşmeler') !== -1) {
                desc.textContent = t('cancel.lead');
            } else if (raw.indexOf('6502') !== -1) {
                desc.textContent = t('distance.lead');
            } else if (raw.indexOf('6698') !== -1 || raw.indexOf('KVKK') !== -1) {
                desc.textContent = t('privacy.lead');
            }
        }
    }

    function norm(s) {
        return String(s || '')
            .replace(/\u00a0/g, ' ')
            .replace(/[\u2018\u2019]/g, "'")
            .replace(/[\u201c\u201d]/g, '"')
            .replace(/\s+/g, ' ')
            .trim();
    }

    var PHRASES = [
        ['Menu', 'Menü'],
        ['Back', 'Geri'],
        ['In', 'Kategori:'],
        ['Share', 'Paylaş'],
        ['Email', 'E-posta'],
        ['/ Previous', '/ Önceki'],
        ['Next /', 'Sonraki /'],
        ['Client', 'Müşteri'],
        ['Clients', 'Müşteriler'],
        ['Services', 'Hizmetler'],
        ['Website', 'Web sitesi'],
        ['You?', 'Siz?'],
        ['Proprietary Product', 'Kendi ürünümüz'],
        ['Creative', 'Kreatif'],
        ['Production', 'Prodüksiyon'],
        ['Mobile Solutions', 'Mobil Çözümler'],
        ['Web Solutions', 'Web Çözümleri'],
        ['Social Media Management', 'Sosyal Medya Yönetimi'],
        ['Digital Media Planning & Buying', 'Dijital Medya Planlama ve Satın Alma'],
        ['Solutions', 'Çözümler'],
        ['Investments', 'Yatırımlar'],
        ['Contact', 'İletişim'],
        ['Boxing Products', 'Boks Ürünleri'],
        ['Product Details', 'Ürün Detayı'],
        ['Information Security policy', 'Bilgi Güvenliği Politikası'],
        ['Information Security Policy', 'Bilgi Güvenliği Politikası'],
        ['Inovaktif Cookie Policy', 'Çerez Politikası'],
        ['Cookie Policy', 'Çerez Politikası'],
        ['My Cart', 'Sepetim'],
        ['Privacy Policy', 'Gizlilik Politikası'],
        ['Creative Digital Solutions', 'Yaratıcı Dijital Çözümler'],
        ['Distance Sales Agreement', 'Mesafeli Satış Sözleşmesi'],
        ['Cancellation & Refund Policy', 'İptal ve İade Politikası'],
        ['Cancellation and Refund Policy', 'İptal ve İade Politikası'],
        ['Parental Control', 'Ebeveyn kontrolü'],
        ['Home', 'Ana sayfa'],
        ['Checkout', 'Ödeme'],
        ['We never stop dreaming...', 'Hayal etmeyi bırakmayız...'],
        ['Creativity is a phenomenon whereby something new and somehow valuable is formed. The created item may be intangible (such as an idea, a scientific theory, a musical composition or a joke) or an original physical object (such as an invention, a literary work or a painting).', 'Yaratıcılık, yeni ve bir şekilde değerli bir şeyin ortaya çıkmasıdır. Ortaya çıkan şey bir fikir, kuram, beste ya da espri gibi soyut olabilir; bir buluş, edebi eser ya da resim gibi özgün bir nesne de olabilir.'],
        ['Sourcing and selecting optimal media platforms for the brand or product to use. The job of media planning is to determine the best combination of media to achieve the marketing campaign objectives.', 'Marka veya ürün için en uygun mecraları seçeriz. Medya planlamanın işi, kampanya hedeflerine ulaşacak mecra bileşimini belirlemektir.'],
        ['In the process of planning, we need to answer questions such as:', 'Planlama sırasında şu soruların yanıtlanması gerekir:'],
        ['How many of the audience can be reached through the various media?', 'Hedef kitlenin ne kadarına hangi mecralardan ulaşılabilir?'],
        ['On which media (and ad vehicles) should the ads be placed?', 'Reklamlar hangi mecralara ve hangi reklam alanlarına konmalı?'],
        ['How frequent should the ads be placed?', 'Reklamlar hangi sıklıkta yayınlanmalı?'],
        ['How much money should be spent in each medium?', 'Her mecraya ne kadar bütçe ayrılmalı?'],
        ['IOS devices (iPhone, iPad, iPod) and Android devices are not only means for marketing but connecting your brand to your target audience. Mobile web sites or native applications for the Apple Store or Play Store are now means for communicating your message. We build custom solution that best fit your needs.', 'iOS (iPhone, iPad, iPod) ve Android cihazlar yalnızca bir pazarlama kanalı değil, markayı hedef kitleyle buluşturmanın yoludur. Mobil siteler ile App Store ve Play Store uygulamaları mesajınızı taşıyan araçlardır. İhtiyacınıza uygun özel çözümler geliştiririz.'],
        ['Managing an online identity requires more than just making good decisions about the material you share and who you share it with. It also requires monitoring and refining the content that others post about you. It\'s no secret that we believe in the power of conversation. That\'s why we think it is so important to monitor and respond to the conversations that are already happening.', 'Çevrimiçi kimliği yönetmek, neyi kiminle paylaştığınıza karar vermekten fazlasıdır. Başkalarının sizin hakkınızda yazdıklarını izlemek ve düzeltmek de gerekir. Sohbetin gücüne inanırız. Bu yüzden süren konuşmaları izleyip yanıtlamayı önemli buluruz.'],
        ['We can help your company by monitoring on-line communities and social networks. We can help you find out what people are saying about you, and more importantly, how to ensure your brand is portrayed in positive light online.', 'Çevrimiçi toplulukları ve sosyal ağları izleyerek markanız hakkında ne söylendiğini ve markanın olumlu görünmesi için ne gerektiğini ortaya koyarız.'],
        ['Today, the internet has lowered the barriers to publishing. Niche news sites and websites pop up everyday, and it can be a real chore keeping track of all of them. We can monitor the web for you so that you can focus on your business.', 'İnternet yayın yapmanın eşiğini düşürdü. Her gün yeni niş siteler çıkıyor ve hepsini takip etmek zorlaşıyor. Siz işinize odaklanırken biz web\'i sizin için izleriz.'],
        ['Managing your social identity consists of three major components:', 'Sosyal kimliği yönetmek üç ana parçadan oluşur:'],
        ['Social Media Profile Creation and Management', 'Sosyal medya profili oluşturma ve yönetimi'],
        ['Reputation Monitoring', 'İtibar izleme'],
        ['Social Media and Search Engine Optimization', 'Sosyal medya ve arama motoru optimizasyonu'],
        ['Strategic Planning, Social Brand Book, Social Strategy, Engagement, Analytics, Monitoring and Exploring Solutions.', 'Stratejik planlama, sosyal marka kitabı, sosyal strateji, etkileşim, analitik, izleme ve çözüm araştırma.'],
        ['We help corporations by creating web based solutions depending on your strategy. We build web sites, micro sites, ecommerce paltforms, mobile back ends, content management systems, user experience designs, wireframe, user interface designs and web based applications with our strong in house team of coders and designers.', 'Stratejinize göre web tabanlı çözümler üretiriz. Güçlü kurum içi yazılım ve tasarım ekibimizle siteler, mikro siteler, e-ticaret platformları, mobil arka uçlar, içerik yönetim sistemleri, kullanıcı deneyimi, wireframe, arayüz ve web uygulamaları geliştiririz.'],
        ['Our team will ensure your visibility on the web boosts in correlation to your strategy and help find the best solutions for your target audience…', 'Ekibimiz, stratejinizle uyumlu biçimde web görünürlüğünüzü artırır ve hedef kitleniz için uygun çözümleri bulur.'],
        ['HTML5, CSS3, Jquery, Python, Django, Wireframe, UX, UI, Mobile and Web Back End Development, Front End development', 'HTML5, CSS3, jQuery, Python, Django, wireframe, UX, UI, mobil ve web arka uç geliştirme, ön yüz geliştirme'],
        ['Lilu was the perfect companion for parents helping keep children tablets and phones secure by offering a wide range of parental control abilities. Product was discontinued after Apple and Google offered these services for free.', 'Lilu, ebeveynlere çocukların tablet ve telefonlarını koruyan geniş bir ebeveyn kontrol seti sunuyordu. Apple ve Google bu hizmetleri ücretsiz sunmaya başlayınca ürün durduruldu.'],
        ['Reachpod, the only Facebook marketing partner in Türkiye, was the social CRM tool of choice for corporate customers worldwide.', 'Reachpod, Türkiye\'deki tek Facebook pazarlama ortağıydı ve dünya genelindeki kurumsal müşterilerin tercih ettiği sosyal CRM aracıydı.'],
        ['VES, in partnership with Vodafone, is a SaaS system designed to track, report and manage contracts and materials used for the settlement of legal work matters. The system is user profile based using a strict hierarchical authority system of employee levels within the company.', 'VES, Vodafone iş birliğiyle hukuki işlerin sözleşmelerini ve belgelerini izlemek, raporlamak ve yönetmek için tasarlanmış bir SaaS sistemidir. Şirket içi yetki seviyelerine dayanan sıkı bir hiyerarşiyle çalışır.'],
        ['ŞARZ is Türkiye\'s largest powerbank rental service network.', 'ŞARZ, Türkiye\'nin en büyük powerbank kiralama ağıdır.'],
        ['Never run out of battery with Şarz powerbank rental on the go', 'Şarz powerbank kiralama ile yolda şarjınız bitmesin'],
        ['Charge your phone, wireless earbuds or tablet on the go and return to a near by station when you are done.', 'Telefonunuzu, kablosuz kulaklığınızı veya tabletinizi yolda şarj edin; işiniz bitince yakındaki istasyona bırakın.'],
        ['Ecommerce Website, UX Design, Analytics Integration, CRM Integration, Social Media Projects, Mobile Apps', 'E-ticaret sitesi, UX tasarım, analitik entegrasyonu, CRM entegrasyonu, sosyal medya projeleri, mobil uygulamalar'],
        ['Social Media Management, Mobile Apps, Website & CMS, Social Media Projects', 'Sosyal medya yönetimi, mobil uygulamalar, web sitesi ve CMS, sosyal medya projeleri'],
        ['Social Media Management, Web Projects, Viral Videos, Production, Digital Media Planning & Buying', 'Sosyal medya yönetimi, web projeleri, viral videolar, prodüksiyon, dijital medya planlama ve satın alma'],
        ['Website, Social Media Management, Social Media Monitoring & Engagement, Digital PR', 'Web sitesi, sosyal medya yönetimi, sosyal medya izleme ve etkileşim, dijital PR'],
        ['Social Media Management, Mobile Apps, Social Media Projects, Web Projects, Social Media Monitoring & Engagement', 'Sosyal medya yönetimi, mobil uygulamalar, sosyal medya projeleri, web projeleri, sosyal medya izleme ve etkileşim'],
        ['INFORMATION ABOUT OUR COOKIE POLICY', 'ÇEREZ POLİTİKAMIZ HAKKINDA'],
        ['What are Cookies?', 'Çerez nedir?'],
        ['Cookies are small text files that are stored to your device via your browser (eg. Chrome, Safari) when you visit relevant web sites.', 'Çerezler, ilgili siteleri ziyaret ettiğinizde tarayıcınız (örneğin Chrome, Safari) aracılığıyla cihazınıza kaydedilen küçük metin dosyalarıdır.'],
        ['Cookies are used for the purposes like remembering your user ID and password, loading the website faster and with less data consumption and remembering your device and they do not store personal information like name, surname or gender.', 'Çerezler kullanıcı adı ve parolayı hatırlamak, sitenin daha hızlı ve daha az veriyle açılmasını sağlamak ve cihazınızı tanımak için kullanılır. Ad, soyad veya cinsiyet gibi kişisel bilgileri saklamazlar.'],
        ['Cookies are created by the providers facilitating the web site you are visiting. This way the provider can tell when you are visiting the same web site with the same device again. In this prospect, cookies are like ID cards that indicate when a user is visiting the same web site on their device.', 'Çerezleri, ziyaret ettiğiniz siteyi sunan taraflar oluşturur. Böylece aynı cihazla aynı siteye yeniden geldiğiniz anlaşılır. Bu yönüyle çerezler, aynı sitede olduğunuzu gösteren bir kimlik kartı gibidir.'],
        ['Most of the cookies are optional and when you\'re visiting our web site for the first time, you should be prompted with a cookie pop-up that asks about your cookie preferences. You also can opt-in and out of optional cookies under our cookies tab. You also can choose to completely opt out of any optional cookies and clear any previously saved cookies via your browser.', 'Çerezlerin çoğu isteğe bağlıdır. Sitemizi ilk kez açtığınızda tercihlerinizi soran bir pencere gösterilir. İsteğe bağlı çerezleri çerez sekmesinden açıp kapatabilir, tarayıcınızdan tümünü reddedip daha önce kaydedilenleri silebilirsiniz.'],
        ['Is it Possible to Prevent the Use of Cookies?', 'Çerez kullanımı engellenebilir mi?'],
        ['As we mention in detail below, you can prevent any and all cookies via your device and/or browser. But with doing so, you may also be preventing some cookies that are essential for our web site to work properly so you might have trouble viewing our web site properly.', 'Aşağıda anlattığımız gibi cihazınızdan veya tarayıcınızdan tüm çerezleri engelleyebilirsiniz. Bunu yaptığınızda sitenin düzgün çalışması için gerekli çerezler de kapanabilir ve sayfalar doğru görünmeyebilir.'],
        ['When you are prompted about your cookie preferences upon your first visit, you can choose \'allow only essential cookies\' option to allow the usage of essential cookies while opting out of any and all non-essential ones. Non-essential ones include cookies that make our web site more user friendly like, remember your user ID and passwords, remember your viewing language preferences and provide faster loading with less data consumption. Non-essential cookies also include cookies that personalise your advertisements.', 'İlk ziyaretinizde yalnızca zorunlu çerezlere izin verebilir, zorunlu olmayanların tümünü kapatabilirsiniz. Zorunlu olmayan çerezler kullanıcı adı ve parolayı, dil tercihinizi hatırlayan ve sayfanın daha hızlı açılmasını sağlayan çerezler ile reklamları kişiselleştiren çerezleri kapsar.'],
        ['How are we, as Inovaktif, are Using Cookies?', 'Inovaktif çerezleri nasıl kullanır?'],
        ['We are using cookies to remember your viewing preferences, collect anonymous information about our visitors (eg. where are they visiting from, how long they have visited certain pages) as well as techinical and performance cookies.', 'Çerezleri görüntüleme tercihlerinizi hatırlamak, ziyaretçiler hakkında anonim bilgi toplamak (nereden geldikleri, sayfalarda ne kadar kaldıkları) ve teknik ile performans amaçları için kullanırız.'],
        ['We are using cookies for analtical purposes; to determine your location, duration of your visits as well as which device you are using to visit us and where in our website you visited.', 'Çerezleri analitik amaçla da kullanırız: konum, ziyaret süresi, kullanılan cihaz ve sitede gezilen yerler.'],
        ['How are we, as Tanfer Group, are Using Third Party Cookies?', 'Tanfer Group üçüncü taraf çerezlerini nasıl kullanır?'],
        ['We are using Google Analytics, a web analysis service. Cookies of this service are used to analyse and report the visits we are getting. You can find more information about Google Analytics as well as how to opt out from it in the link below.', 'Web analiz hizmeti Google Analytics kullanırız. Bu hizmetin çerezleri ziyaretleri analiz etmek ve raporlamak içindir. Google Analytics ve vazgeçme yolu için aşağıdaki bağlantıya bakabilirsiniz.'],
        ['Which Kind of Cookies We are Using?', 'Hangi tür çerezleri kullanıyoruz?'],
        ['Session Cookies:', 'Oturum çerezleri:'],
        ['This cookies are kept for the duration of your visit, they are used for the essential purposes like remembering the choices you make during your visit and they collect no personal info. They are automatically deleted when you close all your browser tabs.', 'Bu çerezler ziyaretiniz boyunca tutulur. Ziyaret sırasında yaptığınız seçimleri hatırlamak gibi zorunlu işler için kullanılır ve kişisel bilgi toplamaz. Tüm tarayıcı sekmelerini kapattığınızda silinir.'],
        ['Technical Cookies:', 'Teknik çerezler:'],
        ['This cookies ensure that our website is working properly and detect the areas that do not.', 'Bu çerezler sitenin düzgün çalışmasını sağlar ve çalışmayan alanları tespit eder.'],
        ['Persistent Cookies:', 'Kalıcı çerezler:'],
        ['These cookies increase the functionality of our website and provide a faster service. They are created permanently on your first visit to the site and are used to remember your preferences when you access our website again.', 'Bu çerezler sitenin işlevini artırır ve daha hızlı hizmet sunar. İlk ziyarette kalıcı olarak oluşturulur ve yeniden geldiğinizde tercihlerinizi hatırlamak için kullanılır.'],
        ['Analytic Cookies:', 'Analitik çerezler:'],
        ['These cookies are used to collect and analyse usage and/or statistics of our website. They do not match user IP/Device adresses with the data and collect/store their datas anonymously.', 'Bu çerezler sitenin kullanımını ve istatistiklerini toplar ve analiz eder. Veriyi IP veya cihaz adresiyle eşleştirmez; bilgileri anonim tutar.'],
        ['Extensions of Our Cookies:', 'Kullandığımız çerezler:'],
        ['COOKIE ID', 'ÇEREZ'],
        ['DOMAIN', 'ALAN ADI'],
        ['DURATION', 'SÜRE'],
        ['DESCRIPTION', 'AÇIKLAMA'],
        ['6 months', '6 ay'],
        ['1 year', '1 yıl'],
        ['1 hour', '1 saat'],
        ['1 day', '1 gün'],
        ['1 year 1 month 4 days', '1 yıl 1 ay 4 gün'],
        ['never', 'süresiz'],
        ['session', 'oturum'],
        ['Google Recaptcha service sets this cookie to identify bots to protect the website against malicious spam attacks.', 'Google reCAPTCHA, siteyi zararlı istenmeyen iletilere karşı korumak için botları ayırt etmek üzere bu çerezi yazar.'],
        ['This cookie is set by the Google recaptcha service to identify bots to protect the website against malicious spam attacks.', 'Bu çerez, siteyi zararlı istenmeyen iletilere karşı korumak için botları ayırt eden Google reCAPTCHA hizmeti tarafından yazılır.'],
        ['CookieYes sets this cookie to remember users\' consent preferences so that their preferences are respected on subsequent visits to this site. It does not collect or store any personal information about the site visitors.', 'CookieYes, tercihlerin sonraki ziyaretlerde de geçerli olması için onay seçimlerinizi hatırlar. Ziyaretçilere ait kişisel bilgi toplamaz ve saklamaz.'],
        ['WordPress sets this cookie when a user interacts with emojis on a WordPress site. It helps determine if the user\'s browser can display emojis properly.', 'WordPress, sitede emoji kullanıldığında bu çerezi yazar. Tarayıcının emojileri doğru gösterip gösteremediğini anlamak içindir.'],
        ['Google Analytics sets this cookie to calculate visitor, session and campaign data and track site usage for the site\'s analytics report. The cookie stores information anonymously and assigns a randomly generated number to recognise unique visitors.', 'Google Analytics bu çerezi ziyaretçi, oturum ve kampanya verisini hesaplamak ve site kullanımını analitik rapora yazmak için kullanır. Bilgi anonim tutulur; benzersiz ziyaretçiler rastgele bir numarayla ayırt edilir.'],
        ['Google Analytics sets this cookie to store information on how visitors use a website while also creating an analytics report of the website\'s performance. Some of the collected data includes the number of visitors, their source, and the pages they visit anonymously.', 'Google Analytics bu çerezi ziyaretçilerin siteyi nasıl kullandığını ve sitenin performans raporunu tutmak için kullanır. Toplanan veriler arasında ziyaretçi sayısı, kaynak ve anonim olarak gezilen sayfalar vardır.'],
        ['Sourcebuster sets this cookie to identify the source of a visit and stores user action information in cookies. This analytical and behavioural cookie is used to enhance the visitor experience on the website.', 'Sourcebuster, ziyaretin kaynağını anlamak ve kullanıcı işlemlerini çerezde tutmak için bu çerezi yazar. Analitik ve davranış çerezidir; ziyaret deneyimini iyileştirmek için kullanılır.'],
        ['Google Universal Analytics sets this cookie to restrain request rate and thus limit data collection on high-traffic sites.', 'Google Universal Analytics, istek hızını sınırlamak ve yoğun sitelerde veri toplamayı kısmak için bu çerezi yazar.'],
        ['How Can You Manage the Usage of Cookies Via Your Browser/Device?', 'Çerezleri tarayıcı veya cihaz üzerinden nasıl yönetirsiniz?'],
        ['All the cookies we use are essential for viewing our website properly and we are currently not using any advertisement/analytic cookies. But you still can opt-out of using any of our cookies as well as remove any previously saved ones. For more information about removing the cookies, you can refer to the links below.', 'Kullandığımız çerezler sitenin düzgün görüntülenmesi için gereklidir; şu an reklam veya analitik çerez kullanmıyoruz. Yine de çerezlerimizi kapatabilir ve daha önce kaydedilenleri silebilirsiniz. Silme adımları için aşağıdaki bağlantılara bakın.']
    ];

    var toTr = {};
    var canon = {};
    var toEn = {};
    PHRASES.forEach(function (pair) {
        var key = norm(pair[0]);
        toTr[key] = pair[1];
        canon[key] = pair[0];
        toEn[norm(pair[1])] = key;
    });
    var srcOf = typeof WeakMap === 'function' ? new WeakMap() : null;

    function applyDocTitle() {
        var root = document.documentElement;
        if (!root.getAttribute('data-ino-title')) root.setAttribute('data-ino-title', document.title);
        var src = root.getAttribute('data-ino-title') || '';
        var parts = src.split(' | ');
        if (!parts.length) return;
        var changed = false;
        var next = parts.map(function (part) {
            var key = norm(part);
            if (!toTr[key] && toEn[key]) key = toEn[key];
            if (!toTr[key]) return part;
            changed = true;
            return lang() === 'tr' ? toTr[key] : canon[key];
        });
        if (changed) document.title = next.join(' | ');
    }

    function applyPhrases() {
        if (!document.body) return;
        var tr = lang() === 'tr';
        var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
            acceptNode: function (node) {
                var parent = node.parentElement;
                if (!parent) return NodeFilter.FILTER_REJECT;
                var tag = parent.tagName;
                if (tag === 'SCRIPT' || tag === 'STYLE' || tag === 'NOSCRIPT') return NodeFilter.FILTER_REJECT;
                if (parent.closest('[data-i18n], [data-i18n-html], [data-i18n-placeholder], #ef-footer, #ef-wpml-lang-switcher')) {
                    return NodeFilter.FILTER_REJECT;
                }
                return NodeFilter.FILTER_ACCEPT;
            }
        });
        var nodes = [];
        while (walker.nextNode()) nodes.push(walker.currentNode);
        nodes.forEach(function (node) {
            var current = norm(node.nodeValue);
            if (!current) return;
            var key = srcOf ? srcOf.get(node) : null;
            if (toTr[current]) key = current;
            else if (!key && toEn[current]) key = toEn[current];
            else if (!key || !toTr[key]) return;
            if (srcOf) srcOf.set(node, key);
            var next = tr ? toTr[key] : canon[key];
            if (!next || norm(node.nodeValue) === norm(next)) return;
            var raw = node.nodeValue;
            var lead = (raw.match(/^\s*/) || [''])[0];
            var trail = (raw.match(/\s*$/) || [''])[0];
            if (lead && trail && lead.length + trail.length >= raw.length) trail = '';
            node.nodeValue = lead + next + trail;
        });
        applyDocTitle();
    }

    function refreshSlideCaption() {
        var fig = document.querySelector('figure.slide_desc');
        if (!fig) return;
        var current = document.querySelector('.fireform-slider-inner .flex-active-slide .html-desc')
            || document.querySelector('.fireform-slider-inner .html-desc');
        if (current) fig.innerHTML = current.innerHTML;
    }

    function apply() {
        document.documentElement.lang = lang();
        ensureSwitcher();
        ensurePrivacyLink();
        removeShopLinks();
        ensureFooter();
        markActive();
        applyKeyed();
        applyKnown();
        applyNav();
        applyPhrases();
        removeShopLinks();
        refreshSlideCaption();
        document.dispatchEvent(new CustomEvent('ino-lang'));
    }

    document.addEventListener('DOMContentLoaded', apply);
    document.addEventListener('click', function (e) {
        var hit = e.target && e.target.closest ? e.target.closest('.toggle-topbar, #ef-toggle-menu') : null;
        if (hit) setTimeout(applyPhrases, 40);
    });

    return { lang: lang, t: t, apply: apply };
})();
