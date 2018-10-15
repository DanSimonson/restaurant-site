<template>

    <div class='wrapper'>
        <div class='carousel-view '>
            <div class='button-prev' @click="arrowLeft" name='fade'></div>
            <transition-group class='carousel' tag="div">
                <div v-for="(slide, index) in slides" class='slide' :key="slide.id" :style="{backgroundImage: 'url(' + slides[index].imgLink + ')'}">
                    <!--<img :src='slide.imgLink'>-->
                    <!--<h4> {{ slide.title }} </h4>-->
                </div>
            </transition-group>

            <div class='carousel-controls'>
                <div class='squares coolTxt'>
                    <div v-for="(slide, index) in slides" :key="slide.id" :style="{backgroundImage: 'url(' + slides[index].imgLink + ')'}">
                        <!--<h4 style="color:black">{{slide.title}}</h4>-->
                    </div>
                    <p>{{ slides[currentMsg].title }}</p>
                </div>
                <!--<button class='carousel-controls__button' @click="previous">prev</button>
            <button class='carousel-controls__button' @click="next">next</button>-->

            </div>
            <div class='button-next' @click="arrowRight"></div>
        </div>
    </div>

</template>

<script>
    export default {
        name: 'Slide',
        data() {
            return {

                slides: [
                    {
                        imgLink: require('../assets/tapsilog.jpg'),
                        title: 'TAPSILOG',
                        id: 1
                    },
                    {
                        imgLink: require('../assets/sizzlingSisig.jpg'),
                        title: 'SIZZLING SISIG',
                        id: 2
                    },
                    {
                        imgLink: require('../assets/pancitCantonSrc.jpg'),
                        title: 'PANCIT CANTON',
                        id: 3
                    },
                    {
                        imgLink: require('../assets/karekare.jpg'),
                        title: 'KARE KARE',
                        id: 4
                    },
                    {
                        imgLink: require('../assets/adobongManok.jpg'),
                        title: 'ADOBONG MANOK',
                        id: 5
                    }
                ],
                stopMe: null,
                stopMsg: null,
                currentMsg: ''
            }
        },
        created() {
            let selfie = this;
            this.stopMe = setInterval(() => {
                selfie.next();
            }, 4000)
            this.stopMsg = setTimeout(() => {
                this.nextSlide();
            }, 4000)
            this.nextSlide()
        },
        methods: {
            nextSlide() {
                if (this.currentMsg + 1 < this.slides.length) {
                    this.currentMsg++;
                } else {
                    this.currentMsg = 0
                }
            },
            next() {
                const first = this.slides.shift()
                this.slides = this.slides.concat(first)
            },
            previous() {
                const last = this.slides.pop()
                this.slides = [last].concat(this.slides)
            },
            arrowLeft() {
                clearInterval(this.stopMe);
                this.previous();
                let selfie = this;
                this.stopMe = setInterval(() => {
                    selfie.previous()
                }, 4000)

            },
            arrowRight() {
                clearInterval(this.stopMe);
                this.next();
                let selfie = this;
                this.stopMe = setInterval(() => {
                    selfie.next()
                }, 4000)
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    @import url('https://fonts.googleapis.com/css?family=Quattrocento+Sans');

    h4 {
        color: #fff;
    }

    .coolTxt {
        color: goldenrod;
        /* #BDBDBD;*/
        text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
        font-weight: 900;
    }

    .wrapper {
        /*position: relative;*/
        display: flex;
        justify-content: center;
        align-content: center;
        background: url('../assets/wood.jpg') no-repeat;
        /*background-size: 100%;*/
        background-size: cover;
        /*height: 600px;
            width: 1050px;*/
        /*border: 5px solid red;*/

    }

    .carousel-view {
        position: relative;
        width: 100%;
        /*border: 5px solid green;*/
    }

    .carousel-view .button-prev,
    .carousel-view .button-next {
        /*height: 20px;
                  width: 20px;
                  background-color: yellow;*/
        position: absolute;
        top: 55%;
        border: 12px solid transparent;
        padding-top: 2px;

        /*border-left-color: transparent;
              border-right-color: purple;
              border-bottom-color: violet;
              border-top-color: crimson;*/
    }

    .carousel-view .button-prev {
        border-right-color: goldenrod;
        transform: rotate(-3deg);
        z-index: 1;
        left: 4%;
    }

    .carousel-view .button-next {
        border-left-color: goldenrod;
        transform: rotate(0deg);
        right: 0;


    }

    .carousel {
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        width: 100%;
        min-height: 65%;
        /*border: 5px solid black*/
    }

    .carousel-controls {
        /*border: 5px solid mediumslateblue;*/
        position: relative;
        height: 200px;
        /*width: 100%;*/
    }

    .carousel-controls .squares {
        font-family: 'Quattrocento Sans', sans-serif;
        position: absolute;

        /*transform: translate(-50%, -50%);*/
        font-size: 1.5em;
        font-weight: 700;
        /*border: 5px solid yellow;*/
        height: 200px;
        width: 150px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        padding: 2px;
        display: flex;
        justify-content: center;
        align-self: center;
    }

    .carousel-controls .squares p {
        font-size: 1.5em;
        left: 50%;

    }

    .carousel-controls .squares .pslide-one p {
        /*position: absolute;
                top: 40%;
                left: 1%;
                /*transform: translate(-50%, -50%);*/

    }

    .carousel-controls .squares .pslide-two p {
        /*position: absolute;
          left: 1%;
        /*transform: translate(-50%, -50%);*/
        color: #BDBDBD;
        text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
        font-weight: 900;

    }


    .carousel-controls .squares a {
        /*position: absolute;
                top: 80%;
                left: 5%;
                transform: translate(-50%, -50%);
            font-family: 'Quattrocento Sans', sans-serif;
            font-size: 1em;*/

    }

    .carousel-controls .squares a:hover {
        color: wheat;
    }

    /* .carousel-controls .squares div {
                    /*position: absolute;
                height: 40px;
                width: 40px;
                margin-right: 10px;
                background-color: white;
                border-radius: 50%;
                display: flex;
                top: 70%;
                left: 70%;
                transform: translate(-50%, -50%);
        
            }*/



    .slide {
        flex: 0 0 30em;
        height: 30em;
        margin: 1em;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 0.1em solid #000;
        border-radius: 50%;
        transition: transform 0.3s ease-in-out;

    }

    .slide:first-of-type {
        opacity: 0;
    }

    .slide:last-of-type {
        opacity: 0;
    }

    .fade-enter-active,
    .fade-leave-active {
        transition: all 0.8s ease;
        overflow: hidden;
        visibility: visible;
        opacity: 1;
        position: absolute;
    }

    .fade-enter,
    .fade-leave-to {
        opacity: 0;
        visibility: hidden;
    }

    /*media queries*/

    @media screen and (max-width: 320px) {
        .slide {
            height: 20em;
            flex: 0 0 20em;
        }

        .carousel-view .button-next {
            /*right: 3%;*/
            padding: 1px;
        }

        .carousel {
            min-width: 220px;
        }

        .carousel-view {
            min-width: 220px;
        }

        .carousel-view .button-prev {
            z-index: 3;
            left: 7%;
        }

        .carousel-view .button-next {
            padding-left: 20px;
        }

        .carousel-controls .squares {}

        .carousel-controls .squares .pslide-one p {
            font-size: 1em;
        }

        .carousel-controls .squares .pslide-two p {
            font-size: 1em;
        }

        .carousel-controls .squares a {
            font-size: 1em;
        }


    }

    @media screen and (max-width: 375px) {
        .slide {
            height: 20em;
            flex: 0 0 20em;
        }

        .carousel-view .button-next {
            right: 3%;
            margin-left: -12px;
        }

        .carousel-view {
            min-width: 300px;
        }

        .carousel-controls {}

        .carousel-view .button-prev {}

        .carousel-controls .squares {
            width: 250px;
        }

        .carousel-controls .squares .pslide-one p {
            font-size: 1em;

        }

        .carousel-controls .squares .pslide-two p {
            font-size: 1em;
        }

        .carousel-controls .squares a {
            font-size: 1em;
        }
    }

    @media screen and (max-width: 425px) {
        .slide {
            height: 20em;
            flex: 0 0 20em;
        }

        .carousel-view .button-next {
            /*right: 3%;*/

        }

        .carousel {
            min-width: 355px;
        }

        .carousel-view {
            min-width: 355px;
        }

        .wrapper {
            width: 100%
        }

        .carousel-view .button-prev {}

        .carousel-controls .squares {
            padding: 2px;
            font-size: 1.2em;
        }
    }

    @media screen and (max-width: 768px) {
        .slide {
            height: 18em;
            flex: 0 0 18em;
        }

        .carousel-view {
            width: 45%;
        }

        .carousel-view .button-next {
            /*right: 3%;*/

        }

        .carousel-view .button-prev {}

        .carousel-controls .squares {}
    }

    @media screen and (max-width: 1024px) {
        .slide {
            height: 18em;
            flex: 0 0 18em;
        }

        .carousel-view .button-next {
            right: 3%;
            /*margin-left: -8px;*/
        }

        .carousel-view .button-prev {}

        .carousel-controls .squares {}
    }

    @media screen and (min-width: 1440px) {
        .slide {
            height: 18em;
            flex: 0 0 18em;
        }

        .carousel-view .button-next {
            /*right: 3%;*/
        }

        .carousel-view .button-prev {}

        .carousel-controls .squares {}
    }

    @media screen and (max-width: 2560px) {
        .slide {
            height: 18em;
            flex: 0 0 18em;
        }

        .carousel-view .button-next {
            right: 3%;
            margin-right: 0;

        }

        .carousel-view .button-prev {}

        .carousel-controls .squares {}
    }
</style>