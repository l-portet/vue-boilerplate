<template>
  <div class="home">
    <div class="content">
      <h1>
        Remplissez vos informations
      </h1>
      <p>Nom</p>
      <input type="text" name="" value="" placeholder="Dupont">
      <p>Prénom</p>
      <input type="text" name="" value="" placeholder="Jean">
      <p>Date de naissance</p>
      <input type="date" name="" value="">
      <br>
      <button type="button" name="button" @click="confirm()">Confirmer</button>
    </div>
    <bottom-nav :back-btn="false" />
  </div>
</template>

<script>
import BottomNav from '@/components/BottomNav.vue';

export default {
  name: 'Personal',
  components: {
    BottomNav
  },
  methods: {
    confirm() {
      this.$router.push({ name: 'Symptoms' });
    }
  },
  data() {
    return {};
  }
};
</script>

<style scoped lang="scss">
p {
  font-size: 25px;
  margin-bottom: 0;
}

button {
  margin-top: 30px;
}
</style>
