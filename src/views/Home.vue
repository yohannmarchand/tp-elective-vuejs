<template>
  <div class="container">
    <h1 class="mt-4">TODO List</h1>
    <TaskInput @submit="addTask"/>
    <TaskList :tasks="tasks"/>
  </div>
</template>

<script>
import TaskList from "../components/TaskList";
import TaskInput from "../components/TaskInput";
export default {
  components: {
    TaskInput,
    TaskList
  },

  data() {
    return {
      tasks: []
    }
  },

  methods: {
    addTask(task) {
      this.tasks.push(task)
    }
  }
}
</script>
