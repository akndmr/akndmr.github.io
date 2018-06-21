/******************************** CONTACT */
function loadFormHTML() {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      myFunction(this);
    }
  };
  xmlhttp.open("GET", "https://gist.githubusercontent.com/akndmr/e88aad3398bfc2a82d9396368bd31abb/raw/fbb12014a2b71d188d470ab64633191dac34b4bc/form.html", true);
  xmlhttp.send();
}

function myFunction(xhr) {
  formHTML = xhr.responseText;
  document.getElementById("main").innerHTML = formHTML;
}

/******************************** EXPERIENCES */
function loadExperiencesHTML() {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      myFunction(this);
    }
  };
  xmlhttp.open("GET", "https://gist.githubusercontent.com/akndmr/81fbb5f213ce5b90428456e8c4dca4c0/raw/a1df654d27e882735d32f38e5160bb0350176d75/experiences.html", true);
  xmlhttp.send();
}

function myFunction(xhr) {
  formHTML = xhr.responseText;
  document.getElementById("main").innerHTML = formHTML;
}

/******************************** PROJECTS */
function loadProjectsHTML() {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      myFunction(this);
    }
  };
  xmlhttp.open("GET", "https://gist.githubusercontent.com/akndmr/2f89333cd2be5c96b9ca36182aac4401/raw/26500f6e14854d05f70a7d096da22ac457459a8a/projects.html", true);
  xmlhttp.send();
}

function myFunction(xhr) {
  formHTML = xhr.responseText;
  document.getElementById("main").innerHTML = formHTML;
}


/******************************** EDUCATION */
function loadEducationHTML() {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      myFunction(this);
    }
  };
  xmlhttp.open("GET", "https://gist.githubusercontent.com/akndmr/e860aae9dc9eb462aac007934a811fac/raw/3f8b09633d480d1299ea56ae681927290b752ff7/education.html", true);
  xmlhttp.send();
}

function myFunction(xhr) {
  formHTML = xhr.responseText;
  document.getElementById("main").innerHTML = formHTML;
}

/******************************** SKILLS */
function loadSkillsHTML() {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      myFunction(this);
    }
  };
  xmlhttp.open("GET", "https://gist.githubusercontent.com/akndmr/b867c3db66c0a835950ea4db9cdfd831/raw/ffc887a8a5b4364df4285d141488a5fd8532c416/skills.html", true);
  xmlhttp.send();
}

function myFunction(xhr) {
  formHTML = xhr.responseText;
  document.getElementById("main").innerHTML = formHTML;
}

/******************************** HOBBIES */
function loadHobbiesHTML() {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      myFunction(this);
    }
  };
  xmlhttp.open("GET", "https://gist.githubusercontent.com/akndmr/8424cca81c216914eb7ad35d3e2400f7/raw/95bcd0b03887c0581931d9c6796503bc35d737c8/hobbies.html", true);
  xmlhttp.send();
}

function myFunction(xhr) {
  formHTML = xhr.responseText;
  document.getElementById("main").innerHTML = formHTML;
}

/******************************** SWEET-ALERT */
function noPlayStoreYet() {
  swal({
				  title: 'Hey there!',
				  text: 'Sorry, I\'ll add Play Store account soon!'
				});
} 

function noResumeYet() {
  swal({
				  title: 'Hey there!',
				  text: 'Sorry, I\'ll attach my resume soon!'
				});
} 
