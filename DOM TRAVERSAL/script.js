//ketika di klik maka div card hilang
// const container = document.querySelector('.container')
// const card = document.querySelector('.card')
// const btnTutup =document.querySelector('.close')

// btnTutup.addEventListener('click', function(){
//    card.style.display = 'none'
// })

//DOM TRAVERSAL
const btnTutup = document.querySelectorAll('.close');

//membuat looping untuk mengetahui tombol mana yang kita pencet

// ******** cara looping array menggunakan for
// for(let i=0;i<btnTutup.length;i++){
//     btnTutup[i].addEventListener('click', function(){
//        //ambil elemen yang sedang kita klik, lalu telusuri siapa parentnya
//       btnTutup[i].parentElement.style.display = 'none'
//     })
// }

//********** cara looping array menggunakan forEach
// kelebihan menggunakan foreach tidak menentukan iteratornya
// btnTutup.forEach(function(event){
//     event.addEventListener('click', function(e){
//         e.target.parentElement.style.display = 'none'
//         //fungsinya untuk mencegah aksi default dari element
//         e.preventDefault();
//         //agar event berhenti disini
//         e.stopPropagation();
//     })
// })




//************ cara ke 3 dengan mentarget apa yang ada di dalam containerr
const container = document.querySelector('.container');
container.addEventListener('click', function(e){
    if( e.target.className == 'close'){
        e.target.parentElement.style.display = 'none'
        e.preventDefault();
    }
})



//event bubbling

// const cards = document.querySelectorAll('.card');
// cards.forEach(function(card){
//     card.addEventListener('click', function(e){
//         alert('ok')
//     })
// })