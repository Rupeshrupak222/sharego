import React from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const TeamSection: React.FC = () => {
  const teamMembers = [
    {
      name: 'R.K. Rupak',
      role: 'Founder & CEO',
      bio: 'Visionary leader with 8+ years in tech. Passionate about sustainable transportation and connecting communities.',
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#',
        email: 'rupak@sharego.com'
      }
    },
    {
      name: 'Shubhi',
      role: 'Lead Developer',
      bio: 'Full-stack developer specializing in React, Node.js, and mobile development. Expert in scalable architecture.',
      avatar: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#',
        email: 'shubhi@sharego.com'
      }
    },
    {
      name: 'Abhishek',
      role: 'Senior Developer',
      bio: 'Backend specialist with expertise in microservices, databases, and cloud infrastructure. AI/ML enthusiast.',
      avatar: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#',
        email: 'abhishek@sharego.com'
      }
    }
  ];

  return (
    <section id="team" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Meet Our Team
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            The passionate minds behind ShareGo, working tirelessly to revolutionize how people travel together. 
            We're building the future of sustainable transportation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
              {/* Avatar */}
              <div className="relative mb-6">
                <div className="w-24 h-24 mx-auto rounded-full overflow-hidden ring-4 ring-green-500/20 group-hover:ring-green-500/40 transition-all duration-300">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
              </div>

              {/* Info */}
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {member.name}
              </h3>
              <p className="text-green-600 dark:text-green-400 font-semibold mb-4">
                {member.role}
              </p>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-6">
                {member.bio}
              </p>

              {/* Social Links */}
              <div className="flex justify-center space-x-3">
                <a
                  href={member.social.linkedin}
                  className="w-10 h-10 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center hover:bg-blue-500 hover:text-white transition-colors group/social"
                >
                  <Linkedin className="w-5 h-5 text-blue-600 dark:text-blue-400 group-hover/social:text-white" />
                </a>
                <a
                  href={member.social.twitter}
                  className="w-10 h-10 bg-sky-100 dark:bg-sky-900/20 rounded-full flex items-center justify-center hover:bg-sky-500 hover:text-white transition-colors group/social"
                >
                  <Twitter className="w-5 h-5 text-sky-600 dark:text-sky-400 group-hover/social:text-white" />
                </a>
                <a
                  href={member.social.github}
                  className="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-800 hover:text-white transition-colors group/social"
                >
                  <Github className="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover/social:text-white" />
                </a>
                <a
                  href={`mailto:${member.social.email}`}
                  className="w-10 h-10 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center hover:bg-green-500 hover:text-white transition-colors group/social"
                >
                  <Mail className="w-5 h-5 text-green-600 dark:text-green-400 group-hover/social:text-white" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Join Team CTA */}
        <div className="mt-16 bg-gradient-to-r from-green-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Want to Join Our Team?
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            We're always looking for talented individuals who share our passion for innovation and sustainable transportation. 
            Join us in building the future of ride-sharing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              View Open Positions
            </button>
            <button className="border-2 border-green-600 text-green-600 dark:text-green-400 dark:border-green-400 hover:bg-green-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Send Your Resume
            </button>
          </div>
        </div>

        {/* Company Values */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🌱</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Sustainability</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              We believe in creating a greener future through shared mobility and reduced carbon emissions.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🤝</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Community</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Building strong connections between riders and creating a supportive transportation community.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">⚡</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Innovation</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Continuously pushing boundaries with cutting-edge technology and user-centric solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;