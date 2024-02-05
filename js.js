
// ~~~~~~~~~~~~~~~~~~ menu toggle ~~~~~~~~~~~~~~~~~~ 

$(".click-menu").click(function () {
    $(".header-wide").toggleClass("menu-event");
})

// ~~~~~~~~~~~~~~~~~~ main : typing ani ~~~~~~~~~~~~~~~~~~ 

var typingBool = false;
var typingIdx = 0;
var typingTxt = $(".typing-txt").text();
typingTxt = typingTxt.split("");
if (typingBool == false) {
    typingBool = true;
    var tyInt = setInterval(typing, 40);
}
function typing() {
    if (typingIdx < typingTxt.length) {
        $(".typing").append(typingTxt[typingIdx]);
        typingIdx++;
    } else {
        clearInterval(tyInt);
    }
}
