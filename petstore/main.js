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
    <p>Is adopted = ${pet.adopted}</p></div>`;
    return HTML;
}

function showAllPets(pets){
    //let petspace;
    //pets.forEach(element => {
        //petspace += displayPet(element)
        //document.getElementById("pet-list").innerHTML = displayPet(element)
    //});
    //document.getElementById("pet-list").innerHTML = petspace;

    //for( i = 0; i<pets.count; i++)
    //{
       //let html = document.getElementById("pet-list").innerHTML = displayPet(i)
    //}
    const container = document.getElementById("pet-list");
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
        showAllPets(pets)
    }
}

showAllPets(pets);
adoptPet(pets,"Maddie");