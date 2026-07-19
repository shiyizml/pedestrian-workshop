export const metadata = {
  title: "Body as Brush, Gesture as Landscape",
  description:
    "A bilingual XR interactive art project translating Peking Opera gestures into Chinese landscape painting.",
};

export default function Home() {
  return (
    <main className="site-shell">
      <iframe
        title="Body as Brush, Gesture as Landscape"
        src="/site/index.html"
        className="site-frame"
      />
    </main>
  );
}
