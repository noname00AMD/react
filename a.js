var a = 5123215
debugger
function timsodao(input) {
    var sodao = 0, rem
    while (input != 0) {
        rem = input % 10
        sodao = (sodao * 10) + rem
        input = Math.floor(input / 10)

    }
    return sodao
}
function sodoixung(input) {
    if (input === timsodao(input)) {
        return true
    } else {
        return false
    }
}
console.log(sodoixung(a));
