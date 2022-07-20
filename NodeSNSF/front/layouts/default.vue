<template>
     <v-app>
        <nav>
            <v-toolbar dark color="black">
                <v-toolbar-title>
                    <nuxt-link nuxt to="/">Nodebird</nuxt-link>         
                </v-toolbar-title>
                <v-spacer></v-spacer>
                <v-toolbar-items>
                    <v-text-field label="검색" hide-deatils prepend-icon="mdi-magnify" />
                    <v-btn text nuxt to="/profile" >
                        <div>프로필</div>
                    </v-btn>
                    <v-btn text nuxt to="/signup">
                        <div>회원가입</div>
                    </v-btn>
                </v-toolbar-items>
            </v-toolbar>
        </nav>    
        <v-row>
            <v-col cols="12" md="4">
                <login-form></login-form>
            </v-col>
            <v-col cols="12" md="8">
                <!-- <nuxt /> -->
                <nuxt />
            </v-col>
        </v-row>
    </v-app>
</template>

<script>
    import LoginForm from '~/components/LoginForm';
    export default {
        components: { LoginForm },
    }
</script>

<styles>

</styles>