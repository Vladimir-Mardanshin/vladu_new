<template>
  <v-container fluid>
    <v-app-bar v-if="getEntrance == true" :elevation="0" class="transparent">
      <div style="margin-left: auto; margin-right: 15px;">

        <router-link v-if="getRoot == 'user'" to="/reservations" class="forb">
          <button class="myButton">
            Мои бронирования
          </button>
        </router-link>

        <router-link v-if="getRoot == 'user'" to="/vm" class="forb">
          <button class="myButton">
            Виртуальная машина
          </button>
        </router-link>

        <a v-if="getRoot == 'admin'" href="http://192.168.0.103:3000/?orgId=1" target="_blank" class="forb">
          <button class="myButton">
            Мониторинг
          </button>
        </a>

        <router-link v-if="getRoot == 'admin'" to="/applications" class="forb">
          <button class="myButton">
            Заявки
          </button>
        </router-link>

        <router-link to="/information" class="forb">
          <button class="myButton">
            О платформе
          </button>
        </router-link>

        <router-link v-if="getRoot == 'user'" to="/help" class="forb">
          <button class="myButton">
            Центр помощи
          </button>
        </router-link>

        <router-link v-if="getRoot == 'admin'" to="/answer" class="forb">
          <button class="myButton">
            Обращения в поддержку
          </button>
        </router-link>

      </div>

      <v-menu location="bottom">
        <template v-slot:activator="{ props }">
          <button v-bind="props" class="btn" style="margin-right: 2.5%; color: white;">
            <i class="fa fa-user-circle fa-2x" aria-hidden="true"></i>
          </button>
        </template>

        <v-list style="margin-top: 15px; text-align: center; border: 2px solid white;">
          <v-list-item v-if="getRoot">
            <v-list-item-title>{{ getUser }}</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Пол: {{ getGender }}</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Почта: {{ getMail }}</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Телефон: {{ getPhone }}</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Роль: {{ getRoot }}</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Номер ВМ: {{ getNumberVM }}</v-list-item-title>
          </v-list-item>

          <v-list-item @click="exit">
            <v-list-item-title>Выход</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
  </v-container>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  computed: mapGetters(["getUser", "getGender", "getMail", "getPhone", "getRoot", "getPassword", "getNumberVM", "getEntrance"]),
  name: 'MyNavbar',
  methods: {
    ...mapMutations(["changeEntrance"]),
    exit() {
      this.changeEntrance(false);
      this.$router.push('/');
    }
  }
}
</script>

<style scoped>
.forb {
  color: white;
  font-size: 30px;
}

.transparent {
  margin-top: 0.7%;
  background-color: transparent !important;
}

.myButton:hover {
  background-color: #C0C0C0 ; /* Изменяем цвет фона при наведении */
  color: black;
  padding: 15px;
}

.myButton {
  padding: 15px;
}
</style>
