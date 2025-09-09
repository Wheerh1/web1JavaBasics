// Movie DB
// Make a movie database using data from OMDB with:

// Search input field
// Display movie results in a grid
// Show movie posters and basic info
// Add loading states



async function getData() {
    const url = "http://www.omdbapi.com/?i=tt3896198&apikey=68344127"

    try{ 
        const data = await fetch(url);
        if(!data.ok){throw new Error(`response status: ${data.status}`)}
        const result = await data.json();
        console.log(result);
    }catch(error){
        console.error(error.message);
    };
    
}
getData();

//example of a search url for specific title
//http://www.omdbapi.com/?t=tron&apikey=68344127

//need to make something that can take a user searched name and save the data retreieved to a list or something, 
//then have the grid expand or something? doesnt look like I can request a range of random movies, although I could maybe
//by having it pull a bunch from a static defined "start" list?