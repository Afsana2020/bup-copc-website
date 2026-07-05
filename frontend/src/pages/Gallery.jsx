import { useState } from 'react';

// Vite's import.meta.glob scans the gallery folder at build time.
// Adding a new image to /public/images/gallery/ and rebuilding auto-includes it.
const imageModules = import.meta.glob('/public/images/gallery/*.(jpg|jpeg|png|gif|webp|bmp)', {
  eager: true,
  query: '?url',
  import: 'default'
});

const galleryImages = Object.entries(imageModules).map(([path], index) => ({
  id: index + 1,
  image: path.replace('/public', '')
}));

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold tracking-tight mb-4">
          Club <span className="text-electric-500">Gallery</span>
        </h1>
        <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
          Take a look at some of the memorable moments from our workshops, hackathons, and seminars.
        </p>
      </div>

      {/* Gallery Grid: 4 pictures per row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {galleryImages.length > 0 ? (
          galleryImages.map((img, index) => (
            <div
              key={index}
              onClick={() => setSelectedImage(img)}
              className="group cursor-pointer bg-white dark:bg-darkbg-800 rounded-3xl overflow-hidden border border-silver-200 dark:border-zinc-800 hover:border-electric-500 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="h-64 overflow-hidden relative bg-black flex items-center justify-center">
                <img
                  src={img.image}
                  alt={`Gallery item ${img.id}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500 py-12">
            No images in the gallery folder yet. Add images to "frontend/public/images/gallery" to see them here!
          </p>
        )}
      </div>

      {/* Lightbox / Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-darkbg-900 border border-zinc-800 rounded-3xl overflow-hidden"
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/55 text-white flex items-center justify-center hover:bg-electric-500 transition-colors"
            >
              ✕
            </button>
            <img
              src={selectedImage.image}
              alt={`Gallery item ${selectedImage.id}`}
              className="w-full h-[75vh] object-contain bg-black"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;