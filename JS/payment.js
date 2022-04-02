function back(){
    window.location.href="bag.html"
  }
  var data=JSON.parse(localStorage.getItem("bagitem"))||[];
   
   if(data.length!=0)
   {
var total = data.reduce(function (sum, elem, index, arr) {
    return sum + Number(elem.price);
  }, 0);
  var length = data.length;
  var bag=document.createElement("div");
  var items=document.createElement("div");
   var items1=document.createElement("h2");
   items1.innerText=length+" items";
   if(localStorage.getItem("totalprice")==null)
     localtotal=total;
     else
     localtotal=localStorage.getItem("totalprice");

     var items2=document.createElement("h2");
   items2.innerHTML="&#8377; "+localtotal;
    items.append(items1,items2);
   
    var del=document.createElement("div");
   var delcont=document.createElement("h2");
    delcont.innerText="Delivery"
     var delcost=document.createElement("h2");
   delcost.innerHTML="&#8377; "+100;
    del.append(delcont,delcost);
    var tot=document.createElement("div");
   var totprice=document.createElement("h2");
    totprice.innerText="Total"
     var pricetot=document.createElement("h2");
     
    if(total<999)
    pricetot.innerHTML="&#8377; "+localtotal+100;
    else
    pricetot.innerHTML="&#8377; "+localtotal;
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
          pricetot.innerHTML="&#8377; "+(total-per);
          bag.innerHTML="";
          tot.innerHTML="";
          tot.append(totprice,pricetot);
           alert("Voucher Applied to Total Amount")
          bag.append(items,tot);
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
     

    //right_bottom
    var rightitems=document.createElement("div");
   var rightitems1=document.createElement("h2");
   rightitems1.innerText=length+" Items in your bag";
   rightitems.append(rightitems1);
   document.querySelector("#right_bottom").append(rightitems);

  //right bottom item push
 
        data.map(function(elem,i){
            var maindiv=document.createElement("div");
            maindiv.style.margin="20px";
            maindiv.style.backgroundColor="#FCF3EC";
            maindiv.style.borderRight="3px solid orange"
           maindiv.style.borderBottom ="3px solid orange";
            maindiv.style.display="flex";
            maindiv.style.justifyContent="space-between";
            var img=document.createElement("img");
            img.src=elem.img;
            img.style.width="120px"
            img.style.height="120px"
            var itemdiv=document.createElement("div");
            itemdiv.style.width="280px"
            var probrand=document.createElement("div");
            probrand.innerText=elem.probrand;
            var head=document.createElement("h4");
            head.innerText=elem.proname;
            head.style.fontFamily="Poppins, sans-serif"
            head.style.fontWeight="bold";
            var movetodiv=document.createElement("div");
            movetodiv.style.display="flex";
            movetodiv.style.justifyContent="space-between";

            var moneydiv=document.createElement("div");
            moneydiv.innerHTML="&#8377; "+elem.price;
            
            movetodiv.append(moneydiv);
            itemdiv.append(probrand,head,movetodiv);
            maindiv.append(img,itemdiv);
            document.querySelector("#right_bottom").append(maindiv);
 


            });

      //input taking part
      document.querySelector("#form").addEventListener("submit",inputpart);
      var coustadd=JSON.parse(localStorage.getItem("custdetail"))||[];
      function inputpart(){
       event.preventDefault();
       
        var ele=document.getElementsByName("contact");
        checked="";
        for(var i=0;i<ele.length;i++){
          if(ele[i].checked)
          checked=ele[i].value;
        }
        obj={
          name:document.querySelector(".cname").value,
          add:document.querySelector(".cadd").value,
          pin:document.querySelector(".cpin").value,
          city:document.querySelector(".ccity").value,
          state:document.querySelector(".cstate").value,
          mobile:document.querySelector(".cmobile").value,
          email:document.querySelector(".cemail").value,
          type:checked,
        }
        coustadd.push(obj)
          localStorage.setItem("custdetail",JSON.stringify(coustadd));
          alert("Address saved successfully");
          window.location.href="payment_gateway.html";
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