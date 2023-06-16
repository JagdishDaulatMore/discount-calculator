const bill = document.querySelector('#bill');
        const discount = document.querySelector('#discount');
        const calculator = document.querySelector('#calculator');
        const total = document.querySelector('#total');
        
        calculator.addEventListener('click', ()=>{
            //validation 
            const billValue = bill.value;
            const discountValue = discount.value; 

        const correct = isValid(billValue);

        if(correct){
            
            const discountAmount = billValue - (billValue*discountValue) / 100 ;
            total.innerHTML = `Total amount to pay is : ${discountAmount}`

        }else{
        alert(`Enter bill amount is not correct : ${billValue}`);
    }

         const valid = isValid(discountValue);
            
         if(valid){

                const discountAmount = billValue - (billValue*discountValue) / 100 ;
                total.innerHTML = `Total amount to pay is : ${discountAmount}`
               
            }else
            alert(`Enter discount is not correct : ${discountValue}`);
            
            });



    function isValid(bill){
    if (bill< 0 || bill == 0 || bill == " ") {
        return false;
    }
    return true;
}
        function isValid(discount){
            if((discount<0 || discount > 100) ){
                return false;
            }
             return true;
        }



//         const bill = document.querySelector("#bill")
// const discount = document.querySelector("#discount")
// const cal = document.querySelector("#calculator")
// const result = document.querySelector("#total");
// cal.addEventListener('click',()=>{
//     console.log('Inside event listenr');
// const billValue = bill.value;
// const disValue=discount.value;
// console.log(billValue);
// console.log(disValue);

// const correct = isValid(billValue);
// if (correct) {
//     const discountAmount = billValue -(billValue*disValue)/100;
// console.log(discountAmount)
// result.innerHTML=(`The Amount to pay :${discountAmount}`);

// } else {
//     alert(`Entered Bill amount is not correct :${billValue} `)
 
// }

// const valid = isValid(disValue);
// if (valid) {
//     const discountAmount = billValue -(billValue*disValue)/100;
// console.log(discountAmount)
// result.innerHTML=(`The Amount to pay :${discountAmount}`);

// } else {
//     alert(`Entered Discount is not correct :${disValue} `)

// }

// });

// function isValid(bill){
//     if (bill< 0 || bill == 0 || bill == " ") {
//         return false;
//     }
//     return true;
// }

// function isValid(discount) {
//     if (discount < 0 || discount >100) {
//         return false
//     }
//     return true;
// }