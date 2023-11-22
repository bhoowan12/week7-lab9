import PageLinks from "./PageLinks";

function Footer() {
  return (
    <div>
      <footer class="section footer">
      <PageLinks parentClass='footer-links' itemClass='footer-link' />
            <ul class="footer-icons">
                <li>
                    <a href="https://www.facebook.com" target="_blank" rel="noreferrer" class="footer-icon"><i class="fab fa-facebook"></i></a>
                </li>
                <li>
                    <a href="https://www.twitter.com" target="_blank" rel="noreferrer" class="footer-icon"><i class="fab fa-twitter"></i></a>
                </li>
                <li>
                    <a href="https://www.squarespace.com/" target="_blank" rel="noreferrer" class="footer-icon"><i class="fab fa-squarespace"></i></a>
                </li>
            </ul>
            <p class="copyright">copyright © travel tours company<span id="date">2023</span>. all rights reserved</p>
        </footer>
    </div>
  );
}

export default Footer;
