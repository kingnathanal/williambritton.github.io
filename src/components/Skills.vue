<template>
  <div class="container p-0 my-4">
    <div class="row pt-4">
      <div class="col-lg-8 col-sm-12 about-etc">
        <span class="about-title h4">
          Background:
          <hr />
        </span>
        <span class="font-weight-bold">I specialize in creating functional software solutions.</span>
        <br />
        <br />I'm currently an Software Engineer. My work extends anywhere from website to desktop based applications.
        Sometimes I also architect backend systems, everything from database designing, to application deployment,
        containerization, operation administration and on-premise or cloud hosting.
        <br />
        <br />When Im not coding, I enjoy taking photos:
        <br />
        <br />
        <a
          href="http://www.nathanalphotography.com"
          class="btn btn-outline-success"
          target="_blank"
        >Check out my portfolio</a>
      </div>
      <div class="col-lg-4 col-sm-12 text-center">
        <img alt="picture of a genius" src="../assets/me.jpg" class="me-logo" />
      </div>
    </div>
    <div class="row my-5">
      <div class="col mt-3">
        <div class="skills-title mb-3">
          Skills:
          <hr />
        </div>
        <div class="skill-box pt-1">
          <span
            v-for="(skill, i) in skills"
            :key="i"
            class="badge skill-badge m-1 p-2"
            :class="getRandomBadgeColor()"
            :style="{fontSize: getRandomFontSize()}"
          >{{skill}}</span>
        </div>
      </div>
    </div>
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
      var rndnum = Math.floor(Math.random() * 3 + 9);
      return rndnum + "pt";
    }
  }
};
</script>

<style>
.skills-title {
  font-size: 1.5rem;
  letter-spacing: 1px;
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
  min-height: 10vh;
}
.me-logo {
  height: 250px;
  box-shadow: 0 0px 15px rgba(0, 0, 0, 0.671);
}
.about-etc {
  font-size: 1rem;
}
.about-title {
  font-size: 1.5rem;
  margin-bottom: 12px;
  letter-spacing: 1px;
}
.about-title-row {
  text-align: right;
}

@media only screen and (max-width: 900px) {
  .skills-title {
    font-weight: bold;
    font-size: 1.5rem;
  }
  .me-logo {
    height: 200px;
    margin-top: 30px;
  }
}

@media only screen and (max-width: 450px) {
  .skills-title {
    font-size: 1.2rem;
    margin-bottom: 20px;
  }
  .me-logo {
    height: 200px;
    margin-top: 30px;
  }
  .about-etc {
    font-size: 0.9rem;
  }
  .about-title-row {
    text-align: center;
  }
}
</style>