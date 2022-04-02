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