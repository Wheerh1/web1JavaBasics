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
    const list = document.createElement("ul");
    for(const pokemon of data)
    {
      const item = document.createElement("li");
      item.innerText = pokemon.name;

      //adding event listner
      item.addEventListener("click", () => {
        onePokemon(pokemon.url);
      });

      list.appendChild(item)
      
      
    }
    document.body.appendChild(list);
}

//ads card to dsi[play ] clicked pokemon info

async function onePokemon(url){
  try {
    const data = await fetch(url);
    if (!data.ok) {
      throw new Error(`Response status: ${data.status}`);
    }
    
    const result = await data.json();
    console.log(result.name);
    displayIndividual(result)
  } catch (error) {
    console.error(error.message);
  }
}

function displayIndividual(pokemon){
  // document.createElement('div');
  // dispatchEvent.innerHTML = `<h2>${pokemon.name}</h2>`;
  // document.appendChild(div);
  pokemonCard.innerHTML = `<h2>${pokemon.name}</h2>
  <image src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}" alt="bugger">`;
  //add image to string literal^
}
const pokemonCard = document.createElement('div');
  document.body.appendChild(pokemonCard);
;



//add event listeer to EACH POKEMON and listen for a click