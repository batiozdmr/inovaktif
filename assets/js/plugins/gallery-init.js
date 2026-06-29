(function(ef) {
    "use strict";

    /*-----------------------------------------------*/
    /*------------- Extending WP Galley -------------*/
    /*-----------------------------------------------*/

    if (ef('.ef-gallery-outer').length) {
        ef('.ef-gallery-outer').find('div.gallery[id^="gallery"]').each(function(){
            var ths = ef(this);

            ths.imagesLoaded(function(){
                ths.masonry({
                    transitionDuration: 0,
                    itemSelector: '.gallery-item'
                });
            });
        });
    }
})(jQuery);