import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import "../../node_modules/swiper/swiper.min.css";
import "../../node_modules/swiper/modules/navigation.min.css";
import "../../node_modules/swiper/modules/pagination.min.css";
export const swiper = new Swiper(".mySwiper", {
  cssMode: true,
  navigation: {
    nextEl: ".nextBtn__newestdoctor",
    prevEl: ".prevBtn__newestdoctor",
  },
  pagination: {
    el: ".pagination__newestdoctor",
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 10,
    },
  },
  modules: [Navigation, Pagination],
});
export const swiperLatestBlog = new Swiper(".swiper-latest", {
  cssMode: true,
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    320: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 5,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 10,
      spaceBetween: 10,
    },
  },
});
export const swiperLatestBlogAll = new Swiper(".swiper__latestblog--all", {
  cssMode: true,
  mousewheel: true,
  keyboard: true,
  loop:true,
  navigation: {
    nextEl: ".nextBtn__latestblogAll",
    prevEl: ".prevBtn__latestblogAll",
  },
  pagination: {
    el: ".pagination__latestblogAll",
  },
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
    1440:{
      slidesPerView: 4,
      spaceBetween: 10,
    }
  },
});
