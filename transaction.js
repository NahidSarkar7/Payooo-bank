document.getElementById('Transaction-history').addEventListener('click',function(){
    const paymentList = document.getElementById('payment-list');
    paymentList.style.display='none'
 
    const cashOut= document.getElementById('Cashout');
    cashOut.style.display='none'
 
 
    const addMoney =document.getElementById('adding-money-section');
    addMoney.style.display='none';

    const tHistry =document.getElementById('section');
    tHistry.style.display='block';

    
  const rechargeSection =document.getElementById('Recharge-section');
  rechargeSection.style.display='none'

})