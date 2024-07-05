let profile_toggle = document.querySelector('.profile-modal-toggle');
let profile_modal = document.querySelector('.profile-modal');
let display = 0;
profile_toggle.addEventListener('click',()=>{
     if(display == 0){
          profile_modal.classList.remove('hidden');    
          display = 1;
     }
     else{
          profile_modal.classList.add('hidden');
          display = 0;
     }
     
})
let close_btn = document.getElementById('close-btn');
let bg_pink_700 = document.querySelector('.bg-pink-700');
let modal = document.querySelector('.modal-container');
let booking_details = document.querySelector('.booking-details');
let tint = document.querySelector('.tint');
bg_pink_700.addEventListener('click',()=>{
     modal.classList.remove('hidden');
     tint.classList.remove('hidden')
     booking_details.style.display = "none";
})
close_btn.addEventListener('click',()=>{
     modal.classList.add('hidden');
     tint.classList.add('hidden')
     booking_details.style.display = "block";
     
})