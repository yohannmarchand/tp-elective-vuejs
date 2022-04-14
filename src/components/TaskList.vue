<template>
  <div
      v-if="tasks"
      class="mt-5"
  >
    <Task
      v-for="task in tasks"
      :key="task.title"
      :task="task"
      @complete="completeTask"
      @delete="deleteTask"
      @edit="editTask"
    />
  </div>
</template>

<script>
import Task from "./Task";
export default {
  components: {Task},

  props: {
    tasks: Array
  },

  methods: {
    completeTask(task) {
      task.status = 'COMPLETED'
    },

    editTask(task) {

    },

    deleteTask(task) {
      const index = this.tasks.indexOf(task)
      this.tasks.splice(index, 1)
    }
  }
}
</script>
