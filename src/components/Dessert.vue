<template>
    <div class="main">
        <div class="centered">
            <section class="cards">
                <article class="card">
                    <a href="#">

                        <picture class="thumbnail">
                            <img :src="dessert1" alt="A banana that looks like a bird">

                            <!-- <img src="http://www.abbeyjfitzgerald.com/wp-content/uploads/2017/02/image-example-01.jpg"
                                        alt="A banana that looks like a bird">-->
                        </picture>
                        <div class="card-content">

                            <h2>BANANA SPLIT</h2>
                            <p>A banana split is an ice cream-based dessert. In its traditional form it is served in a
                                long dish called a boat. A banana is cut in half lengthwise (hence the name) and laid
                                in the dish.</p>
                            <p>There are many variations, but the classic banana split is made with three
                                scoops of ice cream (one each of vanilla, chocolate, and strawberry.) served between
                                the split banana. A sauce or sauces (chocolate, strawberry, and caramel are
                                traditional) are drizzled onto the ice cream, then crushed nuts (generally peanuts or
                                walnuts) and whipped cream (optional), then topped with a maraschino cherry.</p>
                        </div><!-- .card-content -->
                    </a>
                </article>
                <article class="card">
                    <a href="#">
                        <picture class="thumbnail">
                            <img :src="dessert2" alt="Norwegian boller">
                        </picture>
                        <div class="card-content">
                            <h2>HALO HALO</h2>
                            <p>A concoction of crushed ice, evaporated milk and various ingredients including, among
                                others, sweetened beans, coconut julienes, sago, gulaman (seaweed gelatin), pinipig
                                rice, boiled root crops in cubes, fruit slices, flan, and topped with a scoop of ice
                                cream.</p>
                        </div><!-- .card-content -->
                    </a>
                </article><!-- .card -->

                <article class="card">
                    <a href="#">
                        <picture class="thumbnail">
                            <img :src="dessert3" alt="A dinosaur wearing an aluminium jacket">
                        </picture>
                        <div class="card-content">
                            <h2>LECHEN FLAN</h2>
                            <p>Leche Flan is a dessert made-up of eggs and milk with a soft caramel on top. It
                                resembles crème caramel and caramel custard.</p>
                        </div><!-- .card-content -->
                    </a>
                </article><!-- .card -->

                <article class="card">
                    <a href="#">
                        <picture class="thumbnail">
                            <img :src="dessert4" alt="Chocolate filled boller">
                        </picture>
                        <div class="card-content">
                            <h2>PUTO</h2>
                            <p>PUTO is a steamed rice cake and usually eaten as a dessert but can also be eaten for
                                breakfast.</p>
                        </div><!-- .card-content -->
                    </a>
                </article>
                <!-- .card -->
            </section>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Dessert',
        data() {
            return {
                dessert1: require('../assets/dessert/banana-split.jpg'),
                dessert2: require('../assets/dessert/halohalo.jpg'),
                dessert3: require('../assets/dessert/leche-flan.jpg'),
                dessert4: require('../assets/dessert/puto.jpg')

            }
        }
    }
</script>

<style scoped>
    /* Import the google web fonts you want to use */


    @import url('https://fonts.googleapis.com/css?family=Comfortaa|Patua+One');

    /* Card Based Layout - Base styles */

    body {
        background: hsl(0, 0%, 90%);
    }

    /*--------------------------------------------------------------
Typography
--------------------------------------------------------------*/
    body,
    button,
    input,
    select,
    textarea {
        color: #404040;
        font-family: 'Comfortaa', Arial, sans-serif;
        font-size: 18px;
        line-height: 1.5;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        clear: both;
        font-family: 'Patua One', serif;
        letter-spacing: 2px;
    }

    h2 {
        font-size: 1rem;
        color: #007489;
    }

    p {
        margin-bottom: 1.5em;
        color: #898989;
    }

    b,
    strong {
        font-weight: bold;
    }

    dfn,
    cite,
    em,
    i {
        font-style: italic;
    }

    blockquote {
        margin: 0 1.5em;
    }

    address {
        margin: 0 0 1.5em;
    }

    pre {
        background: #eee;
        font-family: "Courier 10 Pitch", Courier, monospace;
        font-size: 15px;
        font-size: 1.5rem;
        line-height: 1.6;
        margin-bottom: 1.6em;
        max-width: 100%;
        overflow: auto;
        padding: 1.6em;
    }

    code,
    kbd,
    tt,
    var {
        font: 15px Monaco, Consolas, "Andale Mono", "DejaVu Sans Mono", monospace;
    }

    abbr,
    acronym {
        border-bottom: 1px dotted #666;
        cursor: help;
    }

    mark,
    ins {
        background: #fff9c0;
        text-decoration: none;
    }

    sup,
    sub {
        font-size: 75%;
        height: 0;
        line-height: 0;
        position: relative;
        vertical-align: baseline;
    }

    sup {
        bottom: 1ex;
    }

    sub {
        top: .5ex;
    }

    small {
        font-size: 75%;
    }

    big {
        font-size: 125%;
    }

    .masthead {
        background-color: #005b75;
    }

    .masthead p,
    .masthead p a {
        color: white;
    }

    .site-title {
        color: white;
    }

    img {
        display: block;
        border: 0;
        width: 100%;
        height: auto;
    }

    .cards {
        display: flex;
        flex-wrap: wrap;
    }


    .card {
        background: white;
        margin-bottom: 2em;
        flex: 1 0 500px;
        box-sizing: border-box;
        margin: 1rem .25em;
    }

    .card a {
        color: black;
        text-decoration: none;
    }

    .card a:hover {
        box-shadow: 3px 3px 8px hsl(0, 0%, 80%);
    }

    .card-content {
        padding: 1.4em;
    }

    .card-content h2 {
        margin-top: 0;
        margin-bottom: .5em;
        font-weight: bold;
    }

    .card-content p {
        font-size: 80%;
    }

    /* Flexbox stuff */

    @media screen and (min-width: 40em) {
        .card {
            max-width: calc(50% - 1em);
        }
    }

    @media screen and (min-width: 60em) {

        .card {
            max-width: calc(25% - 1em);
        }
    }
</style>