const calendar = {
    state: () => ({
        currentDate: false,
        chosenDay: false,
        chosenMonth: false,
        datesWithLists: [
            {
                listOfListsTodo: [
                    {
                        title: 'asdasd',
                        todoList: [
                            {
                                text: '11asdad',
                                isChecked: false
                            },
                            {
                                text: 'sadsadad',
                                isChecked: true
                            }
                        ]
                    }
                ],
                date: new Date()
            }
        ]
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
        ADD_TO_LIST(state, payload) {
            const listOfListsTodo = state.datesWithLists.find(
                datesWithListsItem =>
                    datesWithListsItem.date.getFullYear() === payload.date.getFullYear()
                    &&
                    datesWithListsItem.date.getMonth() === payload.date.getMonth()
                    &&
                    datesWithListsItem.date.getDate() === payload.date.getDate()
            ).listOfListsTodo;

            listOfListsTodo[payload.index].todoList.push({
                text: payload.text,
                isChecked: false
            })
        }
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
            context.commit('SET_CHOSEN_DAY', payload);
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
        ADD_TO_LIST(context, payload) {
            console.log(payload);
            context.commit('ADD_TO_LIST', payload);
        }
    },
    getters: {
        GET_LIST_OF_LISTS_BY_DATE: state => (year, month, day) => {
            return state.datesWithLists.find(
                todo =>
                    todo.date.getFullYear() === year
                        &&
                    todo.date.getMonth() === month
                        &&
                    todo.date.getDate() === day
            ).listOfListsTodo;
        }
    }
}

export default calendar;