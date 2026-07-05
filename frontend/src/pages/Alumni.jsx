import alumniData from '../data/alumni.json';

const Alumni = () => {
  const alumni = alumniData;

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-5xl font-bold tracking-tight mb-12">Alumni & Past Executives</h1>
      {Object.keys(alumni).map((session) => (
        <div key={session} className="mb-16">
          <h2 className="text-2xl font-semibold mb-8 border-b border-silver-300 dark:border-darkbg-700 pb-4">{session} Executive Body</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {alumni[session]?.map((member, i) => (
              <div key={i} className="bg-white dark:bg-darkbg-800 rounded-3xl p-8 border border-silver-200 dark:border-darkbg-700 text-center">
                <div className="w-32 h-32 mx-auto bg-silver-200 dark:bg-darkbg-700 rounded-2xl mb-6" />
                <h3 className="font-semibold text-xl">{member.name}</h3>
                <p className="text-electric-500 mt-1">{member.position}</p>
                {member.contact && <p className="text-sm mt-4 text-gray-500">{member.contact}</p>}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Alumni;