// LOGIN TABS
$(document).ready(function(){
	$(function() {
		var tab = $('.tabs h3 a');
		tab.on('click', function(event) {
			event.preventDefault();
			tab.removeClass('active');
			$(this).addClass('active');
			tab_content = $(this).attr('href');
			$('div[id$="tab-content"]').removeClass('active');
			$(tab_content).addClass('active');
		});
	});
	$(function() {
		$('#slideshow > div:gt(0)').hide();
		setInterval(function() {
			$('#slideshow > div:first')
			.fadeOut(1000)
			.next()
			.fadeIn(1000)
			.end()
			.appendTo('#slideshow');
		}, 3850);
	});
	(function($) {
		'use strict';
		$.fn.swapClass = function(remove, add) {
			this.removeClass(remove).addClass(add);
			return this;
		};
	}(jQuery));
	$(function() {
		$('.agree,.forgot, #toggle-terms, .log-in, .sign-up').on('click', function(event) {
			event.preventDefault();
			var terms = $('.terms'),
			recovery = $('.recovery'),
			close = $('#toggle-terms'),
			arrow = $('.tabs-content .fa');
			if ($(this).hasClass('agree') || $(this).hasClass('log-in') || ($(this).is('#toggle-terms')) && terms.hasClass('open')) {
				if (terms.hasClass('open')) {
					terms.swapClass('open', 'closed');
					close.swapClass('open', 'closed');
					arrow.swapClass('active', 'inactive');
				} else {
					if ($(this).hasClass('log-in')) {
						return;
					}
					terms.swapClass('closed', 'open').scrollTop(0);
					close.swapClass('closed', 'open');
					arrow.swapClass('inactive', 'active');
				}
			}
			else if ($(this).hasClass('forgot') || $(this).hasClass('sign-up') || $(this).is('#toggle-terms')) {
				if (recovery.hasClass('open')) {
					recovery.swapClass('open', 'closed');
					close.swapClass('open', 'closed');
					arrow.swapClass('active', 'inactive');
				} else {
					if ($(this).hasClass('sign-up')) {
						return;
					}
					recovery.swapClass('closed', 'open');
					close.swapClass('closed', 'open');
					arrow.swapClass('inactive', 'active');
				}
			}
		});
	});
	$(function() {
		$('.recovery .button').on('click', function(event) {
			event.preventDefault();
			$('.recovery .mssg').addClass('animate');
			setTimeout(function() {
				$('.recovery').swapClass('open', 'closed');
				$('#toggle-terms').swapClass('open', 'closed');
				$('.tabs-content .fa').swapClass('active', 'inactive');
				$('.recovery .mssg').removeClass('animate');
			}, 2500);
		});
	});
	$(function() {
		$('.button').on('click', function(event) {
			$(this).stop();
			event.preventDefault();
			return false;
		});
	});
});