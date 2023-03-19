function redef() {
    window.location.href = 'https://vmdos.github.io/vmdos.img';
    return;
}
var x = 1000000;
function start() {
    if (x <= 0) {
        redef();
    }
    else {
        x--;
    }
}