function filterCategory(category) {
    const images = document.querySelectorAll('.img-container');

    images.forEach(image => {
        if (category === 'all') {
            image.style.display = 'block';
        } else {
            if (image.classList.contains(category)) {
                image.style.display = 'block';
            } else {
                image.style.display = 'none';
            }
        }
    });
}
function filterImages() {
    const searchInput = document.getElementById('searchBar').value.toLowerCase();
    const images = document.querySelectorAll('.img-container');

    images.forEach(image => {
        const imgTitle = image.querySelector('h3').textContent.toLowerCase();
        if (imgTitle.includes(searchInput)) {
            image.style.display = 'block';
        } else {
            image.style.display = 'none';
        }
    });
}
document.getElementById('searchBar').addEventListener('keyup', filterImages);
const previews = document.querySelectorAll('.preview');
const closeButtons = document.querySelectorAll('.fa-times');
const buyButtons = document.querySelectorAll('.buy');
const pendingButtons = document.querySelectorAll('.pending');

buyButtons.forEach(button => {
    button.addEventListener('click', () => {
        const target = button.closest('.preview').getAttribute('data-target');
        const preview = document.querySelector(`.preview[data-target="${target}"]`);
        preview.style.display = 'flex';
        document.querySelector('.selections-preview').style.display = 'flex';
    });
});

pendingButtons.forEach(button => {
    button.addEventListener('click', () => {
        button.closest('.preview').style.display = 'none';
    });
});

closeButtons.forEach(button => {
    button.addEventListener('click', () => {
        document.querySelector('.selections-preview').style.display = 'none';
        previews.forEach(preview => preview.style.display = 'none');
    });
});
