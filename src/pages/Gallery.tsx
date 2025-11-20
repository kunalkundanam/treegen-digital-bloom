import { motion } from "framer-motion";
import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  // Placeholder gallery items - these would be actual images in production
  const galleryItems = [
    {
      title: "E-Waste Collection Center",
      category: "Facilities",
      image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800&h=600&fit=crop",
    },
    {
      title: "Sorting Process",
      category: "Process",
      image: "https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?w=800&h=600&fit=crop",
    },
    {
      title: "Component Separation",
      category: "Process",
      image: "https://images.unsplash.com/photo-1595740882221-4eb8c6af3ab0?w=800&h=600&fit=crop",
    },
    {
      title: "Recycled Materials",
      category: "Output",
      image: "https://images.unsplash.com/photo-1567789884554-0b844b597180?w=800&h=600&fit=crop",
    },
    {
      title: "Processing Plant",
      category: "Facilities",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop",
    },
    {
      title: "Metal Recovery",
      category: "Process",
      image: "https://images.unsplash.com/photo-1581093458791-9d42e1e50c2e?w=800&h=600&fit=crop",
    },
    {
      title: "Corporate Partnership",
      category: "Partnerships",
      image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&h=600&fit=crop",
    },
    {
      title: "Quality Control",
      category: "Process",
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=600&fit=crop",
    },
    {
      title: "Storage Facility",
      category: "Facilities",
      image: "https://images.unsplash.com/photo-1581092162384-8987c1d64926?w=800&h=600&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-recycle-blue/10 to-transparent" />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
              Our Gallery
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore our state-of-the-art facilities, advanced recycling processes, 
              and the positive impact we're making on the environment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="group relative aspect-[4/3] overflow-hidden rounded-xl cursor-pointer"
                onClick={() => setSelectedImage(index)}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="inline-block px-3 py-1 bg-forest-green text-xs font-semibold rounded-full mb-2">
                      {item.category}
                    </span>
                    <h3 className="text-white text-xl font-bold">{item.title}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      <Dialog open={selectedImage !== null} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl p-0 bg-transparent border-0">
          {selectedImage !== null && (
            <div className="relative">
              <img
                src={galleryItems[selectedImage].image}
                alt={galleryItems[selectedImage].title}
                className="w-full rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent rounded-b-lg">
                <span className="inline-block px-3 py-1 bg-forest-green text-xs font-semibold rounded-full mb-2">
                  {galleryItems[selectedImage].category}
                </span>
                <h3 className="text-white text-2xl font-bold">
                  {galleryItems[selectedImage].title}
                </h3>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Gallery;
