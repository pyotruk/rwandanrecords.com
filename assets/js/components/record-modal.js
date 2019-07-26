import $ from 'jquery'

$(document).ready(() => {
  const modal = $('#record-modal')

  modal.find('i').click(() => {
    modal.removeClass('visible')
  })

  $('#records li h1').click((e) => {
    const li = $(e.target).parents('li')
    const html = li.find('em').html()

    modal.find('p').html(html)
    modal.addClass('visible')
  })
})
