const toggleButton = document.querySelector('.fa-bars');
const navLinksContainer = document.querySelector('.nav-links-container');
const bannerContenet = document.querySelector('.banner-section');

document.addEventListener('DOMContentLoaded', () => {
    navLinksContainer.classList.add('active');
})

toggleButton.addEventListener('click', () => {

    document.removeEventListener('DOMContentLoaded', () => {
        navLinksContainer.classList.remove('active');
    })
    toggleButton.classList.toggle('fa-xmark')
    navLinksContainer.classList.toggle('active');
})