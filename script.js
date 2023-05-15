const answers = {
    bread: ['manchet'],
    seafood: ['fish', 'clams', 'oysters'],
    wax: ['beeswax'],
    peas: ['west-africa'],
    greens: ['lettuce', 'watercress'],
};

document.querySelectorAll('input[type="radio"].answer').forEach((e) => {
    e.addEventListener('click', () => {
        const answerSpan = document.querySelector(`#${e.name}answer`);
        if (answers[e.name].includes(e.id)) {
            answerSpan.textContent = 'Correct!';
            answerSpan.style.color = '#007800';
        } else {
            answerSpan.textContent = 'Incorrect!';
            answerSpan.style.color = '#ad0000';
        }
    });
});

document.querySelectorAll('input[type="checkbox"].answer').forEach((e) => {
    e.addEventListener('change', () => {
        const checkedIds = [...document.querySelectorAll(`input.answer[type="checkbox"][name="${e.name}"]`)]
            .reduce((i, el) => (el.checked ? [...i, el] : i), [])
            .map((el) => el.id);
        const answerSpan = document.querySelector(`#${e.name}answer`);
        if (JSON.stringify(answers[e.name].sort()) === JSON.stringify(checkedIds.sort())) {
            answerSpan.textContent = 'Correct!';
            answerSpan.style.color = '#007800';
        } else {
            answerSpan.textContent = 'Incorrect!';
            answerSpan.style.color = '#ad0000';
        }
    });
});

const resetAnswers = () => {
    document.querySelectorAll('.answer').forEach((e) => (e.checked = false));
    document.querySelectorAll('[id$="answer"]').forEach((e) => (e.textContent = ''));
};
