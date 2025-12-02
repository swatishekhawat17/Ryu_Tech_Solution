import ContactUs from "../components/contact_us";

export default function ContactPage() {
  return (
    <div>
      {/* Hero Section */}
      <div className="h-60 bg-brand-gradient-dark flex items-center justify-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">Contact Us</h1>
      </div>
      {/* Contact Form or Contact Details */}
      <ContactUs />
    </div>
  );
}
