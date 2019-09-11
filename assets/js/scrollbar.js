import $ from 'jquery'

/**
 * Adds padding-right if there is no scrollbar in order to prevent page shaking on the old browsers / OS
 */

const SCROLLBAR_WIDTH = '17px'

const hasScrollBar = () => {
  return $(window).get(0).scrollHeight > $(window).height()
}

$(document).ready(() => {
  if (!hasScrollBar()) $('body').css('padding-right', SCROLLBAR_WIDTH)
})
