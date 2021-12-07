window.onscroll = () => {
  if (window.scrollY > 80) {
    document.querySelector(".header .header-2").classList.add("active");
  } else {
    document.querySelector(".header .header-2").classList.remove("active");
  }
};

document.getElementById("search-b").addEventListener("click", () => {
  document
    .querySelector(".header .header-1 .search-form")
    .classList.toggle("active");
});

var swiper = new Swiper(".swiper", {
  loop: true,
  direction: "horizontal",
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".mySwiper", {
  loop: true,
  direction: "horizontal",
  autopaly: {
    delay: 2500,
    disableOnInteraction: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});