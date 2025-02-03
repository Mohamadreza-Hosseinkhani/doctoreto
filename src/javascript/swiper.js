import Swiper from "swiper";
import { Grid, Pagination, Navigation } from "swiper/modules";

// swiper css files
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Swiper configuration
const swiperConfig = {
  grid: {
    rows: 2,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  spaceBetween: 8,
  slidesPerView: "auto",
  modules: [Grid, Pagination, Navigation],
  
  breakpoints: {
    576: {
      grid: {
        rows: 1,
      },

      spaceBetween: 8,
    },

    768: {
      grid: {
        rows: 1,
      },

      spaceBetween: 24,
      slidesPerGroup: 2,
    },

    992: {
      grid: {
        rows: 1,
      },

      spaceBetween: 24,
      slidesPerGroup: 3,
    },

    1200: {
      grid: {
        rows: 1,
      },

      spaceBetween: 24,
      slidesPerGroup: 4,
    },
  },
};

// Initialize Swiper
const specialtiesSwiper = new Swiper(".specialties__swiper", swiperConfig);