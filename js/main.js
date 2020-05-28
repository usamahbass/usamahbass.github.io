// navbar resize after scroll

window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  const navbarOne = document.querySelector(".navbar-one");
  const navbarTwo = document.querySelector(".navbar-two");

  // apabila page di scroll ke bawah sepanjang 50 , maka
  if (window.pageYOffset > 50) {
    navbar.classList.add("navbar-active");
    navbarOne.classList.add("nav-active");
    navbarTwo.classList.add("nav-active");
  } else if (window.pageYOffset < 50) {
    navbar.classList.remove("navbar-active");
    navbarOne.classList.remove("nav-active");
    navbarTwo.classList.remove("nav-active");
  }
});

// siblings tab

// membuat array dari elemen
let navbar = Array.from(document.querySelectorAll(".navtab"));

const getSiblins = (e) => {
  // looping array navbar dengan forEach dan deklarasi awal class
  navbar.forEach((item) => item.classList.remove("active"));
  // apabila parameter e (isi dari class navtab) di klik maka kasih class active
  e.currentTarget.classList.add("active");
};

// memanggil function
navbar.forEach((item) => item.addEventListener("click", getSiblins));

// make a tab

openTab = (id) => {
  var i;
  var x = document.getElementsByClassName("tab");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  document.getElementById(id).style.display = "block";
};
