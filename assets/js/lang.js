import $ from 'jquery'

const LANG_CONTROL_SEL = '#lang li'

const switchToLang = (lang) => {
  $(LANG_CONTROL_SEL).removeClass('active')
  $(`${LANG_CONTROL_SEL}.${lang}`).addClass('active')

  $(`*[lang="${lang}"]`).show()
  $(`*[lang]:not([lang="${lang}"])`).hide()
}

switchToLang('de')

$(LANG_CONTROL_SEL).click((e) => {
  switchToLang($(e.target).text())
})
