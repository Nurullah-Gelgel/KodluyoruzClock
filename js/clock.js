
function showTime(){
    var today = new Date();

var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

//var dateTime = date+' '+time;
document.getElementById("clock").innerHTML = time
 setTimeout(showTime ,1000)
}

function isimGoster(){
    let isim
    while (!isim) {
        let isim = prompt("Lütfen isminizi giriniz!!")
        if (isim) {
            document.getElementById("myName").innerHTML = isim
            break
        } else {
            let isim = prompt("Lütfen isminizi giriniz!!")
        }
    }
    
}
showTime()
isimGoster()

