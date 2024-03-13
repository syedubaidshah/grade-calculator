function cal() {
  let phy = document.getElementById("phy").value;
  chem = document.getElementById("chem").value;
  math = document.getElementById("math").value;
  bio = document.getElementById("bio").value;

  let sum =
    parseFloat(phy) + parseFloat(chem) + parseFloat(math) + parseFloat(bio);

  document.getElementById("demo").innerHTML = `Total mark is = ${sum}`;
  let percentage = (sum / 400) * 100;

  document.getAnimations("demo1").innerHTML = `percentage is = ${percentage}%`;

  if (percentage >= 100) {
    document.getElementById("demo2").innerHTML = `Excellent`;
  } else if (percentage >= 80) {
    document.getElementById("demo2").innerHTML = `Very Good Work`;
  } else if (percentage >= 60) {
    document.getElementById("demo2").innerHTML = `Pass`;
  } else if (percentage >= 40) {
    document.getElementById("demo2").innerHTML = `Need Hard Work`;
  } else {
    document.getElementById("demo2").innerHTML = `Fail`;
  }
}
