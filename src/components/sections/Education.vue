<template>
    <section class="section education" data-anchor="education">
        <div class="container">
            <div class="row">
                <div class="col-md-6 mt-5">
                    <h2 class="title mt-5">
                        Образование
                    </h2>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-md-5">
                    <div class="education__items">
                        <div class="education__item">
                            <div class="education__item-left">
                                2014
                            </div>
                            <div class="education__item-right">
                                <h3>
                                    Atlanta State University
                                </h3>
                                <p>
                                    My study at the University helped me to master my profession and start getting practical experience and special knowledge
                                </p>
                            </div>
                        </div>
                        <div class="education__item">
                            <div class="education__item-left">
                                2016
                            </div>
                            <div class="education__item-right">
                                <h3>
                                    Innovative Web Technologies Conference
                                </h3>
                                <p>
                                    I was fortunate to participate in this amazing conference where I received a great bulk of the most recent information in web sphere
                                </p>
                            </div>
                        </div>
                        <div class="education__item">
                            <div class="education__item-left">
                                2018
                            </div>
                            <div class="education__item-right">
                                <h3>
                                    University of Design Course
                                </h3>
                                <p>
                                    I took a course of Web Branding and Design at University of Design in Atlanta, where I enhanced my skills and got new knowledge
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-sm-12">
                    <a href="#contacts" class="btn mb-5">
                        Связаться
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "Education"
    }
</script>

<style lang="scss">
    .education {
        background: rgba(250,250,250,0.7) url("/img/home-3.jpg");
        background-blend-mode: lighten;

        @media screen and (min-width: $tablet) {
            background: url("/img/home-3.jpg");
        }

        &__items {
            margin-bottom: 40px;
        }

        &__item {
            display: flex;

            &-left {
                font-size: 18px;
                margin-right: 30px;
                font-weight: bold;
                line-height: 20px;
            }

            &-right {
                position: relative;
                padding-left: 50px;

                &::before {
                    position: absolute;
                    content: "";
                    top: 0;
                    left: 6px;
                    width: 3px;
                    height: 100%;
                    background-color: #eee;
                }

                &::after {
                    position: absolute;
                    content: "";
                    width: 15px;
                    height: 15px;
                    border-radius: 50%;
                    top: 0;
                    left: 0;
                    background-color: $accent-color;
                }

                h3 {
                    font-size: 18px;
                    line-height: 20px;
                    font-weight: bold;
                    margin-bottom: 10px;
                }

                p {
                    opacity: 0.6;
                    font-size: 14px;
                    line-height: 29px;
                    margin-bottom: 30px;
                }
            }
        }
    }
</style>