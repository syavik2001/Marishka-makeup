
document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger)

  let itemsL = gsap.utils.toArray('.gallery__left .gallery__item')
  itemsL.forEach(item => {
    gsap.fromTo(item, { opacity: 0, x: -250 }, {
      opacity: 1, x: -10,
      scrollTrigger: {
        trigger: item,
        start: '-1150px',
        end: '-200px',
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
        start: '-1050px',
        end: '-200px',
        scrub: true,
      }
    })
  })
});

