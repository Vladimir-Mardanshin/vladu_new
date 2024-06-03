export default {

    state: {
        items: [
            {
                id: 0,
                question: "Как оформить аренду?",
                answer: 'Нужно выбрать пункт "Аренда", нажать кнопку "Добавить бронь" и указать нужные Вам параметры',
                idUser: 0
            },
            {
                id: 1,
                question: "Как выйти из системы?",
                answer: '-',
                idUser: 0
            }
        ]
    },

    getters: {
        getItems(state) {
            return state.items;
        }
    },

    mutations: {
        changeAnswer(state, { id, newAnswer }) {
            const items = state.items.find(r => r.id === id);
            if (items) {
                items.answer = newAnswer;
            }
        },
    },

    actions: {}

};