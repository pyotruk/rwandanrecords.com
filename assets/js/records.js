import $ from 'jquery'

let currentAngle = 0 // degrees
let lastScrollTop = 0

$(window).scroll(() => {
  const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop
  currentScrollTop > lastScrollTop ? --currentAngle : ++currentAngle
  lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop // mobiles or negative scrolling
  let transformCss = 'rotate(' + currentAngle + 'deg)'
  $('#records > div').css({'transform': transformCss})
})
