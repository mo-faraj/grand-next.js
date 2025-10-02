import Link from "next/link";
import "./store.css";
import Image from "next/image";
import { IoMdHome } from "react-icons/io";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import pic1 from "../../images/05.jpg";
import pic2 from "../../images/06.jpg";
import pic3 from "../../images/07.jpg";
import pic4 from "../../images/08.jpg";
import pic5 from "../../images/09.jpg";
import pic6 from "../../images/10.jpg";
import pic7 from "../../images/11.jpg";
import pic8 from "../../images/13.jpg";

export default async function Store() {
  return (
    <>
      <div className="landing-page">
        <div className="overlay"></div>
        <div className="container">
          <div className="header-area">
            <div className="logo">Grand</div>
            <div className="links-container">
              <ul className="links">
                <li>
                  <Link href="/main">
                    <IoMdHome className="bag" /> Home
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="introduction-text">
          <h1>
            our <span>store</span>
          </h1>
          <p></p>
        </div>
      </div>
      {/* <!-- start portfolio --> */}
      <div className="portfolio" id="port">
        {/* <!-- <div className="container"> --> */}
        <div className="main-heading">
          <h2>store</h2>
        </div>

        <div className="imgs-container">
          <div className="box">
            <Image className="img" src={pic1} width="" height="" alt="" />
            <div className="caption">
              <h1></h1>
              <h4></h4>
              <h4></h4>
              <h4>price :</h4>
              <p>500 s.p</p>
            </div>
          </div>

          <div className="box">
            <Image className="img" src={pic2} width="" height="" alt="" />
            <div className="caption">
              <h1>Lp1</h1>
              <h4>lennovo core i5-1235U</h4>
              <h4>Nvidia mx550</h4>
              <h4>price :</h4>
              <p>4000000s.p</p>
            </div>
          </div>
          <div className="box">
            <Image className="img" src={pic3} width="" height="" alt="" />
            <div className="caption">
              <h1>Lp2</h1>
              <h4>Dell i3-1215U</h4>
              <h4>Intel UHD</h4>
              <h4>price :</h4>
              <p>3500000s.p</p>
            </div>
          </div>
          <div className="box">
            <Image className="img" src={pic4} width="" height="" alt="" />
            <div className="caption">
              <h1>Lp3</h1>
              <h4>Asus celron N4020</h4>
              <h4>Intel HD</h4>
              <h4>price :</h4>
              <p>1200000s.p</p>
            </div>
          </div>
          <div className="box">
            <Image className="img" src={pic5} width="" height="" alt="" />
            <div className="caption">
              <h1>Lp4</h1>
              <h4>Asus i5-1335U</h4>
              <h4>Intel UHD</h4>
              <h4>price :</h4>
              <p>6000000s.p</p>
            </div>
          </div>
          <div className="box">
            <Image className="img" src={pic6} width="" height="" alt="" />
            <div className="caption">
              <h1>Lp5</h1>
              <h4>Dell i3-1215U</h4>
              <h4>intel UHD</h4>
              <h4>price :</h4>
              <p>4500000s.p</p>
            </div>
          </div>
          <div className="box">
            <Image className="img" src={pic7} width="" height="" alt="" />
            <div className="caption">
              <h1>Lp6</h1>
              <h4>Lennovo i7-13650HX</h4>
              <h4>Nvidia RTX 3050</h4>
              <h4>price :</h4>
              <p>9000000s.p</p>
            </div>
          </div>
          <div className="box">
            <Image className="img" src={pic8} width="" height="" alt="" />
            <div className="caption">
              <h1>Lp7</h1>
              <h4>Tochiba i5-8650</h4>
              <h4>Readon 5560</h4>
              <h4>price :</h4>
              <p>7500000s.p</p>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- end portfolio --> */}

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
