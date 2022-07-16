<template>
    <div>
        <h1 class="text-center"> Xeta sehifesi </h1>

        <button @click="back" > Home </button>
    </div>
</template>



<script>
export default {
    methods : {
        back(){
            // this.$router.push({name : "Home"})
            this.$router.back();
        }
    }
}
</script>