<template>
  <div class="centered">
    <div class="typewriter">
      <h1>
        {{ label }}
      </h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "LogoComponent",
  data: () => ({
    label: 'arriagada.dev',
  }),
}
</script>
<style scoped>
.typewriter h1 {
  font-size: 1.5rem;
  color: #fff;
  font-family: monospace;
  overflow: hidden; /* Ensures the content is not revealed until the animation */
  border-right: 0.15em solid orange; /* The typwriter cursor */
  white-space: nowrap; /* Keeps the content on a single line */
  margin: 0 auto; /* Gives that scrolling effect as the typing happens */
  letter-spacing: 0.15em; /* Adjust as needed */
  animation: typing 2.5s steps(30, end), blink-caret 0.5s step-end infinite;
}

/* The typing effect */
@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

/* The typewriter cursor effect */
@keyframes blink-caret {
  from,
  to {
    border-color: transparent;
  }
  50% {
    border-color: orange;
  }
}
</style>