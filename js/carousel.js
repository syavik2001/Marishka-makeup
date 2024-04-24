const galleryMakeup = document.getElementById('galleryMakeup');
const flktyMakeup = new Flickity(galleryMakeup, {
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
      lightGallery(document.getElementById('galleryMakeup'), {
        selector: '.carousel-cell',
        plugins: [lgZoom, lgThumbnail],
      });
    },
  },
});

const imgsMakeup = galleryMakeup.querySelectorAll('.carousel-cell img');
// get transform property
const docStyleMakeup = document.documentElement.style;
const transformPropMakeup = typeof docStyleMakeup.transform == 'string' ?
  'transform' : 'WebkitTransform';

flktyMakeup.on('scroll', function () {
  flktyMakeup.slides.forEach(function (slide, i) {
    const imgMakeup = imgsMakeup[i];
    const x = (slide.target + flktyMakeup.x) * -1 / 3;
    imgMakeup.style[transformPropMakeup] = 'translateX(' + x + 'px)';
  });
});


const galleryHair = document.getElementById('galleryHair');
const flktyHair = new Flickity(galleryHair, {
  cellAlign: 'center',
  pageDots: false,
  contain: true,
  autoPlay: 2200,
  wrapAround: true,
  imagesLoaded: true,
  percentPosition: false,
  on: {
    ready: function () {
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


const galleryBrows = document.getElementById('galleryBrows');
const flktyBrows = new Flickity(galleryBrows, {
  cellAlign: 'center',
  pageDots: false,
  contain: true,
  autoPlay: 2400,
  wrapAround: true,
  imagesLoaded: true,
  percentPosition: false,
  on: {
    ready: function () {
      lightGallery(document.getElementById('galleryBrows'), {
        selector: '.carousel-cell',
        plugins: [lgZoom, lgThumbnail],
      });
    },
  },
});

const imgsBrows = galleryBrows.querySelectorAll('.carousel-cell img');
// get transform property
const docStyleBrows = document.documentElement.style;
const transformPropBrows = typeof docStyleBrows.transform == 'string' ?
  'transform' : 'WebkitTransform';

flktyBrows.on('scroll', function () {
  flktyBrows.slides.forEach(function (slide, i) {
    const imgBrows = imgsBrows[i];
    const x = (slide.target + flktyBrows.x) * -1 / 3;
    imgBrows.style[transformPropBrows] = 'translateX(' + x + 'px)';
  });
});

const galleryReviews = document.getElementById('galleryReviews');
const flktyReviews = new Flickity(galleryReviews, {
  cellAlign: 'center',
  pageDots: false,
  contain: true,
  autoPlay: 3000,
  wrapAround: true,
  imagesLoaded: true,
  percentPosition: false,
  on: {
    ready: function () {
      lightGallery(document.getElementById('galleryReviews'), {
        selector: '.carousel-cell',
        plugins: [lgZoom, lgThumbnail],
      });
    },
  },
});

//const imgsReviews = galleryReviews.querySelectorAll('.carousel-cell img');
//// get transform property
//const docStyleReviews = document.documentElement.style;
//const transformPropReviews = typeof docStyleReviews.transform == 'string' ?
//  'transform' : 'WebkitTransform';

//flktyReviews.on('scroll', function () {
//  flktyReviews.slides.forEach(function (slide, i) {
//    const imgReviews = imgsReviews[i];
//    const x = (slide.target + flktyReviews.x) * -1 / 3;
//    imgReviews.style[transformPropReviews] = 'translateX(' + x + 'px)';
//  });
//});