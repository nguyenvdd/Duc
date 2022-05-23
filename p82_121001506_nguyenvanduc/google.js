const input=document.querySelector('#search')


input.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        window.location = 'http://www.google.com/search?q='+input.value 
    }
});
