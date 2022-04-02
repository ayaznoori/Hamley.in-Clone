var data=JSON.parse(localStorage.getItem("custdetail"));
var para=document.createElement("p");
para.innerHTML="&#x1F6C8; We have sent a confirmation of this order to <br>"+"&nbsp;&nbsp;&nbsp;&nbsp;"+data[0].email;
document.querySelector("#instruction").append(para);

var npara=document.createElement("p");
npara.innerText=data[0].name;
var apara=document.createElement("p");
apara.innerText=data[0].add;
var dpara=document.createElement("p");
dpara.innerText=data[0].city;
var spara=document.createElement("p");
spara.innerText=data[0].state;
var ppara=document.createElement("p");
ppara.innerText=data[0].pin;
var mpara=document.createElement("p");
mpara.innerText=data[0].mobile;
document.querySelector("#card").append(npara,apara,dpara,spara,ppara,mpara);




function back(){
  window.location.href="payment.html"
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
 
var voucherinput=document.createElement("input");
 
var img1=document.createElement("img");


 

 

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
 
 voucher.append(voucherform)
 
 if(total<999){
  bag.append(items,del,tot,voucher);
 }
 else
 {
  bag.append(items,tot,voucher);
 }
  document.querySelector("#right_top").append(bag);




  //right_bottom


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
      acc.href="accountpage.html";
      acc.innerText="Account";
      logdiv.append(img,acc);
      document.querySelector("#loginpage").append(logdiv);
     }
