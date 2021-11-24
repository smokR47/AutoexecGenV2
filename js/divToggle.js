var genGif = document.getElementById('gen-gif');
var execText = document.getElementById('exec-output');

function toggleLinks() {
    var links = document.getElementById('gen-menu-links');
    var linkOpacity = window.getComputedStyle(links).getPropertyValue('opacity');
    if (linkOpacity === `${0}`) {
        links.setAttribute("style","opacity:1; -moz-opacity:1;")
    }
    else {
        links.setAttribute("style","opacity:0; -moz-opacity:0;")
    }
    genGif.setAttribute("style","opacity:0; -moz-opacity:0;")
    execText.setAttribute("style","opacity:1; -moz-opacity:1;")
}

function toggleExecOutput() {
    var genGifOpacity = window.getComputedStyle(genGif).getPropertyValue('opacity');
    if (genGifOpacity ===  `${0}`) {
        execText.setAttribute("style","opacity:0; -moz-opacity:0;")
        genGif.setAttribute("style","opacity:1; -moz-opacity:1;")
    }
    else {
        genGif.setAttribute("style","opacity:0; -moz-opacity:0;")
        execText.setAttribute("style","opacity:1; -moz-opacity:1;")
    }
}

function toggleSteamIDInput() {
    var div = document.getElementById('steam-group-id-val');
    var divOpacity = window.getComputedStyle(div).getPropertyValue('opacity');
    if (divOpacity === `${0}`) {
        div.setAttribute("style","opacity:1; -moz-opacity:1;")
    }
    else {
        div.setAttribute("style","opacity:0; -moz-opacity:0;")
    }
}