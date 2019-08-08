import $ from 'jquery'

$(document).ready(() => {
  const modal = $('#record-modal')

  modal.find('i').click(() => {
    modal.removeClass('visible')
  })

  $('#records').find('li').click((e) => {
    const li = e.target.tagName === 'LI' ? $(e.target) : $(e.target).parents('li')

    if (li.find('em').length) {
      const html = li.find('em').html()

      modal.find('p').html(html)
      modal.addClass('visible')
    }
  })
})
