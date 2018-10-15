<template>
    <div>
        <Navbar></Navbar>
        <h1>The About Page</h1>
    </div>
</template>
<script>
    import Navbar from './Navbar'
    export default {
        components: {
            Navbar
        },
        data() {
            return {

            }
        }
    }
</script>
<style scoped>
    h1 {
        color: black;
    }
</style>