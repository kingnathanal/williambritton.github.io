<template>
  <div class="container text-center p-5">
    <div class="h4 skills-title w-100 text-white mb-5">I have worked with many technologies</div>
    <div class="skill-box pt-3 pb-5">
      <span
        v-for="(skill, i) in skills"
        :key="i"
        class="badge skill-badge m-1 p-2"
        :class="getRandomBadgeColor()"
        :style="{fontSize: getRandomFontSize()}"
      >{{skill}}</span>
    </div>
    <font-awesome-icon :icon="['fas', 'chevron-down']" :class="['iconStyle']" />
    <div class="clearfix"></div>
  </div>
</template>

<script>
export default {
  name: "Skills",
  props: {
    skills: Array,
    badgecolors: Array
  },
  methods: {
    getRandomBadgeColor() {
      var rndnum = Math.floor(Math.random() * 7 + 1);
      return this.badgecolors[rndnum];
    },
    getRandomFontSize() {
      var rndnum = Math.floor(Math.random() * 25 + 12);
      return rndnum + "pt";
    }
  }
};
</script>

<style>
.skills-title {
  font-family: "Courier New", Courier, monospace;
  font-weight: bold;
}
.skill-badge {
  min-width: 70px;
  text-align: center;
  font-size: 16pt;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
}
.skill-badge:hover {
  font-size: 30pt;
}
.skill-box {
  min-height: 50vh;
}
.iconStyle {
  font-size: 7em;
  padding: 8px;
  color: white;
}

@media only screen and (max-width: 900px) {
  .skill-box {
    min-height: 40vh;
  }
}

@media only screen and (max-width: 400px) {
  .skills-title {
    font-size: 1rem;
  }
}
</style>