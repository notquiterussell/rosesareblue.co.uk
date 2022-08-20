/*
 *   Author: bslthemes
 *   Author URL: http://themeforest.net/user/bslthemes
 *   Version: 2.6
 */

/*
	Preloader
*/

$(window).on("load", function () {
  const preload = $(".preloader");
  preload.find(".spinner").fadeOut(function () {
    preload.fadeOut();
  });
});

$(function () {
  "use strict";

  /*
		Vars
	*/

  const width = $(window).width();

  /*
		Typed
	*/

  $(".subtitle.subtitle-typed").each(function () {
    const subtitleContainer = $(this);

    subtitleContainer.typed({
      stringsElement: subtitleContainer.find(".typing-title"),
      backDelay: 3500 /* Delay in text change */,
      typeSpeed: 0 /* Typing speed */,
      loop: true,
    });
  });

  /*
		Sidebar Show/Hide
	*/

  $("header, .profile").on("click", ".menu-btn", function () {
    $(".s_overlay").fadeIn();
    $(".content-sidebar").addClass("active");
    $("body,html").addClass("sidebar-open");
    return false;
  });
  $(".content-sidebar, .container").on(
    "click",
    ".close, .s_overlay",
    function () {
      $(".s_overlay").fadeOut();
      $(".content-sidebar").removeClass("active");
      $("body,html").removeClass("sidebar-open");
    }
  );

  /*
		Popup Menu Navigation
	*/

  $(".main-menu li.page_item_has_children").each(function () {
    $(this).find("> a").after('<span class="children_toggle"></span>');
  });
  $(".main-menu").on("click", ".children_toggle", function () {
    const main_menu_item = $(this).closest(".page_item_has_children");
    if (main_menu_item.hasClass("open")) {
      main_menu_item.removeClass("open");
      main_menu_item.find("> ul").slideUp(250);
    } else {
      main_menu_item.addClass("open");
      main_menu_item.find("> ul").slideDown(250);
    }
  });

  /*
		Default Menu
	*/

  $(".lnk-view-menu").on("click", function () {
    const btn_text1 = $(this).find(".text").text();
    const btn_text2 = $(this).find(".text").data("text-open");
    let $profile = $(".profile");
    if ($profile.hasClass("default-menu-open")) {
      $profile.removeClass("default-menu-open");
      $(this).find(".text").data("text-open", btn_text1);
      $(this).find(".text").text(btn_text2);
    } else {
      $profile.addClass("default-menu-open");
      $(this).find(".text").data("text-open", btn_text1);
      $(this).find(".text").text(btn_text2);
    }

    return false;
  });

  /*
		Header Menu Desktop
	*/

  const container = $(".container");
  let $card = $(".card-inner");
  const card_items = $card;
  const animation_in = container.data("animation-in");
  const animation_out = container.data("animation-out");

  let newSkinLength = $(".new-skin").length;
  let $home = $("#home-card");
  $(".top-menu").on("click", "a", function () {
    /* vars */
    let custom_width = 1024;
    const width = $(window).width();
    const id = $(this).attr("href");
    const h = parseFloat($(id).offset().top);
    const card_item = $(id);
    const menu_items = $(".top-menu li");
    const menu_item = $(this).closest("li");
    const d_lnk = $(".lnks .lnk.discover");

    if (newSkinLength) {
      custom_width = 1200;
    }
    if (!newSkinLength) {
      custom_width = 1024;
    }

    if (width >= custom_width) {
      /* if desktop */
      if (!menu_item.hasClass("active") && width > 1023 && $home.length) {
        /* close card items */
        menu_items.removeClass("active");
        container.find(card_items).removeClass("animated " + animation_in);

        if ($(container).hasClass("opened")) {
          container.find(card_items).addClass("animated " + animation_out);
        }

        /* open card item */
        menu_item.addClass("active");
        container.addClass("opened");
        container.find(card_item).removeClass("animated " + animation_out);
        container.find(card_item).addClass("animated " + animation_in);

        $(card_items).addClass("hidden");

        $(card_item).removeClass("hidden");
        $(card_item).addClass("active");
      }
    }
    /* if mobile */
    if (width < custom_width && $home.length) {
      /* scroll to section */
      $("body,html").animate(
        {
          scrollTop: h - 100,
        },
        800
      );
    }
    return false;
  });

  let $cardWrap = $(".card-inner .card-wrap");
  $(window).on("resize", function () {
    const width = $(window).width();
    const height = $(window).height();
    let custom_width = 1024;

    if (newSkinLength) {
      custom_width = 1200;
    }
    if (!newSkinLength) {
      custom_width = 1024;
    }
    if (width < custom_width) {
      $card.removeClass("hidden");
      $card.removeClass("fadeOutLeft");
      $card.removeClass("rotateOutUpLeft");
      $card.removeClass("rollOut");
      $card.removeClass("jackOutTheBox");
      $card.removeClass("fadeOut");
      $card.removeClass("fadeOutUp");
      $card.removeClass("animated");

      $(window).on("scroll", function () {
        const scrollPos = $(window).scrollTop();
        $(".top-menu ul li a").each(function () {
          const currLink = $(this);
          const refElement = $(currLink.attr("href"));
          if (refElement.offset().top - 100 <= scrollPos) {
            $(".top-menu ul li").removeClass("active");
            currLink.closest("li").addClass("active");
          }
        });
      });

      $cardWrap.slimScroll({ destroy: true });
      $cardWrap.attr("style", "");
    } else {
      $($(".top-menu li.active a").attr("href")).addClass("active");
      if (!$(".page").hasClass("new-skin") && width > custom_width) {
        $cardWrap.slimScroll({
          height: "570px",
        });
      }
    }

    /*
			Dotted Skills Line On Resize Window
		*/
    setTimeout(skillsDotted_resize, 750);
  });

  /*
		Dotted Skills Line On Resize Window
	*/

  function skillsDotted_resize() {
    const skills_dotted = $(".skills-list.dotted .progress");
    const skills_dotted_w = skills_dotted.width();
    if (skills_dotted.length) {
      skills_dotted.find(".percentage .da").css({ width: skills_dotted_w + 1 });
    }
  }

  /*
		Smoothscroll
	*/

  if (width < 1024 && $home.length) {
    $(window).on("scroll", function () {
      const scrollPos = $(window).scrollTop();
      $(".top-menu ul li a").each(function () {
        const currLink = $(this);
        const refElement = $(currLink.attr("href"));
        if (refElement.offset().top - 76 <= scrollPos) {
          $(".top-menu ul li").removeClass("active");
          currLink.closest("li").addClass("active");
        }
      });
    });
  }

  /*
		slimScroll
	*/

  if (!$(".page").hasClass("new-skin") && width > 1024) {
    $cardWrap.slimScroll({
      height: "570px",
    });
  }

  /*
		Hire Button
	*/

  $(".lnks").on("click", ".lnk.discover", function () {
    $('.top-menu a[href="#contacts-card"]').trigger("click");
  });

  /*
		Initialize Portfolio
	*/
  const $container = $(".grid-items");
  $container.imagesLoaded(function () {
    $container.isotope({
      percentPosition: true,
      itemSelector: ".grid-item",
    });
  });

  /*
		Filter items on button click
	*/
  $(".filter-button-group").on("click", ".f_btn", function () {
    const filterValue = $(this).find("input").val();
    $container.isotope({ filter: "." + filterValue });
    $(".filter-button-group .f_btn").removeClass("active");
    $(this).addClass("active");
  });

  /*
		Gallery popup
	*/
  if (
    /\.(?:jpg|jpeg|gif|png)$/i.test($(".gallery-item:first a").attr("href"))
  ) {
    $(".gallery-item a").magnificPopup({
      gallery: {
        enabled: true,
      },
      type: "image",
      closeBtnInside: false,
      mainClass: "mfp-fade",
    });
  }

  /*
		Media popup
	*/
  $(".has-popup-media").magnificPopup({
    type: "inline",
    overflowY: "auto",
    closeBtnInside: true,
    mainClass: "mfp-fade popup-box-inline",
  });

  /*
		Image popup
	*/
  $(".has-popup-image").magnificPopup({
    type: "image",
    closeOnContentClick: true,
    mainClass: "mfp-fade",
    image: {
      verticalFit: true,
    },
  });

  /*
		Gallery popup
	*/
  $(".has-popup-gallery").on("click", function () {
    const gallery = $(this).attr("href");

    $(gallery)
      .magnificPopup({
        delegate: "a",
        type: "image",
        closeOnContentClick: false,
        mainClass: "mfp-fade",
        removalDelay: 160,
        fixedContentPos: false,
        gallery: {
          enabled: true,
        },
      })
      .magnificPopup("open");

    return false;
  });

  /*
		Tesimonials Carousel
	*/
  const revs_slider = $(".revs-carousel.default-revs .owl-carousel");

  revs_slider.owlCarousel({
    margin: 0,
    items: 1,
    autoplay: false,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    loop: true,
    rewind: false,
    nav: false,
    dots: true,
  });

  const rtl_revs_slider = $(".revs-carousel.rtl-revs .owl-carousel");

  rtl_revs_slider.owlCarousel({
    margin: 0,
    items: 1,
    rtl: true,
    autoplay: false,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    loop: true,
    rewind: false,
    nav: false,
    dots: true,
  });

  /*
		New JS
	*/

  $(window).on("resize", function () {
    /*
			Dotted Skills Line On Resize Window
		*/

    const skills_dotted = $(".skills-list.dotted .progress");
    const skills_dotted_w = skills_dotted.width();
    if (skills_dotted.length) {
      skills_dotted.find(".percentage .da").css({ width: skills_dotted_w + 1 });
    }

    /*
			Testimonials Carousel On Resize Window
		*/

    const revs_slider = $(".revs-carousel .owl-carousel");
    revs_slider.find(".revs-item").css({ "max-width": revs_slider.width() });
  });

  /*
		Dotted Skills Line
	*/

  function skills() {
    const skills_dotted = $(".skills-list.dotted .progress");
    const skills_dotted_w = skills_dotted.width();
    if (skills_dotted.length) {
      skills_dotted.append(
        '<span class="dg"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></span>'
      );
      skills_dotted
        .find(".percentage")
        .append(
          '<span class="da"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></span>'
        );
      skills_dotted.find(".percentage .da").css({ width: skills_dotted_w });
    }
  }
  setTimeout(skills, 1000);

  /*
		Circle Skills Line
	*/

  const skills_circles = $(".skills-list.circles .progress");
  if (skills_circles.length) {
    skills_circles.append(
      '<div class="slice"><div class="bar"></div><div class="fill"></div></div>'
    );
  }

  /*
		Wrap First Title Word
	*/

  $(".content .title").each(function () {
    const title = $(this).text().split(" ");
    if (title.length > 1) {
      const firstWord = title[0];
      const replaceWord = '<span class="first-word">' + firstWord + "</span>";
      const newString = $(this).html().replace(firstWord, replaceWord);
      $(this).html(newString);
    } else {
      $(this).html('<div class="first-letter">' + $(this).html() + "</div>");
    }
  });
});
