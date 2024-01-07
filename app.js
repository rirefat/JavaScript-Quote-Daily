let api = "https://api.quotable.io/quotes/random";

async function getQuote(url) {
    let resposne = await fetch(url);
    let data = await resposne.json();
    console.log(data[0].content);

    // document.getElementById("quote").innerText = data[0]?.content;
    // document.getElementById("author").innerText = data[0]?.author;

    let quote = document.getElementById("quote");
    quote.innerHTML = data[0]?.content;
    let author = document.getElementById("author");
    author.innerHTML = data[0]?.author;
}
getQuote(api);

const test = ()=>{
    console.log("clicked");
}

const quoteBTN = document.getElementById("new-quote");
quoteBTN.addEventListener("click", ()=>getQuote(api));


const tweet =()=>{
    window.open(`https://twitter.com/intent/tweet?text=${quote.innerHTML} Quoted by "${author.innerHTML}".`, "Tweet Window", "width=700, height=400")
}
