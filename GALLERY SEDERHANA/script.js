//event delegesion
const container = document.querySelector('.container');
const jumbo = document.querySelector('.jumbo');
const thumbs = document.querySelectorAll('.thumb')

container.addEventListener('click', function(e){
    //cek apakah yang di-klik adalah thumb
    if(e.target.className == 'thumb'){
        //mengganti src sesuai dengan yang kita klik
        jumbo.src = e.target.src;
        
        jumbo.classList.add('fade');
        // console.log(jumbo)
        setTimeout(function(){
            jumbo.classList.remove('fade');
        }, 500);

        thumbs.forEach(function(e){
            // if(e.classList.contains('active')){
            //     e.classList.remove('active');
            // }

            e.classList = 'thumb'
        })

        e.target.classList.add('active');

    }
})