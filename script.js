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


  function secondMore() {
    let secondDots = document.getElementById("secondDots");
    let secondText = document.getElementById("secondMore");
    let secondBtn = document.getElementById("secondBtn");
  
    if (secondDots.style.display === "none") {
        secondDots.style.display = "inline";
        secondBtn.innerHTML = "Read more";
        secondText.style.display = "none";
    } else {
        secondDots.style.display = "none";
        secondBtn.innerHTML = "Read less";
        secondText.style.display = "inline";
    }
  }



  function thirdMore() {
    let thirdDots = document.getElementById("thirdDots");
    let thirdText = document.getElementById("thirdMore");
    let thirdBtn = document.getElementById("thirdBtn");
  
    if (thirdDots.style.display === "none") {
        thirdDots.style.display = "inline";
        thirdBtn.innerHTML = "Read more";
        thirdText.style.display = "none";
    } else {
        thirdDots.style.display = "none";
        thirdBtn.innerHTML = "Read less";
        thirdText.style.display = "inline";
    }
  }
