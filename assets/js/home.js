// FAQ Section
document.querySelectorAll('.faq-item').forEach(item => {
    item.addEventListener('click', event => {
        const answer = item.querySelector('p');
        const icon = item.querySelector('.icon');
        if (answer.style.display === 'none' || answer.style.display === '') {
            answer.style.display = 'block';
            icon.textContent = '[-]';
        } else {
            answer.style.display = 'none';
            icon.textContent = '[+]';
        }
    });
});

//  scroll to info section

window.onload = function() {
    document.getElementById('readMore').addEventListener('click', function() {
        document.getElementById('info').scrollIntoView({behavior: 'smooth'});
    });
}

