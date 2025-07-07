import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export default function Footer() {
  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/sean-andrew-barry',
      label: 'GitHub'
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/sean-andrew-barry',
      label: 'LinkedIn'
    },
    {
      icon: Mail,
      href: 'mailto:sean.barry.developer@gmail.com',
      label: 'Email'
    }
  ];

  const quickLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Projects', href: '/projects' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Sean Andrew Barry</h3>
            <p className="text-gray-400 leading-relaxed mb-6 max-w-md">
              Full-stack developer passionate about creating exceptional digital 
              experiences. Always learning, always building, always improving.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 transition-all duration-300 hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get in Touch</h4>
            <div className="space-y-2 text-gray-400">
              <p>Cascade, Idaho</p>
              <a
                href="mailto:sean.barry.developer@gmail.com"
                className="hover:text-white transition-colors duration-300"
              >
                sean.barry.developer@gmail.com
              </a>
              <p>Available for freelance work</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Sean Andrew Barry. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm flex items-center gap-1 mt-4 md:mt-0">
            Made with <Heart size={16} className="text-red-500" /> and lots of coffee
          </p>
        </div>
      </div>
    </footer>
  );
}