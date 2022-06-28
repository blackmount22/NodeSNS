<template>
    <v-card style="margin-bottom:20px">
        <v-container>
            <v-form ref="form" v-model="valid" @submit.prevent="onSubmitForm">
                <v-textarea
                    v-model="content"
                    outlined
                    auto-grow
                    clearable
                    label="테스트"
                    :hide-details="hideDetails"
                    :success-messages="successMessages"
                    :success="success"
                    :rules="[v => !!v.trim() || '내용을 입력하세요.']"
                />
                <v-btn type="submit" color="blue" absolute right>업로드</v-btn>
            </v-form>
        </v-container>
    </v-card>

</template>

<script>
    import { mapState } from 'vuex';

    export default{
        data(){
            return {
                valid:false,
                content: '',
                hideDetails: false,
                successMessages:'',
                success:false
            }
        },
        computed: {
            ...mapState('user', ['me'])
        },
        methods: {
            onSubmitForm(){
                if(this.$refs.form.validate()){
                    this.$store.dispatch('board/add', {
                        content: this.content,
                        User: {
                            nickname: this.me.nickname,
                        },
                        id: Date.now(),
                        createdAt:Date.now(),
                    }).then(() =>{
                        this.content= '';
                        this.hideDetails = false;
                        this.success = true;
                        this.successMessages = '게시글 등록 성공';
                    }).catch(()=> {
                        this.successMessages = '게시글 작성 중 에러 발생';
                    })
                }
            }
        }
    }
</script>

<style>

</style>