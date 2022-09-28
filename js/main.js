window.onload  =  function(){
    //handle mobile menu
    // all selectors
    const barsIcon =  document.querySelector(".bars-icon");
    const menu = document.querySelector(".menu ul");

    // handle eventLister
    barsIcon.addEventListener("click", ()=>{
        // show and hide
        menu.classList.toggle("show");
    })
}