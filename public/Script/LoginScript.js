document.querySelector("#show-login").addEventListener("click",function(){
    document.querySelector(".popup").classList.add("active");
});
document.querySelector(".popup .close-btn").addEventListener("click",function(){
    document.querySelector(".popup").classList.remove("active");
});
document.querySelector(".popup .form .form-element input[type='submit']").addEventListener("click",function(){
    document.querySelector(".popup").classList.remove("active");
});
document.querySelector("#show-SignUp").addEventListener("click",function(){
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
    document.querySelector(".LogPopup").classList.remove("active");
    document.querySelector(".UpPopup").classList.remove("active");
});
