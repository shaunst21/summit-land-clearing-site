import { CheckCircle2, Award, Clock, DollarSign } from "lucide-react";

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: Award,
      title: "Professional & Reliable",
      description:
        "Owner-operated with years of experience in land clearing and forestry mulching.",
    },
    {
      icon: CheckCircle2,
      title: "Quality Equipment",
      description:
        "Modern skid steer and mulching attachments for efficient, professional results.",
    },
    {
      icon: Clock,
      title: "Timely Service",
      description:
        "We respect your schedule and complete projects on time, every time.",
    },
    {
      icon: DollarSign,
      title: "Fair Pricing",
      description:
        "Transparent quotes with no hidden fees. You know exactly what you're paying for.",
    },
  ];

  return (
    <section id="why-us" className="py-20 bg-muted/30">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Why Choose Summit Land Clearing?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              We're a local, owner-operated business dedicated to transforming
              overgrown properties into clean, usable land. With professional
              equipment and a commitment to quality, we deliver results that
              exceed expectations.
            </p>

            <div className="space-y-6">
              {reasons.map((reason, index) => {
                const Icon = reason.icon;
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        {reason.title}
                      </h3>
                      <p className="text-muted-foreground">{reason.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Stats Placeholders */}
            <div className="grid grid-cols-2 gap-6 mt-12">
              <div className="bg-card p-6 rounded-lg border-2 border-border">
                <div className="text-4xl font-bold text-primary mb-2">500+</div>
                <div className="text-sm text-muted-foreground">
                  Acres Cleared
                </div>
              </div>
              <div className="bg-card p-6 rounded-lg border-2 border-border">
                <div className="text-4xl font-bold text-primary mb-2">100+</div>
                <div className="text-sm text-muted-foreground">
                  Jobs Completed
                </div>
              </div>
            </div>
          </div>

          {/* Right: Image */}
          <div className="relative">
            <img
              src="/equipment.jpg"
              alt="Land clearing equipment in action"
              className="rounded-lg shadow-2xl w-full h-auto object-cover"
            />
            <div className="absolute -bottom-6 -left-6 bg-secondary text-secondary-foreground p-6 rounded-lg shadow-xl">
              <div className="text-3xl font-bold">Fully Insured</div>
              <div className="text-sm">Licensed & Professional</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
