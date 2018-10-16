<template>
  <div>
    <Navbar></Navbar>
    <div class="content">
      <div class="section-one">
        <p class='coolTxt'><strong>PANCIT CANTON :</strong> TRY OUR NEW PANCIT CANTON GUISADO!</p>
        <!--<p>TRY OUR NEW PANCIT CANTON GUISADO!</p>-->

      </div>
      <div class="section-two">
      </div>
      <div class="section-three">
        <p class='coolTxt'>MENU NI NANAY(Main Dishes)</p>
      </div>
    </div>
    <div class="container-fluid holdMe">
      <Slide></Slide>
    </div>
    <div class="wrapper">
      <nav>
        <ul>
          <li><a @click="selectedComponent = 'Appetizer'">Appetizers</a></li>
          <li><a @click="selectedComponent = 'Dessert'">Desserts</a></li>
          <li><a @click="selectedComponent = 'Drink'">Drinks</a></li>
        </ul>
      </nav>
    </div>
    <div class='flexMe'>
      <component :is="selectedComponent"></component>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
  import Appetizer from './Appetizer.vue'
  import Drink from './Drink.vue'
  import Dessert from './Dessert.vue'
  import Navbar from './Navbar.vue'
  import Slide from './Slide.vue'
  export default {
    components: {
      Navbar,
      Slide,
      Appetizer,
      Drink,
      Dessert
    },
    name: 'Menu',
    data() {
      return {
        selectedComponent: 'Appetizer'

      }
    }
  }
</script>

<style scoped>
  * {
    font-family: verdana;
    margin: 0;
    background: url('../assets/wood.jpg') no-repeat;
    background-size: 100%;
    background-size: cover;
  }

  body {
    background: #eee
  }

  .wrapper {
    width: 100%;
    max-width: 960px;
    margin: 0 auto;

  }

  nav {}

  nav ul {
    background-color: #777;

    list-style-type: none;
    padding: 0;
  }

  nav a {
    text-decoration: none;
    color: #fff;
    display: block;
    padding: 10px;
    text-align: center;
    background-color: #777;

  }

  nav a:hover {
    background: #D32F2F;
    cursor: pointer;
  }

  /** old menu styling**********/

  .coolTxt {
    color: goldenrod;
    /* #BDBDBD;*/
    text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
    font-weight: 900;
  }

  .holdeMe {
    /*border: 10px solid black;*/
    height: 550px;
    margin: 0 auto;

  }

  li a {
    background: url('../assets/wood.jpg') no-repeat;
    background-size: cover;
    color: goldenrod;
    font-weight: 900;
    font-size: 1.2em;
  }

  .content {
    display: grid;
    margin: 0 auto;
    grid-template-columns: repeat(12, 1fr);
    grid-auto-rows: minmax(auto, auto);
    background: url('../assets/wood.jpg') no-repeat;
    background-size: 100%;
    background-size: cover;
  }

  /*.content>* {
    background: #3bbced;
    padding: 30px;
  }*/

  /*strong {
    font-weight: 900;
  }*/

  .section-one {
    display: grid;
    grid-column: 1/13;
    font-weight: 500;
    color: #FAFAFA;
    height: auto;
    justify-items: center;
    align-items: center;
    font-size: 1.6rem;
    padding: 5px;
    margin: 0;
    /*background: url('../assets/wood.jpg') no-repeat;
    background-size: 100%;
    background-size: cover;*/
  }

  .section-two {
    grid-column: 1/13;
    /*background: url('https://res.cloudinary.com/dmglopmul/image/upload/v1538651151/projectPhotos/restaurant/wood.jpg') no-repeat;
    background-size: cover;*/
    height: 320px;
    position: relative;
    overflow: hidden;
  }

  .section-two::after {
    content:
      url('https://res.cloudinary.com/dmglopmul/image/upload/v1538676012/projectPhotos/restaurant/pancitCanton3.png');
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -260px;
    margin-top: -180px;
  }


  .section-three {
    grid-column: 1/13;
    /*background: url('../assets/wood.jpg') no-repeat;
    /*background: url('../assets/yellow.jpg') no-repeat;
    background-size: cover;*/
    color: #FAFAFA;
    font-size: 2rem;
    font-weight: 900;
    text-align: center;
    height: 120px;
    align-self: end;
    /*border: 1px solid dark brown;*/
    padding-top: 60px;
    margin-top: 50px;
    margin-bottom: 0;
  }

  /*********end old menu styling*********************/
  @media screen and (min-width: 768px) {
    nav ul {
      display: flex;
      justify-content: space-between;
    }

    nav li {
      flex: 1 1 0;
    }

    html {
      max-width: calc(50% - 1em);
    }
  }
</style>