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
/*My Code*/
const selectAllAnchorTags = document.querySelector(`a`);
console.log("myFirstSelection", selectAllAnchorTags)

const multipleSelections = document.querySelectorAll(`a`);
console.log("multiple selections", multipleSelections)

console.log(multipleSelections[2]);

const classSelector = document.querySelectorAll(`.cta-text`);
console.log("select all of this class", classSelector)


let codeSnippet = document.getElementById("cta-img");
codeSnippet.setAttribute('src', siteContent["cta"]["img-src"])

let middleImage = document.getElementById("middle-img");
middleImage.setAttribute('src', siteContent["main-content"]["middle-img-src"])

const navItem1 = document.querySelector("a")
navItem1.textContent = siteContent["nav"]["nav-item-1"]

const navItem2 = document.querySelectorAll("a")[1]
navItem2.textContent = siteContent["nav"]["nav-item-2"]

const navItem3 = document.querySelectorAll("a")[2]
navItem3.textContent = siteContent["nav"]["nav-item-3"]

const navItem4 = document.querySelectorAll("a")[3]
navItem4.textContent = siteContent["nav"]["nav-item-4"]

const navItem5 = document.querySelectorAll("a")[4]
navItem5.textContent = siteContent["nav"]["nav-item-5"]

const navItem6 = document.querySelectorAll("a")[5]
navItem6.textContent = siteContent["nav"]["nav-item-6"]

const h1Text = document.querySelector("h1")
h1Text.setAttribute('style', 'white-space: pre;');
h1Text.textContent = "DOM\r\n";
h1Text.textContent += "is\r\n";
h1Text.textContent += "Awesome"

const buttonText = document.querySelector("button")
buttonText.textContent = "Get Started"

const h4Text1 = document.querySelector("h4")
h4Text1.textContent = "Features"

const pText1 = document.querySelector("p")
pText1.textContent = siteContent["main-content"]["features-content"]

const h4Text2 = document.querySelectorAll("h4")[1]
h4Text2.textContent = "About"

const pText2 = document.querySelectorAll("p")[1]
pText2.textContent = siteContent["main-content"]["about-content"]

const h4Text3 = document.querySelectorAll("h4")[2]
h4Text3.textContent = "Services"

const pText3 = document.querySelectorAll("p")[2]
pText3.textContent = siteContent["main-content"]["services-content"]

const h4Text4 = document.querySelectorAll("h4")[3]
h4Text4.textContent = "Product"

const pText4 = document.querySelectorAll("p")[3]
pText4.textContent = siteContent["main-content"]["product-content"]

const h4Text5 = document.querySelectorAll("h4")[4]
h4Text5.textContent = "Vision"

const pText5 = document.querySelectorAll("p")[4]
pText5.textContent = siteContent["main-content"]["vision-content"]

const contact = document.querySelector(".contact h4")
contact.textContent = "Contact"

const pContact1 = document.querySelector(".contact p")
pContact1.setAttribute('style', 'white-space: pre;');
pContact1.textContent = "123 Way 456 Street\r\n"
pContact1.textContent += "Somewhere, USA"

const pContact2 = document.querySelectorAll(".contact p")[1]
pContact2.textContent = "1 (888) 888-8888"

const pContact3 = document.querySelectorAll(".contact p")[2]
pContact3.textContent = "sales@greatidea.io"

const footerText = document.querySelector("footer p")
footerText.textContent = "Copyright Great Idea! 2018"

const colorChange = document.querySelectorAll("nav a")
colorChange.forEach(element => {
  element.style.color = "green"
})

const addContent1 = document.createElement("a")
addContent1.textContent = "My Link!"

const addContent2 = document.createElement("a")
addContent2.textContent = "Another Link!"

const navSelector = document.querySelector("nav")

navSelector.appendChild(addContent2)

navSelector.prepend(addContent1)

