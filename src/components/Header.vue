<template>
    <header class="header">
        <div class="container">
            <div class="row align-items-center justify-content-between">
                <div class="header__logo">
                    <img alt="Vue logo" src="/img/logo.png">
                </div>
                <div class="header__menu">
                    <ul class="header__menu-list" id="menu">
                        <li class="header__menu-item">
                            <a class="header__menu-link"
                               href="#about"
                            >
                                Обо мне
                            </a>
                        </li>
                        <li class="header__menu-item">
                            <a class="header__menu-link"
                               href="#skills"
                            >
                                Навыки
                            </a>
                        </li>
                        <li class="header__menu-item">
                            <a class="header__menu-link"
                               href="#portfolio"
                            >
                                Портфолио
                            </a>
                        </li>
                        <li class="header__menu-item">
                            <a class="header__menu-link"
                               href="#education"
                            >
                                Образование
                            </a>
                        </li>
                        <li class="header__menu-item">
                            <a class="header__menu-link"
                               href="#testimonials"
                            >
                                Отзывы
                            </a>
                        </li>
                        <li class="header__menu-item">
                            <a class="header__menu-link"
                               href="#contacts"
                            >
                                Контакты
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style lang="scss">
    .header {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        width: 100%;
        z-index: 9;

        &__menu {
            display: none;

            @media screen and (min-width: $tablet) {
                display: block;
            }
        }

        &__menu-list {
            display: flex;
            list-style: none;
        }

        &__menu-link {
            text-transform: uppercase;
            color: $base-color!important;
            padding: 10px;
            font-size: 14px;
            font-weight: bold;

            &:hover {
                text-decoration: none;
                color: $accent-color!important;
            }
        }
    }
</style>