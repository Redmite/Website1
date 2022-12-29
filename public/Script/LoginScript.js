document.querySelector("#show-login").addEventListener("click",function(){
    document.querySelector(".popup").classList.add("active");
});
document.querySelector(".popup .close-btn").addEventListener("click",function(){
    document.querySelector(".popup").classList.remove("active");
});
document.querySelector(".popup .form .form-element input[type='submit']").addEventListener("click",function(){
    document.querySelector(".popup").classList.remove("active");
});
