<template>
    <div class="page">
        <full-page ref="fullpage" :options="opts" id="fullpage">
            <Banner/>
            <About/>
            <Skills/>
            <Portfolio/>
            <Education/>
            <Contacts/>
        </full-page>
    </div>
</template>

<script>
    import Banner from "./Banner";
    import About from "./About";
    import Skills from "./Skills";
    import Portfolio from "./Portfolio";
    import Education from "./Education";
    import Contacts from "./Contacts";

    export default {
        name: "Main",
        data () {
            return {
                opts: {
                    scrollingSpeed: 700,
                    verticalCentered: true,
                    fitToSection: true,
                    animateAnchor: true,
                    anchors: ['home', 'about', 'skills', 'portfolio', 'education', 'contacts'],
                    navigation: true,
                    navigationPosition: 'right',
                    scrollOverflow: true,
                }
            };
        },
        components: {
            Banner,
            About,
            Skills,
            Portfolio,
            Education,
            Contacts
        }
    }
</script>

<style lang="scss">
</style>