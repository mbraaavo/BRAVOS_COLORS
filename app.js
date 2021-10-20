//Array with all numbers from 1 - 9 and letters from a - f
let colors = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];

//Empty Array to hold all the values of the random color
let generated_color = [];

//Grabbing the generate button from THE DOM
let generate_button = document.querySelector(".generate");

//Grabbing the copy button from theDOM
let copy_button = document.querySelector(".copy");

//Grabbing the background color from THE DOM!!!!
let background_color = document.querySelector(".background");

//Grabbing the color-title from THE DOM!!!!!!!
let color_title = document.querySelector(".color");

//Create an empty variable for our new color
let new_color

//Grabbing our refresh button from The DoM
let refresh_button = document.querySelector(".refresh");

//Function to generate a color (make sure to clear the array at the end...)
function generate() {
    //For loop to loop through each spot of a hex value to generate a color
    for (let spot=0; spot<=5; spot++) {
    //Random function to select different parts of the array
    let random = Math.floor(Math.random() * (colors.length - 1));
    generated_color.push(colors[random]);
}
    //Concatenate our stringified generated_color array with a # to created a hex value 
    //for our color
    new_color = ("#" + generated_color.join(""));

    //some debugging stuff
console.log(generated_color);
console.log(new_color);
}

//Function to copy our new color
function copy_function() {
 
    color_title.select();
    color_title.setSelectionRange(0, 99999); /* For mobile devices */

    navigator.clipboard.writeText(color_title.value);

    alert("You just copied your randomly generated color!")

    color_title.blur();

}

//Event listener for generator button
generate_button.addEventListener("click", function (){
    generate();
    background_color.classList.remove("gradient-background");
    background_color.style.backgroundColor = new_color; 
    generate_button.style.backgroundColor = (new_color + "40");
    color_title.value = (new_color);
    color_title.style.backgroundColor = new_color;
    generated_color = [];
})

//Event Listener for copy button
copy_button.addEventListener("click", function(){
    copy_function();
});

//RESET FUNCTION :) 
function refresh_reset() {
    color_title.value = "";
    background_color.classList.add("gradient-background");
    color_title.style.backgroundColor = "#FEF9EF";
    generate_button.style.backgroundColor = "#FEF9EF";
}

//Event Listener for refresh button
refresh_button.addEventListener("click", function (){
    refresh_reset();
});

//Creating a reset button...
//Color gen function and copy to clip board functions are done!!