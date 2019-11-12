import $ from 'jquery'

const MAIN_TITLE_SEL = '#main-title'

const setScrollingEnabled = (isEnabled) => {
  if (isEnabled) {
    $('body').css('overflow', 'auto')
  } else {
    $('body').css('overflow', 'hidden')
  }
}

const shouldAnimate = () => $(MAIN_TITLE_SEL).hasClass('init')

if (shouldAnimate()) {
  setScrollingEnabled(false)
}

const animate = () => {
  if ($('body').attr('id') !== 'index') return

  $(MAIN_TITLE_SEL).removeClass('init')
  $('nav').removeClass('init')
  $('#records-desktop').removeClass('init')
  $('#records-mobile').removeClass('init')

  setTimeout(() => setScrollingEnabled(true), 1500)
}

$(window).bind('mousewheel', () => animate())
$(window).bind('DOMMouseScroll', () => animate()) // works in FF
$(MAIN_TITLE_SEL).bind('click', () => animate())
$(document).on('touchstart', () => animate())
