window.onload = function () {
    let randomJokeButton = document.querySelector("#get-random-joke") as HTMLButtonElement;
    randomJokeButton.onclick = getJoke;
}

function getJoke() {
    // let randomJokeUrl = "https://v2.jokeapi.dev/joke/Any?type=single&safe-mode";
    // Only retrieve safe programming jokes
    let randomJokeUrl = "https://v2.jokeapi.dev/joke/Programming?type=single&safe-mode";

    fetch(randomJokeUrl)
        .then((response) => response.json()) // Get the response object and return the json data   
        .then(
            (jsonData) => {
                console.log(jsonData);
            }
        );

    // // Same fetch as above avoid lambda expressions
    // fetch(randomJokeUrl)
    //     .then(handleResponse)
    //     .then(handleData);
}

function handleResponse(response) {
    return response.json();
}

function handleData(jsonData) {
    console.log(jsonData);
}