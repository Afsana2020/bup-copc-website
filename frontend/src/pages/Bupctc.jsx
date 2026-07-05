const Bupctc = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      {/* Top Banner Image */}
      <div className="rounded-3xl overflow-hidden mb-12 border border-silver-200 dark:border-zinc-800 shadow-xl max-h-[450px] bg-black">
        <img 
          src="/images/permanent/ab1.jpg" 
          alt="BUP CSE Tech Carnival 2025" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="space-y-8 text-black dark:text-silver-200">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-electric-500">
          DSI Presents BUP CSE Tech Carnival 2025
        </h1>
        <p className="text-electric-500 font-semibold text-lg">
          co-sponsored by Brain Station 23: Where Technology Meets Talent
        </p>

        <div className="h-px bg-gradient-to-r from-transparent via-electric-500/30 to-transparent"></div>

        <p className="text-lg leading-relaxed">
          BUP Computer Programming Club (CoPC), under the supervision of the Department of CSE, successfully organized the event “DSI Presents BUP CSE Tech Carnival 2025 co-sponsored by Brain Station 23: Where Technology Meets Talent” on 24–25 September 2025 at BUP Campus. The two-day carnival brought together enthusiastic participation from leading universities across Bangladesh, making it a vibrant platform for showcasing innovation and talent.
        </p>
        <p className="text-lg leading-relaxed">
          The carnival featured four major events: Competitive Programming, Capture the Flag, Hackathon, and a FIFA Gaming Tournament. Mr. Ajmat Iqbal, Group Director, REVE Systems Ltd. delivered an inspiring speech on preparing for IT jobs after graduation.
        </p>

        <div className="bg-silver-100 dark:bg-darkbg-800 rounded-3xl p-8 border border-silver-200 dark:border-zinc-800 space-y-6">
          <h2 className="text-2xl font-bold text-electric-500">
            Outstanding Performances & Winners (Prize Pool: BDT 110,000)
          </h2>
          <ul className="space-y-4 text-base">
            <li>
              <strong>• Hackathon:</strong> Champion Fardin Fayaz (DU), 1st Runner-up Ahammad Shawki (BUET), and 2nd Runner-up Suprio Paul (BUET)
            </li>
            <li>
              <strong>• Competitive Programming:</strong> Champion Syed Tamal (MIST), 1st Runner-up Yusuf Reza (MIST), and 2nd Runner-up Rashik Mahmud Mojumder (BUP).
            </li>
            <li>
              <strong>• Capture the Flag (CTF):</strong> Champion Mominul Islam (DU), 1st Runner-up SM Shahrier Emon (BUP), and 2nd Runner-up Dibba Jothy (DU)
            </li>
            <li>
              <strong>• Gaming Contest (FIFA):</strong> Champion Rakin Ahmed (BUP)
            </li>
          </ul>
        </div>

        <p className="text-lg leading-relaxed">
          We extend our heartfelt gratitude to our Title Sponsor, Dynamic Solution Innovators (DSI), our Gold Sponsor, Brain Station 23, and our Technical Partners—Knight Squad, Got My Host, and Programming Hero for their generous support. This carnival not only celebrated the spirit of competition but also demonstrated BUP’s commitment to nurturing the next generation of innovators, problem-solvers, and leaders in the digital age.
        </p>

        <div className="pt-8 text-center">
          <p className="text-gray-600 dark:text-gray-400 mb-3">
            For segments details visit:
          </p>
          <a 
            href="https://bupcopc.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-electric-500 hover:bg-electric-600 text-white rounded-2xl font-bold transition-all shadow-lg hover:shadow-electric-500/25"
          >
            BUPCTC Website
          </a>
    </div>
      </div>
    </div>
  );
};

export default Bupctc;
