
// localStorage.clear();

// remove picture

const rmv_img = document.getElementById("rmv_img");
const profileImg=document.getElementById("profileImg");        
rmv_img.addEventListener('ckick',function(){
    profileImg.parentNode.removeChild(profileImg);
    console.log(profileImg);
});




function onClick() {
    // upload picture
   
        const changePicLink = document.getElementById('changePicLink');
        
        const fileInput = document.getElementById("fileInput");
        
        
    
    
    
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
                profileImg.src = e.target.result;
              };
              reader.readAsDataURL(file);
            }
          });
    
        
    
 // chnge info
    const nameInput = document.getElementById("fullName");

    const name = nameInput.value;
    localStorage.setItem("Name", name);

    //////////////////////////////////////////////////////////////////////////////////////////////////

    const JobInput = document.getElementById("Job");

    const Job = JobInput.value;
    localStorage.setItem("Job", Job);

    //////////////////////////////////////////////////////////////////////////////////////////////////

    const PhoneInput = document.getElementById("Phone");

    const Phone = PhoneInput.value;
    localStorage.setItem("Phone", Phone);

    //////////////////////////////////////////////////////////////////////////////////////////////////

    const EmailInput = document.getElementById("Email");

    const Email = EmailInput.value;
    localStorage.setItem("Email", Email);

    //////////////////////////////////////////////////////////////////////////////////////////////////



}
async function fetchJason(){
  let response=await fetch('HR-info.json');
  let hrJson=await response.json();
localStorage.setItem('hrJson',JSON.stringify(hrJson));
 let storedPassword=JSON.parse(localStorage.getItem('hrJson')).password;
console.log(storedPassword);


}
function check(){
// changing password


const currentPassword=document.getElementById('currentPassword').value;
const newPassword=document.getElementById('newPassword');
const renewPassword=document.getElementById('renewPassword');

const newPass=newPassword.value;
localStorage.setItem("newPass",newPass);
const renewPass=renewPassword.value;
localStorage.setItem("renewPass",renewPass);

// if(newPass!=renewPass){
//     document.getElementById('error1').textContent='Passwords did not match';   
// }
// else
//  document.getElementById('error1').textContent='Password created successfully';



if (currentPassword!=storedPassword){
document.getElementById('error').textContent='the current password is wrong';

}
}