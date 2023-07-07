<template>
  <HeaderComponent/>   
  <CommonParentComponent/>
</template>

<script>
import CommonParentComponent from "./components/CommonParentComponent.vue"
import HeaderComponent from "./components/HeaderComponent.vue";

export default {
  name: 'App',
  components: {
    HeaderComponent,
    CommonParentComponent
  }
}
</script>
