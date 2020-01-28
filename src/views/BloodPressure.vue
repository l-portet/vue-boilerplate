<template>
  <div class="home">
    <div class="content">
      <h1>
        Prenez votre tension
      </h1>
      <h2>
        Gardez le capteur enroulé tant que l'écran  n'aura pas changé. La tension ne s'affichera pas à l'écran
      </h2>
      <input
        type="number"
        name=""
        value=""
        step="0.1"
        v-model="bloodPressure"
      />
      <button
        type="button"
        name="button"
        @click="
          bloodPressure = parseFloat(parseFloat(bloodPressure - 0.1).toFixed(1))
        "
      >
        -
      </button>
      <button
        type="button"
        name="button"
        @click="
          bloodPressure = parseFloat(parseFloat(bloodPressure + 0.1).toFixed(1))
        "
      >
        +
      </button>
      <button type="button" name="button" @click="confirm()">Confirmer</button>
      <div class="notice"></div>
    </div>
    <bottom-nav />
  </div>
</template>

<script>
import BottomNav from '@/components/BottomNav.vue';

export default {
  name: 'BloodPressure',
  components: {
    BottomNav
  },
  methods: {
    confirm() {
      this.$router.push({ name: 'EndSuccess' });
    }
  },
  data() {
    return {
      bloodPressure: 10
    };
  }
};
</script>
<style scoped lang="scss">
.notice {
  width: 100%;
  height: 550px;
  margin-top: 40px;
  background-repeat: no-repeat;
  background-image: url(https://media1.tenor.com/images/41ee05d6197f731dcec70cface9f1225/tenor.gif);
}
</style>
