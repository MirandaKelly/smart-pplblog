import "./Footer.css";

export default function Footer() {
  return (
    <div id="footer" className="footer-container">
      <div className="copyright">© SmartBlog</div>
      <div className="contact-links">
        <a
          href="https://www.linkedin.com/"
          className="link-footer"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
        <a
          href="mailto:jeniaaajeniaaa@gmail.com"
          target="_blank"
          className="link-footer"
          rel="noreferrer"
        >
          Email
        </a>
      </div>
    </div>
  );
}
