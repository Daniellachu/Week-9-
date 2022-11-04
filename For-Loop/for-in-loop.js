var computer = {brand: "Microsoft", laptop:"Surface Laptop 4", screen:"13.5\""} //( add a backslash to make it work with the quotations \ = escape character)

var sentence = "I have the: "

for(var item in computer){
    if (item == "brand"){
        sentence += computer.brand;
    } else if (item == "laptop"){
        sentence += computer.laptop + ".";
        break;
    }
    if (item == "brand"){
        sentence += " ";
    }
}

console.log(sentence)

// mateo is cool 