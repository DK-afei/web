var add_q = document.getElementById('addSuQusetion');
var oul = document.getElementById('top');
var oas = document.getElementsByTagName('a');
for (var i = 0; i < oas.length; i++) {
	oas[i].onclick = function() {
		oul.removeChild(this.parentNode);
	}
}
add_q.onclick = function() {
	var oli = document.createElement('li');
	var oa = document.createElement('a');
	var ob = document.createElement('button');
	oli.innerHTML ='<div>'+
					'<label>标题(≤255字)</label>'+
					'<br />'+
					'<input type="text" id="edit-title" class="edit-title"></input>'+
					'<br />'+
					'<label>描述(≤1020字)</label>'+
					'<br />'+
					'<textarea  class="comments" style="width: 50%; height: 100px"></textarea>'+
				'</div>';
	ob.innerHTML='submit';
	oa.href = 'javascript:;';
	oa.innerHTML = '删除';
	oli.appendChild(oa);
	oli.appendChild(ob);
	oul.appendChild(oli);
	for (var i = 0; i < oas.length; i++) {
		oas[i].onclick = function() {
			oul.removeChild(this.parentNode);
		}
	}
}
