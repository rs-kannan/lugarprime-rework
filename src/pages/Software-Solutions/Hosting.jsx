import { Code, Layout, Smartphone, Globe, ChevronRight } from "lucide-react";

const services = [
  {
    icon: <Code className="w-12 h-12 text-primary" />,
    title: "Custom Web Development",
    description: "Tailored solutions to meet your unique business needs",
  },
  {
    icon: <Layout className="w-12 h-12 text-primary" />,
    title: "Responsive Design",
    description: "Websites that look great on any device",
  },
  {
    icon: <Smartphone className="w-12 h-12 text-primary" />,
    title: "Mobile-First Approach",
    description: "Optimized for the growing mobile user base",
  },
  {
    icon: <Globe className="w-12 h-12 text-primary" />,
    title: "E-commerce Solutions",
    description: "Powerful online stores to boost your sales",
  },
];
function Hosting() {
  return (
    <div className='py-20'>
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
         <main>
       <section
      className="min-h-screen bg-[url('../../src/assets/HS-IT.png')] bg-cover bg-center bg-no-repeat flex items-center justify-center px-4 sm:px-6 lg:px-8"
    > 
      <div className="text-center">
        <h1 className="text-6xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-white 
              font-mono">
           HOSTING SERVICE 
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
        {/* Our Service */}
        {/* <section className="py-20">
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
        </section> */}
{/* space-top div */}
<div className="py-20"></div>
      {/* section-one-Start-Here */}
      <header>
      {/* Hero Container */}
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-20">
        {/* Component */}
        <div className="mx-auto mb-8 w-full max-w-3xl text-center md:mb-12 lg:mb-16">
          {/* Hero Title */}
          <h1 className="mb-4 text-4xl font-bold md:text-6xl">
           Best Hosting Services
          </h1>
          <p className="mx-auto mb-5  text-sm text-gray-700 sm:text-xl md:mb-6 lg:mb-8">
          A reliable hosting service ensures seamless website performance, enhanced security, and scalable solutions tailored to your needs. With features like fast loading speeds, 24/7 support, high uptime, and easy integrations, the best hosting services empower businesses to deliver a smooth, uninterrupted online experience for their users, boosting trust and engagement.
          </p>
          {/* Hero Button */}
          
        </div>
        {/* Hero Image */}
        <img
          src="https://media.licdn.com/dms/image/D5612AQEEeKUw697E0w/article-cover_image-shrink_720_1280/0/1703055290925?e=2147483647&v=beta&t=CqclGrbXqsrg-dShQK-xgtOWyhCan86COhAGKBn2MbQ"
          alt=""
          className="inline-block max-h-[800px] w-full object-cover"
        />
      </div>
    </header>
      {/* section-one-End-Here */}
      {/* space-top div */}
<div className="py-20"></div>
      {/* section-Two-Start-Here */}
     <section>
      {/* Container */}
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
        {/* Title */}
        <h2 className="text-center text-3xl font-bold md:text-5xl">
          How it works
        </h2>
        <p className="mx-auto mb-8 mt-4 max-w-lg text-center text-sm text-gray-500 sm:text-base md:mb-12 lg:mb-16">
          
        </p>
        {/* Content */}
        <div className="mx-auto grid max-w-xl gap-6">
          {/* Item */}
          <div className="flex items-center justify-center rounded-sm bg-gray-100 px-6 py-4">
            <div className="mr-6 flex h-14 w-14 flex-none items-center justify-center rounded-sm bg-white">
              <p className="text-sm font-bold sm:text-xl">1</p>
            </div>
            <p className="text-sm sm:text-base text-gray-600">
              <h2 className="text-gray-900 ">Domain Registration</h2>
              Users purchase or link a domain name to establish their online address, making the website accessible via a unique URL.
            </p>
          </div>
          {/* Item */}
          <div className="flex items-center justify-center rounded-sm bg-gray-100 px-6 py-4">
            <div className="mr-6 flex h-14 w-14 flex-none items-center justify-center rounded-sm bg-white">
              <p className="text-sm font-bold sm:text-xl">2</p>
            </div>
            <p className="text-sm sm:text-base text-gray-600">
              <h2 className="text-gray-900 ">Server Allocation</h2>
              The hosting provider allocates space on its servers to store your website files, databases, and applications securely.
            </p>
          </div>
          {/* Item */}
          <div className="flex items-center justify-center rounded-sm bg-gray-100 px-6 py-4">
            <div className="mr-6 flex h-14 w-14 flex-none items-center justify-center rounded-sm bg-white">
              <p className="text-sm font-bold sm:text-xl">3</p>
            </div>
            <p className="text-sm sm:text-base text-gray-600">
              <h2 className="text-gray-900 ">Data Transmission</h2>
              When visitors access your website, the server processes and delivers the required files and data to their browser efficiently.
            </p>
          </div>
          {/* Item */}
          <div className="flex items-center justify-center rounded-sm bg-gray-100 px-6 py-4">
            <div className="mr-6 flex h-14 w-14 flex-none items-center justify-center rounded-sm bg-white">
              <p className="text-sm font-bold sm:text-xl">4</p>
            </div>
            <p className="text-sm sm:text-base text-gray-600">
              <h2 className="text-gray-900 ">Maintenance & Support</h2>
              Hosting services ensure smooth operation through regular updates, monitoring, backups, and 24/7 technical support for uninterrupted functionality.
            </p>
          </div>
        </div>
      </div>
    </section>
    {/* section-Two-End-Here */}
    {/* space-top div */}
<div className="py-20"></div>
    {/* why and what is process */}
    <section className=" text-gray-100">
	<div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
		<div>
			<h2 className="text-3xl font-bold tracking-tight text-center sm:text-5xl text-gray-900">Hosting Service</h2>
			<p className="max-w-3xl mx-auto mt-4 text-xl text-center text-gray-600"></p>
		</div>
		<div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
			<div>
				<h3 className="text-2xl font-bold tracking-tight sm:text-3xl text-gray-900">What is Hosting?</h3>
				<p className="mt-3 text-lg text-gray-600">A hosting service provides the infrastructure and resources needed to make websites or applications accessible on the internet. It stores website data on servers, ensuring reliable performance and availability for online visitors.</p>
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
							<h4 className="text-lg font-medium leading-6 text-gray-900">Web Server Space</h4>
							<p className="mt-2 text-gray-600">Hosting services allocate server space to store website files, databases, and applications. This ensures that all your website’s content is securely stored and readily accessible to visitors anytime.</p>
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
							<h4 className="text-lg font-medium leading-6 text-gray-900">Reliable Connectivity</h4>
							<p className="mt-2 text-gray-600">Hosting providers offer robust network connections and high uptime, enabling your website to remain accessible without interruptions. They manage data transmission to deliver content quickly and efficiently to users worldwide.</p>
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
							<h4 className="text-lg font-medium leading-6 text-gray-900">Additional Features & Support</h4>
							<p className="mt-2 text-gray-600">Hosting services often include added features like domain management, SSL certificates, email hosting, and technical support. These tools ensure secure, user-friendly website operations and smooth maintenance, enhancing the user experience.</p>
						</div>
					</div>
				</div>
			</div>
			<div aria-hidden="true" className="mt-10 lg:mt-0">
				<img src="https://megabytemediasolutions.com/wp-content/uploads/2019/02/domain-registration-services.png" alt="" className="mx-auto rounded-lg shadow-lg bg-gray-500" />
			</div>
		</div>
		<div>
			<div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
				<div className="lg:col-start-2">
					<h3 className="text-2xl font-bold tracking-tight sm:text-3xl text-gray-900">Our Solution</h3>
					<p className="mt-3 text-lg text-gray-600">Our hosting solutions offer reliable, scalable, and secure platforms to power your websites and applications. We ensure high performance, seamless connectivity, and 24/7 support to meet your unique business needs.</p>
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
								<h4 className="text-lg font-medium leading-6 text-gray-900">Scalable Hosting Plans</h4>
								<p className="mt-2 text-gray-600">We provide flexible hosting options, from shared and dedicated servers to cloud hosting, allowing you to scale resources as your business grows. Whether for small websites or large-scale applications, our plans cater to every requirement.</p>
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
								<h4 className="text-lg font-medium leading-6 text-gray-900">Enhanced Performance & Security</h4>
								<p className="mt-2 text-gray-600">Our hosting services ensure fast loading speeds with optimized servers and CDN integration. We prioritize security through firewalls, DDoS protection, SSL certificates, and regular backups to safeguard your data and online presence.</p>
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
								<h4 className="text-lg font-medium leading-6 text-gray-900">Comprehensive Support & Management</h4>
								<p className="mt-2 text-gray-600">We offer 24/7 technical assistance to address any issues promptly. With tools for easy website management, including control panels and one-click installations, we simplify hosting so you can focus on your business goals.</p>
							</div>
						</div>
					</div>
				</div>
				<div className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1">
					<img src="https://www.brightads.in/includes/assets/images/service-details/domain-and-hosting-provider.webp" alt="" className="mx-auto rounded-lg shadow-lg bg-gray-500" />
				</div>
			</div>
		</div>
	</div>
</section>
    {/* Section-Four-Start-Here */}
    <section>
      {/* Container */}
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
        {/* Title */}
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <h2 className="text-3xl font-bold md:text-5xl">
            {/* Seamlessly Organize and Prioritize Tasks. */}
          </h2>
          <p className="mx-auto mb-8 mt-4 text-gray-500 md:mb-12 lg:mb-16">
            {/* Lorem ipsum dolor sit amet consectetur adipiscing */}
          </p>
        </div>
        {/* Content */}
        <ul className="grid gap-5 sm:grid-cols-2 md:gap-4 lg:gap-6">
          {/* Item */}
          <li className="rounded-md bg-gray-100 p-8 md:p-10">
            <div className="flex items-center justify-between">
              <p className="mr-4 rounded-md bg-red-300 px-4 py-2 font-semibold uppercase">
              Shared Hosting
              </p>
              
            </div>
            {/* Divider */}
            <div className="mb-20 mt-4 h-0.5 w-full bg-gray-300"></div>
            <p className="mb-3 text-xl font-semibold">
              
            </p>
            <p className="text-sm text-gray-900">
            A cost-effective solution where multiple websites share server resources. Ideal for small businesses and personal websites, shared hosting offers an easy-to-manage platform with essential features for smooth online presence.
            </p>
          </li>
          {/* Item */}
          <li className="rounded-md bg-gray-100 p-8 md:p-10">
            <div className="flex  items-center justify-between">
              <p className="mr-4 rounded-md bg-blue-300 px-4 py-2 font-semibold uppercase">
              Dedicated Hosting
              </p>
              {/* <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M34.2972 10.8739L20.4472 5.0869C20.1603 4.97103 19.8397 4.97103 19.5528 5.0869L5.70277 10.8739C5.4697 10.9755 5.276 11.1505 5.15104 11.3724C5.02607 11.5943 4.97665 11.8511 5.01027 12.1037L7.3186 29.4647C7.34387 29.6509 7.41342 29.8283 7.52139 29.9819C7.62935 30.1355 7.77257 30.2608 7.93897 30.3472L19.4806 36.1343C19.6432 36.2105 19.8205 36.25 20 36.25C20.1795 36.25 20.3568 36.2105 20.5194 36.1343L32.061 30.3472C32.2274 30.2608 32.3706 30.1355 32.4786 29.9819C32.5866 29.8283 32.6561 29.6509 32.6814 29.4647L34.9897 12.1037C35.0233 11.8511 34.9739 11.5943 34.849 11.3724C34.724 11.1505 34.5303 10.9755 34.2972 10.8739V10.8739ZM25.7131 25.7176C25.5493 25.7902 25.3728 25.8296 25.1937 25.8334C24.979 25.8332 24.7684 25.7737 24.5852 25.6614C24.4019 25.5491 24.2531 25.3884 24.155 25.1968L22.9431 22.7518H17.0569L15.845 25.1968C15.7073 25.4731 15.4657 25.6831 15.1735 25.7808C14.8813 25.8785 14.5624 25.8558 14.2869 25.7176C14.0114 25.5795 13.8019 25.3373 13.7045 25.0442C13.6071 24.7512 13.6298 24.4314 13.7675 24.1551L18.9613 13.7385C19.0596 13.5472 19.2085 13.3868 19.3917 13.2748C19.575 13.1627 19.7854 13.1035 20 13.1035C20.2146 13.1035 20.425 13.1627 20.6083 13.2748C20.7915 13.3868 20.9404 13.5472 21.0387 13.7385L26.2325 24.1551C26.3645 24.4323 26.3841 24.7501 26.2873 25.0415C26.1904 25.3329 25.9846 25.5753 25.7131 25.7176V25.7176ZM20 16.849L21.789 20.437H18.211L20 16.849Z"
                  fill="currentColor"
                ></path>
              </svg> */}
            </div>
            {/* Divider */}
            <div className="mb-20 mt-4 h-0.5 w-full bg-gray-300"></div>
            <p className="mb-3 text-xl font-semibold">
            
            </p>
            <p className="text-sm text-gray-900">
            Provides an entire server exclusively for your website, ensuring maximum performance, control, and security. Dedicated hosting is perfect for high-traffic sites and applications requiring customized configurations.
            </p>
          </li>
          {/* Item */}
          <li className="rounded-md bg-gray-100 p-8 md:p-10">
            <div className="flex  items-center justify-between">
              <p className="mr-4 rounded-md bg-red-300 px-4 py-2 font-semibold uppercase">
              Cloud Hosting
              </p>
              
            </div>
            {/* Divider */}
            <div className="mb-20 mt-4 h-0.5 w-full bg-gray-300"></div>
            <p className="mb-3 text-xl font-semibold">
              
            </p>
            <p className="text-sm text-gray-1900">
            Leverages a network of interconnected servers for flexible and scalable hosting. Cloud hosting ensures high uptime, resource scalability, and load balancing, making it suitable for businesses with dynamic demands.
            </p>
          </li>
          {/* Item */}
          <li className="rounded-md bg-gray-100 p-8 md:p-10">
            <div className="flex  items-center justify-between">
              <p className="mr-4 rounded-md bg-blue-300 px-4 py-2 font-semibold uppercase">
              VPS Hosting
              </p>
              
            </div>
            {/* Divider */}
            <div className="mb-20 mt-4 h-0.5 w-full bg-gray-300"></div>
            <p className="mb-3 text-xl font-semibold">
             </p>
            <p className="text-sm text-gray-900">
            Combines the affordability of shared hosting with the control of dedicated hosting. Virtual Private Servers (VPS) provide isolated environments for enhanced performance and customization, ideal for medium-sized businesses and growing websites.
            </p>
          </li>
        </ul>
      </div>
    </section>
    {/* Section-Four-End-Here */}
    </div>
  )
}

export default Hosting
