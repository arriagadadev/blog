<template>
    <div>
        <h2>{{ title }}</h2>
        <p v-for="n in 50" :key="n">example</p>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: '',
        },
    }
}
</script>