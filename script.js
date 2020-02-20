const container = document.querySelector('.container');
const slide = document.querySelector('.slide');
const item = document.querySelectorAll('.item');

container.addEventListener('click', function(e) {
    if( e.target.className == 'item' ) {
        slide.src = e.target.src;
        slide.classList.add('fade');
        setTimeout(function() {
            slide.classList.remove('fade');
        }, 500);

        item.forEach(function(gambar) {
            // if( gambar.classList.contains('active') ) {
            //     gambar.classList.remove('active');
            // } 
            gambar.className = 'item';
        });

        e.target.classList.add('active');
    }
});