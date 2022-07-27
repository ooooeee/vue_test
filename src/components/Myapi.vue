<template>
    <div id="api">
        {{ info }}
    </div>
</template>

<script>
 new Vue({
  el: '#api',
  data() {
    return {
      info: null
    };
  },
  mounted() {
    axios
      .get('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then(response => (this.info = response));
  }
});
</script>

<style>

</style>