import $ from 'jquery'

const switchToLang = (lang) => {
  $(`*[lang="${lang}"]`).show()
  $(`*[lang]:not([lang="${lang}"])`).hide()
}

switchToLang('de')

$('#lang li').click((e) => {
  switchToLang($(e.target).text())
})
