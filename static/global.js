// IT'S ALIVE will be printed to the console when you use the Developer elements 
console.log('IT\'S ALIVE!'); 

function $$(selector, context = document) {
  return Array.from(context.querySelectorAll(selector));
}

// array of navlinks 
let navLinks = $$("nav a");

// finding the link to the currecnt page 
let currentLink = navLinks.find(
  (a) => a.host === location.host && a.pathname === location.pathname
);

// adding the current class to the currnet page link 
currentLink?.classList.add('current');

// Same pages as before 
let pages = [
    { url: "index.html", title: 'Home' },
    { url: "routes/projects/+page.svelte", title: 'Projects' },
    { url: "routes/resume/+page.svelte", title: 'Resume' },
    { url: "routes/contact/+page.svelte", title: 'Contact' },
    { url: 'https://github.com/ameek12', title: 'GitHub' }
];

// seeing if we are on the home page and storing into a variable 
const ARE_WE_HOME = document.documentElement.classList.contains('home');

// creating the navigation bar
let nav = document.createElement('nav');
document.body.prepend(nav);


// to create each link and add it to the nav and adding the theme
document.body.insertAdjacentHTML(
    'afterbegin',
    `
    <label class="color-scheme">
      Theme:
      <select id="theme-switcher">
        <option value="light dark">Automatic</option>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
    </label>
    `
);


const select = document.querySelector('#theme-switcher');

select.addEventListener('input', function (event) {
    const selectedScheme = event.target.value;
    document.documentElement.style.setProperty('color-scheme', selectedScheme);
    localStorage.setItem('colorScheme', selectedScheme);
    console.log('Color scheme changed to:', selectedScheme);
});

// contact page

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
  
  
    form?.addEventListener('submit', function (event) {
    
      event.preventDefault();
  
   
      const data = new FormData(form);
  
    
      let url = form.action + '?';
  
      
      for (let [name, value] of data) {
        url += `${encodeURIComponent(name)}=${encodeURIComponent(value)}&`;
      }
  
   
      url = url.slice(0, -1);
  
  
      location.href = url;
    });
  });
  function structuredClone(obj) {
    return JSON.parse(JSON.stringify(obj));
}