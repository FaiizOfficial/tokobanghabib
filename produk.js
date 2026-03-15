// Data awal (akan dipakai kalau web baru pertama kali dibuka)
const dataDefault = [
    { id: 1, nama: "Nugget Ayam Fiesta 500g", kategori: "Olahan Ayam", harga: 45000, stok: 24 },
    { id: 2, nama: "Sosis Bakar Champ 1Kg", kategori: "Olahan Sapi", harga: 65000, stok: 5 },
    { id: 3, nama: "Kentang Shoestring Farm Frites 1Kg", kategori: "Cemilan", harga: 35000, stok: 0 }
];

// Ambil data dari localStorage, kalau kosong (null), pakai dataDefault
let daftarProduk = JSON.parse(localStorage.getItem('dataStokFitra'));

if (!daftarProduk) {
    daftarProduk = dataDefault;
    localStorage.setItem('dataStokFitra', JSON.stringify(daftarProduk));
}

// Fungsi andalan buat nyimpen tiap ada perubahan data
function simpanData() {
    localStorage.setItem('dataStokFitra', JSON.stringify(daftarProduk));
}
