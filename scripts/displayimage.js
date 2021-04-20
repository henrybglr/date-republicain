const text = document.getElementById("greeting").innerText;
let image = document.getElementById("todaysImage");

// if(text.includes("copper")) {
//     image.src = "images/4Nivose/24NivoseCopper.jpg";    
// }
// if(text.includes("the cat")) {
//     image.src = "images/4Nivose/25NivoseCat.jpeg"
// }

let days = { 
    "copper": "images/4Nivose/24NivoseCopper.jpg",
    "the cat": "images/4Nivose/25NivoseCat.jpeg",
    "tin": "images/4Nivose/26NivoseTin.jpeg",
};

for(const day in days) {
    if(text.includes(day)){
        image.src = Object.values(day[days]);
    }
}

// for key in dictionary
// if text.includes key
// image.src = value

