export default function Home() {
  return (
    <>
      <style>{`
        @import url('https://unpkg.com/@fontsource/cormorant-garamond/300.css');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #fff; }
        .page {
          min-height: 100vh;
          background: #fff;
          display: flex;
          flex-direction: column;
          padding: 48px 64px;
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-weight: 300;
        }
        .logo {
          font-size: 13px;
          letter-spacing: 0.2em;
          color: #0d0d0b;
          text-transform: uppercase;
        }
        .form-area {
          margin-top: auto;
          padding-top: 120px;
          max-width: 560px;
        }
        .question {
          font-size: 16px;
          font-weight: 300;
          color: #0d0d0b;
          line-height: 1.6;
          margin-bottom: 48px;
          letter-spacing: 0.02em;
        }
        .field {
          width: 100%;
          border: none;
          border-bottom: 1px solid #0d0d0b;
          outline: none;
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-weight: 300;
          font-size: 15px;
          color: #0d0d0b;
          background: transparent;
          padding: 8px 0;
          margin-bottom: 32px;
          display: block;
        }
        .field::placeholder { color: #aaa; }
        textarea.field { resize: none; min-height: 140px; }
        .submit-btn {
          background: none;
          border: none;
          border-bottom: 1px solid #0d0d0b;
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-weight: 300;
          font-size: 15px;
          color: #0d0d0b;
          padding: 4px 0;
          cursor: pointer;
          letter-spacing: 0.05em;
        }
        .footer {
          margin-top: 80px;
          font-size: 10px;
          color: #bbb;
          letter-spacing: 0.05em;
        }
      `}</style>

      <div className="page">
        <div className="logo">Niccoli</div>

        <div className="form-area">
          <p className="question">
            What is the one idea, paper, or research that changed how you see the world?
          </p>

          <form action="https://formspree.io/f/xqeggjab" method="POST">
            <input
              type="hidden"
              name="_replyto"
              value=""
            />
            <input
              type="email"
              name="email"
              placeholder="your email"
              required
              className="field"
            />
            <textarea
              name="submission"
              placeholder="your answer"
              rows={6}
              required
              className="field"
            />
            <button type="submit" className="submit-btn">Submit</button>
          </form>
        </div>

        <div className="footer">© 2026 niccoli.ai</div>
      </div>
    </>
  );
}