<template>
    <div class="page" style="color: white;  text-align: left;">
      <div>
        <h1>Виртуальные машины</h1>
        <br>
        <p>Виртуальная машина (ВМ) — программная система, эмулирующая работу физического сервера. На одном физическом сервере может работать несколько ВМ. Каждая ВМ запускается в изолированной среде и не влияет на работу других. Для создания и управления ВМ платформа использует специальное ПО — гипервизоры QEMU-KVM и LXD.</p>
        
        <p>Гипервизор выделяет для ВМ виртуальные процессоры (vCPU). Виртуальный процессор — это программная виртуализация физического процессора. Чем больше vCPU будет выделено для ВМ, тем больше она получит времени физического процессора. От количества vCPU зависит количество потоков для приложений, запускаемых на ВМ.</p>
        
        <br>
  
        <h1>Кластеры и узлы</h1>
        <br>
        <p>Кластер — группа серверов, на которых создаются и работают ВМ. Обычно администратор инфраструктуры объединяет серверы в кластер по каким-либо общим признакам: например, месту размещения, объёму ресурсов, конфигурации создаваемых ВМ и т.д. Рекомендуется расположить серверы кластера в одной локации и обеспечить высокую скорость передачи данных между ними.</p>
  
        <p>Серверы кластера называются узлами или нодами (node). Рекомендуется, чтобы узлы кластера были гомогенными — имели одинаковые настройки сети, маршрутизации и версии программного обеспечения. Подробнее о требованиях к узлам см. в статье Требования к серверу для кластера.</p>
  
        <p>VMmanager поддерживает использование оверселлинга в кластере. Оверселлинг — это возможность разместить в кластере больше ВМ, чем позволяют ресурсы серверов. Оверселлинг доступен, если ВМ в кластере фактически потребляют меньше ресурсов, чем для них было выделено. Подробнее см. в статье Оверселлинг.</p>
  
        <p>Платформа версии VMmanager Infrastructure позволяет настроить отказоустойчивый кластер. Отказоустойчивый кластер (кластер высокой доступности, high availability cluster, HA-кластер) — группа серверов, гарантирующая минимальное время простоя ВМ. В случае, если один из узлов кластера потерял связь с другими узлами или подключённым хранилищем, VMmanager запустит процесс аварийного восстановления — релокации ВМ. Подробнее см. в разделе Отказоустойчивые кластеры.</p>
  
        <p>При миграции ВМ из VMmanager 5 в платформе создаётся временный кластер. Временный кластер — это кластер с ограниченной функциональностью для временного размещения ВМ на период миграции. Во временный кластер входят узлы кластера VMmanager 5. Подробнее см. в статье Миграция с VMmanager 5 на VMmanager 6.</p>
        <br>
        <h1>Хранилища</h1>
        <br>
        <p>Хранилище — это пространство, где находятся файлы дисков ВМ. Хранилища могут быть:</p>
        <ul>
          <li>локальные — файлы находятся на узле кластера;</li>
          <li>сетевые — файлы находятся на внешнем сервере или группе серверов.</li>
        </ul>
        
        <p>К одному кластеру одновременно может быть подключено несколько хранилищ. Платформа позволяет задать гибкие настройки для распределения ВМ по хранилищам.</p>
  
        <p>Подробнее о поддерживаемых хранилищах см. в статье Типы хранилищ.</p>
        <br>
        <h1>Платформа</h1>
        <br>
        <p>Сервер с платформой (сервер с VMmanager, мастер-сервер) — это отдельный физический или виртуальный сервер, на котором установлено ПО VMmanager. Сервер с платформой выполняет функции по управлению виртуальными и сетевыми ресурсами. Для обеспечения стабильной работы сервер с платформой не должен использоваться в качестве узла кластера.</p>
        <br>  
    </div>
      <RightSideСalendar />
    </div>
  </template>
  
  <script>
  import RightSideСalendar from '../components/RightSideСalendar.vue';
  import { mapGetters } from "vuex";
  
  export default {
    components: {
      RightSideСalendar
    },
    data() {
      return {
        dialog: false,
        faces: [],
        inform: "",
        backcol: ["", "", "", "", "", "", "", "", ""]
      }
    },
    computed: {
      ...mapGetters(["getPeoples"]),
    },
    methods: {
      openInfo(info) {
        this.inform = info;
      },
      chengeTheme(emp) {
        if (emp == 1) {
          return "background-color: #C0C0C0";
        } else {
          return "";
        }
      },
      changeBaccol(N) {
        if (this.backcol[N] == "") {
          this.backcol[N] = "background-color: #C0C0C0;";
        } else {
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
        this.inputText += 'user@node1~$: ';
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
    height: 300px;
    width: 100%;
    border-radius: 10px;
    overflow: hidden;
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
  