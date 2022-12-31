// this is for the home page pop up, and is temporary
document.querySelector("#show-login").addEventListener("click",function(){
    document.querySelector(".popup").classList.add("active");
});
document.querySelector(".popup .close-btn").addEventListener("click",function(){
    document.querySelector(".popup").classList.remove("active");
});
document.querySelector(".popup .form .form-element input[type='submit']").addEventListener("click",function(){
    document.querySelector(".popup").classList.remove("active");
});
// this is for the home page, to show the login/sign-up page
document.querySelector("#join-button").addEventListener("click",function(){
    document.querySelector(".UpPopup").classList.add("active");
});
// this is for the new signUp page and is in development
document.querySelector("#join-button").addEventListener("click",function(){
    document.querySelector(".UpPopup").classList.add("active");
    document.querySelector(".LogPopup").classList.remove("active");
});
document.querySelector(".LogPopup .form .form-element input[type='submit']").addEventListener("click",function(){
    document.querySelector(".LogPopup").classList.remove("active");
});
document.querySelector("#show-Login").addEventListener("click",function(){
    document.querySelector(".UpPopup").classList.remove("active");
    document.querySelector(".LogPopup").classList.add("active");
});
document.querySelector(".UpPopup .form .form-element input[type='submit']").addEventListener("click",function(){
    document.querySelector(".UpPopup").classList.remove("active");
});
