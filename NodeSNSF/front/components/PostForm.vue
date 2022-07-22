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
                <input ref="imageInput" type="file" multiple hidden @change="onChangeImages">
                <v-btn @click="onClickImageUpload" type="button">이미지 업로드</v-btn>
                <div>
                    <div v-for="(p) in imagePaths" :key="p" style="display: inline-block">
                        <img :src="`http://localhost:5500/${p}`" :alt="p" style="width:200px">
                        <div>
                            <button @click="onRemoveImage(i)" type="button">제거</button>
                        </div>
                    </div>
                </div>
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
            ...mapState('user', ['me']),
            ...mapState('board', ['imagePaths']),
        },
        methods: {
            onSubmitForm(){
                if(this.$refs.form.validate()){
                    this.$store.dispatch('board/add', {
                        content: this.content,
                        User: {
                            nickname: this.me.nickname,
                        },
                        id: this.me.nickname,
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
            },
            onClickImageUpload(){
                this.$refs.imageInput.click();
            },
            onChangeImages(e){
                console.log(e.target.files);    // 사진 고르면 e.target.files에 포함
                // 이미지는 FormData 형식
                const imageFormData = new FormData();
                [].forEach.call(e.target.files, (f) => {
                    imageFormData.append('image', f);      // { image: [file1, file2] }
                });

                this.$store.dispatch('board/uploadImages', imageFormData);
            },
            onRemoveImage(idx) {
                this.$store.commit('board/removeImages', idx);
            }
        }
    }
</script>

<style>

</style>