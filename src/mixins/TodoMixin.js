import {mapActions, mapGetters, mapState} from "vuex";

export default {
    computed: {
        ...mapState({
            chosenDay: state => state.calendar.chosenDay
        }),
        ...mapGetters({
            listOfListsTodo: 'GET_LIST_OF_LISTS_BY_CHOOSEN_DATE'
        }),
    },
    methods: {
        ...mapActions({
            addToList: 'ADD_TO_LIST',
            removeFromList: 'REMOVE_FROM_LIST',
            changeTitle: 'CHANGE_TITLE',
            changeStatus: 'CHANGE_STATUS',
            removeList: 'REMOVE_LIST',
        }),
    },
}