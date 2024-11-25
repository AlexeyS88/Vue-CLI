<template>
    <hr />
    <h4>{{ title }}</h4>
    <ul>
        <li v-for="item in news">{{ item.title }} <span v-if="item.wasRead">&#9745;</span></li>
    </ul>
</template>

<script>
export default {
    inject: ['title', 'news']
}
</script>