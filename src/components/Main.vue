<template>
  <div class="container-fluid h-100">
    <div class="row bg-blue sticky-top shadow">
      <div class="col d-flex justify-content-between" v-scroll="handleScroll">
        <div class="top-name-area">
          <div class="name-logo-2 p-3">William Britton</div>
        </div>
        <div>
          <ContactIcons />
        </div>
      </div>
    </div>
    <div class="row bg-blue shadow">
      <div class="col">
        <div class="container about-container p-0">
          <div class="row align-items-center">
            <div class="m-4">
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
                  <a
                    href="brittonresume2019.pdf"
                    target="_blank"
                    class="btn btn-outline-warning"
                  >Grab My Resume</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row skills-row">
      <div class="col">
        <Skills v-bind:skills="myskills" v-bind:badgecolors="badgecolors" />
      </div>
    </div>
    <div class="row jobs-row">
      <div class="col">
        <Jobs v-bind:jobs="jobs" />
      </div>
    </div>
    <div class="row works-row">
      <div class="col">
        <Projects />
      </div>
    </div>
    <div class="row footer-row align-items-center bg-blue">
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
import Projects from "./Projects";

export default {
  name: "Main",
  components: {
    ContactIcons,
    Jobs,
    Skills,
    Projects
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
        "Postgresql",
        "Azure"
      ],
      badgecolors: [
        "",
        "btn-outline-primary",
        "btn-outline-secondary",
        "btn-outline-success",
        "btn-outline-danger",
        "btn-outline-warning",
        "btn-outline-info",
        "btn-outline-dark"
        //"badge-primary",
        //"badge-secondary",
        //"badge-success",
        //"badge-danger",
        //"badge-warning",
        //"badge-info",
        //"badge-dark",
      ],
      jobs: [
        {
          name: "Sunsoft Technologies",
          years: "2019 - current",
          position: "Senior Software Engineer",
          skills: [
            "Software Developer for Detroit Diesel Mechatronics Engineering",
            "Spring MVC and Spring Boot application development",
            "Administration of DevOps toolchain: GitLab, Jenkins, Artifactory",
            "Docker with pipeline integration and deployment",
            "Oracle PL/SQL, SQL Server Database development"
          ]
        },
        {
          name: "DXC Technology",
          years: "2014 - 2019",
          position: "Application Consultant Developer II",
          skills: [
            "Java/J2EE Development",
            "Full stack application development: HTML CSS JavaScript",
            "SOAP, Restful Webservice creation and support",
            "Oracle PL/SQL, SQL Server Database development"
          ]
        },
        {
          name: "Covisint Corp",
          years: "2013-2014",
          position: "DevOps .Net Developer",
          skills: [
            ".Net/C# ASP.NET Developement, minor J",
            "IIS and Linux Tomcat/Glassfish server operations administrator",
            "Database Development, SSRS, SSIS, Sql Server administration"
          ]
        },
        {
          name: "Hewlett Packard",
          years: "2011-2013",
          position: "Information Developer II",
          skills: [
            "Java/J2EE application developement for Mechatronics data",
            "Full stack development; HTML, CSS, JavaScript, Java POJO, DAO",
            "Database object design and sql script creation"
          ]
        },
        {
          name: "The State of Michigan",
          years: "2010-2011",
          position: "Junior Java/J2EE Developer",
          skills: [
            "Java/J2EE development with Struts Framework",
            "Creation of JSP, HTML, CSS, Javascript web page elements",
            "JBoss application server administration"
          ]
        },
        {
          name: "Coca-Cola Enterprises",
          years: "2004-2010",
          position: "Large Store Account Manager",
          skills: [
            "Selling of new products and promotions",
            "Management of store inventory levels",
            "Product and Point of Sale placement"
          ]
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
.bg-blue {
  background-color: #034f84;
}
/*
@media (prefers-color-scheme: dark) {
  .bg-blue {
    background-color: #000000;
    color: #f2f2f2;
  }
  .about-container {
    text-align: left;
    color: #f2f2f2;
  }
  .name-logo {
    color: #f2f2f2;
  }
}
*/
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
  width: 50vw;
}
.name-logo {
  color: #ffffff;
  text-shadow: rgba(0, 0, 0, 0.5) -1px 0, rgba(0, 0, 0, 0.3) 0 -1px,
    rgba(255, 255, 255, 0.5) 0 1px, rgba(0, 0, 0, 0.3) -1px -2px;
  letter-spacing: 6px;
  transition: font-size 2s;
  font-family: "Pacifico", cursive !important;
}
.name-logo-2 {
  color: #ffffff;
  text-shadow: rgba(0, 0, 0, 0.5) -1px 0, rgba(0, 0, 0, 0.3) 0 -1px,
    rgba(255, 255, 255, 0.5) 0 1px, rgba(0, 0, 0, 0.3) -1px -2px;
  letter-spacing: 6px;
  transition: font-size 2s;
  font-family: "Pacifico", cursive !important;
  padding: 16px;
}
.skills-row {
  background-color: #fff;
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
  font-size: 0.8rem;
  text-align: left;
  min-height: 5vh;
}
.vue-logo {
  height: 30px;
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

@media only screen and (max-width: 850px) {
  .aboutme {
    font-size: 2rem;
  }
  .tag-line {
    font-size: 1.5rem;
    margin-top: 10px;
  }
  .about-desc {
    width: 80vw;
    margin-top: 40px;
    font-size: 1.2rem;
  }
}

@media only screen and (max-width: 600px) {
  .aboutme {
    font-size: 2.5rem;
  }
  .tag-line {
    font-size: 1.2rem;
    margin-top: 40px;
  }
  .about-desc {
    width: 80vw;
  }
  .top-name-area {
    display: none;
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
  .top-name-area {
    display: none;
  }
}
</style>