//selecting items
const billCost = document.querySelector('#bill-cost')
const buttons = document.querySelectorAll('.btn')
const numOfPeople = document.querySelector('#people')
const tipAmount = document.querySelector('#tip-amount')
const totalAmount = document.querySelector('#total-amount')
const reset = document.querySelector('#reset')
const custom = document.querySelector('#custom')




// loop through each buttons to pick it values

buttons.forEach(btn => {
  btn.addEventListener('click', (e) => {
    
    if(billCost.value === '' || numOfPeople.value === ''){
      tipAmount.innerHTML = '$ 0.00';
      totalAmount.innerHTML =  '$ 0.00'
    }else{
      
      let billInput = +billCost.value;
      let person = +numOfPeople.value;
      
      /*using destructuring to get number written on the buttons... and using splicing to remove the % sign and convert the string to number using unary operator + */
      
      let [...num] = btn.innerHTML;
      let arr = num.splice(-1, 2);
      let percent = +(num.join(''));
      
    //calculating the tips and the total tips
      
     // The tips per person...
    let calculate = (percent * billInput) / (person * 100);
    
    // total tips
    
    let totalCalc = ((percent + 100) * billInput) / (person * 100);
    
    tipAmount.innerHTML = `$ ${calculate.toFixed(2)}`;
    totalAmount.innerHTML = `$ ${totalCalc.toFixed(2)}`;

    
  
  
    }
    //console.log(calculate);
    
    //console.log(percent * billInput * person)
  })
})


//Adding functionality to the custom input

custom.addEventListener('input', (e) => {
  
  if (billCost.value === '' || numOfPeople.value === '') {
    tipAmount.innerHTML = '$ 0.00';
    totalAmount.innerHTML = '$ 0.00';
  }else{
  let billInput = +billCost.value;
  let person = +numOfPeople.value;
  let values = + custom.value;
  //console.log(values);

  let calculate = (values * billInput) / (person * 100);
    
    // total tips
    
    let totalCalc = ((values + 100) * billInput) / (person * 100);
    
    tipAmount.innerHTML = `$ ${calculate.toFixed(2)}`;
    totalAmount.innerHTML = `$ ${totalCalc.toFixed(2)}`;
    
    
  }

    

})


// to reset  the app  to default state...

reset.addEventListener('click', () => {
  
  tipAmount.innerHTML = '$ 0.00';
  totalAmount.innerHTML = '$ 0.00';
  billCost.value = '';
  numOfPeople.value = '';
  custom.value = '';
})