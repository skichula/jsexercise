function preventDefault() {

    console.log("here")
    var nameField = document.querySelector("#name").value 
    var addrField = document.querySelector("#addr").value  
    var nameError = document.querySelector("#nameError")  
    var addrError = document.querySelector("#addrError") 
    if (nameField.length == 0){
        nameError.classList.remove("errormsg")
    }
    else nameError.classList.remove
    if (nameField.length ==0 || addrField.length ==0){
        
        e.preventDefault()
        if (nameField.length ==0) {}
    }
   
   }