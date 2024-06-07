<template>
    <div v-if="getNumberVM != ''">
      <div class="page" style="color: white;">
        <h2 style="display: flex; justify-content: flex-start; margin-top: 20px; 
        margin-bottom: 20px;">Пользователи системы</h2>
  
        <div style="margin-bottom: 20px; border: 1px solid grey;" class="container" v-for="user in users"
          :key="user.id">
          <div style="display: flex; flex-direction: column; justify-content: flex-start; align-items: flex-start;">
            <p style="margin-bottom: 10px; margin-left: 10px; margin-top: 10px;">{{ user.firstName }} {{user.lastName}}</p>
            <p style="margin-bottom: 10px; margin-left: 10px;">Почта: {{ user.email }}</p>
            <p style="margin-bottom: 10px; margin-left: 10px;">Телефон: {{ user.phone }}</p>
            <p style="margin-bottom: 10px; margin-left: 10px;">Пол: {{ user.gender }}</p>
            <p style="margin-bottom: 10px; margin-left: 10px;">Роль: {{ user.role }}</p>
            <p style="margin-bottom: 10px; margin-left: 10px;">Номер ВМ: {{ user.numberVM }}</p>
          </div>
          <div style="display: flex; justify-content: flex-start; margin-bottom: 10px; margin-left: 10px;">
          <v-btn @click="deleteRecord(user.id)" style="border-radius: 5px;">Удалить</v-btn>
        </div>
        </div>
      </div>
      <RightSideСalendar />
    </div>
    <div class="centered-container" v-else>
      <h1 style="color: white; margin-bottom: 15px;">Выполните вход!</h1>
      <v-btn @click="$router.push('/')" class="transparent-button">
        Войти
      </v-btn>
    </div>
  </template>
  
  
  <script>
  import { ref, onValue, remove } from "firebase/database";
  import { db } from "@/firebase.js";
  import RightSideСalendar from '../components/RightSideСalendar.vue';
  import { mapGetters } from "vuex";
  
  export default {
    components: {
      RightSideСalendar
    },
    data() {
      return {
        users: [] 
      }
    },
    computed: {
      ...mapGetters(["getNumberVM", "getId"]),
    },
    methods: {
      fetchUsers() {
        const userRef = ref(db, 'Users');
        onValue(userRef, (snapshot) => {
          const data = snapshot.val();
          const usersArray = [];
          for (let key in data) {
            usersArray.push({ id: key, ...data[key] });
          }
          this.users = usersArray;
        });
      },
      deleteRecord(id) {
      const userRef = ref(db, `Users/${id}`);
      remove(userRef).then(() => {
        this.fetchUsers(); 
      }).catch((error) => {
        console.error('Ошибка при удалении записи: ', error);
      });
    }
    },
    created() {
      this.fetchUsers(); 
    }
  }
  </script>
  
  
  <style scoped>
  .centered-container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
  }
  
  .container {
    border-radius: 10px;
  }
  
  .page {
    margin-top: 4.5%;
    color: azure;
    margin-left: 3.4%;
    width: 70%;
  }
  </style>
  