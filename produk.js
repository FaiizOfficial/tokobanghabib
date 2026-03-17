// Link Google Apps Script sebagai jembatan ke Google Sheets
const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwmuB0evpumWvtXlvpZV1HmmNHsjGH6Bmm9VeDivEaAaB-Ha1b_8e6ErwkNYiC4yqQZ/exec";

let daftarProduk = [];

// Fungsi untuk mengambil data terbaru dari Google Sheets
async function muatData() {
    try {
        const response = await fetch(SCRIPT_URL);
        daftarProduk = await response.json();
        
        // Cek halaman apa yang sedang dibuka, lalu render tabelnya
        if (typeof renderTabel === 'function') renderTabel();
        if (typeof renderTabelOpname === 'function') renderTabelOpname();
        if (typeof renderMenuKasir === 'function') renderMenuKasir(); 
    } catch (e) {
        console.error("Gagal muat data dari database:", e);
    }
}

// Fungsi untuk mengirim perintah (tambah/edit/hapus/kasir) ke Google Sheets
async function kirimKeCloud(data) {
    try {
        await fetch(SCRIPT_URL, {
            method: 'POST',
            // INI YANG PALING PENTING BIAR OTOMATIS DAN GA DI-BLOKIR BROWSER
            headers: {
                'Content-Type': 'text/plain;charset=utf-8', 
            },
            body: JSON.stringify(data)
        });
        
        // Setelah berhasil update di server, ambil data terbaru lagi secara otomatis
        await muatData(); 
    } catch (e) {
        console.error("Gagal menyimpan data:", e);
        alert("Koneksi ke database terputus. Coba refresh halamannya.");
    }
}
