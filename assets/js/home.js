// FAQ Section
document.querySelectorAll('.faq-item .icon').forEach(item => {
    item.addEventListener('click', event => {
        const answer = event.target.parentNode.nextElementSibling;
        const icon = event.target;
        if (answer.style.display === 'none') {
            answer.style.display = 'block';
            icon.textContent = '[-]';
        } else {
            answer.style.display = 'none';
            icon.textContent = '[+]';
        }
    });
});