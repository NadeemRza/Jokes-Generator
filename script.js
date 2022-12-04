window.addEventListener('load', generateJoke);

async function generateJoke() {
    let txt = document.getElementById('joke');
    await fetch('https://api.chucknorris.io/jokes/random')
    .then((res) => res.json())
    .then((data)=> {
        let joke = data.value;
        // console.log(joke);
        txt.innerText = joke;
    })
};