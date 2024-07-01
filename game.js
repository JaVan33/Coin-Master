var x = 0;
var y = 0;

function feedback() {
    alert("Děkujeme! Vaše upozornění na chybu bylo odesláno. Děkujeme!")
}

function vydelat() {
    x = x + 1;
}
function brigada() {
    alert("Nyní jste šli na brigádu do KFC. Každé 3 sekundy vám přijde plat... Za 3 sekundy vám bude zaplacen plat...");
    brigada = setInterval("x = x + 5", 5000);
}
function pocet() {
    alert(x);
}
function majetek() {
    alert(y)
}
function car() {
    if(x > 14)alert("Auto zakoupeno");x = x - 15;y = y + 15;
    if(x > 14)alert("Nemáte dostatek coinů pro tuto akci");
}
function flat() {
    if(x > 1149)x = x - 1150;y = y + 1150;
    if(x < 1149)alert('Nemáte dostatek coinů pro tuto akci');
}