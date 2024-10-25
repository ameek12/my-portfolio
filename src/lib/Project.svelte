<!-- src/lib/Project.svelte -->
<script>
    export let data = {}; // Define prop for project data
    export let hLevel = 2; // Default heading level
</script>

<svelte:element this={'h' + hLevel}>{data.title}</svelte:element>
<img src={data.image} alt={data.title} />
<p>{data.description}</p>

<style>
    /* Move any styles specific to this component here */
    article {
        border: 1px solid #ccc;
        border-radius: 5px;
        padding: 1em;
        background-color: #fff; /* Ensure articles have a white background */
        margin-bottom: 1em; /* Space between articles */
    }
    
    img {
        max-width: 100%; /* Responsive image size */
        height: auto; /* Maintain aspect ratio */
    }
</style>
