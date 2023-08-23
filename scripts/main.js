fetch("https://randomfox.ca/floof/")
.then(response => response.json())
.then(
    (helloFox) => {
        const foxImgFetch = document.querySelector("#fox")
        foxImgFetch.src = helloFox.image

    }
)

const getKitty = async() => {
    const response = await fetch("http://shibe.online/api/cats?count=1&urls=true&httpsUrls=false")
    const convertedData = await response.json()

    const kittyImgFetch = document.querySelector("#cat")
    kittyImgFetch.src = convertedData[0]

    
}

getKitty()