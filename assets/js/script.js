// Create URL for JS Object File
var url = "/assets/js/about.json";

// Append JSON for About Me section

$.getJSON(url, function(data){
	for (let i = 0; i < data.aboutMe.length; i++) {
		var myArticle = document.createElement('ul');
        $("#aboutJosh").append(myArticle);
		const aboutIndex = data.aboutMe[i].index;
        myArticle.setAttribute('id','ul' + aboutIndex);
		$("#ul"+ aboutIndex).append("<h1>" + data.aboutMe[i].header + "</h1>")
		const aboutTraits = data.aboutMe[i].traits;
        for (let j = 0; j < aboutTraits.length; j++) {
        $("#ul"+ aboutIndex).append("<li>" + data.aboutMe[i].traits[j] + "</li>");
        		}
			}
		}
	);

// Append JSON for Projects section

$.getJSON(url, function(data){
	for (let i = 0; i < data.projects.length; i++) {
		var myProject = document.createElement('li');
		const projectIndex = data.projects[i].index;
        $("#projects").append(myProject);
        myProject.setAttribute('id','project-' + projectIndex);
		var projectImgBox = document.createElement('figure');
		$('#project-' + projectIndex).append(projectImgBox);
		projectImgBox.className = "imgBox";
		projectImgBox.setAttribute('id', 'img-' + projectIndex);
		$("#img-"+ projectIndex).append("<a href=" + data.projects[i].link + "><img src=/assets/img/" + data.projects[i].img + '>');
		var captionBox = document.createElement('div');
		captionBox.setAttribute('id', 'title-' + projectIndex);
		captionBox.className = "captionBox";
		$("#img-"+ projectIndex).append(captionBox);
		$("#title-" + projectIndex).append("<figcaption>" + data.projects[i].name + "</figcaption>");
		$("#title-" + projectIndex).append("<figcaption class='year'>" + data.projects[i].year + "</figcaption>");
		// captionBox.append()
		// $("#img-"+ projectIndex).append("<figcaption id='title-" + projectIndex + "'>" + data.projects[i].name + "</figcaption>")
			}
		}
	);


/* Viewport Function */

var container = document.getElementById("container");

function aboutMe() {
		document.getElementById("aboutJosh").style.opacity = "1";
		document.getElementById("aboutJosh").style.zIndex = "1";
    	document.getElementById("projects").style.opacity = "0";
		document.getElementById("projects").style.zIndex = "0";
  };

function projectsInfo() {
		document.getElementById("aboutJosh").style.opacity = "0";
		document.getElementById("aboutJosh").style.zIndex = "0";
    	document.getElementById("projects").style.opacity = "1";
		document.getElementById("projects").style.zIndex = "0";
  };
