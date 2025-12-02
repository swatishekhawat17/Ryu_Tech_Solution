import services from "@/data/services";

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const service = services[slug];

  if (!service) {
    return (
      <div className="p-10 text-center text-red-500">
        ❌ Service not found for slug: <b>{slug}</b>
      </div>
    );
  }

  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold text-white">{service.title}</h1>

      <p className="mt-4 text-gray-600">{service.description}</p>

      <h2 className="text-2xl font-semibold mt-8">Features</h2>
      <ul className="list-disc pl-6 mt-3">
        {service.features.map((item: string, i: number) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
