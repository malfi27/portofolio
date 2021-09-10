//Tippy
tippy('.malfi', {
  content: 'What is Malfi ?',
  animation :'shift-away',
});
tippy('.social', {
  animation :'shift-away',
});
tippy('.name', {
  animation :'shift-away',
});
tippy('.profesi', {
  animation :'shift-away',
});
tippy('.images-profil', {
  animation :'shift-away',
});
tippy('.button-show', {
  animation :'shift-away',
  content: "Click here if you want to show website"
});
//end tippy

//slick
$('.wrapper-testimonial').slick({
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  infinite :true,
  prevArrow :'.left-control',
  nextArrow :'.right-control',
});