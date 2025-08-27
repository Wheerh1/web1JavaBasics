async function populate() {
  const url =
    "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";
  try {
    const data = await fetch(url);
    if (!data.ok) {
      throw new Error(`Response status: ${data.status}`);
    }

    const result = await data.json();
    console.log(result.results);
    populateHeader(result);
    populateBody(result);
  } catch (error) {
    console.error(error.message);
  }
}

function populateHeader(obj) {
  const header = document.querySelector("header");
  const myH1 = document.createElement("h1");
  myH1.textContent = obj.squadName;
  header.appendChild(myH1);

  const myPara = document.createElement("p");
  myPara.textContent = `HomeTown: ${obj.homeTown} //Formed: ${obj.formed}`;
  header.appendChild(myPara);
}

function populateBody(obj) {
  const section = document.querySelector("section");
  const heroes = obj.members;

  for (const hero of heroes) {
    const myArticle = document.createElement("article");
    //this works I think but the css kills it↓
    // const myDiv = document.createElement("div");
    // const myHTML = `
    // <h2>${hero.name}</h2>
    // <p>Secret Identity: ${hero.secretIdentity}</p>
    // <p>age: ${hero.age}</p>
    // <p>Powers:</p>`;
    // myDiv.textcontent =myHTML;
    const myH2 = document.createElement("h2");
    const myPara1 = document.createElement("p");
    const myPara2 = document.createElement("p");
    const myPara3 = document.createElement("p");
    const myList = document.createElement("ul");

    myH2.textContent = hero.name;
    myPara1.textContent = `Secret identity: ${hero.secretIdentity}`;
    myPara2.textContent = `Age: ${hero.age}`;
    myPara3.textContent = "Superpowers:";

    const powers = hero.powers;
    for (const power of powers) {
      const listItem = document.createElement("li");
      listItem.textContent = power;
      myList.appendChild(listItem);
    }
    myArticle.appendChild(myH2);
    myArticle.appendChild(myPara1);
    myArticle.appendChild(myPara2);
    myArticle.appendChild(myPara3);
    myArticle.appendChild(myList);
    section.appendChild(myArticle);
  }
}

populate();
