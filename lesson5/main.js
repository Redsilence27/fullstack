var sedan = document.getElementById('sedan');
var getCar = document.getElementById('getCar');
var position = 0;
var id;

//При наведении
getCar.onmouseover = function () {
	//console.log('over');
	if(id) clearInterval(id);
	id = setInterval(toDriveRight, 1)	 
}
//снятие наведения
getCar.onmouseout = function(){
	//console.log('out');
	if(id) clearInterval(id);
	id = setInterval(toDriveLeft, 1)	 
}

function toDriveLeft(){
		if(position <= 0){
			toTurn();
			clearInterval(id);
		}else{
			position = position - 1;
			sedan.style.left = position + 'px';

		}
}
// функция поворачивает машинку на крайних точках
function toDriveRight(){
	if(position >= 500){
		toTurn();
		clearInterval(id);
	}else{
		position = position + 1;
		sedan.style.left = position + 'px';
	} 
}

function toTurn(){
	if (position == 500 ){
		sedan.className = 'mirror';
		//console.log(sedan.classlist); /* почему не работает?! */
		//sedan.classlist.toggle("mirror"); /* почему не работает?! */
	}else{
		if(position == 0){
			sedan.className = '';
		}

	}

}
