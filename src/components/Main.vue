<template>
  <div class="container-fluid h-100">
    <div class="row sticky-top">
      <div class="col content bg-blue" v-scroll="handleScroll">
        <h1 class="namelogo" :class="nameClass">William Britton Jr.</h1>
        <span class="p-2 text-white" :class="noteClass">Software Engineer & DevOps Developer</span>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <ContactIcons />
      </div>
    </div>
    <div class="row pb-3 mb-5 skills-row">
      <div class="col">
        <Skills v-bind:skills="myskills" v-bind:badgecolors="badgecolors" />
      </div>
    </div>
    <div class="row bg-light">
      <div class="col">
        <Jobs v-bind:jobs="jobs" />
      </div>
    </div>
  </div>
</template>

<script>
//import Sidebar from "./Sidebar.vue";
import ContactIcons from "./ContactIcons.vue";
import Jobs from "./Jobs.vue";
import Skills from "./Skills.vue";

export default {
  name: "Main",
  components: {
    ContactIcons,
    Jobs,
    Skills
  },
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
        "Oracle",
        "PLSQL",
        "Git",
        "Jenkins CI",
        "DevOps",
        "Tomcat",
        "WebSphere",
        "Open Liberty",
        "Docker",
        "Linux"
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
      ],
      jobs: [
        {
          name: "Sunsoft Technologies",
          years: "2019 - current",
          position: "Senior Software Engineer"
        },
        {
          name: "DXC Technology",
          years: "2014 - 2019",
          position: "Application Consultant Developer II"
        },
        {
          name: "Covisint Corp",
          years: "2013-2014",
          position: "DevOps .Net Developer"
        },
        {
          name: "Hewlett Packard",
          years: "2011-2013",
          position: "Information Developer II"
        },
        {
          name: "The State of Michigan",
          years: "2010-2011",
          position: "Junior Java/J2EE Developer"
        }
      ],
      nameClass: "name-lg",
      noteClass: "side-note-lg"
    };
  },
  methods: {
    handleScroll() {
      /* eslint no-console: "off"*/
      if (window.scrollY > 50) {
        this.nameClass = "name-sm";
        this.noteClass = "side-note-sm";
      }

      if (window.scrollY < 50) {
        this.nameClass = "name-lg";
        this.noteClass = "side-note-lg";
      }
    }
  }
};
</script>

<style>
body {
  background-color: #034f84;
}
.content {
  text-align: right;
  padding-top: 5px;
  padding-bottom: 5px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
  color: #fff;
}
.bg-blue {
  background-color: #034f84;
}
.side-note-lg {
  font-size: 2rem;
  letter-spacing: 6px;
  transition: font-size 2s;
  -webkit-transition: font-size 2s;
  -moz-transition: font-size 2s;
  -o-transition: font-size 2s;
}
.side-note-sm {
  font-size: 1rem;
  letter-spacing: 6px;
  transition: font-size 2s;
  -webkit-transition: font-size 2s;
  -moz-transition: font-size 2s;
  -o-transition: font-size 2s;
}
.name-logo {
  color: #ffffff;
  text-shadow: rgba(0, 0, 0, 0.5) -1px 0, rgba(0, 0, 0, 0.3) 0 -1px,
    rgba(255, 255, 255, 0.5) 0 1px, rgba(0, 0, 0, 0.3) -1px -2px;
  letter-spacing: 6px;
  transition: font-size 2s;
}
.name-lg {
  font-size: 4rem;
  transition: font-size 2s, margin-top 2s;
  -webkit-transition: font-size 2s;
  -moz-transition: font-size 2s;
  -o-transition: font-size 2s;
  margin-top: 10px;
}
.name-sm {
  font-size: 2rem;

  transition: font-size 2s, margin-top 2s;
  -webkit-transition: font-size 2s;
  -moz-transition: font-size 2s;
  -o-transition: font-size 2s;
  margin-top: 5px;
}
.skills-row {
  min-height: 80vh;
}

@media only screen and (max-width: 900px) {
  .name-lg,
  .name-sm {
    font-size: 3rem;
    letter-spacing: 3px;
  }
  .side-note-lg,
  .side-note-sm {
    font-size: 1rem;
    letter-spacing: 4px;
  }
  .content {
    text-align: center;
  }
  .skills-row {
    min-height: 60vh;
  }
}

@media only screen and (max-width: 600px) {
  .name-lg,
  .name-sm {
    font-size: 2rem;
    letter-spacing: 2px;
  }
  .side-note-lg,
  .side-note-sm {
    font-size: 0.8rem;
    letter-spacing: 3px;
  }
  .content {
    text-align: center;
  }
}

@media only screen and (max-width: 400px) {
  .name-lg,
  .name-sm {
    font-size: 2rem;
    letter-spacing: 1px;
  }
  .side-note-lg,
  .side-note-sm {
    font-size: 0.7rem;
    letter-spacing: 1px;
  }
  .content {
    text-align: center;
  }
}
</style>