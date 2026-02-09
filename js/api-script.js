// ======================
// Do NOT edit lines 1-23
// ======================

// Save API key and hide initial setup when Save Key button is clicked
document.getElementById("keySubmit").addEventListener("click", () => {
    saveKey();
    hideKeySetup();
});

// Get search term user enters when Search button is clicked
//     Only get images from Unsplash if a search term was inputted
document.getElementById("searchSubmit").addEventListener("click", () => {
  const term = document.getElementById("searchTerm").value.trim();

  if (term) {
    getImages(term);
  }
});

// ======================
// Do NOT edit lines 1-23
// ======================



/*
    TO-DO: Finish the saveKey function:
           - Get the API key the user inputted (hint: look at the HTML for how to access this value)
           - Remove any leading and trailing whitespaces from the user input
           - Only use the Storage API to save the API key if one was inputted
*/
function saveKey() {
  
}



/*
    TO-DO: Finish the hideKeySetup function:
           - Remove the intial setup from the DOM (hint: look at the HTML to access and JS DOM methods)
           - Update the visibiltity to show the photo gallery search setup (hint: look at the HTML to access and CSS property)
*/
function hideKeySetup() {
  
}




/*
    TO-DO: Finish the getImages function:
           - Make this function async
           - Get the photo gallery (hint: look at the HTML for how to access this)
           - Retrieve the API key from the Storage API
           - Clear previous gallery and show loading message

           - Create a URL that holds:
             - SEARCH PHOTOS endpoint
             - api key
             - term
             - 1 page and 15 photos per page

           - Try:
             - Pause as you wait to get the data from Unsplash API 
             - Convert returned data to JS object
             - Send object and term to displayImages 
           - Catch errors:
             - Output error to console
             - Update photo gallery message to "Something went wrong..." 
*/
function getImages(term) {
  
}



/*
    TO-DO: Finish the displayImages function:
           - Get the photo gallery (hint: look at the HTML for how to access this)
           - Clear loading message or previous results
           - Get the array containing objects with the images

           - If there are no images, update photo gallery message to "No result returned for term." 
           - Otherwise, iterate through results and display up to 15 images:
             - Create a new image for each result
             - Update image source to small URL
             - Update image description to image alt text. If missing, update to search term
             - Update image title tooltip to photographer name. If missing, update to empty string
*/
function displayImages(data, term) {
  
}