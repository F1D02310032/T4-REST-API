# Tugas 4 - REST API Koleksi Tanaman Hias

## Identitas

- Nama: ADITYA
- NIM: F1D02310032

## Deskripsi

REST API ini menyediakan data koleksi tanaman hias, termasuk kebutuhan cahaya,
frekuensi penyiraman, dan tingkat perawatan. Data contoh disimpan dalam array
di memori aplikasi.

## Persyaratan

- Node.js versi 18 atau lebih baru
- npm

## Menjalankan aplikasi

```bash
npm install
npm run dev
```

Server berjalan di `http://localhost:3000`. Untuk menjalankan tanpa mode watch,
gunakan `npm start`.

## Endpoint

| Method | Endpoint | Hasil |
| --- | --- | --- |
| `GET` | `/` | Pesan sambutan (`200`) |
| `GET` | `/tanaman-hias` | Daftar tanaman (`200`) |
| `GET` | `/tanaman-hias/:id` | Detail tanaman (`200`) atau error (`404`) |
| `DELETE` | `/tanaman-hias/:id` | Hapus tanaman (`204`) atau error (`404`) |

Contoh respons sukses:

```json
{
  "data": {
    "id": 1,
    "nama": "Monstera deliciosa",
    "cahaya": "Cahaya tidak langsung",
    "penyiraman": "1 kali per minggu",
    "tingkatPerawatan": "Mudah"
  }
}
```

Endpoint daftar mengembalikan array tanaman di dalam properti `data`. Respons
error menggunakan bentuk berikut:

```json
{
  "error": {
    "pesan": "Tanaman hias tidak ditemukan.",
    "kode": 404
  }
}
```

Operasi `DELETE` hanya mengubah data di memori. Data akan kembali seperti semula
ketika server dimulai ulang.

## Data

Data awal berada di [`src/data/tanaman-hias.js`](src/data/tanaman-hias.js) dan
berisi 10 tanaman. Setiap objek memiliki properti:

- `id`: ID tanaman.
- `nama`: nama tanaman.
- `cahaya`: rekomendasi kondisi cahaya.
- `penyiraman`: frekuensi penyiraman.
- `tingkatPerawatan`: perkiraan tingkat perawatan.

## Pengujian

Jalankan pengujian otomatis dengan:

```bash
npm test
```

Screenshot hasil percobaan endpoint tersedia di [`screenshot/`](screenshot/):

| Berkas | Percobaan |
| --- | --- |
| [`server.png`](screenshot/server.png) | Server dan endpoint sambutan |
| [`get-daftar.png`](screenshot/get-daftar.png) | GET daftar tanaman |
| [`get-detail-ada.png`](screenshot/get-detail-ada.png) | GET detail dengan ID yang tersedia |
| [`get-detail-404.png`](screenshot/get-detail-404.png) | GET detail dengan ID yang tidak tersedia |
| [`delete-204.png`](screenshot/delete-204.png) | DELETE berhasil dengan status `204` |
| [`get-daftar-setelah-delete.png`](screenshot/get-daftar-setelah-delete.png) | Daftar setelah penghapusan |

Gambar-gambar tersebut adalah tangkapan tampilan browser yang dibuat dari
respons HTTP API lokal yang diuji; gambar bukan tangkapan layar Postman atau
Thunder Client.

## Deklarasi penggunaan AI

Copilot digunakan sebagai alat bantu selama pengerjaan, termasuk untuk
menyusun dan meninjau contoh data, route API, pengujian, dan dokumentasi.
Copilot juga membantu membuat gambar bukti percobaan dari respons yang
dikembalikan API lokal. Saya menjalankan `npm test` dan mencoba endpoint untuk
memeriksa status serta bentuk respons. Penggunaan AI tidak menggantikan
pemeriksaan dan tanggung jawab saya atas hasil akhir.

## Kesimpulan

Proyek ini mempraktikkan pembuatan REST API dengan Express, pengelolaan array
of objects, parameter route, status HTTP, serta pengujian endpoint.
