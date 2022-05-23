$(document).ready(function () {
  var offset = 200; // координата сдвига по оси Y
  var duration = 300; // время выполнения

  $("#totop").fadeOut(0);

  $('a[href^="#"]').click(function () {
    // если в href начинается с #, то обрабатываем клик
    var scroll_el = $(this).attr("href"); // возьмем содержимое атрибута href
    if ($(scroll_el).length != 0) {
      // проверим существование элемента чтобы избежать ошибки
      $("html, body").animate({ scrollTop: $(scroll_el).offset().top }, 500); // анимируем скроолинг к элементу scroll_el
    }
    return false; // выключаем стандартное действие
  });
  $(window).scroll(function () {
    if ($(this).scrollTop() > offset) {
      $("#totop").css("opacity", "0.8"); // возвращаем прозрачность
      $("#totop").fadeIn(duration); // элемент плавно исчезает
    } else {
      $("#totop").fadeOut(duration); // элемент плавно появляется
    }
    $(".slideanim").each(function () {
      // для каждого блока с классом slideanim
      var pos = $(this).offset().top; // считываем его координату по оси Y в окне браузера

      var winTop = $(window).scrollTop(); // количество пикселей, на которые прокручено окно

      if (pos < winTop + 500) {
        //если до верха страницы остается 500px,
        $(this).addClass("slide"); //добавляем к блоку класс slide с анимацией
      }
      $(".jumbotron").css(
        "background-position",
        "left " +
          (-(winTop * 0.4) + 220) +
          "px," +
          "right " +
          (-(winTop * 0.3) + 90) +
          "px," +
          "center " +
          -(winTop * 0.5) +
          "px"
      );
    });
  });
});
