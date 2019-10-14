/* global $ */

$(document).ready(function () {
  $('.navbar-toggler').click(function () {
    $('.hamburger-container').toggleClass('open')
  })

  $('.nav-link').click(function (e) {
    document.location.reload()
    e.preventDefault()
  })
})
