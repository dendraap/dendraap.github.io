var calDisplay = ""

function btnClick(e){
    if(e == "1" || e == "2" || e == "3" || e == "4" || e == "5" || e == "6" || e == "7" || e == "8" || e == "9" || e == "0" || e == "AC" || e == "C" || e == "*" || e == "/" || e == "+" || e == "-" || e == "+-" || e == "." || e == "="){
        if(e == "AC"){
            calDisplay = ""
        } else {
            console.log(e)
            calDisplay = calDisplay + e
        }
        document.getElementById("display").value = calDisplay
    } else {
        console.log("Input harus berupa angka")
    }
}

document.getElementById("display").addEventListener('input', function displayChange(){
    let e = this.value
    let chars = /^[0-9]+$/
    
    if(chars.test(e)){
        console.log("Digits")
    } else{
        alert("NOT DIGITS")
    }
})
   