<template>
    <header id="split">
        <div class="branding">
            <!--<h1><a href="#"><img src="../assets/phil.png" alt="logo"></a></h1>-->
            <h1>Cucina Ni Nanay</h1>
        </div>
        <nav>
            <ul>
                <router-link to="/" tag='li'>Menu</router-link>
                <router-link to="/about" tag='li'>About</router-link>
                <li><button href="#">Order Online</button></li>
            </ul>
        </nav>
    </header>
</template>
<script>
    export default {
        name: 'Navbar',
        data() {
            return {
            }
        },
        methods: {
        }
    }
</script>
<style>
    /*
        li.active {
            color: orange;
            background: red;
        }*/

    body {
        margin: 0;
        font-family: 'Roboto', sans-serif;
    }

    #split {
        background: url('../assets/wood.jpg') no-repeat;
        background-size: 100%;
        background-size: cover;
        /*background: #424242;*/
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        padding: 1rem 1rem 0;
        font-size: 1.2rem;
    }

    /*.router-link-active {
            background-color: green;
        }*/

    @media(min-width: 550px) {
        #split {
            padding: 0 1.2rem;
        }
    }

    img {
        width: 100px;
        max-width: 100%;
        max-height: 100px;
    }

    .branding {
        display: flex;
        flex: 0 1 100%;
        background: transparent;
        border-radius: 25px;
        max-width: 25%;
        padding: 10px;
        margin: 10px 0;

    }

    @media (min-width: 1300px) {
        .branding {
            flex: 0 1 75%;
        }
    }

    @media (min-width: 550px) {
        .branding {
            flex: 0 1 60%;
        }
    }

    @media(max-width:550px) {
        h1 {
            background: #D32F2F;
            border-radius: 25px;
        }
    }

    h1 {
        margin: 0 20px;
        padding: 0 20px;
        color: #FAFAFA;
        font-size: 1rem;

    }

    nav {
        flex: 0 1 100%;

    }

    @media (min-width: 1300px) {
        nav {
            flex: 0 1 25%;
        }

        ul {
            justify-content: space-around;
        }
    }

    @media (min-width: 550px) {
        nav {
            flex: 0 1 40%;
        }

        h1 {
            margin: 5px 5px;
            min-width: 50px;
            font-weight: 900;
            font-size: 1.2rem;
        }

        .branding {
            background: #D32F2F;
            max-width: 15%;
        }
    }

    nav ul {
        list-style: none;
        padding: 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    li {
        color: #FAFAFA;
        text-decoration: none;
        font-weight: 900;
    }

    li:hover {
        color: orange;
        /*#D32F2F;*/
        cursor: pointer;
        font-weight: 900;

    }

    button {
        background: #D32F2F;
        border: 1px solid white;
        padding: 10px;
        color: white;
        font-size: 1.2rem;
        font-weight: 900;
    }

    button:hover {
        background: orange;
        color: #fff;
        cursor: pointer
    }
</style>