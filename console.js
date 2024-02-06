//product__Phone
document.getElementById("phone-increase").addEventListener("click",()=>{
const phoneInput=document.getElementById("phone-input");
   const phoneInuputnum =parseInt(phoneInput.value);
   const phonenewcount = phoneInuputnum + 1;
   phoneInput.value = phonenewcount;
   
   const phoneTotal = phonenewcount * 1219;
   document.getElementById("phone-total").innerText = '$' + phoneTotal;
   CalculateTotal();
});


document.getElementById("phone-decrease").addEventListener("click",()=>{
   const phoneInput=document.getElementById("phone-input");
      const phoneInuputnum = parseInt(phoneInput.value);
      if(phoneInuputnum > 0){
         const phonenewcount = phoneInuputnum - 1;
         phoneInput.value = phonenewcount;   
         const phoneTotal = phonenewcount * 1219;
         document.getElementById("phone-total").innerText = '$' + phoneTotal;
      } 
      CalculateTotal();
   });

   //Product__Case
document.getElementById("case-increase").addEventListener("click",()=>{
   const caseinput=document.getElementById("case-input");
   // console.log(caseinput.value);
   const caseinputnum = parseInt(caseinput.value);
   const casenewcount = caseinputnum + 1;
   caseinput.value = casenewcount;
   const caseTotal = casenewcount * 59;
   document.getElementById("case-total").innerText= '$' + caseTotal;
   CalculateTotal();
});

document.getElementById("case-decrease").addEventListener("click",()=>{
   const caseinput=document.getElementById("case-input");
   const caseinputnum = parseInt(caseinput.value);
   if(caseinputnum > 0){
   const casenewcount = caseinputnum - 1;
   caseinput.value = casenewcount;   
   const caseTotal = casenewcount * 59;
   document.getElementById("case-total").innerText = '$' + caseTotal; 
}
CalculateTotal();
});

function CalculateTotal() {
   const phoneInput = document.getElementById("phone-input");
   const phoneInputnum = parseInt(phoneInput.value);

   const caseinput = document.getElementById("case-input");
   const caseinputnum = parseInt(caseinput.value);

   const TotalPrice = phoneInputnum * 1219  + caseinputnum * 59;
   document.getElementById("total-price").innerText = '$' + TotalPrice;

   const tax = Math.round(TotalPrice * 0.1);
   document.getElementById("tax").innerText = '$' + tax;
   
   const grandTotal = (TotalPrice + tax);
   document.getElementById("grandTotal").innerText = '$' + grandTotal;

}