<template>
    <div class="centered hide-mobile">
      <a href="/blog">Blog</a>
      <a href="https://github.com/arriagadadev">
        <v-icon>mdi-github</v-icon> Github
      </a>
      <a href="/projects"> Projects </a>
      <a href="/about"> About </a>
    </div>
</template>

<script>
export default {
    name: 'HeaderLinks',
}
</script>

<style lang="sass" scoped>
a
    &:link, &:visited
        text-decoration: none
        margin: 10px
        color: white
        font-size: 1.2rem
</style>