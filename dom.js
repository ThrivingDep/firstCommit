//Examine The Document Object //


//console.dir(document);
//console.log(document.domain);
//console.log(document.URL);
//console.log(document.title);
//document.title = 123;
//console.log(document.doctype);
//console.log(document.head);
//console.log(document.body);
//console.log(document.all);
//console.log(document.all[10]);
//document.all[10].textContent = 'Hello';
//console.log(document.forms);

//GETELEMENTBYID//
//console.log(document.getElementById('header-title'));
//var headerTitle = document.getElementById('header-title');
//var header = document.getElementById('main-header');
//console.log(headerTitle);
//headerTitle.textContent = 'Hello';
//headerTitle.innerText = 'Goodbye';
//console.log(headerTitle.innerText);
//headerTitle.innerHTML = '<h3>Hello</h3>';

//headerTitle.style.borderBottom = 'solid 3px #000';
//header.style.borderBottom = 'solid 3px #000';

//var titles = document.querySelector('.title');

//console.log(titles);
//titles.textContent = 'ADD ITEM';
//titles.style.color = 'green';

   //var items = document.getElementsByClassName('list-group-item');
//console.log('items');
//console.log(items[1]);
//items[1].textContent = 'Hello 2';
//items[1].style.fontWeight = 'bold';
//items[1].style.backgroundColor = 'yellow';
//items[3].style.backgroundColor = 'green';

//for(var i =0; i<items.length; i++){
  //  items[i].style.fontWeight = 'bold';
//}

//GETELEMENTBYTAGNAME//
//var li = document.getElementsByTagName('li');
//console.log(li);
//console.log(li[1]);
//li[1].textContent = 'Hello 2';
//li[1].style.fontWeight = 'bold';
//li[1].style.backgroundColor = 'yellow';
//li[3].style.backgroundColor = 'green';

//for(var i =0; i<li.length; i++){
 //   li[i].style.fontWeight = 'bold';
//}

//QUERYSELECTOR //

//var header = document.querySelector('#main-header');
//header.style.borderbottom = 'solid 4px #ccc';


//var input = document.querySelector('input');
//input.value = 'Hello World';

//var submit = document.querySelector('input[type="submit"]');
//submit.value="SEND";

//var item = document.querySelector('.list-group-item');
//item.style.color = 'red';

//var lastItem = document.querySelector
//('.list-group-item:last-child');
//lastItem.style.color = 'blue';

//var secondItem = document.querySelector
//('.list-group-item:nth-child(2)');
//secondItem.style.backgroundColor= 'green';

//var thirdItem = document.querySelector
//('.list-group-item:nth-child(3)');
//thirdItem.style.color = 'transparent';



 //QUERYSELECTORALL//
//var odd = document.querySelectorAll('li:nth-child(odd)');

 //for(var i =0; i<odd.length;i++){
 // odd[i].style.backgroundColor = 'green';
//}

// TRAVERSING THE DOM//
//var itemList = document.querySelector('#items');
//ParentNode 
//console.log(itemList.parentNode);
//itemList.parentNode.style.backgroundColor = '#f4f4f4';
//console.log(itemList.parentNode.parentNode.parentNode);

//parentElement//

//console.log(itemList.parentElement);
//itemList.parentElement.style.backgroundColor = '#f4f4f4';
//console.log(itemList.parentElement.parentElement.parentElement);

//CHILDNODES//

//console.log(itemList.childNodes);

//console.log(itemList.children);
//console.log(itemList.children[1]);
//itemList.children[1].style.backgroundColor = 'yellow';

//firstchild//
//console.log(itemList.firstChild);

//firstElementChild 

//console.log(itemList.firstElementChild);
//itemList.firstElementChild.textContent = 'Hello 1';

//lastchild//
//console.log(itemList.lastChild);
//lastElementChild 

//console.log(itemList.lastElementChild);
//itemList.lastElementChild.textContent = 'Hello 1';

//nextSibling
//console.log(itemList.nextSibling);

//nextElementSbiling
//console.log(itemList.nextElementSibling);

//previousSibling
//console.log(itemList.previousSibling);

// previousElementSibling
//console.log(itemList.previousElementSibling);
//itemList.previousElementSibling.style.color = 'green';

// createElement

// create a div
var newDiv = document.createElement('div');
//Add class
newDiv.className= 'hello';

// Add id 
newDiv.id = 'hello1';

// Add attribute
newDiv.setAttribute('title','Hello Div');

// create text node
var newDivText = document.createTextNode('Hello world');

//Add text to div 
newDiv.appendChild(newDivText);

var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');

console.log(newDiv);

container.insertBefore(newDiv , h1);

 var parentNode = document.getElementById('items');
 //var newli = document.createElement('li');
  parentNode.className = 'list-group1';
  parentNode.id = 'items1';
 //var newliText = document.createTextNode('Hello World');
 //newli.appendChild(newliText);
 //parentNode.innerHTML = '<li>Item 1</li><li>Item 2</li><li>Item 3</li><li>Item 4</li>'
 //parentNode.innerHTML = newliText + parentNode.innerHTML
 const temp = '<li>Hello World</li>'
  // parentnode = parentNode.appendChild(newli);
  parentNode.innerHTML = temp + parentNode.innerHTML;






