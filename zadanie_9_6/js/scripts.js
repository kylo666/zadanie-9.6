var add = document.getElementById('addElem');

add.addEventListener('click' , function() {
	var list = document.getElementById('list');

	var element = document.createElement('li');
	element.innerText = 'item ' + list.getElementsByTagName('li').length;

	list.appendChild(element);
});



