<template>
    <section class="section banner">
        <b-carousel
                id="carousel-1"
                :interval="4000"
                controls
        >
            <!-- Text slides with image -->
            <b-carousel-slide
                    caption="Hello, I'm Carmen"
                    text="I'm Developer"
                    img-src="img/home-1.jpg"
            >
            </b-carousel-slide>
            <b-carousel-slide
                    caption="Hello, I'm Carmen"
                    text="I'm Designer"
                    img-src="img/home-6.jpg"
            ></b-carousel-slide>
        </b-carousel>
    </section>
</template>

<script>
    export default {
        name: "Banner",
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