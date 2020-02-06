<template>
  <div class="container p-0 my-5">
    <div class="row">
      <div class="col">
        <div class="h4 projects-area-title mb-4">
          Projects:
          <hr />
        </div>
      </div>
    </div>
    <div class="row mt-5">
      <div class="col">
        <div class="row">
          <div class="col-lg-4 col-md-6 col-sm-12">
            <img alt="picture of a genius" src="../assets/browseresponsible.png" class="project-1" />
          </div>
          <div class="col-lg-8 col-md-6 col-sm-12">
            Browse Responsible
            <hr />
            <p>
              Browse Responsible was a small PHP project to make aware to individuals the current browser version.
              The project is no longer PHP based but will be re-written using just HTML and JavaScript. Right now the repository is just for reference.
            </p>
            <a
              href="https://github.com/kingnathanal/browseresponsible"
              target="_blank"
              class="project-link"
            >Browse Responsible GitHub Repo</a>
            <br />
            <a
              href="https://kingnathanal.github.io/browseresponsible/"
              target="_blank"
              class="project-link"
            >View Site</a>
          </div>
          <hr>
          <div class="text-center mt-5">
            <strong>much more to come...</strong>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Projects"
};
</script>

<style>
.project-1 {
  height: 200px;
}

.project-link {
  color: #3d0892;
}
</style>