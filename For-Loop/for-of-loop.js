var weathers = ["sunny", "rainy", "cloudy"];
var words = "";

for (var weather of weathers){
    if ( weather == "cloudy") {
        words += weather;
        break;
    }
    words += weather + "\n"; // \ ( backslash )= breaks the line 
}

console.log(words);

// remove the space on the last line - just check the last item and then break out of it 