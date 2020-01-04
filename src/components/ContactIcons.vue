<template>
  <div class="p-3 content-contact">
    <a
      v-for="(item, i) in contactItems"
      :key="i"
      target="_blank"
      :title="item.title"
      :href="item.url"
    >
      <font-awesome-icon :icon="[item.icontype, item.iconname]" :class="iconClasses" />
    </a>
  </div>
</template>

<script>
export default {
  name: "ContactIcons",
  data() {
    return {
      iconClasses: "mx-2 icon-style",
      contactItems: [
        {
          title: "Photography Portfolio",
          icontype: "fas",
          iconname: "camera",
          url: "http://www.nathanalphotography.com"
        },
        {
          title: "Github",
          icontype: "fab",
          iconname: "github",
          url: "http://www.github.com/kingnathanal"
        },
        {
          title: "LinkedIn",
          icontype: "fab",
          iconname: "linkedin",
          url: "http://linkedin.com/in/brittonwilliam"
        },
        {
          title: "Instagram",
          icontype: "fab",
          iconname: "instagram",
          url: "https://www.instagram.com/kingnathanal/"
        },
        {
          title: "Email Me",
          icontype: "fas",
          iconname: "envelope",
          url: "mailto:williambritton@outlook.com"
        }
      ]
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
  font-size: 2em;
}

.content-contact {
  -webkit-box-pack: end !important;
  justify-content: flex-end !important;
  color: #fff;
  text-align: right;
  font-size: 1em;
}

@media only screen and (max-width: 900px) {
  .content-contact {
    -webkit-box-pack: justify !important;
    justify-content: space-between !important;
    text-align: center;
    transition: text-align 2s;
  }
  .icon-style {
    font-size: 5em;
    padding: 3px;
  }
}

@media only screen and (max-width: 600px) {
  .content-contact {
    -webkit-box-pack: justify !important;
    justify-content: space-between !important;
    text-align: center;
    transition: text-align 2s;
  }
  .icon-style {
    font-size: 4em;
    padding: 3px;
  }
}

@media only screen and (max-width: 450px) {
  .content-contact {
    -webkit-box-pack: justify !important;
    justify-content: space-between !important;
    text-align: center;
    transition: text-align 2s;
  }
  .icon-style {
    font-size: 2em;
    padding: 2px;
  }
}
</style>