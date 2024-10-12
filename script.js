// Get elements
const navToggle = document.getElementById("navToggle");
const navMenu = document.querySelector(".nav-menu");
const openIcon = document.getElementById("openIcon");
const closeIcon = document.getElementById("closeIcon");
const navLinks = document.querySelectorAll(".nav-menu li a"); // Ambil semua link di menu

// Toggle nav menu on icon click
navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  openIcon.style.display = navMenu.classList.contains("active")
    ? "none"
    : "block";
  closeIcon.style.display = navMenu.classList.contains("active")
    ? "block"
    : "none";
});

// Close nav menu when clicking outside the menu
document.addEventListener("click", (e) => {
  if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
    navMenu.classList.remove("active");
    openIcon.style.display = "block";
    closeIcon.style.display = "none";
  }
});

// Close nav menu when clicking on a menu item
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
    openIcon.style.display = "block";
    closeIcon.style.display = "none";
  });
});
// Ambil elemen untuk popup
const popup = document.getElementById("popup");
const popupImg = document.getElementById("popupImg");
const popupClose = document.getElementById("popupClose");

// Ambil semua gambar sertifikat
const certificateImages = document.querySelectorAll(".certificate-img");

// Tambahkan event listener untuk setiap gambar sertifikat
certificateImages.forEach((img) => {
  img.addEventListener("click", () => {
    popupImg.src = img.src; // Atur sumber gambar popup sama dengan gambar yang diklik
    popup.style.display = "flex"; // Tampilkan popup
  });
});

// Tambahkan event listener untuk tombol close
popupClose.addEventListener("click", () => {
  popup.style.display = "none"; // Sembunyikan popup
});

// Tutup popup jika pengguna mengklik di luar gambar
popup.addEventListener("click", (e) => {
  if (e.target === popup) {
    popup.style.display = "none"; // Sembunyikan popup
  }
});
