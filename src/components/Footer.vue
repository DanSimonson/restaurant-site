<template>
    <footer>
        <h1>Contact Us</h1>
        <div class="container">
            <div class="row">
                <div class="col small"><i class="fab fa-facebook-square"></i> Facebook</div>
                <!--<div class="col">Posts</div>
                <div class="col">Trending</div>
                <div class="col">Movies</div>
                <div class="col">Privacy</div>
                <div class="col">Disclaimer</div>-->
            </div>

            <div class="row">
                <div class="col small"><i class="fab fa-instagram"></i> Instagram</div>
                <!--<div class="col">Posts</div>
                <div class="col">Trending</div>
                <div class="col">Movies</div>
                <div class="col">Privacy</div>
                <div class="col">Disclaimer</div>-->
            </div>

            <div class="row">
                <div class="col small"><i class="fab fa-pinterest-square"></i> Pinterest</div>
                <!--<div class="col">Posts</div>
                <div class="col">Trending</div>
                <div class="col">Movies</div>
                <div class="col">Privacy</div>
                <div class="col">Disclaimer</div>-->
            </div>
            <div class="row">
                <div class="col small"><i class="fab fa-twitter-square"></i> Twitter</div>
                <!--<div class="col">Posts</div>
                <div class="col">Trending</div>
                <div class="col">Movies</div>
                <div class="col">Privacy</div>
                <div class="col">Disclaimer</div>-->
            </div>
        </div>
    </footer>

</template>
<script>
    export default {
        name: 'Footer',
        data() {
            return {

            }
        }
    }
</script>
<style scoped>
    footer {
        background: url('../assets/wood.jpg') no-repeat;
        background-size: 100%;
        background-size: cover;
    }

    .container {}

    h1 {
        text-align: center;
        padding: 1rem;
        margin-bottom: 0;
        border-bottom: 2px solid;
        color: goldenrod;
        font-weight: 900;
        font-size: 1.2em;
        background: linear-gradient(rgba(20, 20, 20, .5),
            rgba(20, 20, 20, .5))
    }



    .container {
        display: grid;
        padding: 1rem;
        text-transform: capitalize;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        background: linear-gradient(rgba(20, 20, 20, .5),
            rgba(20, 20, 20, .5))
    }

    .row {
        padding: 1rem;
        font-size: 1.2rem;
        /*background: #D32F2F;*/

    }

    .col {
        /*background-color: #D32F2F;*/
        color: goldenrod;
        /*background-color:
            /*#fff;
            color: rgba(0, 0, 0, .7);*/
        cursor: pointer;
        text-align: center;
        padding: .7rem;
        /*box-shadow: 0 1px 10px black;*/

    }

    .col:hover {
        color: gold;
    }
</style>