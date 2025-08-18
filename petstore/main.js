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
    let cssClass = pet.adopted ? "pet adopted" : "pet available"
    let HTML = `<div class="${cssClass}>Name = ${pet.name}, 
    Type of pet = ${pet.type}
    Age = ${pet.age}
    Is adopted = ${pet.adopted}</div>`;
}

function showAllPets(){
    let petspace;
    pets.forEach(element => {
        petspace += displayPet(element)
    });
    document.getElementById("pet-list").innerHTML = petspace;

}

showAllPets();