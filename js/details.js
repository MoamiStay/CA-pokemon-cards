const queryString = document.location.search;
// const params = new URLSearchParams(queryString);
// const id = params.get("id");
// console.log(id);

const detailsOut = document.querySelector(".cardDetails");
const title = document.querySelector("title");

const detailsUrl = `https://api.pokemontcg.io/v2/cards${queryString}`;
// console.log(`${detailsUrl}`);
fetch(detailsUrl)
.then(function(response){
    return response.json();
})
.then(function(details){
    // console.log(details);
    const data = details.data;
    // console.log(details);
    let html = "";

    for(let i = 0; i < data.length; i++) {
        html = `
        <div>
        <img src="${data[i].images.small}" alt="image" />
        <h1>Name: ${data[i].name}</h1>
        <p>Rarity: ${data[i].rarity}</p>
        <p>Artist: ${data[i].artist}</p>
        <p><a href="${data[i].cardmarket.url}" target="_blank">Card Market</a></p>
        </div>
        ` 
        title.innerHTML = `${data[i].name}`;
        detailsOut.innerHTML += html;
    }
})
.catch(function(error){
    console.error("There's a pikachu on the loose!");
    myDiv.innerHTML = `
    <div class="error-message">
    <img src="media/surprisedPikachu.png" alt="surprised pikachu" />
    </div>`
})
.finally(function(final) {
    document.querySelector(".loading").remove();
})