

const toggle = document.getElementById("toggle");

// dat trang thai cho nut
  var active = false;
toggle.addEventListener("click", ()=>{
    // goi class cua vong tron
    const circle= document.querySelector(".circle");
    const backgroundBtn = document.querySelector(".btn");

    if(active == false){
       circle.classList.add("active");
       circle.classList.remove("back");

       //chuyen mau button
        backgroundBtn.classList.add("backBg");
        backgroundBtn.classList.remove("activeBg");
        

       // chuyen doi trang thai off sang onl

       active = !active;
    } else { 
      circle.classList.remove("active");
     circle.classList.add("back");
    
     //chuyen mau button

      backgroundBtn.classList.add("activeBg");
      backgroundBtn.classList.remove("backBg");

     //chuyen doi trang thai onl sang off
       active = !active;
    }
});