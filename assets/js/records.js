import $ from 'jquery'
import CircleType from 'circletype'

const INIT_RADIUS = 680
const RADIUS_STEP = 32

$(document).ready(() => {
  let items = $('#records ul li a')

  items.each((i, el) => {
    new CircleType(el).radius(INIT_RADIUS - i * RADIUS_STEP)
  })
})

// let currentAngle = 0 // degrees
// let lastScrollTop = 0

// $(window).scroll(() => {
//   const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop
//   currentScrollTop > lastScrollTop ? --currentAngle : ++currentAngle
//   lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop // mobiles or negative scrolling
//   let transformCss = 'rotate(' + currentAngle + 'deg)'
//   $('#records > div').css({'transform': transformCss})
//
//   // hides main title after the first scrolling
//   if (currentAngle < -60) {
//     $('#records ul').find('li:first-child').hide()
//   }
// })
