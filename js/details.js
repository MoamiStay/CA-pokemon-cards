const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("q");
// console.log(id);

const detailsOut = document.querySelector(".cardDetails");
const title = document.querySelector("title");

const detailsUrl = `https://api.pokemontcg.io/v2/cards?q=${id}`;
// console.log(`${detailsUrl}`);

function listDetails(list) {
    // console.log(list);
    const data = list.data;
    // console.log(data[0]);
    let html = "";

        html = `
        <div>
        <img src="${data[0].images.small}" alt="image" />
        <h1>Name: ${data[0].name}</h1>
        <p>Rarity: ${data[0].rarity}</p>
        <p>Artist: ${data[0].artist}</p>
        <p><a href="${data[0].cardmarket.url}" target="_blank">Card Market</a></p>
        </div>
        ` 
        title.innerHTML = `${data[0].name}`;
        detailsOut.innerHTML += html;
}

fetch(detailsUrl)
.then((response) => response.json())
.then((myData) => listDetails(myData))
.catch(function(error){
    console.error("Something went wrong here");
    detailsOut.innerHTML = `
    <div class="error-message">
    <img src="media/surprisedPikachu.png" class="error" alt="surprised pikachu" />
    <p>Oops.. Seems like something went wrong</p>
    <a href="/index.html">Go back</a>
    </div>`;
})
.finally((final) => document.querySelector(".loading").remove());
