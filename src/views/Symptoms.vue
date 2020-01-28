<template>
  <div class="symptoms">
    <symptoms-list />
    <bottom-nav />
  </div>
</template>

<script>
import BottomNav from '@/components/BottomNav.vue';
import SymptomsList from '@/components/SymptomsList.vue';

export default {
  name: 'Symptoms',
  components: {
    BottomNav,
    SymptomsList
  },
  methods: {
  },
  data() {
    return {};
  }
};
</script>

<style scoped lang="scss">

</style>
