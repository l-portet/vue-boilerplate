<template>
  <div class="end-success">
    <div class="content">
      <h1>Parfait !</h1>
      <h2>
        Votre médecin a été prévenu de votre arrivée. Vos symptômes et mesures lui ont été transmis.
      </h2>
    </div>
    <bottom-nav :back-btn="false" />
  </div>
</template>

<script>
import BottomNav from '@/components/BottomNav.vue';

export default {
  name: 'EndSuccess',
  components: {
    BottomNav
  },
  methods: {},
  data() {
    return {};
  },
  mounted() {
    // fetch(
    //   'https://v2-api.sheety.co/9331f350816f9fe716e61b144bc38016/ashealMvp/data',
    //   {
    //     method: 'POST',
    //     headers: {
    //       Accept: 'application/json',
    //       'Content-Type': 'application/json',
    //       'origin': 'plop.com'
    //     },
    //     body: JSON.stringify({ plop: 'plup', foo: 'fuu' })
    //   }
    // )
    //   .then(async res => await res.json())
    //   .then(res => res.data)
    //   .then(data => console.log(data));
  }
};
</script>

<style scoped lang="scss"></style>
