import React from "react";
import styles from "./style";
import {
  Billing,
  Business,
  CTA,
  CardDeal,
  Clients,
  Footer,
  Hero,
  NavBar,
  Stats,
  Testimonials,
} from "./components";
import { Fade } from "react-awesome-reveal";

const App = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <NavBar />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Fade bottom duration={2000} triggerOnce>
            <section>
              <Stats />
            </section>
          </Fade>
          <Fade bottom duration={2000} triggerOnce>
            <section>
              <Business />
            </section>
          </Fade>
          <Fade bottom duration={2000} triggerOnce>
            <section>
              <Billing />
            </section>
          </Fade>
          <Fade bottom duration={2000} triggerOnce>
            <section>
              <CardDeal />
            </section>
          </Fade>
          <Fade bottom duration={2000} triggerOnce>
            <section>
              <Testimonials />
            </section>
          </Fade>
          <Fade bottom duration={2000} triggerOnce>
            <section>
              <Clients />
            </section>
          </Fade>
          <Fade bottom duration={2000} triggerOnce>
            <section>
              <CTA />
            </section>
          </Fade>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
