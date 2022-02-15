document.querySelector("body").style.backgroundColor = "cadetblue";
const myDiv = document.querySelector(".hi");

const url = "https://digimon-api.vercel.app/api/digimon";

fetch(url)
.then(function(response){
    return response.json();
})
.then(function(myData){
    console.log(myData);
    // let html = "";
    // const test = myData;
    // for (let i = 0; i < 10; i++) {
    //     html = `
    //     <div>
    //     <img src="${myData[i].img}" alt="picture">
    //     <h2>${myData[i].name}</h2>
    //     <p>Current Level: ${myData[i].level}</p>
    //     </div>
    //     `
    //     myDiv.innerHTML += html;
    // }
})
// .catch(function(error){
//     console.error("There's a monster on the loose!");
// })