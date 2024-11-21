import { Code, Layout, Smartphone, Globe, ChevronRight } from "lucide-react";

const services = [
  {
    icon: <Code className="w-12 h-12 text-pink-600" />,
    title: "User-Centric Design",
    description: "Crafting intuitive, visually appealing interfaces that prioritize user experience and ease of navigation.",
  },
  {
    icon: <Layout className="w-12 h-12 text-pink-600" />,
    title: "Responsive & Accessible Design",
    description: "Creating designs that are optimized for all devices and adhere to accessibility standards to ensure inclusivity.",
  },
  {
    icon: <Smartphone className="w-12 h-12 text-pink-600" />,
    title: "Prototyping & Wireframing",
    description: "Developing interactive prototypes and wireframes to visualize and refine ideas before full-scale implementation.",
  },
  {
    icon: <Globe className="w-12 h-12 text-pink-600" />,
    title: "Usability Testing & Optimization",
    description: "Conducting rigorous usability tests to gather user feedback and iterating designs for maximum effectiveness and satisfaction.",
  },
];
function UiUx() {
  return (
    <div className="py-20">
      {/* <section
  className="py-40 bg-[url('../../src/assets/uiux-lp.png')] bg-cover bg-center text-primary-foreground"
>
  <div className="container mx-auto px-4">
    <div className="md:flex md:items-center md:justify-between">
      <div className="md:w-1/2 mb-10 md:mb-0">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
          Expert Web Development Solutions
        </h1>
        <p className="text-xl mb-8">
          We create stunning, high-performance websites that drive results for your business.
        </p>
        <button className="bg-background text-foreground px-6 py-3 rounded-full font-semibold hover:bg-opacity-90 transition duration-300">
          Get Started
        </button>
      </div>
      <div className="md:w-1/2">
        <img src="../../src/assets/uiux-banner.png" alt="Web Development" />
      </div>
    </div>
  </div>
</section> */}

       {/* <section className="py-40 bg-gradient-to-r from-red-500 to-blue-900 text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="md:flex md:items-center md:justify-between">
              <div className="md:w-1/2 mb-10 md:mb-0">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Expert Web Development Solutions</h1>
                <p className="text-xl mb-8 ">We create stunning, high-performance websites that drive results for your business.</p>
                <button className="bg-background text-foreground px-6 py-3 rounded-full font-semibold hover:bg-opacity-90 transition duration-300">
                  Get Started
                </button>
              </div>
              <div className="md:w-1/2">
                <img src="../src/assets/Banner.gif" alt="Web Development" />
              </div>
            </div>
          </div>
        </section> */}
      {/* Section-one-start-Here */}
      <main>
       <section
      className="min-h-screen bg-[url('../../src/assets/uiux01.png')] bg-cover bg-center bg-no-repeat flex items-center justify-center px-4 sm:px-6 lg:px-8"
    >
      <div className="text-center">
        <h1 className="text-6xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-transparent bg-clip-text 
             bg-gradient-to-r from-white via-red-00 to-white bg-[0%] animate-gradient-move font-mono">
          UI & UX Development 
        </h1>
        <p className="text-base sm:text-lg md:text-xl mb-8">
          {/* We create stunning, high-performance websites that drive results for your business. */}
        </p>
        {/* <button className="bg-background text-foreground px-4 py-2 sm:px-6 sm:py-3 rounded-full font-semibold hover:bg-opacity-90 transition duration-300">
          Get Started
        </button> */}
      </div>
       </section>
     </main>
      {/* Section-one-End-Here */}
      {/* space-top div */}
<div className="py-20"></div>
      {/* Our Service */}
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
      {/* Section-Five-start-Here */}
    
      {/* Section-five-end-Here */}
      {/* space-top div */}
<div className="py-20"></div>
      {/* Section-Three-start-Here */}
      <section>
        {/* Container */}
        <div className="mx-auto w-full px-5 py-12 md:px-10 md:py-16 lg:py-20 max-w-7xl">
          {/* Heading */}
          <h2 className="mx-auto mb-12 text-center text-3xl max-w-sm md:max-w-xl font-bold md:mb-28 md:text-5xl">
            Development process
          </h2>
          {/* How it Works */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-6">
            {/* Item */}
            <div className="bg-gray-100 w-full p-6 rounded-lg  flex items-center lg:-mt-30 relative">
              <div className="flex-shrink-0 bg-gray-300 p-4 rounded-full">
                <svg
                  width="32"
                  height="33"
                  viewBox="0 0 32 33"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.2"
                    d="M29 21.1836L16.4875 28.2836C16.3374 28.3635 16.17 28.4053 16 28.4053C15.83 28.4053 15.6626 28.3635 15.5125 28.2836L3 21.1836L16 13.8086L29 21.1836Z"
                    fill="black"
                  />
                  <path
                    d="M29 13.1846L16 20.5596L3 13.1846L15.5125 6.08455C15.6626 6.00467 15.83 5.96289 16 5.96289C16.17 5.96289 16.3374 6.00467 16.4875 6.08455L29 13.1846Z"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M29 21.1836L16.4875 28.2836C16.3374 28.3635 16.17 28.4053 16 28.4053C15.83 28.4053 15.6626 28.3635 15.5125 28.2836L3 21.1836L16 13.8086L29 21.1836Z"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M29 13.1836V21.1836"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M3 13.1836V21.1836"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M16 20.5586V28.4086"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M16 5.95898V13.809"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-lg font-semibold text-red-500">
                Research & Strategy
                </p>
              </div>
              <div className="absolute top-0 right-10 bg-white border-2 border-gray-100 rounded-full h-8 w-8 flex items-center justify-center -mt-4 -mr-4">
                <span className="text-gray-700 font-bold">1</span>
              </div>
            </div>
            {/* Item */}
            <div className="bg-gray-100 w-full p-6 rounded-lg  flex items-center md:transform md:translate-y-14 relative">
              <div className="flex-shrink-0 bg-gray-300 p-4 rounded-full">
                <svg
                  width="32"
                  height="33"
                  viewBox="0 0 32 33"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.2"
                    d="M29 21.1836L16.4875 28.2836C16.3374 28.3635 16.17 28.4053 16 28.4053C15.83 28.4053 15.6626 28.3635 15.5125 28.2836L3 21.1836L16 13.8086L29 21.1836Z"
                    fill="black"
                  />
                  <path
                    d="M29 13.1846L16 20.5596L3 13.1846L15.5125 6.08455C15.6626 6.00467 15.83 5.96289 16 5.96289C16.17 5.96289 16.3374 6.00467 16.4875 6.08455L29 13.1846Z"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M29 21.1836L16.4875 28.2836C16.3374 28.3635 16.17 28.4053 16 28.4053C15.83 28.4053 15.6626 28.3635 15.5125 28.2836L3 21.1836L16 13.8086L29 21.1836Z"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M29 13.1836V21.1836"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M3 13.1836V21.1836"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M16 20.5586V28.4086"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M16 5.95898V13.809"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-lg font-semibold text-blue-500">
                Design & Prototyping
                </p>
              </div>
              <div className="absolute top-0 right-10 bg-white border-2 border-gray-100 rounded-full h-8 w-8 flex items-center justify-center -mt-4 -mr-4">
                <span className="text-gray-700 font-bold">2</span>
              </div>
            </div>
            {/* Item */}
            <div className="bg-gray-100 w-full p-6 rounded-lg  flex items-center md:transform md:translate-y-28 relative">
              <div className="flex-shrink-0 bg-gray-300 p-4 rounded-full">
                <svg
                  width="32"
                  height="33"
                  viewBox="0 0 32 33"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.2"
                    d="M29 21.1836L16.4875 28.2836C16.3374 28.3635 16.17 28.4053 16 28.4053C15.83 28.4053 15.6626 28.3635 15.5125 28.2836L3 21.1836L16 13.8086L29 21.1836Z"
                    fill="black"
                  />
                  <path
                    d="M29 13.1846L16 20.5596L3 13.1846L15.5125 6.08455C15.6626 6.00467 15.83 5.96289 16 5.96289C16.17 5.96289 16.3374 6.00467 16.4875 6.08455L29 13.1846Z"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M29 21.1836L16.4875 28.2836C16.3374 28.3635 16.17 28.4053 16 28.4053C15.83 28.4053 15.6626 28.3635 15.5125 28.2836L3 21.1836L16 13.8086L29 21.1836Z"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M29 13.1836V21.1836"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M3 13.1836V21.1836"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M16 20.5586V28.4086"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M16 5.95898V13.809"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-lg font-semibold text-green-500">
                  Testing & Iteration
                </p>
              </div>
              <div className="absolute top-0 right-10 bg-white border-2 border-gray-100 rounded-full h-8 w-8 flex items-center justify-center -mt-4 -mr-4">
                <span className="text-gray-700 font-bold">3</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section-Three-End-Here */}
      {/* space-top div */}
<div className="py-20"></div>
      {/* Section-Six-start-Here */}
      <section className=" text-gray-100 pt-40">
	<div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
		<div>
			<h2 className="text-3xl font-bold tracking-tight text-center sm:text-5xl text-gray-900">UI UX Development</h2>
			<p className="max-w-3xl mx-auto mt-4 text-xl text-center text-gray-600"></p>
		</div>
		<div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
			<div>
				<h3 className="text-2xl font-bold tracking-tight sm:text-3xl text-gray-900">what is UI & UX ?</h3>
				<p className="mt-3 text-lg text-gray-600">UI/UX development involves creating user-friendly digital experiences by designing intuitive interfaces (UI) and optimizing user interactions (UX) to ensure functionality, accessibility, and satisfaction.</p>
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
							<h4 className="text-lg font-medium leading-6 text-gray-900"> User Interface (UI) Design</h4>
							<p className="mt-2 text-gray-600">UI design focuses on the visual aspects of a product, including layout, typography, colors, and elements like buttons and menus. The goal is to create aesthetically pleasing and consistent designs that enhance usability and reflect the brand identity.</p>
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
							<h4 className="text-lg font-medium leading-6 text-gray-900">User Experience (UX) Design</h4>
							<p className="mt-2 text-gray-600">UX design emphasizes user interaction, ensuring smooth and intuitive navigation. It involves understanding user behavior, solving pain points, and creating seamless journeys that meet user needs while achieving business objectives.</p>
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
							<h4 className="text-lg font-medium leading-6 text-gray-900">Development & Implementation</h4>
							<p className="mt-2 text-gray-600">This stage involves translating designs into functional products using front-end and back-end technologies. It ensures responsiveness, performance optimization, and adherence to usability standards, delivering a polished and accessible experience across devices.
</p>
						</div>
					</div>
				</div>
			</div>
			<div aria-hidden="true" className="mt-10 lg:mt-0">
				<img src="https://brandemic.in/wp-content/uploads/2024/08/neumorphism-vs-glassmorphism-ui-design-brandemic.webp" alt="" className="mx-auto rounded-lg shadow-lg bg-gray-500" />
			</div>
		</div>
		<div>
			<div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
				<div className="lg:col-start-2">
					<h3 className="text-2xl font-bold tracking-tight sm:text-3xl text-gray-900">Our Solution</h3>
					<p className="mt-3 text-lg text-gray-400">Our UI/UX development solutions provide tailored digital experiences by combining innovative design with user-centered functionality. We deliver scalable, accessible, and visually stunning interfaces that drive engagement and business growth.</p>
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
								<h4 className="text-lg font-medium leading-6 text-gray-900">Custom UI/UX Design Solutions</h4>
								<p className="mt-2 text-gray-600">We craft personalized designs that align with your brand identity and target audience. From unique layouts to innovative features, our solutions are tailored to reflect your vision while enhancing user satisfaction and loyalty.</p>
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
								<h4 className="text-lg font-medium leading-6 text-gray-900">Cross-Platform Design</h4>
								<p className="mt-2 text-gray-600">Our solutions ensure a consistent and responsive experience across devices, including desktops, tablets, and mobiles. By optimizing designs for all screen sizes, we help you reach and engage users seamlessly across multiple platforms.</p>
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
								<h4 className="text-lg font-medium leading-6 text-gray-900">Usability Enhancement</h4>
								<p className="mt-2 text-gray-600">We focus on simplifying user interactions by identifying pain points and eliminating friction in navigation. Our designs enhance usability through intuitive layouts, meaningful feedback, and accessibility compliance to maximize user engagement and retention.</p>
							</div>
						</div>
					</div>
				</div>
				<div className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1">
					<img src="https://i.pinimg.com/736x/4b/3e/ea/4b3eea22e3967711f384ba0b776baa73.jpg" alt="" className="mx-auto rounded-lg shadow-lg bg-gray-500" />
				</div>
			</div>
		</div>
	</div>
      </section>
      {/* space-top div */}
<div className="py-20"></div>
      {/* What we offer  */}
      <section>
        {/* Container */}
        <div className="mx-auto w-full px-5 py-12 md:px-10 md:py-16 lg:py-20">
          {/* Heading */}
          <h2 className="mx-auto mb-12 text-center text-3xl font-extrabold md:mb-20 md:text-5xl text-blue-500">
            What we offer
          </h2>
          {/* How it Works */}
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-6">
            {/* Item */}
            <div className="flex flex-row items-center gap-6 rounded-[80px] border border-solid  b px-6 py-4 transition border-blue-500 hover:bg-red-500 hover:text-white">
              <div className="flex h-20 w-20 flex-none flex-col items-center justify-center rounded-full bg-white">
                <img
                  src="https://media.istockphoto.com/id/1337566752/vector/mass-customization-vector-line-icon-customisation-concept-flat-design.jpg?s=612x612&w=0&k=20&c=qb-umUPRqZLfCqw-ZuxKy_QVj7LguN9RDdXsLiZSPW4="
                  alt="Get Started Icon 1"
                  className="inline-block"
                />
              </div>
              <div className="flex flex-col items-start gap-2.5">
                <h5 className="text-base font-bold md:text-xl">
                Custom UI/UX Design
                </h5>
                <p className=" text-gray-800 hover:text-white">
                Tailored designs that reflect your brand identity and resonate with your target audience.
                </p>
              </div>
            </div>
            {/* Item */}
            <div className="flex flex-row items-center gap-6 rounded-[60px] border border-solid  px-6 py-4 transition border-blue-500 hover:bg-red-500 hover:text-white">
              <div className="flex h-20 w-20 flex-none flex-col items-center justify-center  bg-white">
                <img
                  src="https://png.pngtree.com/png-clipart/20230923/original/pngtree-modern-flat-responsive-web-design-icon-with-laptop-and-smartphone-vector-png-image_12556646.png"
                  alt="Get Started Icon 2"
                  className="inline-block"
                />
              </div>
              <div className="flex flex-col items-start gap-2.5">
                <h5 className="text-base font-bold md:text-xl">
                Responsive & Adaptive Solutions
                </h5>
                <p className=" text-gray-500 hover:text-white">
                Designs optimized for all devices and screen sizes, ensuring seamless user experiences.
                </p>
              </div>
            </div>
            {/* Item */}
            <div className="flex flex-row items-center gap-6 rounded-[60px] border border-solid  px-6 py-4 transition border-blue-500 hover:bg-red-500 hover:text-white">
              <div className="flex h-20 w-20 flex-none flex-col items-center justify-center  bg-white">
                <img
                  src="https://w7.pngwing.com/pngs/182/135/png-transparent-computer-icons-test-icon-design-symbol-symbol-miscellaneous-angle-text.png"
                  alt="Get Started Icon 3"
                  className="inline-block"
                />
              </div>
              <div className="flex flex-col items-start gap-2.5">
                <h5 className="text-base font-bold md:text-xl">
                Prototyping & Testing
                </h5>
                <p className=" text-gray-500 hover:text-white">
                Comprehensive usability testing to identify and resolve pain points before deployment.
                </p>
              </div>
            </div>
            {/* Item */}
            <div className="flex flex-row items-center gap-6 rounded-[60px] border border-solid  px-6 py-4 transition border-blue-500 hover:bg-red-500 hover:text-white">
              <div className="flex h-20 w-20 flex-none flex-col items-center justify-center  bg-white">
                <img
                  src="https://png.pngtree.com/png-clipart/20230915/original/pngtree-monochrome-optimization-method-icon-for-web-design-and-infographics-vector-png-image_12221098.png"
                  alt="Get Started Icon 4"
                  className="inline-block"
                />
              </div>
              <div className="flex flex-col items-start gap-2.5">
                <h5 className="text-base font-bold md:text-xl">
                Continuous Optimization
                </h5>
                <p className=" text-gray-500 hover:text-white">
                Enhancing user interfaces to stay aligned with evolving trends and user expectations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default UiUx;
