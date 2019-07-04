<template>
    <div id="app">

        <div class="container">
            <header>
                <h1 style="color:whitesmoke">
                    Old Imperial Client
                </h1>
                <div id="nav">
                    <router-link to="/">
                        Home
                    </router-link>
                    |
                    <router-link to="/about">
                        About
                    </router-link>
                </div>
            </header>

            <div class="left">
                <h3>
                    Narrative
                </h3>
            </div>

            <main>
                <router-view/>
            </main>

            <div class="right">
                <leader-actions></leader-actions>
            </div>

            <footer>
                <p style="color:whitesmoke">
                    Popup Windows
                </p>
            </footer>
        </div>

    </div>
</template>

<script>
    import LeaderActions from "./components/LeaderActions";
    import LoadRegions from './commands/LoadRegions';
    import axios from 'axios';

    const BORDER_TYPES_QUERY = `{
          borderTypeList {
            id,
            name,
            code,
            description,
            landCost,
            airCost,
            navalCost,
            manaCost,
            isDirectional,
        }
    }`;

    export default {
        name: "App",
        components: {
            LeaderActions
        },
        created() {
            this.$store.dispatch(
                {
                    type:'onDispatch',
                    command: new LoadRegions()
                }
            ).then(
                result => {
                    // all's well
                    console.log('Initial loading of regions succeeded');
                }
            ).catch(
                error => {
                    console.log('Initial loading of region data failed');
                }
            );

            let res = axios.post('http://localhost:8080/graphql', {
                query: BORDER_TYPES_QUERY
            }).then(
                response => {
                    console.log(response.data.data);
                },
                error => {
                    throw error;
                }
            );
        },
    }
</script>

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
        grid-template-columns: 260px 1fr 220px;
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

    .left {
        display: flex;
        grid-area: left;
        align-items: center;
        justify-content: center;
        margin-left: 0.5rem;
        background-color: #f4f4f4;
        flex: 0 0 auto;
    }

    main {
        position: absolute;
        top: 90px;
        left: 260px;
        right: 220px;
        height: 80%;
        overflow: scroll;
        box-sizing: border-box;
    }

    .right {
        display: flex;
        grid-area: right;
        align-items: center;
        justify-content: center;
        margin-right: 0.5rem;
        background-color: #e4e4e4;
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
