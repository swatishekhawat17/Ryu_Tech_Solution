import ServiceList from "./components/ServiceList";
import PageWrapper from "./components/PageWraper";
import ContactUs from "./components/contact_us";
import Hero from "./components/animation";
import DevelopmentProcess from "./components/DevelopmentProcess";

export default function Home() {
  return (
    <PageWrapper>
      <>
        {/*Section 1: Animation + navigation bar +Slider */}
        <Hero />
        {/*Section 2: Service Cards */ }
        <ServiceList/>
        {/* Section 3: Development Process */}
        <DevelopmentProcess/>
        {/*Section 4: Contact Us */}
        <ContactUs />
      </>
    </PageWrapper>
  );
}
