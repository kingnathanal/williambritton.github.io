<template>
  <div class="container">
    <span class="h4 skills-title w-100 text-white">Jobs I have worked for:</span>
    <div class>
      <div v-for="(job, i) in jobs" :key="i" class="card border-secondary rounded-lg shadow-lg m-3">
        <div class="card-header d-flex justify-content-between">
          <span>{{job.name}}</span>
          <span>{{job.years}}</span>
        </div>
        <div class="card-body">
          <span class="job-position">{{job.position}}</span>
          <hr class="bg-secondary" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Jobs",
  props: {
    jobs: Array
  }
};
</script>

<style>
.card {
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
}
.card-header {
  font-weight: bold;
  background-color: #7c4af8;
  color: #ffffff;
}
.job-position {
  font-style: italic;
  font-weight: 600;
}
</style>