//Remove side-bar
var sidebar = document.getElementById("side_bar2");
sidebar.parentNode.parentNode.parentNode.removeChild(sidebar.parentNode.parentNode);

// Change "Web" text to "All"
var web = document.getElementById("web");
web.innerText = "All";

// Change "Advanced" text to "More"
var head_left = document.getElementById("head_left");
head_left.childNodes[8].innerText = "More";

//Remove bookmark button
var bookmark = head_left.childNodes[9];
console.log(bookmark);
bookmark.parentNode.removeChild(bookmark);

//Change logo
var logo = document.getElementsByClassName("navbar-brand");
logo[0].childNodes[1].src = browser.extension.getURL("logo.png");
logo[0].childNodes[1].width = 120;
logo[0].childNodes[1].height = 44;

//Remove search box from the bottom of the page
var bottomquerybox = document.getElementById("bottomquerybox");
bottomquerybox.parentNode.removeChild(bottomquerybox);

//Remove copyright
var copyright = document.getElementsByClassName("copyright")[0];
copyright.parentNode.removeChild(copyright);

//Remove startmail
var startmail = document.getElementsByClassName("right_links")[0].childNodes[0];
startmail.parentNode.removeChild(startmail);