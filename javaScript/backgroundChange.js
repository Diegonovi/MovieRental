let index = 6;
const body = document.getElementsByClassName("page")[0];
const titleElement = document.querySelector(".Title");
const runtimeElement = document.querySelector(".Runtime");
const summaryElement = document.querySelector(".Summary");

const slides = [
  {
    image: "background/60SecondsSnapshot.jpg",
    title: "60 Segundos",
    runtime: "118 min",
    summary:
      "Un maestro ladrón de autos retirado debe volver a la industria y robar cincuenta autos con su equipo en una noche para salvar la vida de su hermano.",
  },
  {
    image: "background/harryPotterSnapshot.jpg",
    title: "Harry Potter",
    runtime: "152 min",
    summary:
      "Un niño huérfano se inscribe en una escuela de hechicería, donde descubre la verdad sobre sí mismo, su familia y el terrible mal que acecha al mundo mágico.",
  },
  {
    image: "background/matrixSnapshot.png",
    title: "The Matrix",
    runtime: "136 min",
    summary:
      "Un hacker informático aprende de unos rebeldes misteriosos sobre la verdadera naturaleza de su realidad y su papel en la guerra contra sus controladores.",
  },
  {
    image: "background/karateKidSnapshot.jpg",
    title: "El Karate Kid",
    runtime: "126 min",
    summary:
      "Un maestro de artes marciales acepta enseñar karate a un adolescente acosado.",
  },
  {
    image: "background/3NinjasSnapshot.jpg",
    title: "3 Ninjas",
    runtime: "84 min",
    summary:
      "Cada año, tres hermanos visitan a su abuelo durante el verano. Él es altamente competente en ninjutsu, y durante años ha entrenado a los niños en sus técnicas.",
  },
  {
    image: "background/warMovieSnapshot.jpeg",
    title: "El Sargento de Hierro",
    runtime: "130 min",
    summary:
      "Un sargento de artillería de la Marina duro y malviviente choca con sus superiores y su ex esposa mientras toma el mando de un pelotón de reconocimiento mimado.",
  },
  {
    image: "background/back.jpg",
    title: "Motrix",
    runtime: "",
    summary: "Descubre miles de películas... todas a su alcance",
  },
];

function showSlide(index) {
  body.style.backgroundImage = `url(${slides[index].image})`;
  titleElement.textContent = slides[index].title;
  runtimeElement.textContent = slides[index].runtime;
  summaryElement.textContent = slides[index].summary;
}

function setIndex(number) {
  if (number < slides.length) {
    index = number;
  }
  showSlide(index);
}

function nextSlide() {
  index++;
  if (index >= slides.length) {
    index = 0;
  }
  showSlide(index);
}

function previousSlide() {
  index--;
  if (index < 0) {
    index = slides.length - 1;
  }
  showSlide(index);
}

showSlide(index);
