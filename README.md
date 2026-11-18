# Tugas 4 - REST API Dasar

## Identitas
- Nama: [ADITYA]
- NIM: [F1D02310032]

## Deskripsi Tugas
API ini menyajikan koleksi tanaman hias beserta kebutuhan cahaya, frekuensi penyiraman, dan tingkat perawatannya. Topik dipilih untuk berlatih menyimpan data bertopik selain data mahasiswa dalam array of object dan mengaksesnya melalui REST API.

## Cara Menjalankan
1. Pastikan Node.js versi 18 atau lebih baru sudah terpasang.
2. Jalankan `npm install`.
3. Jalankan server dengan `npm run dev`.
4. Buka `http://localhost:3000`.
5. Untuk menjalankan pengujian otomatis, jalankan `npm test`.

## Daftar Endpoint
| Method | URL | Fungsi | Status |
|--------|-----|--------|--------|
| GET | `/` | Pesan sambutan | 200 |
| GET | `/tanaman-hias` | Menampilkan semua tanaman hias | 200 |
| GET | `/tanaman-hias/:id` | Menampilkan satu tanaman berdasarkan ID | 200 / 404 |
| DELETE | `/tanaman-hias/:id` | Menghapus tanaman berdasarkan ID (opsional) | 204 / 404 |

Response sukses untuk endpoint data menggunakan format `{ "data": ... }`. Response gagal menggunakan format `{ "error": { "pesan": "...", "kode": 404 } }`. Data DELETE hanya disimpan di memori dan kembali seperti semula setelah server dimulai ulang.

## Bentuk Data
Data disimpan dalam `src/data/tanaman-hias.js`. Contoh:

```json
{
  "id": 1,
  "nama": "Monstera deliciosa",
  "cahaya": "Cahaya tidak langsung",
  "penyiraman": "1 kali per minggu",
  "tingkatPerawatan": "Mudah"
}
```

- `id`: angka unik untuk identifikasi tanaman.
- `nama`: nama tanaman hias.
- `cahaya`: kondisi cahaya yang disarankan.
- `penyiraman`: frekuensi penyiraman.
- `tingkatPerawatan`: perkiraan tingkat kemudahan perawatan.

## Pengujian
Pengujian otomatis dapat dijalankan dengan `npm test`. Sebelum dikumpulkan, jalankan server dan ambil screenshot nyata dari Postman, Thunder Client, Bruno, atau REST Client. Simpan bukti di folder `screenshot/`.

### Server berjalan
Screenshot: `screenshot/server.png` (tambahkan sebelum pengumpulan)

### GET daftar
Screenshot: `screenshot/get-daftar.png` (tambahkan sebelum pengumpulan)

### GET detail (id ada)
Screenshot: `screenshot/get-detail-ada.png` (tambahkan sebelum pengumpulan)

### GET detail (id tidak ada)
Screenshot: `screenshot/get-detail-404.png` (tambahkan sebelum pengumpulan)

### DELETE berhasil dan daftar setelah penghapusan
Screenshot: `screenshot/delete-204.png` dan `screenshot/get-daftar-setelah-delete.png` (tambahkan sebelum pengumpulan)

## Deklarasi Penggunaan AI
| Bagian | Alat AI | Dipakai untuk apa | Bagaimana saya memeriksa hasilnya |
|--------|---------|-------------------|-----------------------------------|
| Data (`src/data/tanaman-hias.js`) | Copilot | Menyusun 10 contoh data tanaman hias dan field yang relevan | Memeriksa jumlah data, ID unik, dan keberadaan minimal tiga field tambahan |
| Route (`src/app.js`, `index.js`) | Copilot | Menulis endpoint GET, penanganan 404, dan endpoint bonus DELETE | Menjalankan `npm test` dan mencoba endpoint dengan klien HTTP |
| Pengujian (`test/api.test.js`) | Copilot | Menyusun pengujian otomatis untuk endpoint utama | Menjalankan `npm test` dan memeriksa status serta bentuk response |
| README | Copilot | Menyusun dokumentasi cara menjalankan, endpoint, format data, dan deklarasi | Mencocokkan dokumentasi dengan implementasi dan instruksi tugas |

Contoh prompt yang digunakan: "Buatkan REST API dasar dengan Express untuk resource koleksi tanaman hias, minimal 10 data, GET daftar, GET detail dengan 404, DELETE opsional, serta format response data/error yang konsisten."

Pernyataan: Saya menggunakan AI pada bagian-bagian yang tertulis di tabel. Saya memeriksa hasilnya dengan membaca kode dan menjalankan pengujian otomatis. Saya bertanggung jawab memahami dan memverifikasi kode sebelum mengumpulkannya.

## Kesimpulan & Kendala
Tugas ini melatih pembuatan server Express, pengelolaan data array, penggunaan parameter route, dan pemakaian status HTTP serta format response yang konsisten. Periksa kembali setiap endpoint dengan klien HTTP dan lengkapi screenshot pengujian sebelum mengumpulkan.
