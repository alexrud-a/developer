<template>
    <div class="page">
        <full-page ref="fullpage" :options="opts" id="fullpage">
            <Header/>
            <Banner/>
            <About/>
            <Skills :skills="skills" />
            <Portfolio/>
            <Education/>
            <Contacts/>
        </full-page>
    </div>
</template>

<script>
    import Banner from "./sections/Banner";
    import About from "./sections/About";
    import Skills from "./sections/Skills";
    import Portfolio from "./sections/Portfolio";
    import Education from "./sections/Education";
    import Contacts from "./sections/Contacts";
    import Header from "./sections/Header";

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
                    navigation: false,
                    navigationPosition: 'right',
                    scrollOverflow: true,
                    fixedElements: '.header, #lightbox',
                    onLeave: this.onLeave,
                },
                skills: [
                    {
                        name: 'Web Design',
                        persent: '0',
                        count: '0'
                    },
                    {
                        name: 'Branding',
                        persent: '0',
                        count: '0'
                    },
                    {
                        name: 'Graphic Design',
                        persent: '0',
                        count: '0'
                    },
                    {
                        name: 'Development',
                        persent: '0',
                        count: '0'
                    }
                ],
            }
        },
        components: {
            Header,
            Banner,
            About,
            Skills,
            Portfolio,
            Education,
            Contacts
        },
        methods: {
            onLeave(origin, destination) {
                if (destination.index === 2) {
                    this.skills = [
                        {
                            name: 'Web Design',
                            persent: '90',
                            count: '2560'
                        },
                        {
                            name: 'Branding',
                            persent: '80',
                            count: '1650'
                        },
                        {
                            name: 'Graphic Design',
                            persent: '75',
                            count: '1670'
                        },
                        {
                            name: 'Development',
                            persent: '85',
                            count: '2610'
                        }
                    ]
                }
                else {
                    this.skills = [
                        {
                            name: 'Web Design',
                            persent: '0',
                            count: '0'
                        },
                        {
                            name: 'Branding',
                            persent: '0',
                            count: '0'
                        },
                        {
                            name: 'Graphic Design',
                            persent: '0',
                            count: '0'
                        },
                        {
                            name: 'Development',
                            persent: '0',
                            count: '0'
                        }
                    ]
                }
            }
        }
    }
</script>

<style lang="scss">
</style>