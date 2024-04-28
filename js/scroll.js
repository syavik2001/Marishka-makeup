//gsap.registerPlugin(ScrollTrigger);

//ScrollTrigger.defaults({ smoothScrolling: false });


// use a script tag or an external JS file
document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger)
  // gsap code here!
  let itemsL = gsap.utils.toArray('.gallery__left .gallery__item')

  itemsL.forEach(item => {
    gsap.fromTo(item, { opacity: 0, x: -250 }, {
      opacity: 1, x: -10,
      scrollTrigger: {
        trigger: item,
        start: '-1150',
        end: '-200',
        scrub: true,
      }
    })
  })

  let itemsR = gsap.utils.toArray('.gallery__right .gallery__item')

  itemsR.forEach(item => {
    gsap.fromTo(item, { opacity: 0, x: 250 }, {
      opacity: 1, x: 10,
      scrollTrigger: {
        trigger: item,
        start: '-1050',
        end: '-200',
        scrub: true,
      }
    })
  })

});





//let itemsL = gsap.utils.toArray('.gallery__left .gallery__item')

//itemsL.forEach(item => {
//  gsap.fromTo(item, { opacity: 0, x: -250 }, {
//    opacity: 1, x: -10,
//    scrollTrigger: {
//      trigger: item,
//      start: '-1150',
//      end: '-200',
//      scrub: true,
//    }
//  })
//})

//let itemsR = gsap.utils.toArray('.gallery__right .gallery__item')

//itemsR.forEach(item => {
//  gsap.fromTo(item, { opacity: 0, x: 250 }, {
//    opacity: 1, x: 10,
//    scrollTrigger: {
//      trigger: item,
//      start: '-1050',
//      end: '-200',
//      scrub: true,
//    }
//  })
//})

