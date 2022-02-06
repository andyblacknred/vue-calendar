const calendar = {
    state: {
        monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        currentDate: false,
        chosenDay: false,
        chosenMonth: false,
        datesWithLists: []
    },
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
                    break
                case 'removeList':
                    listOfListsTodo.splice(payload.index, 1);
                    break
                case 'createList':
                    listOfListsTodo.push({
                        title: '',
                        todoList: []
                    });
                    break
            }

            localStorage.setItem('datesWithLists', JSON.stringify(state.datesWithLists));
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
            if(localStorage.getItem('datesWithLists')) {
                const datesWithLists = JSON.parse(localStorage.getItem('datesWithLists'));

                datesWithLists.forEach(singleDateWithLists => {
                    singleDateWithLists.date = new Date(singleDateWithLists.date);
                })

                context.state.datesWithLists = datesWithLists;
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
        },
        REMOVE_LIST(context, payload) {
            const modifiedPayload = {
                action: 'removeList',
                ...payload
            }
            context.commit('CHANGE_LIST', modifiedPayload);
        },
        CREATE_LIST(context, payload) {
            const modifiedPayload = {
                action: 'createList',
                ...payload
            }
            context.commit('CHANGE_LIST', modifiedPayload);
        }
    },
    getters: {
        GET_LIST_OF_LISTS_BY_CHOOSEN_DATE: state => (chosenDate) => {
            const currentDateWithLists = state.datesWithLists.find(
                todo =>
                    todo.date.getFullYear() === chosenDate.getFullYear()
                    &&
                    todo.date.getMonth() === chosenDate.getMonth()
                    &&
                    todo.date.getDate() === chosenDate.getDate()
            );

            if (!currentDateWithLists) {
                const newDateWithLists = {
                    date: chosenDate,
                    listOfListsTodo: []
                }
                state.datesWithLists.push(newDateWithLists)
                return [newDateWithLists];
            }

            return currentDateWithLists.listOfListsTodo;
        }
    }
}

export default calendar;