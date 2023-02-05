//İngilizce kullanan
var button = document.getElementById("showEnglish");
var div = document.getElementById("English");
var h2Elements = [];

button.addEventListener("click", function () {
  var countries = getCountries();
  h2Elements.forEach((h2) => {
    div.removeChild(h2);
  });
  h2Elements = [];

  countries.forEach((country) => {
    if (country.languages.includes("English")) {
      var para = document.createElement("h2");
      para.textContent = country.name;
      div.appendChild(para);
      h2Elements.push(para);

    }
  });
});

// euro pound kullanan

var div = document.getElementById("euro_pound");
var button = document.getElementById("show_countries_button");
var h2Elements = [];



button.addEventListener("click", function () {

  euro_pound();
});


function euro_pound() {
  var countries = getCountries();

  h2Elements.forEach((h2) => {
    div.removeChild(h2);
  });
  h2Elements = [];


  countries.forEach((country) => {
    if (country.currency.includes("euro") || country.currency.includes("pound")) {
      var para = document.createElement("h2");
      para.textContent = country.name;
      div.appendChild(para);
      h2Elements.push(para);

    }
  });
}

//en düşük popülasyona sahip
var div = document.getElementById("least_ten");
var h2Elements = [];

function leastTen() {
  var countries = getCountries();

  countries.sort((a, b) => a.population - b.population);

  var leastTen = countries.slice(0, 10);

  h2Elements.forEach((h2) => {
    div.removeChild(h2);
  });
  h2Elements = [];

  leastTen.forEach((country) => {
    var para = document.createElement("h2");
    para.textContent = country.name + " - Population: " + country.population;
    div.appendChild(para);
    h2Elements.push(para);
  });
}

document.getElementById("show_least_ten").addEventListener("click", leastTen);
//en yüksek popülasyona sahip

var div = document.getElementById("top_ten");
var h2Elements = [];

function topTen() {
  var countries = getCountries();

  countries.sort((a, b) => b.population - a.population);

  var topTen = countries.slice(0, 10);

  h2Elements.forEach((h2) => {
    div.removeChild(h2);
  });
  h2Elements = [];


  topTen.forEach((country) => {
    var para = document.createElement("h2");
    para.textContent = country.name + " - Population: " + country.population;
    div.appendChild(para);
    h2Elements.push(para);

  });
}

document.getElementById("show_top_ten").addEventListener("click", topTen);



