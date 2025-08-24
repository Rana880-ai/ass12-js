var imgs = document.querySelectorAll(".card img"); 
var layer = document.querySelector(".layer");      
var imgBox = document.querySelector(".img-box");   
var closeBtn = document.querySelector(".fa-square-xmark");
var prevBtn = document.querySelector(".fa-angle-left");
var nextBtn = document.querySelector(".fa-angle-right");
var previewImg = document.getElementById("preview-img");

let currentIndex = 0;

function showImage(index) {
  currentIndex = index;
  var imgSrc = imgs[currentIndex].getAttribute("src");
  previewImg.setAttribute("src", imgSrc);
  layer.classList.remove("d-none");
}

closeBtn.addEventListener("click", function () {
  layer.classList.add("d-none");
});

nextBtn.addEventListener("click", function () {
  currentIndex = (currentIndex + 1) % imgs.length;
  showImage(currentIndex);
});


prevBtn.addEventListener("click", function () {
  currentIndex = (currentIndex - 1 + imgs.length) % imgs.length;
  showImage(currentIndex);
});

imgs.forEach((img, i) => {
  img.addEventListener("click", function () {
    showImage(i);
  });
});

document.addEventListener("keydown", function (e) {
  if (layer.classList.contains("d-none")) return;

  if (e.key === "ArrowRight") {       
    currentIndex = (currentIndex + 1) % imgs.length;
    showImage(currentIndex);

  } else if (e.key === "ArrowLeft") { 
    currentIndex = (currentIndex - 1 + imgs.length) % imgs.length;
    showImage(currentIndex);

  } else if (e.key === "Escape") {    
    layer.classList.add("d-none");
  }
});
