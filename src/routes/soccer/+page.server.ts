export async function load() {
  // Simulated data – replace with real fetch from API
  const games = [
    { home: "Real Madrid", away: "Man City", time: "3:00 PM" },
    { home: "PSG", away: "Marseille", time: "5:00 PM" }
  ];

  return { games };
}
