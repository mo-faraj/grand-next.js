import "./main.css";
import Image from "next/image";
import { BsBag } from "react-icons/bs";
import { MdOutlineArticle } from "react-icons/md";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa"; // Facebook icon
import im1 from "../images/FB_IMG_1589422660045.jpg";
import im2 from "../images/FB_IMG_1630066960098.jpg";
import im3 from "../images/photo_٢٠٢٤-٠٨-٠٥_١٧-٤٠-٥٥.jpg";
import im4 from "../images/photo_٢٠٢٤-٠٨-٠٥_١٧-٤١-٠٠.jpg";
import im5 from "../images/pngtree-laptop-icon-png-image_1871597.jpg";
import im6 from "../images/32ca6f025a5a82aa40b64c02700c0e04.jpg";
import im7 from "../images/hj.jpg";
import Link from "next/link";
export default function MainPage() {
  return (
    <>
      {/* <!-- start landing --> */}
      <div className="landing-page">
        <div className="container">
          <div className="header-area">
            <div className="logo">Grand</div>
            <div className="links-container">
              <ul className="links">
                <div className="home">
                  <li>
                    <Link href="/main/article">
                      <MdOutlineArticle className="bag" />
                      articles
                    </Link>
                  </li>
                  <li>
                    <Link href="/main/store">
                      <BsBag className="bag" />
                      store
                    </Link>
                  </li>
                </div>
              </ul>
            </div>
          </div>
        </div>
        <div className="introduction-text">
          <h1>
            We are <span>Grand</span> company
          </h1>
          <p></p>
        </div>
      </div>
      {/* <!-- end landing --> */}
      {/* <!-- start about us --> */}
      <div className="about">
        <div className="container">
          <div id="about-us" className="about-us">
            <div className="info-box">
              <h2>about us</h2>
              <p>
                A site for selling laptops, their accessories, and desktop
                computers, and some tips for choosing the appropriate laptop
                according to your type of study and use, especially for
                first-year university students.
              </p>
            </div>
            <div className="image-box">
              <Image src={im1} width={200} height={200} alt="none" />
            </div>
          </div>
        </div>
      </div>
      {/* <!-- end about us --> */}
      {/* <!-- start gallery  --> */}
      {/* <div id="suggestions" className="gallery">
      <div className="container">
        <h2>suggestions</h2>
        <div className="images-box"> */}
      {/* <img src="../../images/05.jpg" alt="" />
          <img src="images/06.jpg" alt="" />
          <img src="images/07.jpg" alt="" />
          <img src="images/08.jpg" alt="" />
          <img src="images/09.jpg" alt="" />
          <img src="images/10.jpg" alt="" />
          <img src="images/11.jpg" alt="" />
          <img src="images/12.jpg" alt="" />
          <img src="images/13.jpg" alt="" />
          <img src="images/14.jpg" alt="" /> */}
      {/* </div>
      </div>
    </div> */}
      {/* <!-- end gallery  --> */}
      {/* <!-- start features  --> */}
      <div id="advices" className="features">
        <h2>advices</h2>
        <div className="container">
          <div className="fath">
            <div className="feat-box">
              <Image src={im2} width={0} height={0} alt="none" />
              <h4>informatic engineering</h4>
              <p>
                You need a fast processor, regardless of the graphics processor,
                such as the following devices: Lp1....Lp12...Lp6....Lp8...Lp43
              </p>
            </div>
            <div className="feat-box">
              <Image src={im3} width={0} height={0} alt="none" />
              <h4>civil engineering</h4>
              <p>
                You need a device with a good graphics processor and high RAM to
                give you adequate performance, such as devices: Lp2...Lp5...Lp18
              </p>
            </div>
            <div className="feat-box">
              <Image src={im4} width={0} height={0} alt="none" />
              <h4>architecture engineering</h4>
              <p>
                You need a device with a powerful graphics processor, RAM, and
                high storage memory, such as devices: Lp6...Lp41...Lp7
              </p>
            </div>
            <div className="feat-box">
              <Image src={im5} width={0} height={0} alt="none" />
              <h4>Office uses</h4>
              <p>
                You need a simple device with normal specifications, such as the
                following devices: Lp6...Lp2...Lp45
              </p>
            </div>
            <div className="feat-box">
              <Image src={im6} width={0} height={0} alt="none" />
              <h4>mechanical engineering</h4>
              <p>
                You need a device with a good graphics processor and high RAM to
                give you adequate performance, such as devices: Lp9...Lp5
              </p>
            </div>
            <div className="feat-box">
              <Image src={im7} width={0} height={0} alt="none" />
              <h4>Medicine</h4>
              <p>
                You need a simple device with normal specifications, such as the
                following devices: Lp23...Lp78...
              </p>
            </div>
          </div>
          <div className="clearfix"></div>
        </div>
      </div>
      {/* <!-- end features  --> */}
      {/* <!-- start footer  --> */}
      <footer id="contact" className="last">
        <div className="container">
          <h2>contact us</h2>

          <div className="icons">
            <p>hay aljamiliah / Aleppo / syria</p>
            <div className="con-icons">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="icon" size={24} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="icon" size={24} />
              </a>
              <a
                href="https://whatsapp.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp className="icon" size={24} />
              </a>
            </div>
          </div>
        </div>
      </footer>
      {/* <!-- end footer  --> */}
    </>
  );
}
