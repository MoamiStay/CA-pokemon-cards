# regine-naas-Js1-CA

<!-- Level 1 Process
Find an API
Search for a public, free-to-use API.
You will need to make two calls to this API:

1. to fetch an array of results
2. to fetch a single result using an id, name, or other property.
   You will need to read the API's documentation to see what URLs are available, if they
   require a key to be sent in the header, and any other configuration they might need.
   There are many free APIs discoverable by a Google search.
   You may not use the APIs used in the lessons.

Styling
The focus of the CA is on JavaScript, not styling. Yet, as a front-end developer you will
always need to produce user-interfaces that make sense and are easy to follow. You will
need to provide navigation to and from the home page (index.html) and the contact page.
Both API calls should include a loading indicator. -->

<!-- index.html
Make a call to your API URL. Loop through the results and create HTML for each result.
You must display at least 3 different properties inside the HTML. It's not required to
display an image.
You will need to link each result to a details.html page and to pass a parameter in the query
string to that page.

index.html, cont.
If you are going to fetch the individual result on the details page by its id, then pass an id in
the query string.
If you will be retrieving by another property, like name for example, pass the name in the
query string.
You will fetch this parameter from the query string in the details page code. -->
<!-- Catch any errors and display a message on the page if an error occurs. -->

<!-- details.html
(Remember, you will need a parameter in the query string on this page, so either click
through to it from the index page or manually add a parameter to the URL).
Retrieve the id, name or other parameter from the query string. -->
<!-- Once you have the parameter, add it to the API URL in the format the API requires.
Make an API call using the URL you create. -->

<!-- details.html, cont.
Display at least 3 different properties from the received JSON on this page. -->
<!-- Set the title of the HTML page to be one of the property values, like name, title or another
relevant property. -->
<!-- Catch any errors and display a message on the page if an error occurs. -->

<!-- contact.html
Create a form with the following inputs and validation rules.
Name - required
Subject - must have a value with a minimum length of 10
Email - must have a value and be formatted like an email address - must have a value with a minimum length of 25 -->
<!-- When the form on this page is submitted, write code to validate the input. If any of the
inputs fail validation display an error message for the relevant input. -->

<!-- Level 2 Process
contact.html
If all validation passes, add a message above the form indicating the form passed
validation. -->

Submission
Create a folder called your-name-js1-ca , e.g. mary-smith-js1-ca (or use the folder from
the GitHub Classroom repo)
Add all your code to this folder, zip the folder and submit the zip file

Refs:

PIKACHU RUNNER:
https://tenor.com/view/pikachu-running-run-run-away-gif-13709403

RICKACHU:
https://www.vhv.rs/viewpic/hxJwbJb_transparent-pikachu-face-clip-art-pikachu-chibi-transparent/

SURPRISED PIKACHU:
https://www.vhv.rs/viewpic/hiJJiwh_image-of-pikachu-decal-cartoon-hd-png-download/

SAD PIKACHU:
https://www.klipartz.com/en/sticker-png-kpzlv

<!-- -> fetch - function -->
<!-- -> str.length -->

<!-- -> fjern for(loop) in details page -->

<!-- -> add links to RegEx -->

-> 404 page design
-> added security: if null or multiple is retrieved
-> sort by type
-> details to card list "back" link

<!--
const body = document.querySelector("body");
const myDiv = document.querySelector(".cardDisplay");

const cardsUrl = "https://api.pokemontcg.io/v2/cards/?pageSize=30"
// const typesUrl = "https://api.pokemontcg.io/v2/types"
// KEY: "86d290b1-fb1f-4265-985f-7b0f4f40cc52"
// GET /something HTTP/1.1. X-API-Key: abcdef12345.

fetch(cardsUrl, {
    "method": "GET",
    "headers": {
        "X-Api-Key": "86d290b1-fb1f-4265-985f-7b0f4f40cc52"
    }
})
.then(function(response){
    return response.json();
})
.then(function(myData){
    console.log(myData);
    let html = "";
    const data = myData.data;
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
        // if (++counter >= 20) break;
    }
})
.catch(function(error){
    console.error("There's a monster on the loose!");
    myDiv.innerHTML =
    `<div class="error-message">
    <img src="media/surprisedPikachu.png" alt="surprised pikachu" />
    </div>`
})
.finally(function(final) {
    document.querySelector(".loading").remove();
}) -->

<!--

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
    } -->
