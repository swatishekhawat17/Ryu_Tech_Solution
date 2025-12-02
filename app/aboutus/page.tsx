import Image from "next/image";

export default function AboutUsPage() {
  return (
    <div className="bg-black min-h-screen">
      {/* Hero Section */}
      <div className="h-60 bg-brand-gradient-dark flex items-center justify-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          About Us
        </h1>
      </div>

      <main className="w-full flex-cols justify-center py-5 px-2 bg-gray-100 ">
        {/* Who we are */}
        <section className="bg-white rounded-2xl shadow-lg overflow-hidden grid md:grid-cols-2 gap-6 p-8 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Who We Are?</h2>
            <p className="text-gray-500 font-semibold leading-relaxed mb-4">
              We are a passionate team dedicated to providing high-quality
              services for our clients. Our focus is on innovation, customer
              satisfaction, and long-term value creation. We blend engineering,
              design and strategy to ship impactful services.
            </p>

            <div className="flex flex-wrap gap-2">
              <span className="inline-block bg-blue-50 text-brand-blue px-2 py-1 rounded-full text-sm font-semibold">
                Logo Design
              </span>
              <span className="inline-block bg-purple-50 text-brand-purple px-2 py-1 rounded-full text-sm font-semibold ">
                Web & Mobile App
              </span>
              <span className="inline-block bg-blue-50 text-brand-blue px-2 py-1 rounded-full text-sm font-semibold">
               Graphic Design
              </span>
            </div>
          </div>

          <div className="w-full h-64 md:h-80 rounded-xl overflow-hidden">
            <Image
              src="/Images/About/aboutus.jpg"
              width={800}
              height={560}
              alt="about us"
              className="w-full h-full object-cover"
            />
          </div>
        </section>

        {/* Stats */}
        <section className="mt-12">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl font-extrabold text-brand-blue">
                20+
              </div>
              <div className="text-sm font-bold text-gray-700 mt-1">
                Projects Delivered
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl font-extrabold text-brand-purple">10+</div>
              <div className="text-sm font-bold text-gray-700 mt-1">Happy Clients</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl font-extrabold text-brand-blue">1+</div>
              <div className="text-sm font-bold text-gray-700 mt-1">Years Experience</div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-center mb-8">
            Our Mission & Vision
          </h2>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10 justify-center">

            <div className="max-w-md  bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition duration-300">
              <h3 className="text-2xl font-semibold mb-3 text-brand-blue">
                Our Mission
              </h3>
              <p className="text-gray-600 leading-relaxed">
                To deliver meaningful solutions that help people live better,
                healthier, and more connected lives.
              </p>
            </div>

            <div className="max-w-md bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition duration-300">
              <h3 className="text-2xl font-semibold mb-3 text-brand-purple">
                Our Vision
              </h3>
              <p className="text-gray-600 leading-relaxed">
                To be a global leader driven by innovation, trust, and customer
                success.
              </p>
            </div>
          </div>
        </section>

        {/* Team */}
        <section id="team" className="mt-12">
          <h2 className="text-3xl font-bold text-center mb-8">Meet Our Team</h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Member 1 */}
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition transform hover:-translate-y-1 text-center">
              <div className="w-36 h-36 mx-auto rounded-full overflow-hidden">
                <Image
                  src="/Images/About/member1.jfif"
                  width={180}
                  height={180}
                  alt="team member"
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="text-xl font-semibold mt-4">John Doe</h3>
              <p className="text-gray-500">Founder & CEO</p>
            </div>

            {/* Member 2 */}
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition transform hover:-translate-y-1 text-center">
              <div className="w-36 h-36 mx-auto rounded-full overflow-hidden">
                <Image
                  src="/Images/About/member2.jpg"
                  width={180}
                  height={180}
                  alt="team member"
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="text-xl font-semibold mt-4">Sarah Parker</h3>
              <p className="text-gray-500">Lead Designer</p>
            </div>

            {/* Member 3 */}
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition transform hover:-translate-y-1 text-center">
              <div className="w-36 h-36 mx-auto rounded-full overflow-hidden">
                <Image
                  src="/Images/About/member3.jfif"
                  width={180}
                  height={180}
                  alt="team member"
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="text-xl font-semibold mt-4">Michael Smith</h3>
              <p className="text-gray-500">Project Manager</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
