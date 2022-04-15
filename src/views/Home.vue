<template>
  <div class="container">
    <h1 class="mt-4">TODO List</h1>
    <TaskInput
        :task="editingTask"
        :is-edit="!!editingTask"
    />
    <TaskList />
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
}
</script>
