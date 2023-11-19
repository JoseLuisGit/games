<script setup lang="ts">
const buttons = [
  {
    title: "Tres en raya",
    path: "/tictactoe",
  },
  {
    title: "Ahorcado",
    path: "/hangman",
  },
  {
    title: "Piedra, papel o tijera",
    path: "/rockpaperscissors",
  },
  {
    title: "Memoria",
    path: "/memory",
  },
  {
    title: "Buscaminas",
    path: "/minesweeper",
  },
  {
    title: "Tetris",
    path: "/tetris",
  },
  {
    title: "Viborita",
    path: "/snake",
  },
  {
    title: "Sudoku",
    path: "/sudoku",
  },
];
</script>

<template>
  <div
    class="d-flex flex-column align-items-center justify-content-center vh-100 text-center"
  >
    <h1 class="w-100">Seleccione un juego:</h1>
    <button
      class="btn btn-lg w-50 p-3 m-1"
      v-for="button in buttons"
      :key="button.title"
      @click="$router.push(button.path)"
    >
      {{ button.title }}
    </button>
  </div>
</template>

<style scoped>
button {
  font-size: 1.5rem;
  color: white;
  background-color: blueviolet;
}
</style>
