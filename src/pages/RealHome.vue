<template>
    <div class="home-container">
        <nav class="nav">
            <RouterLink to="/" style="height: 100%; width: 100%;">
                <img src="/src/assets/Logo_ToolAmI_v2.png" alt="" style="width: 100%; height: 100%; object-fit: contain;">
            </RouterLink>
        </nav>
        <div style="height: 15vh; width: 100vw"></div>
        <div class="wrapper" style="min-height: 70vh;">
            <RouterLink to="/Home"><button class="btn">Choose my self</button></RouterLink>
            <RouterLink to="/Random"><button class="btn">Choose my tool</button></RouterLink>
            
        </div>

    </div>
</template>

<script>

export default {
    name: 'HomePage',
};
</script>

<style lang="scss">

.nav {
    width: 100%;
    height: 15vh;
    position: fixed;
    top: 0;
    left: 0;
    background: white;
    display: flex;
    align-items: center;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    transition: transform 0.2s;
}

.nav--hidden {
    transform: translateY(calc(-1 * 15vh)) !important;
    box-shadow: none;
}


.home-container {
    text-align: center;
    padding: 20px;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    flex-wrap: wrap;

    .wrapper {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        width: 100%;

        @media screen and (max-width: 768px) {
            flex-direction: column;
            
        }
    }
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