<template>
  <div class="container pt-1">
    <div class="card">
      <h2>Slots</h2>
    </div>
    <app-list>
      <template #default=" { idx, iter } ">
        <span style="color: #c25205;">
          <strong>{{ ++idx }}</strong>
          Item: {{ iter }}
        </span>
      </template>
    </app-list>
    <app-block>
      <p>This is must important text for new block</p>
      <template #header>
        <h3>This is header</h3>
      </template>
      <template v-slot:footer>
        <hr />
        <small>This is footer</small>
      </template>
    </app-block>
  </div>
</template>

<script>
import AppBlock from './components/AppBlock';
import AppList from './components/AppList';
export default {
  components: { AppBlock, AppList }
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

<style scoped></style>