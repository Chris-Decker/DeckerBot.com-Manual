$(document).ready(function(){

	$("header").load("/TESTING_DIRECTORY/pages/header.html");
	$("footer").load("/TESTING_DIRECTORY/pages/footer.html");

	/* Mobile menu toggle */
	$('.menu-icon').click(function(){
		$('.subnav').toggleClass('expand');
		$('.menu-mask').toggleClass('visible');
	});
	$('.menu-mask').click(function(){
		$('.subnav').toggleClass('expand');
		$('.menu-mask').toggleClass('visible');
	});

	/* Domain toggle for proofs */
	$('.link').click(function(){
		domain = $(this).text();
		siteDesktop = '<img class="proof" src="/images/proofs/' + domain + '/desktop.jpg">';
		siteTablet = '<img class="proof" src="/images/proofs/' + domain + '/tablet.jpg">';
		siteMobile = '<img class="proof" src="/images/proofs/' + domain + '/mobile.jpg">';
		if(domain[0]) {
			$(".desktop-screen").html(siteDesktop);
			$('.tablet-screen').html(siteTablet);
			$('.mobile-screen').html(siteMobile);
		}
	});

	/* See all sites */
	$('.see-all').click(function(){
		$('.link').removeClass('hide');
	});

	/* Device display toggle */
	$('.desktop-icon').click(function(){
		$('.device').removeClass('visible');
		$('.desktop').addClass('visible');
		$('.device-icons').removeClass('active');
		$('.desktop-icon').addClass('active')
		$('.device-icons-btn').removeClass('active');
		$('.scroll-notice').removeClass('visible');
	});
	$('.tablet-icon, .mobile-icon').click(function(){
		$('.device').addClass('visible');
		$('.desktop').removeClass('visible');
		$('.device-icons').addClass('active')
		$('.desktop-icon').removeClass('active');
		$('.device-icons-btn').removeClass('active');
		$('.scroll-notice').removeClass('visible');
	});
	$('.device-icons-btn').click(function(){
		if($('.desktop.visible').length) {
			$('.scroll-notice').addClass('visible');
		}
		$('.device-icons-btn').addClass('active');
		$('.device').addClass('visible');
		$('.device-icons').addClass('active');
	});
});