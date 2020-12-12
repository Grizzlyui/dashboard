const searchForm = document.querySelector("#searchForm");
const searchBox = document.querySelector('#search-box')

searchForm.addEventListener('submit', (e) => { 
    e.preventDefault();    
    const choice = document.querySelector('input[name="choices"]:checked');     
    if (choice.value === "google") {     
        window.location = `https://www.google.com/search?q=${searchBox.value}`; 
    } 
    if (choice.value === "youtube") {     
        window.location = `https://www.youtube.com/results?search_query=${searchBox.value}`; 
    } 
    if (choice.value === "reddit") {     
        window.location = `https://www.reddit.com/search/?q=${searchBox.value}`; 
    }  
    if (choice.value === "takealot") {     
        window.location = `https://www.takealot.com/all?_sb=${searchBox.value}`; 
    }     
    searchBox.value = '';
});   




