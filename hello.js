var nam = document.getElementById("name");
        var email  = document.getElementById("email");
        var submit =document.getElementById("submit");

        submit.addEventListener('click', adddata);
           
            // localStorage.setItem("email", email.value);
            // localStorage.setItem("name", nam.value);
            function adddata(e){
                e.preventDefault();
                alert('hello');
                console.log('hello');
            const myObj = {
               nam:nam.value,
               email:email.value,
            }
            localStorage.setItem(myObj.email,JSON.stringify(myObj))
            // Object.keys(localStorage).forEach((key) =>{
            //   stringifiedDetailsOfPeople = localStorage.getItem(key);
            //   detailsOfPeople = JSON.parse(stringifiedDetailsOfPeople);

            //  //addNewLineElement(detailsOfPeople);
            
             shownewUserOnScreen(myObj);
            // })
            
        };
        
        window.addEventListener('DOMContentLoaded', (event) => { 
            Object.keys(localStorage).forEach(key => {
                const user = JSON.parse(localStorage.getItem(key))
               // addNewLineElement(user)
               shownewUserOnScreen(user);
            })
        });                                                                                                                                                                                                                                                                                                                                                                         

         function shownewUserOnScreen(user){
            console.log(user);
          const parentNode = document.getElementById('users');
          const childHTML = `<li id = ${user.email}>${user.nam} - ${user.email}<button onClick = deleteuser('${user.email}')>Delete</button><button onclick=editUserDetails('${user.email}','${user.nam}')>Edit</button> </li>`
        
          parentNode.innerHTML =  parentNode.innerHTML+childHTML;
        }
        function deleteuser(userid) {
            console.log("delete is calling");
            localStorage.removeItem(userid);
            removeItemFromScreen(userid);
        }

        function removeItemFromScreen(email){
            const parentNode = document.getElementById('users');
            const elem = document.getElementById(email)
            parentNode.removeChild(elem);
        }
        
        function editUserDetails(emailId, name){
    
            document.getElementById('email').value = emailId;
            document.getElementById('name').value = name;
            
        
        
            deleteuser(emailId)
         }


    


        //console.log(localStorage.getItem('name'));
        //console.log(localStorage.getItem('email'));
      
    