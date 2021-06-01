/*
	Striped by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

function get_menu_by_url(current) {
	var output = "index_tw.html";

	switch (current) {
		case 'about.html':
	    output = "about_tw.html";
	    break;
		case 'about_tw.html':
		  output = "about.html";
		  break;
		case 'index.html':
      output = "index_tw.html";
      break;
	  case 'index_tw.html':
	    output = "index.html";
	    break;
	  case 'links.html':
		  output = "links_tw.html";
		  break;
		case 'links_tw.html':
			output = "links.html";
			break;
		case 'personal.html':
			output = "personal_tw.html";
			break;
		case 'personal_tw.html':
		  output = "personal.html";
			break;
		case 'projects.html':
			output = "projects_tw.html";
			break;
		case 'projects_tw.html':
			output = "projects.html";
			break;
		case 'publications.html':
			output = "publications_tw.html";
			break;
		case 'publications_tw.html':
			output = "publications.html";
			break;
    case 'submenu.html':
      output = "submenu_tw.html";
      break;
    default:
      break;
 }

	return output;
}

function set_menu_lang() {
	var link = document.getElementById("menu_lang");
  var current_link = window.location.href;

  current_link = current_link.substr(current_link.lastIndexOf("/")+1);
	current_link = get_menu_by_url(current_link);
  //alert(current_link);

  link.href = current_link;
}

(function($) {

	var	$window = $(window),
		$body = $('body'),
		$document = $(document);

	// Breakpoints.
		breakpoints({
			desktop:   [ '737px',   null     ],
			wide:      [ '1201px',  null     ],
			narrow:    [ '737px',   '1200px' ],
			narrower:  [ '737px',   '1000px' ],
			mobile:    [ null,      '736px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);

			set_menu_lang();
		});

	// Nav.

		// Height hack.
		/*
			var $sc = $('#sidebar, #content'), tid;

			$window
				.on('resize', function() {
					window.clearTimeout(tid);
					tid = window.setTimeout(function() {
						$sc.css('min-height', $document.height());
					}, 100);
				})
				.on('load', function() {
					$window.trigger('resize');
				})
				.trigger('resize');
		*/

		// Title Bar.
			$(
				'<div id="titleBar">' +
					'<a href="#sidebar" class="toggle"></a>' +
					'<span class="title">' + $('#logo').html() + '</span>' +
				'</div>'
			)
				.appendTo($body);

		// Sidebar
			$('#sidebar')
				.panel({
					delay: 500,
					hideOnClick: true,
					hideOnSwipe: true,
					resetScroll: true,
					resetForms: true,
					side: 'left',
					target: $body,
					visibleClass: 'sidebar-visible'
				});


				// Menu. Tima++
					var $menu = $('#menu'),
						$menu_openers = $menu.children('ul').find('.opener');

					// Openers.
						$menu_openers.each(function() {

							var $this = $(this);

							$this.on('click', function(event) {

								// Prevent default.
									event.preventDefault();

								// Toggle.
									$menu_openers.not($this).removeClass('active');
									$this.toggleClass('active');

								// Trigger resize (sidebar lock).
									$window.triggerHandler('resize.sidebar-lock');

							});

						});

})(jQuery);
