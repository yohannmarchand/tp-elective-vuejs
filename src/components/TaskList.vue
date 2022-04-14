<template>
  <div
      v-if="tasks"
      class="mt-5"
  >
    <Task
      v-for="task in tasks"
      :key="task.title"
      :task="task"
      @complete="completeTask(task)"
      @delete="deleteTask(task)"
      @editing="editTask(task)"
    />
  </div>
</template>

<script>
import Task from "./Task";
export default {
  components: { Task },

  props: {
    tasks: Array
  },

  methods: {
    completeTask(task) {
      task.status = 'COMPLETED'
    },

    editTask(task) {
      this.$emit('edit', task)
    },

    deleteTask(task) {
      const index = this.tasks.indexOf(task)
      this.tasks.splice(index, 1)
    }
  }
}
</script>
