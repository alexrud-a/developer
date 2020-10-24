<template>
    <section class="section banner" data-anchor="home">
        <b-carousel
                v-if="content"
                id="carousel-1"
                :interval="4000"
                controls
        >
            <!-- Text slides with image -->
            <b-carousel-slide
                    v-for="(slide, index) in content.slider"
                    :key="index"
                    :caption="slide.title"
                    :text="slide.subtitle"
                    :img-src="slide.img"
            >
            </b-carousel-slide>
        </b-carousel>
    </section>
</template>

<script>
    import axios from "axios";
    export default {
        name: "Banner",
        data(){
            return {
                content: [],
            }
        },
        methods: {
            GetContent() {
                return axios('http://dev.alexru3k.beget.tech/wp-json/wp/v2/pages/2', {
                    method: "GET"
                })
                    .then((response) => {
                        this.content = response.data.acf;
                    })
                    .catch((error) => {
                        console.log(error);
                        return error;
                    })
            },
        },
        created() {
            this.GetContent()
        }
    }
</script>

<style lang="scss">
    .banner {
        height: 100vh;
        position: relative;

        .carousel-item,
        .carousel-inner {
            height: 100%;
        }

        .img-fluid {
            height: 100%;
            object-fit: cover;
            object-position: 70% center;
        }

        .carousel-caption {
            bottom: 50%;
            color: #333;
            text-align: left;
            transform: translateY(50%);
            left: 5%;

            @media screen and (min-width: $desktop) {
                left: 15%;
            }


            h3 {
                font-size: 20px;

                @media screen and (min-width: $tablet) {
                    font-size: 35px;
                }

                @media screen and (min-width: $desktop) {
                    font-size: 50px;
                }
            }

            p {
                font-weight: bold;
                font-size: 40px;

                @media screen and (min-width: $tablet) {
                    font-size: 70px;
                }

                @media screen and (min-width: $desktop) {
                    font-size: 90px;
                }
            }
        }
    }
</style>