/* About Me + Projects */

var container = document.getElementById("container");

function aboutMe() {
  document.getElementById("about").style.opacity = "1";
  document.getElementById("projects").style.opacity = "0";
}

function projectsInfo() {
  document.getElementById("about").style.opacity = "0";
  document.getElementById("projects").style.opacity = "1";
}

/* Function to Smoothen the Scroll */

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

/* Type & Delete Effect */

const words = ["Designer", "Developer", "Organisational Thinker"];
let i = 0;
let timer;

function typingEffect() {
  let word = words[i].split("");
  var loopTyping = function () {
    if (word.length > 0) {
      document.getElementById("word").innerHTML += word.shift();
    } else {
      deletingEffect();
      return false;
    }
    timer = setTimeout(loopTyping, 300);
  };
  loopTyping();
}

function deletingEffect() {
  let word = words[i].split("");
  var loopDeleting = function () {
    if (word.length > 0) {
      word.pop();
      document.getElementById("word").innerHTML = word.join("");
    } else {
      if (words.length > i + 1) {
        i++;
      } else {
        i = 0;
      }
      typingEffect();
      return false;
    }
    timer = setTimeout(loopDeleting, 150);
  };
  loopDeleting();
}

typingEffect();
