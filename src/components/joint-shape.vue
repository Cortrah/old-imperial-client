<template>
	<div>Thing</div>
</template>

<script>
    import joint from '../../node_modules/jointjs';

    export default {
        name: 'joint-shape',
        props: {
            msg: String
        },
        mounted: function () {

            joint.shapes.basic.Generic.define('chess.KingBlack', {
                size: { width: 42, height: 38 }
            }, {
                markup: '<g class="rotatable"><g class="scalable"><g style="fill:none; fill-opacity:1; fill-rule:evenodd; stroke:#000000; stroke-width:1.5; stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4; stroke-dasharray:none; stroke-opacity:1;">    <path       d="M 22.5,11.63 L 22.5,6"       style="fill:none; stroke:#000000; stroke-linejoin:miter;"       id="path6570" />    <path       d="M 22.5,25 C 22.5,25 27,17.5 25.5,14.5 C 25.5,14.5 24.5,12 22.5,12 C 20.5,12 19.5,14.5 19.5,14.5 C 18,17.5 22.5,25 22.5,25"       style="fill:#000000;fill-opacity:1; stroke-linecap:butt; stroke-linejoin:miter;" />    <path       d="M 11.5,37 C 17,40.5 27,40.5 32.5,37 L 32.5,30 C 32.5,30 41.5,25.5 38.5,19.5 C 34.5,13 25,16 22.5,23.5 L 22.5,27 L 22.5,23.5 C 19,16 9.5,13 6.5,19.5 C 3.5,25.5 11.5,29.5 11.5,29.5 L 11.5,37 z "       style="fill:#000000; stroke:#000000;" />    <path       d="M 20,8 L 25,8"       style="fill:none; stroke:#000000; stroke-linejoin:miter;" />    <path       d="M 32,29.5 C 32,29.5 40.5,25.5 38.03,19.85 C 34.15,14 25,18 22.5,24.5 L 22.51,26.6 L 22.5,24.5 C 20,18 9.906,14 6.997,19.85 C 4.5,25.5 11.85,28.85 11.85,28.85"       style="fill:none; stroke:#ffffff;" />    <path       d="M 11.5,30 C 17,27 27,27 32.5,30 M 11.5,33.5 C 17,30.5 27,30.5 32.5,33.5 M 11.5,37 C 17,34 27,34 32.5,37"       style="fill:none; stroke:#ffffff;" />  </g></g></g>'
            });

            var el1 = new joint.shapes.basic.Image({
                size: {
                    width: 100,
                    height: 100
                },
                position: {
                    x: 100,
                    y: 100
                },
                attrs: {
                    image: {
                        width: 1024,
                        height: 768,
                        'xlink:href': 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB2ZXJzaW9uPSIxLjEiCgkgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIKCSBpZD0iTGF5ZXJfMSIKCSB4PSIwcHgiIHk9IjBweCIKCSB3aWR0aD0iMTE4cHgiIGhlaWdodD0iMTQwcHgiCgkgdmlld0JveD0iMCAwIDExOCAxNDAiCgkgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMTE4IDE0MCIKCSB4bWw6c3BhY2U9InByZXNlcnZlIj4KPGc+Cgk8cGF0aCBkPSJNMTEyLjEwMSw0NC4wNjlINjEuNTEzYy0xLjM3Ny0yLjk0Ny0zLjEyNS01LjcxMS01LjA3MS04LjA4NmMtMC4yMy0xLjcyOS0wLjQ2NC0zLjQ1Ni0wLjY4NS01LjE4NgoJCWMtMC42NTEtNS4xMDctMS4zODYtMTAuMjE1LTEuOTcxLTE1LjMyNWMtMC41MjktNC42MTEtMS4xOTctOS4xNTYtNC4wMzQtMTIuOTczYy0xLjU4OC0yLjEzNy00LjMzNy0zLjM1MS02Ljg0MS0xLjc5NAoJCWMtNS44NDIsMy42MzEtOS44OTcsMTAuNjQxLTEzLjM4NiwxNi4zNmMtMi43ODMsNC41NjMtNy43NTksMTEuNzU1LTUuMDc1LDE3LjI2NmMyLjgyMyw1Ljc5NywxMS40NDYsMC43MjUsOC42MzUtNS4wNDcKCQljMC40MzUsMC44OTIsMC41NzYsMS41MzksMC42MTMsMS45MTNjMC4wMzUtMC4yMzksMC4xMTItMC41OTEsMC4yNzgtMS4wODFjMC4zLTAuODg2LDAuNzQ2LTEuNzIxLDEuMTU3LTIuNTU4CgkJYzEuMjQ1LTIuNTMyLDIuNzA4LTQuOTU4LDQuMjAxLTcuMzQ4YzEuMi0xLjkyMSwyLjYwNi00LjMxNCw0LjE5OS02LjQ1YzAuMjU1LDEuNDg5LDAuNDAxLDMuMDIyLDAuNTk0LDQuNTcyCgkJYzAuNjM0LDUuMDk5LDEuMzI1LDEwLjE5NCwxLjk5MSwxNS4yOWMtMC4zMzMsMC40NjQtMC41OTYsMS0wLjc0MywxLjYxOGMtMC43MTYsMy4wMTctMS44MTQsNS45NTYtMy4xNjYsOC44MjlIMTYuMjY4CgkJYy02LjQ0OSwwLTYuNDQ5LDEwLDAsMTBoMTkuODU2Yy0wLjMwMiwwLjU4MS0wLjYwMiwxLjE3OS0wLjg5MSwxLjgwNWMtNC4xMzcsNS45ODctOC43NjgsMTEuNjk4LTEyLjY2OCwxNy4yMQoJCWMtMS4zMTQsMS44NTctMi43MzIsMy44NDEtNC4yNDIsNS44MmMtMC42ODgtMC4xNDEtMS4zNzUtMC4yNTYtMi4wNTUtMC4zMTFjLTQuMTUzLTAuMzMzLTUuNzI4LDQuNDA1LTQuMzE3LDcuNTIzCgkJYzAuMDIzLDAuMDUyLDAuMDUsMC4xLDAuMDc0LDAuMTUxYy0xLjUzNiwxLjU1MS0zLjEyOSwyLjk2OC00Ljc3Nyw0LjE0OWMtNC4yMDksMy4wMTctOS4yNzMsNy42NzQtNi40MSwxMy4zMDUKCQljMy45ODcsNy44NCwxNy4zMzUsMTAuNTE1LDI0LjkyMSwxMi44NWMxMS45NTksMy42OCwyNC41NzIsMTAuMzcsMzIuMDI1LDIwLjczNWMyLjgzNCwzLjk0LDkuMTY1LDIuNzIyLDkuMzE3LTIuNTIzCgkJYzAuNDYyLTE1Ljg2Ny0xLjM1LTMxLjc1OS0zLjUyNy00Ny41NTFjNi43NDUtMC4xNDEsMTMuNDkzLTAuNDI1LDIwLjE5LTAuNDI1YzYuNDQ5LDAsNi40NDktMTAsMC0xMGgtMy4yMQoJCWMtMC4yMTUsMC0wLjQyMiwwLjAxMy0wLjYyMywwLjAzNGMtNS44OTEsMC4wOTQtMTEuODI2LDAuMzYzLTE3Ljc1NCwwLjQ4MWMtMC40MjktMy4wMDMtMC44NTYtNi4wMDMtMS4yNy04Ljk5NgoJCWMxLjE4Ny0xLjg2MiwyLjE0OC0zLjg1MSwyLjgyOS02LjEwOGMwLjc4Ni0yLjYwMywwLjk1Ni01LjM2NiwwLjY2Ny04LjE0OWg0Ny42OThDMTE4LjU1LDU0LjA2OSwxMTguNTUsNDQuMDY5LDExMi4xMDEsNDQuMDY5eiIvPgo8L2c+Cjwvc3ZnPgo=',
                        preserveAspectRatio: 'none'
                    }
                }
            });
        }
    }
</script>

<style scoped>
</style>
