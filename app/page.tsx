export default function Home() {
  return (
    <main className="min-h-screen bg-white flex flex-col items-center">

      <section className="w-full flex justify-center pt-20 pb-16">
        <img src="/niccoli_logo.svg" alt="Niccoli" className="w-[600px]" />
      </section>

      <div className="w-full border-t border-black/10" />

      <section className="w-full max-w-2xl px-6 py-20 flex flex-col gap-8">
        <h2 className="text-2xl font-semibold tracking-tight leading-snug">
          What's the one piece of research, paper, or idea that changed how you see the world?
        </h2>

        <form action="https://formspree.io/f/xqeggjab" method="POST" encType="multipart/form-data" className="flex flex-col gap-4">
          <input type="text" name="name" placeholder="Your name (optional)" className="border border-black/20 rounded-lg px-4 py-3 outline-none focus:border-black transition" />
          <textarea name="submission" placeholder="Share your idea, paper, or research..." rows={6} className="border border-black/20 rounded-lg px-4 py-3 outline-none focus:border-black transition resize-none" />
          <label className="flex flex-col gap-2">
            <span className="text-sm text-black/50">Upload a PDF (optional)</span>
            <input type="file" name="attachment" accept=".pdf" className="text-sm" />
          </label>
          <button type="submit" className="bg-black text-white py-3 rounded-lg font-medium hover:bg-black/80 transition">
            Submit
          </button>
        </form>
      </section>

      <footer className="mb-10 text-black/20 text-sm">
        © 2026 niccoli.ai — All Rights Reserved.
      </footer>

    </main>
  );
}