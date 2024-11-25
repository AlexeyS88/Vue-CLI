<template>
    <div class="card">
        <h3>{{ title }}</h3>
        <app-button @action="open">
            {{ isNewsOpen ? 'Закрыть' : 'Открыть' }}
        </app-button>
        <app-button color="danger" v-if="wasRead" @action="$emit('unmark', id)">
            Отметить непрочитанной
        </app-button>
        <div v-if="isNewsOpen">
            <hr />
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt, non!</p>
            <app-button color="primary" @action="mark" v-if="!wasRead">Прочесть новость</app-button>
            <app-news-list></app-news-list>
        </div>
    </div>
</template>

<script>
import AppButton from './AppButton.vue';
import AppNewsList from './AppNewsList.vue';
export default {
    // props: ['title'],
    props: {
        title: {
            type: String,
            required: true
        },
        id: {
            type: Number,
            required: true
        },
        isOpen: {
            type: Boolean,
            required: false,
            default: false,
            // validator(value) {
            //     console.log(value)
            //     return value === true || value === false
            // }
        },
        wasRead: Boolean
    },
    // emits: ['open-news'],

    emits: {
        'open-news': null,
        'read-news'(id) {
            if (id) {
                return true
            }
            console.warn('Нет параметра id для emit read-news')
            return false
        },
        unmark(id) {
            if (id) {
                return true
            }
            console.warn('Нет параметра id для emit unmark')
            return false
        }
    },
    data() {
        return {
            isNewsOpen: this.isOpen
        }
    },
    methods: {
        open() {
            this.isNewsOpen = !this.isNewsOpen
            if (this.isNewsOpen) {
                this.$emit('open-news')
            }
        },
        mark() {
            this.isNewsOpen = false
            this.$emit('read-news', this.id)
        },
        // unmark() {
        //     this.$emit('unmark', this.id)
        // }
    },
    components: { AppButton, AppNewsList }
}
</script>