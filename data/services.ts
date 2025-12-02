export interface ServiceType {
  title: string;
  description: string;
  features: string[];
}

const services: Record<string, ServiceType> = {
    "web-app": {
      title: "Web Application Development",
      description:
        "We build responsive, scalable and secure web applications tailored to your business needs.",
      features: [
        "Custom UI/UX",
        "Backend API development",
        "Authentication & role management",
        "Cloud deployment",
      ],
    },
  
    "mobile-app": {
      title: "Mobile App Development",
      description:
        "We create powerful, smooth and modern apps for both Android and iOS.",
      features: [
        "Flutter or React Native",
        "App Store & Play Store deployment",
        "Backend connectivity",
      ],
    },
  
    "graphic-design": {
      title: "Graphic Designing",
      description:
        "We design high-quality graphics for branding, marketing, and social media.",
      features: ["Posters", "Flyers", "Website graphics", "Branding visuals"],
    },
  
    "logo-design": {
      title: "Logo Design",
      description:
        "We create unique, memorable and modern logos that match your brand identity.",
      features: ["Minimal Logo", "3D Logo", "Typography Logo"],
    },
  
    "product-development": {
      title: "Product Development",
      description:
        "End-to-end product development service from planning to deployment.",
      features: ["Market research", "Prototyping", "MVP", "Full-scale build"],
    },
  };
  
  export default services;
  
  