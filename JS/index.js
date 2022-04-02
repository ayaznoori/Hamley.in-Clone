function myFunction(x) {
    if (x.matches ) { // If media query matches
      document.querySelector("#loginm").innerText="";
      document.querySelector("#bagm").innerText="";
      document.querySelector("#wishlistm").innerText="";
      document.querySelector("#trackm").innerText="";
      var bag=document.querySelector("#nav_center");
       document.querySelector("#nav-bar").append(bag);
      document.querySelector("#search").style.width="600px";
    }  
  }
  var x = window.matchMedia("(max-width: 761px)")
  myFunction(x) // Call listener function at run time
  x.addListener(myFunction);
  
  

  
  
  
      var obj=[{ 
          img:"https://hamleysgumlet.gumlet.io/product/491902369/665/491902369-1.jpg" ,
          probrand: "Sparkle Girlz",
          proname:"Sparkle Girlz Playset- Assorted Dolls & Accessories for age 3Y+",
          price: 899.00,
          strprice: 1199.00 ,
          itemcode: 12250,
          color: "red",
          agegroup:"3Y+" ,
          gender:"Girls" ,
          itemcat:"Dolls & Accessories" ,
          itemdis:"ZURU Sparkle Girlz Lifestyle Doll sets lets any child dream of their first real job | Take baby to the park, watch a..." },
          { 
          img:"https://hamleysgumlet.gumlet.io/product/491489816/665/491489816.jpg" ,
          probrand: "Milkor",
          proname:"Miko 2 My Companion Robot - Red Robotics for Kids age 5Y+ (Red)",
          price: 17499.00 ,
          strprice: 24999.00 ,
          itemcode: 12253,
          color: "yellow",
          agegroup:"5Y+" ,
          gender:"Unisex" ,
          itemcat:"Robotics" ,
          itemdis:"Provide your kids with a friend they can rely on. Miko 2 personal robot is loaded with academic topics, news..." },
          { 
          img:"https://hamleysgumlet.gumlet.io/product/491602358/665/491602358.jpg" ,
          probrand: "Sirius Toys",
          proname:"Sirius Toys Hover Blast 3 in 1 Air, Land and Sea Drone Remote Control Toys for Kids age 8Y+",
          price: 4399.00,
           strprice: 5499.00,
           itemcode: 12261,
           color: "red",
          agegroup:"8Y+" ,
          gender:"Unisex" ,
          itemcat:"Remote Control Toys" ,
          itemdis:"This intelligent drone takes you across air, land and sea for the ultimate ride. Its 6 axis gyro stability and speed..." },
          { 
          img:"https://hamleysgumlet.gumlet.io/product/491603884/665/491603884-1.jpg" ,
          probrand: "Hamleys",
          proname:"Hamleys Foosball Table Football Game 69 Cms Indoor Sports for Kids Age 3Y+",
          price: 3999.00,
          strprice: 4499.00 ,
          itemcode: 12265,
          color: "green",
          agegroup:"3Y+" ,
          gender:"Unisex" ,
          itemcat:"Indoor Sports" ,
          itemdis:"The Football Table is perfect for any indoor amusement between family, friends and colleagues. It features wood..." },
          { 
          img:"https://hamleysgumlet.gumlet.io/product/491160389/665/491160389.jpg" ,
          probrand: "Rastar",
          proname:"Go Discover Interactive Early Learning Smart Book Learning Toys for Kids Age 2Y+",
          price: 3199.0,
          strprice:3199.00 ,
          itemcode: 12690,
          color: "blue",
          agegroup:"2Y+" ,
          gender:"Unisex" ,
          itemcat:"Learning Toys" ,
          itemdis:"ZURU Sparkle Girlz Lifestyle Doll sets lets any child dream of their first real job | Take baby to the park, watch a..." },
          { 
          img:"https://hamleysgumlet.gumlet.io/product/491396589/665/491396589-1.webp" ,
          probrand: "LEGO",
          proname:"LEGO Technic Bugatti Chiron 42083 Car Model",
          price: 1899.00,
          strprice: 1199.00 ,
          itemcode: 65250,
          color: "red",
          agegroup:"16Y+" ,
          gender:"Unisex" ,
          itemcat:"Lego Blocks" ,
          itemdis:"ZURU Sparkle Girlz Lifestyle Doll sets lets any child dream of their first real job | Take baby to the park, watch a..." } 
      ]
       obj.map(function(elem){
            var bag=document.createElement("div");
            var heart=document.createElement("div");
            heart.innerHTML="&hearts;";
            heart.setAttribute("id","heart");
            heart.addEventListener("click",addtowhishfun);
            var img=document.createElement("img");
            img.src=elem.img;
            img.style.width="240px";
            var title=document.createElement("h4");
            title.innerText=elem.proname.substring(0,52)+"...";
            title.style.fontWeight="bold";
            title.style.fontFamily="poppins"
            var pricediv=document.createElement("div");
            var strprice=document.createElement("div");
            strprice.innerHTML="&#8377;"+ elem.strprice;
            strprice.style.textDecoration="line-through"
            var price=document.createElement("div");
             price.innerHTML="&#8377;"+elem.price;
             price.style.color="red";
             var addtobag=document.createElement("div");
            var symbol=document.createElement("i");
            symbol.setAttribute("class","fa fa-bag-shopping");
             symbol.style.color="red"
            addtobag.innerText="Add to bag";
            addtobag.append(symbol);
            addtobag.setAttribute("id","addtobag");
            addtobag.addEventListener("click",addtobagfun)
            pricediv.append(strprice,price,addtobag);
            bag.append(heart,img,title,pricediv);
            document.querySelector("#trending_cotainer").append(bag);
           
            
            function addtobagfun(){
                if(localStorage.getItem("success")==1){
              var bagitem1=JSON.parse(localStorage.getItem("bagitem"))||[];
                 bagitem1.push(elem);
                 localStorage.setItem("bagitem",JSON.stringify(bagitem1));
                 alert("Item Added to Bag Successfully ");
                 window.location.reload();
                }
                else
                window.location.href="login.html";
            }         
            
           function addtowhishfun(){
              if(localStorage.getItem("success")==1){
                var bagitem2=JSON.parse(localStorage.getItem("wishlist"))||[];
                bagitem2.push(elem);
                localStorage.setItem("wishlist",JSON.stringify(bagitem2));
                alert("Item Added to Wishlist Successfully ");
                window.location.reload();
                }
              else
              {
                  window.location.href="login.html";
              }
               
           }
    
                 
           
           
       })
    
       if(localStorage.getItem("success")==1 && !x.matches){
           var bag=document.querySelector("#loginpage").innerText="";
           logdiv=document.createElement("div");
           img=document.createElement("img");
           img.src="assest/img/teddy.png";
           img.style.width="20px";
           var acc=document.createElement("a");
           acc.href="index.html";
           acc.innerText="Account";
           logdiv.append(img,acc);
           document.querySelector("#loginpage").append(logdiv);
          }
      
  
   
      var slideIndex = 1;
      showDivs(slideIndex);
      
      function plusDivs(n) {
        showDivs(slideIndex += n);
      }
      
      function currentDiv(n) {
        showDivs(slideIndex = n);
      }
      
      function showDivs(n) {
        var i;
        var x = document.getElementsByClassName("mySlides");
        var dots = document.getElementsByClassName("demo");
        if (n > x.length) {slideIndex = 1}
        if (n < 1) {slideIndex = x.length}
        for (i = 0; i < x.length; i++) {
          x[i].style.display = "none";  
        }
        for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" w3-white", "");
        }
        x[slideIndex-1].style.display = "block";  
        dots[slideIndex-1].className += " w3-white";
      }
  
                  //ADDING TO UI OF WISHLIST
                      var data=JSON.parse(localStorage.getItem("wishlist"))||[];
                       if(data.length>0){
  
                      document.querySelector("#wl").append("("+data.length+")");
                       }
                       else
                       {
                       document.querySelector("#wl").append("");
                      }
                  //ADDING TO UI OF BAG
                      var bdata=JSON.parse(localStorage.getItem("bagitem"))||[];
                       if(bdata.length>0){
  
                      document.querySelector("#bl").append("("+bdata.length+")");
                       }
                       else
                       {
                       document.querySelector("#bl").append("");
                      }
  
  