import "./footerstyles.css";

function Footer() {
  return (
    <>
      <div className="footer-container">
        <div className="footer-grid">
          <a
            href="https://www.linkedin.com/in/johnmoore03/"
            className="footer-link"
          >
            Linkedin / JohnMoore03
          </a>
          <a href="https://github.com/John-Moore-UOA" className="footer-link">
            Github / John-Moore-UOA
          </a>
          <a
            href="https://leetcode.com/flybythenightzilla/"
            className="footer-link"
          >
            Leetcode
          </a>
        </div>
      </div>
    </>
  );
}

export default Footer;
