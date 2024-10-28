//button warna
const button = document.getElementById('ubahWarna')

button.addEventListener('click', function(){
// document.body.style.backgroundColor = 'lightblue'
// document.body.setAttribute('class', 'biru-muda');
document.body.classList.toggle('biru-muda')
});

// membuat tombol dengan javascript
const tombolBaru = document.createElement('button')
const isiTombol = document.createTextNode('TOMBOL BARU');
tombolBaru.appendChild(isiTombol);
tombolBaru.setAttribute('type','button')
button.after(tombolBaru)

tombolBaru.addEventListener('click', function(){
    const r = Math.round(Math.random() * 255 + 1);
    const g = Math.round(Math.random() * 255 + 1);
    const b = Math.round(Math.random() * 255 + 1);
    
    document.body.style.backgroundColor = `rgb(${r},${g},${b})`
})


//slider
const sMerah = document.querySelector('input[name=sMerah]')
sMerah.addEventListener('input', function(){
    //untuk mengambil nilai yang ada didalam elemen input (apapun typenya)
    // console.log(sMerah.value);
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.style.backgroundColor =`rgb(${r},${g},${b})`
});

const sHijau = document.querySelector('input[name=sHijau]')
sHijau.addEventListener('input', function(){
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.style.backgroundColor =`rgb(${r},${g},${b})`
});

const sBiru = document.querySelector('input[name=sBiru]')
sBiru.addEventListener('input', function(){
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.style.backgroundColor =`rgb(${r},${g},${b})`
});



document.body.addEventListener('mousemove', function(event){
    //posisi mouse
    // console.log(event.clientX)

    //ukuran browser
    // console.log(window.innerWidth)

    const xPos = (Math.round(event.clientX / window.innerWidth * 255));
    const yPos = (Math.round(event.clientY / window.innerHeight * 255));

    document.body.style.backgroundColor = `rgb(${xPos}, ${yPos}, 100)`
    
});

