<template>
  <div class="p-4 content-contact">
    <a :href="photographyUrl" target="_blank" title="Photography Portfolio">
      <font-awesome-icon :icon="['fas', 'camera']" :class="iconClasses" />
    </a>
    <a :href="githubUrl" target="_blank" title="Github">
      <font-awesome-icon :icon="['fab', 'github']" :class="iconClasses" />
    </a>
    <a :href="linkedinUrl" target="_blank" title="LinkedIn">
      <font-awesome-icon :icon="['fab', 'linkedin']" :class="iconClasses" />
    </a>
    <a :href="instagramUrl" target="_blank" title="Instagram">
      <font-awesome-icon :icon="['fab', 'instagram']" :class="iconClasses" />
    </a>
    <a :href="emailAddress" target="_blank" title="Email Me">
      <font-awesome-icon :icon="['fas', 'envelope']" :class="iconClasses" />
    </a>
  </div>
</template>

<script>
export default {
  name: "ContactIcons",
  data() {
    return {
      iconClasses: "m-2 icon-style",
      photographyUrl: "http://www.nathanalphotography.com",
      githubUrl: "http://www.github.com/kingnathanal",
      linkedinUrl: "http://linkedin.com/in/brittonwilliam",
      instagramUrl: "https://www.instagram.com/kingnathanal/",
      emailAddress: "mailto:williambritton@outlook.com"
    };
  }
};
</script>

<style>
a {
  color: white;
}
a:hover {
  color: #f3f043;
}
.bg-blue {
  background-color: #034f84;
}
.icon-style {
  font-size: 7em;
  padding: 8px;
}

.content-contact {
  -webkit-box-pack: end !important;
  justify-content: flex-end !important;
  color: #fff;
  text-align: right;
}

@media only screen and (max-width: 900px) {
  .content {
    -webkit-box-pack: justify !important;
    justify-content: space-between !important;
  }
  .icon-style {
    font-size: 5em;
    padding: 3px;
  }
}

@media only screen and (max-width: 600px) {
  .content {
    -webkit-box-pack: justify !important;
    justify-content: space-between !important;
  }
  .icon-style {
    font-size: 4em;
    padding: 3px;
  }
}

@media only screen and (max-width: 400px) {
  .content {
    -webkit-box-pack: justify !important;
    justify-content: space-between !important;
  }
  .icon-style {
    font-size: 2em;
    padding: 8px;
  }
}
</style>