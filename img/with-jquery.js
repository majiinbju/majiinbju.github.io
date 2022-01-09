const section = document.querySelector('section');

// Create URL for JS Object File
var url = "json.json";

// Append JSON for Header
$.getJSON(url, function(data){
        $("#header").append("<h1>" + data.groupName + "</h1>")
        $("#header").append("<h2>" + data.stadium + "</h2>")
})


// Append JSON for Players
$.getJSON(url, function(data){
    for (let i = 0; i < data.players.length; i++) {
        const myArticle = document.createElement('article');
        section.appendChild(myArticle);
        const playerIndex = data.players[i].index;
        myArticle.setAttribute('id','article' + playerIndex);
        $("#article"+ playerIndex).append("<h2>" + data.players[i].name+ "</h2>");
        var imageLog = $("#article"+ playerIndex).append("<img src='" + data.players[i].img + "'>");

    }
})


// Append Image
// $("#app").append("<div class='aclass'><div>new class</div><img src='" + data.chapter4[i].image + "' ></div> ")