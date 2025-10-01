import React from "react";

function App() {
  return (
    <>
      <div className="container">
        {/* Header (TIDAK DIUBAH) */}
        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
          <div className="col-md-3 mb-2 mb-md-0">
            <a
              href="/"
              className="d-inline-flex align-items-center link-body-emphasis text-decoration-none"
            >
              <i
                className="fa-solid fa-book fa-2xl"
                style={{ color: "#74C0FC" }}
              ></i>
              <span className="ms-2 fs-4">bookstore</span>
            </a>
          </div>

          <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            <li>
              <a href="#" className="nav-link px-2">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="nav-link px-2">
                Book
              </a>
            </li>
            <li>
              <a href="#" className="nav-link px-2">
                Team
              </a>
            </li>
            <li>
              <a href="#" className="nav-link px-2">
                Contact
              </a>
            </li>
          </ul>

          <div className="col-md-3 text-end">
            <button type="button" className="btn btn-outline-primary me-2">
              Login
            </button>
            <button type="button" className="btn btn-primary">
              Register
            </button>
          </div>
        </header>

        {/* Hero (TIDAK DIUBAH) */}
        <div className="container my-5">
          <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
            <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
              <h1 className="display-4 fw-bold lh-1 text-body-emphasis">
                Temukan Buku Favoritmu di Bookstore
              </h1>
              <p className="lead">
                Dari novel, biografi, hingga buku pengembangan diri. Koleksi
                kami siap menemani perjalanan belajar dan hiburanmu.
              </p>
              <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
                <button
                  type="button"
                  className="btn btn-primary btn-lg px-4 me-md-2 fw-bold"
                >
                  Belanja Sekarang
                </button>
                <button
                  type="button"
                  className="btn btn-outline-secondary btn-lg px-4"
                >
                  Lihat Detail
                </button>
              </div>
            </div>
            <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
              <img
                className="rounded-lg-3"
                src="https://picsum.photos/720/600"
                alt="Hero Bookstore"
                width="720"
              />
            </div>
          </div>
        </div>

        {/* Product List (TIDAK DIUBAH) */}
        <section className="py-5 text-center container">
          <div className="row py-lg-5">
            <div className="col-lg-6 col-md-8 mx-auto">
              <h1 className="fw-light">Best Seller</h1>
              <p className="lead text-body-secondary">
                Koleksi buku terlaris pilihan pembaca. Temukan bacaan menarik
                yang akan memperluas wawasan dan inspirasimu.
              </p>
              <p>
                <a href="#" className="btn btn-primary my-2 m-2">
                  Lihat Semua
                </a>
                <a href="#" className="btn btn-secondary my-2">
                  Buku Lain
                </a>
              </p>
            </div>
          </div>
        </section>

        <div className="album py-5 bg-body-tertiary">
          <div className="container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
              {/* Card 1 - 12 (TIDAK DIUBAH) */}
              <div className="col">
                <div className="card shadow-sm">
                  <img
                    src="https://picsum.photos/300/200?random=1"
                    className="card-img-top"
                    alt="Atomic Habits"
                  />
                  <div className="card-body">
                    <p className="card-text">
                      Atomic Habits – Cara membangun kebiasaan baik dan
                      menghilangkan kebiasaan buruk.
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          Beli
                        </button>
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          Detail
                        </button>
                      </div>
                      <small className="text-body-secondary">Rp 95.000</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card shadow-sm">
                  <img
                    src="https://picsum.photos/300/200?random=2"
                    className="card-img-top"
                    alt="Rich Dad Poor Dad"
                  />
                  <div className="card-body">
                    <p className="card-text">
                      Rich Dad Poor Dad – Pelajaran finansial untuk membangun
                      masa depan lebih baik.
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          Beli
                        </button>
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          Detail
                        </button>
                      </div>
                      <small className="text-body-secondary">Rp 80.000</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card shadow-sm">
                  <img
                    src="https://picsum.photos/300/200?random=3"
                    className="card-img-top"
                    alt="The Psychology of Money"
                  />
                  <div className="card-body">
                    <p className="card-text">
                      The Psychology of Money – Belajar memahami perilaku
                      manusia terhadap uang.
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          Beli
                        </button>
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          Detail
                        </button>
                      </div>
                      <small className="text-body-secondary">Rp 100.000</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card shadow-sm">
                  <img
                    src="https://picsum.photos/300/200?random=4"
                    className="card-img-top"
                    alt="Laskar Pelangi"
                  />
                  <div className="card-body">
                    <p className="card-text">
                      Laskar Pelangi – Kisah inspiratif anak-anak Belitung dalam
                      meraih mimpi.
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          Beli
                        </button>
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          Detail
                        </button>
                      </div>
                      <small className="text-body-secondary">Rp 70.000</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card shadow-sm">
                  <img
                    src="https://picsum.photos/300/200?random=5"
                    className="card-img-top"
                    alt="Filosofi Kopi"
                  />
                  <div className="card-body">
                    <p className="card-text">
                      Filosofi Kopi – Kumpulan cerita dan makna dari secangkir
                      kopi.
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          Beli
                        </button>
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          Detail
                        </button>
                      </div>
                      <small className="text-body-secondary">Rp 60.000</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card shadow-sm">
                  <img
                    src="https://picsum.photos/300/200?random=6"
                    className="card-img-top"
                    alt="Sapiens"
                  />
                  <div className="card-body">
                    <p className="card-text">
                      Sapiens – Sejarah singkat umat manusia dari zaman purba
                      hingga modern.
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          Beli
                        </button>
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          Detail
                        </button>
                      </div>
                      <small className="text-body-secondary">Rp 120.000</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card shadow-sm">
                  <img
                    src="https://picsum.photos/300/200?random=7"
                    className="card-img-top"
                    alt="Ikigai"
                  />
                  <div className="card-body">
                    <p className="card-text">
                      Ikigai – Rahasia panjang umur dan bahagia dari masyarakat
                      Jepang.
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          Beli
                        </button>
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          Detail
                        </button>
                      </div>
                      <small className="text-body-secondary">Rp 85.000</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card shadow-sm">
                  <img
                    src="https://picsum.photos/300/200?random=8"
                    className="card-img-top"
                    alt="Norwegian Wood"
                  />
                  <div className="card-body">
                    <p className="card-text">
                      Norwegian Wood – Novel klasik Haruki Murakami tentang
                      cinta dan kehilangan.
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          Beli
                        </button>
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          Detail
                        </button>
                      </div>
                      <small className="text-body-secondary">Rp 95.000</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card shadow-sm">
                  <img
                    src="https://picsum.photos/300/200?random=9"
                    className="card-img-top"
                    alt="Thinking, Fast and Slow"
                  />
                  <div className="card-body">
                    <p className="card-text">
                      Thinking, Fast and Slow – Bagaimana otak bekerja dalam
                      pengambilan keputusan.
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          Beli
                        </button>
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          Detail
                        </button>
                      </div>
                      <small className="text-body-secondary">Rp 110.000</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card shadow-sm">
                  <img
                    src="https://picsum.photos/300/200?random=10"
                    className="card-img-top"
                    alt="Negeri 5 Menara"
                  />
                  <div className="card-body">
                    <p className="card-text">
                      Negeri 5 Menara – Kisah inspiratif tentang pendidikan dan
                      perjuangan.
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          Beli
                        </button>
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          Detail
                        </button>
                      </div>
                      <small className="text-body-secondary">Rp 75.000</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card shadow-sm">
                  <img
                    src="https://picsum.photos/300/200?random=11"
                    className="card-img-top"
                    alt="The Subtle Art of Not Giving a F*ck"
                  />
                  <div className="card-body">
                    <p className="card-text">
                      Filosofi Teras – Mengupas filsafat kuno untuk mengatasi
                      emosi negatif.
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          Beli
                        </button>
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          Detail
                        </button>
                      </div>
                      <small className="text-body-secondary">Rp 90.000</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card shadow-sm">
                  <img
                    src="https://picsum.photos/300/200?random=12"
                    className="card-img-top"
                    alt="Dilan 1990"
                  />
                  <div className="card-body">
                    <p className="card-text">
                      Dilan 1990 – Kisah cinta remaja Bandung yang penuh
                      nostalgia.
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          Beli
                        </button>
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          Detail
                        </button>
                      </div>
                      <small className="text-body-secondary">Rp 65.000</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --- */}
        {/* Team Section (DIUBAH) - Menggunakan Features with title */}
        <div className="container px-4 py-5" id="featured-team">
          <h2 className="pb-2 border-bottom text-center">🤝 Tim Kami</h2>

          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 py-5">
            <div className="col d-flex align-items-start">
              <i className="fa-solid fa-crown fs-2 text-primary me-3"></i>
              <div>
                <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">
                  Abdur Rohman Lathif
                </h3>
                <p>
                  <strong>Founder & CEO</strong>. Memimpin visi dan strategi
                  bisnis bookstore.
                </p>
              </div>
            </div>
            <div className="col d-flex align-items-start">
              <i className="fa-solid fa-chart-line fs-2 text-primary me-3"></i>
              <div>
                <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">
                  Elok Faiqoh
                </h3>
                <p>
                  <strong>Marketing Head</strong>. Bertanggung jawab atas semua
                  kampanye pemasaran dan promosi.
                </p>
              </div>
            </div>
            <div className="col d-flex align-items-start">
              <i className="fa-solid fa-code fs-2 text-primary me-3"></i>
              <div>
                <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">
                  Bima Harinta
                </h3>
                <p>
                  <strong>Lead Developer</strong>. Mengawasi pengembangan dan
                  pemeliharaan platform digital kami.
                </p>
              </div>
            </div>
            <div className="col d-flex align-items-start">
              <i className="fa-solid fa-book-reader fs-2 text-primary me-3"></i>
              <div>
                <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">
                  Firza Herfian
                </h3>
                <p>
                  <strong>Content Curator</strong>. Memilih dan memastikan
                  koleksi buku kami selalu relevan.
                </p>
              </div>
            </div>
            <div className="col d-flex align-items-start">
              <i className="fa-solid fa-handshake fs-2 text-primary me-3"></i>
              <div>
                <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">
                  Maulana Ardhiansyah P
                </h3>
                <p>
                  <strong>Partnership Manager</strong>. Menjalin kerjasama
                  dengan penerbit dan distributor.
                </p>
              </div>
            </div>
            <div className="col d-flex align-items-start">
              <i className="fa-solid fa-headset fs-2 text-primary me-3"></i>
              <div>
                <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">
                  Muhammad Danil Ma'ruf
                </h3>
                <p>
                  <strong>Customer Support</strong>. Siap membantu dan
                  memastikan kepuasan pelanggan.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* --- */}

        {/* Contact Section (DIUBAH) - Menggunakan Sign-up and login form with image (dimodifikasi) */}
        <div className="container col-xl-10 col-xxl-8 px-4 py-5">
          <div className="row align-items-center g-lg-5 py-5">
            {/* Kolom kiri - Teks dan tombol kontak langsung */}
            <div className="col-lg-7 text-center text-lg-start">
              <h1 className="display-4 fw-bold lh-1 text-body-emphasis mb-3">
                Hubungi Kami
              </h1>
              <p className="col-lg-10 fs-4">
                Punya pertanyaan, kritik, atau saran untuk koleksi buku kami?
                Jangan ragu untuk menghubungi tim kami melalui formulir kontak
                di samping atau saluran langsung di bawah ini. Kami senang
                mendengar dari Anda!
              </p>
              <div className="d-flex flex-column flex-md-row gap-3 mt-5 justify-content-lg-start justify-content-center">
                <a
                  href="https://wa.me/6285708648766"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-success btn-lg d-flex align-items-center justify-content-center"
                >
                  <i className="fa-brands fa-whatsapp me-2"></i> WhatsApp
                </a>
                <a
                  href="mailto:contact@bookstore.com"
                  className="btn btn-danger btn-lg d-flex align-items-center justify-content-center"
                >
                  <i className="fa-solid fa-envelope me-2"></i> Email
                </a>
              </div>
            </div>

            {/* Kolom kanan - Formulir Kontak */}
            <div className="col-md-10 mx-auto col-lg-5">
              <form className="p-4 p-md-5 border rounded-3 bg-body-tertiary">
                <h4 className="mb-4 text-center">Kirim Pesan Cepat</h4>
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingName"
                    placeholder="Nama Lengkap"
                  />
                  <label htmlFor="floatingName">Nama Lengkap</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="email"
                    className="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                  />
                  <label htmlFor="floatingInput">Alamat Email</label>
                </div>
                <div className="form-floating mb-3">
                  <textarea
                    className="form-control"
                    id="floatingTextarea"
                    placeholder="Pesan Anda"
                    style={{ height: "150px" }}
                  ></textarea>
                  <label htmlFor="floatingTextarea">Pesan</label>
                </div>
                <button className="w-100 btn btn-lg btn-primary" type="submit">
                  Kirim Pesan
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="container">
          <footer className="py-3 my-4">
            <p className="text-center text-body-secondary">
              &copy; 2025 Muhammad Aditya Pratama
            </p>
          </footer>
        </div>
      </div>
    </>
  );
}

export default App;
