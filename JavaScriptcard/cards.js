var navbar = document.querySelector("#nav");

navbar.setAttribute("class", "navbar sticky-top navbar-expand-lg  navbar-dark");
navbar.setAttribute("style","background-color:#563d7c;")

var navbarbrand = document.createElement("a");
navbarbrand.textContent = "home";
navbarbrand.setAttribute("class", "navbar-brand text-capitalize text-white-50");
navbar.appendChild(navbarbrand);

var liststart = document.createElement("ul");

liststart.setAttribute("class", "navbar-nav");

var listelement1 = document.createElement("li");
listelement1.setAttribute("class", "nav-item");

var listelement2 = document.createElement("li");
listelement2.setAttribute("class", "nav-item");

listelement1.innerHTML = '<a href="#AboutUS" class="nav-link text-light">About Us</a>';
listelement2.innerHTML = '<a href="#CONTACT" class="nav-link text-light">Contact</a>';
liststart.appendChild(listelement1);
liststart.appendChild(listelement2);

navbar.appendChild(liststart);

function loadjson(file) {
  return new Promise((resolve, reject) => {
    return fetch(file).then((response) => {
      if (response.ok) {
        resolve(response.json());
        console.log(response);
      } else {
        reject(new Error("error"));
      }
    });
  });
}

var newfile = loadjson("data.json").then((data) => {
  details(data.details);
});

var parent = document.querySelector(".ParentCard");
parent.setAttribute("class", "container");


var childcard1 = document.querySelector(".childcard1");
childcard1.setAttribute("class", "card bg-primary border-dark text-light");
childcard1.setAttribute("style", "width:18rem;margin:10%;");

var cardbody = document.querySelector("#cardbody");
cardbody.setAttribute("class","text-center");

var cardbody2 = document.querySelector("#cardbody2");
cardbody2.setAttribute("class","text-center")

var childcard2 = document.querySelector(".childcard2");
childcard2.setAttribute("class", "card bg-dark border-primary text-success");
childcard2.setAttribute("style", "width:18rem;margin:10%;");

var section = document.querySelector(".section");

function details(info) {
  //card ---> 1

  var image1 = document.createElement("img");
  image1.src = info.image;
  image1.setAttribute("class", "card-img-top");
  childcard1.appendChild(image1);

  var heading1 = document.createElement("h3");
  heading1.textContent = info.name;
  heading1.setAttribute("class", "card-title text-capitalize");
  cardbody.appendChild(heading1);

  var phonenumber1 = document.createElement("h6");
  phonenumber1.textContent = info.phonenumber;
  phonenumber1.setAttribute("class", "card-text");

  cardbody.appendChild(phonenumber1);

  var mail = document.createElement("a");
  mail.href = "mailto:someone@example.com";
  mail.textContent = info.email;
  mail.setAttribute("class", "card-link text-white");

  cardbody.appendChild(mail);

  var card1btn = document.createElement("button");
  card1btn.innerHTML = "Submit";
  card1btn.setAttribute("class", "btn btn-dark mt-2");

  cardbody.appendChild(card1btn);

  var h1 = document.createElement("h6");
  h1.textContent = "for Static Resume";
  h1.setAttribute(
    "class",
    "card-text text-center text-capitalize text-dark mt-2"
  );

  cardbody.appendChild(h1);

  childcard1.appendChild(cardbody);

  card1btn.addEventListener("click", function () {
    location = "resume.html"; // Navigate to resume page
  });

  //card ---> 2

  var image2 = document.createElement("img");
  image2.src = info.image1;
  image2.setAttribute("class", "card-img-top");
  childcard2.appendChild(image2);

  var heading2 = document.createElement("h3");
  heading2.textContent = info.name;
  heading2.setAttribute("class", "card-title text-capitalize");

  cardbody2.appendChild(heading2);

  var phonenumber2 = document.createElement("h6");
  phonenumber2.textContent = info.phonenumber;
  phonenumber2.setAttribute("class", "card-text");

  cardbody2.appendChild(phonenumber2);

  var mail2 = document.createElement("a");
  mail2.href = "mailto:someone@example.com";
  mail2.textContent = info.email;
  mail2.setAttribute("class", "card-link text-success");

  cardbody2.appendChild(mail2);

  var card2btn = document.createElement("button");
  card2btn.innerHTML = "Submit";
  card2btn.href = "resume.html";
  card2btn.setAttribute("class", "btn btn-success mt-2");

  cardbody2.appendChild(card2btn);

  var h3 = document.createElement("h6");
  h3.textContent = "for dynamic Resume";
  h3.setAttribute(
    "class",
    "card-text text-center text-capitalize text-white-50 mt-2"
  );

  cardbody2.appendChild(h3);

  childcard2.appendChild(cardbody2);

  card2btn.addEventListener("click", function () {
    // Navigate to dynamic resume page
    location = "dynamicresume.html";
  });
}
