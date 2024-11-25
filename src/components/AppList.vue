<template>
    <div class="card">
        <ul>
            <li v-for="( item, i) in 5">
                <slot :iter=" item " :idx=" i "></slot>
            </li>
        </ul>
    </div>
</template>

<script>

</script>

<style scoped>
ul,
li {
    list-style-position: inside;
    list-style-type: upper-alpha;
    text-align: center;
}
</style>