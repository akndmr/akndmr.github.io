/******************************** CONTACT */
function loadFormHTML() {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      myFunction(this);
    }
  };
  xmlhttp.open("GET", "https://gist.githubusercontent.com/akndmr/e88aad3398bfc2a82d9396368bd31abb/raw/ba4e9453d1078ce822460f8f10aa538d13c516f6/form.html", true);
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
  xmlhttp.open("GET", "https://gist.githubusercontent.com/akndmr/81fbb5f213ce5b90428456e8c4dca4c0/raw/3a7e303b6b481ba2683207bd60d84a3db54cd37c/experiences.html", true);
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
  xmlhttp.open("GET", "https://gist.githubusercontent.com/akndmr/2f89333cd2be5c96b9ca36182aac4401/raw/5bf24cf83144d084cbf461609f5cdb013c1db590/projects.html", true);
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
  xmlhttp.open("GET", "https://raw.githubusercontent.com/akndmr/project0/master/rest/hobbies.html?token=AO6skyqlBKTNcbJXwwi1e8VtCk46bOFdks5ZwD7XwA%3D%3D", true);
  xmlhttp.send();
}

function myFunction(xhr) {
  formHTML = xhr.responseText;
  document.getElementById("main").innerHTML = formHTML;
}


