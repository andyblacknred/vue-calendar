const calendar = {
    state: () => ({
        currentDate: false,
        chosenDay: false,
        chosenMonth: false
    }),
    mutations: {
        SET_CURRENT_DATE(state) {
            state.currentDate = new Date();
        },
        SET_CHOSEN_DAY(state, payload) {
            state.chosenDay = payload;
        },
        SET_CHOSEN_MONTH(state, payload) {
            state.chosenMonth = payload;
        },
    },
    actions: {
        INIT_CALENDAR_STORE(context) {
            if(!context.state.currentDate) {
                context.commit('SET_CURRENT_DATE');
                context.commit('SET_CHOSEN_DAY', context.state.currentDate);
                context.commit(
                    'SET_CHOSEN_MONTH',
                    new Date(
                        context.state.currentDate.getFullYear(),
                        context.state.currentDate.getMonth(),
                        1
                    )
                );
            }
        },
        SET_CHOSEN_DAY(context, payload) {
            context.commit('SET_CURRENT_DATE', payload);
        },
        NEXT_MONTH(context) {
            context.commit(
                'SET_CHOSEN_MONTH',
                new Date(
                    context.state.chosenMonth.getFullYear(),
                    context.state.chosenMonth.getMonth() + 1,
                    1
                )
            );
        },
        PREVIOUS_MONTH(context) {
            context.commit(
                'SET_CHOSEN_MONTH',
                new Date(
                    context.state.chosenMonth.getFullYear(),
                    context.state.chosenMonth.getMonth() - 1,
                    1
                )
            );
        },

    },
    getters: {}
}

export default calendar;