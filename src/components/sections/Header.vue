<template>
    <header class="header">
        <div class="container">
            <div class="row align-items-center justify-content-between">
                <div class="header__logo">
                    <a href="#home">
                        <img alt="Vue logo" src="/img/logo.png">
                    </a>
                </div>
                <div class="header__menu">
                    <button class="header__burger"
                            @click="toggleMenu"
                            :class="{'header__burger--open': isActive}"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                    <ul class="header__menu-list" id="menu" :class="{'header__menu-list--open': isActive}">
                        <li class="header__menu-item"
                            v-for="item in menu"
                            :key="item.link"
                        >
                            <a class="header__menu-link"
                               :href="item.link"
                               @click="toggleMenu"
                            >
                                {{item.name}}
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
        name: "Header",
        data() {
            return {
                isActive: false,
                menu: [
                    {
                        link: '#about',
                        name: 'Обо мне'
                    },
                    {
                        link: '#skills',
                        name: 'Навыки'
                    },
                    {
                        link: '#portfolio',
                        name: 'Портфолио'
                    },
                    {
                        link: '#education',
                        name: 'Образование'
                    },
                    {
                        link: '#contacts',
                        name: 'Контакты'
                    },
                ]
            }
        },
        methods: {
            toggleMenu() {
                let self = this;
                self.isActive = !self.isActive;
            }
        }
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
        background-color: rgba(250,250,250,0.4);
        padding: 0 15px;

        @media screen and (min-width: $tablet) {
            background-color: transparent;
        }

        &__logo {
            max-width: 130px;

            @media screen and (min-width: $desktop) {
                max-width: auto;
            }
        }

        &__burger {
            position: relative;
            width: 35px;
            height: 20px;
            border: none;
            background-color: transparent;
            outline: none!important;
            z-index: 99;

            span {
                position: absolute;
                width: 100%;
                height: 2px;
                left: 0;
                right: 0;
                background-color: $accent-color;
                transition: all .3s linear;

                &:first-child {
                    top: 0;
                }

                &:nth-child(2) {
                    top: calc(50% - 1px);
                }

                &:last-child {
                    bottom: 0;
                }
            }

            &--open {
                span {
                    &:first-child {
                        top: 50%;
                        transform: rotate(45deg);
                    }
                    &:nth-child(2) {
                        opacity: 0;
                    }
                    &:last-child {
                        top: 50%;
                        transform: rotate(-45deg);
                    }
                }
            }

            @media screen and (min-width: $tablet) {
                display: none;
            }
        }

        &__menu {
            width: 50%;
            text-align: right;

            @media screen and (min-width: $tablet) {
                width: auto;
            }
        }

        &__menu-list {
            display: flex;
            list-style: none;
            padding: 0;
            margin-bottom: 0;
            position: fixed;
            top: 0;
            bottom: 0;
            right: -100%;
            width: 240px;
            background-color: $base-color;
            flex-direction: column;
            transition: all .3s ease-in-out;
            justify-content: center;
            align-items: center;
            text-align: center;

            &--open {
                right: 0;
            }

            @media screen and (min-width: $tablet) {
                width: auto;
                background-color: transparent;
                flex-direction: row;
                position: static;
            }
        }

        &__menu-link {
            text-transform: uppercase;
            padding: 10px;
            font-size: 14px;
            font-weight: bold;
            color: $accent-color!important;
            display: block;
            margin-bottom: 10px;

            @media screen and (min-width: $tablet) {
                color: $base-color!important;
                margin-bottom: 0;
            }

            &:hover {
                text-decoration: none;
                color: $accent-color!important;
            }
        }
    }
</style>