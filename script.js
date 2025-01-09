let dynamicTheme = false
document.getElementById('toggle-theme').onclick = () => {
    dynamicTheme = !dynamicTheme
    nextTheme()
}
let mantis = '#a5e596'
let bee = '#f5ea9e'
let glaucus = '#bccaee'
let dynamicColors = [bee, mantis, glaucus]
let images = [getImg(0), getImg(1), getImg(2)]
let themeIdx = images.length - 2;

function nextTheme() {
    themeIdx = (themeIdx + 1) % images.length
    transitionColor()
    transitionImage()
}

function transitionColor() {
    let t;
    let u;
    if (dynamicTheme) {
        t = 'background-color 4s ease';
        u = ', color 4s ease';
    } else {
        t = 'none';
        u = '';
    }
    document.body.style.transition = t + u;
    document.querySelectorAll('nav').forEach(function (a) { a.style.transition = t; })
    document.querySelectorAll('section').forEach(function (a) { a.style.transition = t; })
    document.querySelectorAll('.blog-post').forEach(function (a) { a.style.transition = t; })

    let targetColor;
    let targetBackgroundColor;
    let targetSectionBackgroundColor;
    let targetBlogPostBackgroundColor;
    if (dynamicTheme) {
        document.getElementById('toggle-theme').textContent = 'Disable Dynamic Theme'
        targetColor = dynamicColors[themeIdx]
        targetBackgroundColor = '#000000'
        targetSectionBackgroundColor = '#070707'
        targetBlogPostBackgroundColor = '#101010'
    } else {
        document.getElementById('toggle-theme').textContent = 'Enable Dynamic Theme'
        targetColor = '#000000'
        targetBackgroundColor = '#f5f5f5'
        targetSectionBackgroundColor = '#eaeaea'
        targetBlogPostBackgroundColor = '#eeeeee'
    }
    document.body.style.color = targetColor;
    document.body.style.backgroundColor = targetBackgroundColor
    document.querySelectorAll('nav').forEach(function (a) { a.style.backgroundColor = targetSectionBackgroundColor; })
    document.querySelectorAll('section').forEach(function (a) { a.style.backgroundColor = targetSectionBackgroundColor; })
    document.querySelectorAll('.blog-post').forEach(function (a) { a.style.backgroundColor = targetBlogPostBackgroundColor; })
    document.querySelectorAll('a').forEach(function (a) { a.style.color = targetColor; })
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