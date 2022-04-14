<template>
  <div class="row">
    <div class="col-3">
      <label>Title</label>
      <input
          class="form-control"
          type="text"
          v-model="title"
      >
    </div>
    <div class="col-3">
      <label>Time</label>
      <input
          class="form-control"
          type="number"
          v-model="time"
      >
    </div>
    <div class="col-3">
      <label>Leader</label>
      <select
          v-model="leader"
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
        :disabled="!title || !leader || time < 1"
        @click="edit"
      >
        Edit
      </button>
      <button
          v-else
          class="btn btn-success w-100"
          :disabled="!title || !leader || time < 1"
          @click="submit"
      >
        Create
      </button>
    </div>
  </div>
</template>

<script>
import task from "./Task";

export default {
  name: "TaskInput",

  data() {
    return {
      title: null,
      time: 0,
      leader: null,
      leaders: ['Yohann', 'Lucas', 'Tom', 'Jean']
    }
  },

  props: {
    task: Object,
    isEdit: Boolean,
  },

  watch: {
    task() {
      if (this.task) {
        this.title = this.task.title
        this.time = this.task.time
        this.leader = this.task.leader
      } else {
        this.clear()
      }
    }
  },

  methods: {
    clear() {
      this.time = 0
      this.leader = null
      this.title = null
    },

    submit() {
      this.$emit('submit', {
        title: this.title,
        time: this.time,
        leader: this.leader,
        status: "PENDING"
      })

      this.clear()
    },

    edit() {
      this.$emit('edit', {
        title: this.title,
        time: this.time,
        leader: this.leader,
        status: this.task.status
      })

      this.clear()
    }
  }
}
</script>
