export default {

    state: {
        reservation: [
            {
                id: 0,
                title: "Научный проект",
                information: "Нужны высокие вычислительные мощности",
                status: "Одобрена",
                times: [
                    {
                        hour: "08:00-09:00",
                        employment: 0
                    },
                    {
                        hour: "09:00-10:00",
                        employment: 1
                    },
                    {
                        hour: "10:00-11:00",
                        employment: 1
                    },
                    {
                        hour: "11:00-12:00",
                        employment: 1
                    },
                    {
                        hour: "12:00-13:00",
                        employment: 1
                    },
                    {
                        hour: "13:00-14:00",
                        employment: 0
                    },
                    {
                        hour: "14:00-15:00",
                        employment: 0
                    },
                    {
                        hour: "15:00-16:00",
                        employment: 0
                    },
                    {
                        hour: "16:00-17:00",
                        employment: 0
                    },
                    {
                        hour: "17:00-18:00",
                        employment: 0
                    },
                    {
                        hour: "18:00-19:00",
                        employment: 0
                    },
                    {
                        hour: "19:00-20:00",
                        employment: 0
                    }
                ]
            },
            {
                id: 1,
                title: "Нужно для учебы",
                information: "Проект по мониторингу, нужна виртуальная машина",
                status: "На рассмотрении",
                times: [
                    {
                        hour: "08:00-09:00",
                        employment: 0
                    },
                    {
                        hour: "09:00-10:00",
                        employment: 0
                    },
                    {
                        hour: "10:00-11:00",
                        employment: 0
                    },
                    {
                        hour: "11:00-12:00",
                        employment: 0
                    },
                    {
                        hour: "12:00-13:00",
                        employment: 0
                    },
                    {
                        hour: "13:00-14:00",
                        employment: 0
                    },
                    {
                        hour: "14:00-15:00",
                        employment: 0
                    },
                    {
                        hour: "15:00-16:00",
                        employment: 1
                    },
                    {
                        hour: "16:00-17:00",
                        employment: 1
                    },
                    {
                        hour: "17:00-18:00",
                        employment: 1
                    },
                    {
                        hour: "18:00-19:00",
                        employment: 1
                    },
                    {
                        hour: "19:00-20:00",
                        employment: 1
                    }
                ]
            }
        ]
    },

    getters: {
        getReservation(state) {
            return state.reservation;
        }
    },

    mutations: {
        changeStatus(state, { id, newStatus }) {
            const reservation = state.reservation.find(r => r.id === id);
            if (reservation) {
                reservation.status = newStatus;
            }
        },
    },
    

    actions: {}

};