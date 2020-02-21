var pesan = "Hello Koding"
let message = "Hello Javascript";

if (true) {
    var pesan = "Hello Koding - 2";
    let message = "Hello Javascript - 2";
    // variabel message ini hanya berlaku untuk scope function ini saja
}

console.log(pesan);
console.log(message);

// cara menulis varibel
// var, let, const

// untuk var dan let nilai nya bisa dirubah
// sedangkan const nilai nya tidak bisa dirubah
// walaupun var dan let mirip tapi ada perbedaan diantara keduanya
// perbedaanya jika var itu bisa dipakai walaupun berbeda scope
// tapi jika let tidak bisa jika berbeda scope
// contoh nya dalaman penulisan function