<script>
  const sports = [
    { name: "Soccer", path: "/soccer" },
    { name: "NBA", path: "/nba" },
    { name: "UFC", path: "/ufc" }
  ];
</script>

<div class="min-h-screen bg-black text-white flex flex-col items-center justify-center space-y-10">
  <h1 class="text-4xl font-bold">Welcome to Blackline</h1>
  <div class="flex space-x-4">
    {#each sports as sport}
      <a href={sport.path} class="bg-white text-black px-6 py-3 rounded-lg hover:scale-105 transition">
        {sport.name}
      </a>
    {/each}
  </div>
</div>
