// console.log('HI')
let userForm = document.getElementById('userForm')
let emailControl = document.getElementById('email')
let passwordControl = document.getElementById('password')

//step 4:- a function to consume to promise to call API
const logApi =(loginObj)=>{
  let promise = new Promise((resolve,reject)=>{
    setTimeout(() => {
        if(loginObj.email==='Anil@gmail.com' && loginObj.password==='master'){
            resolve(`HI...Welcome To This Site.`)
        }
        else{
            reject(`Invalid Username or Password`)
        }
    },500);
  })
  return promise
}
// logApi()




let onLog =(eve)=>{  // to creat an object by submitting a form is the role of onLog
   eve.preventDefault()
   // console.log(`Submited`)

   // step 1:- form submit ke uper hame form me jo controls hain us par ek object banana hai.
   //means login object


   let obj =      // >>            
   {
      email:emailControl.value,
      password:passwordControl.value  //Ye sab ka sab API call hai means Asynchronus behaviour of JS 

   }        //>>

// step 5:- call logApi Now to send object into DB
logApi(obj)
.then((add)=>{
    console.log(add)
    Swal.fire({
        icon:'success',
        title:add,
        timer:1500
    })
})
.catch((err)=>{
    console.log(err)
    Swal.fire({
        icon:'error',
        title:err,
        timer:1500
    })
})
  .finally(()=>{
    userForm.reset()
  })

   //  step 3:-email aur passsword de kar is API call ko promise ka use kar ke handle karte hain.
   //uske liye sab se phele promise creat karte hain.

}
// step 2:- suppose ke obj is object ko DB me send karna hai to ye obj DB me ja kar check honge ke kya ye email
// aur password correct hain






userForm.addEventListener('submit',onLog)

// note:- phle user email aur password dale ga aur submit button click(login) karega to form submit hoga
//use ke badd hum ko ek object milega to us object ko ab logApi ko dena hai.
//phir loginApi ek API call send karega DB ko uske badd DB API call check karega matlab jo bhi email aur password hai
//use check karega aur agar data match hua to API call resolve hoga aur data milega aur match nahi hua to reject
//hoga.