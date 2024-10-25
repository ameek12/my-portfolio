<!-- src/routes/+page.svelte -->
<script>
    import projects from '$lib/projects.json'; // Importing the JSON data
    import Project from '$lib/Project.svelte'; // Import the Project component
</script>

<svelte:head>
    <title>Welcome</title>
</svelte:head>


<h1>Ann Meek</h1>
<p>Hello, my name is Ann Meek! I am a graduate student at UCSD and I work as a data analytics engineer at a small entertainment company.</p>
<p>This is a picture of the ruins of an old church in Bushmills Ireland near the ocean when I went for my anniversary.</p>
<img src="/images/Dublin_D5-053123_2405.jpg" alt="Dublin" style="width: 300px; height: auto;">

<h2>Latest Projects</h2>
<div class="projects">
    {#each projects.slice(0, 3) as p}
        <Project data={p} hLevel={3} /> <!-- Pass the data for the first three projects -->
    {/each}
</div>

<style>
    /* Include necessary styles for this specific page or use global styles */
    .projects {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(15em, 1fr));
        gap: 1em;
        margin: 1em 0;
    }
</style>
