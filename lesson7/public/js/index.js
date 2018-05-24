var elType   = document.getElementById('type');
var category = document.getElementById('category');
var color    = document.getElementsByClassName('color');
var parameter= document.getElementsByClassName('parameter');


var arr = [];
products.forEach(function(item){
	//Проверка на нахождении элемента в массиве
	if(!arr.includes(item["type"]))
		//Добавление в массив
	arr.push(item["type"]);
})

var arrC = [];
products.forEach(function(item){
	//Проверка на нахождении элемента в массиве
	if(!arrC.includes(item["category"]))
		//Добавление в массив
	arrC.push(item["category"]);
})

var arrCr = [];
products.forEach(function(item){
	//Проверка на нахождении элемента в массиве
	if(!arrCr.includes(item["color"]))
		//Добавление в массив
	arrCr.push(item["color"]);
})

var arrP = [];
products.forEach(function(item){
	//Проверка на нахождении элемента в массиве
	if(!arrP.includes(item["parameter"]))
		//Добавление в массив
	arrP.push(item["parameter"]);
})



for(var i=0; i<arr.length; i++){
	var option = document.createElement('option');
	option.text = arr[i];
	elType.appendChild(option);
}

for(var i=0; i<arrC.length; i++){
	var option = document.createElement('option');
	option.text = arrC[i];
	category.appendChild(option);
}



for(var i=0; i<arrCr.length; i++){
	var option = document.createElement('input');
	var label = document.createElement('label');
	var br    = document.createElement('br');
	
	option.type = "radio";
	option.name = "color";
	option.checked = 0;
	label.textContent = arrCr[i];
    
	color[0].firstElementChild.appendChild(br);
	color[0].firstElementChild.appendChild(label);
	label.insertBefore(option, label.firstChild);
	

}

for(var i=0; i<arrP.length; i++){
	var option = document.createElement('input');
	var label = document.createElement('label');
	var br    = document.createElement('br');
	
	option.type = "radio";
	option.name = "parameter";
	option.checked = 0;
	label.textContent = arrP[i];
    
	parameter[0].firstElementChild.appendChild(br);
	parameter[0].firstElementChild.appendChild(label);
	label.insertBefore(option, label.firstChild);
	

}


function createProducts(products){
	var product = document.getElementsByClassName('products');

	product[0].innerHTML = '';

	for(var i=0; i<products.length; i++){
		var item = document.createElement('div');
		item.className = 'col-md-4 product';
		var img = document.createElement('img');
		img.className = 'product-image';
		img.src = './public/img/product.jpg';

		var name = document.createElement('div');
		var elType = document.createElement('div');
		var category = document.createElement('div');
		var color =  document.createElement('div');
		var parameter =  document.createElement('div');
		name.innerText = products[i].name;
		elType.innerText = products[i].type;
		category.innerText = products[i].category;
		color.innerText = products[i].color;
		parameter.innerText = products[i].parameter;

		item.appendChild(img);
		item.appendChild(elType);
		item.appendChild(category);
		item.appendChild(color);
		item.appendChild(parameter);

		product[0].appendChild(item);
	}
}
prod = products;

createProducts(prod);

var type = document.getElementById('type');
var category = document.getElementById('category');
var ecolor = document.getElementsByClassName('color');
var color = ecolor[0];
var eparam = document.getElementsByClassName('parameter');
var param = eparam[0];
var typevalue = '';
var categoryvalue = '';
var colorvalue = '';
var paramvalue = '';




type.addEventListener('change', function(e){

	typevalue = e.target.value;
	filterAll(typevalue, categoryvalue,colorvalue,paramvalue);
});

color.addEventListener('change', function(e){
	colorvalue = e.srcElement.nextSibling.data.trim();
	if (colorvalue == 'Все') { colorvalue = '' };
	filterAll(typevalue, categoryvalue,colorvalue,paramvalue);
});

param.addEventListener('change', function(e){
	paramvalue = e.srcElement.nextSibling.data.trim();
	if (paramvalue == 'Все') { paramvalue = '' };
	filterAll(typevalue, categoryvalue,colorvalue,paramvalue);
});


category.addEventListener('change', function(e){
	categoryvalue = e.target.value;
	filterAll(typevalue, categoryvalue,colorvalue,paramvalue);   
})

 function filterAll(ftype, fcategory, fcolor, fparam) {
 	var newProducts = products.filter(function(item){
 	return condition(item.type, ftype);
		});
 	newProducts = newProducts.filter(function(item){
			return condition(item.category, fcategory);
		});
 	 	newProducts = newProducts.filter(function(item){
 	 			return condition(item.color, fcolor);
		});
 	newProducts = newProducts.filter(function(item){
 		return condition(item.parameter, fparam);
		});
	createProducts(newProducts);	 	

 }

 function condition(parameter,value) {
 	if (value == '') {
 		return true;
 	}else{
       return (parameter == value);
 	}
 }