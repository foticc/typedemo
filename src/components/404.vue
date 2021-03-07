<template>
  <div>
    {{ message }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "NotFound",
  data() {
    return {
      message: "404,NotFount",
    };
  },
});
</script>

<style>
</style>