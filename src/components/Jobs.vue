<template>
  <div class="container p-0 my-5">
    <div class="h4 job-area-title mb-4">
      Experience:
      <hr />
    </div>
    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3">
      <div v-for="(job, i) in jobs" :key="i" class="col mb-4">
        <div class="card job-card border-0 shadow-lg p-0">
          <div class="card-header job-card-header d-flex justify-content-between">
            <span>{{job.name}}</span>
            <span>{{job.years}}</span>
          </div>
          <div class="card-body job-card-body">
            <span class="job-position">{{job.position}}</span>
            <hr class="bg-secondary" />
            <ul class="job-skills-list">
              <li v-for="(skill, i) in job.skills" :key="i" class="job-skills">{{skill}}</li>
            </ul>
          </div>
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
.job-area-title {
  font-size: 1.5rem;
  letter-spacing: 1px;
}
.job-card {
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
  background-color: #1e3e63;
}
.job-card-header {
  font-weight: bold;
  font-size: 0.7rem;
  background-color: #1e3e63;
  color: #ffffff;
}
.job-card-body {
  background-color: #fff;
}
.job-position {
  font-style: italic;
  font-weight: 600;
  font-size: 0.7rem;
}
.job-skills {
  font-size: 0.7rem;
}
.job-skills-list {
  padding-inline-start: 20px;
}
</style>