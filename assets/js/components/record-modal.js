import $ from 'jquery'

const OVERLAY_SEL = '#record-modal-overlay'
const MODAL_SEL = '#record-modal'

window.__rwandan_records__ = {
  showModal: (videoUrl) => {
    const iframe = $(MODAL_SEL).find('iframe')
    iframe.attr('src', `${videoUrl}?autoplay=1`)
    $(OVERLAY_SEL).show()

    iframe.on('load', (e) => {
      $(e.target).attr('src') && $(MODAL_SEL).show()
    })
  }
}

$(document).ready(() => {
  $(OVERLAY_SEL).click(() => {
    $(OVERLAY_SEL).hide()
    $(MODAL_SEL).hide()
    $(MODAL_SEL).find('iframe').attr('src', '')
  })
})
