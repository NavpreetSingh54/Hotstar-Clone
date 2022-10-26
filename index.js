let movies = [
{
name: "falcon and the winter soldier",
des:
"Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit porro et veniam excepturi, eaque voluptatem impedit nulla laboriosam facilis ut laboriosam libero!",
image: "https://raw.githubusercontent.com/Pranav-8bit/hotstar/main/images/slider%202.PNG"
},
{
name: "loki",
des:
"Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit porro et veniam excepturi, eaque voluptatem impedit nulla laboriosam facilis ut laboriosam libero!",
image: "https://raw.githubusercontent.com/Pranav-8bit/hotstar/439cc2057d7ec8d99ab70767bae63b92c8ca69cc/images/slider%201.PNG"
},
{
name: "wanda vision",
des:
"Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit porro et veniam excepturi, eaque voluptatem impedit nulla laboriosam facilis ut laboriosam libero!",
image: "https://raw.githubusercontent.com/Pranav-8bit/hotstar/main/images/slider%203.PNG"
},
{
 name: "raya and the last dragon",
des:
"Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit porro et veniam excepturi, eaque voluptatem impedit nulla laboriosam facilis ut laboriosam libero!",
image: "https://raw.githubusercontent.com/Pranav-8bit/hotstar/main/images/slider%204.PNG"
},
{
name: "luca",
des:
"Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit porro et veniam excepturi, eaque voluptatem impedit nulla laboriosam facilis ut laboriosam libero!",
image: "https://raw.githubusercontent.com/Pranav-8bit/hotstar/main/images/slider%205.PNG"
}
];
const carousel = document.querySelector(".carousel");
let sliders = [];
let slideIndex = 0; // track the current slide
const createSlide = () => {
if (slideIndex >= movies.length) {
slideIndex = 0;
}
// Create DOM Elements
let slide = document.createElement("div");
var imgElement = document.createElement("img");
let content = document.createElement("div");
let h1 = document.createElement("h1");
let p = document.createElement("p");
// attaching all elements
imgElement.appendChild(document.createTextNode(""));
h1.appendChild(document.createTextNode(movies[slideIndex].name));
p.appendChild(document.createTextNode(movies[slideIndex].des));
content.appendChild(h1);
content.appendChild(p);
slide.appendChild(content);
slide.appendChild(imgElement);
carousel.appendChild(slide);
// setting up image
imgElement.src = movies[slideIndex].image;
slideIndex++;
// setting elements classname
slide.className = "slider";
content.className = "slide-content";
h1.className = "movie-title";
p.className = "movie-des";
sliders.push(slide);
if (sliders.length) {
sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${
30 * (sliders.length - 2)
}px)`;
}
}
for (let i = 0; i < 3; i++) {
createSlide();
}
setInterval(() => {
createSlide();
}, 3000);
//video cards
const videocards = [...document.querySelectorAll(".video-card")];
videocards.forEach((item) => {
item.addEventListener("mouseover", () => {
let video = item.children[1];
video.play();
});
item.addEventListener("mouseleave", () => {
let video = item.children[1];
video.pause();
});
});
//card sliders
let cardcontainers = [...document.querySelectorAll(".card-container")];
let preBtns = [...document.querySelectorAll(".pre-btn")];
let nxtBtns = [...document.querySelectorAll(".nxt-btn")];
cardcontainers.forEach((item, i) => {
let containerDimensions = item.getBoundingClientRect();
let containerWidth = containerDimensions.width;
nxtBtns[i].addEventListener("click", () => {
item.scrollLeft += containerWidth - 200;
});
preBtns[i].addEventListener("click", () => {
item.scrollLeft -= containerWidth + 200;
});
});