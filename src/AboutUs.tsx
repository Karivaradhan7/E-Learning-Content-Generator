import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Linkedin, Github, MapPin, Star, Users, Brain, Book, HelpCircle } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

interface TeamMember {
  name: string;
  role: string;
  description: string;
  image: string;
}

interface ContactInfo {
  platform: string;
  icon: React.ReactNode;
  value: string;
  link?: string;
}

interface CoreValue {
  icon: React.ReactNode;
  title: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Aaron Sonnie',
    role: 'Founder & Lead Developer',
    description: 'Passionate about revolutionizing education through innovative technology solutions.',
    image: '/team/aaron.png'
  },
  {
    name: 'Sona Daison',
    role: 'Co-Founder & Frontend Developer',
    description: 'Creating beautiful and intuitive user experiences that make learning enjoyable.',
    image: '/team/sona.png'
  },
  {
    name: 'Karivaradhan',
    role: 'Co-Founder & Lead Engineer',
    description: 'Ensuring the highest quality and reliability in our educational platform.',
    image: '/team/kari.png'
  },
  {
    name: 'Singapuram Thrithwik',
    role: 'Co-Founder & Database Engineer',
    description: 'Optimizing data infrastructure for seamless learning experiences.',
    image: '/team/thrithwik.png'
  }
];

const contactInfo: ContactInfo[] = [
  {
    platform: 'Email',
    icon: <Mail className="w-5 h-5" />,
    value: 'aaronsonnie@gmail.com',
    link: 'mailto:aaronsonnie@gmail.com'
  },
  {
    platform: 'LinkedIn',
    icon: <Linkedin className="w-5 h-5" />,
    value: 'linkedin.com/in/aaron-sonnie',
    link: 'https://linkedin.com/in/aaron-sonnie'
  },
  {
    platform: 'GitHub',
    icon: <Github className="w-5 h-5" />,
    value: 'github.com/aaronsonnie',
    link: 'https://github.com/aaronsonnie'
  }
];

const locations = [
  'Coimbatore, Tamil Nadu'
];

const coreValues: CoreValue[] = [
  { icon: <Star className="w-6 h-6" />, title: 'Innovation' },
  { icon: <Users className="w-6 h-6" />, title: 'Collaboration' },
  { icon: <Brain className="w-6 h-6" />, title: 'User-Centric Approach' },
  { icon: <Book className="w-6 h-6" />, title: 'Continuous Learning' }
];

const AboutUs: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const [activeTab, setActiveTab] = useState<'team' | 'about' | 'contact' | 'legal'>('team');
  const navigate = useNavigate();
  const location = useLocation();

  // Only show on home and features pages
  const shouldShow = ['/', '/features'].includes(location.pathname);

  if (!shouldShow) return null;

  const openModal = (member: TeamMember) => {
    setSelectedMember(member);
  };

  const TabButton: React.FC<{ tab: typeof activeTab; label: string }> = ({ tab, label }) => (
    <button
      onClick={() => setActiveTab(tab)}
      className={`px-4 py-2 rounded-lg transition-colors ${
        activeTab === tab
          ? 'bg-blue-600 text-white'
          : 'text-blue-600 hover:bg-blue-50'
      }`}
    >
      {label}
    </button>
  );

  return (
    <div className="fixed top-4 right-4 flex items-center gap-4 z-50">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => navigate('/support')}
        className="px-4 py-2 bg-blue-600 text-white rounded-full 
                   shadow-lg hover:bg-blue-700 transition-all duration-300
                   hover:shadow-blue-300/50 flex items-center gap-2"
      >
        <HelpCircle className="w-5 h-5" />
        Support
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(true)}
        className="px-4 py-2 bg-blue-600 text-white rounded-full 
                   shadow-lg hover:bg-blue-700 transition-all duration-300
                   hover:shadow-blue-300/50"
      >
        About Us
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-xl p-6 w-full max-w-4xl max-h-[90vh] overflow-y-auto"
              onClick={e => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-blue-900">About Aptora</h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-blue-50 rounded-full transition-colors"
                >
                  <X className="w-6 h-6 text-blue-600" />
                </button>
              </div>

              <div className="flex space-x-2 mb-6">
                <TabButton tab="team" label="Our Team" />
                <TabButton tab="about" label="Mission & Values" />
                <TabButton tab="contact" label="Contact" />
                <TabButton tab="legal" label="Legal" />
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                >
                  {activeTab === 'team' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                      {teamMembers.map((member, index) => (
                        <motion.div
                          key={member.name}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          whileHover={{ scale: 1.05 }}
                          className="bg-blue-50 rounded-xl p-4 cursor-pointer"
                          onClick={() => openModal(member)}
                        >
                          <div className="aspect-square rounded-full overflow-hidden mb-4">
                            <img
                              src={member.image}
                              alt={member.name}
                              className="w-full h-full object-cover"
                              onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.src = 'https://via.placeholder.com/200x200.png?text=Team+Member';
                              }}
                            />
                          </div>
                          <h3 className="text-lg font-semibold text-blue-900">{member.name}</h3>
                          <p className="text-blue-600 text-sm">{member.role}</p>
                        </motion.div>
                      ))}
                    </div>
                  )}

                  {activeTab === 'about' && (
                    <div className="space-y-8">
                      <div>
                        <h3 className="text-xl font-semibold text-blue-900 mb-3">Mission</h3>
                        <p className="text-gray-600">
                          Empowering learners through AI-driven content generation for a smarter, faster learning experience.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold text-blue-900 mb-3">Vision</h3>
                        <p className="text-gray-600">
                          To become the most innovative and accessible e-learning platform globally.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold text-blue-900 mb-4">Core Values</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {coreValues.map((value, index) => (
                            <div
                              key={value.title}
                              className="flex items-center space-x-3 bg-blue-50 p-4 rounded-lg"
                            >
                              <div className="text-blue-600">{value.icon}</div>
                              <span className="text-blue-900 font-medium">{value.title}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold text-blue-900 mb-3">Locations</h3>
                        <div className="space-y-2">
                          {locations.map((location, index) => (
                            <div key={index} className="flex items-center space-x-2 text-gray-600">
                              <MapPin className="w-5 h-5 text-blue-600" />
                              <span>{location}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === 'contact' && (
                    <div className="space-y-6">
                      {contactInfo.map((info, index) => (
                        <a
                          key={index}
                          href={info.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-3 p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
                        >
                          <div className="text-blue-600">{info.icon}</div>
                          <div>
                            <div className="font-medium text-blue-900">{info.platform}</div>
                            <div className="text-blue-600">{info.value}</div>
                          </div>
                        </a>
                      ))}
                    </div>
                  )}

                  {activeTab === 'legal' && (
                    <div className="space-y-8">
                      <div>
                        <h3 className="text-xl font-semibold text-blue-900 mb-3">Privacy Policy</h3>
                        <p className="text-gray-600">
                          We prioritize user data protection and transparency. Our platform implements
                          industry-standard security measures to protect your personal information and
                          learning data.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold text-blue-900 mb-3">Terms of Service</h3>
                        <p className="text-gray-600">
                          Users agree to responsibly use the platform for educational purposes only.
                          Any misuse or violation of our terms may result in account suspension or
                          termination.
                        </p>
                      </div>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>

              <AnimatePresence>
                {selectedMember && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
                    onClick={() => setSelectedMember(null)}
                  >
                    <motion.div
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.9, opacity: 0 }}
                      className="bg-white rounded-xl p-6 max-w-md w-full"
                      onClick={e => e.stopPropagation()}
                    >
                      <div className="flex justify-between items-center mb-4">
                        <h3 className="text-xl font-bold text-blue-900">{selectedMember.name}</h3>
                        <button
                          onClick={() => setSelectedMember(null)}
                          className="p-2 hover:bg-blue-50 rounded-full transition-colors"
                        >
                          <X className="w-5 h-5 text-blue-600" />
                        </button>
                      </div>
                      <div className="aspect-square w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
                        <img
                          src={selectedMember.image}
                          alt={selectedMember.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = 'https://via.placeholder.com/200x200.png?text=Team+Member';
                          }}
                        />
                      </div>
                      <p className="text-blue-600 font-medium mb-2">{selectedMember.role}</p>
                      <p className="text-gray-600">{selectedMember.description}</p>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AboutUs;