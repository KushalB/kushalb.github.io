const resource = [
    /* --- CSS --- */
    '/assets/css/style.css',

    /* --- PWA --- */
    '/app.js',
    '/sw.js',

    /* --- HTML --- */
    '/index.html',
    '/404.html',

    
        '/categories-2/',
    
        '/categories/',
    
        '/tags-2/',
    
        '/tags/',
    
        '/archives-2/',
    
        '/archives/',
    
        '/about-2/',
    
        '/about/',
    

    /* --- Favicons & compressed JS --- */
    
    
        '/assets/img/favicons/android-chrome-192x192%202.png',
        '/assets/img/favicons/android-chrome-192x192.png',
        '/assets/img/favicons/android-chrome-512x512%202.png',
        '/assets/img/favicons/android-chrome-512x512.png',
        '/assets/img/favicons/apple-touch-icon%202.png',
        '/assets/img/favicons/apple-touch-icon.png',
        '/assets/img/favicons/favicon%202.ico',
        '/assets/img/favicons/favicon-16x16%202.png',
        '/assets/img/favicons/favicon-16x16.png',
        '/assets/img/favicons/favicon-32x32%202.png',
        '/assets/img/favicons/favicon-32x32.png',
        '/assets/img/favicons/favicon.ico',
        '/assets/img/favicons/mstile-150x150%202.png',
        '/assets/img/favicons/mstile-150x150.png',
        '/assets/js/dist/categories.min%202.js',
        '/assets/js/dist/categories.min.js',
        '/assets/js/dist/commons.min%202.js',
        '/assets/js/dist/commons.min.js',
        '/assets/js/dist/home.min%202.js',
        '/assets/js/dist/home.min.js',
        '/assets/js/dist/misc.min%202.js',
        '/assets/js/dist/misc.min.js',
        '/assets/js/dist/page.min%202.js',
        '/assets/js/dist/page.min.js',
        '/assets/js/dist/post.min%202.js',
        '/assets/js/dist/post.min.js',
        '/assets/js/dist/pvreport.min%202.js',
        '/assets/js/dist/pvreport.min.js'
];

/* The request url with below domain will be cached */
const allowedDomains = [
    

    'localhost:4000',

    
        'chirpy-img.netlify.app',
    

    'fonts.gstatic.com',
    'fonts.googleapis.com',
    'cdn.jsdelivr.net',
    'polyfill.io'
];

/* Requests that include the following path will be banned */
const denyUrls = [
    
];

