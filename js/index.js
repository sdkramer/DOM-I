const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

const middleImg = document.getElementById('middle-img');
middleImg.setAttribute('src', siteContent ['main-content']['middle-img-src'])

const ctaImg = document.getElementById('cta-img');
ctaImg.setAttribute('src', siteContent.cta['img-src'])


const navAs = document.querySelectorAll('nav a');
// console.log(navAs[0]);

navAs[0].textContent = siteContent ['nav']['nav-item-1'];
navAs[1].textContent = siteContent ['nav']['nav-item-2'];
navAs[2].textContent = siteContent ['nav']['nav-item-3'];
navAs[3].textContent = siteContent ['nav']['nav-item-4'];
navAs[4].textContent = siteContent ['nav']['nav-item-5'];
navAs[5].textContent = siteContent ['nav']['nav-item-6'];

const ctaText = document.querySelector('h1');
ctaText.textContent = siteContent['cta'] ['h1'];

document.querySelector('button').textContent = 
siteContent ['cta']['button']


/*******main content****/

document.querySelector('.text-content h4').textContent = siteContent ['main-content']['features-h4']

document.querySelector('.text-content p').textContent = siteContent ['main-content']['features-content']

const topText = document.querySelectorAll('.top-content .text-content');
console.log(topText[1]);
 
// topText[1][h4].textContent = siteContent ['main-content']['about-h4'];
topText[1].querySelector('h4').textContent = siteContent ['main-content']['about-h4']

topText[1].querySelector('p').textContent = siteContent ['main-content']['about-content']

/*****bottom content****/

const bText = document.querySelectorAll('.bottom-content .text-content');

bText[0].querySelector('h4').textContent = siteContent ['main-content']['services-h4']

bText[1].querySelector('h4').textContent = siteContent ['main-content']['product-h4']

bText[2].querySelector('h4').textContent = siteContent ['main-content']['vision-h4']

bText[0].querySelector('p').textContent = siteContent ['main-content']['services-content']

bText[1].querySelector('p').textContent = siteContent ['main-content']['product-content']

bText[2].querySelector('p').textContent = siteContent ['main-content']['vision-content']


/*****Contact******/
const contactPs = document.querySelectorAll('.contact p')

document.querySelector('.contact h4').textContent = siteContent.contact ['contact-h4']

contactPs[0].textContent = siteContent.contact ['address']

contactPs[1].textContent = siteContent.contact ['phone']

contactPs[2].textContent = siteContent.contact ['email']

/*****footer*****/

document.querySelector('footer p').textContent = siteContent.footer.copyright

/****add new content**/


for (let i = 0; i < navAs.length; i++) {
  navAs[i].style.color = 'green';
}


