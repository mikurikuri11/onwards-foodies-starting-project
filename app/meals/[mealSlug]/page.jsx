export default function MealPage({ params }) {
  return (
    <main>
      <h1 style={{ color: "white", textAlign: "center" }}>{params.mealSlug} MealPage</h1>
    </main>
  );
}
