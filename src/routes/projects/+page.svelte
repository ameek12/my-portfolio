<script>
    import projects from '$lib/projects.json'; // Importing the JSON data
    import Project from '$lib/Project.svelte'; // Import the Project component
</script>

<svelte:head>
  <title>Projects</title>
</svelte:head>

<style>
    .projects {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(15em, 1fr));
        gap: 1em;
        margin: 1em 0;
    }

    .projects article {
        border: 1px solid #ccc;
        border-radius: 5px;
        padding: 1em;
        background-color: #fff;
    }

    .projects img {
        max-width: 100%;
        height: auto;
    }
</style>

<!-- Navigation -->
<nav>
    <ul>
        <!-- Navigation links will be dynamically added here -->
    </ul>
</nav>

<!-- Projects Section -->
<h1>Projects</h1>
<div class="projects">
    {#each projects as p}
        <Project data={p} hLevel={2} />
    {/each}
</div>
