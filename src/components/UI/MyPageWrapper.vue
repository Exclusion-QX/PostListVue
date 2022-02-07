<template>
  <div class="page__wrapper">
    <div v-for="pageNumber in totalPages" :key="page" class="page"
         :class="{'current-page': page === pageNumber }" @click="$emit('changePage', pageNumber)">{{ pageNumber }}</div>
  </div>
</template>

<script>
export default {
  name: "MyPageWrapper",
  props: {
    totalPages: {
      default: 0
    },
    page: {
      default: 1
    }
  },
}
</script>

<style scoped>
.page__wrapper {
  display: flex;
  margin-top: 15px;
}
.page {
  border: 1px solid black;
  padding: 10px;
}
.current-page {
  border: 3px solid teal;
}
</style>