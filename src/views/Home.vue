<template>
  <div class="container">
    <h1 class="mt-4">TODO List</h1>
    <TaskInput
        :task="editingTask && editingTask[0]"
        :is-edit="isEditing"
        @submit="addTask"
        @edit="editTask"
    />
    <TaskList
        :tasks="editingTask || tasks"
        @edit="toggleEdit"
    />

    <div class="mt-4">
      <h4>Nombre de tasks: {{ tasks.length }}</h4>
    </div>
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
      tasks: [],
      isEditing: false,
      editingTask: null
    }
  },

  methods: {
    addTask(task) {
      this.tasks.push(task)
    },

    editTask(task) {
      const index = this.tasks.indexOf( this.tasks.find(t => t.name === this.editingTask.name))

      console.log(this.tasks.find(t => t.name === this.editingTask.name), index)
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
