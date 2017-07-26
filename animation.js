// Brake Chain Animation - Kırık Link Animasyonu ve Fonksiyonumuz.
function brakeChain() { 
    let chain = document.getElementById('chain'); // Let burada eski syntax'daki "var" ile aynı görevi üstleniyor yani değişken oluşturmaya yarıyor. var,let,const  
    chain.innerHTML = "&#xf0c1"; // Soldaki tırnak içindeki karakterler Unicode'yi temsil ediyor. Her ikonun kendi Unicode'u mevcuttur.

    setTimeout(function() {
        chain.innerHTML = "&#xf127"; // Soldaki tırnak içindeki karakterler Unicode'yi temsil ediyor. Her ikonun kendi Unicode'u mevcuttur.
    }, 1000); // Buradaki 1000 milisaniye yani 1 saniyedir.
}
// Call Animation - brakeChain fonksiyonumuzu çağırıyoruz.
brakeChain();
// Animate Every 2 Seconds GB - Her 2 saniyede bir Animasyonu sürdürür. Aşağıdaki 2000 milisaniye 2 saniyeye eşittir.
setInterval(brakeChain, 2000);




// Battery Charge Animation - Batarya Şarj Animasyonu
function chargeBattery() {
    let battery = document.getElementById('battery');
    battery.innerHTML = "&#xf244"; // - Soldaki tırnak içindeki karakterler Unicode'yi temsil ediyor. Her ikonun kendi Unicode'u mevcuttur.
        
    setTimeout(function () {
            battery.innerHTML = "&#xf243"; 
        }, 1000);
        setTimeout(function () {
            battery.innerHTML = "&#xf242"; 
        }, 2000);
            setTimeout(function () {
            battery.innerHTML = "&#xf241"; 
        }, 3000);
        setTimeout(function () {
            battery.innerHTML = "&#xf240"; 
    }, 4000);
}
// Animate Every 5 second
setInterval(chargeBattery, 5000);
chargeBattery();





// Hourglass Tip Animation - Kum saati Animasyonu 
function hourglassTip() {
    let hourglass = document.getElementById('hourglass');
    hourglass.innerHTML = "&#xf251";

    setTimeout(function () {
        hourglass.innerHTML = "&#xf252";
    }, 1000);
    setTimeout(function() {
        hourglass.innerHTML = "&#xf253";
    }, 2000); 
}
hourglassTip();
setInterval(hourglassTip, 3000);

