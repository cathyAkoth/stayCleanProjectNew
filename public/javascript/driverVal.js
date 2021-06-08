const name1 = document.driverRegForm.fname;
const name2= document.driverRegForm.lname;
const  gender1= document.driverRegForm.gender;
const age1 = document.driverRegForm.age;
const date1 = document.driverRegForm.date;
const nin1 = document.driverRegForm.nin;
const residence = document.driverRegForm.dresidence;
const incidences = document.driverRegForm.pincidences;
const telephone = document.driverRegForm.telephoneNo;


const fname2 = document
  .querySelector('.fname_info');
const lname2 = document
    .querySelector('.lname_info');
const gender2 = document
    .querySelector('.gender_info');
const nin2 = document
  .querySelector('.nin_info');
const age2 = document
  .querySelector('.age_info');
const date2 = document
  .querySelector('.date_info');
const dresidence2 = document
  .querySelector('.location2_info');
const phone2 = document
  .querySelector('.telephoneNo_info');
const incidences2 = document
  .querySelector('.incidences_info');




/** Validating first name so that it starts with a capital letter, can not be left empty, has more than 1 character and less than 51 characters.
An mesasage will be returned incase any of the validations is violated and the field will be highted with red borders.
*/
const nameFunction = () => {

const min = 2;
const max = 25;
const letters = /^[A-Z]+[a-zA-Z]*$/

if (name1.value === '') {
fname2.textContent = ' First name can not be empty!';
name1.style.border = '2px solid red';
name1.focus();
event.preventDefault();
} else {
if (name1.value.length < min) {
name1.focus();
name1.style.border = '2px solid red';
fname2.textContent = ' First name can not be less than 2 characters!';
event.preventDefault();
}else{
if(name1.value.length>max){
name1.focus();
fname2.textContent = ' First name can not be more than 25 characters!';
name1.style.border = '2px solid red'
event.preventDefault();
} else {
if (!name1.value.match(letters)) {
name1.focus();
name1.style.border = '2px solid red';
fname2.textContent = ' First name must start with capital letter!';
e.preventDefault();
return false;
} 
return true;
} 
return true;
} 
return true;
};
}


/** Validating last name so that it can only be 2 characters and above, 25 characters and below,
start with capital letter and can not be left empty.

*/

const nameFunction1 = () => {

const min = 2;
const max = 25;
const letters = /^[A-Z]+[a-zA-Z]*$/

if (name2.value === '') {
lname2.textContent = ' Last name can not be empty!';
name2.style.border = '2px solid red';
name2.focus();
event.preventDefault();
}else {
if (name2.value.length < min) {
name2.focus();
name2.style.border = '2px solid red';
lname2.textContent = ' Last name can not be less than 2 characters!';
event.preventDefault();
}else{
if(name2.value.length>max){
lname2.textContent = ' Last name can not be longer than 25 characters!';
name2.focus();
name2.style.border = '2px solid red'
event.preventDefault();
}else{
if (!name2.value.match(letters)) {
name2.focus();
name2.style.border = '2px solid red';
lname2.textContent = ' Last name can only start with capital letter!';
return false;
} 
return true;
} 
return true;
} 
return true;
}
}


/** Validating NIN so that it can not be left empty and can only take in the correct format.*/
const ninFunction = ()=>{
  
  const reg2 = /[A-Z]{2}[0-9]{8}[A-Z]{2}[0-9]{1}[A-Z]{1}/
    
    if(nin1 .value === ''){
    nin1 .style.border= '2px solid red';
    nin2.textContent = ' NIN can not be empty!';
    nin1.focus();
    event.preventDefault();
    }else{
    if(!nin1.value.match(reg2)){
    nin1.focus();
    nin1.style.border = '2px solid red'
    nin2.textContent = ' Input the correct NIN format!';
    event.preventDefault();
    return false; 
    }
    
    return true;
    }
    return true;
   
    }


/** Validating age so that it can not be left empty and only allows 30 years and above.*/
const ageFunction = () => {
  const min2 = 30;

  if(age1.value === ''){
    age1.style.border = '2px solid red';
    age2.textContent = ' Age can not be empty!';
    age1.focus();
  }else{
  if(age1.value < min2){
    age1.focus();
    age1.style.border = '2px solid red';
    age2.textContent = ' Age must be 30 years and above!';
    return false;
    }
    return true;
    }
    return true;

    };


 /** Validating residence so that it is not left empty.*/ 
const residenceFunction = () => {
if (residence.value === '') {
residence.style.border = '2px solid red';
dresidence2.textContent = ' Residence not be empty!';
residence.focus();
event.preventDefault();
} else {
return true;
} //  Ensure residence field is not empty.
return true;
};

/** Validating telephone field so that it is not left empty and follows the format +256000000000.*/
const telephoneFunction = () => {

  const reg6 = /[+256][0-9]{9}/

  if (telephone.value === ''){
    telephone.style.border = '2px solid red';
    phone2.textContent = ' Phone can not be empty!';
    telephone.focus();
    event.preventDefault();
  }else{
  if(!telephone.value.match(reg6)){
    telephone.style.border = '2px solid red';
    phone2.textContent = ' Follow the format +256000000000!';
    telephone.focus();
    event.preventDefault();
  }
  }
}


/** Validating Incidences so that it can not be left unselected.*/
const incidencesFunction = () => {
  if(incidences.value === ''){
    incidences.style.border = '2px solid red';
    incidences.focus();
    event.preventDefault();
  }else{
    return true;
  }
  return true;
  };


/**Validating gender so that it can not be left empty.*/
const genderFunction = ()=>{
if(gender1.value === ''){
gender1.style.border= '2px solid red';
gender2.textContent = ' Gender can not be empty!';
gender1.focus();
event.preventDefault();
}else{
return true;
}
return true
};



/** Validating date so that it can not be left empty and follow the format 'mm/dd/yyyy'.*/
const valueDate = () => {
  const dateformat = /^(0[1-9]|1[012])[- /.] (0[1-9]|[12][0-9]|3[01])[- /.] (19|20)\d\d$/
  
  
  if(date1.value===''){
  date1.style.border = '2px solid red'
  date2.textContent = 'DoB can not be empty';
  event.preventDefault();
  return false;
  }
  return true;
  }
  

  const validation = () => {
  nameFunction();
  nameFunction1();
  ninFunction();
  valueDate();
  genderFunction();
  telephoneFunction();
  incidencesFunction();
  ageFunction();
  residenceFunction();



};
document.driverRegForm.addEventListener('submit', validation); // Watches the validity of data filled in.