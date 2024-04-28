gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.defaults({ smoothScrolling: false });


gsap.fromTo('.about-portfolio', { opacity: 1 }, {
  opacity: 1,
  scrollTrigger: {
    trigger: '.container',
    start: '0px',
    end: 'top',
    scrub: true,
    smoothScrolling: false
  }
})

let itemsL = gsap.utils.toArray('.about-portfolio .gallery__left .gallery__item')

itemsL.forEach(item => {
  gsap.fromTo(item, { opacity: 0, x: -150 }, {
    opacity: 1, x: -10,
    scrollTrigger: {
      trigger: item,
      start: '-1150',
      end: '-200',
      scrub: true,
      smoothScrolling: false
    }
  })
})

let itemsR = gsap.utils.toArray('.about-portfolio .gallery__right .gallery__item')

itemsR.forEach(item => {
  gsap.fromTo(item, { opacity: 0, x: 150 }, {
    opacity: 1, x: 10,
    scrollTrigger: {
      trigger: item,
      start: '-1050',
      end: '-200',
      scrub: true,
      smoothScrolling: false
    }
  })
})

