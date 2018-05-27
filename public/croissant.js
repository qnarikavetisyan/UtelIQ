$(document).ready(function () {
	var level1 = $("<div id ='level1'></div>");
	level1.appendTo("body");
	level1.append("<img class = 'foodImages' id = 'qarakusi' src = 'france/qarakusi.png'>");
	level1.append("<img src= 'restarticon.png' id = 'icon1'>")
	$("#icon1").on("click", function () {
		window.location.href = 'index.html';
	});

	setTimeout(question1, 500);

	function question1() {
		level1.append("<div class='questionBox withAnimation' id = 'question'>" +
			"<h2>Կրուասանի խմորը պետք է լինի եռանկյունաձև, այնպես չէ՞։ <br>Հարց 1. Ասա քառակուսու կողմի միջնակետի կոորդինատները, եթե կողմի ծայրակետերի կոորդինատներն են ` (2,1) և (4,3):</h2>" + "</br>" + "</br>" + "<form>" +
			"<input class = 'textbox' id = 'x'  type = 'text'  placeholder='x..' autocomplete='off'>" + "<div class = 'divider'></div>" + "<input class = 'textbox' id = 'y' type = 'text'  placeholder='y..' autocomplete='off'>" + "<input type='button' value= 'Հաստատել' id = 'submit'>" + "</form>" +
			"</div>");

		$("#submit").click(function () {
			if ($.trim($('#x').val()) === '3' && $.trim($('#y').val()) === '2') {
				$('#question').detach();
				$('#qarakusi').detach();
				level1.append("<img class = 'foodImages' id = 'erankyun' src = 'france/erankyun.png'>");
				setTimeout(function () {
					question2();
				}, 1000);
			}
			else if ($.trim($('#x').val()) !== '3' && $.trim($('#y').val()) !== '2') {
				$('.textbox').css('color', '#D11F1D');
				setTimeout(function () {
					$('#x').val('');
					$('#y').val('');
					$('#x').css('color', 'black');
					$('#y').css('color', 'black');
				}, 700);
			}
			else if ($.trim($('#x').val()) === '3' && $.trim($('#y').val()) !== '2') {
				$('#y').css('color', '#D11F1D');
				setTimeout(function () {
					$('#y').val('');
					$('#y').css('color', 'black');
				}, 700);
			}
			else if ($.trim($('#x').val()) !== '3' && $.trim($('#y').val()) === '2') {
				$('#x').css('color', '#D11F1D');
				setTimeout(function () {
					$('#x').val('');
					$('#x').css('color', 'black');
				}, 700);
			}
					/*	$(document).keypress(function (e) {
				if (e.which == 13) {
					$('#submit').click();
					return false;
				}
			});*/

			function question2() {
				level1.append("<div class='questionBox withAnimation' id = 'question'>" +
					"<h2>Ավելացնենք շոկոլադ: Հայտնի է, որ տասը կրուասանի համար պետք է 300 գրամ շոկոլադ: <br>Հարց 2. Ինչքա՞ն շոկոլադ է պետք 1 կրուասանի համար: </h2>" + "</br>" + "</br>" +
					"<input id = 'textbox' type = 'text'  placeholder='Պատասխան..' autocomplete='off'>" + "<input type='button' value= 'Հաստատել' id = 'submit'>" +
					"</div>");

				$("#submit").on("click", function () {
					if ($.trim($('#textbox').val()) === '30') {
						$('#question').detach();
						$('#erankyun').detach();
						level1.append("<img  class = 'foodImages' id = 'shokolad' src = 'france/shokolad.png'>");
						setTimeout(function () {
							question3();
						}, 1000);

					}

					else if ($.trim($('#textbox').val()) !== '30') {
						$('#textbox').val('Կրկին փորձիր');
						$('#textbox').css('color', '#D11F1D');
						setTimeout(function () {
							$('#textbox').val('');
							$('#textbox').css('color', 'black');
						}, 700);

					}
					function question3() {
						level1.append("<div class='questionBox withAnimation' id = 'question'>" +
							"<h2>Եռանկյունաձեւ խմորի մակերեսը ստացվել է 75 սմ<sup>2</sup> է: Փաթաթելուց հետո մակերեսը փոքրանում է 3 անգամ: <br>Հարց 3. Ինչքա՞ն կդառնա խմորի մակերեսը:</h2>" + "</br>" + "</br>" +
							"<input id = 'textbox' type = 'text'  placeholder='Պատասխան..' autocomplete='off'>" + "<input type='button' value= 'Հաստատել' id = 'submit'>" +
							"</div>");
						$("#submit").on("click", function () {
							if ($.trim($('#textbox').val()) === '25') {
								$('#question').detach();
								$('#shokolad').detach();
								level1.append("<img class = 'foodImages' id = 'cr1' src = 'france/croissant1.png'>");
								setTimeout(function () {
									question4();
								}, 1000);

							}

							else if ($.trim($('#textbox').val()) !== '25') {
								$('#textbox').val("Կրկին փորձիր");
								$('#textbox').css('color', '#D11F1D');
								setTimeout(function () {
									$('#textbox').val('');
									$('#textbox').css('color', 'black');
								}, 700);

							}

							function question4() {
								var ww = $(document).width();
										//console.log(ww);
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
								setTimeout(function () {
									$('#loader').remove();
									$('#cr1').remove();
									level1.append('<img src = "france/finalcroissant.png" class = "foodImages">' + "<input type = 'button' id = 'newlvl' value = 'Պատրաստ է'>");

									$("#newlvl").on("click", function () {
										window.location.href = 'index.html';

									});
								}, 3800);


							}

						});

					}
				});

			}

		});
	}

});





