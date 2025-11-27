import { MapPin } from "lucide-react";

export default function ServiceArea() {
  const areas = [
    "Medina",
    "Akron",
    "Canton",
    "Portage Lakes",
    "Wadsworth",
    "Brunswick",
    "Strongsville",
    "North Royalton",
  ];

  return (
    <section id="service-area" className="py-20 bg-primary text-primary-foreground">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary rounded-full mb-6">
            <MapPin className="w-8 h-8 text-secondary-foreground" />
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Serving Northeast Ohio
          </h2>

          <p className="text-xl text-primary-foreground/90 mb-8">
            Based in Medina, we proudly serve the Akron, Canton, and Portage
            Lakes region. Whether you're a homeowner preparing a building site,
            a farmer clearing fence rows, or an investor developing property,
            we're here to help.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {areas.map((area, index) => (
              <div
                key={index}
                className="px-4 py-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full border border-primary-foreground/20"
              >
                <span className="font-semibold">{area}</span>
              </div>
            ))}
          </div>

          <p className="text-lg text-primary-foreground/80">
            Not sure if we serve your area?{" "}
            <a
              href="tel:+19898988329"
              className="text-secondary font-semibold hover:underline"
            >
              Give us a call
            </a>{" "}
            and we'll let you know!
          </p>
        </div>
      </div>
    </section>
  );
}
