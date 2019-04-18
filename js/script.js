$(document).ready(function() {
  let alt = $(".active").attr("alt")
  $("p").html(alt)

  $(".prev").click(function() {
    let atual = $(".active");
    let anterior = atual.prev("img");
    atual.removeClass("active");

    if (anterior.length > 0) {
      let alt = anterior.attr("alt");
      anterior.addClass("active");
      $("p").html(alt);
    } else {
      let ultimo = $("#carousel img").eq(-1);
      ultimo.addClass("active");
      let altUltimo = ultimo.attr("alt");
      $("p").html(altUltimo);

    }
  });

  $(".next").click(function() {
    let atual = $(".active");
    let proximo = atual.next("img");
    atual.removeClass("active");

    if (proximo.length > 0) {
      let alt = proximo.attr("alt");
      proximo.addClass("active");
      $("p").html(alt);

    } else {
      let primeiro = $("#carousel img").eq(0);
      primeiro.addClass("active");
      let altPrimeiro = primeiro.attr("alt");
      $("p").html(altPrimeiro);
    }
  });
});
