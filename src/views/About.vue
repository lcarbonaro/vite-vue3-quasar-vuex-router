<template>
  <div class="about">
    <h3>This is an About page</h3>
  </div>
</template>

<script>
import { useQuasar } from 'quasar';

export default {
  setup() {
    const $q = useQuasar();

    $q.notify({
      message: 'HELLO NOTIFICATION FROM ABOUT',
      color:'green'
    });
  }
};

</script>