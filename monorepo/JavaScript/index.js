document.addEventListener("DOMContentLoaded", function () {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const shuffleBtn = document.getElementById('shuffleBtn');
    const changeBtn = document.getElementById('changeBtn');
    const showBtn = document.getElementById('showBtn');
    const resultDiv = document.getElementById('result');

    shuffleBtn.addEventListener('click', shuffleValues);
    changeBtn.addEventListener('click', changeValues);
    showBtn.addEventListener('click', showSelectedValues);
});
