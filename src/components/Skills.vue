<template>
    <section class="section skills" data-anchor="skills">
        <div class="container skills__info">
            <div class="row">
                <div class="col-md-6">
                    <h2 class="title">
                        Мои навыки
                    </h2>
                    <p class="text">
                        I create efficient and innovative experiences that balance user needs and business goals.
                    </p>
                    <p>
                        I have over five years of experience in freelancing professionally in this field, in addition to a lifetime’s amount of serious study about these subjects in my off time. I work in a range of creative areas including web design & development, illustration & logos, animation & photography.
                    </p>
                </div>
                <div class="col-md-6">
                    <div class="skills__items">
                        <div class="skills__item">
                            Web Design
                            <b-progress value="90" max="100" show-progress></b-progress>
                        </div>
                        <div class="skills__item">
                            Branding
                            <b-progress value="80" max="100" show-progress></b-progress>
                        </div>
                        <div class="skills__item">
                            Graphic Design
                            <b-progress value="95" max="100" show-progress></b-progress>
                        </div>
                        <div class="skills__item">
                            Development
                            <b-progress value="70" max="100" show-progress></b-progress>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="skills__digit">
            <div class="container">
                <div class="row">
                    <div class="col-md-3">
                        <div class="skills__digit-count">
                            2530
                        </div>
                        Web Design
                    </div>
                    <div class="col-md-3">
                        <div class="skills__digit-count">
                            2530
                        </div>
                        Branding
                    </div>
                    <div class="col-md-3">
                        <div class="skills__digit-count">
                            2530
                        </div>
                        Graphic Design
                    </div>
                    <div class="col-md-3">
                        <div class="skills__digit-count">
                            2530
                        </div>
                        Development
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "Skills"
    }
</script>

<style lang="scss">
    .skills {
        .progress {
            margin: 5px 0 20px;
            height: 40px;
        }
        .progress-bar {
            background-color: $accent-color;
        }

        &__info {
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding-top: 40px;

            @media screen and (min-width: $tablet) {
                height: 60%;
            }
        }

        &__digit {
            background-color: $accent-color;
            display: flex;
            flex-direction: column;
            justify-content: center;
            color: #fff;
            text-transform: uppercase;
            text-align: center;
            padding: 40px 0;

            @media screen and (min-width: $tablet) {
                height: 40%;
            }

            &-count {
                font-size: 60px;
                font-weight: bold;
            }
        }
    }
</style>