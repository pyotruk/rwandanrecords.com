import $ from 'jquery'

$(window).bind('mousewheel', () => {
  if ($('body').attr('id') !== 'index') return

  $('#main-title').removeClass('init')
  $('nav').removeClass('init')
  $('#records').removeClass('init')
})
