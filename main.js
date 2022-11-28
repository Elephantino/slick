$(function () {

  $('.slick').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: true,
    adaptiveHeight: true,  // адаптирует высоту только при одиночном слайде
    speed: 300,
    initialSlide: 1,
    // autoplay: true,
    autoplaySpeed: 1000,
    pauseOnFocus: true,
    pauseOnHover: true,
    pauseOnDotsHover: true,
    draggable: true, // свайп на пк
    swipe: true,  // свайп на телефоне
    touchThreshold: 99, // чувствительность свайпа
    touchMove: true,  // слайдер тянуться не будет
    waitFodAnimate: true, //быстрое перелистывание слайдов
    centerMode: false,
  });

});

