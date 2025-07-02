let images = [getImg(0), getImg(1), getImg(2)]
let themeIdx = images.length - 2;

function nextTheme() {
    themeIdx = (themeIdx + 1) % images.length
    transitionImage()
}
async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function getImg(idx) {
    return document.getElementById(`img${idx}`)
}

async function transitionImage() {
    let prevImageIdx = themeIdx === 0 ? images.length - 1 : themeIdx - 1
    while (images[prevImageIdx].style.opacity > 0) {
        await sleep(10).then(() => {
            images[prevImageIdx].style.opacity -= 0.01
        })
    }
    while (images[themeIdx].style.opacity < 1) {
        await sleep(10).then(() => {
            images[themeIdx].style.opacity = parseFloat(images[themeIdx].style.opacity) + 0.01
        })
    }
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
}
nextTheme()
setInterval(nextTheme, 10000);