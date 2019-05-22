<template>
    <div id="app">

        <div class="container">
            <header>
                <h1 style="color:whitesmoke">Old Imperial Client</h1>
                <div id="nav">
                    <router-link to="/">Home</router-link>
                    |
                    <router-link to="/about">About</router-link>
                </div>
            </header>

            <left>
                <h3>Narrative</h3>
            </left>

            <main>
                <router-view/>
            </main>

            <right>
                <h3> Leader Actions</h3>
            </right>

            <footer>
                <p style="color:whitesmoke">Popup Windows</p>
            </footer>
        </div>

    </div>
</template>
<style>

    html, body {
        height: 100%;
        margin: 0;
    }

    .container {
        display: grid;
        grid-template-areas:
                "header header header"
                "left content right"
                "footer footer footer";
        height: 100vh;
        grid-template-columns: 320px 1fr 320px;
        grid-template-rows: auto 1fr auto;
        grid-gap: 10px;
        overflow: hidden;
    }

    header {
        display: flex;
        grid-area: header;
        justify-content: space-between;
        align-items: center;
        background: #000000;
    }

    left {
        display: flex;
        grid-area: left;
        align-items: center;
        justify-content: center;
        margin-left: 0.5rem;
        background-color: antiquewhite;
        flex: 0 0 auto;
    }

    main {
        width: 100%;
        background: #e5e5e5;
        overflow: scroll;
    }

    right {
        display: flex;
        grid-area: right;
        align-items: center;
        justify-content: center;
        margin-right: 0.5rem;
        background-color: beige;
        flex: 0 0 auto;
    }

    footer {
        grid-area: footer;
        background: #000000;
    }

    @media (max-width: 768px) {
        .container {
            grid-template-areas:
                    "header"
                    "left"
                    "content"
                    "right"
                    "footer";
            grid-template-columns: 1fr;
            grid-template-rows: auto minmax(75px, auto) 1fr minmax(75px, auto) auto;
        }
        left, right {
            margin: 0;
        }
    }
</style>