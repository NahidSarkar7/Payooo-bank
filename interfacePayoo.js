
document.getElementById('Add-money').addEventListener('click', function(){
    console.log("add money ok");

    const paymentList = document.getElementById('payment-list');
   paymentList.style.display='none';

   const cashOut= document.getElementById('Cashout');
   cashOut.style.display='none';

   const tHistry =document.getElementById('section');
   tHistry.style.display='none';


   const addMoney =document.getElementById('adding-money-section');
   addMoney.style.display='block';

   const amount = document.getElementById('amount');
   const accountNumber=document.getElementById('account-number');


 


})



const add =document.getElementById('add')
.addEventListener('click',function(event){

    event.preventDefault();



   const accNumber = document.getElementById('account-number');
   const accountNumber = accNumber.value ;

   const pinNUmber =document.getElementById('pin').value;

   const ammountNumber =document.getElementById('amount').value;
   const mainAmount = parseInt(ammountNumber)

   const dollarNumber =document.getElementById('dollar').innerText;
   const mainDollar = parseInt( dollarNumber);


   if( accountNumber.length === 11 ){

    if(pinNUmber.length === 4){

     sum=mainAmount+mainDollar;
     console.log(sum);
     document.getElementById('dollar').innerText=sum;

    //  const section =document.getElementById('section');

     const Container2 = document.getElementById('container2');
    
     
     const p =document.createElement('p');

     p.innerText=`
     
     add money ${mainAmount } from ${accountNumber}
     
     `

     console.log(p)

     Container2.appendChild(p);

     p.style.backgroundColor='red';
     p.style.color='white';
     p.style.textAlign='center';
     p.style.marginBottom='2px';
     p.style.marginTottom='2px';
     p.style.borderRadius='20px';

      
    }
    else{
        alert('Not a valid pin')
    }
    
   }
   else{
    alert('Check your number')
   }
  })


  document.getElementById('log-out').addEventListener('click',function(){

    window.location.href='bankinfo.html'



  })

  document.getElementById('Cash-out').addEventListener('click',function(){

    const addMoney =document.getElementById('adding-money-section');
    addMoney.style.display='none';
      const paymentList = document.getElementById('payment-list');
   paymentList.style.display='none';
   const rechargeSection =document.getElementById('Recharge-section');
  rechargeSection.style.display='none';
  const tHistry =document.getElementById('section');
  tHistry.style.display='none';
   const cashOut= document.getElementById('Cashout');
   cashOut.style.display='block';


   

  })


  document.getElementById('cash').addEventListener('click',function(event){

    event.preventDefault();

    
const cashOutPin = document.getElementById('CashOut-pin').value;

console.log();

const cashAmount = document.getElementById('cash-amount').value;

const agentNumber = document.getElementById('Agent-number').value;

const dollarNumber =document.getElementById('dollar').innerText;
const mainDollar = parseInt( dollarNumber);



if( cashOutPin.length === 4 && agentNumber.length === 11 && cashAmount !== ''){

 if(cashAmount > mainDollar){

  return alert('Not available balance')
 }

 const sum = mainDollar-cashAmount;
 document.getElementById('dollar').innerText=sum;


 const Container2 = document.getElementById('container2');
    
     
 const p =document.createElement('p');

 p.innerText=`
 
 Cash-out money ${cashAmount } from ${agentNumber}
 
 `

 console.log(p)

 Container2.appendChild(p);

 p.style.backgroundColor='blue';
 p.style.color='white';
 p.style.textAlign='center';
 p.style.marginBottom='2px';
 p.style.marginTottom='2px';
 p.style.borderRadius='20px'

}
else{
  alert('Check your pin , number or amount kindly !')
}



  })


  document.getElementById('Recharge').addEventListener('click',function(){

  const rechargeSection =document.getElementById('Recharge-section');
  rechargeSection.style.display='block'

    const paymentList = document.getElementById('payment-list');
   paymentList.style.display='none'

   const addMoney =document.getElementById('adding-money-section');
   addMoney.style.display='none';

   const cashOut= document.getElementById('Cashout');
   cashOut.style.display='none'


  })


  document.getElementById('recharge').addEventListener('click',function(event){

    event.preventDefault();

    
const cashOutPin = document.getElementById('CashOut-pin2').value;

console.log();

const cashAmount = document.getElementById('cash-amount2').value;

const agentNumber = document.getElementById('Agent-number2').value;

const dollarNumber =document.getElementById('dollar').innerText;
const mainDollar = parseInt( dollarNumber);

console.log('hello')

if( cashOutPin.length === 4 && agentNumber.length === 11 && cashAmount !== ''){

 if(cashAmount > mainDollar){

  return alert('Not available balance')
 }

 const sum = mainDollar-cashAmount;
 document.getElementById('dollar').innerText=sum;


 
 const Container2 = document.getElementById('container2');
    
     
 const p =document.createElement('p');

 p.innerText=`
 
 Recharged money ${cashAmount } from ${agentNumber}
 
 `

 console.log(p)

 Container2.appendChild(p);

 p.style.backgroundColor='indigo';
 p.style.color='white';
 p.style.textAlign='center';
 p.style.marginBottom='2px';
 p.style.marginTottom='2px';
 p.style.borderRadius='20px';

 

}
else{
  alert('Check your pin , number or amount kindly !')
}



  })
