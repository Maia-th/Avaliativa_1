function menuToggle() {
  let menuArea = document.getElementById("menu-area");

  if (menuArea.style.width == "50vw") {
    menuArea.style.width = "0vw";
  } else {
    menuArea.style.width = "50vw";
  }
}

function onlynumber(evt) {
  var theEvent = evt || window.event;
  var key = theEvent.keyCode || theEvent.which;
  key = String.fromCharCode(key);
  var regex = /^[0-9.-]+$/;
  if (!regex.test(key)) {
    theEvent.returnValue = false;
    if (theEvent.preventDefault) theEvent.preventDefault();
  }
}

function calc_raiz() {
  let a = parseFloat(document.getElementById("a").value);
  let b = parseFloat(document.getElementById("b").value);
  let c = parseFloat(document.getElementById("c").value);
  let raiz1, raiz2, r;

  if (a == 0) {
    alert("O termo A não pode ser 0!");
    return;
  } else if (isNaN(a) || isNaN(b) || isNaN(c)) {
    alert("Preencha todos os termos!");
    return;
  }

  let d = Math.pow(b, 2) - 4 * a * c;

  if (d < 0) {
    document.getElementById("hsol").innerText = "Delta = " + d;
    document.getElementById("dnega").style.display = "flex";
    document.getElementById("dzero").style.display = "none";
    document.getElementById("dposi").style.display = "none";
  } else if (d == 0) {
    raiz1 = -b / (2 * a);
    raiz1 = Math.round(raiz1 * 100) / 100;
    document.getElementById("hsol").innerText = "Delta = 0 \n R = " + raiz1;
    document.getElementById("dnega").style.display = "none";
    document.getElementById("dzero").style.display = "flex";
    document.getElementById("dposi").style.display = "none";
  } else {
    r = Math.sqrt(d);
    raiz1 = (-b + r) / (2 * a);
    raiz2 = (-b - r) / (2 * a);
    raiz1 = Math.round(raiz1 * 100) / 100;
    raiz2 = Math.round(raiz2 * 100) / 100;
    document.getElementById("hsol").innerText =
      "Delta = " + d + "\n R' = " + raiz1 + "\n R'' = " + raiz2;
    document.getElementById("dnega").style.display = "none";
    document.getElementById("dzero").style.display = "none";
    document.getElementById("dposi").style.display = "flex";
  }
}

function limp() {
  document.getElementById("a").value = "";
  document.getElementById("b").value = "";
  document.getElementById("c").value = "";
  document.getElementById("hsol").innerText = "Delta: \n R' : \n R'' :";
  document.getElementById("dnega").style.display = "none";
  document.getElementById("dzero").style.display = "none";
  document.getElementById("dposi").style.display = "none";
}
