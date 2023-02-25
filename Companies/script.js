
const getStartsWith33 =()=>{
  fetch('compaines.json')
.then(response => response.json())
.then(compaines => {
    var button = document.getElementById("getDataBtn");
     button.addEventListener ("click",function(){
      let filteredCompanies = '';
     for (let i = 0; i < compaines.length; i++) {
       if(compaines[i].companyPhone.startsWith("+33")){
        filteredCompanies +=compaines[i].companyPhone  + " <br> " + compaines[i].companyName + " <br> " + compaines[i].country + "<br>" +"<br>"
       
        }}
        document.getElementById('container-div').innerHTML = filteredCompanies;})
       
});
}

getStartsWith33();

const getCompanyData =()=>{
  fetch('compaines.json')
  .then(response => response.json())
  .then(companies => {
    var button = document.getElementById("getDataBtn_2");
    button.addEventListener("click", function() {
      let filteredCompanies = companies.filter(companies => {
        return (
          companies.country !== "United Kingdom" &&
          companies.country !== "United States"
        );
      });     
      document.getElementById("container-div").innerHTML = "İngiltere’de ve Amerika’da faaliyet göstermeyen toplam " + filteredCompanies.length + " adet şirket vardır.";
      });
  });

}

getCompanyData();

const getEndsWithCom =()=>{
  fetch('compaines.json')
.then(response => response.json())
.then(compaines => {
    var button=document.getElementById("getDataBtn_3");
    button.addEventListener ("click",function(){
      let filteredCompanies = '';
      for (let i = 0; i < compaines.length; i++) {
        if(compaines[i].website.endsWith(".com")){
          filteredCompanies+=  compaines[i].companyName + "<br>"+ compaines[i].website + "<br>"+ "<br>";
         
         }}
         document.getElementById('container-div').innerHTML = filteredCompanies;
        });

    });
}

getEndsWithCom();
  
const getStartsWith44 =()=>{
  fetch('compaines.json')
  .then(response => response.json())
    .then(companies => {
      var button=document.getElementById("getDataBtn_4");
      button.addEventListener ("click",function(){
       let filteredCompanies = companies.filter(company => {
             return company.companyPic && company.companyPhone;
            });
            document.getElementById('container-div').innerHTML = '';
            for (let i = 0; i < filteredCompanies.length; i++) {
             if(filteredCompanies[i].companyPhone.startsWith("+44")){
                
                   fetch('countries.json')
                   .then(response => response.json())
                   .then(countries => {
                     let filterCountries=countries.filter(countries=>{
                       return countries.flag
                     });
                     if(filteredCompanies[i].companyPhone.startsWith("+44")){ {
             
                       let flag = filterCountries[238].flag;
                       let companyElement = document.createElement('div');
                       companyElement.innerHTML = `<img src="${flag}" width="90" height="60" />  <img src="${filteredCompanies[i].companyPic}"/> <br/> ${filteredCompanies[i].companyName}<br/>  ${filteredCompanies[i].companyPhone} </br><br>`;
                       document.getElementById('container-div').appendChild(companyElement);
                     
                 }}})}}
               })});
 
}

getStartsWith44();







 
  


   
    
  












 
    
 