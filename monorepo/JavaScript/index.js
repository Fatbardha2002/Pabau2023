document.addEventListener("DOMContentLoaded", function () {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const shuffleBtn = document.getElementById('shuffleBtn');
    const changeBtn = document.getElementById('changeBtn');
    const showBtn = document.getElementById('showBtn');
    const resultDiv = document.getElementById('result');

    shuffleBtn.addEventListener('click', shuffleValues);
    changeBtn.addEventListener('click', changeValues);
    showBtn.addEventListener('click', showSelectedValues);

    function shuffleValues() {
        const values = Array.from(checkboxes).map(checkbox => checkbox.value);
        shuffleArray(values);
        updateCheckboxes(values);
        displayResult(`Shuffled values: ${values.join(', ')}`);
    }

    function changeValues() {
        const newValues = ["Junior", "React", "Developer", "Pabau2023"];
        updateCheckboxes(newValues);
        displayResult('Changed values: ' + newValues.join(', '));
    }

    function showSelectedValues() {
        const selectedValues = Array.from(checkboxes)
            .filter(checkbox => checkbox.checked)
            .map(checkbox => checkbox.value);
        displayResult('Selected values: ' + selectedValues.join(', '));
    }

    function updateCheckboxes(newValues) {
        checkboxes.forEach((checkbox, index) => {
            checkbox.value = newValues[index];
            checkbox.checked = false; // Uncheck all checkboxes
        });
    }

    function displayResult(message) {
        resultDiv.textContent = message;
    }

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }
});
