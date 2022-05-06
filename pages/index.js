import Head from "next/head";
import { useRef, useCallback } from "react";

export default function Home() {
  const refIntroduction = useRef(null);
  const refOurVision = useRef(null);
  const refTokenomic = useRef(null);
  const refDistribution = useRef(null);
  const refRoadmap = useRef(null);
  const refWhitepaper = useRef(null);
  const onHandleScrollToContent = useCallback((myRef) => {
    myRef.current.scrollIntoView();
  }, []);
  return (
    <div>
      <Head>
        <title>Tails Inu</title>
        <meta name="description" content="Tails Inu" />
        <meta name="viewport" content="width=420, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
          crossOrigin="anonymous"
        ></link>
      </Head>
      <div className="ladi-wraper">
        <div id="SECTION1" className="ladi-section">
          <div className="ladi-section-background"></div>
          <div className="ladi-container">
            <div id="BOX390" className="ladi-element">
              <div className="ladi-box"></div>
            </div>
            <div id="BOX389" className="ladi-element">
              <div className="ladi-box"></div>
            </div>
            <div data-action="true" id="BUTTON2" className="ladi-element">
              <div className="ladi-button">
                <div className="ladi-button-background"></div>
                <div
                  onClick={() => onHandleScrollToContent(refRoadmap)}
                  id="BUTTON_TEXT2"
                  className="ladi-element"
                >
                  <p className="ladi-headline">ROADMAP</p>
                </div>
              </div>
            </div>
            <div data-action="true" id="BUTTON14" className="ladi-element">
              <div className="ladi-button">
                <div className="ladi-button-background"></div>
                <div
                  onClick={() => onHandleScrollToContent(refDistribution)}
                  id="BUTTON_TEXT14"
                  className="ladi-element"
                >
                  <p className="ladi-headline">DISTRIBUTION</p>
                </div>
              </div>
            </div>
            <div data-action="true" id="BUTTON16" className="ladi-element">
              <div className="ladi-button">
                <div className="ladi-button-background"></div>
                <div
                  onClick={() => onHandleScrollToContent(refOurVision)}
                  id="BUTTON_TEXT16"
                  className="ladi-element"
                >
                  <p className="ladi-headline">Our Vision</p>
                </div>
              </div>
            </div>
            <div data-action="true" id="BUTTON18" className="ladi-element">
              <div className="ladi-button">
                <div className="ladi-button-background"></div>
                <div
                  onClick={() => onHandleScrollToContent(refIntroduction)}
                  id="BUTTON_TEXT18"
                  className="ladi-element"
                >
                  <p className="ladi-headline">Introduction</p>
                </div>
              </div>
            </div>
            <div data-action="true" id="BUTTON20" className="ladi-element">
              <div className="ladi-button">
                <div className="ladi-button-background"></div>
                <div
                  onClick={() => onHandleScrollToContent(refTokenomic)}
                  id="BUTTON_TEXT20"
                  className="ladi-element"
                >
                  <p className="ladi-headline">TOKENOMICS</p>
                </div>
              </div>
            </div>
            <div id="IMAGE27" className="ladi-element">
              <div className="ladi-image">
                <div className="ladi-image-background"></div>
              </div>
            </div>
            <div data-action="true" id="BUTTON79" className="ladi-element">
              <div className="ladi-button">
                <div className="ladi-button-background"></div>
                <div id="BUTTON_TEXT79" className="ladi-element">
                  <p className="ladi-headline">home</p>
                </div>
              </div>
            </div>
            <a
              href="https://google.com/search?q=tails+inu"
              target="_blank"
              rel="noopener noreferrer"
              id="IMAGE388"
              className="ladi-element"
              data-replace-href="https://google.com/search?q=tails+inu"
            >
              <div className="ladi-image">
                <div className="ladi-image-background"></div>
              </div>
            </a>
            <a
              href="https://google.com/search?q=tails+inu"
              target="_blank"
              rel="noopener noreferrer"
              id="IMAGE387"
              className="ladi-element"
              data-replace-href="https://google.com/search?q=tails+inu"
            >
              <div className="ladi-image">
                <div className="ladi-image-background"></div>
              </div>
            </a>
            <a
              href="https://babykangaroo.finance/BabykangarooWP.pdf"
              target="_blank"
              rel="noopener noreferrer"
              id="BUTTON391"
              className="ladi-element"
              data-replace-href="https://babykangaroo.finance/BabykangarooWP.pdf"
            >
              <div className="ladi-button">
                <div className="ladi-button-background"></div>
                <div
                  onClick={() => onHandleScrollToContent(refWhitepaper)}
                  id="BUTTON_TEXT391"
                  className="ladi-element"
                >
                  <p className="ladi-headline">whitepaper</p>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div id="SECTION28" className="ladi-section ladi-animation">
          <div className="ladi-section-background"></div>
          <div className="ladi-container">
            <div id="GROUP328" className="ladi-element">
              <div className="ladi-group">
                <div id="BOX61" className="ladi-element">
                  <div className="ladi-box"></div>
                </div>
                <div id="IMAGE60" className="ladi-element">
                  <div className="ladi-image">
                    <div className="ladi-image-background"></div>
                  </div>
                </div>
              </div>
            </div>
            <div id="HEADLINE54" className="ladi-element ladi-animation">
              <p className="ladi-headline">
                BABY KANGAROO TOKEN
                <br />
              </p>
            </div>
            <div id="HEADLINE55" className="ladi-element ladi-animation">
              <h3 className="ladi-headline"></h3>
            </div>
            <div id="IMAGE374" className="ladi-element">
              <div className="ladi-image">
                <div className="ladi-image-background"></div>
              </div>
            </div>
            <div id="BOX30" className="ladi-element">
              <div className="ladi-box"></div>
            </div>
            <div id="BUTTON73" className="ladi-element">
              <div className="ladi-button">
                <div className="ladi-button-background"></div>
                <div id="BUTTON_TEXT73" className="ladi-element">
                  <p className="ladi-headline">buy on pancake</p>
                </div>
              </div>
            </div>
            <div id="BUTTON75" className="ladi-element">
              <div className="ladi-button">
                <div className="ladi-button-background"></div>
                <div id="BUTTON_TEXT75" className="ladi-element">
                  <p className="ladi-headline">chart</p>
                </div>
              </div>
            </div>
            <div id="IMAGE77" className="ladi-element ladi-animation">
              <div className="ladi-image">
                <div className="ladi-image-background"></div>
              </div>
            </div>
            <div id="IMAGE78" className="ladi-element ladi-animation">
              <div className="ladi-image">
                <div className="ladi-image-background"></div>
              </div>
            </div>
          </div>
        </div>
        <div id="SECTION81" className="ladi-section">
          <div className="ladi-section-background"></div>
          <div className="ladi-container">
            <div id="GROUP332" className="ladi-element">
              <div className="ladi-group">
                <div id="GROUP331" className="ladi-element">
                  <div className="ladi-group">
                    <div id="SHAPE122" className="ladi-element">
                      <div className="ladi-shape">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="100%"
                          height="100%"
                          preserveAspectRatio="none"
                          viewBox="0 0 195.29 185.03"
                          className=""
                          fill="rgba(255, 190, 39, 1)"
                        >
                          <path d="M96.6,185C52.36,186.46,1.49,90.73,0,46.48S43.82-3.68,91.24,1.62C141,7.19,188.15,24.37,194.45,50.8,203.26,87.77,140.85,183.56,96.6,185Z"></path>
                        </svg>
                      </div>
                    </div>
                    <div id="IMAGE91" className="ladi-element">
                      <div className="ladi-image">
                        <div className="ladi-image-background"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="SHAPE145" className="ladi-element">
                  <div className="ladi-shape">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="100%"
                      height="100%"
                      preserveAspectRatio="none"
                      viewBox="0 0 195.29 185.03"
                      className=""
                      fill="rgba(236, 204, 127, 1)"
                    >
                      <path d="M96.6,185C52.36,186.46,1.49,90.73,0,46.48S43.82-3.68,91.24,1.62C141,7.19,188.15,24.37,194.45,50.8,203.26,87.77,140.85,183.56,96.6,185Z"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div id="GROUP335" className="ladi-element">
              <div className="ladi-group">
                <div id="SHAPE121" className="ladi-element">
                  <div className="ladi-shape">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="100%"
                      height="100%"
                      preserveAspectRatio="none"
                      viewBox="0 0 195.29 185.03"
                      className=""
                      fill="rgba(255, 190, 39, 1)"
                    >
                      <path d="M96.6,185C52.36,186.46,1.49,90.73,0,46.48S43.82-3.68,91.24,1.62C141,7.19,188.15,24.37,194.45,50.8,203.26,87.77,140.85,183.56,96.6,185Z"></path>
                    </svg>
                  </div>
                </div>
                <div id="SHAPE138" className="ladi-element">
                  <div className="ladi-shape">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="100%"
                      height="100%"
                      preserveAspectRatio="none"
                      viewBox="0 0 195.29 185.03"
                      className=""
                      fill="rgba(236, 206, 127, 1.0)"
                    >
                      <path d="M96.6,185C52.36,186.46,1.49,90.73,0,46.48S43.82-3.68,91.24,1.62C141,7.19,188.15,24.37,194.45,50.8,203.26,87.77,140.85,183.56,96.6,185Z"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div ref={refIntroduction} id="GROUP360" className="ladi-element">
              <div className="ladi-group">
                <div id="BOX87" className="ladi-element">
                  <div className="ladi-box"></div>
                </div>
                <div id="HEADLINE89" className="ladi-element ladi-animation">
                  <p className="ladi-headline">
                    <span style={{ fontWeight: 700 }}>
                      BabyKangaroo is a unique token inspired by the Kangaroo
                      and the Boxing sport. We usually think of the Kangaroo as
                      a hilarious creature with a fighting style similar to the
                      Boxing style. That is where our ideas come from; we want
                      to create a one-of-a-kind meme token that will thrive in
                      the hearts of animal and boxing lovers.
                    </span>
                    <br />
                  </p>
                </div>
                <div id="HEADLINE191" className="ladi-element ladi-animation">
                  <p className="ladi-headline">
                    INTRODUCTION
                    <br />
                  </p>
                </div>
              </div>
            </div>
            <div id="IMAGE375" className="ladi-element">
              <div className="ladi-image">
                <div className="ladi-image-background"></div>
              </div>
            </div>
            <div id="IMAGE123" className="ladi-element ladi-animation">
              <div className="ladi-image">
                <div className="ladi-image-background"></div>
              </div>
            </div>
          </div>
        </div>
        <div id="SECTION127" className="ladi-section">
          <div className="ladi-section-background"></div>
          <div className="ladi-container">
            <div id="GROUP338" className="ladi-element">
              <div className="ladi-group">
                <div id="BOX130" className="ladi-element">
                  <div className="ladi-box"></div>
                </div>
                <div ref={refOurVision} id="GROUP382" className="ladi-element">
                  <div className="ladi-group">
                    <div id="PARAGRAPH162" className="ladi-element ">
                      <p className="ladi-paragraph">
                        To create a community-influenced project that reward
                        members just for holding tokens!
                      </p>
                    </div>
                    <div id="HEADLINE192" className="ladi-element ">
                      <p className="ladi-headline">
                        OUR VISION
                        <br />
                      </p>
                    </div>
                    <div id="HEADLINE132" className="ladi-element ">
                      <p className="ladi-headline">
                        BabyKangaroo aims to build an ecosystem that is
                        one-hundred percent community-driven, providing our
                        investors with an enjoyable playground. To connect and
                        earn enormous rewards for their investments. And most
                        importantly, to drive the project forward in competing
                        with other cryptocurrencies.
                        <br />
                        <br />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="GROUP336" className="ladi-element">
              <div className="ladi-group">
                <div id="SHAPE142" className="ladi-element">
                  <div className="ladi-shape">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="100%"
                      height="100%"
                      preserveAspectRatio="none"
                      viewBox="0 0 195.29 185.03"
                      className=""
                      fill="rgba(236, 204, 127, 1)"
                    >
                      <path d="M96.6,185C52.36,186.46,1.49,90.73,0,46.48S43.82-3.68,91.24,1.62C141,7.19,188.15,24.37,194.45,50.8,203.26,87.77,140.85,183.56,96.6,185Z"></path>
                    </svg>
                  </div>
                </div>
                <div id="SHAPE134" className="ladi-element">
                  <div className="ladi-shape">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="100%"
                      height="100%"
                      preserveAspectRatio="none"
                      viewBox="0 0 195.29 185.03"
                      className=""
                      fill="rgba(255, 190, 39, 1)"
                    >
                      <path d="M96.6,185C52.36,186.46,1.49,90.73,0,46.48S43.82-3.68,91.24,1.62C141,7.19,188.15,24.37,194.45,50.8,203.26,87.77,140.85,183.56,96.6,185Z"></path>
                    </svg>
                  </div>
                </div>
                <div id="SHAPE160" className="ladi-element">
                  <div className="ladi-shape">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="100%"
                      height="100%"
                      preserveAspectRatio="none"
                      viewBox="0 0 195.29 185.03"
                      className=""
                      fill="rgba(236, 206, 127, 1)"
                    >
                      <path d="M96.6,185C52.36,186.46,1.49,90.73,0,46.48S43.82-3.68,91.24,1.62C141,7.19,188.15,24.37,194.45,50.8,203.26,87.77,140.85,183.56,96.6,185Z"></path>
                    </svg>
                  </div>
                </div>
                <div id="SHAPE139" className="ladi-element">
                  <div className="ladi-shape">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="100%"
                      height="100%"
                      preserveAspectRatio="none"
                      viewBox="0 0 195.29 185.03"
                      className=""
                      fill="rgba(236, 204, 127, 1)"
                    >
                      <path d="M96.6,185C52.36,186.46,1.49,90.73,0,46.48S43.82-3.68,91.24,1.62C141,7.19,188.15,24.37,194.45,50.8,203.26,87.77,140.85,183.56,96.6,185Z"></path>
                    </svg>
                  </div>
                </div>
                <div id="IMAGE163" className="ladi-element ">
                  <div className="ladi-image">
                    <div className="ladi-image-background"></div>
                  </div>
                </div>
              </div>
            </div>
            <div id="GROUP339" className="ladi-element">
              <div className="ladi-group">
                <div id="SHAPE135" className="ladi-element">
                  <div className="ladi-shape">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="100%"
                      height="100%"
                      preserveAspectRatio="none"
                      viewBox="0 0 195.29 185.03"
                      className=""
                      fill="rgba(255, 190, 39, 1)"
                    >
                      <path d="M96.6,185C52.36,186.46,1.49,90.73,0,46.48S43.82-3.68,91.24,1.62C141,7.19,188.15,24.37,194.45,50.8,203.26,87.77,140.85,183.56,96.6,185Z"></path>
                    </svg>
                  </div>
                </div>
                <div id="SHAPE161" className="ladi-element">
                  <div className="ladi-shape">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="100%"
                      height="100%"
                      preserveAspectRatio="none"
                      viewBox="0 0 195.29 185.03"
                      className=""
                      fill="rgba(236, 204, 127, 1)"
                    >
                      <path d="M96.6,185C52.36,186.46,1.49,90.73,0,46.48S43.82-3.68,91.24,1.62C141,7.19,188.15,24.37,194.45,50.8,203.26,87.77,140.85,183.56,96.6,185Z"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div id="IMAGE377" className="ladi-element">
              <div className="ladi-image">
                <div className="ladi-image-background"></div>
              </div>
            </div>
          </div>
        </div>
        <div ref={refTokenomic} id="SECTION361" className="ladi-section">
          <div className="ladi-section-background"></div>
          <div className="ladi-container">
            <div id="IMAGE362" className="ladi-element">
              <div className="ladi-image">
                <div className="ladi-image-background"></div>
              </div>
            </div>
          </div>
        </div>
        <div id="SECTION197" className="ladi-section">
          <div className="ladi-section-background"></div>
          <div className="ladi-container">
            <div id="IMAGE376" className="ladi-element">
              <div className="ladi-image">
                <div className="ladi-image-background"></div>
              </div>
            </div>
            <div id="SHAPE201" className="ladi-element">
              <div className="ladi-shape">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  height="100%"
                  preserveAspectRatio="none"
                  viewBox="0 0 195.29 185.03"
                  className=""
                  fill="rgba(255, 190, 39, 1)"
                >
                  <path d="M96.6,185C52.36,186.46,1.49,90.73,0,46.48S43.82-3.68,91.24,1.62C141,7.19,188.15,24.37,194.45,50.8,203.26,87.77,140.85,183.56,96.6,185Z"></path>
                </svg>
              </div>
            </div>
            <div id="GROUP358" className="ladi-element">
              <div className="ladi-group">
                <div id="SHAPE200" className="ladi-element">
                  <div className="ladi-shape">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="100%"
                      height="100%"
                      preserveAspectRatio="none"
                      viewBox="0 0 195.29 185.03"
                      className=""
                      fill="rgba(255, 190, 39, 1)"
                    >
                      <path d="M96.6,185C52.36,186.46,1.49,90.73,0,46.48S43.82-3.68,91.24,1.62C141,7.19,188.15,24.37,194.45,50.8,203.26,87.77,140.85,183.56,96.6,185Z"></path>
                    </svg>
                  </div>
                </div>
                <div id="SHAPE202" className="ladi-element">
                  <div className="ladi-shape">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="100%"
                      height="100%"
                      preserveAspectRatio="none"
                      viewBox="0 0 195.29 185.03"
                      className=""
                      fill="rgba(236, 206, 127, 1)"
                    >
                      <path d="M96.6,185C52.36,186.46,1.49,90.73,0,46.48S43.82-3.68,91.24,1.62C141,7.19,188.15,24.37,194.45,50.8,203.26,87.77,140.85,183.56,96.6,185Z"></path>
                    </svg>
                  </div>
                </div>
                <div id="IMAGE204" className="ladi-element ">
                  <div className="ladi-image">
                    <div className="ladi-image-background"></div>
                  </div>
                </div>
              </div>
            </div>
            <div id="HEADLINE217" className="ladi-element ">
              <h3 className="ladi-headline">
                2% will be added to Liquidity pool
                <br />
              </h3>
            </div>
            <div id="HEADLINE218" className="ladi-element ">
              <h3 className="ladi-headline">
                2% will be for Marketing
                <br />
                1% will be burnt
                <br />
              </h3>
            </div>
            <div id="BUTTON224" className="ladi-element ">
              <div className="ladi-button">
                <div className="ladi-button-background"></div>
                <div id="BUTTON_TEXT224" className="ladi-element">
                  <p className="ladi-headline">TAX BUY</p>
                </div>
              </div>
            </div>
            <div id="BUTTON227" className="ladi-element ">
              <div className="ladi-button">
                <div className="ladi-button-background"></div>
                <div id="BUTTON_TEXT227" className="ladi-element">
                  <p className="ladi-headline">TAX SELL</p>
                </div>
              </div>
            </div>
            <div
              ref={refDistribution}
              id="HEADLINE232"
              className="ladi-element "
            >
              <p className="ladi-headline">
                DISTRIBUTION
                <br />
              </p>
            </div>
            <div id="PARAGRAPH230" className="ladi-element ">
              <p className="ladi-paragraph">
                <span style={{ fontStyle: "italic" }}>
                  (Increase liquidity for our holders. And since liquidity are
                  locked, holders can assure that there will always have token
                  available to trade.)
                </span>
              </p>
            </div>
            <div id="PARAGRAPH231" className="ladi-element ">
              <p className="ladi-paragraph">
                (Tax sell for Marketing will exponentially increase the token
                value since the fund for Marketing increase.
                <br />
                Tax sell for burning will exceedingly create value for current
                holders.)
                <br />
              </p>
            </div>
          </div>
        </div>
        <div ref={refRoadmap} id="SECTION233" className="ladi-section">
          <div className="ladi-section-background"></div>
          <div className="ladi-container">
            <div id="SHAPE235" className="ladi-element">
              <div className="ladi-shape">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  height="100%"
                  preserveAspectRatio="none"
                  viewBox="0 0 195.29 185.03"
                  className=""
                  fill="rgba(255, 190, 39, 1)"
                >
                  <path d="M96.6,185C52.36,186.46,1.49,90.73,0,46.48S43.82-3.68,91.24,1.62C141,7.19,188.15,24.37,194.45,50.8,203.26,87.77,140.85,183.56,96.6,185Z"></path>
                </svg>
              </div>
            </div>
            <div id="GROUP341" className="ladi-element">
              <div className="ladi-group">
                <div id="SHAPE234" className="ladi-element">
                  <div className="ladi-shape">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="100%"
                      height="100%"
                      preserveAspectRatio="none"
                      viewBox="0 0 195.29 185.03"
                      className=""
                      fill="rgba(255, 190, 39, 1)"
                    >
                      <path d="M96.6,185C52.36,186.46,1.49,90.73,0,46.48S43.82-3.68,91.24,1.62C141,7.19,188.15,24.37,194.45,50.8,203.26,87.77,140.85,183.56,96.6,185Z"></path>
                    </svg>
                  </div>
                </div>
                <div id="SHAPE236" className="ladi-element">
                  <div className="ladi-shape">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="100%"
                      height="100%"
                      preserveAspectRatio="none"
                      viewBox="0 0 195.29 185.03"
                      className=""
                      fill="rgba(236, 206, 127, 1)"
                    >
                      <path d="M96.6,185C52.36,186.46,1.49,90.73,0,46.48S43.82-3.68,91.24,1.62C141,7.19,188.15,24.37,194.45,50.8,203.26,87.77,140.85,183.56,96.6,185Z"></path>
                    </svg>
                  </div>
                </div>
                <div id="IMAGE237" className="ladi-element">
                  <div className="ladi-image">
                    <div className="ladi-image-background"></div>
                  </div>
                </div>
              </div>
            </div>
            <div id="HEADLINE278" className="ladi-element ">
              <p className="ladi-headline">
                ROADMAP
                <br />
              </p>
            </div>
            <div id="SHAPE277" className="ladi-element">
              <div className="ladi-shape">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  height="100%"
                  preserveAspectRatio="none"
                  viewBox="0 0 150.2 150"
                  className=""
                  fill="rgba(255, 212, 112, 1)"
                >
                  <path d="M0,43.7V106a44,44,0,0,0,44,44h62.3a44,44,0,0,0,44-44V0H39.4A44,44,0,0,0,0,43.7Z"></path>
                </svg>
              </div>
            </div>
            <div id="BUTTON284" className="ladi-element">
              <div className="ladi-button">
                <div className="ladi-button-background"></div>
                <div id="BUTTON_TEXT284" className="ladi-element">
                  <p className="ladi-headline">stage 3</p>
                </div>
              </div>
            </div>
            <div id="PARAGRAPH288" className="ladi-element">
              <p className="ladi-paragraph">
                * NFT design.
                <br />* NFT Launch.
                <br />* NFT marketplace.
                <br />* Ready for CEX listing.
                <br />
              </p>
            </div>
            <div id="SHAPE276" className="ladi-element">
              <div className="ladi-shape">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  height="100%"
                  preserveAspectRatio="none"
                  viewBox="0 0 150.2 150"
                  className=""
                  fill="rgba(255, 212, 112, 1)"
                >
                  <path d="M0,43.7V106a44,44,0,0,0,44,44h62.3a44,44,0,0,0,44-44V0H39.4A44,44,0,0,0,0,43.7Z"></path>
                </svg>
              </div>
            </div>
            <div id="BUTTON282" className="ladi-element">
              <div className="ladi-button">
                <div className="ladi-button-background"></div>
                <div id="BUTTON_TEXT282" className="ladi-element">
                  <p className="ladi-headline">stage 2</p>
                </div>
              </div>
            </div>
            <div id="PARAGRAPH287" className="ladi-element">
              <p className="ladi-paragraph">
                *Whitelist championship.
                <br />
                *Register on Coingekco, CMC.
                <br />
                *Reach 6000 members.
                <br />
                *ILO launch.
                <br />
                *Public listing on PCS.
                <br />
                *Renounce Ownership.
                <br />
                *Marketing and Promotion.
                <br />
              </p>
            </div>
            <div id="SHAPE273" className="ladi-element">
              <div className="ladi-shape">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  height="100%"
                  preserveAspectRatio="none"
                  viewBox="0 0 150.2 150"
                  className=""
                  fill="rgba(255, 212, 112, 1)"
                >
                  <path d="M0,43.7V106a44,44,0,0,0,44,44h62.3a44,44,0,0,0,44-44V0H39.4A44,44,0,0,0,0,43.7Z"></path>
                </svg>
              </div>
            </div>
            <div id="BUTTON280" className="ladi-element">
              <div className="ladi-button">
                <div className="ladi-button-background"></div>
                <div id="BUTTON_TEXT280" className="ladi-element">
                  <p className="ladi-headline">stage 1</p>
                </div>
              </div>
            </div>
            <div id="PARAGRAPH286" className="ladi-element">
              <p className="ladi-paragraph">
                * Graphic Design
                <br />* Website Design
                <br />* Community Build
                <br />* Marketing Pushing
                <br />* Contact with influencers
                <br />* BabyKangaroo Launch
                <br />* Burn 99% Token
                <br />* Audit + KYC
              </p>
            </div>
          </div>
        </div>
        <div id="SECTION290" className="ladi-section">
          <div className="ladi-section-background"></div>
          <div className="ladi-container">
            <div id="BUTTON365" className="ladi-element">
              <div className="ladi-button">
                <div className="ladi-button-background"></div>
                <div id="BUTTON_TEXT365" className="ladi-element">
                  <p className="ladi-headline"></p>
                </div>
              </div>
            </div>
            <div id="SHAPE292" className="ladi-element">
              <div className="ladi-shape">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  height="100%"
                  preserveAspectRatio="none"
                  viewBox="0 0 195.29 185.03"
                  className=""
                  fill="rgba(255, 190, 39, 1)"
                >
                  <path d="M96.6,185C52.36,186.46,1.49,90.73,0,46.48S43.82-3.68,91.24,1.62C141,7.19,188.15,24.37,194.45,50.8,203.26,87.77,140.85,183.56,96.6,185Z"></path>
                </svg>
              </div>
            </div>
            <div id="GROUP345" className="ladi-element">
              <div className="ladi-group">
                <div id="SHAPE291" className="ladi-element">
                  <div className="ladi-shape">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="100%"
                      height="100%"
                      preserveAspectRatio="none"
                      viewBox="0 0 195.29 185.03"
                      className=""
                      fill="rgba(255, 190, 39, 1)"
                    >
                      <path d="M96.6,185C52.36,186.46,1.49,90.73,0,46.48S43.82-3.68,91.24,1.62C141,7.19,188.15,24.37,194.45,50.8,203.26,87.77,140.85,183.56,96.6,185Z"></path>
                    </svg>
                  </div>
                </div>
                <div id="SHAPE293" className="ladi-element">
                  <div className="ladi-shape">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="100%"
                      height="100%"
                      preserveAspectRatio="none"
                      viewBox="0 0 195.29 185.03"
                      className=""
                      fill="rgba(236, 206, 127, 1)"
                    >
                      <path d="M96.6,185C52.36,186.46,1.49,90.73,0,46.48S43.82-3.68,91.24,1.62C141,7.19,188.15,24.37,194.45,50.8,203.26,87.77,140.85,183.56,96.6,185Z"></path>
                    </svg>
                  </div>
                </div>
                <div id="IMAGE294" className="ladi-element">
                  <div className="ladi-image">
                    <div className="ladi-image-background"></div>
                  </div>
                </div>
              </div>
            </div>
            <div id="HEADLINE298" className="ladi-element">
              <p className="ladi-headline">
                Launching Shcedule
                <br />
              </p>
            </div>
            <div id="BUTTON310" className="ladi-element">
              <div className="ladi-button">
                <div className="ladi-button-background"></div>
                <div id="BUTTON_TEXT310" className="ladi-element">
                  <p className="ladi-headline"></p>
                </div>
              </div>
            </div>
            <div id="PARAGRAPH363" className="ladi-element">
              <p className="ladi-paragraph">
                <span style={{ fontWeight: "bold" }}>
                  Public launch on Pancake Swap
                </span>
                : After the ILO phase is finished, BabyKangaroo will be
                officially listed on PancakeSwap exchange.
                <br />
              </p>
            </div>
            <div id="PARAGRAPH364" className="ladi-element">
              <p className="ladi-paragraph">
                <span style={{ fontWeight: "bold" }}> ILO on Unicrypt</span>: We
                will organize a whitelist championship on Gleam; contributors
                will earn the chance to win a whitelist spot randomly. Also, we
                will give whitelist spots to our partners as long as they
                corporate with us in contribution to BabyKangaroo development.
                By becoming whitelisted, they can participate in this phase and
                buy tokens at a discount, earning a more significant profit when
                BabyKangaroo is officially listed.{" "}
              </p>
            </div>
            <div id="IMAGE367" className="ladi-element">
              <div className="ladi-image">
                <div className="ladi-image-background"></div>
              </div>
            </div>
            <div id="IMAGE368" className="ladi-element">
              <div className="ladi-image">
                <div className="ladi-image-background"></div>
              </div>
            </div>
            <div id="IMAGE393" className="ladi-element">
              <div className="ladi-image">
                <div className="ladi-image-background"></div>
              </div>
            </div>
            <div id="IMAGE396" className="ladi-element">
              <div className="ladi-image">
                <div className="ladi-image-background"></div>
              </div>
            </div>
            <div id="IMAGE394" className="ladi-element">
              <div className="ladi-image">
                <div className="ladi-image-background"></div>
              </div>
            </div>
          </div>
        </div>
        <div id="SECTION322" className="ladi-section">
          <div className="ladi-section-background"></div>
          <div className="ladi-container">
            <div id="PARAGRAPH325" className="ladi-element">
              <p className="ladi-paragraph">
                <span style={{ fontWeight: "bold" }}>
                  Copyright © 2022, Baby Kangaroo.
                </span>
              </p>
            </div>
            <a
              href="https://t.me/babykangaroo_chat"
              target="_blank"
              rel="noopener noreferrer"
              id="IMAGE371"
              className="ladi-element"
              data-replace-href="https://t.me/babykangaroo_chat"
            >
              <div className="ladi-image">
                <div className="ladi-image-background"></div>
              </div>
            </a>
            <a
              href="https://twitter.com/KangarooBabyy"
              target="_blank"
              rel="noopener noreferrer"
              id="IMAGE372"
              className="ladi-element"
              data-replace-href="https://twitter.com/KangarooBabyy"
            >
              <div className="ladi-image">
                <div className="ladi-image-background"></div>
              </div>
            </a>
          </div>
        </div>
        <div id="SECTION_POPUP" className="ladi-section">
          <div className="ladi-section-background"></div>
          <div className="ladi-container"></div>
        </div>
      </div>
      <div id="backdrop-popup" className="backdrop-popup"></div>
      <div id="backdrop-dropbox" className="backdrop-dropbox"></div>
      <div id="lightbox-screen" className="lightbox-screen"></div>
    </div>
  );
}
