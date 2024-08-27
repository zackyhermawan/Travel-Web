// menambahkan navbar blur
const changeColor = () => {
  const navbar = document.querySelector(".navbar");
  window.scrollY >= 50 ? navbar.classList.add("change-color") : navbar.classList.remove("change-color");
};
window.addEventListener("scroll", changeColor);

// untuk hamburger menu
const navLink = document.querySelector(".nav-link");
// ketika hamburger di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navLink.classList.toggle("active");
};

// agar bisa di menutup sidebar/di klik di mana saja
const hamburgerMenu = document.querySelector("#hamburger-menu");

// Ketika hamburger di klik
hamburgerMenu.onclick = () => {
  navLink.classList.toggle("active");
};

// Agar bisa menutup sidebar/di klik di mana saja
document.addEventListener("click", function (event) {
  if (!hamburgerMenu.contains(event.target) && !navLink.contains(event.target)) {
    navLink.classList.remove("active");
  }
});

hamburgerMenu.addEventListener("click", function (event) {
  // Cegah tindakan default jika hamburger menu adalah elemen <a> atau tombol dengan link
  const navbar = document.querySelector(".navbar");

  event.preventDefault();
  // Toggle class 'active' pada navbar untuk menampilkan atau menyembunyikan
  navbar.classList.toggle("active");
});
