<template>
    <div>

        <main class="wrapper">
            <Navbar></Navbar>
            <section class="section parallax bg1">
                <h2>Kusina Ni Nanay</h2>
            </section>
            <section class="section static">
                <p>Our Story: the idea for Nanay's kitchen restaurant began in Nanay's kitchen, a place to gather, eat
                    and enjoy
                    family. The calls of 'kain tayo' let's eat and 'Halika’t kumain.' come here and eat still
                    reverberate in
                    the
                    spirit of Kusina Ni Nanay</p>
            </section>
            <section class="section parallax bg2">
                <h2>Kain Tayo</h2>
            </section>
            <Footer></Footer>
        </main>

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
    .wrapper {
        /* The height needs to be set to a fixed value for the effect to work.
   * 100vh is the full height of the viewport. */
        height: 100vh;
        /* The scaling of the images would add a horizontal scrollbar, so disable x overflow. */
        overflow-x: hidden;
        /* Enable scrolling on the page. */
        overflow-y: auto;
        /* Set the perspective to 2px. This is essentailly the simulated distance from the viewport to transformed objects.*/
        perspective: 2px;
        background: url('../assets/wood.jpg') no-repeat;
        background-size: 100%;
        background-size: cover;
    }

    .section {
        /* Needed for children to be absolutely positioned relative to the parent. */
        position: relative;
        /* The height of the container. Must be set, but it doesn't really matter what the value is. */
        height: 100vh;

        /* For text formatting. */
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        text-shadow: 0 0 5px #000;

    }

    .parallax::after {
        /* Display and position the pseudo-element */
        content: " ";
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;

        /* Move the pseudo-element back away from the camera,
   * then scale it back up to fill the viewport.
   * Because the pseudo-element is further away, it appears to move more slowly, like in real life. */
        transform: translateZ(-1px) scale(1.5);
        /* Force the background image to fill the whole element. */
        background-size: 100%;
        /* Keep the image from overlapping sibling elements. */
        z-index: -1;
    }

    /* The styling for the static div. */
    .static {
        background: url('../assets/wood.jpg') no-repeat;
        background-size: cover;
        font-size: 3em;
        padding: 10px;
        color: goldenrod;
    }

    /* Sets the actual background images to adorable kitties. This part is crucial. */
    .bg1::after {
        background-image: url('https://res.cloudinary.com/dmglopmul/image/upload/v1539650858/projectPhotos/restaurant/kusina.jpg');
        background-repeat: no-repeat;
    }

    .bg2::after {
        background-image: url('https://res.cloudinary.com/dmglopmul/image/upload/v1539659222/childrenKusina1.jpg');
        background-repeat: no-repeat;
    }

    @media screen and (max-width: 425px) {
        .static {
            font-size: 2em;
        }

    }

    @media screen and (max-width: 320px) {
        .static {
            font-size: 1.8em;
        }

    }
</style>