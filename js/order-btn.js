(() => {
    document.addEventListener('DOMContentLoaded', () => {
        const orderBtn = document.getElementById('order-btn');
        const requestForm = document.getElementById('request-form');

        if (window.innerWidth <= 767) {
            window.addEventListener('scroll', () => {
                if (window.pageYOffset >= requestForm.offsetTop - window.innerHeight && window.pageYOffset <= requestForm.offsetTop + requestForm.clientHeight) {
                    orderBtn.classList.add('hidden');
                } else {
                    orderBtn.classList.remove('hidden');
                }
            })
        }
    })
})();
