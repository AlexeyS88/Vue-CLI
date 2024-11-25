<template>
    <div class="container pt-1">
        <div class="card">
            <h2>Актуальные новости {{ now }}</h2>
            <span>Открыто: <strong>{{ openRate }}</strong> | Прочитано: <strong>{{ readRate }}</strong></span>
        </div>
        <app-news v-for=" item in news " :key=" item.id " :title=" item.title " :id=" item.id " :is-open=" item.isOpen "
            :was-read=" item.wasRead " @open-news=" openNews " @read-news=" readNews " @unmark=" unreadNews "></app-news>
    </div>
</template>

<script>
import AppNews from './components/AppNews.vue';
export default {
    name: 'App',
    components: {
    },
    data ()
    {
        return {
            now: new Date().toLocaleDateString(),
            openRate: 0,
            readRate: 0,
            news: [
                {
                    title: 'Vue и веб-компоненты — взаимодополняющие технологии.',
                    id: 1,
                    isOpen: false,
                    wasRead: false
                },
                {
                    title: 'Vue имеет отличную поддержку и чтобы использовать и чтобы создавать пользовательские элементы.',
                    id: 2,
                    isOpen: false,
                    wasRead: false
                }
            ]
        };
    },
    provide ()
    {
        return {
            title: 'Список новостей',
            news: this.news
        };
    },
    methods: {
        openNews ()
        {
            this.openRate++;
        },
        readNews ( id )
        {
            const idx = this.news.findIndex( news => news.id === id );
            this.news[ idx ].wasRead = true;
            this.readRate++;
        },
        unreadNews ( id )
        {
            const news = this.news.find( news => news.id === id );
            news.wasRead = false;
            this.readRate--;
        }
    },
    components: {
        // 'app-news': AppNews,
        // 'AppNews': AppNews
        AppNews
    }
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>

<style scoped>
h2 {
    color: darkred;
}
</style>