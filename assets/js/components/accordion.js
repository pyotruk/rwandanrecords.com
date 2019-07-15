import $ from 'jquery'

$('.accordion').click((e) => $(e.target).parent('.accordion').toggleClass('opened'))
