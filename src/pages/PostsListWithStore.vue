<template>
  <div @submit.prevent>
    <h1>{{ $store.getters.doubleLikes }}</h1>
    <h1>Страница с постами</h1>
    <my-input :model-value="searchQuery" @update:model-value="setSearchQuery" placeholder="Поиск..." />
    <div class="app__btns">
      <my-button @click="showDialog">Создать пост</my-button>
      <my-select :model-value="selectedSort" @update:model-value="setSelectedSort" :options="sortOptions"></my-select>
    </div>
    <my-dialog v-model:show="dialogVisible">
      <post-form @create="createPost" />
    </my-dialog>
    <posts-list :posts="sortedAndSearchedPosts" @remove="removePost" v-if="!isPostLoading"/>
    <div v-else>Идет загрузка...</div>
    <div v-intersection="loadMorePosts" class="observer"></div>
    <!--    <my-page-wrapper :totalPages="totalPages" :page="page" @changePage="changePage"/>-->
  </div>
</template>

<script>
import PostForm from "@/components/PostForm";
import PostsList from "@/components/PostsList";
import MyDialog from "@/components/UI/MyDialog";
import axios from "axios";
import MyPageWrapper from "@/components/UI/MyPageWrapper";
import {mapState, mapActions, mapGetters, mapMutations} from 'vuex';

export default {
  components: {
    MyPageWrapper,
    MyDialog,
    PostForm, PostsList
  },
  data() {
    return {
      dialogVisible: false,
    }
  },
  methods: {
    ...mapMutations({
      setPage: 'post/setPage',
      setSearchQuery: 'post/setSearchQuery',
      setSelectedSort: 'post/setSelectedSort'
    }),
    ...mapActions({
      loadMorePosts: 'post/loadMorePosts',
      fetchPosts: 'post/fetchPosts'
    }),
    createPost(post) {
      this.posts.push(post);
      this.dialogVisible = false;
    },
    removePost(post) {
      this.posts = this.posts.filter(p => p.id !== post.id)
    },
    showDialog() {
      this.dialogVisible = true;
    },
    // changePage(pageNumber) {
    //   this.page = pageNumber
    // },

  },
  mounted() {
    this.fetchPosts();
  },
  computed: {
    ...mapState({
      posts: state => state.post.posts,
      isPostLoading: state => state.post.isPostLoading,
      selectedSort: state => state.post.selectedSort,
      searchQuery: state => state.post.searchQuery,
      page: state => state.post.page,
      limit: state => state.post.limit,
      totalPages: state => state.post.totalPages,
      sortOptions: state => state.post.sortOptions
    }),
    ...mapGetters({
      sortedPosts: 'post/sortedPosts',
      sortedAndSearchedPosts: 'post/sortedAndSearchedPosts',
    })
  },
  watch: {
    // page() {
    //   this.fetchPosts()
    // }
  }
}
</script>

<style>
.app__btns {
  margin: 15px 0;
  display: flex;
  justify-content: space-between;
}
.observer {
  height: 10px;
}
</style>