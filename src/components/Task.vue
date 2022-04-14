<template>
  <div class="text-start my-4">
    {{ task.title }}
  </div>
</template>

<script>
export default {
  props: {
    task: Object
  }
}
</script>
