<template>
    <v-container>
        <post-form v-if="me"></post-form>
        <div>
            <post-card v-for="b in boards" :boards="b" :key="b.id" ></post-card>
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
                name: "nuxt.js"
            }
        },
        computed: {
            me() {
                return this.$store.state.user.me;
            },
            boards(){
                return this.$store.state.board.boards;
            }
        }
    }
</script>

<style>

</style>