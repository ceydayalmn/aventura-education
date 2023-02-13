//+33 ile başlayan
fetch('compaines.json')
.then(response => response.json())
.then(compaines => {
    var button = document.getElementById("getDataBtn");
     button.addEventListener ("click",function(){
     for (let i = 0; i < compaines.length; i++) {
       if(compaines[i].companyPhone.startsWith("+33")){
         document.writeln ( compaines[i].companyPhone  + " <br> " + compaines[i].companyName + " <br> " + compaines[i].country + "<br>" +"<br>")
       
        }}})
       
});
//UK US olmayan
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
        document.write("İngiltere’de ve Amerika’da faaliyet göstermeyen toplam " + filteredCompanies.length + " adet şirket vardır." );
      });
  });

// website .com ile biten
fetch('compaines.json')
.then(response => response.json())
.then(compaines => {
    var button=document.getElementById("getDataBtn_3");
    button.addEventListener ("click",function(){

      for (let i = 0; i < compaines.length; i++) {
        if(compaines[i].website.endsWith(".com")){
          document.writeln (  compaines[i].companyName + "<br>"+ compaines[i].website + "<br>"+ "<br>");
         
         }}});

    });

  
// +44 ile başlayanlar ülke bayrağı ve şirket resmi
fetch('compaines.json')
 .then(response => response.json())
   .then(companies => {
     var button=document.getElementById("getDataBtn_4");
     button.addEventListener ("click",function(){
      let filteredCompanies = companies.filter(company => {
            return company.companyPic && company.companyPhone;
           });
           for (let i = 0; i < filteredCompanies.length; i++) {
            if(filteredCompanies[i].companyPhone.startsWith("+44")){
               
                  fetch('countries.json')
                  .then(response => response.json())
                  .then(countries => {
                    let filterCountries=countries.filter(countries=>{
                      return countries.flag
                    });
                    if(filteredCompanies[i].companyPhone.startsWith("+44")){ {
            
                    document.write( `<img src="${filterCountries[238].flag}" width="90" height="60" />  <img src="${filteredCompanies[i].companyPic}"/> <br/> 
                    ${filteredCompanies[i].companyName}<br/>  ${filteredCompanies[i].companyPhone} </br>` +  "<br>");
                    
                }}})}}
              })});








 
  


   
    
  












 
    
 