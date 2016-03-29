/*!
 * JavaScript for Bootstrap's docs (http://getbootstrap.com)
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under the Creative Commons Attribution 3.0 Unported License. For
 * details, see http://creativecommons.org/licenses/by/3.0/.
 */

!function ($) {
  'use strict';

  $(function () {

      // Scrollspy
      var $window = $(window)
      var $body = $(document.body)

      $body.scrollspy({
          target: '.bs-docs-sidebar'
      })
      $window.on('load', function () {
          $body.scrollspy('refresh')
      })

      // Kill links
      $('.bs-docs-container [href=#]').click(function (e) {
          e.preventDefault()
      })

      // Sidenav affixing
      setTimeout(function () {
          var $sideBar = $('.bs-docs-sidebar')

          $sideBar.affix({
              offset: {
                  top: function () {
                      var offsetTop = $sideBar.offset().top
                      var sideBarMargin = parseInt($sideBar.children(0).css('margin-top'), 60)
                      var navOuterHeight = $('.navbar').height()

                      return (this.top = offsetTop - navOuterHeight - sideBarMargin)
                  },
                  bottom: function () {
                      return (this.bottom = $('.home-footer').outerHeight(true))
                  }
              }
          })
      }, 100)

      setTimeout(function () {
          $('.bs-top').affix()
      }, 100)

  })

 }(window.jQuery);