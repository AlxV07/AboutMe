window.onload = function() {
    let mantis = '#61ea52'
    let bee = '#f7eea0'
    let glaucus = '#6b8fea'
    let colors = [bee, mantis, glaucus]
    let images = [getImg(0), getImg(1), getImg(2)]
    let colorIdx = 0;

    function nextTheme() {
        nextColor()
        nextImage()
    }

    function nextColor() {
        let targetColor = colors[colorIdx]
        document.body.style.color = targetColor;
        document.querySelectorAll('a').forEach(function (a) {
            a.style.color = targetColor;
        })
        colorIdx = (colorIdx + 1) % colors.length
    }

    async function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    let currentImageIdx = images.length - 1;
    async function nextImage() {
        let nextImageIdx = (currentImageIdx + 1) % images.length;
        while (images[currentImageIdx].style.opacity > 0) {
            await sleep().then(() => {
                images[currentImageIdx].style.opacity -= 0.01
            })
        }
        while (images[nextImageIdx].style.opacity < 1) {
            await sleep().then(() => {
                images[nextImageIdx].style.opacity = parseFloat(images[nextImageIdx].style.opacity) + 0.01
            })
        }
        currentImageIdx = nextImageIdx
    }

    function getImg(idx) {
        return document.getElementById(`img${idx}`)
    }

    function calculateAge(birthdate) {
        const currentDate = new Date();
        let age = currentDate.getFullYear() - birthdate.getFullYear();
        if (currentDate.getMonth() < birthdate.getMonth() ||
            (currentDate.getMonth() === birthdate.getMonth() && currentDate.getDate() < birthdate.getDate())) {
            age--;
        }
        return age;
    }
    document.getElementById('age-code-block').textContent = calculateAge(new Date('2008-12-06'));
    document.getElementById('prog-age-code-block').textContent = calculateAge(new Date('2020-12-06'));

    for (let i = 0; i < images.length; i++) {
        images[i].style.opacity = 0
        images[i].style.zIndex = 0
    }
    nextTheme()
    setInterval(nextTheme, 10000);
};