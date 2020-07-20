$(function () {
  $(".weekly__product").slick({
    prevArrow:
      '<button type="button" class="slick-btn slick-prev"> <img src="img/icons/arrow-left.png" alt="">',
    nextArrow:
      '<button type="button" class="slick-btn slick-next"> <img src="img/icons/arrow-right.png" alt="">',
  });
  $(".feedback__inner").slick({
    prevArrow:
      '<button type="button" class="feedback-btn feedback-prev"> <img src="img/icons/arrow-left.png" alt="">',
    nextArrow: '<button type="button" class="feedback-btn feedback-next">',
    slidesToShow: 2,
    slidesToScroll: 1,
  });

  $(".icon-th-large").on("click", function () {
    $(".product__items-list").addClass("large");
    $(".icon-th-large").addClass("active");
    $(".icon-th-list").removeClass("active");
  });

  $(".icon-th-list").on("click", function () {
    $(".product__items-list").removeClass("large");
    $(".icon-th-list").addClass("active");
    $(".icon-th-large").removeClass("active");
  });

  $(".category__title").on("click", function () {
    $(".asside__categories").toggleClass("close");
  });
  $(".filter__title").on("click", function () {
    $(".asside__filter-products").toggleClass("close");
  });
  $(".range__title").on("click", function () {
    $(".price-range__content").toggleClass("close");
  });

  $(".header__burger").on("click", function () {
    $(".header__burger, .menu").toggleClass("active");
    $("body").toggleClass("lock");
  });

  $(".weekly__product-info-rate").rateYo({
    rating: 4,
    readOnly: true,
    starWidth: "20px",
  });
  $(".product__rate").rateYo({
    rating: 4,
    readOnly: true,
    starWidth: "12px",
  });
  $(".product__item-rate").rateYo({
    // rating: 4,
    readOnly: true,
    // starWidth: "17px",
  });
  $(".product__item-list-rate").rateYo({
    // rating: 4,
    // readOnly: true,
    // starWidth: "14px",
  });

  $(".js-range-slider").ionRangeSlider({
    type: "double",
    min: 0,
    max: 330,
    from: 30,
    to: 300,
    prefix: "$",
    min_interval: 150,
  });

  var mixer = mixitup(".newproducts__items");
});
