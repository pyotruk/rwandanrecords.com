import $ from 'jquery'

$(document).ready(() => {
  $('nav #menu li').each((i, li) => {
    const href = $(li).find('a').attr('href').replace(/\.html/, '')
    href === document.location.pathname
      ? $(li).addClass('active')
      : $(li).removeClass('active')
  })
})
