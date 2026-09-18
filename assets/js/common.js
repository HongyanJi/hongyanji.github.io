$(document).ready(function() {
  // add toggle functionality to abstract and bibtex buttons
  $('button.abstract, button.bibtex').click(function() {
    const $button = $(this);
    const $entry = $button.closest('[id]');
    const panel = document.getElementById($button.attr('aria-controls'));
    const shouldOpen = $button.attr('aria-expanded') !== 'true';

    $entry.find('button.abstract, button.bibtex').attr('aria-expanded', 'false');
    $entry.find('.abstract.hidden, .bibtex.hidden')
      .removeClass('open')
      .attr('aria-hidden', 'true');

    if (shouldOpen && panel) {
      $(panel).addClass('open').attr('aria-hidden', 'false');
      $button.attr('aria-expanded', 'true');
    }
  });
  $('a').removeClass('waves-effect waves-light');

  // bootstrap-toc
  if($('#toc-sidebar').length){
    var navSelector = "#toc-sidebar";
    var $myNav = $(navSelector);
    Toc.init($myNav);
    $("body").scrollspy({
      target: navSelector,
    });
  }
});
