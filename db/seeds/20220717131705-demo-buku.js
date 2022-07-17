'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Bukus', [
      {
        nama: 'Hujan',
        deskripsi: 'Novel ini mengisahkan percintaan dan perjuangan hidup seorang perempuan bernama Lail. Ketika Lail baru berusia 13 tahun, dirinya harus menjadi seorang anak yatim piatu. Di hari pertama ia sekolah, ada sebuah bencana gunung meletus dan gempa dahsyat sehingga menghancurkan kota di mana ia menetap, bahkan merenggut nyawa ibu serta ayah Lail.',
        gambar: [
          'https://res.cloudinary.com/aurellieandra/image/upload/v1657698033/second_hand/sh_seeds/9786020324784_Hujan-Cover-Baru-2018_o4ruzr.jpg'
        ],
        harga: 63800,
        lokasi: 'Jakarta',
        pengarang: 'Tere Liye',
        tahun_terbit: 2016,
        kategori_id: 1,
        diminati: null,
        seller_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nama: 'Laskar Pelangi',
        deskripsi: 'Novel Laskar Pelangi menceritakan kehidupan 10 anak yang tidak mampu, tetapi memiliki semangat juang untuk melanjutkan pendidikannya di kampung Gantung, Kepulauan Bangka Belitung. Sebagian besar dari kesepuluh anak yang menempuh pendidikan di SD Muhammadiyah Gantung merupakan anak dari para penambang timah di pulau dengan perolehan kekayaan alam timah yang terbesar di dunia.',
        gambar: [
          'https://res.cloudinary.com/aurellieandra/image/upload/v1657692477/second_hand/sh_seeds/LaskarPelangi-1_rf3wbo.jpg',
          'https://res.cloudinary.com/aurellieandra/image/upload/v1657692476/second_hand/sh_seeds/LaskarPelangi-2_to08fg.webp'
        ],
        harga: 89000,
        lokasi: 'Yogyakarta',
        pengarang: 'Andrea Hirata',
        tahun_terbit: 2005,
        kategori_id: 1,
        diminati: 10,
        seller_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nama: 'Surat Kecil untuk Tuhan',
        deskripsi: 'Novel ini menceritakan tentang seorang remaja bernama Gita Sessa Wanda Cantika yang biasa dipanggil Keke dengan perjuangannya melawan rabdomiosarkoma atau kanker jaringan lunak. Selain itu, dia tetap menjalani hidup seperti biasa.',
        gambar: [
          'https://res.cloudinary.com/aurellieandra/image/upload/v1657692478/second_hand/sh_seeds/SuratKecilUntukTuhan-2_kzqsqk.jpg',
          'https://res.cloudinary.com/aurellieandra/image/upload/v1657692477/second_hand/sh_seeds/SuratKecilUntukTuhan-1_yakpon.jpg'
        ],
        harga: 79000,
        lokasi: 'Jakarta',
        pengarang: 'Agnes Davonar',
        tahun_terbit: 2008,
        kategori_id: 1,
        diminati: 20,
        seller_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nama: 'Ensiklopedia Cerdas Dunia Hewan',
        deskripsi: 'Hal yang juga saya sukai dari buku ini adalah adanya aktivitas yang menarik untuk anak. Misal tebak gambar, mencari perbedaan, mencari bayangan yang tepat, bahkan hingga proyek membuat sarang untuk landak peliharaan!',
        gambar: [
          'https://res.cloudinary.com/aurellieandra/image/upload/v1657692477/second_hand/sh_seeds/review-ensiklopedia-cerdas-dunia-hewan-anak-6105fa5a15251059e4064832_abk4zb.jpg'
        ],
        harga: 110000,
        lokasi: 'Semarang',
        pengarang: 'La Rousse',
        tahun_terbit: 2016,
        kategori_id: 3,
        diminati: 20,
        seller_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nama: 'Biografi Politik Presiden RI Kedua, SOEHARTO: Pembangunan dan Partisipasi',
        deskripsi: 'Soeharto adalah Presiden kedua Republik Indonesia. Beliau lahir di Kemusuk, Yogyakarta, tanggal 8 Juni 1921. Bapaknya bernama Kertosudiro seorang petani yang juga sebagai pembantu lurah dalam pengairan sawah desa, sedangkan ibunya bernama Sukirah. Soeharto masuk sekolah tatkala berusia delapan tahun, tetapi sering pindah. Semula disekolahkan di Sekolah Desa (SD) Puluhan, Godean. Lalu pindah ke SD Pedes, lantaran ibunya dan suaminya, Pak Pramono pindah rumah, ke Kemusuk Kidul. Namun, Pak Kertosudiro lantas memindahkannya ke Wuryantoro. Soeharto dititipkan di rumah adik perempuannya yang menikah dengan Prawirowihardjo, seorang mantri tani.',
        gambar: [
          'https://res.cloudinary.com/aurellieandra/image/upload/v1657692477/second_hand/sh_seeds/Soeharto_depan_fbgjus.jpg'
        ],
        harga: 62500,
        lokasi: 'Kediri',
        pengarang: 'Habib Ahmad Shahab',
        tahun_terbit: 2008,
        kategori_id: 2,
        diminati: null,
        seller_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nama: 'Cheesy Notes from Holland: Catatan Perjalanan Tak Terlupakan di Belanda',
        deskripsi: 'Melakukan perjalanan ke luar negeri, khususnya Belanda merupakan impian bagi banyak orang. Terlebih bisa menempuh pendidikan di sana dengan beasiswa, dan penulis adalah salah satunya. Buku Cheesy Notes from Holland ini mengisahkan tentang pengalaman penulis selama dua kali belajar di negeri kincir angin, yang pertama dalam program short course tahun 2006 dan program master pada tahun 2008. Banyak cerita menarik yang dialami penulis, tentu saja disajikan secara ringan dengan guyonan dan pembelajaran yang bisa diambil dari setiap kejadiannya.',
        gambar: [
          'https://res.cloudinary.com/aurellieandra/image/upload/v1657700097/second_hand/sh_seeds/IMG_20201229_135737_brwmbp.jpg'
        ],
        harga: 45000,
        lokasi: 'Bali',
        pengarang: 'Yuhendra',
        tahun_terbit: 2014,
        kategori_id: 8,
        diminati: 50,
        seller_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nama: 'Shanghai Girls',
        deskripsi: 'Buku ini mengisahkan tentang kehidupan kakak-beradik, Pearl dan May. Kehidupan serba layak dan glamour yang dialami oleh kedua bersaudara tersebut seketika berubah menjadi penuh liku dan penderitaan sejak invasi Jepang ke China. Untuk menyelamatkan mereka dari penderitaan, ayahnya menjodohkannya dengan pemuda-pemuda gunung emas yang berdomisili di Amerika. Sejak saat itulah mereka memulai perjalanannya dari Shanghai untuk mencari kebahagiaan di Amerika.',
        gambar: [
          'https://res.cloudinary.com/aurellieandra/image/upload/v1657700350/second_hand/sh_seeds/IMG_20201229_135800-697x1024_xhmy2v.jpg'
        ],
        harga: 55000,
        lokasi: 'Bogor',
        pengarang: 'Lisa See',
        tahun_terbit: 2005,
        kategori_id: 1,
        diminati: null,
        seller_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nama: 'Dasar-dasar Biokimia Edisi Revisi',
        deskripsi: 'Buku pembelajaran ini berisi materi-materi biokimia, fungsi organ tubuh yang berhubungan dengan proses kimia, metabolisme, rekayasa genetika, gizi dan kesehatan. Buku ini disusun sebagai bahan bacaan untuk mahasiswa, guru-guru kimia dan biologi, serta semua orang yang tertarik untuk mengetahui lebih dalam mengenai proses kimia dalam tubuh manusia, bahan makanan dan sumbernya.',
        gambar: [
          'https://res.cloudinary.com/aurellieandra/image/upload/v1657700626/second_hand/sh_seeds/5bb2659b-121e-4eed-a122-80801dcce643_kyqylg.jpg',
          'https://res.cloudinary.com/aurellieandra/image/upload/v1657700627/second_hand/sh_seeds/IMG_20201229_135828_jkposg.jpg'
        ],
        harga: 35000,
        lokasi: 'Jakarta',
        pengarang: 'Anna Poedjiadi, F.M Titin Supriyanti',
        tahun_terbit: 2005,
        kategori_id: 7,
        diminati: 20,
        seller_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nama: 'Buku Pelajaran PKN kelas IX MTS/SMP',
        deskripsi: 'Penyajian uraian uraian materi pembelajaran hendaknya didukung dengan pembelajaran yang bersifat kontekstual. Utamanya terkait dengan pelbagai berbagai kenyataan yang terjadi di masyarakat. Salah satu dukungan materi pembelajaran adalah adanya buku pelajaran Pendidikan Kewarganegaraan (PKN) yang diperuntukkan untuk siswa kelas IX SMP dan MTs.',
        gambar: [
          'https://res.cloudinary.com/aurellieandra/image/upload/v1657700750/second_hand/sh_seeds/Contoh-Resensi-Buku-Pelajaran-PKN-kelas-IX-MTS-SMP_gqmtmg.png'
        ],
        harga: 55200,
        lokasi: 'Surabaya',
        pengarang: 'A.T. Sugeng Piyanto, Djaenudin Harun, Anang Priyanto, Cholisin, Muchson A.R, Dadang Sundawa, Rr. Nanik Setyowati',
        tahun_terbit: 2018,
        kategori_id: 7,
        diminati: null,
        seller_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Bukus', null, {
      truncate: true,
      restartIdentity: true
    });
  }
};
