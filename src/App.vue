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

            <nav>
                <h3>Narrative</h3>
            </nav>

            <main>
                <h3>Map</h3>
                <router-view/>
            </main>

            <aside>
                <h3> Leader Actions</h3>
            </aside>

            <footer>
                <p style="color:whitesmoke">Popup Windows</p>
            </footer>
        </div>

    </div>
</template>
<style>

    html {
        height: 100%;
    }

    @supports(display: grid) {
        .notice {
            display: none;
        }
    }

    .container {
        display: grid;
        grid-template-areas:
                "header header header"
                "nav content side"
                "footer footer footer";
        height: 100vh;
        grid-template-columns: 200px 1fr 200px;
        grid-template-rows: auto 1fr auto;
        grid-gap: 10px;
    }

    header {
        background: #000000;
        grid-area: header;
        padding: 1rem 0;

        padding: 0 1rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    nav, aside {
        background: #F5F5F5;
    }

    nav, aside, main {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    nav {
        grid-area: nav;
        margin-left: 0.5rem;
    }

    main {
        grid-area: content;
        width: 100%;
        background: #e5e5e5
    }

    aside {
        grid-area: side;
        margin-right: 0.5rem;
    }

    footer {
        background: #000000;
        grid-area: footer;
    }

    @media (max-width: 768px) {
        .container {
            grid-template-areas:
                    "header"
                    "nav"
                    "content"
                    "side"
                    "footer";
            grid-template-columns: 1fr;
            grid-template-rows: auto minmax(75px, auto) 1fr minmax(75px, auto) auto;
        }
        nav, aside {
            margin: 0;
        }
    }
</style>