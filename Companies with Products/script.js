
//Tüm ürünler
var button= document.getElementById("getDataBtn");
button.addEventListener("click",function(){
    var products=getProducts();
    document.getElementById('container-div').innerHTML= " ";
    for(let i = 0 ; i < products.length ; i++ ){
        document.getElementById('container-div').innerHTML += products[i].productName + "<br>"

    }    
})

//Artan fiyat
var button = document.getElementById("getDataBtn2");
button.addEventListener("click",function(){
    var products=getProducts();
    document.getElementById('container-div').innerHTML= " ";
    for(let i =0; i < products.length ; i++){
        products.sort(function(a,b){
            return (a.productPrice.slice(1))-(b.productPrice.slice(1))
        }
        
        )
        document.getElementById('container-div').innerHTML += products[i].productPrice + "<br>"

    }
})

//Azalan fiyat
var button = document.getElementById("getDataBtn3");
button.addEventListener("click",function(){
    var products=getProducts();
    document.getElementById('container-div').innerHTML= " ";
    for(let i =0; i < products.length ; i++){
        products.sort(function(a,b){
            return (b.productPrice.slice(1))-(a.productPrice.slice(1))
        }
        
        )
        document.getElementById('container-div').innerHTML += products[i].productPrice + "<br>"

    }
})
//Ürün Adları a-z

var button=document.getElementById("getDataBtn4");
button.addEventListener("click",function(){
    var  products=getProducts();
    document.getElementById('container-div').innerHTML= " ";
    for (let i =0; i< products.length ; i++){
        products.sort(function(a,b){
            return a.productName.localeCompare(b.productName);
        })
        document.getElementById('container-div').innerHTML += products[i].productName+ "<br>"

    }
})
//Ürün adları z-a
var button=document.getElementById("getDataBtn5");
button.addEventListener("click",function(){
    var  products=getProducts();
    document.getElementById('container-div').innerHTML= " ";
    for (let i =0; i< products.length ; i++){
        products.sort(function(a,b){
            return b.productName.localeCompare(a.productName);
        })
        document.getElementById('container-div').innerHTML += products[i].productName+ "<br>"

    }
})
//Dropdown ile CompanyName çekme
var button=document.getElementById("getDataBtn6");
button.addEventListener("click",function(){
    document.getElementById('container-div').innerHTML= " ";
    let select = document.createElement('select');
    var companies=getCompanies();
    companies.forEach(companies => {
        const option=document.createElement('option');
        option.value=companies.id;
        option.text=companies.companyName;
        //createElement ile oluşturulan bi elementi html syafasına eklemek için appenchild kullanılır.
        select.appendChild(option);
    });
   document.getElementById('container-div').appendChild(select);
   
   });



