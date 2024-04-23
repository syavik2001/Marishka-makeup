gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

ScrollTrigger.defaults({ smoothScrolling: true });


gsap.fromTo('.about-content', { opacity: 1 }, {
  opacity: 0,
  scrollTrigger: {
    trigger: '.container',
    start: 'center',
    end: '820',
    scrub: true
  }
})

let itemsL = gsap.utils.toArray('.about-portfolio .gallery__left .gallery__item')

itemsL.forEach(item => {
  gsap.fromTo(item, { opacity: 0, x: -150 }, {
    opacity: 1, x: -10,
    scrollTrigger: {
      trigger: item,
      start: '-1350',
      end: '-300',
      scrub: true
    }
  })
})

let itemsR = gsap.utils.toArray('.about-portfolio .gallery__right .gallery__item')

itemsR.forEach(item => {
  gsap.fromTo(item, { opacity: 0, x: 150 }, {
    opacity: 1, x: 10,
    scrollTrigger: {
      trigger: item,
      start: '-1250',
      end: '-300',
      scrub: true
    }
  })
})

