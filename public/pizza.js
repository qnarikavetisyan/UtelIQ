$(document).ready(function () {
	var level1 = $("<div id ='level1'></div>");
	level1.appendTo("body");
	level1.append("<img class = 'foodImages' id = 'qarakusi' src = 'italy/qarakusi.png'>");
	level1.append("<img src= 'restarticon.png' id = 'icon1'>");
	$("#icon1").on("click", function () {
		window.location.href = 'index.html';
	});

	setTimeout(question1, 500);

	function question1() {
		level1.append("<div class='questionBox withAnimation' id = 'question'>" +
			"<h2>Ուզու՞մ ես պատրաստել իտալական պիցցա, ուրեմն պատասխանիր մի քանի հարցերի մաթեմատիկայից: <br>Պիցցայի խմորը պետք է շրջանագծի տեսք ունենա, այնպես չէ՞։ <br>Հարց 1. Ասա ինչքան պետք է լինի շառավիղը, եթե շրջանագծի հավասարումն է` x<sup>2</sup> + y<sup>2</sup> = 400:</h2>" + "</br>" + "</br>" + "<form>" +
			"<input id = 'textbox' type = 'text'  placeholder='Պատասխան..' autocomplete='off'>" + "<input type='button' value= 'Հաստատել' id = 'submit'>" + "</form>" +
			"</div>");

		$("#submit").click(function () {
			if ($.trim($('#textbox').val()) === '20') {
				$('#question').detach();
				$('#qarakusi').detach();
				level1.append("<img class = 'foodImages' id = 'shrjanagits' src = 'italy/shrjanagits.png'>");
				setTimeout(function () {
					question2();
				}, 1000);
			}
			else if ($.trim($('#textbox').val()) !== '20') {
				$('#textbox').val('Կրկին փորձիր');
				$('#textbox').css('color', '#D11F1D');
				setTimeout(function () {
					$('#textbox').val('');
					$('#textbox').css('color', 'black');
				}, 700);
			}

			function question2() {
				level1.append("<div class='questionBox withAnimation' id = 'question'>" +
					"<h2>Տոմաաա՜տ, տոմատ է պակասում։  Գիտենք, որ տոմատ պետք է քսել եզրերից 3 սմ հեռավորության վրա։ <br>Հարց 2. Ինչքա՞ն կլինի տոմատով պատված մասի շառավիղը:</h2>" + "</br>" + "</br>" +
					"<input id = 'textbox' type = 'text'  placeholder='Պատասխան..' autocomplete='off'>" + "<input type='button' value= 'Հաստատել' id = 'submit'>" +
					"</div>");

				$("#submit").on("click", function () {
					if ($.trim($('#textbox').val()) === '17') {
						$('#question').detach();
						$('#shrjanagits').detach();
						level1.append("<img  class = 'foodImages' id = 'tomat' src = 'italy/tomat.png'>");
						setTimeout(function () {
							question3();
						}, 1000);

					}

					else if ($.trim($('#textbox').val()) !== '17') {
						$('#textbox').val('Կրկին փորձիր');
						$('#textbox').css('color', '#D11F1D');
						setTimeout(function () {
							$('#textbox').val('');
							$('#textbox').css('color', 'black');
						}, 700);

					}
					function question3() {
						level1.append("<div class='questionBox withAnimation' id = 'question'>" +
							"<h2> Կարծես թե պիցցան մեծ է ստացվում։ 8 հոգով կուտենք։<br> Հարց 3. Ինչքա՞ն պանիր է անհրաժեշտ, եթե ամեն մի մասի համար օգտագործվում է 30 գրամ պանիր:</h2>" + "</br>" + "</br>" +
							"<input id = 'textbox' type = 'text'  placeholder='Պատասխան..' autocomplete='off'>" + "<input type='button' value= 'Հաստատել' id = 'submit'>" +
							"</div>");

						$("#submit").on("click", function () {
							if ($.trim($('#textbox').val()) === '240') {
								$('#question').detach();
								$('#tomat').detach();
								level1.append("<img class = 'foodImages' id = 'panir' src = 'italy/panir.png'>");
								setTimeout(function () {
									question4();
								}, 1000);

							}

							else if ($.trim($('#textbox').val()) !== '240') {
								$('#textbox').val('Կրկին փորձիր');
								$('#textbox').css('color', '#D11F1D');
								setTimeout(function () {
									$('#textbox').val('');
									$('#textbox').css('color', 'black');
								}, 700);

							}
							function question4() {
								level1.append("<div class='questionBox' id = 'question'>" +
									"<h2> Հաշվիր նաև պիցցայի մակերեսը ու վերջ: <br>Ընդունել, որ π = 3:</h2>" + "</br>" + "</br>" +
									"<input id = 'textbox' type = 'text'  placeholder='Պատասխան..' autocomplete='off'>" + "<input type='button' value= 'Հաստատել' id = 'submit'>" +
									"</div>");
								$("#submit").on("click", function () {
									if ($.trim($('#textbox').val()) === '1200') {
										$('#question').detach();
										$('#panir').remove();
										level1.append("<img class = 'foodImages' id = 'ershik' src = 'italy/pizza2.png'>");
										var ww = $(document).width();
										var id = 'loader', fill = '#fff',
											size = Math.floor(ww / 28), radius = 3, duration = 1000,
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
										//}, 2000);
										setTimeout(function () {
											$('#ershik').remove();
											$('#loader').remove();
											level1.append('<img src = "italy/finalpizza.png" class = "foodImages">' + "<input type = 'button' id = 'newlvl' value = 'Պատրաստ է'>");

											$("#newlvl").on("click", function () {
												window.location.href = 'index.html';

											});
										}, 2000);


									}

									else if ($.trim($('#textbox').val()) !== '1200') {
										$('#textbox').val('Կրկին փորձիր');
										$('#textbox').css('color', '#D11F1D');
										setTimeout(function () {
											$('#textbox').val('');
											$('#textbox').css('color', 'black');
										}, 700);
									}
								});

							}
						});

					}

				});
			}
		});
	};
});


