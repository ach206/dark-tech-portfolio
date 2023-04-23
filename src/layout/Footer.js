const Footer = () => {
  return (
    <footer className="footer">
      <div className="copy">
        <p>BUILD</p>
        <p>EDUCATE</p>
        <p>MOTIVATE</p>
        <p>REPEAT</p>
      </div>
      <div className="soc-box">
        <div className="follow-label">Follow</div>
        <div className="soc">
          <a target="_blank" rel="noreferrer" href="https://www.instagram.com/heycamille.js">
            <span className="icon fab fa-instagram" />
          </a>
          <a target="_blank" rel="noreferrer" href="https://www.youtube.com/channel/UCYLHUs0waQDyZgSPi0tJ9BA">
            <span className="icon fab fa-youtube" />
          </a>
          <a target="_blank" rel="noreferrer" href="https://linkedin.com/in/ach206">
            <span className="icon fab fa-linkedin" />
          </a>
        </div>
      </div>
      <div className="clear" />
    </footer>
  );
};
export default Footer;
