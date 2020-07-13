$(function () {
  $(".weekly__product").slick({
    prevArrow:
      '<button type="button" class="slick-btn slick-prev"> <img src="img/icons/arrow-left.png" alt="">',
    nextArrow:
      '<button type="button" class="slick-btn slick-next"> <img src="img/icons/arrow-right.png" alt="">',
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
    rating: 4,
    readOnly: true,
    starWidth: "17px",
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
