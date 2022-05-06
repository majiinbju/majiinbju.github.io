// Create URL for JS Object File
var url = "assets/js/project.json";

// Apppend Project Section

$.getJSON(url, function(data){
	for (let i = 0; i < data.length; i++) {
        $("#title").append(data[i].name);
        $("#description").append(data[i].description);
		var youTube = document.getElementById('link');
        youTube.setAttribute('src', data[i].link);
        }
	});

