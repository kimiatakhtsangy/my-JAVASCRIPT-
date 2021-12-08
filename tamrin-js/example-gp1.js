var x = window. prompt("write your word:");


function polindrom(x) {
    const len = x.length;

    for (let i = 0; i < len / 2; i++) {

        if (x[i] !== x[len - 1 - i]) {
            return 'NO';
        }
    }
    return 'Yes';
}
console.log(polindrom(x));