<template>
  <div
      v-if="tasks"
      class="mt-5"
  >
    <div>
      <Task
        v-for="task in tasks"
        :key="task.title"
        :class="{ 'bg-secondary': selectedTasks.find(t => t.id === task.id) }"
        style="--bs-bg-opacity: .3;"
        :task="task"
        @click="$store.commit('task/ADD_TO_SELECTED_TASK', task)"
      />
    </div>

    <div class="mt-4">
      <h4 v-if="tasks.length > 0">Nombre de tasks: {{ tasks.length }}</h4>

      <h4 v-if="selectedTasks.length > 0">Nombre de tasks sélectionées: {{ selectedTasks.length }}</h4>

      <button
        v-if="selectedTasks.length > 0"
        class="btn btn-danger mt-2"
        @click="$store.commit('task/DELETE_SELECTED_TASK')"
      >
        Deleted {{ selectedTasks.length }} tash
      </button>
    </div>
  </div>
</template>

<script>
import Task from "./Task";

import { mapState } from "vuex";

export default {
  components: { Task },

  computed: {
    ...mapState('task', {
      tasks: 'tasks',
      selectedTasks: 'selectedTasks'
    }),
  },
}
</script>
