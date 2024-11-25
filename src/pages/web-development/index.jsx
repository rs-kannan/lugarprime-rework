import React, { useState } from 'react';
import { Code, Layout, Smartphone, Globe, ChevronRight } from "lucide-react";
import whychooseus from "../../assets/banner1.png";
const services = [
  {
    icon: <Code className="w-12 h-12 text-secondary" />,
    title: "Custom Web Development",
    description: "Tailored solutions to meet your unique business needs",
  },
  {
    icon: <Layout className="w-12 h-12 text-secondary" />,
    title: "Responsive Design",
    description: "Websites that look great on any device",
  },
  {
    icon: <Smartphone className="w-12 h-12 text-secondary" />,
    title: "Mobile-First Approach",
    description: "Optimized for the growing mobile user base",
  },
  {
    icon: <Globe className="w-12 h-12 text-secondary" />,
    title: "E-commerce Solutions",
    description: "Powerful online stores to boost your sales",
  },
];

const features = [
  {
    title: "Experienced team of developers",
    description:
      "Our team consists of seasoned professionals with over a decade of experience in web development. We've successfully delivered hundreds of projects across various industries, bringing depth of knowledge and practical expertise to every project we undertake.",
  },
  {
    title: "Cutting-edge technologies",
    description:
      "We stay ahead of the curve by utilizing the latest technologies and frameworks. From React and Node.js to cloud computing and AI integration, we implement modern solutions that ensure your project is future-proof and performs at its best.",
  },
  {
    title: "Customized solutions for your business",
    description:
      "We don't believe in one-size-fits-all solutions. Our team works closely with you to understand your unique business needs and creates tailored solutions that align perfectly with your goals and objectives. Every line of code is written with your specific requirements in mind.",
  },
  {
    title: "Ongoing support and maintenance",
    description:
      "Our commitment doesn't end with deployment. We provide comprehensive support and maintenance services to ensure your website continues to perform optimally. Regular updates, security patches, and performance optimization are all part of our ongoing service package.",
  },
];

export default function WebDevelopment() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-background text-foreground py-10">
      <main>
      <div className="min-h-screen bg-background text-foreground py-10">
      <main>
      <section
  className="min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center px-4 sm:px-6 lg:px-8"
  style={{
    backgroundImage: `url(https://res.cloudinary.com/dovhqn80g/image/upload/v1732517920/webpageHerobanner.png)`,
  }}
>
  <div className="text-center">
    <h1
      className="text-6xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-transparent bg-clip-text 
             bg-gradient-to-r from-white via-red-00 to-white bg-[00%] animate-gradient-move font-mono"
    >
      WebSite Development
    </h1>
  </div>
</section>

     </main>
</div>

{/* space-top div */}
<div className="py-20"></div>
        {/* Our Services */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Our Services
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-card text-card-foreground rounded-lg p-6 shadow-md hover:shadow-lg transition duration-300"
                >
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
       {/* space-top div */}
      <div className="py-20"></div>
        {/* why and what is process */}
        <section className=" text-gray-100">
	<div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
		<div>
			<h2 className="text-3xl font-bold tracking-tight text-center sm:text-5xl text-gray-900">Web-Development ?</h2>
			{/* <p className="max-w-3xl mx-auto mt-4 text-xl text-center text-gray-600">Quando cetero his ne, eum admodum sapientem ut.</p> */}
		</div>
		<div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
			<div>
				<h3 className="text-2xl font-bold tracking-tight sm:text-3xl text-gray-900">What is WEB Development ?</h3>
				<p className="mt-3 text-lg text-gray-600">Web development involves designing, building, and maintaining websites or web applications. It encompasses both the visual aspects (front-end) and the server-side functionality (back-end) to create interactive and responsive user experiences.</p>
				<div className="mt-12 space-y-12">
					<div className="flex">
						<div className="flex-shrink-0">
							<div className="flex items-center justify-center w-12 h-12 rounded-md bg-red-400 text-gray-900">
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
								</svg>
							</div>
						</div>
						<div className="ml-4">
							<h4 className="text-lg font-medium leading-6 text-black">Front-End Development</h4>
							<p className="mt-2 text-gray-500">Focuses on the user interface, including layouts, colors, typography, and interactivity. Technologies like HTML, CSS, and JavaScript are used to create visually engaging and responsive designs for seamless user interaction.</p>
						</div>
					</div>
					<div className="flex">
						<div className="flex-shrink-0">
							<div className="flex items-center justify-center w-12 h-12 rounded-md bg-red-400 text-gray-900">
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
								</svg>
							</div>
						</div>
						<div className="ml-4">
							<h4 className="text-lg font-medium leading-6 text-black">Back-End Development</h4>
							<p className="mt-2 text-gray-500">Handles server-side operations, databases, and business logic. Developers use programming languages like Python, PHP, and frameworks like Node.js to ensure data processing, security, and smooth communication between client and server.</p>
						</div>
					</div>
					<div className="flex">
						<div className="flex-shrink-0">
							<div className="flex items-center justify-center w-12 h-12 rounded-md bg-red-400 text-gray-900">
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
								</svg>
							</div>
						</div>
						<div className="ml-4">
							<h4 className="text-lg font-medium leading-6 text-black">Full-Stack Development</h4>
							<p className="mt-2 text-gray-500">Combines front-end and back-end expertise to manage the entire web application. Full-stack developers oversee the project lifecycle, from creating prototypes to deploying scalable solutions that meet both user and business requirements.</p>
						</div>
					</div>
				</div>
			</div>
			<div aria-hidden="true" className="mt-10 lg:mt-0">
				<img src="https://www.graffiti9.com/wp-content/uploads/2019/10/Website-Banner-720x720.jpg" alt="" className="mx-auto rounded-lg shadow-lg bg-gray-500" />
			</div>
		</div>
		<div>
			<div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
				<div className="lg:col-start-2">
					<h3 className="text-2xl font-bold tracking-tight sm:text-3xl text-black ">Our Solution</h3>
					<p className="mt-3 text-lg text-gray-700">We deliver end-to-end web development solutions tailored to meet client goals, ensuring seamless user experiences and robust functionality. From custom website design to scalable web applications, we prioritize innovation and user-centric approaches.</p>
					<div className="mt-12 space-y-12">
						<div className="flex">
							<div className="flex-shrink-0">
								<div className="flex items-center justify-center w-12 h-12 rounded-md bg-blue-400 text-gray-900">
									<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
									</svg>
								</div>
							</div>
							<div className="ml-4">
								<h4 className="text-lg font-medium leading-6 text-black">Custom Website Development</h4>
								<p className="mt-2 text-gray-500">We create bespoke websites tailored to your brand identity and goals. Using modern technologies, we ensure visually appealing, mobile-friendly, and SEO-optimized designs that effectively engage your target audience and elevate your online presence.</p>
							</div>
						</div>
						<div className="flex">
							<div className="flex-shrink-0">
								<div className="flex items-center justify-center w-12 h-12 rounded-md bg-blue-400 text-gray-900">
									<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
									</svg>
								</div>
							</div>
							<div className="ml-4">
								<h4 className="text-lg font-medium leading-6 text-black">E-commerce Solutions</h4>
								<p className="mt-2 text-gray-500">Our e-commerce platforms include user-friendly interfaces, secure payment systems, and advanced features like inventory management. We focus on creating scalable, high-performing solutions to maximize conversions and provide a seamless shopping experience.</p>
							</div>
						</div>
						<div className="flex">
							<div className="flex-shrink-0">
								<div className="flex items-center justify-center w-12 h-12 rounded-md bg-blue-400 text-gray-900">
									<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
									</svg>
								</div>
							</div>
							<div className="ml-4">
								<h4 className="text-lg font-medium leading-6 text-black">Web Application Development</h4>
								<p className="mt-2 text-gray-500">We specialize in building dynamic, feature-rich web applications that cater to specific business needs. Our applications are scalable, secure, and optimized for performance, helping businesses streamline operations, improve productivity, and deliver value to users.</p>
							</div>
						</div>
					</div>
				</div>
				<div className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1">
					<img src="https://img.freepik.com/premium-photo/colorful-image-laptop-with-word-i-love-screen_910054-15118.jpg" alt="" className="mx-auto rounded-lg shadow-lg bg-gray-500" />
				</div>
			</div>
		</div>
	</div>
         </section>
{/* space-top div */}
<div className="py-20"></div>
        {/* PART-03 START */}
        {/* Industry-Specific Software Solutions */}
        <section>
          {/* Container */}
          <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
            {/* Title */}
            <h2 className="mx-auto max-w-2xl text-center text-3xl font-bold md:text-3xl mb-8 md:mb-12 lg:mb-16 text-red-500">
              Industry-Specific Software Solutions
            </h2>
            {/* Content */}
            <div className="grid gap-0 sm:grid-cols-2 md:grid-cols-3">
              {/* Item */}
              <a
                href="#"
                className="flex-col flex items-start justify-between border border-gray-300 p-10 h-72 hover:bg-red hover:text-blue-500 transition group"
              >
                <div className="flex w-full items-center justify-between">
                  <h5 className="text-xl font-bold">
                    Healthcare Solution Development
                  </h5>
                  {/* <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 18L18 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M8.25 6H18V15.75"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg> */}
                </div>

                <div>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3  transition"></span>
                      <span className="text-gray-700 group-hover:text-red-500 transition">
                        Healthcare App Development
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3  transition"></span>
                      <span className="text-gray-700 group-hover:text-red-500 transition">
                        Fitness App Development
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3  transition"></span>
                      <span className="text-gray-700 group-hover:text-red-500 transition">
                        Wellness App Development
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3  transition"></span>
                      <span className="text-gray-700 group-hover:text-red-500 transition">
                        Mental Health App
                      </span>
                    </li>
                  </ul>
                </div>
              </a>

              {/* Item */}
              <a
                href="#"
                className="flex-col flex items-start justify-between border border-gray-300 p-10 h-72 hover:bg-red hover:text-blue-500 transition group"
              >
                <div className="flex w-full items-center justify-between">
                  <h5 className="text-xl font-bold">
                    Restaurant Solution Development
                  </h5>
                  {/* <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 18L18 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M8.25 6H18V15.75"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg> */}
                </div>

                <div>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3  transition"></span>
                      <span className="text-gray-700 group-hover:text-red-500 transition">
                      Online Ordering & Delivery System
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3  transition"></span>
                      <span className="text-gray-700 group-hover:text-red-500 transition">
                      Reservation & Table Management 
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3  transition"></span>
                      <span className="text-gray-700 group-hover:text-red-500 transition">
                      Point of Sale System
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3  transition"></span>
                      <span className="text-gray-700 group-hover:text-red-500 transition">
                      Customer Feedback & Loyalty Program
                      </span>
                    </li>
                  </ul>
                </div>
              </a>
              {/* Item */}
              <a
                href="#"
                className="flex-col flex items-start justify-between border border-gray-300 p-10 h-72 hover:bg-red hover:text-blue-500 transition group"
              >
                <div className="flex w-full items-center justify-between">
                  <h5 className="text-xl font-bold">
                    Manufacturing Solution Development
                  </h5>
                  {/* <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 18L18 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M8.25 6H18V15.75"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg> */}
                </div>

                <div>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3  transition"></span>
                      <span className="text-gray-700 group-hover:text-red-500 transition">
                      Manufacturing Execution Systems
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3  transition"></span>
                      <span className="text-gray-700 group-hover:text-red-500 transition">
                      Supply Chain Management
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3  transition"></span>
                      <span className="text-gray-700 group-hover:text-red-500 transition">
                      Product Lifecycle Management
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3  transition"></span>
                      <span className="text-gray-700 group-hover:text-red-500 transition">
                      Computer-Aided Manufacturing
                      </span>
                    </li>
                  </ul>
                </div>
              </a>
              {/* Item */}
              <a
                href="#"
                className="flex-col flex items-start justify-between border border-gray-300 p-10 h-72 hover:bg-red hover:text-blue-500 transition group"
              >
                <div className="flex w-full items-center justify-between">
                  <h5 className="text-xl font-bold">
                    Travel Solution Development
                  </h5>
                  {/* <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 18L18 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M8.25 6H18V15.75"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg> */}
                </div>

                <div>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3  transition"></span>
                      <span className="text-gray-700 group-hover:text-red-500 transition">
                      Travel Booking Platform
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3  transition"></span>
                      <span className="text-gray-700 group-hover:text-red-500 transition">
                      Trip Planning & Itinerary Management
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3  transition"></span>
                      <span className="text-gray-700 group-hover:text-red-500 transition">
                      Travel Guide & Exploration App
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3  transition"></span>
                      <span className="text-gray-700 group-hover:text-red-500 transition">
                      Business Travel Management
                      </span>
                    </li>
                  </ul>
                </div>
              </a>
              {/* Item */}
              <a
                href="#"
                className="flex-col flex items-start justify-between border border-gray-300 p-10 h-72 hover:bg-red hover:text-blue-500 transition group"
              >
                <div className="flex w-full items-center justify-between">
                  <h5 className="text-xl font-bold">
                    Agriculture Solution Development
                  </h5>
                  {/* <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 18L18 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M8.25 6H18V15.75"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg> */}
                </div>

                <div>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3  transition"></span>
                      <span className="text-gray-700 group-hover:text-red-500 transition">
                      Smart Irrigation System
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3  transition"></span>
                      <span className="text-gray-700 group-hover:text-red-500 transition">
                      Crop Health Monitoring
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3  transition"></span>
                      <span className="text-gray-700 group-hover:text-red-500 transition">
                      Farm Management & Data Analytics
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 transition"></span>
                      <span className="text-gray-700 group-hover:text-red-500 transition">
                      Marketplace for Direct Farm Produce Sales
                      </span>
                    </li>
                  </ul>
                </div>
              </a>
              {/* Item */}
              <a
                href="#"
                className="flex-col flex items-start justify-between border border-gray-300 p-10 h-72 hover:bg-red hover:text-blue-500 transition group"
              >
                <div className="flex w-full items-center justify-between">
                  <h5 className="text-xl font-bold">
                    Retail Solution Development
                  </h5>
                  {/* <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 18L18 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M8.25 6H18V15.75"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg> */}
                </div>

                <div>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3  transition"></span>
                      <span className="text-gray-700 group-hover:text-red-500 transition">
                      Inventory Management System
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3  transition"></span>
                      <span className="text-gray-700 group-hover:text-red-500 transition">
                      Customer Loyalty Program
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3  transition"></span>
                      <span className="text-gray-700 group-hover:text-red-500 transition">
                      Personalized Shopping Assistant
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3  transition"></span>
                      <span className="text-gray-700 group-hover:text-red-500 transition">
                      Mobile POS (Point of Sale) System
                      </span>
                    </li>
                  </ul>
                </div>
              </a>
            </div>
          </div>
        </section>
{/* space-top div */}
<div className="py-20"></div>
        {/* Why Choose Us */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <div className="md:flex md:items-center md:justify-between">
              <div className="md:w-1/2 mb-10 md:mb-0">
                <h2 className="text-4xl font-bold mb-6 pl-20">Why Choose Us?</h2>
                <ul className="space-y-4 pl-10 pb-20 pt-10">
                  {features.map((feature, index) => (
                    <li key={index} className="flex flex-col">
                      <button
                        onClick={() => toggleAccordion(index)}
                        className="flex items-center text-left w-full focus:outline-none"
                      >
                        <ChevronRight
                          className={`w-10 h-10 text-primary mr-2 transition-transform ${
                            openIndex === index ? "rotate-90" : ""
                          }`}
                        />
                        <span className="text-xl font-bold">
                          {feature.title}
                        </span>
                      </button>
                      {openIndex === index && (
                        <p className="pl-7 mt-2 text-black pr-10">
                          {feature.description}
                        </p>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="md:w-1/2">
                <img
                  src={'https://t4.ftcdn.net/jpg/04/95/93/39/360_F_495933948_CSYyr1o1mO5yCCDb44ulFmWSHteXR2Yn.jpg'}
                  alt="Our Team"
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>
        {/* CTA Section */}
        {/* <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl mb-8">
              Let's discuss how we can help you achieve your goals.
            </p>
            <button className="bg-primary text-primary-foreground px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition duration-300">
              Contact Us
            </button>
          </div>
        </section> */}
        {/* space-top div */}
      <div className="py-20"></div>
          {/* Fully compatible With */}
        <section className=" pt-20 pb-20">
	<div className="container p-6 mx-auto space-y-6 text-center lg:p-8 lg:space-y-8">
		<h2 className="text-3xl font-bold">Fully compatible with</h2>
		<div className="flex flex-wrap justify-center lg:justify-between">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-label="Angular" className="w-12 h-12 mx-10 my-6 fill-current md:mx-12 lg:m-0 ">
				<title>Angular</title>
				<path d="M13.24 16.859h5.51l-2.755-6.542zM15.995 0.010l-15.078 5.307 2.297 19.677 12.781 6.995 12.786-6.984 2.297-19.688-15.083-5.302zM25.406 24.406h-3.516l-1.896-4.667h-8l-1.896 4.667h-3.516l9.411-20.865z"></path>
			</svg>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-label="Gatsby" className="w-12 h-12 mx-10 my-6 fill-current md:mx-12 lg:m-0 ">
				<title>Gatsby</title>
				<path d="M16 0.011c-8.901 0-15.989 7.088-15.989 15.989s7.088 15.995 15.989 15.995c8.901 0 15.989-7.093 15.989-15.995s-7.088-15.989-15.989-15.989zM3.484 16.14l12.38 12.376c-6.817 0-12.38-5.563-12.38-12.376zM18.781 28.24l-15.016-15.021c1.251-5.563 6.256-9.735 12.235-9.735 4.011 0.011 7.776 1.917 10.151 5.147l-1.807 1.531c-1.912-2.801-5.089-4.468-8.48-4.453-4.333-0.025-8.197 2.719-9.599 6.819l13.073 13.072c3.197-1.115 5.703-3.896 6.396-7.235h-5.423v-2.364h8.204c0 5.979-4.172 10.989-9.735 12.24z"></path>
			</svg>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-label="Plain HTML" className="w-12 h-12 mx-10 my-6 fill-current md:mx-12 lg:m-0 ">
				<title>Plain HTML</title>
				<path d="M2 0h28l-2.547 28.75-11.484 3.25-11.417-3.25zM11.375 13l-0.307-3.625 13.411 0.005 0.307-3.495-17.573-0.005 0.932 10.682h12.167l-0.432 4.568-3.88 1.068-3.938-1.078-0.255-2.813h-3.479l0.443 5.563 7.229 1.932 7.172-1.927 0.99-10.875z"></path>
			</svg>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-label="Next.js" className="w-12 h-12 mx-10 my-6 fill-current md:mx-12 lg:m-0 ">
				<title>Next.js</title>
				<path d="M23.749 30.005c-0.119 0.063-0.109 0.083 0.005 0.025 0.037-0.015 0.068-0.036 0.095-0.061 0-0.021 0-0.021-0.1 0.036zM23.989 29.875c-0.057 0.047-0.057 0.047 0.011 0.016 0.036-0.021 0.068-0.041 0.068-0.047 0-0.027-0.016-0.021-0.079 0.031zM24.145 29.781c-0.057 0.047-0.057 0.047 0.011 0.016 0.037-0.021 0.068-0.043 0.068-0.048 0-0.025-0.016-0.020-0.079 0.032zM24.303 29.688c-0.057 0.047-0.057 0.047 0.009 0.015 0.037-0.020 0.068-0.041 0.068-0.047 0-0.025-0.016-0.020-0.077 0.032zM24.516 29.547c-0.109 0.073-0.147 0.12-0.047 0.068 0.067-0.041 0.181-0.131 0.161-0.131-0.043 0.016-0.079 0.043-0.115 0.063zM14.953 0.011c-0.073 0.005-0.292 0.025-0.484 0.041-4.548 0.412-8.803 2.86-11.5 6.631-1.491 2.067-2.459 4.468-2.824 6.989-0.129 0.88-0.145 1.14-0.145 2.333 0 1.192 0.016 1.448 0.145 2.328 0.871 6.011 5.147 11.057 10.943 12.927 1.043 0.333 2.136 0.563 3.381 0.704 0.484 0.052 2.577 0.052 3.061 0 2.152-0.24 3.969-0.771 5.767-1.688 0.276-0.14 0.328-0.177 0.291-0.208-0.88-1.161-1.744-2.323-2.609-3.495l-2.557-3.453-3.203-4.745c-1.068-1.588-2.14-3.172-3.229-4.744-0.011 0-0.025 2.109-0.031 4.681-0.011 4.505-0.011 4.688-0.068 4.792-0.057 0.125-0.151 0.229-0.276 0.287-0.099 0.047-0.188 0.057-0.661 0.057h-0.541l-0.141-0.088c-0.088-0.057-0.161-0.136-0.208-0.229l-0.068-0.141 0.005-6.271 0.011-6.271 0.099-0.125c0.063-0.077 0.141-0.14 0.229-0.187 0.131-0.063 0.183-0.073 0.724-0.073 0.635 0 0.74 0.025 0.907 0.208 1.296 1.932 2.588 3.869 3.859 5.812 2.079 3.152 4.917 7.453 6.312 9.563l2.537 3.839 0.125-0.083c1.219-0.813 2.328-1.781 3.285-2.885 2.016-2.308 3.324-5.147 3.767-8.177 0.129-0.88 0.145-1.141 0.145-2.333 0-1.193-0.016-1.448-0.145-2.328-0.871-6.011-5.147-11.057-10.943-12.928-1.084-0.343-2.199-0.577-3.328-0.697-0.303-0.031-2.371-0.068-2.631-0.041zM21.5 9.688c0.151 0.072 0.265 0.208 0.317 0.364 0.027 0.084 0.032 1.823 0.027 5.74l-0.011 5.624-0.989-1.52-0.995-1.521v-4.083c0-2.647 0.011-4.131 0.025-4.204 0.047-0.167 0.161-0.307 0.313-0.395 0.124-0.063 0.172-0.068 0.667-0.068 0.463 0 0.541 0.005 0.645 0.063z"></path>
			</svg>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-label="Nuxt.js" className="w-12 h-12 mx-10 my-6 fill-current md:mx-12 lg:m-0 ">
				<title>Nuxt.js</title>
				<path d="M26.297 27.031l0.031-0.063c0.031-0.047 0.052-0.099 0.073-0.156v-0.005c0.099-0.26 0.12-0.536 0.073-0.813v0.010c-0.052-0.292-0.156-0.573-0.313-0.828l0.010 0.010-7.094-12.474-1.083-1.891-8.156 14.365c-0.141 0.25-0.229 0.521-0.276 0.802v0.016c-0.057 0.323-0.021 0.651 0.109 0.953l-0.005-0.010c0.016 0.047 0.042 0.089 0.068 0.135l-0.005-0.005c0.214 0.365 0.667 0.802 1.667 0.802h13.198c0.208 0 1.234-0.042 1.708-0.849zM17.995 14.609l6.479 11.396h-12.953zM31.661 25.188l-9.354-16.479c-0.099-0.177-0.635-1.052-1.578-1.052-0.422 0-1.026 0.182-1.521 1.047l-1.208 2.12 1.073 1.896 1.667-2.953 9.255 16.245h-3.521c0.047 0.271 0.021 0.547-0.073 0.807v-0.010c-0.021 0.057-0.042 0.115-0.073 0.167v-0.005l-0.031 0.063c-0.474 0.807-1.495 0.849-1.693 0.849h5.505c0.203 0 1.219-0.042 1.693-0.849 0.214-0.37 0.359-0.984-0.141-1.844zM9.74 27.078c-0.021-0.042-0.042-0.083-0.063-0.125v-0.005c-0.13-0.302-0.172-0.63-0.115-0.953v0.010h-7.563l11.24-19.776 3.687 6.484 1.073-1.891-3.219-5.667c-0.089-0.161-0.63-1.036-1.568-1.036-0.422 0-1.031 0.182-1.521 1.052l-11.385 20.016c-0.099 0.172-0.568 1.078-0.099 1.885 0.214 0.37 0.667 0.802 1.667 0.802h9.531c-0.99 0-1.453-0.427-1.667-0.802z"></path>
			</svg>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-label="React" className="w-12 h-12 mx-10 my-6 fill-current md:mx-12 lg:m-0 ">
				<title>React</title>
				<path d="M16 13.146c-1.573 0-2.854 1.281-2.854 2.854s1.281 2.854 2.854 2.854c1.573 0 2.854-1.281 2.854-2.854s-1.281-2.854-2.854-2.854zM8.010 21.672l-0.63-0.156c-4.688-1.188-7.38-3.198-7.38-5.521s2.693-4.333 7.38-5.521l0.63-0.156 0.177 0.625c0.474 1.635 1.083 3.229 1.818 4.771l0.135 0.281-0.135 0.286c-0.734 1.536-1.344 3.13-1.818 4.771zM7.089 11.932c-3.563 1-5.75 2.536-5.75 4.063s2.188 3.057 5.75 4.063c0.438-1.391 0.964-2.745 1.578-4.063-0.615-1.318-1.141-2.672-1.578-4.063zM23.99 21.672l-0.177-0.625c-0.474-1.635-1.083-3.229-1.818-4.766l-0.135-0.286 0.135-0.286c0.734-1.536 1.344-3.13 1.818-4.771l0.177-0.62 0.63 0.156c4.688 1.188 7.38 3.198 7.38 5.521s-2.693 4.333-7.38 5.521zM23.333 15.995c0.641 1.385 1.172 2.745 1.578 4.063 3.568-1.005 5.75-2.536 5.75-4.063s-2.188-3.057-5.75-4.063c-0.438 1.385-0.964 2.745-1.578 4.063zM7.078 11.927l-0.177-0.625c-1.318-4.646-0.917-7.979 1.099-9.141 1.979-1.141 5.151 0.208 8.479 3.625l0.453 0.464-0.453 0.464c-1.182 1.229-2.26 2.552-3.229 3.958l-0.182 0.255-0.313 0.026c-1.703 0.135-3.391 0.406-5.047 0.813zM9.609 3.089c-0.359 0-0.677 0.073-0.943 0.229-1.323 0.766-1.557 3.422-0.646 7.005 1.422-0.318 2.859-0.542 4.313-0.672 0.833-1.188 1.75-2.323 2.734-3.391-2.078-2.026-4.047-3.172-5.458-3.172zM22.396 30.234c-0.005 0-0.005 0 0 0-1.901 0-4.344-1.427-6.875-4.031l-0.453-0.464 0.453-0.464c1.182-1.229 2.26-2.552 3.229-3.958l0.177-0.255 0.313-0.031c1.703-0.13 3.391-0.401 5.052-0.813l0.63-0.156 0.177 0.625c1.318 4.646 0.917 7.974-1.099 9.135-0.49 0.281-1.042 0.422-1.604 0.411zM16.932 25.729c2.078 2.026 4.047 3.172 5.458 3.172h0.005c0.354 0 0.672-0.078 0.938-0.229 1.323-0.766 1.563-3.422 0.646-7.005-1.422 0.318-2.865 0.542-4.313 0.667-0.833 1.193-1.75 2.323-2.734 3.396zM24.922 11.927l-0.63-0.161c-1.661-0.406-3.349-0.677-5.052-0.813l-0.313-0.026-0.177-0.255c-0.969-1.406-2.047-2.729-3.229-3.958l-0.453-0.464 0.453-0.464c3.328-3.417 6.5-4.766 8.479-3.625 2.016 1.161 2.417 4.495 1.099 9.141zM19.667 9.651c1.521 0.141 2.969 0.365 4.313 0.672 0.917-3.583 0.677-6.24-0.646-7.005-1.318-0.76-3.797 0.406-6.401 2.943 0.984 1.073 1.896 2.203 2.734 3.391zM9.609 30.234c-0.563 0.010-1.12-0.13-1.609-0.411-2.016-1.161-2.417-4.49-1.099-9.135l0.177-0.625 0.63 0.156c1.542 0.391 3.24 0.661 5.047 0.813l0.313 0.031 0.177 0.255c0.969 1.406 2.047 2.729 3.229 3.958l0.453 0.464-0.453 0.464c-2.526 2.604-4.969 4.031-6.865 4.031zM8.021 21.667c-0.917 3.583-0.677 6.24 0.646 7.005 1.318 0.75 3.792-0.406 6.401-2.943-0.984-1.073-1.901-2.203-2.734-3.396-1.453-0.125-2.891-0.349-4.313-0.667zM16 22.505c-1.099 0-2.224-0.047-3.354-0.141l-0.313-0.026-0.182-0.26c-0.635-0.917-1.24-1.859-1.797-2.828-0.563-0.969-1.078-1.958-1.557-2.969l-0.135-0.286 0.135-0.286c0.479-1.010 0.995-2 1.557-2.969 0.552-0.953 1.156-1.906 1.797-2.828l0.182-0.26 0.313-0.026c2.234-0.188 4.479-0.188 6.708 0l0.313 0.026 0.182 0.26c1.276 1.833 2.401 3.776 3.354 5.797l0.135 0.286-0.135 0.286c-0.953 2.021-2.073 3.964-3.354 5.797l-0.182 0.26-0.313 0.026c-1.125 0.094-2.255 0.141-3.354 0.141zM13.073 21.057c1.969 0.151 3.885 0.151 5.859 0 1.099-1.609 2.078-3.302 2.927-5.063-0.844-1.76-1.823-3.453-2.932-5.063-1.948-0.151-3.906-0.151-5.854 0-1.109 1.609-2.089 3.302-2.932 5.063 0.849 1.76 1.828 3.453 2.932 5.063z"></path>
			</svg>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-label="Svelte" className="w-12 h-12 mx-10 my-6 fill-current md:mx-12 lg:m-0 ">
				<title>Svelte</title>
				<path d="M27.573 4.229c-2.927-4.25-8.656-5.479-13.068-2.802l-7.464 4.745c-2.042 1.281-3.443 3.365-3.854 5.734-0.365 1.969-0.047 4.005 0.891 5.776-0.641 0.964-1.073 2.052-1.266 3.198-0.427 2.406 0.13 4.885 1.547 6.88 2.932 4.24 8.646 5.474 13.068 2.828l7.469-4.75c2.031-1.281 3.427-3.365 3.839-5.734 0.359-1.964 0.042-3.995-0.896-5.755 1.984-3.115 1.88-7.12-0.266-10.12zM13.76 28.172c-2.401 0.625-4.938-0.318-6.349-2.359-0.865-1.198-1.182-2.677-0.932-4.146l0.146-0.708 0.135-0.438 0.401 0.266c0.88 0.667 1.865 1.146 2.917 1.469l0.271 0.094-0.031 0.266c-0.026 0.37 0.083 0.786 0.297 1.104 0.438 0.63 1.198 0.932 1.932 0.734 0.161-0.052 0.318-0.104 0.453-0.188l7.438-4.745c0.375-0.24 0.615-0.599 0.708-1.026 0.083-0.443-0.026-0.896-0.266-1.255-0.443-0.615-1.198-0.891-1.932-0.708-0.161 0.057-0.333 0.12-0.469 0.203l-2.813 1.786c-2.661 1.583-6.099 0.839-7.865-1.708-0.859-1.198-1.198-2.693-0.938-4.146 0.26-1.438 1.12-2.698 2.365-3.469l7.422-4.745c0.469-0.292 0.974-0.505 1.521-0.667 2.401-0.625 4.932 0.318 6.349 2.349 1 1.406 1.281 3.203 0.76 4.849l-0.135 0.443-0.385-0.266c-0.891-0.651-1.88-1.146-2.932-1.469l-0.266-0.078 0.026-0.266c0.026-0.391-0.083-0.802-0.297-1.12-0.438-0.63-1.198-0.896-1.932-0.708-0.161 0.052-0.318 0.104-0.453 0.188l-7.453 4.786c-0.375 0.25-0.615 0.599-0.693 1.036-0.078 0.427 0.026 0.896 0.266 1.24 0.427 0.63 1.203 0.896 1.922 0.708 0.172-0.052 0.333-0.104 0.464-0.188l2.844-1.813c0.464-0.307 0.984-0.531 1.516-0.677 2.417-0.63 4.938 0.318 6.349 2.359 0.865 1.198 1.198 2.677 0.958 4.13-0.25 1.438-1.099 2.698-2.333 3.469l-7.438 4.734c-0.484 0.292-1.005 0.521-1.547 0.677z"></path>
			</svg>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-label="Vue.js" className="w-12 h-12 mx-10 my-6 fill-current md:mx-12 lg:m-0 ">
				<title>Vue.js</title>
				<path d="M24.306 4.019h-4.806l-3.5 5.537-3-5.537h-11l14 23.981 14-23.981zM5.481 6.019h3.363l7.156 12.387 7.15-12.387h3.363l-10.512 18.012z"></path>
			</svg>
		</div>
	</div>
        </section>
         {/* space-top div */}
      <div className="py-20"></div>
         {/* Our Development Process */}
      <section>
        {/* Container */}
        <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
          {/* Title */}
          <h2 className="mx-auto max-w-xl text-center text-3xl font-bold md:text-5xl mb-8 md:mb-12 lg:mb-16">
            Our Development Process
          </h2>
          {/* Content */}
          <div className="grid grid-cols-1 gap-6 mb-6">
            <div className="bg-gray-100 p-6 rounded-lg flex flex-col md:flex-row md:justify-between items-center">
              <div className="flex flex-col gap-6">
                <div className="h-11 w-11">
                  <svg
                    className="h-11 w-11"
                    viewBox="0 0 46 46"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M41.3102 12.7222C41.3054 12.7222 41.3008 12.7203 41.2975 12.7169C41.2941 12.7136 41.2922 12.709 41.2922 12.7042C41.0325 12.262 40.6606 11.8963 40.2141 11.6441L24.4016 2.74954C23.9732 2.51034 23.4907 2.38477 23 2.38477C22.5094 2.38477 22.0269 2.51034 21.5984 2.74954L5.78595 11.6441C5.33947 11.8963 4.96754 12.262 4.70783 12.7042C4.70783 12.709 4.70593 12.7136 4.70256 12.7169C4.69919 12.7203 4.69462 12.7222 4.68986 12.7222V12.7581C4.44143 13.1768 4.31104 13.6549 4.31251 14.1417V31.8589C4.31342 32.3711 4.45031 32.8739 4.70918 33.3159C4.96806 33.7579 5.33964 34.1232 5.78595 34.3745L21.5984 43.2691C21.9965 43.4862 22.4391 43.6092 22.8922 43.6284H23.1438C23.5854 43.6089 24.0163 43.4858 24.4016 43.2691L40.2141 34.3745C40.6604 34.1232 41.032 33.7579 41.2908 33.3159C41.5497 32.8739 41.6866 32.3711 41.6875 31.8589V14.1417C41.6901 13.6434 41.5599 13.1534 41.3102 12.7222ZM23 5.24719L37.3211 13.2972L31.8227 16.4238L17.3219 8.42766L23 5.24719ZM23.1617 21.3472L8.69689 13.2972L14.375 10.0988L28.8938 18.0948L23.1617 21.3472ZM24.4555 39.9448L24.5992 23.8448L30.3672 20.5566V27.4027C30.3672 27.7839 30.5187 28.1495 30.7882 28.4191C31.0578 28.6887 31.4235 28.8402 31.8047 28.8402C32.1859 28.8402 32.5516 28.6887 32.8212 28.4191C33.0908 28.1495 33.2422 27.7839 33.2422 27.4027V18.9214L38.8125 15.7589V31.8589L24.4555 39.9448Z"
                      fill="black"
                    />
                  </svg>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-4 text-red-500">
                  1. Planning and Research
                  </h3>
                  <p className=" max-w-md">
                    <ul className="list-disc pl-5">
                      <li>Objective Setting: Define the app’s purpose, target audience, key features, and overall goals.</li>
                      <li>Market Research: Analyze competitors, trends, and user expectations to inform app design and functionality.</li>
                      <li>Platform and Technology Selection: Decide whether to develop natively, use a cross-platform framework, or create a Progressive Web App (PWA).</li>
                      <li>Roadmap and Timeline: Establish a timeline with milestones and assign resources to ensure efficient development.</li>
                    </ul>
                  </p>
                </div>
              </div>

              <div className="mt-5 md:mr-5 md:mt-5 pl-5">
                <img
                  src="../../src/assets/r&d.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Item */}
            <div className="bg-gray-100 p-6 rounded-lg flex flex-col space-y-4">
              <div className="h-6 w-6">
                <svg
                  className="h-6 w-6"
                  viewBox="0 0 46 46"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M41.3102 12.7222C41.3054 12.7222 41.3008 12.7203 41.2975 12.7169C41.2941 12.7136 41.2922 12.709 41.2922 12.7042C41.0325 12.262 40.6606 11.8963 40.2141 11.6441L24.4016 2.74954C23.9732 2.51034 23.4907 2.38477 23 2.38477C22.5094 2.38477 22.0269 2.51034 21.5984 2.74954L5.78595 11.6441C5.33947 11.8963 4.96754 12.262 4.70783 12.7042C4.70783 12.709 4.70593 12.7136 4.70256 12.7169C4.69919 12.7203 4.69462 12.7222 4.68986 12.7222V12.7581C4.44143 13.1768 4.31104 13.6549 4.31251 14.1417V31.8589C4.31342 32.3711 4.45031 32.8739 4.70918 33.3159C4.96806 33.7579 5.33964 34.1232 5.78595 34.3745L21.5984 43.2691C21.9965 43.4862 22.4391 43.6092 22.8922 43.6284H23.1438C23.5854 43.6089 24.0163 43.4858 24.4016 43.2691L40.2141 34.3745C40.6604 34.1232 41.032 33.7579 41.2908 33.3159C41.5497 32.8739 41.6866 32.3711 41.6875 31.8589V14.1417C41.6901 13.6434 41.5599 13.1534 41.3102 12.7222ZM23 5.24719L37.3211 13.2972L31.8227 16.4238L17.3219 8.42766L23 5.24719ZM23.1617 21.3472L8.69689 13.2972L14.375 10.0988L28.8938 18.0948L23.1617 21.3472ZM24.4555 39.9448L24.5992 23.8448L30.3672 20.5566V27.4027C30.3672 27.7839 30.5187 28.1495 30.7882 28.4191C31.0578 28.6887 31.4235 28.8402 31.8047 28.8402C32.1859 28.8402 32.5516 28.6887 32.8212 28.4191C33.0908 28.1495 33.2422 27.7839 33.2422 27.4027V18.9214L38.8125 15.7589V31.8589L24.4555 39.9448Z"
                    fill="black"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4 text-red-500">
                2. UI/UX Design
                </h3>
                <p className="">
                UI Elements: Design graphics, icons, and animations, making sure the design is consistent with the brand and platform guidelines.
                </p>
              </div>
            </div>
            {/* Item */}
            <div className="bg-gray-100 p-6 rounded-lg flex flex-col space-y-4">
              <div className="h-6 w-6">
                <svg
                  className="h-6 w-6"
                  viewBox="0 0 46 46"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M41.3102 12.7222C41.3054 12.7222 41.3008 12.7203 41.2975 12.7169C41.2941 12.7136 41.2922 12.709 41.2922 12.7042C41.0325 12.262 40.6606 11.8963 40.2141 11.6441L24.4016 2.74954C23.9732 2.51034 23.4907 2.38477 23 2.38477C22.5094 2.38477 22.0269 2.51034 21.5984 2.74954L5.78595 11.6441C5.33947 11.8963 4.96754 12.262 4.70783 12.7042C4.70783 12.709 4.70593 12.7136 4.70256 12.7169C4.69919 12.7203 4.69462 12.7222 4.68986 12.7222V12.7581C4.44143 13.1768 4.31104 13.6549 4.31251 14.1417V31.8589C4.31342 32.3711 4.45031 32.8739 4.70918 33.3159C4.96806 33.7579 5.33964 34.1232 5.78595 34.3745L21.5984 43.2691C21.9965 43.4862 22.4391 43.6092 22.8922 43.6284H23.1438C23.5854 43.6089 24.0163 43.4858 24.4016 43.2691L40.2141 34.3745C40.6604 34.1232 41.032 33.7579 41.2908 33.3159C41.5497 32.8739 41.6866 32.3711 41.6875 31.8589V14.1417C41.6901 13.6434 41.5599 13.1534 41.3102 12.7222ZM23 5.24719L37.3211 13.2972L31.8227 16.4238L17.3219 8.42766L23 5.24719ZM23.1617 21.3472L8.69689 13.2972L14.375 10.0988L28.8938 18.0948L23.1617 21.3472ZM24.4555 39.9448L24.5992 23.8448L30.3672 20.5566V27.4027C30.3672 27.7839 30.5187 28.1495 30.7882 28.4191C31.0578 28.6887 31.4235 28.8402 31.8047 28.8402C32.1859 28.8402 32.5516 28.6887 32.8212 28.4191C33.0908 28.1495 33.2422 27.7839 33.2422 27.4027V18.9214L38.8125 15.7589V31.8589L24.4555 39.9448Z"
                    fill="black"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4 text-red-500">
                3.Development
                </h3>
                <p className="">
                Front-End Development, Back-End Development, Integration and Feature Implementation
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-8">
            {/* Item */}
            <div className="bg-gray-100 p-6 rounded-lg flex flex-col space-y-4">
              <div className="h-6 w-6">
                <svg
                  className="h-6 w-6"
                  viewBox="0 0 46 46"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M41.3102 12.7222C41.3054 12.7222 41.3008 12.7203 41.2975 12.7169C41.2941 12.7136 41.2922 12.709 41.2922 12.7042C41.0325 12.262 40.6606 11.8963 40.2141 11.6441L24.4016 2.74954C23.9732 2.51034 23.4907 2.38477 23 2.38477C22.5094 2.38477 22.0269 2.51034 21.5984 2.74954L5.78595 11.6441C5.33947 11.8963 4.96754 12.262 4.70783 12.7042C4.70783 12.709 4.70593 12.7136 4.70256 12.7169C4.69919 12.7203 4.69462 12.7222 4.68986 12.7222V12.7581C4.44143 13.1768 4.31104 13.6549 4.31251 14.1417V31.8589C4.31342 32.3711 4.45031 32.8739 4.70918 33.3159C4.96806 33.7579 5.33964 34.1232 5.78595 34.3745L21.5984 43.2691C21.9965 43.4862 22.4391 43.6092 22.8922 43.6284H23.1438C23.5854 43.6089 24.0163 43.4858 24.4016 43.2691L40.2141 34.3745C40.6604 34.1232 41.032 33.7579 41.2908 33.3159C41.5497 32.8739 41.6866 32.3711 41.6875 31.8589V14.1417C41.6901 13.6434 41.5599 13.1534 41.3102 12.7222ZM23 5.24719L37.3211 13.2972L31.8227 16.4238L17.3219 8.42766L23 5.24719ZM23.1617 21.3472L8.69689 13.2972L14.375 10.0988L28.8938 18.0948L23.1617 21.3472ZM24.4555 39.9448L24.5992 23.8448L30.3672 20.5566V27.4027C30.3672 27.7839 30.5187 28.1495 30.7882 28.4191C31.0578 28.6887 31.4235 28.8402 31.8047 28.8402C32.1859 28.8402 32.5516 28.6887 32.8212 28.4191C33.0908 28.1495 33.2422 27.7839 33.2422 27.4027V18.9214L38.8125 15.7589V31.8589L24.4555 39.9448Z"
                    fill="black"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4 text-red-500">
               Testing and Quality Assurance (QA)
                </h3>
                <p className="0">
                               Security and Compliance Testing: Ensure that data is protected, and that the app meets any regulatory requirements (e.g., GDPR for data privacy).

                </p>
              </div>
            </div>
            {/* Item */}
            <div className="bg-gray-100 p-6 rounded-lg flex flex-col space-y-4">
              <div className="h-6 w-6">
                <svg
                  className="h-6 w-6"
                  viewBox="0 0 46 46"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M41.3102 12.7222C41.3054 12.7222 41.3008 12.7203 41.2975 12.7169C41.2941 12.7136 41.2922 12.709 41.2922 12.7042C41.0325 12.262 40.6606 11.8963 40.2141 11.6441L24.4016 2.74954C23.9732 2.51034 23.4907 2.38477 23 2.38477C22.5094 2.38477 22.0269 2.51034 21.5984 2.74954L5.78595 11.6441C5.33947 11.8963 4.96754 12.262 4.70783 12.7042C4.70783 12.709 4.70593 12.7136 4.70256 12.7169C4.69919 12.7203 4.69462 12.7222 4.68986 12.7222V12.7581C4.44143 13.1768 4.31104 13.6549 4.31251 14.1417V31.8589C4.31342 32.3711 4.45031 32.8739 4.70918 33.3159C4.96806 33.7579 5.33964 34.1232 5.78595 34.3745L21.5984 43.2691C21.9965 43.4862 22.4391 43.6092 22.8922 43.6284H23.1438C23.5854 43.6089 24.0163 43.4858 24.4016 43.2691L40.2141 34.3745C40.6604 34.1232 41.032 33.7579 41.2908 33.3159C41.5497 32.8739 41.6866 32.3711 41.6875 31.8589V14.1417C41.6901 13.6434 41.5599 13.1534 41.3102 12.7222ZM23 5.24719L37.3211 13.2972L31.8227 16.4238L17.3219 8.42766L23 5.24719ZM23.1617 21.3472L8.69689 13.2972L14.375 10.0988L28.8938 18.0948L23.1617 21.3472ZM24.4555 39.9448L24.5992 23.8448L30.3672 20.5566V27.4027C30.3672 27.7839 30.5187 28.1495 30.7882 28.4191C31.0578 28.6887 31.4235 28.8402 31.8047 28.8402C32.1859 28.8402 32.5516 28.6887 32.8212 28.4191C33.0908 28.1495 33.2422 27.7839 33.2422 27.4027V18.9214L38.8125 15.7589V31.8589L24.4555 39.9448Z"
                    fill="black"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4 text-red-500">
                5. Deployment and Maintenance
                </h3>
                <p className="">
                  App Store Submission: Submit the app to app stores (Google Play for Android and the App Store for iOS) and comply with their submission guidelines.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      </main>
    </div>
  );
}
