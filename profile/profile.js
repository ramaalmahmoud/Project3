async function fetchJason(){
    let response=await fetch('HR-info.json');
    let hrJson=await response.json();
   let data=localStorage.setItem('hrJson',JSON.stringify(hrJson));
 

}



function display(){
    fetchJason();
    // let img=document.getElementsById('image').src;
    const storedImage=localStorage.getItem("Image");
   img=storedImage;
   let name=document.getElementById('name');
 
   const storedName=JSON.parse(localStorage.getItem('hrJson')).full_name;
   name.textContent=storedName;
   console.log(storedName);

   let Id=document.getElementById('id');
   const storedId=JSON.parse(localStorage.getItem('hrJson')).ID;
   Id.textContent=storedId;
   
   let position=document.getElementById('position');
   const storedPosition=JSON.parse(localStorage.getItem('hrJson')).Postion;
   position.textContent=storedPosition;

let phone=document.getElementById('phone');
   const storedPhone=JSON.parse(localStorage.getItem('hrJson')).Phone;
   phone.textContent=storedPhone;


let email=document.getElementById('email');
   const storedEmail=JSON.parse(localStorage.getItem('hrJson')).email;
   email.textContent=storedEmail;
   

   localStorage.clear();  
    
}
display();

