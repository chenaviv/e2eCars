export default {
    template:`
        <section>
            <button @click="close">X</button>
            <label for="name">Name</label><input @change="changeName" v-model="name" type="text" name="name">
        </section>
    `,
    data() {
        return {
            name: null
        }
    },
    methods: {
        changeName(){
            this.$emit('changeName', this.name)
        },
        close(){
            this.$emit('close')
        }
    }
}