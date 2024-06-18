
function display(){
  let profileImg=document.getElementById('profileImg');
    const storedImage=JSON.parse(localStorage.getItem('hrJson')).Image;
    profileImg.src=storedImage;

    let fullName=document.getElementById('fullName');
   const storedName=JSON.parse(localStorage.getItem('hrJson')).full_name;
   fullName.value=storedName;


   let Job=document.getElementById('Job');
   const storedPosition=JSON.parse(localStorage.getItem('hrJson')).Postion;
   Job.value=storedPosition;

   let phone=document.getElementById('Phone');
   const storedPhone=JSON.parse(localStorage.getItem('hrJson')).Phone;
   phone.value=storedPhone;

   let email=document.getElementById('Email');
   const storedEmail=JSON.parse(localStorage.getItem('hrJson')).email;
   email.value=storedEmail;



}
display();

let storedPassword=JSON.parse(localStorage.getItem('hrJson')).password;
console.log(storedPassword);

document.getElementById('currentPassword').addEventListener('input',function(){
  const currentPassword=document.getElementById('currentPassword').value;
  console.log(currentPassword);
  if (currentPassword!==storedPassword && currentPassword!==''){
    document.getElementById('error').textContent='the current password is wrong';
    
    }

  else
  document.getElementById('error').textContent='';

    

});

// remove picture

document.addEventListener('DOMContentLoaded',function(){

  const rmv_img = document.getElementById("rmv_img");
// const profileImg=document.getElementById("profileImg");        
rmv_img.addEventListener('click',function(){
    profileImg.parentNode.removeChild(profileImg);
    
    console.log(profileImg);
});

 // upload picture

 const changePicLink = document.getElementById('changePicLink');
        
 const fileInput = document.getElementById("fileInput");
 const profileImg =document.getElementById('profileImg');

 console.log('changePicLink:', changePicLink);
 console.log('fileInput:', fileInput);
 console.log('profileImg:', profileImg);

 changePicLink.addEventListener('click', function (e) {
   e.preventDefault();
   console.log('Change Picture link clicked');
   fileInput.click();
 });

 fileInput.addEventListener('change', function () {
   const file = fileInput.files[0];
   if (file) {
     const reader = new FileReader();
     reader.onload = function (e) {
       console.log('File selected');
       profileImg.src = e.target.result;
     };
     reader.readAsDataURL(file);
   }
 });
});




function onInput() {

    
        
    
  // chnge info
    let nameInput = document.getElementById("fullName");

    const name = nameInput.value;
    localStorage.setItem("Name", name);

    //////////////////////////////////////////////////////////////////////////////////////////////////

    let JobInput = document.getElementById("Job");

    const Job = JobInput.value;
    localStorage.setItem("Job", Job);

    //////////////////////////////////////////////////////////////////////////////////////////////////

    let PhoneInput = document.getElementById("Phone");

    const Phone = PhoneInput.value;
    localStorage.setItem("Phone", Phone);

    //////////////////////////////////////////////////////////////////////////////////////////////////

    let EmailInput = document.getElementById("Email");

    const Email = EmailInput.value;
    const EmailPat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (Email === "" || !EmailPat.test(Email)) {
      document.getElementById("errorEmail").innerHTML = "Invalid email address";
      
      isValid = false;
  } else {
    document.getElementById("errorEmail").innerHTML = "";
    localStorage.setItem("Email", Email);
  }
    //////////////////////////////////////////////////////////////////////////////////////////////////


    
    let newPassword=document.getElementById('newPassword');
    let renewPassword=document.getElementById('renewPassword');
    
    
   
    
      var newPass=newPassword.value;
   
    
    const passPat = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    isValid = false;
    
    if (newPass !== "" && !passPat.test(newPass)) {
      document.getElementById("error1").innerHTML = "Invalid password. Password must be at least 8 characters long";
      
      isValid = false;
    } else {
      document.getElementById("error1").innerHTML = "";
      localStorage.setItem("newPass",newPass);
    }
    const renewPass=renewPassword.value;
      
      if (renewPass === "" || renewPass !== newPass) {
        document.getElementById("error2").innerHTML = "Passwords do NOT match!";
           
        isValid = false;
    } else {
      document.getElementById("error2").innerHTML = "";
      localStorage.setItem("renewPass",renewPass);
    }
    
    return isValid;
    
   

}

let n=localStorage.getItem("full_name");
console.log(n);
let saveButt=document.getElementById('saveButt');
saveButt.addEventListener("submit", function(event) {
  event.preventDefault(); 

  if (onInput()) {
      store(profileImg.src, nameInput.value, JobInput.value);
      
  }
});





