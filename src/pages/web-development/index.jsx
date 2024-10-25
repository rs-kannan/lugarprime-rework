// import webDev from "../../assets/Web.mp4";
// import DeveloperCarousel from "./DeveloperCarousel";

// function WebDevelopment() {
//   // const videoRef = useRef(null);

//   // useEffect(() => {
//   //   if (videoRef.current) {
//   //     videoRef.current.playbackRate = 0.9; // Slow down the video (0.5x speed)
//   //   }
//   // }, []);

//   return (
//     <>
//       <div className="relative w-full h-screen overflow-hidden">
//         {/* Video Background */}
//         <video
//           // ref={videoRef}
//           src={webDev}
//           autoPlay
//           loop
//           muted
//           className="absolute top-0 left-0 w-full h-full object-cover"
//         />

//         {/* Text Overlay */}
//         <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-center space-y-6 px-4">
//           <h1 className="text-white text-4xl md:text-6xl font-bold mb-4">
//             Empowering Web Development
//           </h1>
//           <p className="text-white text-lg md:text-xl max-w-2xl mb-6">
//             Team of exceptional web developers offering end-to-end Web Development
//             Solutions for diverse industries.
//           </p>

//           <button className="bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-300">
//           Start Your Journey
//           </button>
//         </div>
//       </div>
//       <DeveloperCarousel />
//     </>
//   );
// }

// export default WebDevelopment;

import React from 'react'
import { Code, Layout, Smartphone, Globe, ChevronRight } from 'lucide-react'

const services = [
  { icon: <Code className="w-12 h-12 text-primary" />, title: 'Custom Web Development', description: 'Tailored solutions to meet your unique business needs' },
  { icon: <Layout className="w-12 h-12 text-primary" />, title: 'Responsive Design', description: 'Websites that look great on any device' },
  { icon: <Smartphone className="w-12 h-12 text-primary" />, title: 'Mobile-First Approach', description: 'Optimized for the growing mobile user base' },
  { icon: <Globe className="w-12 h-12 text-primary" />, title: 'E-commerce Solutions', description: 'Powerful online stores to boost your sales' },
]

const WebDevelopment = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">

      <main>
        <section className="py-40 bg-gradient-to-r from-red-500 to-blue-900 text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="md:flex md:items-center md:justify-between">
              <div className="md:w-1/2 mb-10 md:mb-0">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">Expert Web Development Solutions</h1>
                <p className="text-xl mb-8">We create stunning, high-performance websites that drive results for your business.</p>
                <button className="bg-background text-foreground px-6 py-3 rounded-full font-semibold hover:bg-opacity-90 transition duration-300">
                  Get Started
                </button>
              </div>
              <div className="md:w-1/2">
                <img src="../src/assets/Banner.png" alt="Web Development" className="rounded-lg shadow-xl" />
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-card text-card-foreground rounded-lg p-6 shadow-md hover:shadow-lg transition duration-300">
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <div className="md:flex md:items-center md:justify-between">
              <div className="md:w-1/2 mb-10 md:mb-0">
                <h2 className="text-3xl font-bold mb-6">Why Choose Us?</h2>
                <ul className="space-y-4">
                  {[
                    'Experienced team of developers',
                    'Cutting-edge technologies',
                    'Customized solutions for your business',
                    'Ongoing support and maintenance',
                  ].map((item, index) => (
                    <li key={index} className="flex items-center">
                      <ChevronRight className="w-5 h-5 text-primary mr-2" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="md:w-1/2">
                <img src="/placeholder.svg?height=400&width=600" alt="Our Team" className="rounded-lg shadow-xl" />
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">Ready to Start Your Project?</h2>
            <p className="text-xl mb-8">Let's discuss how we can help you achieve your goals.</p>
            <button className="bg-primary text-primary-foreground px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition duration-300">
              Contact Us
            </button>
          </div>
        </section>
      </main>

      <footer className="bg-primary text-primary-foreground py-10">
        <div className="container mx-auto px-4">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl font-bold mb-4">WebDev Pro</h2>
              <p className="max-w-xs">Expert web development solutions for businesses of all sizes.</p>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
              <div>
                <h3 className="text-lg font-semibold mb-4">Company</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="hover:text-secondary">About</a></li>
                  <li><a href="#" className="hover:text-secondary">Careers</a></li>
                  <li><a href="#" className="hover:text-secondary">Contact</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Services</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="hover:text-secondary">Web Design</a></li>
                  <li><a href="#" className="hover:text-secondary">Development</a></li>
                  <li><a href="#" className="hover:text-secondary">E-commerce</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Connect</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="hover:text-secondary">Twitter</a></li>
                  <li><a href="#" className="hover:text-secondary">LinkedIn</a></li>
                  <li><a href="#" className="hover:text-secondary">GitHub</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-primary-foreground/10 text-center">
            <p>&copy; 2024 WebDev Pro. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default WebDevelopment;
