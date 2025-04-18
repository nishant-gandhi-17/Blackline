<script>
  export let data;
</script>

<div class="p-4 text-white bg-black min-h-screen">
  <h2 class="text-2xl font-bold mb-4">Today’s Soccer Matches</h2>
  {#each data.games as game}
    <div class="p-4 bg-gray-800 mb-2 rounded">
      <strong>{game.home}</strong> vs <strong>{game.away}</strong> — {game.time}
    </div>
  {/each}
</div>
