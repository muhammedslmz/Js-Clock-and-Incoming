let fullName = prompt("Lutfen Adinizi Giriniz: ")



let myName = document.querySelector("#myName")
myName.innerHTML = fullName

let myClock = document.querySelector("#myClock")

function dateOclock() {
    var date = new Date() 
    var day =date.toLocaleString('tr-TR', {weekday: 'long'})
    var time = date.toLocaleTimeString('tr-TR') 
    document.getElementById("myClock").innerHTML = time + " "+day; 
}
setInterval(dateOclock, 1000); 
