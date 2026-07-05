import React from 'react';

const renderTextWithLinks = (text) => {
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  return text.split(urlRegex).map((part, index) => {
    if (part.match(urlRegex)) {
      return <a key={index} href={part} target="_blank" rel="noopener noreferrer" className="text-electric-500 hover:underline font-semibold break-all">{part}</a>;
    }
    return part;
  });
};

const Join = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12 relative z-10">
      {/* Top Image Naturally Fitted */}
      <div className="w-full mb-12 flex justify-center">
        <img 
          src="/images/join/joinnow.jpg" 
          alt="Join BUP CoPC Banner" 
          className="w-full h-auto rounded-3xl shadow-xl border border-silver-200 dark:border-zinc-800"
        />
      </div>

      <div className="bg-white/60 dark:bg-black/60 backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20 dark:border-white/10">
        
        {/* Simple Red Text Status */}
        <div className="mb-10 text-center">
          <p className="text-red-600 dark:text-red-500 font-bold text-xl uppercase tracking-wide">
            Current Recruitment status: Close
          </p>
        </div>

        <div className="text-gray-800 dark:text-gray-200 leading-relaxed space-y-6 text-lg font-medium">
          <p>
            The <strong>BUP Computer Programming Club (COPC)</strong> proudly presents <strong>recruit.invoke()</strong>, the official recruitment event for students who want to be part of a vibrant community focused on technology, creativity, and teamwork.
          </p>
          <p>
            <strong>COPC</strong> is not limited to programming alone. It is a platform where students can <strong>develop technical skills, organize events, create digital content, and contribute creatively</strong> to club activities. Through <strong>recruit.invoke()</strong>, we are looking for enthusiastic individuals who are eager to learn, collaborate, and make an impact.<br/>
            Whether you are passionate about <strong>coding, design, photography, media production, or event organization</strong>, COPC offers opportunities to grow and work with a talented team.
          </p>

          <h3 className="text-3xl font-bold text-black dark:text-white mt-12 mb-6 border-b border-gray-300 dark:border-gray-700 pb-3">
            What You Can Do in COPC
          </h3>
          <p>As a member of COPC, you will get the opportunity to:</p>
          <ul className="list-disc pl-6 space-y-3">
            <li>Help organize tech events, workshops, and competitions</li>
            <li>Work on graphics design and visual content for club activities</li>
            <li>Contribute to photography and media coverage during events</li>
            <li>Manage social media and digital promotion</li>
            <li>Develop leadership, creativity, and teamwork skills</li>
          </ul>

          <h3 className="text-3xl font-bold text-black dark:text-white mt-12 mb-6 border-b border-gray-300 dark:border-gray-700 pb-3">
            Teams You Can Join
          </h3>
          <p>Members may contribute in different areas such as:</p>
          <ul className="list-disc pl-6 space-y-3">
            <li><strong>Competitive Programming</strong> – coding practice and problem solving</li>
            <li><strong>Event Management</strong> – organizing contests, workshops, and seminars</li>
            <li><strong>Software Development</strong> – building web and software projects</li>
            <li><strong>Cyber Security</strong> – CTF practice, security fundamentals, ethical hacking basics</li>
            <li><strong>Graphics & Design</strong> – poster design, social media graphics, editing</li>
            <li><strong>Media & Content</strong> – event photography, videography, content creation</li>
            <li><strong>Public Relations</strong> – connecting with sponsors and external partners</li>
            <li><strong>Operations</strong> – planning, coordination, and logistics</li>
          </ul>

          <h3 className="text-3xl font-bold text-black dark:text-white mt-12 mb-6 border-b border-gray-300 dark:border-gray-700 pb-3">
            Recruitment Process
          </h3>
          <p>
            Applicants will first <strong>register for the recruitment</strong> by 24 March 2026, after which the <strong>COPC team will review and shortlist CVs</strong> based on applicants’ interests and skills. Shortlisted candidates will be invited for an <strong>offline viva</strong>, where their motivation and abilities will be assessed. Finally, selected candidates will be officially <strong>onboarded as members of COPC</strong>.
          </p>

          <h3 className="text-3xl font-bold text-black dark:text-white mt-12 mb-6 border-b border-gray-300 dark:border-gray-700 pb-3">
            Important Dates
          </h3>
          <ul className="space-y-3">
            <li><strong>Registration Starts:</strong> 8 March 2026</li>
            <li><strong>Registration Ends:</strong> 24 March 2026</li>
            <li><strong>Offline Viva:</strong> Will be announced</li>
          </ul>

          <div className="mt-12 p-8 bg-black/5 dark:bg-white/5 rounded-2xl border border-black/10 dark:border-white/10 text-center backdrop-blur-md">
            <p className="font-bold text-2xl mb-3 text-black dark:text-white">Application Form</p>
            <div className="text-xl">
              {renderTextWithLinks('https://forms.gle/fC45AXNckomikKhn7')}
            </div>
          </div>

          <p className="text-center font-bold mt-12 text-2xl text-electric-500">
            Join recruit.invoke(), and be part of a community where technology, creativity, and collaboration come together.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Join;
