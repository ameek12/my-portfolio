<script>
// JavaScript logic can go here if needed
</script>

<svelte:head>
  <title>Contact</title>
</svelte:head>
<!-- 
Color Scheme Switcher
<div class="color-scheme">
    <label for="theme-select">Theme:</label>
    <select id="theme-select">
        <option value="auto">Automatic</option>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
    </select>
</div> -->

<nav>
    <ul>
        <!-- Navigation links will be dynamically added here -->
    </ul>
</nav>
<!-- Contact Information -->
<section class="contact-info">
    <h1>Contact</h1>
    <!-- Optional Contact Form (if needed) -->
    <form action="submit_form.php" method="post">
        <label for="name">Name:</label><br>
        <input type="text" id="name" name="name" required><br><br>
        <label for="email">Email:</label><br>
        <input type="email" id="email" name="email" required><br><br>
        <label for="message">Message:</label><br>
        <textarea id="message" name="message" rows="5" required></textarea><br><br>
        <input type="submit" value="Send Message">
    </form>
</section>
