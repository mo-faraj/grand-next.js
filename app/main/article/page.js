import Link from "next/link";
import Image from "next/image";
import "./article.css";
import { IoMdHome } from "react-icons/io";

import picc1 from "./imgs/93152906_240598540641813_529331161336381440_o.jpg";
import picc2 from "./imgs/COAST_CPU.jpg";
import picc3 from ".//imgs/printer_541385401_1000.jpg";
import picc4 from "./imgs/ما_هي_ذاكرة_الوصول_العشوائي.jpg";
import picc5 from "./imgs/الفرق-بين-أقراص-HDD-و-SSD-و-مميزاتهم-و-عيوبهم.png";

export default function Article() {
  return (
    <>
      <div className="landing-page">
        <div className="container">
          <div className="header-area">
            <div className="logo">Grand</div>

            <div className="links-container">
              <ul className="links">
                <li className="">
                  <Link href="/main">
                    <IoMdHome className="bas" />
                    Home
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="introduction-text">
          <h1>
            We Have <span>Articles</span>
          </h1>
          <p></p>
        </div>
      </div>

      <div id="first" className="about">
        <div className="container">
          <div className="about-us">
            <div className="arti">
              <div className="info-box artic">
                <h2>Graphic processor</h2>
                <p>
                  The graphics processor in the computer is considered one of
                  the necessary components that cannot be dispensed with and
                  cannot be overlooked. When you need to use the computer for
                  design or engineering programs, you must pay great attention
                  to this piece.
                </p>
              </div>
              <div className="image-box">
                <Image src={picc1} width={200} height={200} alt="none"></Image>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="second" className="about">
        <div className="container">
          <div className="about-us">
            <div className="arti">
              <div className="info-box">
                <h2>RAM (random access memory)</h2>
                <p>
                  Random access memory (RAM) is the hardware in a computing
                  device that provides temporary storage for the operating
                  system (OS), software programs and any other data in current
                  use so they're quickly available to the device's processor.
                  RAM is often referred to as a computer's main memory, as
                  opposed to the processor cache or other memory types.
                </p>
              </div>
              <div className="image-box">
                <Image
                  className="art-im"
                  src={picc2}
                  width={200}
                  height={200}
                  alt="none"
                ></Image>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="third" className="about">
        <div className="container">
          <div id="about-us" className="about-us">
            <div className="arti">
              <div className="info-box">
                <h2>Central processing unit</h2>
                <p>
                  The Central Processing Unit (CPU) is the primary component of
                  a computer that acts as its “control center.” The CPU, also
                  referred to as the “central” or “main” processor, is a complex
                  set of electronic circuitry that runs the machine’s operating
                  system and apps. The CPU interprets, processes and executes
                  instructions, most often from the hardware and software
                  programs running on the device.
                </p>
              </div>
              <div className="image-box">
                <Image src={picc3} width={200} height={200} alt="none"></Image>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="fourth" className="about">
        <div className="container">
          <div id="about-us" className="about-us">
            <div className="arti">
              <div className="info-box">
                <h2>Central processing unit</h2>
                <p>
                  computer printer is a piece of hardware for a computer. It
                  allows a user to print items on paper, such as letters and
                  pictures. Usually a printer prints under the control of a
                  computer. Many can also work as a photocopier or with a
                  digital camera to print directly without using a computer
                  Printers are programmed using a programming language.
                </p>
              </div>
              <div className="image-box">
                <Image src={picc4} width={200} height={200} alt="none"></Image>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="fifth" className="about">
        <div className="container">
          <div id="about-us" className="about-us">
            <div className="arti">
              <div className="info-box">
                <h2>ssd VS hdd</h2>
                <p>
                  HDD vs SSD: Key Differences While solid-state drives (SSDs)
                  and hard disk drives (HDD) allow users to store files, they
                  work differently. Many of the differences between solid-state
                  drives (SSDs) and hard disk drives (HDD) come from advances in
                  technology. Reading process The reading process is how hard
                  disk drives (HDDs) and solid-state drives (SSDs) retrieve data
                  on their devices. When you ask the hard disk drive (HDD) to
                  retrieve data, a signal is sent to the input/output (I/O)
                  controller.
                </p>
              </div>
              <div className="image-box">
                <Image src={picc5} width={200} height={200} alt="none"></Image>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
