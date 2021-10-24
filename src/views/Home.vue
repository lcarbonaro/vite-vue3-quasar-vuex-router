<template>
  <div class="home">
    <h3>This is the Home page</h3>
  </div>
</template>

<script>
// @ is an alias to /src

import { useQuasar } from 'quasar';

export default {
  setup() {
    const $q = useQuasar();
    $q.loading.show();
    setTimeout(()=>{
      $q.loading.hide();
    },3000);
  }
}
</script>