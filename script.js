const inputError = document.querySelector("[data-form-error]");
const userEmail = document.querySelector("[data-email-input]");
const submitBtn = document.querySelector("[data-submit-btn]");
const mainContent = document.querySelector("[data-main-content]");
const successTemplate = document.querySelector("[data-success-template]");
const body = document.querySelector("body");

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  inputError.innerHTML = "Valid email required";
  userEmail.classList.add("error");

  if (emailRegex.test(userEmail.value)) {
    inputError.innerHTML = "";
    userEmail.classList.remove("error");
    mainContent.style.display = "none";
    if (window.innerWidth <= 728) {
      successTemplate.style.display = "block";
    } else {
      successTemplate.style.display = "flex";
    }
    document.body.appendChild(successTemplate.content.cloneNode(true));

    const successMessage = document.querySelector("[data-success-message]");
    successMessage.innerHTML = `A confirmation email has been sent to <b>${userEmail.value}</b>. Please open
    it and click the button inside to confirm your subscription.`;
  }
});

function goBack() {
  if (window.innerWidth <= 728) {
    mainContent.style.display = "block";
  } else {
    mainContent.style.display = "flex";
  }
  successTemplate.style.display = "none";
  const successContent = document.querySelector(".success-container");
  successContent.parentNode.removeChild(successContent);
}
