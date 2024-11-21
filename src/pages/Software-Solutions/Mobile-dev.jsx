import mobileIcon from "../../assets/mobie-hb.png";
import { Code, Layout, Smartphone, Globe, ChevronRight } from "lucide-react";

const services = [
  {
    icon: <Code className="w-12 h-12 text-secondary" />,
    title: "Custom Development",
    description: "Building custom software tailored to meet your business needs.",
  },
  {
    icon: <Layout className="w-12 h-12 text-secondary" />,
    title: "Responsive & Faster",
    description: "Creating responsive designs that load quickly on any device.",
  },
  {
    icon: <Smartphone className="w-12 h-12 text-secondary" />,
    title: "Android App",
    description: "Developing Android apps that engage mobile users.",
  },
  {
    icon: <Globe className="w-12 h-12 text-secondary" />,
    title: "iOS App",
    description: "Crafting powerful iOS apps that enhance user experience.",
  },
];


function Mobiledev() {
  return (
    <div className="py-20">
       <main>
       <section
      className="min-h-screen bg-[url('../../src/assets/MD-IT.png')] bg-cover bg-center bg-no-repeat flex items-center justify-center px-4 sm:px-6 lg:px-8"
    >
      <div className="text-center">
        <h1 className="text-6xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-blue-500">
           Mobile Application Development 
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
      {/* Header Ends-Here */}
      {/* space-top div */}
      <div className="py-20"></div>
      {/* Our Service */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-card text-card-foreground rounded-lg p-6 shadow-md hover:shadow-lg transition duration-300"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
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
			<h2 className="text-3xl font-bold tracking-tight text-center sm:text-5xl text-gray-900">Mobile Application Development</h2>
			<p className="max-w-3xl mx-auto mt-4 text-xl text-center text-gray-600"></p>
		</div>
		<div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
			<div>
				<h3 className="text-2xl font-bold tracking-tight sm:text-3xl text-gray-900">Key Aspects of Mobile Application Development</h3>
				<p className="mt-3 text-lg text-gray-600">Mobile application development involves creating software applications designed for mobile devices such as smartphones and tablets. It includes designing, coding, and deploying apps to provide engaging user experiences across platforms like iOS and Android.

</p>
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
							<h4 className="text-lg font-medium leading-6 text-gray-900">Native App Development</h4>
							<p className="mt-2 text-gray-600">Involves building apps specifically for a single platform, such as iOS or Android, using platform-specific languages like Swift or Kotlin. Native apps provide superior performance, seamless integration with device features, and an optimized user experience tailored to the platform.</p>
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
							<h4 className="text-lg font-medium leading-6 text-gray-900">Cross-Platform Development</h4>
							<p className="mt-2 text-gray-600">Enables creating apps that work on multiple platforms with a single codebase. Using frameworks like React Native or Flutter, this approach saves time and cost while maintaining high performance and consistency across different devices.</p>
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
							<h4 className="text-lg font-medium leading-6 text-gray-900">User-Centric Design and Functionality</h4>
							<p className="mt-2 text-gray-600">Focuses on intuitive user interfaces, responsive design, and functionality that addresses user needs. We ensure apps are visually appealing, easy to navigate, and provide features like push notifications, offline access, and smooth interactions to enhance user satisfaction.</p>
						</div>
					</div>
				</div>
			</div>
			<div aria-hidden="true" className="mt-10 lg:mt-0">
				<img src="https://blackhattechnologies.com/assets/media/others/mobile-application-development.png" alt="" className="mx-auto rounded-lg shadow-lg bg-gray-500" />
			</div>
		</div>
		<div>
			<div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
				<div className="lg:col-start-2">
					<h3 className="text-2xl font-bold tracking-tight sm:text-3xl text-gray-900">Our Solutions</h3>
					<p className="mt-3 text-lg text-gray-600">Key Offerings in Our Mobile App Development Solutions.</p>
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
								<h4 className="text-lg font-medium leading-6 text-gray-900">Custom Mobile App Development</h4>
								<p className="mt-2 text-gray-600">We build tailor-made mobile applications aligned with your business objectives. Our process involves understanding your vision, designing intuitive interfaces, and ensuring seamless functionality to deliver apps that enhance user engagement and drive measurable results.</p>
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
								<h4 className="text-lg font-medium leading-6 text-gray-900">Cross-Platform App Solutions</h4>
								<p className="mt-2 text-gray-600">Leveraging frameworks like Flutter and React Native, we create apps that run efficiently on multiple platforms. This approach reduces development time and costs while ensuring a consistent user experience across Android and iOS devices.</p>
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
								<h4 className="text-lg font-medium leading-6 text-gray-900">Enterprise and Consumer Apps</h4>
								<p className="mt-2 text-gray-400">We develop apps for both enterprise needs and consumer markets. From workflow automation tools for businesses to feature-rich apps for end-users, our solutions are robust, scalable, and designed to enhance productivity and satisfaction.</p>
							</div>
						</div>
					</div>
				</div>
				<div className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1">
					<img src="" alt="" className="mx-auto rounded-lg shadow-lg bg-gray-500" />
				</div>
			</div>
		</div>
	</div>
      </section>
      {/* space-top div */}
      <div className="py-20"></div>
      {/* Section-One-Starts-Here */}
      <section className="pt-20">
        {/* Container */}
        <div className="mx-auto w-full max-w-7xl px-5 py-16 md:py-20">
          {/* Component */}
          <div className="grid gap-16 md:grid-cols-2 md:gap-4 lg:grid-cols-[1fr_340px_1fr]">
            {/* Item */}
            <div className="flex flex-col items-start gap-16 [grid-area:1/1/2/3] md:gap-24 md:[grid-area:1/1/2/2] lg:[grid-area:1/1/2/2]">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-gray-100 p-2.5">
                    <svg
                      width="26"
                      height="26"
                      viewBox="0 0 26 26"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M23.5625 12.5938H18.9922C19.8544 11.4151 20.317 9.99158 20.3125 8.53125C20.3098 6.70042 19.5813 4.94535 18.2867 3.65076C16.9921 2.35617 15.2371 1.62769 13.4062 1.625C13.1908 1.625 12.9841 1.7106 12.8317 1.86298C12.6794 2.01535 12.5938 2.22201 12.5938 2.4375V7.00781C11.4151 6.14564 9.99158 5.683 8.53125 5.6875C6.70042 5.69019 4.94535 6.41867 3.65076 7.71326C2.35617 9.00785 1.62769 10.7629 1.625 12.5938C1.625 12.8092 1.7106 13.0159 1.86298 13.1683C2.01535 13.3206 2.22201 13.4062 2.4375 13.4062H7.00781C6.14564 14.5849 5.683 16.0084 5.6875 17.4688C5.69019 19.2996 6.41867 21.0546 7.71326 22.3492C9.00785 23.6438 10.7629 24.3723 12.5938 24.375C12.8092 24.375 13.0159 24.2894 13.1683 24.137C13.3206 23.9847 13.4062 23.778 13.4062 23.5625V18.9922C14.5849 19.8544 16.0084 20.317 17.4688 20.3125C19.2996 20.3098 21.0546 19.5813 22.3492 18.2867C23.6438 16.9921 24.3723 15.2371 24.375 13.4062C24.375 13.1908 24.2894 12.9841 24.137 12.8317C23.9847 12.6794 23.778 12.5938 23.5625 12.5938ZM8.53125 7.3125C9.30767 7.30929 10.0751 7.47897 10.7777 7.80923C11.4804 8.13949 12.1008 8.62204 12.5938 9.22188V11.7812H3.31094C3.50677 10.5369 4.14007 9.4033 5.09698 8.58416C6.05389 7.76502 7.27162 7.31411 8.53125 7.3125ZM17.4688 18.6875C16.6923 18.6907 15.9249 18.521 15.2223 18.1908C14.5196 17.8605 13.8992 17.378 13.4062 16.7781V14.2188H22.6891C22.4932 15.4631 21.8599 16.5967 20.903 17.4158C19.9461 18.235 18.7284 18.6859 17.4688 18.6875Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                  <p className="max-w-xs text-gray-500 md:max-w-[256px]">
                  Build apps that work seamlessly across Android and iOS devices.
                  </p>
                </div>
                <h3 className="text-2xl font-bold md:text-3xl  text-red-500">
                Cross-Platform Development.
                </h3>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-gray-100 p-2.5">
                    <svg
                      width="26"
                      height="26"
                      viewBox="0 0 26 26"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M23.5625 12.5938H18.9922C19.8544 11.4151 20.317 9.99158 20.3125 8.53125C20.3098 6.70042 19.5813 4.94535 18.2867 3.65076C16.9921 2.35617 15.2371 1.62769 13.4062 1.625C13.1908 1.625 12.9841 1.7106 12.8317 1.86298C12.6794 2.01535 12.5938 2.22201 12.5938 2.4375V7.00781C11.4151 6.14564 9.99158 5.683 8.53125 5.6875C6.70042 5.69019 4.94535 6.41867 3.65076 7.71326C2.35617 9.00785 1.62769 10.7629 1.625 12.5938C1.625 12.8092 1.7106 13.0159 1.86298 13.1683C2.01535 13.3206 2.22201 13.4062 2.4375 13.4062H7.00781C6.14564 14.5849 5.683 16.0084 5.6875 17.4688C5.69019 19.2996 6.41867 21.0546 7.71326 22.3492C9.00785 23.6438 10.7629 24.3723 12.5938 24.375C12.8092 24.375 13.0159 24.2894 13.1683 24.137C13.3206 23.9847 13.4062 23.778 13.4062 23.5625V18.9922C14.5849 19.8544 16.0084 20.317 17.4688 20.3125C19.2996 20.3098 21.0546 19.5813 22.3492 18.2867C23.6438 16.9921 24.3723 15.2371 24.375 13.4062C24.375 13.1908 24.2894 12.9841 24.137 12.8317C23.9847 12.6794 23.778 12.5938 23.5625 12.5938ZM8.53125 7.3125C9.30767 7.30929 10.0751 7.47897 10.7777 7.80923C11.4804 8.13949 12.1008 8.62204 12.5938 9.22188V11.7812H3.31094C3.50677 10.5369 4.14007 9.4033 5.09698 8.58416C6.05389 7.76502 7.27162 7.31411 8.53125 7.3125ZM17.4688 18.6875C16.6923 18.6907 15.9249 18.521 15.2223 18.1908C14.5196 17.8605 13.8992 17.378 13.4062 16.7781V14.2188H22.6891C22.4932 15.4631 21.8599 16.5967 20.903 17.4158C19.9461 18.235 18.7284 18.6859 17.4688 18.6875Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                  <p className="max-w-xs text-gray-500 md:max-w-[256px]">
                  Create high-performance apps tailored for either Android or iOS.
                  </p>
                </div>
                <h3 className="text-2xl font-bold md:text-3xl  text-red-500">
                Native App Development.
                </h3>
              </div>
            </div>
            {/* Item */}
            <div
              className="w-86 mt-4 h-88 bg-contain bg-[50%_100%] bg-no-repeat [grid-area:3/1/4/3] sm:mt-12 sm:h-[560px] sm:w-full md:mt-0 lg:[grid-area:1/2/1/3]"
              style={{
                backgroundImage:
                  'url("https://assets.website-files.com/6458c625291a94a195e6cf3a/647b2f0c0e6afb25726156ec_Column.svg")',
              }}
            ></div>
            {/* Item */}
            <div className="flex flex-col items-start gap-16 [grid-area:2/1/3/3] md:gap-24 md:[grid-area:1/2/2/3] lg:[grid-area:1/3/4/4]">
              <div className="flex flex-col gap-4 md:items-end">
                <div className="flex items-center gap-4 md:flex-row-reverse">
                  <div className="rounded-full bg-gray-100 p-2.5">
                    <svg
                      width="26"
                      height="26"
                      viewBox="0 0 26 26"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M23.5625 12.5938H18.9922C19.8544 11.4151 20.317 9.99158 20.3125 8.53125C20.3098 6.70042 19.5813 4.94535 18.2867 3.65076C16.9921 2.35617 15.2371 1.62769 13.4062 1.625C13.1908 1.625 12.9841 1.7106 12.8317 1.86298C12.6794 2.01535 12.5938 2.22201 12.5938 2.4375V7.00781C11.4151 6.14564 9.99158 5.683 8.53125 5.6875C6.70042 5.69019 4.94535 6.41867 3.65076 7.71326C2.35617 9.00785 1.62769 10.7629 1.625 12.5938C1.625 12.8092 1.7106 13.0159 1.86298 13.1683C2.01535 13.3206 2.22201 13.4062 2.4375 13.4062H7.00781C6.14564 14.5849 5.683 16.0084 5.6875 17.4688C5.69019 19.2996 6.41867 21.0546 7.71326 22.3492C9.00785 23.6438 10.7629 24.3723 12.5938 24.375C12.8092 24.375 13.0159 24.2894 13.1683 24.137C13.3206 23.9847 13.4062 23.778 13.4062 23.5625V18.9922C14.5849 19.8544 16.0084 20.317 17.4688 20.3125C19.2996 20.3098 21.0546 19.5813 22.3492 18.2867C23.6438 16.9921 24.3723 15.2371 24.375 13.4062C24.375 13.1908 24.2894 12.9841 24.137 12.8317C23.9847 12.6794 23.778 12.5938 23.5625 12.5938ZM8.53125 7.3125C9.30767 7.30929 10.0751 7.47897 10.7777 7.80923C11.4804 8.13949 12.1008 8.62204 12.5938 9.22188V11.7812H3.31094C3.50677 10.5369 4.14007 9.4033 5.09698 8.58416C6.05389 7.76502 7.27162 7.31411 8.53125 7.3125ZM17.4688 18.6875C16.6923 18.6907 15.9249 18.521 15.2223 18.1908C14.5196 17.8605 13.8992 17.378 13.4062 16.7781V14.2188H22.6891C22.4932 15.4631 21.8599 16.5967 20.903 17.4158C19.9461 18.235 18.7284 18.6859 17.4688 18.6875Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                  <p className="max-w-xs text-gray-500 md:max-w-[256px] md:text-right">
                  Design intuitive, engaging mobile interfaces for an exceptional user experience.
                  </p>
                </div>
                <h3 className="text-2xl font-bold md:text-right md:text-3xl  text-red-500">
                UI/UX Design for Mobile
                </h3>
              </div>
              <div className="flex flex-col gap-4 md:items-end">
                <div className="flex items-center gap-4 md:flex-row-reverse">
                  <div className="rounded-full bg-gray-100 p-2.5">
                    <svg
                      width="26"
                      height="26"
                      viewBox="0 0 26 26"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M23.5625 12.5938H18.9922C19.8544 11.4151 20.317 9.99158 20.3125 8.53125C20.3098 6.70042 19.5813 4.94535 18.2867 3.65076C16.9921 2.35617 15.2371 1.62769 13.4062 1.625C13.1908 1.625 12.9841 1.7106 12.8317 1.86298C12.6794 2.01535 12.5938 2.22201 12.5938 2.4375V7.00781C11.4151 6.14564 9.99158 5.683 8.53125 5.6875C6.70042 5.69019 4.94535 6.41867 3.65076 7.71326C2.35617 9.00785 1.62769 10.7629 1.625 12.5938C1.625 12.8092 1.7106 13.0159 1.86298 13.1683C2.01535 13.3206 2.22201 13.4062 2.4375 13.4062H7.00781C6.14564 14.5849 5.683 16.0084 5.6875 17.4688C5.69019 19.2996 6.41867 21.0546 7.71326 22.3492C9.00785 23.6438 10.7629 24.3723 12.5938 24.375C12.8092 24.375 13.0159 24.2894 13.1683 24.137C13.3206 23.9847 13.4062 23.778 13.4062 23.5625V18.9922C14.5849 19.8544 16.0084 20.317 17.4688 20.3125C19.2996 20.3098 21.0546 19.5813 22.3492 18.2867C23.6438 16.9921 24.3723 15.2371 24.375 13.4062C24.375 13.1908 24.2894 12.9841 24.137 12.8317C23.9847 12.6794 23.778 12.5938 23.5625 12.5938ZM8.53125 7.3125C9.30767 7.30929 10.0751 7.47897 10.7777 7.80923C11.4804 8.13949 12.1008 8.62204 12.5938 9.22188V11.7812H3.31094C3.50677 10.5369 4.14007 9.4033 5.09698 8.58416C6.05389 7.76502 7.27162 7.31411 8.53125 7.3125ZM17.4688 18.6875C16.6923 18.6907 15.9249 18.521 15.2223 18.1908C14.5196 17.8605 13.8992 17.378 13.4062 16.7781V14.2188H22.6891C22.4932 15.4631 21.8599 16.5967 20.903 17.4158C19.9461 18.235 18.7284 18.6859 17.4688 18.6875Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                  <p className="max-w-xs text-gray-500 md:max-w-[256px] md:text-right">
                   Provide ongoing updates and support to ensure peak app performance.
                  </p>
                </div>
                <h3 className="text-2xl font-bold md:text-right md:text-3xl text-red-500">
                Maintenance & Support
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* space-top div */}
      <div className="py-20"></div>
      {/* Section-one-end-here */}
      {/* Section-second-start-here */}
      <section>
        {/* Container */}
        <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
          {/* Title */}
          <h2 className="items-center text-center text-3xl font-bold md:text-5xl">
            Make every step user-centric
          </h2>
          <p className="mx-auto mb-8 mt-4 max-w-lg text-center text-sm text-gray-500 sm:text-base md:mb-12">
            Lorem ipsum dolor sit amet consectetur adipiscing elit ut
            aliquam,purus sit amet luctus magna fringilla urna
          </p>
          {/* List */}
          <ul className="grid gap-5 sm:grid-cols-2 md:grid-cols-4 md:gap-0">
            <li className="flex flex-col items-center gap-6 md:border-r md:px-10 md:py-4 p-8 md:border-gray-300">
              <img
                src="https://www.svgrepo.com/show/340420/hybrid-networking.svg"
                alt=""
                className="inline-block h-16 w-16 rounded-full object-cover"
              />
              <p className="text-xl font-semibold text-blue-700"> Hybrid Development</p>
              <p className="text-center text-sm ">
              Hybrid apps are often created using standard web technologies like HTML, CSS, and JavaScript, which are then packaged into a native container to run on both Android and iOS.
              </p>
            </li>
            <li className="flex flex-col items-center gap-6 md:border-r md:px-10 md:py-4 p-8 md:border-gray-300">
              <img
                src="data:image/png;base64,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"
                alt=""
                className="inline-block h-16 w-16 rounded-full object-cover"
              />
              <p className="text-xl font-semibold text-blue-700">Progressive Web App</p>
              <p className="text-center text-sm ">
              JavaScript: PWAs are web-based and built with JavaScript along with frameworks and libraries like Angular, React, or Vue to create app-like experiences.
              </p>
            </li>
            <li className="flex flex-col items-center gap-6 md:border-r md:px-10 md:py-4 p-8 md:border-gray-300">
              <img
                src="data:image/png;base64,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"
                alt=""
                className="inline-block h-16 w-16 rounded-full object-cover"
              />
              <p className="text-xl font-semibold text-blue-700">Cross Platform </p>
              <p className="text-center text-sm ">
              Dart (Flutter) The language for Google’s Flutter framework, used to build apps for both iOS and Android with a single codebase.
              </p>
            </li>
            <li className="flex flex-col items-center gap-6 md:border-r md:px-10 md:py-4 p-8 md:border-gray-300">
              <img
                src="data:image/png;base64,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"
                alt=""
                className="inline-block h-16 w-16 rounded-full object-cover"
              />
              <p className="text-xl font-semibold text-blue-700">Native Development</p>
              <p className="text-center text-sm ">
              Swift (iOS) The primary language for iOS app development, designed by Apple for building efficient and safe applications.
              </p>
            </li>
          </ul>
        </div>
      </section>
      {/* Section-second-end-here */}
      {/* Second-three-start-here */}
      {/* <section>
     
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
     
        <h2 className="mx-auto mb-8 max-w-3xl text-center text-3xl font-bold md:mb-12 md:text-5xl lg:mb-16">
          Smooth Process. Transformative Outcomes.
        </h2>
        
        <div className="flex flex-col items-center justify-center bg-contain bg-center pt-10 bg-[url('https://assets.website-files.com/6458c625291a94a195e6cf3a/648825fca218588cb636c341_Group%2048114.png')]">
          <div className="flex flex-col justify-around gap-4 sm:flex-row">
            <a
              className="rounded-md border border-solid border-gray-300 bg-gray-100 p-6 text-black"
              href="#w-tabs-2-data-w-pane-0"
            >
              <h5 className="mb-2 text-xl font-bold">
                Personalized Consultation
              </h5>
              <p className="text-sm">
                We start by understanding your unique goals and challenges,
                laying the foundation for a tailored strategy.
              </p>
            </a>
            <a
              className="rounded-md border border-solid border-gray-300 bg-white p-6 text-black"
              tabIndex="-1"
              href="#w-tabs-2-data-w-pane-1"
            >
              <h5 className="mb-2 text-xl font-bold">Strategy Development</h5>
              <p className="text-sm">
                We start by understanding your unique goals and challenges,
                laying the foundation for a tailored strategy.
              </p>
            </a>
            <a className="rounded-md border border-solid border-gray-300 bg-white p-6 text-black">
              <h5 className="mb-2 text-xl font-bold">Analysis and Reporting</h5>
              <p className="text-sm">
                We start by understanding your unique goals and challenges,
                laying the foundation for a tailored strategy.
              </p>
            </a>
          </div>
          <div className="max-w-5xl">
            <img
              src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6488257b75d6a7b950248536_Group%2048113.svg"
              alt=""
              className="mt-16 inline-block"
            />
          </div>
        </div>
      </div>
    </section> */}
    {/* space-top div */}
    <div className="py-20"></div>
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
      {/* Section-three-end-here */}
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
                  src="https://firebasestorage.googleapis.com/v0/b/flowspark-1f3e0.appspot.com/o/Tailspark%20Images%2FVector.png?alt=media&token=441fbdcd-c757-4be7-8a91-c4ef4c12d3d4"
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
    </div>
  );
}

export default Mobiledev;
