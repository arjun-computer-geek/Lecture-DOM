const btn = document.querySelector("#btn")
const container = document.querySelector("#container")

const url = "https://pokeapi.co/api/v2/pokemon/ditt";

btn.addEventListener("click", () => {

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