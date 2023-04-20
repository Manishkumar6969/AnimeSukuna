import React from "react";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer-content">

          <div className="footer-about">
            <h3><span>Anime</span><span className="about-blue">Sukuna</span></h3>
            <p>AnimePrime is not affiliated with or endorsed by any of the anime studios behind the creation of the anime presented on this site. This website is only an user interface presenting/linking various self-hosted files across the internet by other third-party providers for easy access. AnimePrime never downloads the video from any source provider, link will be returned from the response hence it is completely not subjected to DMCA compliant.</p>
          </div>
        <div className="join-social">
        <a href="https://github.com/Manishkumar6969" target={"_blank"}><ion-icon name="logo-github" ></ion-icon></a>
        </div>
        </div>
      </div>
    </>
  )
}
export default Footer;
