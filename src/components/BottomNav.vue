<template>
  <div class="bottom-nav">
    <button type="button" name="button" class="btn-back" v-if="backBtn">
      Retour
    </button>
  </div>
</template>

<script>
export default {
  name: 'BottomNav',
  props: ['back-btn'],
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.bottom-nav {
  background: #efefef;
  width: 100%;
  height: 141px;
  float: bottom;
}
</style>
