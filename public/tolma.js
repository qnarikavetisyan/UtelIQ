$(document).ready(function () {
	var level1 = $("<div id =' level1' ></div>");
	level1.appendTo("body");
	var level1x = $("<div id ='level1tolma' ></div>");
	level1x.appendTo("body");
	var dolmaleaves = $("<img id = 'dolmaleaves' src = 'armenia/dolmaleaves.png'>");
	var rice = $("<img id = 'rice' src = 'armenia/rice.png'>");
	var meat = $("<img id = 'meat' src = 'armenia/meat.png'>");

	level1x.append(dolmaleaves);
	level1x.append(rice);
	level1x.append(meat);
	level1x.append("<img src= 'restarticon.png' id = 'icon'>")
	$("#icon").on("click", function () {
		window.location.href = 'index.html';
	});



	setTimeout(question1, 500);

	function question1() {
		level1.append("<div class='questionBox withAnimation' id = 'question'>" +
			"<h2>Տոլմա պատրաստելու համար նախ և առաջ խաղողի տերև է պետք: Մեկ խաղողի տերևն արժե 50 դրամ:<br> Հարց 1. Քանի՞ խաղողի տերև կարելի է գնել 2000 դրամով:</h2>" + "</br>" + "</br>" + "</br>" + "</br>" +
			"<input id = 'textbox' type = 'text'  placeholder='Պատասխան..' autocomplete='off'>" + "<input type='button' value= 'Հաստատել' id = 'submit'>" +
			"</div>");

		$("#submit").click(function () {
			if ($.trim($('#textbox').val()) === '40') {
				$("#dolmaleaves").css('opacity', '1');
				$("#dolmaleaves").after('<svg  class = "checkdolma" width="13vw" height="9vw" viewBox="0 0 250 400"><path id="check" d="M10,30 l30,50 l95,-70"></svg>');
				//$("<img class = 'checkmark' src='checkmark copy.png'>").appendTo(level1x);
				//$(".checkmark").css('left',)
				$('.questionBox').detach();
				
				setTimeout(function () {
					question2();
				}, 1000);
			}
			else if ($.trim($('#textbox').val()) !== '40') {
				$('#textbox').val('Կրկին փորձիր');
				$('#textbox').css('color', '#D11F1D');
				setTimeout(function () {
					$('#textbox').val('');
					$('#textbox').css('color', 'black');
				}, 700);
			}
		})
	};

	function question2() {
		level1.append("<div class='questionBox withAnimation' id = 'question'>" +
			"<h2>Հայտնի է, որ մեկ տոլմայի համար պետք է 10 գրամ բրինձ։ <br>Հարց 2. Ինչքա՞ն  բրինձ է հարկավոր ամբողջ տոլմայի համար:</h2>" + "</br>" + "</br>" +
			"<input id = 'textbox' type = 'text'  placeholder='Պատասխան..' autocomplete='off'>" + "<input type='button' value= 'Հաստատել' id = 'submit'>" +
			"</div>");

		$("#submit").on("click", function () {
			if ($.trim($('#textbox').val()) === '400') {
				$('#question').detach();
				$("#rice").css('opacity', '1');
				$("#rice").after('<svg class = "checkrice" width="13vw" height="9vw" viewBox="0 0 250 400"><path id="check" d="M10,30 l30,50 l95,-70"></svg>');

				setTimeout(function () {
					question3();
				}, 1000);

			}

			else if ($.trim($('#textbox').val()) !== '400') {
				$('#textbox').val('Կրկին փորձիր');
				$('#textbox').css('color', '#D11F1D');
				setTimeout(function () {
					$('#textbox').val('');
					$('#textbox').css('color', 'black');
				}, 700);

			}
		})
	};

	function question3() {
		level1.append("<div class='questionBox withAnimation' id = 'question' >" +
			"<h2>Տոլմայում բրնձի ու մսի զանգվածների հարաբերությունը 1:2 է: <br>Հարց 3. Ինչքա՞ն է մսի զանգվածը: </h2>" + "</br>" + "</br>" +
			"<input id = 'textbox' type = 'text'  placeholder='Պատասխան..' autocomplete='off'>" + "<input type='button' value= 'Հաստատել' id = 'submit'>" +
			"</div>");
		$("#submit").on("click", function () {
			if ($.trim($('#textbox').val()) === '800') {
				$('#question').detach();
				$("#meat").css('opacity', '1');
				$("#meat").after('<svg class = "checkmeat" width="13vw" height="9vw" viewBox="0 0 250 400"><path id="check" d="M10,30 l30,50 l95,-70"></svg>');
										setTimeout(function () {
										var ww = $(document).width();
										var id = 'loader', fill = '#fff',
											size = Math.floor(ww/28), radius = 3, duration = 1000,
											maxOpacity = 0.6, minOpacity = 0.15;
										$('<svg id="' + id + '" width="' + (size * 3.5) + '" height="' + size + '">' +
											'<rect width="' + size + '" height="' + size + '" x="0" y="0" rx="' + radius + '" ry="' + radius + '" fill="' + fill + '" fill-opacity="' + maxOpacity + '">' +
											'<animate attributeName="opacity" values="1;' + minOpacity + ';1" dur="' + duration + 'ms" repeatCount="indefinite"/>' +
											'</rect>' +
											'<rect width="' + size + '" height="' + size + '" x="' + (size * 1.25) + '" y="0" rx="' + radius + '" ry="' + radius + '" fill="' + fill + '" fill-opacity="' + maxOpacity + '">' +
											'<animate attributeName="opacity" values="1;' + minOpacity + ';1" dur="' + duration + 'ms" begin="' + (duration / 4) + 'ms" repeatCount="indefinite"/>' +
											'</rect>' +
											'<rect width="' + size + '" height="' + size + '" x="' + (size * 2.5) + '" y="0" rx="' + radius + '" ry="' + radius + '" fill="' + fill + '" fill-opacity="' + maxOpacity + '">' +
											'<animate attributeName="opacity" values="1;' + minOpacity + ';1" dur="' + duration + 'ms" begin="' + (duration / 2) + 'ms" repeatCount="indefinite"/>' +
											'</rect>' +
											'</svg>').appendTo(level1);
										}, 450);
										setTimeout(function () {
											$('#loader').remove();
											$('#meat').remove();
											$('#dolmaleaves').remove();
											$('#rice').remove();
											$("svg").remove();
											level1.append('<img src = "armenia/finaldolma.png" class = "foodImages">' + "<input type = 'button' id = 'newlvl' value = 'Պատրաստ է'>");
											$("#newlvl").on("click", function () {
												window.location.href = 'index.html';

											});
										}, 2000);
		}
				/*setTimeout(function () {
					$('#meat').remove();
					$('#dolmaleaves').remove();
					$('#rice').remove();
				}, 1500);
				setTimeout(function () {
					var id = 'loader', fill = '#fff',
						size = 60, radius = 3, duration = 1000,
						maxOpacity = 0.6, minOpacity = 0.15;
					$('<svg id="' + id + '" width="' + (size * 3.5) + '" height="' + size + '">' +
						'<rect width="' + size + '" height="' + size + '" x="0" y="0" rx="' + radius + '" ry="' + radius + '" fill="' + fill + '" fill-opacity="' + maxOpacity + '">' +
						'<animate attributeName="opacity" values="1;' + minOpacity + ';1" dur="' + duration + 'ms" repeatCount="indefinite"/>' +
						'</rect>' +
						'<rect width="' + size + '" height="' + size + '" x="' + (size * 1.25) + '" y="0" rx="' + radius + '" ry="' + radius + '" fill="' + fill + '" fill-opacity="' + maxOpacity + '">' +
						'<animate attributeName="opacity" values="1;' + minOpacity + ';1" dur="' + duration + 'ms" begin="' + (duration / 4) + 'ms" repeatCount="indefinite"/>' +
						'</rect>' +
						'<rect width="' + size + '" height="' + size + '" x="' + (size * 2.5) + '" y="0" rx="' + radius + '" ry="' + radius + '" fill="' + fill + '" fill-opacity="' + maxOpacity + '">' +
						'<animate attributeName="opacity" values="1;' + minOpacity + ';1" dur="' + duration + 'ms" begin="' + (duration / 2) + 'ms" repeatCount="indefinite"/>' +
						'</rect>' +
						'</svg>').appendTo(level1);
				}, 3000);
				setTimeout(function () {
					$('#loader').remove();
					level1.append('<img src = "armenia/finaldolma.png" class = "foodImages">' + "<input type = 'button' id = 'newlvl' value = 'Պատրաստ է'>");

					$("#newlvl").on("click", function () {
						window.location.href = 'index.html';

					});
				}, 3800);


			}*/

			else if ($.trim($('#textbox').val()) !== '800') {
				$('#textbox').val('Կրկին փորձիր');
				$('#textbox').css('color', '#D11F1D');
				setTimeout(function () {
					$('#textbox').val('');
					$('#textbox').css('color', 'black');
				}, 700);
			}

		});

	};
});