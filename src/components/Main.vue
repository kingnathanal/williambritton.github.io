<template>
  <div class="container-fluid h-100">
    <div class="row">
      <div class="col">
        <ContactIcons />
      </div>
    </div>
    <div class="row">
      <div class="col">
        <div class="container about-container">
          <div class="row align-items-center">
            <div>
              <div class="aboutme">
                Hi, my name is
                <span class="name-logo">William Britton</span>. 👋
              </div>
              <div class="tag-line">I like techy things and I love to write code.</div>
              <div class="about-desc">
                <p>
                  I am a Software Engineer & DevOps Developer,
                  <br />based out of the Detroit area.
                  <br />
                  <br />
                  <a href="brittonresume2019.pdf" class="btn btn-outline-warning">Grab My Resume</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row skills-row shadow">
      <div class="col">
        <Skills v-bind:skills="myskills" v-bind:badgecolors="badgecolors" />
      </div>
    </div>
    <div class="row jobs-row">
      <div class="col">
        <Jobs v-bind:jobs="jobs" />
      </div>
    </div>
    <div class="row works-row shadow">
      <div class="col">
        <!-- Here is my work -->
      </div>
    </div>
    <div class="row footer-row align-items-center">
      <div class="col">
        <div class="container">
          <span>
            Built and Designed By Me with
            <img
              alt="Vue logo"
              src="../assets/logo.png"
              class="vue-logo"
            /> © 2020
          </span>
        </div>
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
        "Linux",
        "Sql Server",
        "SSRS",
        "SonarQube",
        "Artifactory",
        "Photoshop",
        "Postgresql"
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
      noteClass: "side-note-lg",
      nameRowClass: ""
    };
  },
  methods: {
    handleScroll() {
      /* eslint no-console: "off"*/
      if (window.scrollY > 75) {
        this.nameClass = "name-sm";
        this.noteClass = "side-note-sm";
        this.nameRowClass = "row-shadow sticky-top";
      }

      if (window.scrollY < 75) {
        this.nameClass = "name-lg";
        this.noteClass = "side-note-lg";
        this.nameRowClass = "";
      }
    }
  }
};
</script>

<style>
.aboutme {
  font-size: 3.6rem;
  font-weight: bold;
}
.tag-line {
  font-size: 2.5rem;
  font-weight: bold;
}
.about-container {
  text-align: left;
  color: #fff;
}

.about-container .row {
  height: 96vh;
}

.about-desc {
  margin-top: 60px;
  font-size: 1.2rem;
  letter-spacing: 3px;
  width: 30vw;
}
.name-logo {
  color: #ffffff;
  text-shadow: rgba(0, 0, 0, 0.5) -1px 0, rgba(0, 0, 0, 0.3) 0 -1px,
    rgba(255, 255, 255, 0.5) 0 1px, rgba(0, 0, 0, 0.3) -1px -2px;
  letter-spacing: 6px;
  transition: font-size 2s;
  font-family: "Pacifico", cursive !important;
}
.skills-row {
  background-color: #fff;
  padding: 20px 0px;
}
.works-row {
  background-color: #fff;
  min-height: 30vh;
}
.jobs-row {
  padding: 20px;
}
.footer-row {
  color: #fff;
  padding: 10px;
  font-size: 1rem;
  text-align: left;
  min-height: 5vh;
}
.vue-logo {
  height: 40px;
}

@media only screen and (max-width: 1024px) {
  .aboutme {
    font-size: 3rem;
  }
  .tag-line {
    font-size: 1.5rem;
    margin-top: 20px;
  }
  .about-desc {
    width: 60vw;
  }
}

@media only screen and (max-width: 600px) {
  .aboutme {
    font-size: 3rem;
  }
  .tag-line {
    font-size: 1.5rem;
    margin-top: 40px;
  }
  .about-desc {
    width: 60vw;
  }
}

@media only screen and (max-width: 400px) {
  .aboutme {
    font-size: 2rem;
  }
  .tag-line {
    font-size: 1.5rem;
    margin-top: 40px;
  }
  .about-desc {
    width: 80vw;
  }
}
</style>