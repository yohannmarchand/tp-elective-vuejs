<template>
  <div
      v-if="tasks"
      class="mt-5"
  >
    <Task
      v-for="task in tasks"
      :key="task.title"
      :task="task"
    />
  </div>
</template>

<script>
import Task from "./Task";
export default {
  components: {Task},

  props: {
    tasks: Array
  }
}
</script>
