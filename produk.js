// File: produk.js

const dataDefault = [
    { id: 1, nama: "Nugget Ayam Fiesta 500g", kategori: "Olahan Ayam", harga: 45000, stok: 24 },
    { id: 2, nama: "Sosis Bakar Champ 1Kg", kategori: "Olahan Sapi", harga: 65000, stok: 5 },
    { id: 3, nama: "Kentang Shoestring Farm Frites 1Kg", kategori: "Cemilan", harga: 35000, stok: 0 }
];

// Ambil data dari localStorage browser
let dataLokal = localStorage.getItem('dataStokFitra');
let daftarProduk = [];

// Cek apakah udah ada data tersimpan. Kalau belum, pakai dataDefault
if (dataLokal === null) {
    daftarProduk = dataDefault;
    localStorage.setItem('dataStokFitra', JSON.stringify(daftarProduk));
} else {
    daftarProduk = JSON.parse(dataLokal);
}

// Fungsi utama buat nyimpen tiap ada nambah/edit/hapus
function simpanData() {
    localStorage.setItem('dataStokFitra', JSON.stringify(daftarProduk));
}
