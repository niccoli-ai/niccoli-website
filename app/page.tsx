export default function Home() {
  return (
    <>
      <style>{`
        @import url('https://unpkg.com/@fontsource/cormorant-garamond/300.css');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html, body { height: 100%; background: #fff; }
        .page {
          min-height: 100vh;
          background: #fff;
          display: flex;
          flex-direction: column;
          align-items: center;
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-weight: 300;
        }
        .logo {
          padding-top: 12vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
        }
        .wordmark {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
        }
        .niccoli {
          font-size: 48px;
          font-weight: 300;
          letter-spacing: 0.25em;
          color: #0d0d0b;
          line-height: 1;
        }
        .research {
          font-size: 11px;
          font-weight: 300;
          letter-spacing: 0.4em;
          color: #999;
          line-height: 1;
        }
        .bottom {
          margin-top: auto;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        form {
          width: 100%;
          max-width: 420px;
          display: flex;
          flex-direction: column;
        }
        .field {
          width: 100%;
          border: none;
          border-bottom: 0.5px solid #e0e0e0;
          outline: none;
          background: transparent;
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-weight: 300;
          font-size: 15px;
          color: #0d0d0b;
          padding: 12px 0;
          border-radius: 0;
        }
        .field::placeholder { color: #ccc; }
        textarea.field { resize: none; }
        .send {
          background: none;
          border: none;
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-weight: 300;
          font-size: 13px;
          letter-spacing: 0.2em;
          color: #999;
          cursor: pointer;
          text-align: left;
          padding: 12px 0;
        }
        .send:hover { color: #0d0d0b; }
        .footer {
          font-size: 10px;
          color: #ccc;
          text-align: center;
          margin-bottom: 16px;
          margin-top: 8px;
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-weight: 300;
        }
      `}</style>

      <div className="page">
        <div className="logo">
          <svg width="60" height="90" viewBox="0 0 60 90" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 88 L8 44 Q8 4 30 4 Q52 4 52 44 L52 88" fill="none" stroke="#0d0d0b" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <div className="wordmark">
            <div className="niccoli">NICCOLI</div>
            <div className="research">RESEARCH</div>
          </div>
        </div>

        <div className="bottom">
          <form action="https://formspree.io/f/xqeggjab" method="POST" style={{maxWidth:'420px', width:'100%', padding:'0 24px'}}>
            <input type="email" name="email" placeholder="your email" required className="field" />
            <textarea name="submission" placeholder="the idea, paper, or research" rows={3} required className="field" />
            <button type="submit" className="send">Send</button>
          </form>
          <div className="footer">© 2026 niccoli.ai</div>
        </div>
      </div>
    </>
  );
}