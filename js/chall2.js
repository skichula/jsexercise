function copyAddress() {
    var billing = document.querySelector("#bill")
    var is_checked = document.querySelector("#sameAddress").checked
    var home = document.querySelector("#home")
    console.log(is_checked)
    if (is_checked == true) {
        home.value = billing.value;
    } else  if (is_checked == false) {
        home.value = ""; 
    }
}