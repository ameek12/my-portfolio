<script>
  import { page } from '$app/stores'; // To access current page info

  let pages = [
    { url: './', title: 'Home' },
    { url: './projects', title: 'Projects' },
    { url: './resume', title: 'Resume' },
    { url: './contact', title: 'Contact' },
    { url: 'https://github.com/ameek12', title: 'GitHub' }
  ];
</script>

<svelte:head>
  <title>Your Site Title</title>
</svelte:head>

<!-- Navigation Bar -->
<nav>
  {#each pages as p}
    <a href={p.url} class:current={'.' + $page.route.id === p.url} target={p.url.startsWith('http') ? '_blank' : null}>
      {p.title}
    </a>
  {/each}
</nav>

<slot /> <!-- This will display the page content -->

<style>
:root {
  --color-accent: oklch(65% 50% 0); 
  --color-accent-light: oklch(90% 60% 0); 
  color-scheme: light dark;
}

html {
  accent-color: var(--color-accent); 
}
section {
  max-width: 100ch;
  margin: 0 auto;
  padding: 1.5em;
  font: small-caps bold 24px/1 sans-serif;
  font-size: 2vw;
  margin-inline: max(1em, (100% - 100ch) / 2);
}

nav {
  display: flex; 
  margin-bottom: 1em;
  border-bottom: 1px solid oklch(80% 3% 250)
}

nav ul {
  display: contents;
}

nav a {
  flex: 2; 
  text-align: center; 
  padding: 10px;
  text-decoration: none;
  color: #333;
}

nav a.current {
  border-bottom: 0.4em solid oklch(80% 3% 200);
  padding-bottom: 0.5em; 
  font-weight: bold; 
}


nav a:hover {
  background-color: oklch(from var(--color-accent) 95% 5% h);
}
/* changed for js elements*/
.color-scheme {
  position: absolute;
  top: 1rem; 
  right: 1rem; 
  font-family: Arial, sans-serif;
  font-size: 0.9rem; 
  background-color: rgba(255, 255, 255, 0.8); 
  padding: 0.5rem; 
  border-radius: 2px; 
  /*box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);*/
}

#theme-switcher {
  margin-left: 0.5rem; 
  border: 1px solid #ccc; 
  border-radius: 5px; 
  padding: 0.25rem 0.5rem; 
  font-family: inherit; 
  font-size: inherit; 
  appearance: none; 
  background-color: transparent; 
  cursor: pointer; 
}
</style>
