import $ from 'jquery'

$(document).ready(() => {
  $('#records ul li').first().click(() => {
    $('#record-modal-overlay').show()
    $('#record-modal').show()
  })

  $('#record-modal-overlay').click(() => {
    $('#record-modal-overlay').hide()
    $('#record-modal').hide()
  })
})
