<template>
    <div class="main">
        <div class="centered">
            <section class="cards">
                <article class="card">
                    <a href="#">

                        <picture class="thumbnail">
                            <img :src="relativePath1" alt="A banana that looks like a bird">

                            <!-- <img src="http://www.abbeyjfitzgerald.com/wp-content/uploads/2017/02/image-example-01.jpg"
                                alt="A banana that looks like a bird">-->
                        </picture>
                        <div class="card-content">

                            <h2>ATCHARA OR ATCHARANG PAPAYA</h2>
                            <p>ATCHARA OR ATCHARANG PAPAYA is an appetizer made from pickled green papaya. Julienned or
                                grated green papaya are placed in airtight containers and soaked for a week in cooked
                                vinegar and sugar mixture with onions, garlic, ginger, pepper corn, and red bell
                                pepper.</p>
                        </div><!-- .card-content -->
                    </a>
                </article>
                <article class="card">
                    <a href="#">
                        <picture class="thumbnail">
                            <img :src="relativePath2" alt="Norwegian boller">
                        </picture>
                        <div class="card-content">
                            <h2>CALAMARES</h2>
                            <p>Calamares or Calamari is a deep-fried squid dish that is made out of batter-coated then
                                deep fried squid served with a mixture of
                                catsup and mayonnaise condiments,</p>
                        </div><!-- .card-content -->
                    </a>
                </article><!-- .card -->

                <article class="card">
                    <a href="#">
                        <picture class="thumbnail">
                            <img :src="relativePath3" alt="A dinosaur wearing an aluminium jacket">
                        </picture>
                        <div class="card-content">
                            <h2>LUMPIANG SHANGHAI</h2>
                            <p>LUMPIANG SHANGHAI or Spring Rolls is a dish made-up of ground pork, minced onion,
                                carrots, and spices with the mixture held together by beaten egg.</p>
                        </div><!-- .card-content -->
                    </a>
                </article><!-- .card -->

                <article class="card">
                    <a href="#">
                        <picture class="thumbnail">
                            <img :src="relativePath4" alt="Chocolate filled boller">
                        </picture>
                        <div class="card-content">
                            <h2>Sizzling Gambas</h2>
                            <p>Sizzling Gambas is a shrimp dish that often uses medium to large sized shrimps served on
                                a hot metal plate known as a sizzling plate (or fajita plate) to make it more appealing
                                and exciting to eat.</p>
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
        name: 'Appetizer',
        data() {
            return {

                relativePath1: require('../assets/appetizer/Atsara.jpg'),
                relativePath2: require('../assets/appetizer/calamares.jpg'),
                relativePath3: require('../assets/appetizer/shanghai.jpg'),
                relativePath4: require('../assets/appetizer/sizzlinggambas.jpg')
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