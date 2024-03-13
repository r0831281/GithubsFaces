document.addEventListener('DOMContentLoaded', function () {
    const avatarContainer = document.getElementById('avatarContainer');
    const totalPics = 99999999;

    let picsnow = 0;

    function loadPictures() {
        let currentId = Math.floor(Math.random() * totalPics) + 1;
        const avatarURL = `https://avatars.githubusercontent.com/u/${currentId}?v=4`;

        const imgElement = document.createElement('img');
        imgElement.src = avatarURL;
        avatarContainer.appendChild(imgElement);
        picsnow++;
        console.log(picsnow);

        // Load the next picture when the current one is appended
        if (picsnow <= totalPics) {
            loadPictures();
        }
        else {
            observer.unobserve(document.getElementById('loadTrigger'));
            return;
        }
    }

    // Use Intersection Observer to trigger loading more pictures as the user scrolls
    const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            loadPictures();
        }
    }, { threshold: 0.5 }); // Adjust the threshold based on your preferences

    observer.observe(document.getElementById('loadTrigger'));
});