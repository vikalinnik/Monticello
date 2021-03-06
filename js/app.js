;(function($){
    $(function(){
        $('.slick').slick ({
            dots: true,
            lazyLoad: 'ondemand',
            fade: true,
            speed: 500,
            cssEase: 'linear',
            autoplay: true,
            autoplaySpeed: 4000
        });
        $('.slick-prev, .slick-next ').remove ()
        $('.slick2').slick ({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            dots: true,
            adaptiveHeight: true,
            // autoplay: true,
            // autoplaySpeed: 4000,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 620,
                    settings: {
                        slidesToShow: 1,
                        dots: false
                    }
                }
            ]
        });

        $('.header__menu--mini').on('click', function () {
            $('.header__menu').slideToggle();
            $('.social').slideToggle().css('display', 'flex');
            $('.slick .title, .slick-dots, .down').slideToggle()
            $(this).fadeTo(100, .5).fadeTo(100, 1);
        });

        $('.menu-projects').click(function () {
            $('html, body').animate({
                scrollTop: $('.what_we_do').offset().top
            }, 300);
        });
        $('.menu-news').click(function () {
            $('html, body').animate({
                scrollTop: $('.news').offset().top
            }, 300);
        });
        $('.menu-contact').click(function () {
            $('html, body').animate({
                scrollTop: $('.get').offset().top
            }, 300);
        });
        $('.down').click(function () {
            $('html, body').animate({
                scrollTop: $('.what_we_do').offset().top
            }, 300);
        })

        $('.accordion-1').click(function () {
            $('.toggle1').slideToggle()
        });
        $('.accordion-2').click(function () {
            $('.toggle2').slideToggle()
        });
        $('.accordion-3').click(function () {
            $('.toggle3').slideToggle()
        });
        $('.accordion-4').click(function () {
            $('.toggle4').slideToggle()
        });
        $('.accordion-5').click(function () {
            $('.toggle5').slideToggle()
        });


        $('.cycle').cyclotron();
        $('.gallery__flexbox__left').click(function () {
            $('.gallery__flexbox').css('display', 'none')
            $('.cycle').css('display', 'block')
        })
        $('.close').click(function () {
            $('.cycle').css('display', 'none')
            $('.gallery__flexbox').css('display', 'flex')
        })
    })
}) (jQuery)

function initMap() {
    const pos = {lat: 40.6783346, lng: -73.9347653}
    const image = {url: 'img/pin.png'}
    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 14,
        center: pos,
        disableDefaultUI: true,
        styles:
            [{"elementType": "geometry", "stylers": [
                    {"color": "#f5f5f5"}
                    ]},
            {"elementType": "labels.icon", "stylers": [
                    {"visibility": "off"}
                    ]},
            {"elementType": "labels.text.fill", "stylers": [
                    {"color": "#616161"}
                    ]},
            {"elementType": "labels.text.stroke", "stylers": [
                {"color": "#f5f5f5"}
                ]},
            {"featureType": "administrative.land_parcel",
                "elementType": "labels.text.fill", "stylers": [
                    {"color": "#bdbdbd"}
                        ]},
            {"featureType": "poi", "elementType": "geometry",
                "stylers": [{"color": "#eeeeee"}
                ]},
            {"featureType": "poi", "elementType": "labels.text.fill",
                "stylers": [{"color": "#757575"}
                ]},
            {"featureType": "poi.park", "elementType": "geometry",
                "stylers": [{"color": "#e5e5e5"}
                ]},
            {"featureType": "poi.park", "elementType": "labels.text.fill",
                "stylers": [{"color": "#9e9e9e"}
                ]},
            {"featureType": "road", "elementType": "geometry",
                "stylers": [{"color": "#ffffff"}
                ]},
            {"featureType": "road.arterial", "elementType": "labels.text.fill",
                "stylers": [{"color": "#757575"}
                ]},
            {"featureType": "road.highway", "elementType": "geometry",
                "stylers": [{"color": "#dadada"}
                ]},
            {"featureType": "road.highway", "elementType": "labels.text.fill",
                "stylers": [{"color": "#616161"}
                ]},
            {"featureType": "road.local", "elementType": "labels.text.fill",
                "stylers": [{"color": "#9e9e9e"}
                ]},
            {"featureType": "transit.line", "elementType": "geometry",
                "stylers": [{"color": "#e5e5e5"}
                ]},
            {"featureType": "transit.station", "elementType": "geometry",
                "stylers": [{"color": "#eeeeee"}
                ]},
            {"featureType": "water", "elementType": "geometry",
                "stylers": [{"color": "#c9c9c9"}
                ]},
            {"featureType": "water", "elementType": "labels.text.fill",
                "stylers": [{"color": "#9e9e9e"}
                ]}
        ]
    });
    const m1 = new google.maps.Marker({
        position: pos, map,
        icon: image
    });
}