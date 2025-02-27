document.getElementById('btn')
.addEventListener('click' , function(event){

    event.preventDefault();
    // console.log(7)

    let password= document.getElementById('inpt-2').value;
  


    const input= document.getElementById('inpt').value;
   

    console.log(input);
    console.log(input.length);
    console.log(typeof input);
    if(input.length === 11){
        console.log('yes');

       

        if(password.length === 4 && password === '4321'){

            // if(password === '4321'){
            //     return alert('Incorrect password')
            // }
            // else{

            // }

            console.log('access grantted');
            window.location.href='index.html' ;
        }

        else{
            alert('Your pin is wrong')
        }
    }
    else{
       alert('Your number is wrong maybe!')
    }


})




