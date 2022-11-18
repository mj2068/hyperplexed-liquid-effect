console.log("main.js");

const container = document.getElementById("bubble-wrapper");

const animateBubble = (x) => {
  const bubble = document.createElement("div");

  bubble.className = "bubble";

  bubble.style.left = `${x}px`;
  container.appendChild(bubble);
  setTimeout(() => {
    container.removeChild(bubble);
  }, 2000);
  
};

window.addEventListener("mousemove", (event) => animateBubble(event.clientX));
