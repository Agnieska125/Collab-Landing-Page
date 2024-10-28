const leftClick = document.querySelector(".left-click");
const rightClick = document.querySelector(".right-click");
const slides = Array.from(document.getElementById("slide-control").children);
const starsDiv = document.querySelector(".part1");
console.log(slides[0].className);
rightClick.addEventListener("click", () => {
  slides.every((div, index) => {
    if (div.className == "slide-active") {
      div.className = "slide-inactive";
      slides[(index + 1) % slides.length].className = "slide-active";
      rewriteStars(starsDiv);
      return false;
    }
    return true;
  });
});
leftClick.addEventListener("click", () => {
  slides.every((div, index) => {
    if (div.className == "slide-active") {
      div.className = "slide-inactive";
      if (index != 0) {
        slides[(index - 1) % slides.length].className = "slide-active";
      } else {
        slides[slides.length - 1].className = "slide-active";
      }
      rewriteStars(starsDiv);
      return false;
    }
    return true;
  });
});
function rewriteStars(writeToDiv) {
  var fillMarkupText = "";
  var rand = [];
  for (let i = 0; i < 5; i++) {
    rand.push(Math.random());
  }

  rand.sort((a, b) => a - b);
  rand.forEach((randomUnit) => {
    if (randomUnit < 0.5) {
      fillMarkupText += `<svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.2627 16.5794L16.5959 19.3306C17.1547 19.6831 17.8425 19.1587 17.6792 18.5139L16.4239 13.5788C16.39 13.442 16.3954 13.2984 16.4395 13.1646C16.4836 13.0307 16.5646 12.912 16.6733 12.8222L20.5594 9.58089C21.0667 9.15961 20.8087 8.30844 20.1467 8.26545L15.0741 7.93874C14.9357 7.93069 14.8026 7.88249 14.6912 7.80004C14.5797 7.71759 14.4947 7.60446 14.4465 7.47447L12.555 2.71137C12.5049 2.57372 12.4137 2.45482 12.2937 2.37079C12.1738 2.28677 12.0308 2.2417 11.8844 2.2417C11.7379 2.2417 11.595 2.28677 11.475 2.37079C11.355 2.45482 11.2638 2.57372 11.2138 2.71137L9.32227 7.47447C9.27406 7.60446 9.18903 7.71759 9.07757 7.80004C8.96611 7.88249 8.83305 7.93069 8.69464 7.93874L3.62202 8.26545C2.96 8.30844 2.70207 9.15961 3.20933 9.58089L7.09548 12.8222C7.20409 12.912 7.28513 13.0307 7.32924 13.1646C7.37335 13.2984 7.37875 13.442 7.34481 13.5788L6.18412 18.1528C5.98638 18.9265 6.81175 19.5542 7.47377 19.1329L11.5061 16.5794C11.6191 16.5075 11.7504 16.4693 11.8844 16.4693C12.0184 16.4693 12.1496 16.5075 12.2627 16.5794Z" fill="#E13C5A" stroke="#E13C5A" stroke-width="1.37563" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;
    } else {
      fillMarkupText += `<svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.555 16.5794L15.8882 19.3306C16.4471 19.6831 17.1349 19.1587 16.9715 18.5139L15.7163 13.5788C15.6823 13.442 15.6877 13.2984 15.7319 13.1646C15.776 13.0307 15.857 12.912 15.9656 12.8222L19.8518 9.58089C20.359 9.15961 20.1011 8.30844 19.4391 8.26545L14.3665 7.93874C14.2281 7.93069 14.095 7.88249 13.9835 7.80004C13.8721 7.71759 13.787 7.60446 13.7388 7.47447L11.8473 2.71137C11.7973 2.57372 11.7061 2.45482 11.5861 2.37079C11.4661 2.28677 11.3232 2.2417 11.1767 2.2417C11.0303 2.2417 10.8873 2.28677 10.7674 2.37079C10.6474 2.45482 10.5562 2.57372 10.5061 2.71137L8.61463 7.47447C8.56642 7.60446 8.48139 7.71759 8.36993 7.80004C8.25847 7.88249 8.1254 7.93069 7.987 7.93874L2.91438 8.26545C2.25236 8.30844 1.99443 9.15961 2.50169 9.58089L6.38783 12.8222C6.49645 12.912 6.57749 13.0307 6.6216 13.1646C6.66571 13.2984 6.67111 13.442 6.63716 13.5788L5.47648 18.1528C5.27874 18.9265 6.10411 19.5542 6.76613 19.1329L10.7984 16.5794C10.9115 16.5075 11.0427 16.4693 11.1767 16.4693C11.3107 16.4693 11.4419 16.5075 11.555 16.5794V16.5794Z" stroke="#E13C5A" stroke-width="1.37563" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;
    }
  });
  writeToDiv.innerHTML = fillMarkupText;
}
