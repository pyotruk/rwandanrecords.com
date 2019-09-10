import $ from 'jquery'

$(document).ready(() => {
  $('nav #menu li').each((i, li) => {
    const href = $(li).find('a').attr('href').replace(/\.html/, '')
    const path = document.location.pathname.replace(/\.html/, '')
    href === path
      ? $(li).addClass('active')
      : $(li).removeClass('active')
  })
})
