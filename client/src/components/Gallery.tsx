export default function Gallery() {
  const projects = [
    {
      before: "/before-after-1.webp",
      title: "Residential Lot Clearing",
      description: "Transformed overgrown lot into building-ready land",
    },
    {
      before: "/before-after-2.webp",
      title: "Forestry Mulching Project",
      description: "Cleared dense brush and small trees for property access",
    },
    {
      before: "/before-after-3.webp",
      title: "Driveway Site Preparation",
      description: "Prepared site for new gravel driveway installation",
    },
  ];

  return (
    <section id="gallery" className="py-20 bg-card">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Before & After Gallery
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See the transformation. Real projects, real results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <img
                src={project.before}
                alt={project.title}
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6 text-primary-foreground">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-sm text-primary-foreground/90">
                    {project.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            These are example before/after images. Your actual project photos
            can be easily added by replacing the image files in the public
            folder.
          </p>
        </div>
      </div>
    </section>
  );
}
