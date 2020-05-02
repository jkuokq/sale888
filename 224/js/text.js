"use strict";
$(document).ready(function () {
   function t(i, n, s) {
      i.css("font-size", s);
      var e = i.width();
      return console.log(e), console.log(n), e > n ? (s -= 1, t(i, n, s)) : s
   }
   var i = $(".js-text");
   i.each(function () {
      var i, n = $(this).find(".black-version"),
         s = $(this).attr("data-text"),
         e = $(this).attr("data-size");
      "vertical" == s ? i = $(this).innerHeight() : "gorisontal" == s && (i = $(this).innerWidth()), e && (i *= e);
      var a = .8 * i,
         o = t(n, i, a);
      n.css({
         "font-size": o,
         opacity: 1
      })
   })
});