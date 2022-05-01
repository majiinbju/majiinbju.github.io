// Parsing About Section
const about = document.getElementById('about');
console.log(about);

// Create URL for JS Object File
var url = "about.json";

// Append JSON for Resume section
$.getJSON(url, function(data){
	for (let i = 0; i < data.aboutMe.length; i++) {
		var myArticle = document.createElement('article');
        $("#resume").append(myArticle);
        myArticle.setAttribute('id','article' + aboutIndex);
		$("#article"+ aboutIndex).append("<h1>" + data.aboutMe[i].header + "</h1>")
		const aboutTraits = data.aboutMe[i].traits;
        for (let j = 0; j < aboutTraits.length; j++) {
        $("#article"+ aboutIndex).append("<li>" + data.aboutMe[i].traits[j] + "</li>");
        		}
			}
		}
	);

// Append JSON for Projects section
$.getJSON(url, function(data){
	for (let i = 0; i < data.projects.length; i++) {
		var myProject = document.createElement('article');
		const projectIndex = data.projects[i].index;
        $("#projects").append(myProject);
        myProject.setAttribute('id','project-' + projectIndex);
		var projectImgBox = document.createElement('div');
		$('#project-' + projectIndex).append(projectImgBox);
		projectImgBox.className = "imgBox";
		var projectTitleBox = document.createElement('div');
		$('#project-' + projectIndex).append(projectTitleBox);
		projectImgBox.setAttribute('id', 'img-' + projectIndex);
		$("#img-"+ projectIndex).append("<img src='img/" + data.projects[i].img + "'>");
		// var projectTitle = document.createElement('span');
		// projectTitle.append(data.projects[i].name);
		// projectTitleBox.append(projectTitle);
		// projectTitleBox.className = "titleBox";
			}
		}
	);


/* Information Highlight */




/* About Me + Projects */
var container = document.getElementById("container");

function aboutMe() {
		document.getElementById("dialogue").style.opacity = "1";
		document.getElementById("dialogue").style.zIndex = "1";
    	document.getElementById("projects").style.opacity = "0";
		document.getElementById("projects").style.zIndex = "0";
		document.getElementById("resume").style.opacity = "0";
		document.getElementById("resume").style.zIndex = "0";
  };

function projectsInfo() {
		document.getElementById("dialogue").style.opacity = "0";
		document.getElementById("dialogue").style.zIndex = "0";
		document.getElementById("resume").style.opacity = "0";
		document.getElementById("resume").style.zIndex = "0";
    	document.getElementById("projects").style.opacity = "1";
		document.getElementById("projects").style.zIndex = "1";
  };

function resumeInfo() {
	document.getElementById("dialogue").style.opacity = "-1";
	document.getElementById("dialogue").style.zIndex = "-1";
	document.getElementById("projects").style.opacity = "-1";
	document.getElementById("projects").style.zIndex = "-1";
	document.getElementById("resume").style.opacity = "1";
	document.getElementById("resume").style.zIndex = "1";
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


const words = ["designer", "developer", "storyteller"];
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
