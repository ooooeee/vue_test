<template>
    <div >
    <div class="app_btns">
    <button @click="console.log(TotalPages)"></button>
        <mybutton @click="showPopup">
            Создать пост
        </mybutton>
        <Myinput
        v-model="searchQuery"
        v-focus
        placeholder="Поиск...."
        />
        <MySelect
        v-model="selectedSort"
        :options="sortOptions"
        />
    </div>
    <Createpopup v-model:show="popupVisible">
        <post-form 
            @create="createPost"
        />
    </Createpopup>
        <div>
        Количество постов: {{posts.length}}
        </div>
        <post-lists 
        :posts="sortedAndSearchedPosts" 
        @remove="removePost"
        v-if="!isPostLoading"
        />
        <div v-else>Идёт загрузка</div>
        <div v-intersection="loadMorePosts" class="observer"></div>
        <!-- <div class="page_wrapper">
            <div
             v-for="pageNumber in TotalPages"
             :key="pageNumber"
             class="page"
             :class="{
                'current_page': page === pageNumber
             }"
             @click="changePage(pageNumber)"
            >
            {{ pageNumber }}
            </div>
        </div> -->
    </div>
</template>

    <script>
import postForm from "@/components/postForm"
import postLists from "@/components/postLists"
import Mybutton from "@/components/UI/Mybutton.vue"
import Createpopup from "@/components/Createpopup.vue"
import axios from "axios"
import MySelect from "@/components/UI/MySelect.vue"
import Myinput from "@/components/Myinput.vue"


export default {
    components: {
    postForm,
    postLists,
    Mybutton,
    Createpopup,
    MySelect,
    Myinput,


},
    data() {
        return {
            posts: [],
            popupVisible: false,
            isPostLoading: false,
            selectedSort: '',
            searchQuery: '',
            page: 1,
            limit: 10,
            TotalPages: 0,
            sortOptions: [
                {value: 'title', name: 'По названию'},
                {value: 'body', name: 'По описанию'}
            ]
        }
    },
    
    methods: {
        createPost(post) {
            this.posts.push(post);
            this.popupVisible = false;
        },
        
        removePost(post) {
            this.posts = this.posts.filter(p => p.id !== post.id)
        },
        showPopup() {
            this.popupVisible = true;
        },
        async loadMorePosts() {
            try {
                this.page += 1;
                
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                    params: {
                        _page: this.page,
                        _limit: this.limit
                    }
                });
                this.TotalPages = Math.ceil(response.headers['x-total-count'] / this.limit)
                this.posts = [...this.posts, ...response.data];
            } catch (e) {
                alert('ERROR')
            }finally{
                
            }
        },
        test() {
            console.log('test')
        },
        async fetchPosts() {
            try {
                this.isPostLoading = true;
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                    params: {
                        _page: this.page,
                        _limit: this.limit
                    }
                });
                this.TotalPages = Math.ceil(response.headers['x-total-count'] / this.limit)
                this.posts = response.data;
            } catch (e) {
                alert('ERROR')
            }finally{
                this.isPostLoading = false;
            }
        }
        // changePage(pageNumber) {
        //     this.page = pageNumber
        //     this.fetchPosts()
        // }
    },
    mounted() {
        this.fetchPosts();
    },
    computed:{
        sortedPost() {
            return [...this.posts].sort((post1, post2) => post1[this.selectedSort]?.localeCompare(post2[this.selectedSort]))
        },
        sortedAndSearchedPosts() {
            return this.sortedPost.filter(post => post.title.toLowerCase().includes(this.searchQuery.toLowerCase()))
        }
    },
    
}
</script>


    <style lang="scss">
    </style>
