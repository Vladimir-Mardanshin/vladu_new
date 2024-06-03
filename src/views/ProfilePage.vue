<template>
  <div class="centered-container">
        <h1 style="color: white; margin-bottom: 15px;">Вход</h1>
        <div style="color: white; width: 300px;">
            <v-text-field class="text-center" label="Почта" v-model="email" hide-details="auto"></v-text-field>
            <v-text-field label="Пароль" v-model="password"></v-text-field>
        </div>
        <v-btn @click="enter" class="transparent-button">
            Войти
        </v-btn>
        <div style="color: #C0C0C0; margin-top: 15px;">
            Нет аккаунта? <router-link style="color: blue;" to="/registration">Зарегистрироваться</router-link>
        </div>

    </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  computed: mapGetters(["getMail", "getPassword",]),
    data() {
        return {
            email: '',
            password: ''
        };
    },

    methods: {
        ...mapMutations(["changeEntrance", "changeEmail"]),
        enter() {
            if ((this.email == '') || (this.password == '')) {
                alert('Поля не могут быть пустыми!');
            } else {
              if (this.email == this.getMail && this.password == this.getPassword) {
                this.changeEntrance('true');
                this.$router.push('/space');
              }
              else {
                alert('Неверный логин и/или пароль!');
              }
            }
        },
    }
};
</script>
    
<style scoped>
.transparent-button {
    width: 160px;
    color: white;
    border: 1px solid white;
    background-color: transparent !important;
}

.centered-container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
}
</style>