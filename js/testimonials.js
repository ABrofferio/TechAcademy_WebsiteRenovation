$(document).ready(function() {
			var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
			if (w <657) {
				$('#img_1').insertBefore('#location_1');
				$('#img_2').insertBefore('#location_2');
				$('#img_3').insertBefore('#location_3');
				$('#img_4').insertBefore('#location_4');
				$('#img_5').insertBefore('#location_5');
				$('#img_6').insertBefore('#location_6');
				$('#img_7').insertBefore('#location_7');
			}

		});