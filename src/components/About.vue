<template>
    <section class="section about" data-anchor="about">
        <div class="container">
            <div class="row">
                <div class="col-md-4 offset-md-7">
                    <h2 class="title">
                        Обо мне
                    </h2>
                    <p class="text">
                        Hello, I’m a UI/UX Designer & Frontend Developer from Victoria, Australia. I hold a master degree of Web Design from the World University.
                    </p>
                    <table class="table table-striped">
                        <tbody>
                        <tr>
                            <td>
                                Имя
                            </td>
                            <td>
                                Carmen
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Телефон
                            </td>
                            <td>
                                <a href="tel:7(999) 999-99-99">
                                    7(999) 999-99-99
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Email
                            </td>
                            <td>
                                <a href="mailto:test@test.ru">
                                    test@test.ru
                                </a>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "About"
    }
</script>

<style lang="scss">
    .about {
        background: rgba(250,250,250,0.7) url("/img/home-2.jpg");
        background-blend-mode: lighten;

        @media screen and (min-width: $tablet) {
            background: url("/img/home-2.jpg");
        }
    }
</style>