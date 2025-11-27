import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

export default function Reviews() {
  const reviews = [
    {
      name: "John M.",
      location: "Medina, OH",
      rating: 5,
      text: "Summit Land Clearing did an amazing job on our 5-acre property. They cleared overgrown brush and trees quickly and professionally. Highly recommend!",
    },
    {
      name: "Sarah T.",
      location: "Akron, OH",
      rating: 5,
      text: "We needed our fence line cleared and they did it perfectly. Fair pricing, showed up on time, and left the property clean. Will definitely use again.",
    },
    {
      name: "Mike R.",
      location: "Canton, OH",
      rating: 5,
      text: "Professional service from start to finish. They prepared our building site and it looks great. The owner was easy to work with and very knowledgeable.",
    },
  ];

  return (
    <section id="reviews" className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {reviews.map((review, index) => (
            <Card key={index} className="border-2 hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-secondary text-secondary"
                    />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 italic">
                  "{review.text}"
                </p>
                <div>
                  <div className="font-semibold text-foreground">
                    {review.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {review.location}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground">
            Reviews are examples. Replace with your actual customer testimonials.
          </p>
        </div>
      </div>
    </section>
  );
}
