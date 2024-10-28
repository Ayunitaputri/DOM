// //DOM SELECTION
// //kalo ada "S"nya berarti menghasilkan html collection

// //document.getElementById() -> mengembalikan elemnt
// var judul = document.getElementById('judul');
// judul.style.color = 'red'
// judul.style.backgroundColor = 'grey'
// judul.innerHTML = 'ayunita'

// // document.getElementByTagName()
// // -> html collection
// var p = document.getElementsByTagName('p')
// for(var i=0;i<p.length;i++){
//     p[i].style.backgroundColor = 'lightblue'
// }

// //document.getElementByClassName()
// // -> html collection
// const p1 = document.getElementsByClassName('p1')[0];
// p1.innerHTML = "ini dirubah dari javascripts"

//document.querySelector() -> element
// const p4 = document.querySelector('#b p');
// p4.style.color = 'green'

// const li2 = document.querySelector('section#b ul li:nth-child(2)');
// li2.style.backgroundColor = 'orange'

// //document.querySelectorAll() ->nodelist
// const p = document.querySelectorAll('p');
// for(var i=0;i < p.length;i++){
//     p[i].style.backgroundColor = 'lightblue'
// }

// mengubah node root
// const sectionB = document.getElementById('b');
// const p4 = sectionB.querySelector('p');
// p4.style.backgroundColor = 'orange'


// const judul = document.getElementById('judul')
// judul.style.background = 'salmon'
// judul.innerHTML = 'Ayunita putri'

// const sectionA = document.querySelector('section#a');
// sectionA.innerHTML = "hello world!!" 

// //untuk mengelola atribut
// //atribut adalah sesuatu yang menempel pada elemen html
// const judul = document.getElementsByTagName('h1')[0];
// judul.setAttribute('name', 'ayunita')

// //untuk mengetahui isi dari atribut dengan menggunakan getAtrribute('')
// //untuk menghapus atrribut menggunakan removeAttribute('')




// //untuk mengelola kelas  (classList)
// const p2 = document.querySelector('.p2');
// p2.classList.add('label')

//=================================================
// DOM MANIPULATION
//=================================================
        // //buat elemen baru
        // const pBaru = document.createElement('p');
        // const isiP = document.createTextNode('Paragraf baru');
        // //simpan textnode ke dalam element
        // pBaru.appendChild(isiP);
        // // simpan pBaru di akhir section A
        // const sectionA = document.querySelector('section#a');
        // sectionA.appendChild(pBaru)
        // //appendchild menyimpan diakhir


        // const itemBaru = document.createElement('li')
        // const itemIsi = document.createTextNode('item baru')
        // //simpan node ke dalam elemen
        // itemBaru.appendChild(itemIsi);

        // const ul = document.querySelector('section#b ul');
        // const li2 = document.querySelector('section#b ul li:nth-child(2)')
        // ul.insertBefore(itemBaru, li2);

        // //menghapus
        // const link = document.getElementsByTagName('a')[0];
        // sectionA.removeChild(link)

        // //mengganti
        // const sectionB = document.querySelector('section#b')
        // const p = sectionB.querySelector('p')

        // const h2 = document.createElement('h2');
        // const judulBaru = document.createTextNode('judul baru')
        // h2.appendChild(judulBaru);


        // sectionB.replaceChild(h2, p)


//=================================================
// DOM EVENTS
//=================================================
const p3 = document.querySelector('.p3');
// p3.setAttribute('onClick', 'ubahWarna()')
p3.onclick = ubahWarna;

function ubahWarna(){
p3.style.backgroundColor = 'lightblue'
}

const p4 = document.querySelector('section#b p');
p4.addEventListener('click', function() {
    //membuat element baru
    const liBaru = document.createElement('li');
    const item4 = document.createTextNode('item 4');
    liBaru.appendChild(item4);

    //simpan li baru di akhir section p4
    const ul = document.querySelector('section#b ul')

    //simpan liBaru didalam ul
    ul.appendChild(liBaru)
})
