const imgContainer = document.getElementsByClassName("img-center")[0];

const centerImg = imgContainer.getElementsByTagName("img")[0];
const popup = imgContainer.getElementsByClassName("popup")[0];

const west = imgContainer.getElementsByClassName("west")[0];
const east = imgContainer.getElementsByClassName("east")[0];

const leftImg = document
  .getElementsByClassName("img-left")[0]
  .getElementsByTagName("img")[0];
const rightImg = document
  .getElementsByClassName("img-right")[0]
  .getElementsByTagName("img")[0];

let imgArray = [leftImg.src, centerImg.src, rightImg.src];

imgArray.forEach((n, i) => console.log(i));

centerImg.addEventListener("mouseover", (event) => {
  centerImg.classList.add("mouseOver");
  popup.style.display = "inline-block";
});

centerImg.addEventListener("mouseout", (event) => {
  centerImg.classList.remove("mouseOver");
  popup.style.display = "none";
});

popup.addEventListener("mouseover", (event) => {
  centerImg.classList.add("mouseOver");
  popup.style.display = "inline-block";
});

popup.addEventListener("mouseout", (event) => {
  centerImg.classList.remove("mouseOver");
  popup.style.display = "none";
});

east.addEventListener("click", () => {
  leftImg.src = imgArray[2];
  centerImg.src = imgArray[0];
  rightImg.src = imgArray[1];

  imgArray = [leftImg.src, centerImg.src, rightImg.src];
});

west.addEventListener("click", () => {
  leftImg.src = imgArray[1];
  centerImg.src = imgArray[2];
  rightImg.src = imgArray[0];

  imgArray = [leftImg.src, centerImg.src, rightImg.src];
});
