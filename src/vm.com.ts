

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

const images = [
    'landscape1.jpg',
    'landscape2.jpg',
    'landscape3.jpg',
    'people1.jpg',
    'people2.jpg',
    'people3.jpg',
    'people4.jpg',
    'people5.jpg',
    'people6.jpg',
    'plant1.jpg',
    'plant2.jpg',
    'plant3.jpg',
];

const rootE = document.getElementById('root');

images.forEach((img: string) => {
    const e = document.createElement("img");
    e.setAttribute('id', img);
    e.setAttribute('src', `images/${img}`);
    rootE.appendChild(e);
});