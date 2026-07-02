export default function Home() {
  return (
    <section className="kiosk-placeholder" aria-label="Kiosk canvas preview">
      <div className="kiosk-placeholder__grid" aria-hidden="true" />
      <header className="kiosk-placeholder__header">
        <p>Activation Onboarding</p>
        <span>1080 x 1920</span>
      </header>
      <div className="kiosk-placeholder__center">
        <p>Kiosk Canvas</p>
        <h1>Portrait frame ready</h1>
        <span>Content is clipped to the fixed kiosk area.</span>
      </div>
      <footer className="kiosk-placeholder__footer">
        <span>Top</span>
        <span>Bottom</span>
      </footer>
    </section>
  );
}
