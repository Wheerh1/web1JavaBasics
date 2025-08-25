console.log("hw");


//write code to fetch 10 pokemon
async function getData() {
    const url = "https://pokeapi.co/api/v2/pokemon?limit=10&offset=3";
    try {
      const data = await fetch(url);
      if (!data.ok) {
        throw new Error(`Response status: ${data.status}`);
      }
  
      const result = await data.json();
      console.log(result.results);
      displayStuff(result.results)
    } catch (error) {
      console.error(error.message);
    }
  }

  getData()

//use java + loop to display the name and urls of the 10 pokemon
function displayStuff(data){
    for(const pokemon of data)
    {
      const list = document.createElement('ul')
      list.innerHTML = `<li> ${pokemon.name}</li>`;
      document.body.appendChild(list)
    }
}

//add event listeer to EACH POKEMON and listen for a click