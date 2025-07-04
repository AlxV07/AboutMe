// ======= Pfp Cycle =======

const pfps = document.querySelectorAll('.pfp');
pfps.forEach(pfp => pfp.style.opacity = '0');

let idx = pfps.length - 1;  // start transition to first pfp

function nextTheme() {
    idx = (idx + 1) % pfps.length;
    transitionImage();
}

async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function transitionImage() {
    const prevIdx = idx === 0 ? pfps.length - 1 : idx  - 1;
    while (pfps[prevIdx].style.opacity > 0) {
        await sleep(10).then(() => {
            pfps[prevIdx].style.opacity -= '0.01';
        })
    }
    while (pfps[idx].style.opacity < 1) {
        await sleep(10).then(() => {
            pfps[idx].style.opacity = (parseFloat(pfps[idx].style.opacity) + 0.01).toString();
        })
    }
}

nextTheme();
setInterval(nextTheme, 10000);

// ======= Year-Based =======

function yearsSince(birthdate) {
    const currentDate = new Date();
    let age = currentDate.getFullYear() - birthdate.getFullYear();
    if (currentDate.getMonth() < birthdate.getMonth() ||
        (currentDate.getMonth() === birthdate.getMonth() && currentDate.getDate() < birthdate.getDate())) {
        age--;
    }
    return age;
}

document.getElementById('age-code-block').textContent = yearsSince(new Date('2008-12-06')).toString();
document.getElementById('prog-age-code-block').textContent = yearsSince(new Date('2020-12-06')).toString();
