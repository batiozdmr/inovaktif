(function(ef) {
    "use strict";

    /* Homepage slideshow options */

    var ef_js_options = [];
    ef_js_options.slider_options = {
        auto: typeof(ef_js_vars.slider_options.auto) != 'undefined' && ef_js_vars.slider_options.auto && ef_js_vars.slider_options.auto !== '0',
        transition: typeof(ef_js_vars.slider_options.transition) != 'undefined' ? ef_js_vars.slider_options.transition : 'fade',
        cover: typeof(ef_js_vars.slider_options) != 'undefined' && ef_js_vars.slider_options.cover && ef_js_vars.slider_options.cover !== '0',
        caption_easing: 'easeOutCirc', // linear, easeOutCubic, easeInOutCubic, easeInCirc, easeOutCirc, easeInOutCirc, easeInExpo, easeOutExpo, easeInOutExpo, easeInQuad, easeOutQuad, easeInOutQuad, easeInQuart, easeOutQuart, easeInOutQuart, easeInQuint, easeOutQuint, easeInOutQuint, easeInSine, easeOutSine, easeInOutSine,  easeInBack, easeOutBack, easeInOutBack
        transition_speed: typeof(ef_js_vars.slider_options.transition_speed) != 'undefined' ? parseInt(ef_js_vars.slider_options.transition_speed, 10) : 800,
        slide_interval: typeof(ef_js_vars.slider_options.slide_interval) != 'undefined' ? parseInt(ef_js_vars.slider_options.slide_interval, 10) : 5000,
        css_engine: true // set to false if you want to apply jquery animations
    };

    /* Map options */
    ef_js_options.zoomLevel = typeof(ef_js_vars.map_zoom) !== 'undefined' ? parseInt(ef_js_vars.map_zoom, null) : 15;
    ef_js_options.map_marker = typeof(ef_js_vars.map_marker) !== 'undefined' ? ef_js_vars.map_marker : false;

    ef(document).foundation();


    /* Vars */

    ef_js_options.isHome = ef('.page-template-templateshome-template-php').length;
    ef_js_options.breakPoint = 1200;
    ef_js_options.support_transforms = Modernizr.csstransforms;
    ef_js_options.adminBarHgt = ef('body.admin-bar').length ? 32 : 0;
    ef_js_options.main_slideshow = ef('.fireform-slider-inner');
    ef_js_options.sidebar = {
        Width: ef('#ef-sidebar').width(),
        Closed: true // mobile only
    };
    ef_js_options.scrollOffsetY = 0;
    ef_js_options.mainTitle = ef('#ef-main-title');
    ef_js_options.oldText = ef_js_options.mainTitle.text();
    ef_js_options.parallaxSpeedIndex = 3;
    ef_js_options.angle = ef('#ef-header-angle');
    ef_js_options.rotateElement = ef('#ef-slideshow-nav');
    ef_js_options.video = typeof ef_js_vars.video !== 'undefined';
    ef_js_options.hasSliderNav = ef_js_options.rotateElement.length;
    ef_js_options.gridContainer = ef('#ef-portfolio');
    ef_js_options.filtersContainer = ef('#ef-portfolio-filter');
    ef_js_options.ifBlog = ef('#ef-blog-inner').length;
    ef_js_options.gridContainerBlog = ef('.ef-grid-blog');
    ef_js_options.homeBgSlider = ef('.ef-home-default').length;
    ef_js_options.isIE = /(Trident\/[7]{1})/i.test(navigator.userAgent);

    /* Helpers */

    ef.fn.global_transition = ef_js_options.support_transforms ? ef.fn.transition : ef.fn.animate;
    ef_js_options.isMobile = Modernizr.touch || /Mobi|Android/i.test(navigator.userAgent) || navigator.userAgent.match(/Windows Phone/) || navigator.userAgent.match(/Zune/);

    ef_js_options.angleHalfHeight = (function(){
        return ef('#ef-header-angle').length ? ef('#ef-header-angle').height() / 2 : 0;
    });

    ef_js_options.delay_fn = (function() {
        var timer = 0;
        return function(callback, ms) {
            clearTimeout(timer);
            timer = setTimeout(callback, ms);
        };
    })();

    ef_js_options.ifSmallScreen = (function() {
        return ef(window).width() <= ef_js_options.breakPoint;
    });

    ef_js_options.bodyHeight = (function() {
        if (ef_js_options.hasSliderNav || ef_js_options.video) {
            ef('body').css({
                minHeight: ef(window).height() + ef('#ef-header').height() - ef_js_options.angleHalfHeight() - ef_js_options.adminBarHgt
            });
        }
    });

    ef_js_options.headerMin = (function() {
        if (ef(window).height() > ef('#ef-header-inner').height()) {
            ef('#ef-header-inner').css({
                minHeight: ef(window).height() - ef_js_options.angleHalfHeight() - ef_js_options.adminBarHgt - ef('#ef-site-name').height()
            });
        } else {
            ef('#ef-header-inner').css({
                minHeight: 'inherit'
            });
        }
    });

    ef_js_options.navAngleFn = (function() {
        if (Modernizr.csstransforms) {
            var navAngle = -(Math.atan(ef_js_options.angle.height() / ef_js_options.angle.width())) * 180 / Math.PI;
            ef_js_options.rotateElement.css({
                WebkitTransform: 'rotate(' + navAngle + 'deg)',
                MozTransform: 'rotate(' + navAngle + 'deg)',
                msTransform: 'rotate(' + navAngle + 'deg)',
                transform: 'rotate(' + navAngle + 'deg)'
            });
        }
    });

    ef_js_options.hideHead = (function() {
        ef('body').removeClass('ef-menu-active');

        if (ef_js_options.ifSmallScreen()) {
            if ( ef_js_options.gridContainerBlog.length && ef_js_options.gridContainerBlog.data('masonry') ) {
                ef_js_options.gridContainerBlog.data('masonry').layout();
            }
            ef(window).trigger('resize');
            ef('#ef-site-nav').css({
                width: '0%'
            });
            ef('body').removeClass('ef-menu-animation');
        } else {
            ef('#ef-site-nav').css({
                width: '0%',
                transition: 'width ease 0.8s'
            });
            ef_js_options.delay_fn(function() {
                ef('body').removeClass('ef-menu-animation');
                if (ef_js_options.isIE) {
                    ef('.ef-default-logo1').css({
                        position: ''
                    });
                }
            }, 800);
        }
    });

    ef_js_options.showHead = (function() {
        if (ef_js_options.ifSmallScreen()) {
            ef('#ef-site-nav').css({
                width: '100%'
            });
            ef('body').addClass('ef-menu-active').addClass('ef-menu-animation');
        } else {
            ef('body').addClass('ef-menu-animation');

            if (ef_js_options.isIE) {
                ef('.ef-default-logo1').css({
                    position: 'fixed'
                });
            }

            ef_js_options.delay_fn(function() {
                ef('#ef-site-nav').stop().global_transition({
                    width: '100%'
                }, 800, function(){
                    ef('body').addClass('ef-menu-active');
                });
            }, 100);
        }
    });

    ef_js_options.hasAjaxLink = (function() {
        return typeof ef_js_vars.ef_ajax !== 'undefined' && ef_js_vars.ef_ajax.offset < ef_js_vars.ef_ajax.postscount && ef('.cbp-l-loadMore-text-link').length;
    });

    ef.fn.ef_anglesBorder = function() {
        var headA = ef(this),
            headWdt;

        headA.each(function() {
            headWdt = ef(this).parent().width();

            if (ef(this).parent().hasClass('ef-bottom-angle') || !ef(this).parent('a')) {
                ef(this).css({
                    borderRightWidth: headWdt
                });
            } else {
                ef(this).css({
                    borderLeftWidth: headWdt
                });
            }
        });
    };

    ef.fn.ef_adjustImagePositioning = function(callback) {

        var wdt = ef(this).width(),
            hgt = ef(this).height();

        ef(this).find('.ef-adjust-position').css({
            width: '',
            height: ''
        }).each(function() {
            var efimg = ef(this),
                r_w = hgt / wdt,
                i_w = efimg.width(),
                i_h = efimg.height(),
                r_i = i_h / i_w,
                new_w, new_h, new_left, new_top,
                coverTrue;

            coverTrue = !isNaN(ef_js_options.slider_options.cover) ? !ef_js_options.slider_options.cover : false;

            if (r_w > r_i || coverTrue) {
                new_h = hgt;
                new_w = hgt / r_i;
            } else {
                new_h = wdt * r_i;
                new_w = wdt;
            }

            efimg.css({
                width: new_w,
                height: new_h,
                left: (wdt - new_w) / 2,
                top: (hgt - new_h) / 2
            });

            if (callback) {
                callback();
            }
        });
    };

    /* Mediaelement.js */

    ef_js_options.MediaElementInit = (function() {
        ef('video[id^="ef-video-player-"]').each(function(){
            var ifVideoHeader = ef(this).parent('.ef-ext-vid').length || ef(this).parent('#ef-video-header').length,
                vid = ef(this),
                mediaElement = new MediaElementPlayer(this, {
                enableKeyboard: false,
                features: ef_js_options.isHome ? [] : ['playpause','current','progress','duration','tracks','volume','fullscreen'],
                success : function(mediaElement, domNode, player) {
                    if (ifVideoHeader) {
                        if (mejs.MediaFeatures.isiOS) {
                            ef(mediaElement).parents('.mejs-container').css({
                                opacity: 1
                            });
                            ef('figure.slide_desc').css({
                                display: 'block'
                            }).addClass('ef-animate-caption');
                            ef('#ef-loader').remove();
                        } else if (mediaElement.pluginType !== 'youtube' && mediaElement.pluginType !== 'flash') {
                            if (ef_js_options.isMobile) {
                                mediaElement.pause();
                            } else {
                                mediaElement.setMuted(true);
                            }
                            mediaElement.addEventListener('loadedmetadata', function(e) {
                                ef('#ef-loader').remove();
                                mediaElement.setCurrentTime(0);
                                mediaElement.setMuted(false);
                                ef(mediaElement).parents('.mejs-container').global_transition({
                                    opacity: 1
                                });
                                ef('figure.slide_desc').css({
                                    display: 'block'
                                }).addClass('ef-animate-caption');
                            }, false);
                        }
                        ef('.ef-vid-play').on('click', function() {
                            if (!(mejs.MediaFeatures.isiOS && mediaElement.pluginType == 'youtube')) {
                                mediaElement.play();
                            }

                            ef('body').addClass('ef-fullscreen-vid');

                            return false;
                        });

                        mediaElement.addEventListener('pause', function(e){
                            ef('body').removeClass('ef-fullscreen-vid');
                            ef(mediaElement).parents('.mejs-container').addClass('ef-vid-paused');
                        });
                    }
                },
                error: function () {}
            });
        });
    });

    /* Lightbox init */

    var ef_shadowbox_js = [];
        ef_shadowbox_js.play = false;
        ef_shadowbox_js.cycle = 0;
        ef_shadowbox_js.slideSpeed = 4000;
        ef_shadowbox_js.keycodes = new Array(37, 39);
        ef_shadowbox_js.runSBslideshow = (function(){
            ef_shadowbox_js.cycle = setTimeout(function(){
                Shadowbox.next();
            }, ef_shadowbox_js.slideSpeed);
            ef('#sb-progress').find('span').finish().css({width: '0'}).animate({
                width: '100%'
            }, ef_shadowbox_js.slideSpeed);
            ef_shadowbox_js.play = true;
        });
        ef_shadowbox_js.stopSlideshow = (function(){
            clearTimeout(ef_shadowbox_js.cycle);
            ef('#sb-progress').find('span').finish().css({width: '0'});
            ef('#sb-container').removeClass('sb-playing');
            ef_shadowbox_js.play = false;
        });

    Shadowbox.init({
        animate: true,
        overlayColor: '#fff',
        overlayOpacity: 1,
        viewportPadding: 40,
        continuous: true,
        modal: false,
        enableKeys: true,
        onOpen: function() {

            /* Title */

            var sbTitle = ef('#sb-title').clone();
            ef('#sb-title').remove();
            sbTitle.appendTo('#sb-info');

            /* Navigation */

            if (Object.keys(Shadowbox.cache).length > 1) {
                ef('<div id="sb-custom-play"></div>').appendTo('#sb-wrapper-inner');
                ef('<div id="sb-custom-prev"></div><div id="sb-custom-next"></div>').appendTo('#sb-container');
                ef('<div id="sb-progress"><span></span></div>').appendTo('#sb-container');

                ef('#sb-container').find('div').on('click', function() {
                    if (ef(this).is('#sb-custom-prev')) {
                        Shadowbox.previous();
                    } else if (ef(this).is('#sb-custom-next')) {
                        Shadowbox.next();
                    }

                    if ((ef(this).is('#sb-custom-prev') || ef(this).is('#sb-custom-next')) && ef_shadowbox_js.play === true ) {
                        ef_shadowbox_js.stopSlideshow();
                    }
                });

                ef('#sb-custom-play').on('click', function() {
                    var _this = ef(this);
                    if (ef_shadowbox_js.play === false) {
                        ef_shadowbox_js.runSBslideshow();
                        ef('#sb-container').addClass('sb-playing');
                        ef(document).on('keydown', function(e) {
                            if (ef.inArray(e.which, ef_shadowbox_js.keycodes) > -1) ef_shadowbox_js.stopSlideshow();
                        });
                    } else {
                        ef_shadowbox_js.stopSlideshow();
                    }
                });
                ef('#sb-info-inner').css({display: ''});
            }

            ef('#sb-title').css({display: ''});
        },
        onFinish: function(){
            ef('#sb-container').addClass('sb-opened');
            if (ef_shadowbox_js.play === true) ef_shadowbox_js.runSBslideshow();
        },
        onClose: function(){
            ef_shadowbox_js.stopSlideshow();
            ef('#sb-container').removeClass('sb-opened');
            ef('#sb-custom-prev, #sb-progress, #sb-custom-next, #sb-custom-play, #sb-custom-close').remove();
            ef('#sb-custom-close, #sb-info-inner, #sb-title').css({display: 'none'});
        },
        displayNav: false
    });

    /* --- */
    /* App */
    /* --- */

    ef('#ef-sidebar').css({
        x: ef_js_options.sidebar.Width + 100
    });

    if (ef_js_options.isHome && !ef_js_options.homeBgSlider) {
        ef('#ef-header').css({
            zIndex: '10'
        });
    }

    /* Smooth loading/Unloading */

    ef('#ef-loading-overlay').delay(500).global_transition({
        left: '100%'
    }, 500, function(){

        ef('#ef-sidebar').css({
            display: 'block'
        }).animate({
            x: ef_js_options.sidebar.Width - 40
        });
    });

    ef(window).on('beforeunload', function() {
        ef('#ef-loading-overlay').css({
            left: 0,
            right: '100%'
        }).global_transition({
            right: 0
        }, 500);
    });



    /* Wrap iframes by a container to make iframe responsive */

    ef('.entry-content').find('p > iframe').each(function(){
        ef(this).wrap('<s class="ef-responsive-iframe"></s>');
    });



    /* Touch or not */

    if (ef_js_options.isMobile) {
        ef('html').addClass('ef-touch');
    } else {
        ef('html').addClass('ef-no-touch');
    }

    if (navigator.userAgent.match(/(iPad|iPhone|iPod)/g)) {
        ef('html').addClass('ef-appleios');
    }



    /* Preventing empty search */

    ef('.ef-searchform').submit(function(a) {
        var s = ef(this).find("#s");
        if (!s.val()) {
            a.preventDefault();
            s.focus();
        }
    });



    /* Replacing large images with small images on smartphones/tablet pc's */

    if (ef(window).width() < 1024 && ef_js_options.isMobile) {
        ef('img[data-src]').each(function() {
            var newSrc = ef(this).attr('data-src');
            return ef(this).removeAttr('data-src').attr('src', newSrc);
        });
    }



    /* Sidebar */

    if (ef_js_options.isMobile) {
        ef('#ef-sidebar').append('<div id="ef-toggle-sidebar"></div>');
        ef('#ef-toggle-sidebar').on('click', function(){
            if (ef_js_options.sidebar.Closed) {
                ef('#ef-sidebar').global_transition({
                    x: 0
                }, 800, 'easeOutExpo');
            } else {
                ef('#ef-sidebar').global_transition({
                    x: ef_js_options.sidebar.Width - 40
                }, 800, 'easeOutExpo');
            }
            ef_js_options.sidebar.Closed = !ef_js_options.sidebar.Closed;
        });
    } else {
        ef('#ef-sidebar').hover(function(){
            ef('#ef-sidebar').stop().animate({
                x: 0
            }, 800, 'easeInOutQuint');
        }, function(){
            ef('#ef-sidebar').stop().animate({
                x: ef_js_options.sidebar.Width - 40
            }, 800, 'easeInOutQuint');
        });
    }




    /* Navigation */

    ef_js_options.hideHead();

    ef('#ef-toggle-menu').on('click', function() {
        if (!ef('body').hasClass('ef-menu-active')) {
            ef_js_options.showHead();
        } else {
            ef_js_options.hideHead();
        }

        return false;
    });

    ef(document).keyup(function(e) {
        var _code = (e.keyCode ? e.keyCode : e.which);
        if (_code === 27 && ef('.ef-menu-active').length) {
            ef('#ef-toggle-menu').click();
        }
    });



    /* Main background slideshow */

    if (ef_js_options.main_slideshow.length) {

        ef('<figure class="slide_desc ef-animate-caption"></figure>').insertAfter('#fireform-slider-wrapper');
        var ef_desc_obj = ef('figure.slide_desc'),
            ef_html_caption = [],
            ef_slide_url = [],
            ef_slide_color = [];

        /* Init */

        ef_js_options.main_slideshow.imagesLoaded(function() {

            ef_js_options.main_slideshow.css({
                visibility: 'visible',
                opacity: 0
            }).flexslider({
                animation: ef_js_options.slider_options.transition,
                slideshow: ef_js_options.slider_options.auto,
                slideshowSpeed: ef_js_options.slider_options.slide_interval,
                animationSpeed: ef_js_options.slider_options.transition_speed,
                useCSS: ef_js_options.slider_options.css_engine,
                controlNav: ef_js_options.homeBgSlider,
                directionNav: ef('body.single').length,
                prevText: '',
                nextText: '',
                controlsContainer: '#fireform-slider-wrapper',
                keyboard: true,
                multipleKeyboard: true,
                animationLoop: true,
                pauseOnAction: false,
                reverse: false,
                start: function(flexSlider) {
                    if (ef_js_options.homeBgSlider || ef_js_options.hasSliderNav) {
                        ef('<a id="ef-to-project" class="icon-ef-right-small" href="#"></a>').insertAfter(ef('#ef-header'));
                    }
                    if (flexSlider.count <= 1) {
                        ef_js_options.main_slideshow.parent().find('.flex-direction-nav').remove();
                    }
                    flexSlider.ef_adjustImagePositioning(function(){
                        flexSlider.delay(300).global_transition({
                            opacity: 1
                        }, 1000, function(){
                            ef('#ef-loader').remove();
                        });
                    });
                    caption(flexSlider.currentSlide, flexSlider.direction);
                    ef('.ef-footer-angle').ef_anglesBorder();

                    ef('figure.slide_desc, .flex-control-paging').css({
                        display: 'block'
                    });
                },
                before: function(flexSlider) {
                    var curIndex = flexSlider.animatingTo;
                    ef_darkAdjustor(curIndex);
                    caption(curIndex);
                },
                after: function() {
                    ef_desc_obj.addClass('ef-animate-caption');
                }
            });
        });

        /* Main slideshow captions */

        ef_js_options.main_slideshow.find('.ef-slide').each(function() {
            ef_html_caption.push(ef(this).find('.html-desc').html());
            ef_slide_url.push(ef(this).data('url'));
            ef_slide_color.push(ef(this).hasClass('ef-dark-slide'));
        });

        var ef_darkAdjustor = (function(activeind1) {
            ef('body').removeClass('ef-dark-adjustor');
            if (ef_slide_color[activeind1]) ef('body').addClass('ef-dark-adjustor');
        }),
        ef_cap_added = false,
        caption = (function(activeind) {

            if (ef_slide_url[activeind] && ef_js_options.isHome) {
                ef('#ef-to-project').attr('href', ef_slide_url[activeind]).css({
                    bottom: 0
                });
            } else {
                ef('#ef-to-project').attr('href', '').css({
                    bottom: ''
                });
            }

            if (ef_html_caption[activeind]) {
                ef_desc_obj.html(ef_html_caption[activeind]);
                if (ef_cap_added) {
                    ef_desc_obj.removeClass('ef-animate-caption');
                }
                ef_cap_added = true;
            } else {
                ef_desc_obj.html('');
            }
        });

        /* Slideshow navigation */

        ef('.ef-slideshow-prev').on('click', function(e) {
            e.preventDefault();
            ef_js_options.main_slideshow.data('flexslider').flexAnimate(ef_js_options.main_slideshow.data('flexslider').getTarget("prev"));

        });
        ef('.ef-slideshow-next').on('click', function(e) {
            e.preventDefault();
            ef_js_options.main_slideshow.data('flexslider').flexAnimate(ef_js_options.main_slideshow.data('flexslider').getTarget("next"));
        });
    }




    /* Scroll to content */

    var ef_offTop;
    ef('#ef-to-content').on('click', function() {
        if (ef_js_options.isHome) {
            ef_offTop = ef(window).height() + ef(document).height();
        } else {
            ef_offTop = ef('.ef-advanced-layout').length ? ef('#ef-content > main').offset().top : ef('#ef-content').offset().top;
        }
        ef('html, body').animate({
            scrollTop: ef_offTop
        }, 1000);
        return false;
    });




    /* Portfolio & blog */

    var loadMoreObject = {
            init: function() {
                var t = this;

                t.post_per = parseInt(ef_js_vars.ef_ajax.offset, 10);
                t.offset = t.post_per;
                t.total = parseInt(ef_js_vars.ef_ajax.postscount, 10);

                // the job inactive
                t.isActive = false;

                // cache link selector
                t.loadMore = ef('.cbp-l-loadMore-text-link');

                // cache window selector
                t.window = ef(window);

                // add events for scroll
                t.addEvents();

                // trigger method on init
                t.getNewItems();

            },

            addEvents: function() {
                var t = this;
                t.window.on("scroll.loadMoreObject", function() {
                    // get new items on scroll
                    t.getNewItems();
                });
            },

            getNewItems: function() {
                var t = this,
                    topLoadMore, topWindow, clicks;

                if (t.isActive || t.loadMore.hasClass('cbp-l-loadMore-text-stop')) return;

                topLoadMore = t.loadMore.offset().top;
                topWindow = t.window.scrollTop() + t.window.height();

                if (topLoadMore > topWindow) return;

                // this job is now busy
                t.isActive = true;

                // perform ajax request
                ef.ajax({
                    type: "post",
                    cache: false,
                    timeout: 8000,
                    url: ef_js_vars.ef_ajax.ajaxurl,
                    data: ({
                        action: 'ef_ajax_posts',
                        post_type: ef_js_vars.ef_ajax.post_type,
                        offset: t.offset,
                        posts_per: t.post_per,
                        postCommentNonce: ef_js_vars.ef_ajax.postCommentNonce,
                        terms: ef_js_vars.ef_ajax.terms,
                        show_content : ef_js_vars.ef_ajax.show_content,
                        blog_style : ef_js_vars.ef_ajax.blog_style,
                        show_gallery: ef_js_vars.ef_ajax.show_gallery
                    })
                }).done(function(result) {

                    var items,
                        itemsNext,
                        itemsFinish = (function() {
                            t.loadMore.text(ef_js_vars.ef_ajax.no_more_text);
                            t.loadMore.addClass('cbp-l-loadMore-text-stop');

                            t.window.off("scroll.loadMoreObject");

                            ef_js_options.delay_fn(function(){
                                ef('.cbp-l-loadMore-text').fadeOut();
                            }, 1200);
                        });

                    if (ef(result).find('.ef-post').length !== 0) {
                        items = ef(result).find('.ef-post');
                    } else {
                        itemsFinish();
                    }

                    var addItems = (function(callback){
                        if (t.offset < t.total) {
                            // make the job inactive
                            t.isActive = false;

                            topLoadMore = t.loadMore.offset().top;
                            topWindow = t.window.scrollTop() + t.window.height();

                            if (topLoadMore <= topWindow) {
                                t.getNewItems();
                            }
                        } else {
                           itemsFinish();
                        }
                        if (callback) {
                            callback();
                        }
                    });

                    var appendItems = typeof(items) !== 'undefined' ? items : false;

                    if (appendItems) {
                        if (ef_js_options.gridContainer.length) {
                            ef_js_options.gridContainer.cubeportfolio('appendItems', appendItems, addItems);
                        } else {
                            appendItems.hide();
                            ef('#ef-blog-inner').append(appendItems);
                            appendItems.imagesLoaded(function() {
                                appendItems.show();
                                if (ef_js_options.gridContainerBlog.length) {
                                    ef_js_options.gridContainerBlog.data('masonry').appended(appendItems);
                                } else {
                                    appendItems.global_transition({
                                        opacity: 0,
                                        scale: 0.8
                                    }, 0);
                                }
                                ef_js_options.MediaElementInit();
                                appendItems.imagesLoaded(function() {
                                    if (ef_js_options.gridContainerBlog.length) {
                                        ef_js_options.delay_fn(function(){
                                            addItems();
                                        }, 500);
                                    } else {
                                        addItems();
                                        appendItems.global_transition({
                                            opacity: 1,
                                            scale: 1
                                        });
                                    }
                                });
                            });
                        }

                        t.offset = t.offset + t.post_per;
                    }
                }).fail(function() {
                    // make the job inactive
                    t.isActive = false;
                });
            }
        },

        loadMore = Object.create(loadMoreObject);




    /* Portfolio init */

    if (ef_js_options.gridContainer.length) {
        ef_js_options.gridContainer.cubeportfolio({
            animationType: 'scaleSides',
            defaultFilter: '*',
            gapHorizontal: 40,
            gapVertical: 40,
            gridAdjustment: 'responsive',
            displayType: 'sequentially',
            displayTypeSpeed: 100
        });

        // add listener for filters click
        ef_js_options.filtersContainer.on('click', 'a', function(e) {
            var me = ef(this);

            if (!ef.data(ef_js_options.gridContainer[0], 'cubeportfolio').isAnimating) {
                ef_js_options.filtersContainer.find('li').removeClass('cbp-filter-item-active');
                me.parent('li').addClass('cbp-filter-item-active');
            }

            // filter the items
            ef_js_options.gridContainer.cubeportfolio('filter', me.data('filter'), function() {});

            return false;
        });

        ef_js_options.gridContainer.cubeportfolio('showCounter', ef_js_options.filtersContainer.find('a'));

        // Cube Portfolio is an event emitter. You can bind listeners to events with the on and off methods. The supported events are: 'initComplete', 'filterComplete'

        // when the plugin is completed
        if (ef_js_options.hasAjaxLink()) {
            ef_js_options.gridContainer.on('initComplete', function() {
                loadMore.init();
            });

            // when the height of grid is changed
            ef_js_options.gridContainer.on('filterComplete', function() {
                loadMore.window.trigger('scroll.loadMoreObject');
            });
        }
    }




    /* Blog init */

    if (ef_js_options.gridContainerBlog.length) {
        ef_js_options.gridContainerBlog.imagesLoaded(function(){
            ef_js_options.gridContainerBlog.masonry({
                itemSelector: '.ef-post',
                isInitLayout: false
            });

            ef_js_options.gridContainerBlog.masonry('once', 'layoutComplete', function(){
                if (ef_js_options.hasAjaxLink()) {
                    ef_js_options.delay_fn(function(){
                        loadMore.init();
                    }, 800);
                }
            }).layout();
        });
    } else if ( ef_js_options.ifBlog && ef_js_options.hasAjaxLink() ) {
        loadMore.init();
    }



    /* Lightbox for WP native gallery */

    ef('div.gallery[id^="gallery"]').find('a').has('img').each(function(){
        var galt = ef(this).children('img').attr('alt');
        ef(this).attr('title', galt);
    });

    ef('div.gallery[id^="gallery"]').has('.gallery-icon > a').each(function(iaia) {
        var gsrc = ef('a:first > img', this).attr('src'),
            gurl = ef('a:first', this).attr('href'),
            galGroup = 'wp-native-gallery-'+iaia+'';

        if (gurl.substr(-3, 3) == gsrc.substr(-3, 3)) {
            ef('a', this).addClass('ef-gallery-lightbox-'+iaia+'').attr('rel', galGroup);
        }
        Shadowbox.setup('.ef-gallery-lightbox-'+iaia+'',{
            gallery: galGroup
        });
        iaia++;
    });



    /* Lightbox for WooCommerce */

    if (ef_js_vars.woolightbox && ef('.woocommerce.single-product').has('a.zoom')) {
        Shadowbox.setup('a.zoom', {
            gallery: 'zoom'
        });
    }



    /* MediaElement */

    ef_js_options.MediaElementInit();



    /* Show and reposition images if they were loaded */

    if (ef('.ef-adjust-position').length) {
        ef('.ef-positioner').imagesLoaded(function() {
            ef('.ef-positioner').ef_adjustImagePositioning(function() {
                ef('.ef-positioner').children('img').first().css({
                    visibility: 'visible',
                    opacity: '0'
                }).delay(300).global_transition({
                    opacity: '1'
                }, 1000, function(){
                    ef('#ef-loader').remove();
                });
            });
        });
    } else {
        ef('#ef-loader').remove();
    }



    /* Parallax settings */

    if (!ef_js_options.isHome) {
        ef_js_options.keyframes = [{
            'duration': '200%',
            'animations': [
                {
                    'selector' : '#ef-header-inner',
                    'translateY' : '250%',
                    'scale' : 0,
                    'opacity' : -1
                }, {
                    'selector' : '.ef-parallax-block',
                    'translateY' : ['0', '-50%']
                }
            ]
        }];
    } else if (!ef_js_options.homeBgSlider) {
        ef_js_options.keyframes = [{
            'duration': '200%',
            'animations': [
                {
                    'selector' : 'figure.slide_desc',
                    'translateY' : ['-20%', '20%'],
                    'opacity' : [0, 3],
                    'scale' : [0.9, 1.12]
                }, {
                    'selector' : '.ef-parallax-block',
                    'translateY' : ['10%', '-10%']
                }
            ]
        }];
    } else {
        ef_js_options.keyframes = [];
    }

    if (ef_js_vars.parallax && !ef_js_options.isIE && !ef_js_options.isMobile) {
        ef.eFparallax({
            keyframes: ef_js_options.keyframes
        });
    }



    /* On window resize */

    ef(window).smartresize(function() {
        if (ef_js_options.isHome) {
            if (ef(window).width() <= 767) {
                ef('.fireform-slider-inner, #ef-video-header').css({
                    height: ef(window).height()
                });
            }
            ef('html').ef_adjustImagePositioning();
        } else {
            ef('.ef-positioner').ef_adjustImagePositioning();
        }

        ef('#ef-site-nav-inner').css({
            width: ef(window).width()
        });
    });

    ef(window).on('resize orientationchange', function(){
        var oldSbWidth = ef_js_options.sidebar.Width;

        ef_js_options.sidebar.Width = ef('#ef-sidebar').width();
        if (oldSbWidth !== ef_js_options.sidebar.Width) {
            ef('#ef-sidebar').css({
                x: ef_js_options.sidebar.Width - 40
            });
        }
    });

    ef(window).on('resize', function() {

        ef_js_options.headerMin();

        if (ef_js_options.isHome && !ef_js_options.homeBgSlider) {
            if ((typeof ef_js_options.main_slideshow !== 'undefined' && ef_js_options.main_slideshow.length)) ef_js_options.navAngleFn();
            ef_js_options.bodyHeight();
        }

        ef('.ef-header-angle, .ef-footer-angle').ef_anglesBorder();

        if (typeof(ef_js_options.main_slideshow) != 'undefined' && ef_js_options.slider_options.auto){
            var sldFlex = ef_js_options.main_slideshow.data('flexslider');
            if (typeof sldFlex !== 'undefined' && sldFlex.playing) {
                sldFlex.pause();
                sldFlex.play();
            }
        }

    }).trigger('resize');

    ef(document).on('webkitfullscreenchange mozfullscreenchange fullscreenchange', function(e) {
        ef(window).trigger('resize');
    });



    /* On scroll event */

    ef(window).scroll(function() {
        if (!ef_js_options.homeBgSlider) {
            ef_js_options.scrollOffsetY = ef(document).scrollTop();

            if (ef_js_options.scrollOffsetY > ef('#ef-header-inner').height() * 0.8) {
                ef('body').addClass('ef-header-out');
            } else {
                ef('body').removeClass('ef-header-out');
            }
        }
    }).trigger('scroll');



    /* Mini cart */

    ef_js_options.openedCart = false;
    ef('body').on('click', 'a.cart-contents', function() {
        if (!ef_js_options.openedCart) {
            ef('.ef-mini-cart').css({
                display: 'block'
            });
            ef('#ef-sidebar').css({
                display: 'none'
            });
        } else {
            ef('.ef-mini-cart').css({
                display: 'none'
            });
            ef('#ef-sidebar').css({
                display: 'block'
            });
        }
        ef_js_options.openedCart = !ef_js_options.openedCart;

        return false;
    });



    /* Sharing buttons */

    ef('.ef-share-buttons').each(function(){
        ef(this).find('a:not(.icon-ef-mail)').on('click', function(){
            if (ef(this).hasClass('icon-ef-pinterest')) {
                var e = document.createElement('script');
                e.setAttribute('type','text/javascript');
                e.setAttribute('charset','UTF-8');
                e.setAttribute('src','http://assets.pinterest.com/js/pinmarklet.js?r='+Math.random()*99999999);
                document.body.appendChild(e);

                return false;
            } else if (!ef_js_options.isMobile) {
                var w = 500,
                    h = 500,
                    offsetLeft = (screen.width/2)-(w/2),
                    offsetTop = (screen.height/2)-(h/2),
                    targetWin = window.open(ef(this).prop('href'), ef(this).prop('title'), 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=1, resizable=1, copyhistory=no, width='+w+', height='+h+', top='+offsetTop+', left='+offsetLeft);

                return false;
            }
        });
    });


    /* Vimeo */

    if (ef('#ef-ext-video-v').length){
        var vidPIfr = ef('#ef-ext-video-v')[0],
            vimPlayer = $f(vidPIfr),
            vimeoStop = (function(id){
                ef('body').removeClass('ef-fullscreen-vid');
            }),
            onPlayProgress = (function(id){
                ef('body').addClass('ef-fullscreen-vid');
            });

        vimPlayer.addEvent('ready', function() {
            vimPlayer.addEvent('pause', vimeoStop);
            vimPlayer.addEvent('finish', vimeoStop);
            vimPlayer.addEvent('playProgress', onPlayProgress);

            ef('.ef-vid-play').on('click', function(){
                if (mejs.MediaFeatures.isiOS) {
                    ef('body').addClass('ef-fullscreen-vid');
                } else {
                    vimPlayer.api('play');
                }
                return false;
            });
        });
    }


    /* Misc */

    if (ef_js_options.video && ef('#ef-to-project').length) {
        ef('#ef-to-project').css({
            bottom: 0
        });
    }


    // Google Maps

    if (typeof google !== 'undefined' && ef_js_options.map_marker) {
        var gMapOpt = {
            zoom: ef_js_options.zoomLevel,
            center: new google.maps.LatLng(ef_js_options.map_marker['lat'], ef_js_options.map_marker['lon']),
            scrollwheel: false,
            navigationControl: false,
            mapTypeControl: false,
            panControl: false,
            zoomControl: false,
            zoomControlOptions: {
                position: google.maps.ControlPosition.LEFT_CENTER
            },
            scaleControl: false,
            styles: [{"featureType":"water","elementType":"geometry.fill","stylers":[{"color":"#d3d3d3"}]},{"featureType":"transit","stylers":[{"color":"#808080"},{"visibility":"off"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"visibility":"on"},{"color":"#b3b3b3"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"road.local","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"weight":1.8}]},{"featureType":"road.local","elementType":"geometry.stroke","stylers":[{"color":"#d7d7d7"}]},{"featureType":"poi","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#ebebeb"}]},{"featureType":"administrative","elementType":"geometry","stylers":[{"color":"#a7a7a7"}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"landscape","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#efefef"}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#696969"}]},{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"visibility":"on"},{"color":"#737373"}]},{"featureType":"poi","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.arterial","elementType":"geometry.stroke","stylers":[{"color":"#d6d6d6"}]},{"featureType":"road","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{},{"featureType":"poi","elementType":"geometry.fill","stylers":[{"color":"#dadada"}]}]
        };
        var mapElem = document.getElementById('ef-gmap'),
            map = new google.maps.Map(mapElem, gMapOpt),
            panX = -window.innerWidth*0.3,
            panY = window.innerHeight*0.2,
            myLatLng = new google.maps.LatLng(ef_js_options.map_marker['lat'], ef_js_options.map_marker['lon']);
            map.panBy(panX, panY);

        window.onload = function(){
            ef('#ef-loader').remove();
            var gIcon = new google.maps.MarkerImage(ef_js_vars.marker_img, null, null, null, new google.maps.Size(90,95)),
                gMarker = new google.maps.Marker({
                position: myLatLng,
                animation: google.maps.Animation.DROP,
                map: map,
                icon: gIcon
            });

            var expandMap = document.getElementById('ef-expand-map');
            if (null !== expandMap) {
                var toggleMap = true;
                expandMap.addEventListener('click', function() {
                    if (toggleMap) {
                        document.body.className += " ef-show-map";
                        map.setOptions({zoomControl: true, scrollwheel: true});
                        map.panBy(-panX, -panY);
                    } else {
                        document.body.classList.remove('ef-show-map');
                        map.setOptions({zoomControl: false, scrollwheel: false});
                        map.panBy(panX, panY);
                    }
                    toggleMap = !toggleMap;
                });
            }

            ef_js_options.delay_fn(function(){
                gMarker.setAnimation(google.maps.Animation.BOUNCE);
            }, 1500);
        };
    }
})(jQuery);