function firstMore() {
    let firstDots = document.getElementById("firstDots");
    let firstText = document.getElementById("firstMore");
    let firstBtn = document.getElementById("firstBtn");
  
    if (firstDots.style.display === "none") {
        firstDots.style.display = "inline";
        firstBtn.innerHTML = "Read more";
        firstText.style.display = "none";
    } else {
        firstDots.style.display = "none";
        firstBtn.innerHTML = "Read less";
        firstText.style.display = "inline";
    }
  }
  