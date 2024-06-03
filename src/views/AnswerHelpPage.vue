<template>
    <div class="page" style="color: white;">
      
    <h2 style="display: flex; justify-content: flex-start; margin-top: 20px; margin-bottom: 20px;">Обращения в поддержку:</h2>
      
  
    <div style="margin-bottom: 20px; border: 1px solid grey;" class="container" v-for="item in filteredItems" :key="item.id">
        <div style="display: flex; flex-direction: column; justify-content: flex-start; align-items: flex-start;">
            <h2 style="margin-bottom: 10px; margin-top: 5px; margin-left: 10px;">Обращение:</h2>
            <p style="margin-bottom: 10px; margin-left: 10px;">{{ item.question }}</p>
            <v-textarea 
        label="Ответ на обращение"
        v-model="inputText"
        solo
        style="width: 600px; margin-left: 10px;"
      ></v-textarea>
      <div >
        <v-btn @click="changeAnswer({ id: item.id, newAnswer: inputText })" style="border-radius: 5px; margin-left: 10px; margin-bottom: 10px;">Ответить</v-btn>
      </div>
        </div>
    </div>


    </div>
    <RightSideСalendar />
  </template>

<script>
import RightSideСalendar from '../components/RightSideСalendar.vue';
import { mapGetters } from "vuex";
import { mapMutations } from "vuex";

export default {
  components: {
    RightSideСalendar
  },
  data() {
    return {
      inputText: '', // Начальное значение для v-model
      dialog: false,
      faces: [],
      inform: "",
      backcol: ["", "", "", "", "", "", "", "", ""]
    }
  },
  computed: {
    ...mapGetters(["getItems"]),
    filteredItems() {
      return this.getItems.filter(items => items.answer === '-');
    }
  },
  methods: {
    ...mapMutations(["changeAnswer"]),
    openInfo(info) {
      this.inform = info;
    },
    send() {
      alert('Сообщение отправлено!');
    },
    chengeTheme(emp) {
      if (emp == 1) {
        return "background-color: #C0C0C0";
      }
      else
        return "";
    },
    changeBaccol(N) {
      if (this.backcol[N] == "") {
        this.backcol[N] = "background-color: #C0C0C0;";
      }
      else {
        this.backcol[N] = "";
      }
    },
    addEl(newEl) {
      if (this.faces.length < 2) {
        this.faces.push(newEl);
      }
    },
    check() {
      if (this.faces.length == 2) {
        alert("Ошибка! Может быть только 2 исполнителя.");
      }
    },
    deleteEl(delEl) {
      this.faces.splice(delEl, 1);
    },
    sendInvitation() {
      alert("Бронь закреплена!");
      this.dialog = false;
    },
    appendText() {
      this.inputText += 'user@node1~$: '; // Добавляет текст при нажатии Enter
    }
  }
}
</script>

<style scoped>
.infoDial {
  text-align: center;
  background-color: #ececec;
  width: 400px;
  padding: 20px;
  border-radius: 10px;
}
.elem {
  display: flex;
  color: black;
  margin-right: 5px;
  margin: 6px;
  border-radius: 10px;
  height: 40px;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border: 2px solid #C0C0C0;
}

.parent {
  flex-wrap: wrap;
  display: flex;
  justify-content: center;
  align-items: center;
}

.child1 {
  width: 130%;
  background-color: #ececec;
  flex-wrap: wrap;
  display: flex;
  justify-content: center;
  align-items: center;
}

.child2 {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

.ttit {
  display: flex;
  align-items: left;
  margin-top: 140px;
  margin-left: 2%;
  color: black;
}

.dbtn {
  display: flex;
  align-items: left;
}

.top-half {
  background-color: #C0C0C0;
  height: 65%;
}

.bottom-half {
  background-color: #ececec;
  height: 35%;
  display: flex;
}

.bottom-half>div {
  margin-right: 10px;
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

.forbd {
  margin-top: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.forp {
  border-radius: 10px;
  background-color: #C0C0C0;
  padding: 6px;
}

.faces-container {
  height: 50px;
  display: flex;
  align-items: center;
}

.ftime {
  width: 150px;
  margin-right: 10px;
  margin-bottom: 10px;
  border-radius: 10px;
}

.fdial {
  background-color: #ececec;
  width: 520px;
  padding: 20px;
  border-radius: 10px;
}
</style>
