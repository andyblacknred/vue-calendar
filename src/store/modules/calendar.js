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
        CHANGE_LIST(state, payload) {
            const listOfListsTodo = state.datesWithLists.find(
                datesWithListsItem =>
                    datesWithListsItem.date.getFullYear() === payload.date.getFullYear()
                    &&
                    datesWithListsItem.date.getMonth() === payload.date.getMonth()
                    &&
                    datesWithListsItem.date.getDate() === payload.date.getDate()
            ).listOfListsTodo;

            switch (payload.action) {
                case 'addToList':
                    listOfListsTodo[payload.index].todoList.push({
                        text: payload.text,
                        isChecked: false
                    });
                    break;
                case 'removeFromList':
                    listOfListsTodo[payload.index].todoList.splice(payload.indexChild, 1);
                    break;
                case 'changeTitle':
                    listOfListsTodo[payload.index].title = payload.title;
                    break
                case 'changeStatus':
                    listOfListsTodo[payload.index].todoList[payload.indexChild].isChecked = payload.status;
            }
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
            const modifiedPayload = {
                action: 'addToList',
                ...payload
            }
            context.commit('CHANGE_LIST', modifiedPayload);
        },
        REMOVE_FROM_LIST(context, payload) {
            const modifiedPayload = {
                action: 'removeFromList',
                ...payload
            }
            context.commit('CHANGE_LIST', modifiedPayload);
        },
        CHANGE_TITLE(context, payload) {
            const modifiedPayload = {
                action: 'changeTitle',
                ...payload
            }
            context.commit('CHANGE_LIST', modifiedPayload);
        },
        CHANGE_STATUS(context, payload) {
            const modifiedPayload = {
                action: 'changeStatus',
                ...payload
            }
            context.commit('CHANGE_LIST', modifiedPayload);
        }
    },
    getters: {
        GET_LIST_OF_LISTS_BY_DATE: state => (chosenDate) => {
            return state.datesWithLists.find(
                todo =>
                    todo.date.getFullYear() === chosenDate.getFullYear()
                        &&
                    todo.date.getMonth() === chosenDate.getMonth()
                        &&
                    todo.date.getDate() === chosenDate.getDate()
            ).listOfListsTodo;
        }
    }
}

export default calendar;