let cdn = document.querySelector("#button");

const randomColor = () => {
  let val = "123456780ABCDEF";
  let hash = "#";

  for (let i = 0; i < 6; i++) {
    hash = hash + val[Math.floor(Math.random() * 16)];
  }
  return hash;
};

console.log(randomColor());

cdn.addEventListener("click",  () => {
  document.querySelector("#canvas").style.backgroundColor = randomColor();
});
