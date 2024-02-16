function validateForm(e) {
  e.preventDefault();

  var name = document.loginForm.name.value;
  var password = document.loginForm.password.value;

  if (name.length == 0) {
    alert("Nom est requis");
    return;
  }

  if (password.length < 6) {
    alert("Mot de passe doit être supérieur à 6");
    return;
  }
  afficherModal();
}

function afficherModal() {
  var modal = document.getElementById("modal");
  modal.style.display = "block";
}

function fermerModal() {
  var modal = document.getElementById("modal");
  modal.style.display = "none";
}

function validateForm2(e) {
  e.preventDefault();

  var name = document.loginForm2.name.value;
  var email = document.loginForm2.email.value;
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  var password = document.loginForm2.password.value;
  var telephone = document.loginForm2.telephone.value;

  if (name.length === 0) {
    alert("Nom est requis");
    return false;
  }

  if (!emailRegex.test(email)) {
    alert("Veuillez saisir une adresse e-mail valide.");
    return false;
  }

  if (password.length < 6) {
    alert("Mot de passe doit être supérieur à 6");
    return false;
  }

  if (telephone.length !== 10) {
    alert("N° de téléphone doit être égal à 10");
    return false;
  }

  redirigerVersBienvenue();
  return true;
}

function redirigerVersBienvenue() {
  window.location.href = "bienvenue.html";
}
