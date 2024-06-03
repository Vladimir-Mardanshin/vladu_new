export default {

    state: {
      name: "Владислав",
      firstName: "Везинг",
      gender: "Муж",
      mail: "user@mail.ru",
      phone: "89500603158",
      root: "admin",
      password: "1234",
      numberVM: "8743560122",
      entrance: true
    },

    getters: {
      getUser(state) {
        return state.name + " " + state.firstName;
      },
      getGender(state) {
        return state.gender;
      },
      getMail(state) {
        return state.mail;
      },
      getPhone(state) {
        return state.phone;
      },
      getRoot(state) {
        return state.root;
      },
      getPassword(state) {
        return state.password;
      },
      getNumberVM(state) {
        return state.numberVM;
      },
      getEntrance(state) {
        return state.entrance;
      },
    },

    mutations: {
      changeEntrance(state, newEntrance) {
        state.entrance = newEntrance;
      },
      changeEmail(state, newEmail) {
        state.email = newEmail;
      }
    },

    actions: {}
    
  };