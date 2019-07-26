	





// create elem animation ---->>>

function add(){
	var line = document.getElementsByClassName('recent_line')[0];
    var elem = document.createElement('div');
    line.appendChild(elem);
    elem.setAttribute('class', 'line_elem');
    var money = document.createElement('p');
    elem.appendChild(money);
    money.innerHTML = '13.88$ = 932.41 руб';
    var awayPurse = document.createElement('img');
    elem.appendChild(awayPurse);
    awayPurse.src = 'icon/wmlogo_flat_256.png';
    var transfer = document.createElement('img');
    elem.appendChild(transfer);
    transfer.setAttribute('id', 'transfer');
    transfer.src = 'icon/transfer (1).png';
    var getPurse = document.createElement('img');
    elem.appendChild(getPurse);
    getPurse.src = 'icon/wmlogo_flat_256.png';
    var date = document.createElement('p');
    elem.appendChild(date);
    date.innerHTML = '18.07.2019 16:32';
    animation();
}


var recent_line = document.getElementsByClassName('recent_line')[0];



var x = 0;

function animation(){
	 x -= 295;
	 recent_line.style.marginLeft = x + 'px';
	 

}





var lang = document.getElementsByClassName('lang_list')[0];

function lang_list() {
	var icon = document.getElementById('icon');
	if(lang.style.display != 'block'){
		lang.style.display = 'block';
		
		
		icon.setAttribute('class', 'fa fa-sort-desc');
	}

	else{
		lang.style.display = 'none';
		
		icon.setAttribute('class', 'fa fa-caret-right');
	}

}

var value = document.getElementsByClassName('lang')[0];

function lang_val() {
	var en = document.getElementById('english');
	var rus = document.getElementById('russian');

	en.onclick = function() {
		value.innerHTML ='English';
		lang.style.display = 'none';
		var icon = document.createElement('i');
		value.appendChild(icon);
		icon.setAttribute('class', 'fa fa-caret-right');
		icon.setAttribute('id', 'icon');

	}

	rus.onclick = function() {
		value.innerHTML ='Russian';
		lang.style.display = 'none';
		var icon = document.createElement('i');
		value.appendChild(icon);
		icon.setAttribute('class', 'fa fa-caret-right');
		icon.setAttribute('id', 'icon');
	}
}

lang_val();