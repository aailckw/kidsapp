'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <header className={`${isScrolled ? 'bg-purple-600 shadow-md' : 'bg-purple-700'} text-white fixed w-full z-10 transition-all duration-300`}>
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold flex items-center space-x-1">
            <span className="text-yellow-300">Kids</span>
            <span>Learn</span>
            <span className="bg-yellow-300 text-purple-800 text-xs px-1.5 py-0.5 rounded-full font-bold ml-1">BETA</span>
          </div>
          
          <div className="hidden md:flex space-x-4 items-center">
            <a href="#features" className="text-white hover:text-yellow-200 px-3 py-2">Features</a>
            <a href="#age-groups" className="text-white hover:text-yellow-200 px-3 py-2">Age Groups</a>
            <a href="#testimonials" className="text-white hover:text-yellow-200 px-3 py-2">Testimonials</a>
            <Link 
              href="/login" 
              className="bg-white text-purple-700 px-4 py-2 rounded hover:bg-gray-100 transition-colors"
            >
              Login
            </Link>
            <Link 
              href="/register" 
              className="bg-yellow-400 text-purple-800 px-4 py-2 rounded hover:bg-yellow-300 transition-colors shadow-sm"
            >
              Register
            </Link>
          </div>

          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-purple-800 pb-3">
            <div className="px-4 py-2 space-y-2">
              <a href="#features" 
                className="block text-white hover:bg-purple-900 px-3 py-2 rounded"
                onClick={() => setMobileMenuOpen(false)}
              >
                Features
              </a>
              <a href="#age-groups" 
                className="block text-white hover:bg-purple-900 px-3 py-2 rounded"
                onClick={() => setMobileMenuOpen(false)}
              >
                Age Groups
              </a>
              <a href="#testimonials" 
                className="block text-white hover:bg-purple-900 px-3 py-2 rounded"
                onClick={() => setMobileMenuOpen(false)}
              >
                Testimonials
              </a>
              <div className="flex space-x-2 pt-2">
                <Link 
                  href="/login" 
                  className="flex-1 bg-white text-purple-700 px-4 py-2 rounded text-center"
                >
                  Login
                </Link>
                <Link 
                  href="/register" 
                  className="flex-1 bg-yellow-400 text-purple-800 px-4 py-2 rounded text-center"
                >
                  Register
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>
      
      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-purple-700 to-purple-800 text-white py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                  Make Learning Fun For Your Child
                </h1>
                <p className="text-lg md:text-xl mb-8 text-purple-100">
                  Interactive curriculum designed to engage children ages 2–12 in a fun, gamified learning experience.
                </p>
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start">
                  <Link 
                    href="/register" 
                    className="bg-yellow-400 text-purple-900 px-6 py-3 rounded-md font-medium text-lg shadow-lg hover:bg-yellow-300 transition-colors transform hover:-translate-y-1 hover:shadow-xl duration-300"
                  >
                    Start Learning Now
                  </Link>
                  <a 
                    href="#features" 
                    className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-md font-medium text-lg hover:bg-white hover:text-purple-800 transition-colors"
                  >
                    Learn More
                  </a>
                </div>
                <div className="mt-8 text-purple-200 text-sm flex items-center justify-center md:justify-start">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  No credit card required
                </div>
              </div>
              <div className="md:w-1/2 flex justify-center md:justify-end">
                <div className="relative w-full max-w-md h-64 md:h-80">
                  {/* This is a placeholder - in a real app you'd use an actual image */}
                  <div className="absolute inset-0 bg-purple-500 rounded-lg shadow-xl overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-purple-600 opacity-75"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-white text-center">
                        <div className="text-5xl mb-2">👨‍👩‍👧‍👦</div>
                        <div className="text-xl font-bold">Interactive Learning</div>
                        <div className="text-sm opacity-75">Preview would show app screenshots</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 w-full">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
              <path fill="#f9fafb" fillOpacity="1" d="M0,224L60,224C120,224,240,224,360,202.7C480,181,600,139,720,149.3C840,160,960,224,1080,240C1200,256,1320,224,1380,208L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
            </svg>
          </div>
        </section>
        
        {/* Features Section */}
        <section id="features" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-purple-800 mb-4">
                Why Parents & Kids Love Us
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our platform is designed to make learning engaging while building essential skills.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: "🎮",
                  title: "Gamified Learning",
                  description: "Interactive games that make learning fun and engaging for children of all ages."
                },
                {
                  icon: "📊",
                  title: "Progress Tracking",
                  description: "Detailed insights into your child's learning journey with personalized reports."
                },
                {
                  icon: "🏆",
                  title: "Achievement System",
                  description: "Reward system that motivates children to continue learning and achieve more."
                }
              ].map((feature, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-purple-700 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Age Groups */}
        <section id="age-groups" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-purple-800 mb-4">
                Learning For Every Age
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Curriculum designed specifically for each developmental stage.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  color: "bg-green-500",
                  title: "Early Explorers",
                  ages: "Ages 2-4",
                  icon: "🧸",
                  description: "Interactive play and basic concepts through colorful animations."
                },
                {
                  color: "bg-blue-500",
                  title: "Emerging Learners",
                  ages: "Ages 5-7",
                  icon: "📚",
                  description: "Structured tasks and foundation skills building."
                },
                {
                  color: "bg-orange-500",
                  title: "Independent Learners",
                  ages: "Ages 8-10",
                  icon: "🔍",
                  description: "Deeper content and projects that foster creativity."
                },
                {
                  color: "bg-purple-500",
                  title: "Young Achievers",
                  ages: "Ages 11-12",
                  icon: "🚀",
                  description: "Critical thinking and preparation for middle school."
                }
              ].map((group, index) => (
                <div key={index} className="bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow duration-300 transform hover:-translate-y-1 duration-300">
                  <div className={`${group.color} p-4 text-white rounded-t-lg`}>
                    <div className="flex justify-between items-center">
                      <h3 className="text-xl font-bold">{group.title}</h3>
                      <span className="text-3xl">{group.icon}</span>
                    </div>
                    <p className="text-sm">{group.ages}</p>
                  </div>
                  <div className="p-4">
                    <p className="text-gray-600 mb-4">{group.description}</p>
                    <Link 
                      href="/register" 
                      className={`inline-block px-4 py-2 rounded text-white ${group.color} hover:opacity-90 transition text-sm`}
                    >
                      Explore Activities
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Testimonials Section */}
        <section id="testimonials" className="py-16 bg-purple-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-purple-800 mb-4">
                What Parents Say
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Join thousands of satisfied families who use KidsLearn every day.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  quote: "My son loves the interactive games and doesn't even realize he's learning important skills!",
                  name: "Sarah Johnson",
                  role: "Mother of 6-year-old"
                },
                {
                  quote: "The progress tracking helps me understand exactly what my daughter is learning and where she needs help.",
                  name: "Michael Thomas",
                  role: "Father of 9-year-old"
                },
                {
                  quote: "KidsLearn has made our homeschooling journey so much easier with its structured curriculum.",
                  name: "Emily Davis",
                  role: "Mother of three"
                }
              ].map((testimonial, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-purple-100">
                  <div className="text-purple-700 mb-4">
                    <svg className="w-10 h-10 text-purple-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>
                  <p className="text-gray-600 mb-4 italic">{testimonial.quote}</p>
                  <div>
                    <p className="font-bold text-purple-800">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="bg-gradient-to-r from-purple-600 to-purple-800 py-16 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Start Your Child's Learning Journey?
            </h2>
            <p className="text-lg text-purple-100 mb-8 max-w-2xl mx-auto">
              Create an account today and discover why thousands of families choose KidsLearn.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link 
                href="/register" 
                className="bg-yellow-400 text-purple-900 px-8 py-4 rounded-md font-bold text-lg shadow-lg hover:bg-yellow-300 transition-colors"
              >
                Create Free Account
              </Link>
              <Link 
                href="/login" 
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-white hover:text-purple-800 transition-colors"
              >
                Sign In
              </Link>
            </div>
            <p className="mt-6 text-sm text-purple-200">No credit card required. Free plan available.</p>
          </div>
        </section>
      </main>
      
      <footer className="bg-purple-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold mb-4">
                <span className="text-yellow-300">Kids</span>Learn
              </div>
              <p className="text-purple-200 mb-4">
                Making learning fun and engaging for children ages 2-12.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-purple-200 hover:text-white">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-purple-200 hover:text-white">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-purple-200 hover:text-white">
                  <span className="sr-only">Instagram</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4">Features</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-purple-200 hover:text-white">Interactive Games</a></li>
                <li><a href="#" className="text-purple-200 hover:text-white">Progress Tracking</a></li>
                <li><a href="#" className="text-purple-200 hover:text-white">Learning Paths</a></li>
                <li><a href="#" className="text-purple-200 hover:text-white">Reward System</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-purple-200 hover:text-white">Support Center</a></li>
                <li><a href="#" className="text-purple-200 hover:text-white">Blog</a></li>
                <li><a href="#" className="text-purple-200 hover:text-white">FAQ</a></li>
                <li><a href="#" className="text-purple-200 hover:text-white">Contact Us</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-purple-200 hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="text-purple-200 hover:text-white">Terms of Service</a></li>
                <li><a href="#" className="text-purple-200 hover:text-white">Cookie Policy</a></li>
                <li><a href="#" className="text-purple-200 hover:text-white">GDPR Compliance</a></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-purple-800 text-center md:flex md:justify-between md:items-center">
            <p className="text-purple-300">© {new Date().getFullYear()} KidsLearn. All rights reserved.</p>
            <p className="text-purple-400 mt-4 md:mt-0 text-sm">Made with ❤️ for children's education</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
