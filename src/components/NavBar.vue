<template>
  <div class="navbar bg-blue p-4 text-white content">
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
  </div>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      iconClasses: "m-2 iconStyle",
      photographyUrl: "http://www.nathanalphotography.com",
      githubUrl: "http://www.github.com/kingnathanal",
      linkedinUrl: "http://linkedin.com/in/brittonwilliam",
      instagramUrl: "https://www.instagram.com/kingnathanal/"
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
  transition: all 0.3s ease;
}
.bg-blue {
  background-color: #034f84;
}
.iconStyle {
  font-size: 7em;
  padding: 8px;
}

font-awesome-icon {
  margin-right: 0.5rem;
}

.content {
  -webkit-box-pack: end !important;
  justify-content: flex-end !important;
}

@media only screen and (max-width: 900px) {
  .content {
    -webkit-box-pack: justify !important;
    justify-content: space-between !important;
  }
}

@media only screen and (max-width: 600px) {
  .content {
    -webkit-box-pack: justify !important;
    justify-content: space-between !important;
  }
  .iconStyle {
    font-size: 4em;
    padding: 3px;
  }
}

@media only screen and (max-width: 400px) {
  .content {
    -webkit-box-pack: justify !important;
    justify-content: space-between !important;
  }
  .iconStyle {
    font-size: 3em;
    padding: 8px;
  }
}
</style>