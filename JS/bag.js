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
  //left side
  var data=JSON.parse(localStorage.getItem("bagitem"))||[];
     
      if(data.length!=0)
      {
      
          document.querySelector("#left").innerText="";
          var td1=document.createElement("p");
          td1.innerText="In your bag";
          td1.style.textAlign="left";
          td1.style.fontSize="30px"
          td1.style.fontWeight="bolder";
          td1.style.fontFamily="Poppins,, sans-serif";
          td1.style.lineHeight="37px"
          document.querySelector("#left").append(td1)
          data.map(function(elem,i){
              var maindiv=document.createElement("div");
              maindiv.style.margin="20px";
             maindiv.style.borderBottom ="3px solid rgb(167, 165, 165)";
              maindiv.style.display="flex";
              maindiv.style.justifyContent="space-between";
              var img=document.createElement("img");
              img.src=elem.img;
              img.style.width="150px"
              var itemdiv=document.createElement("div");
              itemdiv.style.width="450px"
              var probrand=document.createElement("div");
              probrand.innerText=elem.probrand;
              var head=document.createElement("h4");
              head.innerText=elem.proname;
              head.style.fontFamily="Poppins, sans-serif"
              head.style.fontWeight="bold";
              var movetodiv=document.createElement("div");
              movetodiv.style.display="flex";
              movetodiv.style.justifyContent="space-between";
              var butdiv=document.createElement("div");
           
              var inpu=document.createElement("input");
              inpu.style.margin="8px";
              inpu.style.paddingLeft="18px";
               inpu.setAttribute("id","counterinput")
               inpu.value=1;
               inpu.style.width="50px";
               inpu.style.height="30px"
               inpu.style.borderRadius="80px";
               inpu.style.border="0"
               inpu.style.boxShadow="rgba(0, 0, 0, 0.19) 1px -2px 0px 2px";
              var dec=document.createElement("button");
               dec.innerText="-";
               dec.setAttribute("id","decrease");
               dec.style.backgroundColor="#FCF3EC";
               dec.style.borderRadius="50px";
               dec.style.border ="1px solid pink";
               dec.style.height="30px";
               dec.style.width="40px";
               var inc=document.createElement("button");
               inc.innerText="+";
               inc.setAttribute("id","increase");
               inc.style.borderRadius="50px"
               inc.style.backgroundColor="#FCF3EC";
               inc.style.border ="1px solid pink";
               inc.style.height="30px";
               inc.style.width="40px";
              butdiv.append(dec,inpu,inc);
          
  
              var moneydiv=document.createElement("div");
              moneydiv.innerText=elem.price;
              movetodiv.append(butdiv,moneydiv);
              itemdiv.append(probrand,head,movetodiv);
              maindiv.append(img,itemdiv);
              document.querySelector("#left").append(maindiv);
              inc.onclick=function(){
                          temp=document.querySelector("#counterinput").value;
                          temp++;
                          var bag=document.querySelector("#counterinput").value=temp;
               };
               dec.onclick=function(){
                          temp=document.querySelector("#counterinput").value;
                          temp--;
                          var bag=document.querySelector("#counterinput").value=temp;
               };
               
              // document.querySelector("#increase").addEventListener("click",infun);
              // document.querySelector("#decrease").addEventListener("click",defun);
              function infun(){
          temp=document.querySelector("#counterinput").value;
          temp++;
          var bag=document.querySelector("#counterinput").value=temp;
      }
      function defun(){
          temp=document.querySelector("#counterinput").value;
          temp--;
          var bag=document.querySelector("#counterinput").value=temp;
      }
  
  
  
  
          })
             
  
    
      //right side 
  
    var total = data.reduce(function (sum, elem, index, arr) {
      return sum + Number(elem.price);
    }, 0);
    var length = data.length;
    var bag=document.createElement("div");
    var items=document.createElement("div");
     var items1=document.createElement("h2");
     items1.innerText=length+" items";
     
       var items2=document.createElement("h2");
     items2.innerText=total
      items.append(items1,items2);
     
      var del=document.createElement("div");
     var delcont=document.createElement("h2");
      delcont.innerText="Delivery"
       var delcost=document.createElement("h2");
     delcost.innerText=100;
      del.append(delcont,delcost);
      var tot=document.createElement("div");
     var totprice=document.createElement("h2");
      totprice.innerText="Total"
       var pricetot=document.createElement("h2");
      if(total<999)
      pricetot.innerText=total+100;
      else
      pricetot.innerText=total;
      tot.append(totprice,pricetot);
  
    var voucher=document.createElement("div");
    var voucherform=document.createElement("form");
    voucherform.setAttribute("id","voucherform");
    var voucherinput=document.createElement("input");
    voucherinput.setAttribute("placeholder","Apply Voucher Code")
    voucherinput.setAttribute("id","voucherinput");
    var img1=document.createElement("img");
    img1.src=" assest/img/pngegg.png";
    img1.style.width="30px"
    var voucherbutton=document.createElement("button");
    voucherbutton.style.backgroundColor="white";
    voucherbutton.style.border="0px";
    voucherbutton.setAttribute("id","inputimg");
    voucherbutton.addEventListener("click",voucherfun);
    counter=0;
    function voucherfun(){
      counter++;
      event.preventDefault();
        if(voucherinput.value=="hamleys30" && counter ==1){
            per=total*0.30;
            pricetot.innerText=total-per;
            localStorage.setItem("totalprice",total-per)
            bag.innerText="";
            tot.innerText="";
            tot.append(totprice,pricetot);
             alert("Voucher Applied to Total Amount")
        }
        else if(counter!=1 && voucherinput.value=="hamleys30" )
        {
            alert("Duplicate Voucher Code")
        }
        else
           alert("Invalid Voucher Code")
    }
    voucherform.append(voucherinput,voucherbutton)
     voucher.append(voucherform)
     
     if(total<999){
      bag.append(items,del,tot,voucher);
     }
     else
     {
      bag.append(items,tot,voucher);
     }
      document.querySelector("#right_top").append(bag);
      document.querySelector("#inputimg").append(img1);
  
  
     document.querySelector("#inputimg").addEventListener("onClick",vouchercal);
     function vouchercal(){
      
         var b=document.querySelector("voucherinput").value;
          
       }
  
       function checkout(){
           window.location.href="payment.html";
       }
   }
  else
         {
   
            document.querySelector("#container").innerText="";
            document.querySelector("#container").style.display="block";
            document.querySelector("#container").style.textAlign="center";
            document.querySelector("#container").style.height="400px";
            document.querySelector("#container").style.backgroundColor="white";
             var head=document.createElement("h2");
             head.innerText="YOUR CART IS EMPTY ";
             head.style.fontSize="30px";
             head.style.paddingTop="30px";
            var para=document.createElement("p");
            para.innerHTML="Click here to continue shopping."
  
            document.querySelector("#container").append(head,para);
         }
  
  
  
         
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