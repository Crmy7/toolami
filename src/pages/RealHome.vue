<template>
    <div class="home-container">
        <!-- Logo -->
        <img src="path/to/your/logo.png" alt="Logo" class="logo">

        <!-- Boutons -->
        <RouterLink to="/Random"><button  class="btn">Random Tool</button></RouterLink>
        <RouterLink to="/Home"><button  class="btn">List of Tools</button></RouterLink>
    </div>
</template>

<script>

export default {
    name: 'HomePage',

    
};
</script>

<style>
.home-container {
    text-align: center;
    padding: 20px;
}

.logo {
    max-width: 200px;
    margin-bottom: 20px;
}

.btn {
    margin: 10px;
    padding: 10px 20px;
    font-size: 18px;
    cursor: pointer;
    /* Add more styling as per your design */
}
</style>