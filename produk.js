// Link Google Apps Script sebagai jembatan ke Google Sheets
const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwk7BlYuCi7MK_uLHX4EGpqBH4-tXPJtUk_9b4yebjGNdgsx5I0pPh2P92utLgyKLlZ/exec";

let daftarProduk = [];

// Fungsi untuk mengambil data terbaru dari Google Sheets
async function muatData() {
    try {
        const response = await fetch(SCRIPT_URL);
        daftarProduk = await response.json();
        
        // Cek halaman apa yang sedang dibuka, lalu render tabelnya
        if (typeof renderTabel === 'function') renderTabel();
        if (typeof renderTabelOpname === 'function') renderTabelOpname();
    } catch (e) {
        console.error("Gagal muat data dari database:", e);
        alert("Gagal terhubung ke database. Pastikan internet lancar.");
    }
}

// Fungsi untuk mengirim perintah (tambah/edit/hapus) ke Google Sheets
async function kirimKeCloud(data) {
    try {
        await fetch(SCRIPT_URL, {
            method: 'POST',
            body: JSON.stringify(data)
        });
        // Setelah berhasil update di server, ambil data terbaru lagi
        await muatData(); 
    } catch (e) {
        console.error("Gagal menyimpan data:", e);
        alert("Gagal menyimpan perubahan ke database!");
    }
}
