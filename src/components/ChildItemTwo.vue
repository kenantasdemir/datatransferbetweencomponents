<template>
    <div class="child">
        <button class="btn" @click="sendToParent()">Gönder</button>
        <p class="centered-text"> Okul: {{ education }}</p>
        <p class="centered-text"> Favori Framework : {{ framework }} </p>
        <h1 class="centered-text">Child Component 2</h1>
    </div>
</template>


<script>

export default {
    data() {
        return {
            framework: "Vue JS",
            otherframework: "React JS"
        }
    },
    props: ["education"],
    methods: {
        sendToParent() {
            this.$emit("framework", this.framework)
            this.$eventBus.emit("framework", this.framework)
            this.$eventBus.emit("otherframework", this.otherframework)
        }
    }
}

</script>


<style scoped>
.child {
    margin-right: auto;
    margin-left: 2cm;
    margin-top: 5cm;
    height: 35vh;
    width: 35vw;
    background-color: mediumseagreen;
}


.centered-text {
    text-align: center;
}

.btn {
    display: grid;
    place-items: center;
    width: 200px;
    margin-top: 50px;
    margin-left: 120px;
    margin-bottom: 20px;
}

button:hover {
    color: red;
}
</style>