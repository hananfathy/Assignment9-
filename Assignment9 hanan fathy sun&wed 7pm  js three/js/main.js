


var siteNameInput = document.getElementById("siteNameInput");
var siteURLInput = document.getElementById("siteURLInput");

var addBtn = document.getElementById("addBtn");   // Button Add
var tableBody = document.getElementById("tableBody")
var indexUpdate = 0 ;


var webContainer = [];

// check if localStorage is have data >>> then retrn values in local 
if(localStorage.getItem("webs") != null){
    webContainer =JSON.parse(localStorage.getItem("webs")); //use json >> to convert array of object string  to array 
    displayData() 
}
// add
function addWeb(){
    if(validationName() == true  && validationsiteURL() == true){

        var web = {
            name  :  siteNameInput.value,
            url : siteURLInput.value,
        };
    
        webContainer.push(web)   // 1- add in array
        localStorage.setItem("webs" ,JSON.stringify(webContainer)); //2- add in localStorage        // use json >> to convert array of object to string
        displayData()    // 3- display after add
        clearForm();
        removeIsValid()
        // console.log(webContainer);
    }
}

//clear
function clearForm(){
    siteNameInput.value ="";
    siteURLInput.value  ="";

}
//display
function displayData(){
    var cartona = "";
    for(var i = 0 ; i < webContainer.length ; i++){
        cartona += `<tr>
                    <td>${i + 1}</td>
                    <td>${webContainer[i].name}</td>

                    <td>
                    <a class="btn btnvisit btn-primary btn-sm" data-index="0" role="button" target="_blank "href="${webContainer[i].url}"><i class="fa-regular fa-eye"></i>Visit</a>
                    </td>




                    <td>
                        <button class="btndelete btn btn-outline-danger btn-sm"  onclick = "deleteWeb(${i})" ><i class="fa-solid fa-trash"></i>Delete</button>
                      </td>               
                    </tr>`}
    document.getElementById("tableBody").innerHTML =cartona;
}

//delete
function deleteWeb(elementNumber){
    webContainer.splice(elementNumber , 1);  // remove from array
    localStorage.setItem("webs" ,JSON.stringify(webContainer));  //ermove from localStorage
    displayData();   // display after delete
}



//  validation Name
function validationName(){
   var text = siteNameInput.value;  // data
   var regexName =/^[a-z]{2,9}$/ ;  //pattern
   var messageName = document.getElementById('messageName');  // p >> for user this data is invalid


   if(regexName.test(text) == true){    //   Valid         //regexName.test(text));  //method test to compare between text and pattern regexName and return true or false
        siteNameInput.classList.add('is-valid');        // to appear mark true
        siteNameInput.classList.remove('is-invalid');   // to remove mark false
        messageName.classList.add('d-none');               // to operate class [d-none] and Disappear [p]
        return true;     
   }

   else{     // Not Valid
        siteNameInput.classList.add('is-invalid');     //to appear mark false
        siteNameInput.classList.remove('is-valid');    // to remove mark true
        messageName.classList.remove('d-none');           // to Off class [d-none] and appear [p]
       return false; 
   }  
}

//  validation Category
function validationsiteURL(){
    var text = siteURLInput.value;  // data
    var regexName =/^(https?):\/\/[^\s/$.?#].[^\s]*$/i; ;  //pattern

    var messagesiteURL = document.getElementById('messagesiteURL');  // p >> for user this data is invalid
 
 
    if(regexName.test(text) == true){    //   Valid         
         siteURLInput.classList.add('is-valid');        
         siteURLInput.classList.remove('is-invalid');   
         messagesiteURL.classList.add('d-none');               
         return true;     
    }
 
    else{     // Not Valid
         siteURLInput.classList.add('is-invalid');     
         siteURLInput.classList.remove('is-valid');    
         messagesiteURL.classList.remove('d-none');           
        return false; 
    }  
 }
 
// remove mark is-valid
 function removeIsValid(){
    siteNameInput.classList.remove('is-valid'); 
    siteURLInput.classList.remove('is-valid'); 

 }
 
