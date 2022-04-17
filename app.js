let userSum = +prompt("Summani kiriting:")

while (isNaN(userSum)) {
    userSum = +prompt("Summani kiriting:")
}

let total = +""

total += userSum

while (userSum != "") {

    userSum = prompt(`Summa ${total}, qoshmoqchi bosez(+), ayirmoqchi bosez(-), bo'sh qoldrb ok bosez chek chqadi`)

    if (userSum === "+") {
        userSum = +prompt("Qo'shmoqchi bo'gan Summani kiriting:")
        total += userSum
    } else if (userSum === "-") {
        userSum = +prompt("Ayirmoqchi bo'gan Summani kiriting:")
        total -= userSum
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
