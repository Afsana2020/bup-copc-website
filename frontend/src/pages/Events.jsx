import { useState } from 'react';
import { X, Calendar, ArrowRight } from 'lucide-react';
import { activitiesData } from '../data/activities';

const renderTextWithLinks = (text) => {
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  return text.split(urlRegex).map((part, index) => {
    if (part.match(urlRegex)) {
      return <a key={index} href={part} target="_blank" rel="noopener noreferrer" className="text-electric-500 hover:underline break-all">{part}</a>;
    }
    return part;
  });
};

const Events = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          Events & <span className="text-electric-500">Activities</span>
        </h1>
        <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
          Explore our latest events, workshops, contests, and other amazing activities.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {activitiesData.map((event) => (
          <div key={event.id} className="bg-white dark:bg-darkbg-800 rounded-3xl overflow-hidden border border-silver-200 dark:border-zinc-800 hover:border-electric-500 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col">
            <div className="h-64 overflow-hidden relative">
              <img 
                src={event.image} 
                alt={event.title} 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <div className="inline-flex items-center gap-2 mb-3 text-electric-500">
                <Calendar className="w-4 h-4" />
                <span className="font-semibold text-sm tracking-wider uppercase">{event.date}</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-black dark:text-white leading-tight">
                {event.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
                {event.caption}
              </p>
              {event.link ? (
                <a 
                  href={event.link}
                  className="inline-flex justify-center items-center gap-2 w-full py-3 bg-electric-500/10 hover:bg-electric-500 text-electric-500 hover:text-white rounded-xl font-semibold transition-all group"
                >
                  Show Details
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              ) : (
                <button 
                  onClick={() => setSelectedEvent(event)}
                  className="inline-flex justify-center items-center gap-2 w-full py-3 bg-electric-500/10 hover:bg-electric-500 text-electric-500 hover:text-white rounded-xl font-semibold transition-all group"
                >
                  Show Details
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Modal for Details */}
      {selectedEvent && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setSelectedEvent(null)}
          ></div>
          <div className="bg-white dark:bg-darkbg-800 w-full max-w-3xl rounded-3xl overflow-hidden relative z-10 shadow-2xl max-h-[90vh] flex flex-col">
            <button 
              onClick={() => setSelectedEvent(null)}
              className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-electric-500 text-white rounded-full backdrop-blur-md transition-colors z-20"
            >
              <X className="w-5 h-5" />
            </button>
            
            <div className="h-48 sm:h-64 relative flex-shrink-0">
              <img 
                src={selectedEvent.image} 
                alt={selectedEvent.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-6 md:p-8">
                <div>
                  <span className="text-electric-400 font-semibold text-sm tracking-wider uppercase block mb-2">
                    {selectedEvent.date}
                  </span>
                  <h2 className="text-2xl md:text-4xl font-bold text-white leading-tight">
                    {selectedEvent.title}
                  </h2>
                </div>
              </div>
            </div>
            
            <div className="p-6 md:p-8 overflow-y-auto custom-scrollbar flex-grow">
              <div className="prose dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-wrap">
                {renderTextWithLinks(selectedEvent.details)}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Events;