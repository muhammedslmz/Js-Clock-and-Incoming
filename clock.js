let fullName = prompt("Lutfen Adinizi Giriniz: ")



let myName = document.querySelector("#myName")
myName.innerHTML = fullName

let myClock = document.querySelector("#myClock")

function tarihSaat() {
    var date = new Date() // tarih saati al
    var day =date.toLocaleString('tr-TR', {weekday: 'long'})
    var time = date.toLocaleTimeString('tr-TR') // tarih ve saati Türkçe olarak al
    document.getElementById("myClock").innerHTML = time + " "+day; // zaman id'li elemente yazdır
}
setInterval(tarihSaat, 1000); 