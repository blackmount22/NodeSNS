<template>
    <div  style="margin-bottom:20px;">
        <v-card style="margin-bottom: 20px">
            <v-img/>
            <v-card-text>
                <div>
                    <h3>{{boards.regID}}</h3>
                    <nuxt-link :to="'/board/'+boards.boardNo">{{boards.content}}{{boards.boardNo}}</nuxt-link>
                </div>
            </v-card-text>
            <v-card-actions>
                <v-btn text color="orange">
                    <v-icon>mdi-twitter-retweet</v-icon>
                </v-btn>
                <v-btn text color="orange">
                    <v-icon>mdi-heart-outline</v-icon>
                </v-btn>
                <v-btn text color="orange">
                    <v-icon>mdi-comment-outline</v-icon>
                </v-btn>
                <v-menu offset-y open-on-hover>
                    <template v-slot:activator="{on}">
                        <v-btn text color="orange" v-on="on">
                            <v-icon>mdi-dots-horizontal</v-icon>
                        </v-btn>
                    </template>
                    <div style="background: white">
                        <v-btn dark color="blue" @click="onRemoveBoard">삭제</v-btn>
                    </div>
                </v-menu>
            </v-card-actions>
        </v-card> 
    </div>
</template>

<script>
    export default {
        props:{
            boards:{
                type: Object,
                required: true,
            }
        },
        methods: {
            onRemoveBoard(){
                this.$store.dispatch('board/removeBoard', {
                    boardNo: this.boards.boardNo,
                });
            }
        }
    }
</script>

<styles>

</styles>
