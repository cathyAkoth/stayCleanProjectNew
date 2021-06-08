const fname1 = document.customerRequestForm.fname; 
                      const lname1 = document.customerRequestForm.lname;
                      const service1 = document.customerRequestForm.service;
                      const nin1 = document.customerRequestForm.nin;
                      const noTruck = document.customerRequestForm.noTruck;
                      const dor1 = document.customerRequestForm.dor;
                      const location1 = document.customerRequestForm.location;
                      const appt1 = document.customerRequestForm.appt;
                      const phone1 = document.customerRequestForm.phone;
                      const tor1 = document.customerRequestForm.tor;
                       const truck = document.customerRequestForm.truck;

                      const fname2 = document
                        .querySelector('.fname_info');
                      const lname2 = document
                         .querySelector('.lname_info');
                      const service2 = document
                         .querySelector('.service_info');
                      const nin2 = document
                        .querySelector('.nin_info');
                      const noTruck2 = document
                        .querySelector('.noTruck_info');
                      const dor2 = document
                        .querySelector('.dor_info');
                      const location2 = document
                        .querySelector('.location_info');
                      const appt2 = document
                        .querySelector('.appt_info');
                      const truck2 = document
                        .querySelector('.truck_info');


                      const fnameFunction = () =>{
                        const min = 2;
                        const max = 25;
                        const letters = /^[A-Z]+[a-zA-Z]*$/

                        if (fname1.value === '') {
                        fname1.style.border = '2px solid red';
                        fname1.focus();
                        fname2.textContent = ' name can not be empty!';
                        event.preventDefault();
                        } else {
                        if (fname1.value.length < min) {
                        fname1.focus();
                        fname1.style.border = '2px solid red';
                        fname2.textContent = 'First name must be atleast two letters.';
                        event.preventDefault();
                        }else{
                        if(fname1.value.length>max){
                        fname1.focus();
                        fname1.style.border = '2px solid red'
                        fname2.textContent = 'First name must have maximum of 25 characters.';
                        event.preventDefault();
                        } else {
                        if (!fname1.value.match(letters)) {
                        fname1.focus();
                        fname1.style.border = '2px solid red';
                        fname2.textContent = `Please fill-in your name!`;;
                        event.preventDefault();
                        return false;
                        } 
                        return true;
                        } 
                        return true;
                        } 
                        return true;
                        }
                        };
                      
                        const lnameFunction = () =>{
                        const min = 2;
                        const max = 25;
                        const letters = /^[A-Z]+[a-zA-Z]*$/ 

                        if (lname1.value === '') {
                        lname1.style.border = '2px solid red';
                        lname1.focus();
                        lname2.textContent = ' name can not be empty!';
                        event.preventDefault();
                        } else {
                        if (lname1.value.length < min) {
                        lname1.focus();
                        lname1.style.border = '2px solid red';
                        lname2.textContent = 'First name must be atleast two letters.';
                        event.preventDefault();
                        }else{
                        if(lname1.value.length>max){
                        lname1.focus();
                        lname1.style.border = '2px solid red'
                        lname2.textContent = 'First name must have maximum of 25 characters.';
                        event.preventDefault();
                        } else {
                        if (!lname1.value.match(letters)) {
                        lname1.focus();
                        lname1.style.border = '2px solid red';
                        lname2.textContent = `Please fill-in your name!`;;
                        event.preventDefault();
                        return false;
                        } 
                        return true;
                        } 
                        return true;
                        } 
                        return true;
                        }         
                        } 

                        const service1Function = () => {
                          if(service1.value===''){
                            service1.style.border = '2px solid red'
                            alert('Please select a service')
                            //service2.textContent = ('Service type can not be none')
                            event.preventDefault();
                            return false;
                          } else {
                            return true;
                          }
                          return true;
                        
                        };
                
                      const nin1Function = () => {
                      //const min2 = 14;
                      const reg2 = /[A-Z]{2}[0-9]{8}[A-Z]{2}[0-9]{1}[A-Z]{1}/
                        
                        if(nin1 .value === ''){
                        nin1 .style.border= '2px solid red';
                        nin2.textContent = 'NIN can not be empty!'
                        nin1.focus();
                        event.preventDefault();
                        
                        }else{
                         
                        if(!nin1.value.match(reg2)){
                        nin1.focus();
                        nin1.style.border = '2px solid red'
                        nin2.textContent =('Please insert the correct NIN format.')
                        event.preventDefault();
                        return false; 
                        }
                        
                        return true;
                        }
                        return true;
                        }


                      const noTruckFunction = () => {
                        if(noTruck.value===''){
                          noTruck.style.border = '2px solid red'
                          //alert('Choose number of Trucks')
                          //.textContent = ('You must choose number of trucks')
                          event.preventDefault();
                          return false;
                        } else {
                          return true;
                        }
                        return true;
                      
                      }                 

                      const dateFunction = () => {
                        
                        if(dor1.value===''){
                          dor1.style.border = '2px solid red'
                          dor2.textContent = ('Date can not be empty.')
                          event.preventDefault();
                          return false;
                        } else {
                          return true;
                        }
                        return true;
                      
                      };   

                      const timeFunction = () => {
                       
                        if(appt1.value===''){
                          appt1.style.border = '2px solid red'
                          appt2.textContent = ('time can not be none')
                            event.preventDefault();
                            return false;
                          } else {
                            return true;
                          }
                          return true;
                        
                        }         
                       

                      const locationFunction = () => {
                        if(location1.value===''){
                            location1.style.border = '2px solid red'
                            location2.textContent = ('Location can not be none')
                            event.preventDefault();
                            return false;
                          } else {
                            return true;
                          }
                          return true;
                        
                        }; 


                        const truckFunction = () =>{
                         if(truck.value===''){
                            truck.style.border = '2px solid red'
                            truck2.textContent = ('Allocate atleast one truck')
                            event.preventDefault();
                            return false;
                            }else{
                            return true;
                            }
                            return true;
                            };
                         
                      const telephoneFunction = () => {

                        const reg6 = /[+256][0-9]{9}/
                      
                        if (phone1.value === ''){
                          phone1.style.border = '2px solid red';
                          alert('insert phone number')
                          phone1.focus();
                          event.preventDefault();
                        }else{
                        if(!phone1.value.match(reg6)){
                          phone1.style.border = '2px solid red';
                          alert('follow format +256000000000')
                          phone1.focus();
                          event.preventDefault();
                        }
                        }
                        }         

                        
                        const validation = () => {
                          fnameFunction();
                          lnameFunction();
                          service1Function();
                          nin1Function();
                          noTruckFunction();
                          locationFunction();
                          dateFunction();
                          telephoneFunction()
                          timeFunction();
                          truckFunction();
                          
                        };

                        document.customerRequestForm.addEventListener('submit', validation); // Watches the validity of data filled in.