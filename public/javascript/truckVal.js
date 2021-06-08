const number1 = document.truckRegForm.regNumber;
              const number2 = document.truckRegForm.codeNumber;
              const service1 = document.truckRegForm.truckService;
              const driver1 = document.truckRegForm.driver;



              const num1 = document
                .querySelector('.regNumber_info');
              const num2 = document
                  .querySelector('.codeNumber_info');
              const service2 = document
                  .querySelector('.truckService_info');
              const driver2 = document
                .querySelector('.driver_info');
              

              /** Validating registration number not be null and to be in the format'ABC000A.'*/
              const regNumFunction = () => {
                const reg = /[A-Z]{3}[0-9]{3}[A-Z]{1}/
                if(number1.value === ''){
                  num1.textContent = 'Truck registration number can not be null.!';
                  number1.style.border = '2px solid red';
                  number1.focus();
                  event.preventDefault();
                 
                }else{
                  if(!number1.value.match(reg)){
                    number1.style.border='2px solid red';
                   num1.textContent = 'Give right format!';
                    return false;
                  }
                  return true;
                }
                return true
              };

              /**Validating the code number not to be empty and to start with capital letters followed by 3 numbers.*/  
                const codeNumFunction = () => {
                const reg1 = /[A-Z]{3}[0-9]{3}/

                if (number2.value === ''){
                
                    num2.textContent = 'Code number can not be empty!';
                    number2.style.border = '2px Solid red';
                    number2.focus();
                    event.preventDefault();
                  }else{
                  if(!number2.value.match(reg1)){
                    number2.style.border = '2px solid red';
                    num2.textContent = 'Code number startS with 3 capital letters then 3 numbers!';
                    number2.focus();
                    event.preventDefault();
                  return false;
                  }
                  return true;
                  }
                  return true;
                }

                /**Validating service not to be null.*/
                const serviceFunction = () =>{
                  if(service1.value === ''){
                    service1.style.border = '2px solid red';
                    service2.textContent = 'Please select service type!';
                    service1.focus();
                    event.preventDefault();
                  }else{
                    return true;
                  }
                  return true
                };

                /**Validating driver field not to be left empty*/
                  const driverFunction = () =>{
                  if(service1.value === ''){
                    driver1.style.border = '2px solid red';
                    driver2.textContent = 'Allocate a driver!';
                    driver1.focus();
                    event.preventDefault();
                  }else{
                    return true;
                  }
                  return true
                };  

              const validation = () => {
                regNumFunction();
                codeNumFunction();
                serviceFunction();
                driverFunction();
                
                 
              };
              document.truckRegForm.addEventListener('submit', validation);