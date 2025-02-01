$(document).ready(function () {
  $(".btn__footer--less").addClass("d-none");
});
$(".btn__footer--readmore").click(function () {
  $(".moretext").css({ display: "block", transition: "all ease 0.5s" });
  $(".btn__footer--less").removeClass("d-none");
  $(".btn__footer--readmore").addClass("d-none");
});
$(".btn__footer--less").click(function () {
  $(".moretext").css({ display: "none", transition: "all ease 0.5s" });
  $(".btn__footer--readmore").removeClass("d-none");
  $(".btn__footer--less").addClass("d-none");
});
