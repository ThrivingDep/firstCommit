var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

//form submit event
form.addEventListener('submit',addItem);
// Delete event 
itemList.addEventListener('click' , removeItem);
// filter event 
filter.addEventListener('keyup', filterItems);

//Add item 
function addItem(e){
  e.preventDefault();

  //console.log(1);

  var newItem = document.getElementById('item').value;
  var discription = document.getElementById('itemDis').value;

  // create new li element 
  var li = document.createElement('li');
  li.className  = 'list-group-item';
  var discriptionNode = document.createTextNode(discription);
  //console.log(li);
  li.appendChild(document.createTextNode(newItem));
  li.appendChild(discriptionNode);
  
  // create del button element
  var deleteBtn = document.createElement('button');
  // create edit button element 
  var editBtn = document.createElement('edit');

  // Add classes to del button 
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
  editBtn.className = 'btn btn-danger btn-sm float-right edit';

  // Append text node 
  deleteBtn.appendChild(document.createTextNode('X'));
  editBtn.appendChild(document.createTextNode('EDIT'));

  // Append button to li
  li.appendChild(deleteBtn);
  li.appendChild(editBtn);
  // Append li to List
  itemList.appendChild(li);
  itemList.appendChild(li);
}

// Remove item 
function removeItem(e){
  //console.log(1);
  if(e.target.classList.contains('delete')){
    //console.log(1);
    if(confirm('Are you Sure ?')){
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

// Filter Item
function filterItems(e){
  // convert text to lowecase 
  var text = e.target.value.toLowerCase();
  //console.log(text);
  // Get lis
   var items = itemList.getElementsByTagName('li');
   Array.from(items).forEach(function(item){
    var itemName = item.firstChild.textContent;
    var discription = item.childNodes[1].textContent;
    //console.log(itemName);
    if(itemName.toLowerCase().indexOf(text)!= -1|| discription.toLowerCase().indexOf(text)!=-1){
      item.style.display = 'block';
    }
    else{
      item.style.display = 'none';
    }
   });
}
