

const mobileUserAgentTokens: string[] = [
    'Android',
    'webOS',
    'iPhone',
    'iPad',
    'iPod',
    'BlackBerry',
    'BB',
    'PlayBook',
    'IEMobile',
    'Windows Phone',
    'Kindle',
    'Silk',
    'Opera Mini',    
];

const userAgent = navigator.userAgent;

console.log(userAgent);

const isMobile = mobileUserAgentTokens
    .some((ua: string) => userAgent.indexOf(ua) !== -1);

console.log(`isMobile ${isMobile}`);

const imagesByOrientation = {
    landscape: [
    'landscape1.jpg',
    'people1.jpg',
    'people3.jpg',
    'people4.jpg',
    'people5.jpg',
    ],
    portrait: [
        'landscape2.jpg',
        'landscape3.jpg',
        'people2.jpg',
        'people6.jpg',
        'plant1.jpg',
        'plant2.jpg',
        'plant3.jpg',
    ]
};

const rootE = document.getElementById('root');

// const images = [...imagesByOrientation.portrait, ...imagesByOrientation.landscape];

const images = [...imagesByOrientation.landscape, ...imagesByOrientation.portrait];

const isPortrait = (id) =>
    imagesByOrientation.portrait.indexOf(id) !== -1

const isLandscape = (id) =>
    imagesByOrientation.landscape.indexOf(id) !== -1

images.forEach((img: string) => {
    const e = document.createElement("img");
    e.setAttribute('id', img);
    e.setAttribute('src', `images/${img}`);

    // if (isPortrait(img)) {
    //     e.setAttribute('height', `${rootE.offsetHeight}`);
    // } else if (isLandscape(img)) {
    //     e.setAttribute('width', `${rootE.offsetWidth}`);
    // } else {
    //     throw new Error('unknown orientation');
    // }
    e.classList.add('image');
    rootE.appendChild(e);

    e.onload = function() {
        const width  = e.naturalWidth;
        e.setAttribute('data-natural-width', width.toString());

        const height = e.naturalHeight;
        e.setAttribute('data-natural-height', height.toString());
    }
});

const transitionInClassName = 'transition-in';
const transitionOutClassName = 'transition-out';

let eFadedOut = null, eFadingOut = null, eFadingIn = null;
let index = -1;
const next = () => {

    // determine next element
    //
    index = index + 1;
    if (index >= images.length) {
        index = 0;
    }
    const idToFadeIn = images[index]; 
    
    // iterate
    //
    eFadedOut = eFadingOut;
    eFadingOut = eFadingIn;

    eFadingIn = document.getElementById(idToFadeIn);
    const h = eFadingIn.getAttribute('data-natural-height');
    const w = eFadingIn.getAttribute('data-natural-width');
    
    eFadingIn.removeAttribute('height');   
    eFadingIn.removeAttribute('width');   

    !(rootE.offsetHeight/rootE.offsetWidth > 1)
        ? eFadingIn.setAttribute('height', `${rootE.offsetHeight}`)
        : eFadingIn.setAttribute('width', `${rootE.offsetWidth}`);

    // apply transitions
    //
    if (eFadedOut !== null) {
        eFadedOut.classList.remove(transitionOutClassName);
    }

    if (eFadingOut !== null) {
        eFadingOut.classList.add(transitionOutClassName);
        eFadingOut.classList.remove(transitionInClassName);    
    }
    
    eFadingIn.classList.add(transitionInClassName);
};

const periodInS = 2;
const periodInMS = periodInS * 1000;

next();
setInterval(next, periodInMS);