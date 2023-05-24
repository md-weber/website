const YEAR = new Date().getFullYear();

export default {
  darkMode: true,
  footer: (
    <footer>
      <small>
        <time>{YEAR}</time> © Max Weber
      </small>
      <div className="footer-links">
        <small><a href="/_impressum">Impressum</a></small>
        <small><a href="/_privacy-policy">Privacy Policy</a></small>
        <small><a href="/feed.xml">RSS</a></small>
      </div>
      <style jsx>{`
        footer {
          margin-top: 8rem;
          display: flex;
          justify-content: space-between;
        }
        .footer-links {
          display: flex;
          gap: 10px;
        }
        .footer-links a {
          margin-left: 10px;
        }
      `}</style>
    </footer>
  ),
};
