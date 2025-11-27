import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Trees, Trash2, Leaf, CircleDot, Truck } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Trees,
      title: "Forestry Mulching",
      description:
        "Single-pass mulching to take down brush, saplings, and small trees, leaving a layer of chips on the ground.",
      benefits: [
        "Clear overgrown lots and fence lines",
        "Improve access roads and trails",
        "Reduce fire fuel and unwanted undergrowth",
      ],
    },
    {
      icon: Leaf,
      title: "Full Lot & Land Clearing",
      description:
        "Clearing small acreage, homesteads, future builds, and investment properties.",
      benefits: [
        "Homebuilding site prep",
        "Pulling out scrub trees and brush",
        "Clean slate for future projects",
      ],
    },
    {
      icon: Trash2,
      title: "Brush & Overgrowth Removal",
      description:
        "Cleanup for properties that have been neglected or are too much for a mower.",
      benefits: [
        "Thick brush, vines, briars",
        "Property line and fence row cleanup",
        "Around barns, sheds, and outbuildings",
      ],
    },
    {
      icon: CircleDot,
      title: "Stump Grinding & Removal",
      description:
        "Grinding stumps below grade so the area can be mowed or built on.",
      benefits: [
        "Storm-damaged trees",
        "Old removal stumps",
        "Yard and pasture stumps",
      ],
    },
    {
      icon: Truck,
      title: "Driveway & Pad Prep",
      description:
        "Skid steer grading for new gravel driveways, parking pads, and shop sites.",
      benefits: [
        "New gravel driveway installation",
        "Parking pad preparation",
        "Level ground for outbuildings",
      ],
    },
  ];

  return (
    <section id="services" className="py-20 bg-card">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Land Clearing Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional solutions for every land clearing and site preparation need
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="border-2 hover:border-primary transition-all duration-300 hover:shadow-xl"
              >
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-secondary mr-2 mt-1">✓</span>
                        <span className="text-sm text-muted-foreground">
                          {benefit}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
