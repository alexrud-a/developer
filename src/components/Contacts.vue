<template>
    <section class="section contacts" data-anchor="contacts">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <h3 class="title">
                        Контакты
                    </h3>
                    <form class="contacts__form" method="post" action="mail.php" @submit.prevent="submit">
                        <div class="form-group">
                            <input class="form-control" type="text" placeholder="Ваше имя" v-model="name" name="name">
                            <div v-if="!message.length" class="message">
                                {{ validation.firstError('name') }}
                            </div>
                        </div>
                        <div class="form-group">
                            <input class="form-control" type="tel" placeholder="+7(___) ___-__-__" v-mask="'+7 (###) ###-##-##'" v-model="phone" name="phone">
                            <div v-if="!message.length" class="message">
                                {{ validation.firstError('phone') }}
                            </div>
                        </div>
                        <div class="form-group">
                            <input class="form-control" type="email" placeholder="Ваш email" v-model="email" name="email">
                            <div v-if="!message.length" class="message">
                                {{ validation.firstError('email') }}
                            </div>
                        </div>
                        <div class="form-group">
                            <textarea class="form-control" placeholder="Чем могу помочь?" v-model="text" name="text"></textarea>
                        </div>
                        <div class="form-group">
                            <button type="submit" class="btn">
                                Отправить
                            </button>
                        </div>
                        <div class="message-form">
                            {{message}}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import SimpleVueValidator from 'simple-vue-validator';
    const Validator = SimpleVueValidator.Validator;

    import axios from "axios";

    export default {
        mixins: [SimpleVueValidator.mixin],
        name: "Contacts",
        data() {
            return {
                name: '',
                phone: '',
                email: '',
                text: '',
                message: '',
            }
        },
        validators: {
            name: function (value) {
                return Validator.value(value).minLength(5, 'Введите не менее 5 символов');
            },
            phone: function (value) {
                return Validator.value(value).required('Поле обязательно для заполнения').length(18, 'Поле телефон должно содержать 10 цифр');
            },
            email: function (value) {
                return Validator.value(value).email('Некорректный email');
            },
        },
        methods: {
            mail: function() {
                let self = this;
                axios({
                    method: 'post',
                    url: 'mail.php',
                    data: {
                        name: self.name,
                        phone: self.phone,
                        email: self.email,
                        text: self.text
                    },
                    headers: {
                        "Content-type": "application/json; charset=UTF-8"
                    }
                }).then(function (response) {
                    self.message = response.data;
                    self.name = '';
                    self.phone = '';
                    self.email = '';
                    self.text = '';
                });
            },
            submit: function() {
                let self = this;
                self.$validate()
                    .then(function(success) {
                        if (success) {
                            self.mail();
                        }
                    });
            }
        }
    }
</script>

<style lang="scss">
    .contacts {
        background-image: url("/img/home-5.jpg");

        .form-control {
            height: 60px;
            border-radius: 0;
            padding: 15px 30px;
            background-color: #f7f7f7;
            border: 1px solid #eee;
            box-shadow: none!important;
            resize: none;
        }

        textarea.form-control {
            height: 150px;
        }
    }
</style>