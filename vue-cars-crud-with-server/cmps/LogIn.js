import SignUp from './SignUp.js';

export default {
    template: `
    <section>
        <sign-up v-if="newUser" @close="newUser=false" @changeName="changeName"></sign-up>
        {{newName}}
            <form @submit.prevent="logOrSign">
                <label for="email">E-Mail</label><input v-model="email" type="email" name="email">
                <label for="password">Password</label><input v-model="password" type="password" name="password">
                <button>Vroom!</button>
            </form>
        <button @click="newUser=true">I'm new</button>
    </section>
    `,
    data() {
        return {
            email: null,
            password: null,
            newUser: false,
            newName: null
        }
    },
    methods: {
        changeName(name) {
            this.newName = name
        },
        logOrSign() {
            return (this.newUser) ? this.signUp() : this.login()
        },
        login() {
            this.$emit('loginEntered', this.email, this.password)
            this.email = null
            this.password = null
        },
        signUp(name) {
            this.$emit('signUpEntered', this.email, this.password, this.newName)
            this.email = null
            this.password = null
        }
    },
    components: {
        SignUp
    }
}