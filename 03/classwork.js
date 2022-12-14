function getFActorial(a) {
    if (a == 1) {
        console.log("End Call");
        return 1
    }
    else {
        console.log("Itarabe Call " + a);
        return a * getFActorial(a-1)
    }
}

let res = getFActorial(4);
console.log(res);