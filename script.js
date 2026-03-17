// 1. Reveal Animation saat Scroll
const handleReveal = () => {
  const reveals = document.querySelectorAll(".reveal");
  const triggerBottom = window.innerHeight * 0.85;
  const triggerTop = 100; // Batas atas untuk memicu hilang kembali

  reveals.forEach((el) => {
    const elTop = el.getBoundingClientRect().top;
    const elBottom = el.getBoundingClientRect().bottom;

    // Jika elemen masuk ke area layar
    if (elTop < triggerBottom && elBottom > triggerTop) {
      el.classList.add("active");
    }
    // Jika elemen keluar dari layar (baik ke atas maupun ke bawah)
    else {
      el.classList.remove("active");
    }
  });
};

// 2. Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80, // Offset sesuai tinggi navbar
        behavior: "smooth",
      });
    }
  });
});

// 3. Form Submit
const contactForm = document.querySelector(".contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Terima kasih! Pesan Anda telah terkirim.");
    contactForm.reset();
  });
}

// Jalankan fungsi saat scroll dan saat halaman pertama dimuat
window.addEventListener("scroll", handleReveal);
window.addEventListener("DOMContentLoaded", handleReveal);

// Fungsi untuk menandai link navbar saat scroll
const highlightNav = () => {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-links li a");

  let currentSection = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    // Cek jika scroll berada di area section (dengan offset 100px agar lebih responsif)
    if (pageYOffset >= sectionTop - 100) {
      currentSection = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active-link");
    if (link.getAttribute("href").includes(currentSection)) {
      link.classList.add("active-link");
    }
  });
};

// Jalankan fungsi saat user scroll
window.addEventListener("scroll", highlightNav);

// Jalankan sekali saat halaman dimuat agar posisi awal terdeteksi
window.addEventListener("DOMContentLoaded", highlightNav);
