<template>
    <div class="child">

        <p class="centered-text"> İsim : {{ ad }} </p>
        <p class="centered-text"> Yaş : {{ yas }} </p>
        <p class="centered-text"> Favori framework : {{ favoriteframework }} </p>
        <p class="centered-text"> Diğer favori framework : {{ otherframework }} </p>

        <h1 class="centered-text">Child Component 1</h1>

    </div>
</template>


<script>

export default {
    data() {
        return {
            favoriteframework: null,
            otherframework: null
        }
    },
    props: {
        ad: {
            type: String,
            required: true,
            default: "Ad bilgisi girilmemiş"
        },
        yas: {
            type: Number,
            required: true,
            default: 0
        }
    },
    created() {
        this.$eventBus.on("framework", (favori) => {
            this.favoriteframework = favori
        });
        this.$eventBus.on("otherframework", (otherframework) => {
            this.otherframework = otherframework
        });
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
    background-color: thistle;
}

.centered-text {
    text-align: center;
}

button:hover {
    color: red;
}
</style>