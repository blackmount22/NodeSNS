<template>
    <v-container>
        <post-form v-if="me"></post-form>
        <div>
            <post-card v-for="b in boards" :boards="b" :key="b.boardNo" ></post-card>
        </div>
    </v-container>
</template>

<script>
    import PostCard from '~/components/PostCard'
    import PostForm from '~/components/PostForm'

    export default {
        components: { PostCard, PostForm },
        data(){
            return {
                boards: [],
            }
        },
        computed: {
            me() {
                return this.$store.state.user.me;
            },
            boards(){
                console.log(1);
                return this.$store.state.board.boards;
            }
        },
        created(){
            this.init();
        },
        methods:{
            async init() {
                try{
                    console.log(2);
                    const {data} = await this.$store.dispatch('board/getBoard');
                    console.log(data);
                } catch (e) {
                    console.error(e);
                }
            }
        }
    }
</script>

<style>

</style>