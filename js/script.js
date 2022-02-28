const myDiv = document.querySelector(".cardDisplay");

const cardsUrl = "https://api.pokemontcg.io/v2/cards/?pageSize=100"
// const typesUrl = "https://api.pokemontcg.io/v2/types"

function listData(list){
    console.log(list);
    let html = "";
    const data = list.data;
    let counter = 0;

    // console.log(data[0].images.large);
    for (let card of data) {
        html = `
        <a href="details.html?q=id:${card.id}">
        <div class="cards">
        <img src="${card.images.small}" alt="picture">
        </div></a>
        `
        myDiv.innerHTML += html;
        if (card === null || card === undefined) {continue};
        if (++counter >= 20) break;
    }
}

fetch(cardsUrl, {
    "method": "GET",
    "headers": {
        "X-Api-Key": "86d290b1-fb1f-4265-985f-7b0f4f40cc52"
    }
})
.then((response) => response.json())
.then((myData) => listData(myData))
.catch(function(error){
    console.error("Something went wrong here...");
    myDiv.innerHTML =`
    <div class="error-message">
    <img src="media/surprisedPikachu.png" class="error" alt="surprised pikachu" />
    <p>Oops.. Seems like something went wrong</p>
    <a href="/index.html">Go back</a>
    </div>`
})
.finally((final) => document.querySelector(".loading").remove());
