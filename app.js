let api = "https://api.quotable.io/quotes/random";

async function getQuote(url) {
    let resposne = await fetch(url);
    let data = await resposne.json();
    console.log(data[0]);

    document.getElementById("quote").innerText = data[0]?.content;
    document.getElementById("author").innerText = data[0]?.author;
}
getQuote(api);

const test = ()=>{
    console.log("clicked");
}

const quoteBTN = document.getElementById("new-quote");
quoteBTN.addEventListener("click", ()=>getQuote(api));

