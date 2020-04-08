function log(message) {
    console.log(message);
}
function doSomething() {
    for (var i = 0; i < 5; i++) {
        log(i);
    }
    log(i);
}
var message = "Hello World";
log(message);
doSomething();
