function toggleMobileMenu(menu) {
    menu.classList.toggle('open');
}

if ($('.mobile-menu').is(':visible')) {
    $('body').addClass("fixed-position");
 } else {
    $('body').removeClass("fixed-position");
 }

