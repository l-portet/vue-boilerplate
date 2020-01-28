<template>
  <div class="home">
    <div class="content" @click="goSymptoms()">
      <h1>
        Touchez pour commencer
      </h1>
      <div class="touch-animation">
        <div class="pulsating-circle"></div>
      </div>
    </div>
    <bottom-nav :back-btn="false" />
  </div>
</template>

<script>
import BottomNav from '@/components/BottomNav.vue';

export default {
  name: 'Home',
  components: {
    BottomNav
  },
  methods: {
    goSymptoms() {
      this.$router.push({ name: 'Personal' });
    }
  },
  data() {
    return {};
  }
};
</script>

<style scoped lang="scss">
.content {
  height: 939px;
  padding: 2% 20%;
  box-sizing: border-box;

  h1 {
    font-size: 50px;
  }
}

.pulsating-circle {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  width: 100px;
  height: 100px;

  &:before {
    content: '';
    position: relative;
    display: block;
    width: 300%;
    height: 300%;
    box-sizing: border-box;
    margin-left: -100%;
    margin-top: -100%;
    border-radius: 50%;
    background-color: #01a4e9;
    animation: pulse-ring 1.25s cubic-bezier(0.215, 0.61, 0.355, 1) infinite;
  }

  &:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    display: block;
    width: 100%;
    height: 100%;
    background-color: #56bde8;
    border-radius: 50%;
    box-shadow: 0 0 8px rgba(20, 91, 126, 0.3);
    animation: pulse-dot 1.25s cubic-bezier(0.455, 0.03, 0.515, 0.955) -0.4s infinite;
  }
}

@keyframes pulse-ring {
  0% {
    transform: scale(0.33);
  }
  80%,
  100% {
    opacity: 0;
  }
}

@keyframes pulse-dot {
  0% {
    transform: scale(0.8);
  }
  50% {
    transform: scale(1);
  }
  100% {
    transform: scale(0.8);
  }
}
</style>
