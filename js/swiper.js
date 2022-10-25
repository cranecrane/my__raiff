(() => {
    document.addEventListener('DOMContentLoaded', () => {
        const swiper = new Swiper('.swiper', {
            direction: 'horizontal',
            loop: false,
            slidesPerView: 'auto',
            spaceBetween: 16,
            breakpoints: {
                1240: {
                    spaceBetween: 20,
                }
            },
          
            pagination: {
              el: '.swiper-pagination',
              clickable: true,
            },
          
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
          });
    })
})();
