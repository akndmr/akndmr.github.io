/******************************** CONTACT */
function loadFormHTML() {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      myFunction(this);
    }
  };
  xmlhttp.open("GET", "https://raw.githubusercontent.com/akndmr/project0/master/rest/form.html?token=AO6sk5FQJc2YSqJrgnOr-xso1bHUJXsmks5ZwD6-wA%3D%3D", true);
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
  xmlhttp.open("GET", "https://raw.githubusercontent.com/akndmr/project0/master/rest/experiences.html?token=AO6sk3uNf2OUKeJ9H2ssMW_EefaU-gfCks5ZwDwxwA%3D%3D", true);
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
  xmlhttp.open("GET", "https://git.io/v51VQ", true);
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
  xmlhttp.open("GET", "https://raw.githubusercontent.com/akndmr/project0/master/rest/education.html?token=AO6sk1G8ze7NAQrtwzJYqVPF9UWqhmgvks5ZwD6hwA%3D%3D", true);
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
  xmlhttp.open("GET", "https://raw.githubusercontent.com/akndmr/project0/master/rest/skills.html?token=AO6sk0tdsGlABBLHvXn4tHICq45VRX08ks5ZwD8DwA%3D%3D", true);
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


