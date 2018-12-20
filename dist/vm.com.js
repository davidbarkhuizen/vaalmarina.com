var mobileUserAgentTokens = [
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
var userAgent = navigator.userAgent;
console.log(userAgent);
var isMobile = mobileUserAgentTokens
    .some(function (ua) { return userAgent.indexOf(ua) !== -1; });
console.log("isMobile " + isMobile);
var images = {
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
    ]
};
var rootE = document.getElementById('root');
// images.landscape.forEach((img: string) => {
//     const e = document.createElement("img");
//     e.setAttribute('id', img);
//     e.setAttribute('src', `images/${img}`);
//     e.setAttribute('width', `${rootE.offsetWidth}`);
//     e.classList.add('image-landscape');
//     rootE.appendChild(e);
// });
var transitionInClassName = 'transition-in';
var transitionOutClassName = 'transition-out';
var eFadedOut = null, eFadingOut = null, eFadingIn = null;
var index = -1;
var next = function () {
    // determine next element
    //
    index = index + 1;
    if (index >= images.landscape.length) {
        index = 0;
    }
    var idToFadeIn = images.landscape[index];
    // iterate
    //
    eFadedOut = eFadingOut;
    eFadingOut = eFadingIn;
    eFadingIn = document.getElementById(idToFadeIn);
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
var periodInS = 5;
var periodInMS = periodInS * 1000;
// next();
// setInterval(next, periodInMS);
//# sourceMappingURL=vm.com.js.map