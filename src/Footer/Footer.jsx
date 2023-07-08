import "./footerstyles.css";

function Footer() {
  return (
    <>
      <div className="footer-container">
        <h1>Links</h1>
        <div className="list-group">
          <a
            target="_blank"
            href="https://www.linkedin.com/in/johnmoore03/"
            className="list-group-item list-group-item-action active"
            aria-current="true"
          >
            Linkedin
          </a>
          <a
            target="_blank"
            href="https://github.com/John-Moore-UOA"
            className="list-group-item list-group-item-action"
          >
            Github
          </a>
          <a
            target="_blank"
            href="#"
            className="list-group-item list-group-item-action"
          >
            Placeholder
          </a>
          <a
            target="_blank"
            href="#"
            className="list-group-item list-group-item-action"
          >
            Email: will probably have a form pop up to submit an email
          </a>
        </div>
      </div>
    </>
  );
}

export default Footer;
