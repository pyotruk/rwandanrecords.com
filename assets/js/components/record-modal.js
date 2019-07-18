import $ from 'jquery'

$(document).ready(() => {
  const modal = $('#record-modal')

  modal.find('i').click(() => {
    modal.removeClass('visible')
  })

  $('#records li h1').click((e) => {
    const li = $(e.target).parents('li')
    const text = li.attr('data-text')

    modal.find('p').text(text)
    modal.addClass('visible')
  })
})
