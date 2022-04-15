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
        :task="task"
        @complete="completeTask(task)"
        @click="addToSelected(task)"
      />
    </div>

    <div class="mt-4">
      <h4 v-if="tasks.length > 0">Nombre de tasks: {{ tasks.length }}</h4>

      <h4 v-if="selectedTasks.length > 0">Nombre de tasks sélectionées: {{ selectedTasks.length }}</h4>

      <button
        v-if="selectedTasks.length > 0"
        class="btn btn-danger mt-2"
        @click="deleteSelectedTask"
      >
        Deleted {{ selectedTasks.length }} tash
      </button>
    </div>
  </div>
</template>

<script>
import Task from "./Task";
import {mapState} from "vuex";
export default {
  components: { Task },

  data() {
    return {
      selectedTasks: [],
    }
  },

  computed: {
    ...mapState('task', {
      tasks: 'tasks'
    }),
  },

  methods: {
    deleteSelectedTask() {
      this.selectedTasks.forEach(task => {
        this.deleteTask(task)
      })

      this.selectedTasks = []
    },

    addToSelected(task) {
      if (!this.selectedTasks.find(t => t.id === task.id)) {
        this.selectedTasks.push(task)
      } else {
        this.selectedTasks.splice(+task.index - 1, 1)
      }
    }
  }
}
</script>
