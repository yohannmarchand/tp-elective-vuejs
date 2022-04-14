<template>
  <div class="row">
    <div class="col-3">
      <label>Title</label>
      <input
          class="form-control"
          type="text"
          v-model="task.title"
      >
    </div>
    <div class="col-3">
      <label>Time</label>
      <input
          class="form-control"
          type="number"
          v-model="task.time"
      >
    </div>
    <div class="col-3">
      <label>Leader</label>
      <select
          v-model="task.leader"
          class="form-select"
          aria-label="Default select example"
      >
        <option
            v-for="leader in leaders"
            :key="leader"
            :value="leader"
        >
          {{ leader }}
        </option>
      </select>
    </div>

    <div class="col-3 align-self-end">
      <button
        v-if="isEdit"
        class="btn btn-warning w-100"
        :disabled="!task.title || !task.leader || task.time < 1"
        @click="$emit('edit', task)"
      >
        Edit
      </button>
      <button
          v-else
          class="btn btn-success w-100"
          :disabled="!task.title || !task.leader || task.time < 1"
          @click="$emit('submit', task)"
      >
        Create
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "TaskInput",

  data() {
    return {
      leaders: ['Yohann', 'Lucas', 'Tom', 'Jean']
    }
  },

  props: {
    isEdit: Boolean,
    task: {
      type: Object,
      default: {
          title: null,
          time: 0,
          leader: null
      },
    }
  }
}
</script>
