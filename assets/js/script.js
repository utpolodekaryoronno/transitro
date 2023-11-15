$(document).ready(function(){

    // Mobile Menu Icon
   
   // $('#nav-icon').click(function(){
   //    $(this).toggleClass('open');
   //    $('.header_nav nav').toggleClass('active_nav');
   //    $('.overly').toggleClass('active');
   // });


   // single_tracking
   $('.single_tracking').click(function(){
      $('.single_tracking').removeClass('active');
      $(this).addClass('active');
   });





 //    Dropdown Tracking box 

   //  const menuContainer = $(".dropdown_main");
   //      const menuToggle = $(".dropdown_main > a");
   //      const menu = $(".tracking_box");
   //      if (menuToggle.length) {
   //          menuToggle.on("click", function(event) {
   //              event.stopPropagation();
   //              menu.toggleClass("none");
   //              menuToggle.toggleClass("none");
   //          });
   //      }
   //      $(document).on("click", function(event) {
   //          const target = $(event.target);
   //          if (menuContainer.length && !menuContainer.is(target) && !menuContainer.has(target).length) {
   //              menu.removeClass("none");
   //              if (menuToggle.length) {
   //                  menuToggle.removeClass("none");
   //              }
   //          }
   //      });




 //        // Mobile Menu Icon and Outside click none 

    const menuContainer = $(".header_nav");
        const menuToggle = $("#nav-icon");
        const menu = $(".header_nav nav");
        const menuIcon = $("#nav-icon");
        const overlyArea = $(".overly");
        if (menuToggle.length) {
            menuToggle.on("click", function(event) {
                event.stopPropagation();
                menu.toggleClass("active_nav");
                menuToggle.toggleClass("active_nav");
                menuIcon.toggleClass("open");
                overlyArea.toggleClass("active");
            });
        }
        $(document).on("click", function(event) {
            const target = $(event.target);
            if (menuContainer.length && !menuContainer.is(target) && !menuContainer.has(target).length) {
                menu.removeClass("active_nav");
                menuIcon.removeClass("open");
                if (menuToggle.length) {
                    menuToggle.removeClass("active_nav");
                    menuIcon.removeClass("open");
                    overlyArea.removeClass("active");
                }
            }
        });



 
    

   

     // mixitup plugin
    var containerEl = document.querySelector('.portfolio_mix'); 
    var mixer = mixitup(containerEl, {
        load: {
            filter: 'all'
        },
        animation: {
            effectsIn: 'fade translateY(-100%)',
            effects: 'fade translateZ(-100px)'
        }
    });


});


   
 // Portfolio Slider
 var swiper = new Swiper(".portfolio_slider", {
   slidesPerView: 1,
   loop: true,
   autoplay: {
      delay: 3000,
   },
   pagination: {
      el: ".swiper-pagination",
      clickable: true,
   },
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },
});





 
 

// Quote Slider 
var swiper = new Swiper(".quote_slider", {
    slidesPerView: 2,
    loop: true,
    spaceBetween: 40,
   //   autoplay: {
   //      delay: 3000,
   //   },
     navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    
    breakpoints: {
        320: {
           slidesPerView: 1,
           navigation: {
            nextEl: false,
            prevEl: false,
          },
        },
        767: {
           slidesPerView: 1,
           navigation: {
            nextEl: false,
            prevEl: false,
          },
        },
        991: {
           slidesPerView: 2,
        },
        1024: {
           slidesPerView: 2,
        }
   }

});



// Articles Slider 
var swiper = new Swiper('.articles_content', {
    slidesPerView: 4,
    spaceBetween: 32,
    loop: true,
   //  autoplay: {
   //      delay: 3000,
   //  },

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        320: {
           slidesPerView: 1,
        },
        575: {
           slidesPerView: 2,
        },
        767: {
           slidesPerView: 3,
        },
       1024: {
           slidesPerView: 4,
        },
     }
});






// Location Slider 
var swiper = new Swiper('.locations_slider', {
    slidesPerView: 1,
    spaceBetween: 32,
    loop: true,
   //  autoplay: {
   //      delay: 3000,
   //  },

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});






   // Service Slider
   var swiper = new Swiper(".Service_slider", {
    slidesPerView: 4,
    loop: true,
   //   autoplay: {
   //      delay: 3000,
   //   },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
     },
    breakpoints: {
        320: {
           slidesPerView: 1,
        },
        575: {
           slidesPerView: 2,
        },
        767: {
           slidesPerView: 3,
        },
        991: {
           slidesPerView: 4,
        },
     }
});




   // Service Slider 2
   var swiper = new Swiper(".Service_slider2", {
    slidesPerView: 3,
    loop: true,
   //   autoplay: {
   //      delay: 3000,
   //   },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
     },
    breakpoints: {
        320: {
           slidesPerView: 1,
        },
        575: {
           slidesPerView: 2,
        },
        767: {
           slidesPerView: 3,
        },
        991: {
           slidesPerView: 3,
        },
     }
});



 // Partner Slider
    var swiper = new Swiper(".partner_slider", {
        slidesPerView: 6,
        loop: true,
        spaceBetween: 30,
         // autoplay: {
         //    delay: 3000,
         // },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        
        breakpoints: {
            320: {
               slidesPerView: 1,
            },
            450: {
               slidesPerView: 2,
            },
            575: {
               slidesPerView: 3,
            },
            767: {
               slidesPerView: 4,
            },
            991: {
               slidesPerView: 5,
            },
            1024: {
               slidesPerView: 6,
            },
         }
    });











 

















