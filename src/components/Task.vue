<template>
  <div
      class="row align-items-center text-start my-4 border border-rounded p-4"
      :class="{
        'border-warning': !isCompleted,
        'border-success': isCompleted,
      }"
  >
    <span
        class="col-1 badge badge-lg"
        :class="{
        'bg-warning': !isCompleted,
        'bg-success': isCompleted,
      }"
    >
      {{ task.time }} Hours
    </span>
    <span class="col-6"> TODO: {{ task.title }} by {{ task.leader}}</span>
    <div class="col-5 d-flex justify-content-end ">
      <button
        v-if="!isCompleted"
        class="btn btn-success ml-auto"
        @click="$emit('complete')"
      >
        Completed
      </button>
      <button
        v-if="!isCompleted"
        class="ms-4 btn btn-warning"
        @click="$emit('editing')"
      >
        Edit
      </button>
      <button
        class="ms-4 btn btn-danger"
        @click="$emit('delete')"
      >
        Delete
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    task: Object
  },

  computed: {
    isCompleted() {
      return this.task.status === 'COMPLETED'
    }
  }
}
</script>
