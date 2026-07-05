import executivesData from '../data/executives.json';

const Executives = () => {
  const execs = executivesData;

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-16 text-center animate-fade-in">
        Current <span className="text-electric-500">Executive Body</span>
      </h1>
      
      {Object.keys(execs).map((session) => {
        const members = execs[session] || [];
        const president = members.find(m => m.position.toLowerCase() === 'president');
        const moderator = members.find(m => m.position.toLowerCase() === 'moderator');
        const otherMembers = members.filter(m => m !== president && m !== moderator);

        return (
          <div key={session} className="mb-24">
            <h2 className="text-3xl font-bold mb-12 text-center text-electric-500 border-b border-silver-200 dark:border-darkbg-700 pb-4 max-w-md mx-auto">
              {session} Executive Body
            </h2>

            {/* Top Leaders (President & Moderator in same row) */}
            {(president || moderator) && (
              <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-16 max-w-4xl mx-auto">
                {president && (
                  <div className="bg-white dark:bg-darkbg-800 rounded-3xl p-4 border border-silver-200 dark:border-darkbg-700 shadow-xl shadow-electric-500/5 text-center max-w-sm w-full transform hover:scale-[1.02] transition-transform duration-300">
                    <div className="w-full aspect-square mx-auto bg-silver-200 dark:bg-darkbg-700 rounded-2xl mb-6 overflow-hidden shadow-inner border border-silver-300 dark:border-darkbg-600">
                      {president.image ? (
                        <img 
                          src={president.image} 
                          alt={president.name} 
                          className="w-full h-full object-cover object-center"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = 'https://via.placeholder.com/300?text=President';
                          }}
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-gray-400">No Image</div>
                      )}
                    </div>
                    <h3 className="font-bold text-2xl tracking-tight text-gray-900 dark:text-white">{president.name}</h3>
                    <p className="text-electric-500 font-semibold text-lg mt-1 tracking-wide uppercase">{president.position}</p>
                    {president.contact && (
                      <a 
                        href={`mailto:${president.contact}`} 
                        className="text-sm mt-3 block text-gray-500 dark:text-gray-400 hover:text-electric-500 dark:hover:text-electric-400 transition-colors duration-200"
                      >
                        {president.contact}
                      </a>
                    )}
                  </div>
                )}

                {moderator && (
                  <div className="bg-white dark:bg-darkbg-800 rounded-3xl p-4 border border-silver-200 dark:border-darkbg-700 shadow-xl shadow-electric-500/5 text-center max-w-sm w-full transform hover:scale-[1.02] transition-transform duration-300">
                    <div className="w-full aspect-square mx-auto bg-silver-200 dark:bg-darkbg-700 rounded-2xl mb-6 overflow-hidden shadow-inner border border-silver-300 dark:border-darkbg-600">
                      {moderator.image ? (
                        <img 
                          src={moderator.image} 
                          alt={moderator.name} 
                          className="w-full h-full object-cover object-center"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = 'https://via.placeholder.com/300?text=Moderator';
                          }}
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-gray-400">No Image</div>
                      )}
                    </div>
                    <h3 className="font-bold text-2xl tracking-tight text-gray-900 dark:text-white">{moderator.name}</h3>
                    <p className="text-electric-500 font-semibold text-lg mt-1 tracking-wide uppercase">{moderator.position}</p>
                    {moderator.contact && (
                      <a 
                        href={`mailto:${moderator.contact}`} 
                        className="text-sm mt-3 block text-gray-500 dark:text-gray-400 hover:text-electric-500 dark:hover:text-electric-400 transition-colors duration-200"
                      >
                        {moderator.contact}
                      </a>
                    )}
                  </div>
                )}
              </div>
            )}

            {/* Other Members (3 per row) */}
            {otherMembers.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto justify-items-center">
                {otherMembers.map((member, i) => (
                  <div 
                    key={i} 
                    className="bg-white dark:bg-darkbg-800 rounded-3xl p-4 border border-silver-200 dark:border-darkbg-700 text-center transform hover:scale-[1.01] transition-transform duration-300 flex flex-col justify-between max-w-sm w-full"
                  >
                    <div>
                      <div className="w-full aspect-square mx-auto bg-silver-200 dark:bg-darkbg-700 rounded-2xl mb-6 overflow-hidden border border-silver-300 dark:border-darkbg-600">
                        {member.image ? (
                          <img 
                            src={member.image} 
                            alt={member.name} 
                            className="w-full h-full object-cover object-center"
                            onError={(e) => {
                              e.target.onerror = null;
                              e.target.src = 'https://via.placeholder.com/150?text=Member';
                            }}
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-gray-400">No Image</div>
                        )}
                      </div>
                      <h3 className="font-semibold text-xl text-gray-900 dark:text-white">{member.name}</h3>
                      <p className="text-electric-500 font-medium mt-1">{member.position}</p>
                    </div>
                    {member.contact && (
                      <a 
                        href={`mailto:${member.contact}`} 
                        className="text-sm mt-3 block text-gray-500 dark:text-gray-400 hover:text-electric-500 dark:hover:text-electric-400 transition-colors duration-200 break-all"
                      >
                        {member.contact}
                      </a>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Executives;