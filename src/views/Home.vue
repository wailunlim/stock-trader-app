<template>
  <!--
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
-->
  <div class="container">
    <h1>Trade or View your Portfolio</h1>
    <p>
      You may Save & Load your Data<br />
      Click on 'End Day' to begin a new Day!
    </p>
    <hr />
    <br />
    <p>
      <strong>Your Funds: ${{ funds }}</strong>
    </p>
  </div>
</template>

<script>
export default {
  name: "home",
  computed: {
    funds() {
      return this.$store.getters.getUserFunds;
    }
  }
};
</script>

<style scoped>
.container {
  padding: 2.5%;
  border-style: solid;
  border-width: 1px;
}
</style>
