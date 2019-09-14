import $ from 'jquery'

const MAIN_TITLE_SEL = '#main-title'

const animate = () => {
  if ($('body').attr('id') !== 'index') return

  $(MAIN_TITLE_SEL).removeClass('init')
  $('nav').removeClass('init')
  $('#records').removeClass('init')
}

$(window).bind('mousewheel', () => animate())
$(window).bind('DOMMouseScroll', () => animate()) // works in FF
$(MAIN_TITLE_SEL).bind('click', () => animate())
