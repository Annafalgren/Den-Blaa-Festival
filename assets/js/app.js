if (window.location.href.includes("praktiskInformation")) {
  //  // Her Definerer vi variabler accordion og i
  let accordion = document.getElementsByClassName("PraktisAccordion");
  let i;
  // her laver vi en for løkke der går igennem alle elementerne i og accordion
  //
  for (i = 0; i < accordion.length; i++) {
    // her laver vi et Event, der lytter efter når man klikker
    accordion[i].addEventListener("click", function () {
      this.classList.toggle("active");
      // Når der bliver klikket på noget så ændre classen og bliver synlig
      let information = this.nextElementSibling;
      // her tjekker den om søskenelementet har css-stilen display sat til "block"
      if (information.style.display === "block") {
        // hvis display er "block" ændres det til none
        information.style.display = "none";
      } else {
        // hvis display ikke er block så ændres det til block
        information.style.display = "block";
      }
    });
  }
}
// giver variablen slideshow værdien 0
let slideshow = 0;
// vi kalder funktionen showslides for at start billedvisningen
showSlides();
// vi definerer funktionen "showSlides" som viser billederne
function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  // vi starter en løkke der går igennem alle billederne
  for (i = 0; i < slides.length; i++) {
    // vi sætter style.display none for hver billede, så de bliver skjult
    slides[i].style.display = "none";
  }
  slideshow++;
  if (slideshow > slides.length) {
    slideshow = 1;
  }
  for (i = 0; i < dots.length; i++) {
    // vi fjerner klassen active fra alle punkter (dots)
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideshow - 1].style.display = "block";
  dots[slideshow - 1].className += " active";
  setTimeout(showSlides, 3000); // skift billede hver 3 sekund
}
// burgermenu åbner

function openNav() {
  document.getElementById("myNav").style.height = "100%";
}
// brugermenu lukker

function closeNav() {
  document.getElementById("myNav").style.height = "0%";
}
