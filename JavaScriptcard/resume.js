function loadjson(file) {
  return new Promise((resolve, reject) => {
    return fetch(file).then((response) => {
      if (response.ok) {
        resolve(response.json());
      } else {
        reject(new Error("error"));
      }
    });
  });
}

var newfile = loadjson("data.json").then((data) => {
  details(data.details);
  careerobjective(data.careerobjective);
  education(data.educationalqualifications);
  skills(data.technicalskills);
  personalcompetencies(data.personalcompetencies);
  Achievements(data.Achievements);
  languages(data.languages);
  interests(data.interests);
});

var main = document.querySelector(".main");
main.setAttribute(
  "style",
  "color:#FFFFFF80;font-weight:600; @media screen and (max-width:420px){font-size: 13px;}"
);
var section1 = document.querySelector(".section1");
section1.setAttribute("class", "col-md-5");

var section2 = document.querySelector(".section2");

section2.setAttribute("class", "col-md-7 bg-dark");

function details(det) {
  var img = document.createElement("img");
  img.src = det.image2;
  img.setAttribute("style", "width:270px;");

  img.setAttribute("class", "rounded-circle img-fluid mb-3 mt-5");

  section1.appendChild(img);

  var table = document.createElement("table");
  table.setAttribute(
    "class",
    "table table-striped table-hover table-responsive"
  );

  var tbody = document.createElement("tbody");
  var tr1 = document.createElement("tr");
  var td1 = document.createElement("th");
  var td2 = document.createElement("td");
  td1.textContent = "Address";
  td2.textContent = det.address;
  tr1.appendChild(td1);
  tr1.appendChild(td2);

  tbody.appendChild(tr1);

  var tr2 = document.createElement("tr");
  var td3 = document.createElement("th");
  var td4 = document.createElement("td");
  td3.textContent = "Date of Birth";
  td4.textContent = det.dob;
  tr2.appendChild(td3);
  tr2.appendChild(td4);
  tr2.setAttribute("class", "table-success");

  tbody.appendChild(tr2);

  var tr3 = document.createElement("tr");
  var td5 = document.createElement("th");
  var td6 = document.createElement("td");
  td5.textContent = "Marital Status";
  td6.textContent = det.maritalstatus;
  tr3.appendChild(td5);
  tr3.appendChild(td6);

  tbody.appendChild(tr3);

  var tr4 = document.createElement("tr");
  var td7 = document.createElement("th");
  var td8 = document.createElement("td");
  td7.textContent = "Nationality";
  td8.textContent = det.Nationality;
  tr4.appendChild(td7);
  tr4.appendChild(td8);
  tr4.setAttribute("class", "table-success");

  tbody.appendChild(tr4);

  var tr5 = document.createElement("tr");
  var td9 = document.createElement("th");
  var td10 = document.createElement("td");
  td9.textContent = "Gmail";
  td10.textContent = det.email;
  tr5.appendChild(td9);
  tr5.appendChild(td10);

  tbody.appendChild(tr5);

  var tr6 = document.createElement("tr");
  var td11 = document.createElement("th");
  var td12 = document.createElement("td");
  td11.textContent = "Git Hub";
  var link = document.createElement("a");
  link.href = "https://github.com/sivarajesh-gudala";
  link.textContent = "My Github";
  td12.appendChild(link);
  tr6.appendChild(td11);
  tr6.appendChild(td12);
  tr6.setAttribute("class", "table-success");

  tbody.appendChild(tr6);

  tbody.setAttribute("class", "table-bordered border-dark");

  table.appendChild(tbody);
  section1.appendChild(table);
}

function careerobjective(obj) {
  var heading = document.createElement("h6");
  heading.textContent = "CAREER OBJECTIVE";
  heading.setAttribute("class", "mt-5 text-light text-justify");
  section2.appendChild(heading);

  var objective = document.createElement("p");
  objective.textContent = obj.info;
  section2.appendChild(objective);
}

function education(edu) {
  var heading2 = document.createElement("h6");
  heading2.textContent = "EDUCATION QUALIFICATIONS";
  heading2.setAttribute("class", "mt-5 text-light text-justify");

  section2.appendChild(heading2);

  var table1 = document.createElement("table");
  table1.setAttribute("id", "educationtable");
  table1.setAttribute(
    "class",
    "table table-striped table-responsive text-white-50"
  );

  section2.appendChild(table1);

  tabledata = "";

  for (i = 0; i < edu.length; i++) {
    tabledata +=
      "<tbody><tr><td>" +
      edu[i].institute +
      "</td><td>" +
      edu[i].degree +
      "</td><td>" +
      edu[i].passoutyear +
      "</td><td>" +
      edu[i].Percentage +
      "</td></tr></tbody>";
  }
  table1.innerHTML = tabledata;
}

function skills(skillinfo) {
  var heading3 = document.createElement("h6");
  heading3.textContent = "SKILLS";
  heading3.setAttribute("class", "text-light text-justify mt-5");
  section2.appendChild(heading3);

  for (i = 0; i < skillinfo.length; i++) {
    var ul = document.createElement("ul");
    var li = document.createElement("li");
    var li2 = document.createElement("li");
    var li3 = document.createElement("li");
    var li4 = document.createElement("li");
    var li5 = document.createElement("li");
    var li6 = document.createElement("li");

    li.textContent = skillinfo[i].skill1;
    li2.textContent = skillinfo[i].skill2;
    li3.textContent = skillinfo[i].skill3;
    li4.textContent = skillinfo[i].skill4;
    li5.textContent = skillinfo[i].skill5;
    li6.textContent = skillinfo[i].skill6;

    ul.appendChild(li);
    ul.appendChild(li2);
    ul.appendChild(li3);
    ul.appendChild(li4);
    ul.appendChild(li5);
    ul.appendChild(li6);
    section2.appendChild(ul);
  }
}

function personalcompetencies(per) {
  var heading4 = document.createElement("h6");
  heading4.textContent = "PERSONAL COMPETENCIES";
  heading4.setAttribute("class", "text-light text-justify mt-5");

  section2.appendChild(heading4);
  var ulpersonal = document.createElement("ul");
  var lipersonal = document.createElement("li");
  var li2personal = document.createElement("li");
  var li3personal = document.createElement("li");

  lipersonal.textContent = per.competence1;
  li2personal.textContent = per.competence2;
  li3personal.textContent = per.competence3;
  ulpersonal.appendChild(lipersonal);
  ulpersonal.appendChild(li2personal);
  ulpersonal.appendChild(li3personal);
  section2.appendChild(ulpersonal);
}

function Achievements(achieve) {
  var heading5 = document.createElement("h6");
  heading5.textContent = "ACHIEVEMENTS";
  heading5.setAttribute("class", "mt-5 text-light text-justify");

  section2.appendChild(heading5);

  var ullist = document.createElement("ul");
  var lione = document.createElement("li");
  var litwo = document.createElement("li");
  var lithree = document.createElement("li");
  lione.textContent = achieve.one;
  litwo.textContent = achieve.two;
  lithree.textContent = achieve.three;
  ullist.appendChild(lione);
  ullist.appendChild(litwo);
  ullist.appendChild(lithree);

  section2.appendChild(ullist);
}

function languages(lang) {
  var heading6 = document.createElement("h6");
  heading6.textContent = "LANGUAGES KNOWN";
  heading6.setAttribute("class", "mt-5 text-light text-justify");

  section2.appendChild(heading6);

  var ullang = document.createElement("ul");
  var langone = document.createElement("li");
  var langtwo = document.createElement("li");
  var langthree = document.createElement("li");
  langone.textContent = lang.first;
  langtwo.textContent = lang.second;
  langthree.textContent = lang.third;
  ullang.appendChild(langone);
  ullang.appendChild(langtwo);
  ullang.appendChild(langthree);

  section2.appendChild(ullang);
}

function interests(interest) {
  var heading7 = document.createElement("h6");
  heading7.textContent = "INTERESTS";
  heading7.setAttribute("class", "mt-5 text-light text-justify");
  section2.appendChild(heading7);

  var ulintrst = document.createElement("ul");
  var intrstone = document.createElement("li");
  var intrsttwo = document.createElement("li");
  intrstone.textContent = interest.one;
  intrsttwo.textContent = interest.two;
  ulintrst.appendChild(intrstone);
  ulintrst.appendChild(intrsttwo);

  section2.appendChild(ulintrst);
}
