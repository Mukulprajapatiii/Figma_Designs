// JavaScript to dynamically populate the carousel
const images = [
    "figma-screenshot1.png",
    "figma-screenshot2.png",
    "figma-screenshot3.png",
    "figma-screenshot4.png",
    "figma-screenshot5.png"
  ];
  
  const carousel = document.getElementById("carousel");
  
  images.forEach(image => {
    const imgElement = document.createElement("img");
    imgElement.src = `assets/images/${image}`;
    imgElement.alt = `Screenshot of ${image}`;
    carousel.appendChild(imgElement);
  });
  