import styles from "./style";
import { Billing, Specification, Technologies, Clients, Connect, Footer, Navbar, Stats, Testimonials, Hero, Services,SEOSection,ProjectsSection,ContactForm } from "./components";
import { Contact, ProjectorIcon } from "lucide-react";

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero/>
      </div>
    </div>
    
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
        <Services/>
        <Specification />
        <SEOSection/>
        <ProjectsSection/>
        <Technologies />
        <Testimonials/>
        <Connect />
        <ContactForm/>
        <Footer />
      </div>
    </div>
  </div>
);

export default App;
