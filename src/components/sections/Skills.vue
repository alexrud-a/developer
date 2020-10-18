<template>
    <section class="section skills" data-anchor="skills">
        <div class="container skills__info">
            <div class="row">
                <div class="col-md-6">
                    <h2 class="title mt-5">
                        Мои навыки
                    </h2>
                    <p class="text">
                        I create efficient and innovative experiences that balance user needs and business goals.
                    </p>
                    <p>
                        I have over five years of experience in freelancing professionally in this field, in addition to a lifetime’s amount of serious study about these subjects in my off time. I work in a range of creative areas including web design & development, illustration & logos, animation & photography.
                    </p>
                    <a href="#contacts" class="btn mt-4 mb-5">
                        Связаться
                    </a>
                </div>
                <div class="col-md-6">
                    <div class="skills__items">
                        <div class="skills__item"
                             v-for="skill in skills"
                             :key="skill.name"
                        >
                            {{skill.name}}
                            <b-progress :value="skill.persent" max="100" show-progress></b-progress>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="skills__digit">
            <div class="container">
                <div class="row">
                    <div class="col-md-3"
                         v-for="item in skills"
                         :key="item.name"
                    >
                        <div class="skills__digit-count">
                            <number :from="1000"
                                    :to="item.count"
                                    :duration="2"
                                    easing="Power1.easeOut"
                            />
                        </div>
                        {{item.name}}
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "Skills",
        props: {
            skills: {
                type: Array,
                default() {
                    return []
                }
            },
        }
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
            transition: width 1.6s ease-in-out;
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