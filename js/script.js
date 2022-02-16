const body = document.querySelector("body");
const myDiv = document.querySelector(".cardDisplay");

const cardsUrl = "https://api.pokemontcg.io/v2/cards/"
// const typesUrl = "https://api.pokemontcg.io/v2/types"
// KEY: "86d290b1-fb1f-4265-985f-7b0f4f40cc52"

fetch(cardsUrl)
.then(function(response){
    return response.json();
})
.then(function(myData){
    // console.log(myData);
    let html = "";
    const data = myData.data;
    let counter = 0;

    // console.log(data[0].images.large);
    for (let card of data) {
        html = `
        <a href="details.html${details + card.id}">
        <div class="cards">
        <img src="${card.images.small}" alt="picture">
        </div></a>
        `
        myDiv.innerHTML += html;
        if (++counter >= 20) break;
    }
})
.catch(function(error){
    console.error("There's a monster on the loose!");
})
.finally(function(final) {
    document.querySelector(".loading").remove();
})
