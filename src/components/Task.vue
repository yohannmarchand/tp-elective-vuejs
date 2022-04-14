<template>
  <div
      class="row align-items-center text-start my-4 border border-rounded p-4"
      :class="{
        'border-warning': task.status === 'PENDING',
        'border-success': task.status === 'COMPLETED',
      }"
  >
    <span
        class="col-1 badge badge-lg"
        :class="{
        'bg-warning': task.status === 'PENDING',
        'bg-success': task.status === 'COMPLETED',
      }"
    >
      {{ task.time }} Hours
    </span>
    <span class="col-6"> TODO: {{ task.title }} by {{ task.leader}}</span>
    <div class="col-5 d-flex justify-content-end ">
      <button
        v-if="task.status === 'PENDING'"
        class="btn btn-success ml-auto"
        @click="$emit('complete', task)"
      >
        Completed
      </button>
      <button
        v-if="task.status === 'PENDING'"
        class="ms-4 btn btn-warning"
        @click="$emit('edit', task)"
      >
        Edit
      </button>
      <button
        class="ms-4 btn btn-danger"
        @click="$emit('delete', task)"
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
  }
}
</script>
