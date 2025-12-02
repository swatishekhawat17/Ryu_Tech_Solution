import { servicesList } from "../components/ServiceList";
import { ServiceCard } from "../components/ServiceCardComponent";

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <div className="h-60 bg-brand-gradient-dark flex items-center justify-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          Our Services
        </h1>
      </div>

      {/* Services Section */}
      <div className="w-full bg-white py-20 px-6 ">
        <div className="flex flex-col items-center gap-10">
          {servicesList.map((service, index) => (
            <div
              key={index}
              className="transform transition duration-500 hover:scale-101"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <ServiceCard
                icon={service.icon} 
                title={service.title}
                desc={service.bigdesc} // Show bigdesc in default view
                hoverDesc={service.bigdesc} // Show bigdesc on hover as well
                link={service.link}
                image={service.image}
                width="w-full"
                height="h-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
