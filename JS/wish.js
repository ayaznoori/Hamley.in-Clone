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
  
  
  
  
      var data=JSON.parse(localStorage.getItem("wishlist"))||[];
      if(localStorage.getItem("success")==1 && !x.matches){
        var bag=document.querySelector("#loginpage").innerText="";
        logdiv=document.createElement("div");
        img=document.createElement("img");
        img.src="assest/img/teddy.png";
        img.style.width="20px";
        var acc=document.createElement("a");
        acc.href="accountpage.html";
        acc.innerText="Account";
        logdiv.append(img,acc);
        document.querySelector("#loginpage").append(logdiv);
       }
      if(data.length!=0)
      {
      
          document.querySelector("#main-body").innerText="";
          var td1=document.createElement("h1");
          td1.innerText="All Items";
          td1.style.textAlign="left";
          document.querySelector("#main-body").append(td1)
          data.map(function(elem,i){
              var maindiv=document.createElement("div");
             maindiv.style.borderTop ="2px solid grey";
              maindiv.style.display="flex";
              maindiv.style.marginTop="10px";
              var img=document.createElement("img");
              img.src=elem.img;
              img.style.width="250px"
              var itemdiv=document.createElement("div");
             
              var titlediv=document.createElement("div");
              titlediv.style.display="flex";
              var head=document.createElement("h4");
              head.innerText=elem.proname;
              var close=document.createElement("p");
              close.innerText="X";
              close.style.color="red";
              close.style.cursor= "pointer";
              close.addEventListener("click",emptyfun);
              function emptyfun(){
                 var temp=JSON.parse(localStorage.getItem("wishlist"));
                  temp.splice(i,1);
                 localStorage.setItem("wishlist",JSON.stringify(temp));
                 alert("Item Removed from wishlist")
                 window.location.reload();
  
              }
              titlediv.append(head,close);
              var itemcode=document.createElement("div");
              itemcode.innerText="Item Code : "+ elem.itemcode;
              var itemgender=document.createElement("div");
              itemgender.innerText="Gender : "+ elem.gender;
              var itemcolor=document.createElement("div");
              itemcolor.innerText="Color : "+ elem.color;
              var movetodiv=document.createElement("div");
              movetodiv.style.display="flex";
              movetodiv.style.justifyContent="space-between";
              var butdiv=document.createElement("button");
              butdiv.setAttribute("id","mvtbag")
              butdiv.addEventListener("click",movetobag);
              function movetobag(){
                  var bagitem1=JSON.parse(localStorage.getItem("bagitem"))||[];
                 bagitem1.push(elem);
                 localStorage.setItem("bagitem",JSON.stringify(bagitem1));
                 var temp=JSON.parse(localStorage.getItem("wishlist"));
                  temp.splice(i,1);
                 localStorage.setItem("wishlist",JSON.stringify(temp));
                 window.location.reload();
  
              }
          
              butdiv.innerText="Move to bag";
              var moneydiv=document.createElement("div");
              moneydiv.innerText=elem.price;
              movetodiv.append(butdiv,moneydiv);
              itemdiv.append(titlediv,itemcode,itemgender,itemcolor,movetodiv);
              maindiv.append(img,itemdiv);
              document.querySelector("#main-body").append(maindiv);
          })
          
         } 
         else
         {
          
             document.querySelector("#main-div").innerText="";
             var head=document.querySelector("h2");
             head.innerText="YOUR WISHLIST IS CURRENTLY EMPTY";
            var para=document.createElement("p");
            para.innerHTML="Want to keep track of all your favourite pieces?<br>Simply go to the product page and click on the Heart Icon"
            document.querySelector("main-div").append(head,para);
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
                             
        