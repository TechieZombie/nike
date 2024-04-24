import ServiceCard from "../components/ServiceCard";
import { services } from "../constants";
const Services = () => {
  return (
    <section className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1  gap-10 rounded-lg ">
      {services.map((service) => (
        <div key={service.label}>
          <ServiceCard {...service} />
        </div>
      ))}
    </section>
  );
};

export default Services;
