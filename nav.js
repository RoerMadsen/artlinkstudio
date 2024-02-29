//Opretter vriabler -> js gennemgår dokumtentet og finder hhv. .primary-navigation og .nav-toggle
const primaryNavigation = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".nav-toggle");

//når der trykkes på knappen, skifter visibility mellem true og false -> menu folder sig ind/ud
navToggle.addEventListener("click", () => {
    const visibility = primaryNavigation.getAttribute("data-visible")

    //console.log (visibility);  tjek i inspector/konsol at det virker
    
    if(visibility === "false") {
        primaryNavigation.setAttribute("data-visible", "true");
        navToggle.setAttribute("aria-expanded", "true");
    } else if (visibility === "true" ){
        primaryNavigation.setAttribute("data-visible", "false");
        navToggle.setAttribute("aria-expanded", "false");
    }
});