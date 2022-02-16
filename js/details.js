const details = document.querySelector(".cardDetails");
const detailsUrl = "https://api.pokemontcg.io/v2/cards?q=id:pl1-1";

fetch(detailsUrl)
.then(function(response){
    return response.json();
})
.then(function(details){
    console.log(details);
})
// .catch(function(error){
//     console.error("There's a pikachu on the loose!");
// })
// .finally(function(final) {
//     document.querySelector(".loading").remove();
// })