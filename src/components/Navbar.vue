<template>
<div class="navbar">
  <div>Vue 3</div>
  <div class="navbar__btns">
    <my-button @click="$router.push('/')">Главная</my-button>
    <my-button @click="$router.push('/posts')" style="margin-left: 15px;">Посты</my-button>
    <my-button @click="$router.push('/store')" style="margin-left: 15px;">Store</my-button>
    <my-button @click="$router.push('/composition')" style="margin-left: 15px;">Composition</my-button>
  </div>
</div>
</template>

<script>
export default {
  name: "Navbar",
  components: {}

}
</script>

<style scoped>
.navbar {
  height: 50px;
  background-color: lightgrey;
  box-shadow: 2px 2px 4px gray;
  display: flex;
  align-items: center;
  padding: 0 15px;
}
.navbar__btns {
  margin-left: auto;
}
</style>