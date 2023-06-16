const btnEl = document.getElementById("btn");
const jokeEl = document.getElementById("joke")


const apikey = "iYWEUlJ95YYY4Nzq+0rLjA==x0xFzdG76r8KqVbs";

const options = {
    method: "GET",
    headers: {
        "X-API-Key" : apikey,
    },
};

const apiURL ="https://api.api-ninjas.com/v1/dadjokes?limit=1";

async function getjoke(){

    try {
        jokeEl.innerText = "UPDATING...";
        btnEl.disabled = true;
        btnEl.innerText = "LOADING...";
        const response = await fetch(apiURL, options);
        const data = await response.json();
    
        btnEl.disabled = false;
        btnEl.innerText ="Tell me a joke";
    
        jokeEl.innerText = data[0].joke;
    } catch (error) {
        jokeEl.innerText =" An error occured try again later";
        btnEl.disabled = false;
        btnEl.innerText ="Tell me a joke"
        console.log(error);
    }
}

btnEl.addEventListener("click", getjoke);