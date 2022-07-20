<template>
    <div  style="margin-bottom:20px;">
        <v-card style="margin-bottom: 20px">
            <v-img/>
            <v-card-text>
                <div>
                    <h3>{{boards.User.nickname}}</h3>
                    <nuxt-link :to="'/board/'+boards.id">{{boards.content}}</nuxt-link>
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
                <v-btn text color="orange">
                    <v-icon>mdi-dots-horizontal</v-icon>
                </v-btn>
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
    }
</script>

<styles>

</styles>
