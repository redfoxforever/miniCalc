let userSum = +prompt("Summani kiriting:")

while (isNaN(userSum)) {
    userSum = +prompt("Summani kiriting:")
}

let total = +""

total += userSum

let symb

let plusCalc = function(a, b) {
    total = a + b
}

let minusCalc = function (a, b) {
    total = a - b
}

while (userSum != "") {

    symb = prompt(`Summa ${total}, qoshmoqchi bosez(+), ayirmoqchi bosez(-), bo'sh qoldrb ok bosez chek chqadi`)

    if (symb === "+") {
        userSum = +prompt("Qo'shmoqchi bo'gan Summani kiriting:")

        plusCalc(total, userSum)
    } else if (symb === "-") {
        userSum = +prompt("Ayirmoqchi bo'gan Summani kiriting:")
        
        minusCalc(total, userSum)
    } else {
        break
    }

    if (total <= 0) {
        break
    }
}

if (total <= 0) {
    alert("Szga tekn boldi")
} else {
    alert(`Szdan ${total} min so'm bo'ld`)
}
