
const name3 = document.signUpForm.fname;
const name4= document.signUpForm.lname;
const user1 = document.signUpForm.username;
const password = document.signUpForm.password1;


const fname2 = document
  .querySelector('.fname_info');
const lname2 = document
    .querySelector('.lname_info');
const user2 = document
    .querySelector('.username_info');
const pass2 = document
  .querySelector('.password_info');

/**Validating first nameso that it is not left empty and starts with a capital letter.
 *  It should be above 2 characters and below 25 characters. */
const name3Function = () =>{
 
 const reg3 = /^[A-Z]+[a-zA-Z]*$/
 const min3 = 2;
 const max3 = 25;

 if(name3.value === ''){
  fname2.textContent = ' First name can not be empty!';
  name3.style.border = '2px solid red';
  name3.focus();
  e.preventDefault ();
 }else{
   if(!name3.value.match(reg3)){
    fname2.textContent = ' First name must start with a capital letter!';
   name3.style.border = '2px solid red';
   name3.focus(); 
   e.preventDefault ();
   }else{
     if(name3.value.length < min3){
      fname2.textContent = ' First name can not be less than 2 characters!';
       name3.style.border='2px solid red';
       name3.focus();
       e.preventDefault ();
   }else{
     if(name3.value.length > max3){
      fname2.textContent = ' First name can not be more than 25 characters!';
       name3.style.border='2px solid red';
       e.preventDefault ();
       return false
     }
     return true
     }
     return true
   }

   return true
 }
}
 
/**Validating Last name so that it is not left empty and starts with a capital letter.
 *  It should be above 2 characters and below 25 characters. */
const name4Function = () =>{

const reg3 = /^[A-Z]+[a-zA-Z]*$/
 const min3 = 2;
 const max3 = 25;


 if(name4.value === ''){
  lname2.textContent = ' last name can not empty!';
   name4.style.border = '2px solid red';
   name4.focus();
   event.preventDefault ();
    }else{
    if(!name4.value.match(reg3)){
    lname2.textContent = ' last name must start with capital letters!';
    name4.style.border = '2px solid red';
    name4.focus(); 
    event.preventDefault ();

    }else{
      if(name4.value.length < min3){
        lname2.textContent = ' last name can not be less than 2 characters!';
        name4.style.border='2px solid red';
        name4.focus();
        event.preventDefault ();
    }else{
     if(name4.value.length > max3){
        lname2.textContent = ' last name can not be more than 25 characters!';
        name4.style.border='2px solid red';
        event.preventDefault ();
        return false;
      }
      return true;
      }
      return true;
    }

    return true;
  }

}

/**Validating username so that it starts with STC followed by 4 numbers.
 * It can not be left empty.
 */
const userNameFunction = () =>{

const reg6 = /[STC][0-9]{4}/

  if (user1.value === ''){
    user1.style.border = '2px solid red';
    user2.textContent = 'user name can not empty!';
    user1.focus();
    event.preventDefault();
  }else{
  if(!user1.value.match(reg6)){
    user1.style.border = '2px solid red';
    user2.textContent = ' User name must start with STC followed by 4 letters!';
    user1.focus();
    event.preventDefault();
  }
  }
}


/**Validating password so that it can not be left empty.
 * It should have a maximum of 15 characters and a minimum of 15 characters.
 * It should have small and capital letters with numbers and atleast a special character.
 */
const passwordFunction = () => {

  const min4 =8;
  const max4 = 15;
  const reg5 = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]$/

if(password.value === '') {
pass2.textContent = ' Password can not empty!';
password.style.border = '2px solid red';
  password.focus();
  event.preventDefault ();
} else {
if(password.value < min4){
pass2.textContent = ' Pass word can not be less than 8 characters!';
password.style.border = "'2px solid red'";
  password.focus();
  event.preventDefault ();
  } else {
if(password.value > max4){
pass2.textContent =' password can not be more than 15 characters!';
password.style.border = '2px solid red';
  password.focus();
  event.preventDefault ();
  } else {
if(!password.value.match(reg5)){
pass2.textContent = ' pass word must have capital and small letters with special character and numbers!';
password.style.border = '2px solid red';
  password.focus();
  event.preventDefault ();
  }

  return false;
  } 
return true;
} 
return true;
}
return true;
  };


const validation = () => {
  name3Function();
  name4Function();
  userNameFunction();
  passwordFunction();  
  };



    document.signUpForm.addEventListener('submit', validation);

