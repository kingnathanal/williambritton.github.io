<template>
  <div class="container-fluid h-100">
    <div class="row bg-blue align-items-end header pb-3">
      <div class="col">
        <div class="mx-auto text-center justify-content-bottom">
          <div class="card resume-card mx-auto">
            <div class="card-body resume-container text-left">
              <div class="container">
                <span class="h4 skills-title w-100">~ $ skills:</span>
                <br />
                <br />
                <span
                  v-for="(skill, i) in myskills"
                  :key="i"
                  class="badge skill-badge m-1 p-2"
                  :class="getRandomBadgeColor()"
                  :style="{fontSize: getRandomFontSize()}"
                >{{skill}}</span>
                <br />
                <br />
                <span class="h4 skills-title w-100">~ $ experience:</span>
                <br />
                <br />
                <p>Sunsoft Technologies - Detroit, MI</p>
                <p>DXC Technology - Detroit, MI</p>
                <p>Covisint - Detroit, MI</p>
                <p>Hewlett Packard - Detroit, MI</p>
                <p>The State of Michigan - Lansing, MI</p>
              </div>
            </div>
          </div>
          <h1 class="namelogo">
            William
            <span class="lastname">Britton Jr.</span>
          </h1>
          <span class="p-2 sidenote text-white">Software Engineer, Full Stack DevOps Developer</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//import Sidebar from "./Sidebar.vue";

export default {
  name: "Main",
  data() {
    return {
      myskills: [
        "Java",
        "C#",
        ".Net",
        "HTML5",
        "CSS3",
        "JavaScript",
        "JQuery",
        "JSON",
        "Oracle/PLSQL",
        "Git",
        "Jenkins CI",
        "DevOps",
        "Tomcat",
        "IBM WebSphere",
        "Open Liberty"
      ],
      badgecolors: [
        "",
        "badge-primary",
        "badge-secondary",
        "badge-success",
        "badge-danger",
        "badge-warning",
        "badge-info",
        "badge-dark"
      ]
    };
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
body {
  background-color: #034f84;
}
.bg-blue {
  background-color: #034f84;
}
.header {
  height: 100vh;
  overflow: hidden;
}
.resume-card {
  height: 70vh;
  width: 40vw;
  overflow-y: auto;
}
.resume-container {
  background-color: #ffffff;
}
.sidenote {
  font-size: 2rem;
  letter-spacing: 6px;
}
.namelogo {
  color: #ffffff;
  font-size: 7rem;
  text-shadow: rgba(0, 0, 0, 0.5) -1px 0, rgba(0, 0, 0, 0.3) 0 -1px,
    rgba(255, 255, 255, 0.5) 0 1px, rgba(0, 0, 0, 0.3) -1px -2px;
  letter-spacing: 6px;
}
.skills-title {
  font-family: "Courier New", Courier, monospace;
  font-weight: bold;
}
.skill-badge {
  min-width: 70px;
  text-align: center;
  font-size: 16pt;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
}
.skill-badge:hover {
  font-size: 30pt;
}

@media only screen and (max-width: 900px) {
  .namelogo {
    font-size: 5rem;
    letter-spacing: 4px;
  }
  .sidenote {
    font-size: 1rem;
    letter-spacing: 4px;
  }
  .resume-card {
    width: 80vw;
  }
}

@media only screen and (max-width: 600px) {
  .namelogo {
    font-size: 2rem;
    letter-spacing: 3px;
  }
  .sidenote {
    font-size: 0.8rem;
    letter-spacing: 3px;
  }
}
</style>