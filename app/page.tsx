export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center text-center px-6">
      
      {/* Nav */}
      <nav className="fixed top-0 w-full flex justify-between items-center px-10 py-5 border-b border-white/10">
        <span className="text-xl font-bold tracking-tight">niccoli.ai</span>
        <a href="#contact" className="text-sm text-white/60 hover:text-white transition">Contact</a>
      </nav>

      {/* Hero */}
      <section className="flex flex-col items-center gap-6 mt-20">
        <p className="text-sm uppercase tracking-widest text-white/40">Launching Soon</p>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
          Create professional<br />logos with AI.
        </h1>
        <p className="text-white/50 text-lg max-w-md">
          No design skills needed. Fast, beautiful, and built for everyone.
        </p>
        <button className="mt-4 bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-white/90 transition">
          Start Creating
        </button>
      </section>

      {/* Contact */}
      <section id="contact" className="mt-40 w-full max-w-md flex flex-col gap-3">
        <h2 className="text-2xl font-bold">Stay in the loop</h2>
        <input type="text" placeholder="Name" className="bg-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 outline-none" />
        <input type="email" placeholder="Email" className="bg-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 outline-none" />
        <button className="bg-white text-black py-3 rounded-lg font-semibold hover:bg-white/90 transition">
          Notify Me
        </button>
      </section>

      {/* Footer */}
      <footer className="mt-20 mb-10 text-white/20 text-sm">
        © 2026 niccoli.ai — All Rights Reserved.
      </footer>

    </main>
  );
}