var form = document.getElementById('addForm');
var itemList = document.getElementById('items');

//form submit event
form.addEventListener('submit',addItem);
// Delete event 
itemList.addEventListener('click' , removeItem);

//Add item 
function addItem(e){
  e.preventDefault();

  //console.log(1);

  var newItem = document.getElementById('item').value;

  // create new li element 
  var li = document.createElement('li');
  li.className  = 'list-group-item';
  //console.log(li);
  li.appendChild(document.createTextNode(newItem));
  
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