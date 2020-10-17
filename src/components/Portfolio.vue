<template>
    <section class="section portfolio" data-anchor="portfolio">
        <div class="container">
            <div class="row">
                <div class="col-sm-12">
                    <h2 class="title mt-5">
                        Портфолио
                    </h2>
                </div>
                <div class="col-sm-12">
                    <div class="portfolio__items">
                        <a class="portfolio__item" data-toggle="lightbox" data-gallery="gallery" href="/img/portfolio-1.jpg">
                            <img src="/img/portfolio-1.jpg">
                            <div class="portfolio__info">
                                <h3>
                                    Photographic
                                </h3>
                                <span>
                                    Photography
                                </span>
                            </div>
                        </a>
                        <a class="portfolio__item" data-toggle="lightbox" data-gallery="gallery" href="/img/portfolio-3.jpg">
                            <img src="/img/portfolio-3.jpg">
                            <div class="portfolio__info">
                                <h3>
                                    Photographic
                                </h3>
                                <span>
                                    Photography
                                </span>
                            </div>
                        </a>
                        <a class="portfolio__item" data-toggle="lightbox" data-gallery="gallery" href="/img/portfolio-5.jpg">
                            <img src="/img/portfolio-5.jpg">
                            <div class="portfolio__info">
                                <h3>
                                    Photographic
                                </h3>
                                <span>
                                    Photography
                                </span>
                            </div>
                        </a>
                        <a class="portfolio__item" data-toggle="lightbox" data-gallery="gallery" href="/img/portfolio-2.jpg">
                            <img src="/img/portfolio-2.jpg">
                            <div class="portfolio__info">
                                <h3>
                                    Photographic
                                </h3>
                                <span>
                                    Photography
                                </span>
                            </div>
                        </a>
                        <a class="portfolio__item" data-toggle="lightbox" data-gallery="gallery" href="/img/portfolio-4.jpg">
                            <img src="/img/portfolio-4.jpg">
                            <div class="portfolio__info">
                                <h3>
                                    Photographic
                                </h3>
                                <span>
                                    Photography
                                </span>
                            </div>
                        </a>
                        <a class="portfolio__item" data-toggle="lightbox" data-gallery="gallery" href="/img/portfolio-6.webp">
                            <img src="/img/portfolio-6.webp">
                            <div class="portfolio__info">
                                <h3>
                                    Photographic
                                </h3>
                                <span>
                                    Photography
                                </span>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "Portfolio"
    }
</script>

<style lang="scss">
    .portfolio {

        &__items {
            display: grid;
            grid-gap: 20px;
            grid-template-columns: 1fr;
            margin-bottom: 40px;

            @media screen and (min-width: $desktop) {
                grid-template-columns: 1fr 1fr 1fr;
            }
        }

        &__info {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: rgba(#fff, 0.6);
            padding: 15px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            opacity: 0;
            transition: all .3s linear;
            color: $base-color;
        }

        &__item {
            position: relative;
            cursor: pointer;
            display: block;

            &:hover .portfolio__info {
                opacity: 1;
            }

            @media screen and (min-width: $desktop) {
                &:first-child,
                &:nth-child(3) {
                    grid-row: 1 / 3;
                }

                &:nth-child(2) {
                    grid-row: 1 / 2;
                }

                &:nth-child(5) {
                    grid-row: 2 / 4;
                }

                &:nth-child(4),
                &:last-child {
                    grid-row: 3 / 4;
                }
            }
        }
    }
</style>