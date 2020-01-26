var a_li = document.getElementById('SwitchNav').getElementsByTagName('li');
		var a_span = document.getElementById('SwitchBigPic').getElementsByTagName('span');
		var currentIndex = 0;
		var timer = setInterval(autochange, 2000);

		function autochange() {
			if (currentIndex > 2)
				currentIndex = 0;
			for (var i = 0; i < a_li.length; i++)
				a_span[i].className = '';
			a_span[currentIndex].className = 'sp';
			currentIndex++;
		}


		for (var i = 0; i < a_li.length; i++) {
			a_li[i].onmouseover = function() {
				if (timer) {
					clearInterval(timer);
				}
				for (var j = 0; j < a_span.length; j++)
					if (this == a_li[j]) {
						a_span[j].className = 'sp';
						currentIndex = i;
					}
				else
					a_span[j].className = '';
			}
			a_li[i].onmouseleave = function() {
				timer = setInterval(autochange, 2000);
			}
		}
