export default {
    template: `
    <form @submit.prevent="login">
        <label for="email">E-Mail</label><input v-model="email" type="email" name="email">
        <label for="password">Password</label><input v-model="password" type="password" name="password">
        <button>Vroom!</button>
    </form>
    `,
    data() {
        return {
            email: null,
            password: null
        }
    },
    methods: {
       login() {
           this.$emit('loginEntered', this.email, this.password)
           this.email = null
           this.password = null
       } 
    }
}