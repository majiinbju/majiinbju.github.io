// Parsing About Section
const about = document.getElementById('about');
console.log(about);

// Create URL for JS Object File
var url = "about.json";

// Append JSON for Players
$.getJSON(url, function(data){
	for (let i = 0; i < data.aboutMe.length; i++) {
		const myArticle = document.createElement('article');
        $("#dialogue").append(myArticle);
		const aboutIndex = data.aboutMe[i].index;
        myArticle.setAttribute('id','article' + aboutIndex);
		$("#article"+ aboutIndex).append("<h1>" + data.aboutMe[i].header + "</h1>")
		const aboutTraits = data.aboutMe[i].traits;
        for (let j = 0; j < aboutTraits.length; j++) {
        $("#article"+ aboutIndex).append("<li>" + data.aboutMe[i].traits[j] + "</li>");
        }
	}
}
);







/* About Me + Projects */

var container = document.getElementById("container");

function aboutMe() {
		document.getElementById("dialogue").style.opacity = "1";
		document.getElementById("dialogue").style.zIndex = "1";
    	document.getElementById("projects").style.opacity = "0";
		document.getElementById("projects").style.zIndex = "0";
  };

function projectsInfo() {
		document.getElementById("dialogue").style.opacity = "0";
		document.getElementById("dialogue").style.zIndex = "0";
    	document.getElementById("projects").style.opacity = "1";
		document.getElementById("projects").style.zIndex = "1";
  };






/* Function to Smoothen the Scroll */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});






/* Type & Delete Effect */

const words = ["designer", "developer", "creator"];
let i = 0;
let timer;

function typingEffect() {
	let word = words[i].split("");
	var loopTyping = function() {
		if (word.length > 0) {
			document.getElementById('word').innerHTML += word.shift();
		} else {
			deletingEffect();
			return false;
		};
		timer = setTimeout(loopTyping, 200);
	};
	loopTyping();
};

function deletingEffect() {
	let word = words[i].split("");
	var loopDeleting = function() {
		if (word.length > 0) {
			word.pop();
			document.getElementById('word').innerHTML = word.join("");
		} else {
			if (words.length > (i + 1)) {
				i++;
			} else {
				i = 0;
			};
			typingEffect();
			return false;
		};
		timer = setTimeout(loopDeleting, 150);
	};
	loopDeleting();
};

typingEffect();
