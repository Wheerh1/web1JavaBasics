let pets = [
    { name: "Garfield", type: "cat", age: 3, adopted: false },
    { name: "Clifford", type: "dog", age: 6, adopted: false },
    { name: "Maddie", type: "dog", age: 8, adopted: false },
    { name: "Princess", type: "squig", age: 1, adopted: false },
    // Add 3 more pets here
];

function displayPet(pet) {
    // Create HTML string for one pet
    // Include: name, type, age, and adoption status
    // Return the HTML string
    let cssClass = pet.adopted ? "pet adopted" : "pet available";
    let HTML = `<div class="${cssClass}">
    <h2>Name = ${pet.name}</h2> 
    <p>Type of pet = ${pet.type}</p>
    <p>Age = ${pet.age}</p>
    <p>Is adopted = ${pet.adopted}</p>
    <button id=${pet.name}>Adopt Me</button></div>`;
    return HTML;
}

function showAllPets(pets){
    
    const container = document.getElementById("pet-list");
    container.innerHTML = ''
    for ( const pet of pets)
    {
        console.log(pet);
        container.innerHTML += displayPet(pet);
    }
}

function adoptPet(pets, petname)
{
    for( const pet of pets)
    {
        if (pet.name === petname)
            pet.adopted = true;
    }
    //showAllPets(pets);
}

function clickAdopt(e, pets)
{
    petname = e.target.id
    for( const pet of pets)
        {
            if (pet.name === petname)
                pet.adopted = true;
                console.log(pet.adopted)
        }
    showAllPets(pets)
    console.log(petname);
    console.log(e);
    //petname = e.target.pet.name

}



showAllPets(pets);
const btns = document.querySelectorAll("button");
console.log(btns)
for (const btn of btns) {
    btn.addEventListener("click", (e) => {
        //e.target.pet.adopted = true;
        //console.log([e.target.pet.name])
        clickAdopt(e,pets)
        console.log(e)
    });
  }
//adoptPet(pets,"Maddie");