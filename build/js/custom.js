$(document).ready(function(){$(".open").click(function(o){o.preventDefault(),$(".sharepanel").slideToggle("1000","swing")}),$(".matopen").click(function(o){o.preventDefault(),$(this).next(".matter").slideToggle("1000","swing")})}),jQuery(".prettyphoto").prettyPhoto({overlay_gallery:!1,social_tools:!1});var $container=$("#portfolio,#portfolio-big");$container.isotope(),$("#filters a").click(function(){var o=$(this).attr("data-filter");return $container.isotope({filter:o}),!1}),$(".sidey").clone().appendTo(".mobily"),$(window).load(function(){$(".flexslider").flexslider({easing:"easeInOutCubic",controlNav:!1,start:function(o){$("body").removeClass("loading")}})}),$(document).ready(function(){$(".totop").hide(),$(window).scroll(function(){$(this).scrollTop()>300?$(".totop").fadeIn():$(".totop").fadeOut()}),$(".totop a").click(function(o){return o.preventDefault(),$("html, body").animate({scrollTop:0},"slow"),!1})});