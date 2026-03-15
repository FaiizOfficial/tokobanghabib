// File: produk.js

// 1. Data bawaan (Cuma dipakai kalau memori browser bener-bener kosong)
const dataDefault = [
    { id: 1, nama: "Nugget Ayam Fiesta 500g", kategori: "Olahan Ayam", harga: 45000, stok: 24 },
    { id: 2, nama: "Sosis Bakar Champ 1Kg", kategori: "Olahan Sapi", harga: 65000, stok: 5 },
    { id: 3, nama: "Kentang Shoestring Farm Frites 1Kg", kategori: "Cemilan", harga: 35000, stok: 0 }
];

let daftarProduk = [];

// 2. Cek memori browser
let dataSimpanan = localStorage.getItem('dataStokFitra');

if (dataSimpanan) {
    // Kalau browser inget datanya, pakai data dari browser (termasuk yang baru ditambah)
    daftarProduk = JSON.parse(dataSimpanan);
} else {
    // Kalau kosong, pakai data bawaan
    daftarProduk = dataDefault;
    localStorage.setItem('dataStokFitra', JSON.stringify(daftarProduk));
}

// 3. Fungsi untuk nyimpen perubahan ke browser
function simpanData() {
    localStorage.setItem('dataStokFitra', JSON.stringify(daftarProduk));
}
