<template>
  <div class="container">
    <h1 class="mt-4">TODO List</h1>
    <TaskInput
        :task="editingTask"
        :is-edit="!!editingTask"
        @submit="addTask"
    />
    <TaskList @edit="toggleEdit"/>
  </div>
</template>

<script>
import {mapState} from "vuex";

import TaskList from "../components/TaskList";
import TaskInput from "../components/TaskInput";

export default {
  components: {
    TaskInput,
    TaskList
  },

  data() {
    return {
      isEditing: false,
    }
  },

  computed: {
    ...mapState('task', {
      editingTask: 'editingTask'
    })
  },

  methods: {
    addTask(task) {
      task.id = this.tasks.length + 1
      this.tasks.push(task)
    },

    editTask(task) {
      this.tasks[task.id - 1] = task
      //this.tasks[index + 1] = task
      this.toggleEdit(task)
    },

    toggleEdit(task) {
      this.isEditing = !this.isEditing

      if (this.isEditing) {
        this.editingTask = [task]
      } else {
        this.editingTask = null
      }
    }
  }
}
</script>
