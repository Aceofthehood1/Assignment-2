let overlay =
document.getElementById("overlay"); /* This gets and id called overlay which holds the whole loader */
window.addEventListener('load',function(){ /* The function makes sure that when  the page is loaded the loader does not remain on the page 
    making it disappear and showing itself for a seecond or less*/
    overlay.style.display = 'none';
    overlay.fadeOut('slow');
})
