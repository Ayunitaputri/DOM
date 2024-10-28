function getPilihanComputer(){
//input computer
// random answer
const comp = Math.random();
    if( comp < 0.34 ){
        return "gajah"
    } else if ( comp >= 0.34 && comp < 0.67){
        return 'orang'
    } else {
        return "semut"
    }
}

//rules
function getHasil( comp, user){
    //menentukan rules
    if(user == comp){
        return 'SERI'
    } else if (user == 'gajah'){
       return (comp == 'orang') ? 'MENANG' : 'KALAH'
    } else if (user == 'orang'){
       return (comp == 'gajah') ? 'KALAH' : 'MENANG'
    } else if (user == 'semut'){
       return (comp == 'gajah') ? 'KALAH' : 'MENANG'
    } 
}

// const pGajah = document.querySelector('.gajah');
// pGajah.addEventListener('click', function(){
//     const pilihanComputer = getPilihanComputer();
//     const pilihanPlayer = pGajah.className;
//     const hasil = getHasil(pilihanComputer, pilihanPlayer)

//     // console.log(`pilihan komputer : ${pilihanComputer}`)
//     // console.log(`pilihan player : ${pilihanPlayer}`)
//     // console.log(`hasil : ${hasil}`)

//     const imgComputer = document.querySelector('.img-komputer');
//     imgComputer.setAttribute('src', '/img/' + pilihanComputer + '.png')

//     const info = document.querySelector('.info')
//     info.innerHTML = hasil;
// })

// const pOrang = document.querySelector('.orang');
// pOrang.addEventListener('click', function(){
//     const pilihanComputer = getPilihanComputer();
//     const pilihanPlayer = pOrang.className;
//     const hasil = getHasil(pilihanComputer, pilihanPlayer)

//     const imgComputer = document.querySelector('.img-komputer');
//     imgComputer.setAttribute('src', '/img/' + pilihanComputer + '.png')

//     const info = document.querySelector('.info')
//     info.innerHTML = hasil;
// })

// const pSemut = document.querySelector('.semut');
// pSemut.addEventListener('click', function(){
//     const pilihanComputer = getPilihanComputer();
//     const pilihanPlayer = pSemut.className;
//     const hasil = getHasil(pilihanComputer, pilihanPlayer)

//     const imgComputer = document.querySelector('.img-komputer');
//     imgComputer.setAttribute('src', '/img/' + pilihanComputer + '.png')

//     const info = document.querySelector('.info')
//     info.innerHTML = hasil;
// })

//menggunakan konsep timing pada javascripts
function putar(){
    const imgComputer = document.querySelector('.img-komputer');
    const gambar = ['gajah','orang','semut'];
    let i = 0;
    const waktuMulai = new Date().getTime();
    //melakukan sesuatu secara berulang ulang selama waktu tertentu
    setInterval(function(){
        if( new Date().getTime() - waktuMulai > 1000){
            clearInterval;
            return;
        }
        imgComputer.setAttribute('src', 'img/' + gambar[i++] + '.png');
        if(i == gambar.length){
            i = 0
        }
    }, 100) //0, satu detik

    
}

const pilihan = document.querySelectorAll('li img');
pilihan.forEach(function(pilih) {

 pilih.addEventListener('click', function(){
    const pilihanComputer = getPilihanComputer();
    const pilihanPlayer = pilih.className;
    const hasil = getHasil(pilihanComputer, pilihanPlayer);

    putar();

    setTimeout(function(){
        const imgComputer = document.querySelector('.img-komputer');
        imgComputer.setAttribute('src', '/img/' + pilihanComputer + '.png')
    
        const info = document.querySelector('.info')
        info.innerHTML = hasil;

    }, 1000)

 })
})

