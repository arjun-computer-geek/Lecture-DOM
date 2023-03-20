const btn = document.querySelector("#btn")
const container = document.querySelector("#container")
const fetchBtn = document.querySelector("#asyncBtn")

const url = "https://pokeapi.co/api/v2/pokemon/ditto";
// var loading =false
btn.addEventListener("click", () => {
    // loading = true;
    // fetch(url)
    //     .then((abc) => abc.json())
    //     .then((data) => {
    //         // console.log(data.species.name)

    //         container.innerHTML += `<p>${data.species.name}</p>`
    //     })
    //     .catch((err) => {
    //         console.log(err)
    //     })
    //     .finally(() => {
    //         console.log("abcd")
    // loading = false;
    //     })

    fetch(url)
        .then((abc) => {
            console.log(abc);
            return abc.json()
        })
        .then((data) => {
            console.log(data)

            container.innerHTML += `<p>${data.species.name}</p>`
        })
        .catch((err) => {
            console.log(err)
        })
        .finally(() => {
            console.log("abcd")
        })

})

// async await syntax

fetchBtn.addEventListener("click", async () => {
    
    try {
        const res = await fetch(url);
        const data = await res.json();
        console.log(data)

    } catch (error) {
        console.log(error);
    } 

})