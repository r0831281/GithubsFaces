document.addEventListener('DOMContentLoaded', function () {
    const avatarContainer = document.getElementById('avatarContainer');
    const totalPics = 99999999;
    let currentId = 1;

    function loadPictures() {
        const avatarURL = `https://avatars.githubusercontent.com/u/${currentId}?v=4`;

        const imgElement = document.createElement('img');
        imgElement.src = avatarURL;
        imgElement.width = 40;
        imgElement.height = 40;

        avatarContainer.appendChild(imgElement);
        currentId++;

        // Load the next picture when the current one is appended
        if (currentId <= totalPics) {
            loadPictures();
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