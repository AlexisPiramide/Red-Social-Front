document.addEventListener("DOMContentLoaded", function () {
    const textField = document.getElementById("text-field");
    const charCount = document.getElementById("char-count");

    textField.addEventListener("input", function () {
        const remaining = 400 - textField.value.length;
        charCount.textContent = `${remaining} caracteres restantes`;
    });

});
