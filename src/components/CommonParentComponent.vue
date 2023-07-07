<template>
    <div class="centered-container">
        <div class="parent">
            <h3 class="centered-text">Parent</h3>
            <p class="centered-text"> Favori framework : {{ framework }} </p>
            <p class="centered-text"> Diğer Favori framework : {{ otherframework }} </p>
        </div>

        <div class="childs">
            <ChildItemOne ad="Kenan" :yas="yas" />
            <ChildItemTwo @framework="framework = $event" education="MEU" />
        </div>
    </div>
</template>



<script>

import ChildItemOne from './ChildItemOne.vue';
import ChildItemTwo from './ChildItemTwo.vue';

export default {
    components: {
        'ChildItemOne': ChildItemOne,
        'ChildItemTwo': ChildItemTwo
    },

    data() {
        return {
            yas: "23",
            framework: null,
            otherframework: null
        }
    },
    created() {
        this.$eventBus.on("otherframework", (otherframework) => {
            this.otherframework = otherframework
        })
    }
}

</script>




<style scoped>
.centered-text {
    text-align: center;
}

.parent {
    position: absolute;
    margin-left: 500px;
    display: grid;
    place-items: center;
    margin-bottom: auto;
    width: 500px;
    background-color: skyblue;
    width: 25vw;
    height: 25vh;
}

.childs {
    display: flex;
    justify-content: space-evenly;
}

</style>