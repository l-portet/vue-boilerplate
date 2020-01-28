<template>
  <div class="symptoms-list">
    <h1>
      Sélectionnez les symptômes concernés
    </h1>
    <ul>
      <li
        v-for="(item, index) in symptoms"
        @click="selectSymptom(index)"
        :key="index"
        :class="{ selected: item.selected }"
      >
        {{ item.name }}
      </li>
    </ul>
    <button type="button" name="button" @click="confirm()">
      Confirmer
    </button>
  </div>
</template>

<script>
export default {
  name: 'SymptomsList',
  data() {
    return {
      symptoms: [
        {
          name: 'Fièvre',
          id: 657867,
          selected: false
        },
        {
          name: 'Difficultés à respirer',
          id: 657868,
          selected: false
        },
        {
          name: 'Douleurs dans le cou',
          id: 657869,
          selected: false
        },
        {
          name: 'Sueurs',
          id: 6578,
          selected: false
        },
        {
          name: 'Vertiges',
          id: 6578789,
          selected: false
        },
        {
          name: 'Frissons',
          id: 65780987,
          selected: false
        },
        {
          name: 'Mal de tête (céphalées)',
          id: 6578098789,
          selected: false
        },
        {
          name: 'Nausée, vomissement',
          id: 6578098111789,
          selected: false
        },
        {
          name: 'Sensation de malaise',
          id: 657821098111789,
          selected: false
        },
        {
          name: 'Tremblements',
          id: 657821092128111789,
          selected: false
        },
        {
          name: 'Diarrhée',
          id: 65782109112128111789,
          selected: false
        },
      ]
    };
  },
  computed: {
    selectedSymptoms() {
      return this.symptoms.filter(item => item.selected);
    }
  },
  methods: {
    selectSymptom(index) {
      this.symptoms[index].selected = !this.symptoms[index].selected;
    },
    confirm() {
      if (!this.selectedSymptoms.length) {
        alert('Merci de sélectionner au moins un symptôme');
        return;
      }
      this.$router.push({ name: 'BloodPressure' });
    }
  }
};
</script>

<style lang="scss" scoped>
.symptoms-list {
  height: 939px;
  padding: 2% 20%;
  box-sizing: border-box;
}

ul {
  list-style: none;
  padding: 0;

  li {
    cursor: pointer;
    width: auto;
    border: 5px solid transparent;
    margin-top: -5px;
    font-size: 25px;
  }
}

.selected {
  background: #dfeef5;
  border: 5px solid #6da1b8;
}
</style>
