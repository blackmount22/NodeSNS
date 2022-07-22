<template>
    <div>
       <v-container>
            <v-card>
                <v-subheader>회원가입</v-subheader>
                <v-container>
                    <v-form ref="form" v-model="valid" @submit.prevent="onSignUp">
                        <v-text-field
                            v-model="email"
                            label="이메일"
                            type="email"
                            required
                        />
                        <v-text-field
                            v-model="password"
                            label="비밀번호"
                            type="password"
                            required
                        />
                        <v-text-field
                            v-model="passwordCheck"
                            label="비밀번호확인"
                            type="password"
                            required
                        />
                        <v-text-field
                            v-model="nickname"
                            label="닉네임"
                            type="nickname"
                            required
                        />
                        <v-checkbox
                        required
                        label="체크박스입니다." 
                        />
                        <v-btn color="green" type="submit">가입하기</v-btn>
                    </v-form>
                </v-container>
            </v-card>
       </v-container>
    </div>    
</template>

<script>
    export default {
        data(){
            return {
                name : "Nuxt.js",
                nickname: '',
                email: '',
                password: '',
                passwordCheck: '',
            }
        },
        methods: {
            onSignUp() {
                if(this.$refs.form.validate()){
                    this.$store.dispatch('user/signUp', {
                        nickname: this.nickname,
                        email: this.email,
                        password: this.password,
                    })
                }
            }
        }
    }

</script>

<style>
</style>