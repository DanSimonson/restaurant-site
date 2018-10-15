<template>
    <div class="main">
        <div class="centered">
            <section class="cards">
                <article class="card">
                    <a href="#">

                        <picture class="thumbnail">
                            <img :src="drink1" alt="A banana that looks like a bird">

                            <!-- <img src="http://www.abbeyjfitzgerald.com/wp-content/uploads/2017/02/image-example-01.jpg"
                                                alt="A banana that looks like a bird">-->
                        </picture>
                        <div class="card-content">

                            <h2>COFFEE</h2>
                            <p>Brewed drink prepared from roasted coffee beans, the seeds of berries from certain
                                Coffea species.</p>
                        </div><!-- .card-content -->
                    </a>
                </article>
                <article class="card">
                    <a href="#">
                        <picture class="thumbnail">
                            <img :src="drink2" alt="Norwegian boller">
                        </picture>
                        <div class="card-content">
                            <h2>SAGO AT GULAMAN</h2>
                            <p>Filipino beverage made of caramelized brown sugar, water, gelatin, and tapioca pearls.</p>
                        </div><!-- .card-content -->
                    </a>
                </article><!-- .card -->

                <article class="card">
                    <a href="#">
                        <picture class="thumbnail">
                            <img :src="drink3" alt="A dinosaur wearing an aluminium jacket">
                        </picture>
                        <div class="card-content">
                            <h2>ICED-TEA</h2>
                            <p>ICED LEMON TEA-perfect touch of citrus made with cane sugar, real tea leaves, and
                                natural lemon flavors.</p>
                        </div><!-- .card-content -->
                    </a>
                </article><!-- .card -->

                <article class="card">
                    <a href="#">
                        <picture class="thumbnail">
                            <img :src="drink4" alt="Chocolate filled boller">
                        </picture>
                        <div class="card-content">
                            <h2>SODA POP</h2>
                            <p>Also available: Soda Pop, Bottled Water</p>
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
        name: 'Drink',
        data() {
            return {
                drink1: require('../assets/drink/coffee.jpg'),
                drink2: require('../assets/drink/gulaman.jpg'),
                drink3: require('../assets/drink/Iced-Tea.jpg'),
                drink4: require('../assets/drink/sodapop.jpg')
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