const galleryHair = document.getElementById('galleryHair');

const flktyHair = new Flickity(galleryHair, {
  cellAlign: 'center',
  pageDots: false,
  contain: true,
  autoPlay: 2000,
  wrapAround: true,
  imagesLoaded: true,
  percentPosition: false,
  on: {
    ready: function () {
      //const container = document.querySelector('.flickity-slider');
      lightGallery(document.getElementById('galleryHair'), {
        selector: '.carousel-cell',
        plugins: [lgZoom, lgThumbnail],
      });
    },
  },
});

const imgsHair = galleryHair.querySelectorAll('.carousel-cell img');
// get transform property
const docStyleHair = document.documentElement.style;
const transformPropHair = typeof docStyleHair.transform == 'string' ?
  'transform' : 'WebkitTransform';

flktyHair.on('scroll', function () {
  flktyHair.slides.forEach(function (slide, i) {
    const imgHair = imgsHair[i];
    const x = (slide.target + flktyHair.x) * -1 / 3;
    imgHair.style[transformPropHair] = 'translateX(' + x + 'px)';
  });
});
