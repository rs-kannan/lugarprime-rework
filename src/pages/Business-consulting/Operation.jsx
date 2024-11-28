import { ChevronsLeft, ChevronsRight } from "lucide-react";

function Operation() {
  return (
    <div>
      {/* Hero Section */}
     <div
  className="w-full h-[92vh] mt-[70px] flex flex-wrap items-center relative"
>
  {/* Video Background */}
  <video
    autoPlay
    loop
    muted
    className="absolute top-0 left-0 w-full h-full object-cover z-0"
  >
    <source src="https://res.cloudinary.com/dovhqn80g/video/upload/v1732800896/BCHB.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>

  {/* Content Section */}
  <div className="relative w-full h-full flex flex-wrap items-center z-10 bg-black/30">
    {/* Left Section */}
    <div className="w-full md:w-1/2 flex flex-col justify-center md:pl-16 px-0">
      <h1 className="text-gray-900 text-sm ml-[15%] font-bold w-[160px] h-7 flex items-center justify-center rounded-full mb-6 bg-yellow-500 ">
        <ChevronsRight className="text-black font-bold mr-1" />
        <span>HumanResource</span>
        <ChevronsLeft className="text-black font-bold ml-1" />
      </h1>

      <h1 className="text-white text-4xl font-bold mb-4 pl-[15%]">
      Streamlining <span className="text-red-500"> Operations</span> for Enhanced Business Efficiency.
      
       
      </h1>

      <p className="text-gray-100 text-sm mb-6 pl-[15%]">
      Offering expert solutions to optimize business processes, improve productivity, and reduce costs, ensuring seamless operations and sustainable growth across all departments.
      </p>

      <div className="pl-[15%]"></div>
    </div>

    {/* Right Section */}
    <div className="w-full md:w-1/2 flex items-center justify-center px-4">
      <img
        src="https://digital.fpt.com/wp-content/themes/fdx/assets/images/process-opt/bg-an-eff.svg"
        alt="Financial Planning"
        className="max-h-[70vh] object-contain"
      />
    </div>
  </div>
</div>

      {/* Overview Section */}
      <section className="mt-[12%] mb-[8%] bg-white">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-semibold mb-6">
            Master Your Business Future
          </h1>
          <p className="text-zinc-900 mb-8 w-full mx-auto">
            Business consulting in operations focuses on improving efficiency
            and streamlining processes within organizations. By analyzing
            workflows, identifying bottlenecks, and implementing best practices,
            consultants help businesses enhance productivity, reduce costs, and
            optimize resource allocation. The goal is to create sustainable
            growth through smarter operations and effective process management.
          </p>
        </div>
      </section>
      {/* Three Section Start here */}
      <section>
        <div className="container py-24">
          <div className="flex flex-wrap items-center mx-auto max-w-7xl">
            <div className="flex flex-col items-start mb-16 text-left lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:mb-0">
              <span className="mb-8 text-xs font-bold tracking-widest text-blue-600 uppercase">
                Business Consulting
              </span>
              <p className="mb-12 text-base leading-relaxed text-gray-900">
                {" "}
                Process Optimization Business consultants analyze current
                workflows, identifying inefficiencies and implementing
                strategies to streamline processes, reduce redundancies, and
                improve overall performance. The aim is to enhance operational
                speed, accuracy, and cost-efficiency.
              </p>
              <a className="inline-flex items-center w-full mb-4">
                <img
                  alt="blog"
                  src="https://res.cloudinary.com/dovhqn80g/image/upload/v1732800283/LP-LOGO.svg"
                  className="flex-shrink-0 object-cover object-center w-10 h-10 rounded-full"
                />
                <span className="flex flex-col flex-grow pl-3">
                  <h2 className="text-xs font-semibold tracking-widest text-blue-600 uppercase">
                    LugarPrime
                    <span
                      href="#"
                      className="font-semibold text-gray-500 lg:mb-0"
                    >
                      {" "}
                      Marketing Team{" "}
                    </span>
                  </h2>
                </span>
              </a>
            </div>
            <div className="w-full lg:w-5/6 lg:max-w-lg md:w-1/2 rounded-xl">
              <div>
                <img
                  className="object-cover object-center mx-auto rounded-lg"
                  alt="hero"
                  src="https://img.freepik.com/free-photo/writing-work-process_53876-137653.jpg?t=st=1732771613~exp=1732775213~hmac=5481491b8cefb1eb301b28e37cb04d5539cc9bd44f5bb2c423450bd45785df7e&w=1380"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Four Section Start here */}
      <section>
        <div className="container relative py-24">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center">
            <div className="w-full rounded-xl lg:w-1/2 lg:max-w-lg">
              <div>
                <div className="relative w-full max-w-lg">
                  <div className="relative">
                    <img
                      className="mx-auto rounded-lg object-cover object-center"
                      alt="hero"
                      src="https://img.freepik.com/free-vector/logistic-delivery-chain-flowchart_1284-5672.jpg?t=st=1732771702~exp=1732775302~hmac=3622da905f474bcf8a463e099422663d6ae5069f3ac813c709bd443f3e15db05&w=826"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-16 mt-12 flex flex-col items-start text-left md:mb-0 lg:w-1/2 lg:grow lg:pl-6 xl:mt-0 xl:pl-24">
              <span className="mb-8 text-xs font-bold uppercase tracking-widest text-blue-600">
                Business Guidence
              </span>
              <h1 className="mb-8 text-4xl font-bold leading-none tracking-tighter text-gray-900 md:text-7xl lg:text-4xl">
                Supply Chain Management
              </h1>
              <p className="mb-8 text-left text-base leading-relaxed text-gray-900">
                Consulting in supply chain management ensures businesses
                optimize procurement, inventory, and logistics to reduce costs
                and improve service levels. Consultants help design efficient,
                flexible, and resilient supply chains that meet customer demand
                while minimizing waste and delays.
              </p>
              <div className="mt-0 max-w-7xl flex-col sm:flex lg:mt-6">
                <div className="prose-md prose">
                  <ul>
                    <li className="text-gray-900 text-xl">
                      Improve supplier relationships.
                    </li>
                    <li className="text-blue-500 text-xl">
                      Optimize inventory control.
                    </li>
                    <li className="text-gray-900 text-xl">
                      Reduce lead times.
                    </li>
                    <li className="text-blue-500 text-xl">
                      Enhance logistics coordination.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Five Section Start here */}
      {/* Features Section */}
      <section>
        <div className="container relative py-24">
          <div className="mx-auto flex flex-wrap items-center 2xl:max-w-7xl">
            <div className="mb-16 flex flex-col items-start text-left md:mb-0 lg:w-1/2 lg:grow lg:pr-24">
              <span className="mb-8 text-xs font-bold uppercase tracking-widest text-blue-600">
                Marketing Consulting
              </span>
              <h1 className="mb-8 text-4xl font-bold leading-none tracking-tighter text-gray-900 md:text-7xl lg:text-4xl">
                Technology Integration
              </h1>
              <p className="mb-8 text-left text-base leading-relaxed text-gray-900">
                Consultants help businesses adopt and integrate cutting-edge
                technologies to improve operational efficiency. This involves
                selecting, implementing, and optimizing software, automation,
                and digital tools that streamline operations and drive growth.
              </p>
              <dl className="grid grid-cols-1 gap-12 md:grid-cols-2">
                <div>
                  <dt className="mb-5 inline-flex size-12 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-aperture size-6"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <circle cx="12" cy="12" r="9"></circle>
                      <line x1="3.6" y1="15" x2="14.15" y2="15"></line>
                      <line
                        x1="3.6"
                        y1="15"
                        x2="14.15"
                        y2="15"
                        transform="rotate(72 12 12)"
                      ></line>
                      <line
                        x1="3.6"
                        y1="15"
                        x2="14.15"
                        y2="15"
                        transform="rotate(144 12 12)"
                      ></line>
                      <line
                        x1="3.6"
                        y1="15"
                        x2="14.15"
                        y2="15"
                        transform="rotate(216 12 12)"
                      ></line>
                      <line
                        x1="3.6"
                        y1="15"
                        x2="14.15"
                        y2="15"
                        transform="rotate(288 12 12)"
                      ></line>
                    </svg>
                  </dt>
                  <dd className="grow">
                    <h2 className="mb-3 text-lg font-medium tracking-tighter text-gray-600">
                      Integrate automation solutions.
                    </h2>
                    <p className="text-base leading-relaxed text-gray-400"></p>
                  </dd>
                </div>
                <div>
                  <dt className="mb-5 inline-flex size-12 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-aperture size-6"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <circle cx="12" cy="12" r="9"></circle>
                      <line x1="3.6" y1="15" x2="14.15" y2="15"></line>
                      <line
                        x1="3.6"
                        y1="15"
                        x2="14.15"
                        y2="15"
                        transform="rotate(72 12 12)"
                      ></line>
                      <line
                        x1="3.6"
                        y1="15"
                        x2="14.15"
                        y2="15"
                        transform="rotate(144 12 12)"
                      ></line>
                      <line
                        x1="3.6"
                        y1="15"
                        x2="14.15"
                        y2="15"
                        transform="rotate(216 12 12)"
                      ></line>
                      <line
                        x1="3.6"
                        y1="15"
                        x2="14.15"
                        y2="15"
                        transform="rotate(288 12 12)"
                      ></line>
                    </svg>
                  </dt>
                  <dd className="grow">
                    <h2 className="mb-3 text-lg font-medium tracking-tighter text-gray-600">
                      Improve data management.
                    </h2>
                    <p className="text-base leading-relaxed text-gray-400"></p>
                  </dd>
                </div>
              </dl>
            </div>
            <div className="mt-12 w-full rounded-xl lg:w-5/6 lg:max-w-lg xl:mt-0">
              <div>
                <div className="relative w-full max-w-lg">
                  <div className="relative">
                    <img
                      className="mx-auto rounded-lg object-cover object-center"
                      alt="Financial Planning"
                      src="https://img.freepik.com/free-vector/process-concept-illustration_114360-4229.jpg?t=st=1732782487~exp=1732786087~hmac=2e7fdbc54e135c536a398c81e760e3423d9f43756245b508541af6e752a36bfb&w=1380"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Six Section Start here */}
      <section>
        <div className="container py-24">
          <div className="flex flex-wrap items-center mx-auto max-w-7xl">
            <div className="w-full lg:w-5/6 lg:max-w-lg md:w-1/2 rounded-xl">
              <div>
                <img
                  className="object-cover object-center mx-auto rounded-lg"
                  alt="hero"
                  src="https://img.freepik.com/free-vector/business-team-putting-motion-cogwheels_1262-19219.jpg?t=st=1732782252~exp=1732785852~hmac=1ccf1fa1fba5b027d30b7a4a68e07e97948987e1ef4047c1c80ba2788a41f724&w=1380"
                />
              </div>
            </div>
            <div className="flex flex-col items-start mb-16 text-left lg:flex-grow md:w-1/2 lg:pr-24 md:pl-16 md:mb-0">
              <span className="mb-8 text-xs font-bold tracking-widest text-blue-600 uppercase">
                Customer Retention and Engagement
              </span>
              <p className="mb-12 text-base leading-relaxed text-gray-900">
                {" "}
                Successful business transformation requires effective change
                management. Consultants guide organizations through changes by
                ensuring smooth transitions, employee buy-in, and minimal
                disruption. They help businesses adapt to new strategies,
                technologies, and processes. Develop a change management
                strategy. Communicate changes effectively. Train and support
                employees. Monitor and measure change success.
              </p>
              <a className="inline-flex items-center w-full mb-4">
                <img
                  alt="blog"
                  src="https://res.cloudinary.com/dovhqn80g/image/upload/v1732800283/LP-LOGO.svg"
                  className="flex-shrink-0 object-cover object-center w-10 h-10 rounded-full"
                />
                <span className="flex flex-col flex-grow pl-3">
                  <h2 className="text-xs font-semibold tracking-widest text-blue-600 uppercase">
                    LugarPrime
                    <span
                      href="#"
                      className="font-semibold text-gray-500 lg:mb-0"
                    >
                      {" "}
                      Team{" "}
                    </span>
                  </h2>
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* Seven Section Start here */}
      {/* Blog Section */}
      <section>
        <div className="container py-24">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-24">
            <div className="group sm:flex lg:items-start">
              <div className="mb-4 shrink-0 sm:mb-0 sm:mr-4">
                <img
                  className="w-full rounded-md object-cover sm:size-32"
                  src="https://cdn-cchkmpj.nitrocdn.com/CJXGnJvCvbQYOSNVvxpLvOYcHhpJDKbH/assets/images/optimized/rev-0a95796/ossisto.com/wp-content/uploads/2024/07/Operations-Consulting-vs-Operations-Management-1024x559.webp"
                  alt="Investment Strategies"
                />
              </div>
              <div>
                <span className="text-sm text-gray-500">Latest Insights</span>
                <p className="mt-3 text-lg font-medium leading-6">
                  <a
                    href="#"
                    className="text-xl text-gray-800 hover:text-gray-500"
                  >
                    Consulting Shifts Toward Technology Integration
                  </a>
                </p>
                <p className="text mt-2 leading-normal text-gray-500">
                  McKinsey highlights that CEOs are increasingly focusing on
                  technology-driven operational improvements, such as digital
                  manufacturing and supply chain resilience. This includes
                  adopting lean principles enhanced by AI and automation.
                </p>{" "}
              </div>
            </div>

            <div className="group sm:flex lg:items-start">
              <div className="mb-4 shrink-0 sm:mb-0 sm:mr-4">
                <img
                  className="w-full rounded-md object-cover sm:size-32"
                  src="https://cdn-cchkmpj.nitrocdn.com/CJXGnJvCvbQYOSNVvxpLvOYcHhpJDKbH/assets/images/optimized/rev-0a95796/ossisto.com/wp-content/uploads/2024/07/Challenges-of-Hiring-Operations-Management-Consultants-1024x559.webp"
                  alt="Retirement Planning"
                />
              </div>
              <div>
                <span className="text-sm text-gray-500">
                  latest news of Management
                </span>
                <p className="mt-3 text-lg font-medium leading-6">
                  <a
                    href="#"
                    className="text-xl text-gray-800 hover:text-gray-500"
                  >
                    Strategic Consulting Amid Global Disruptions
                  </a>
                </p>
                <p className="text mt-2 leading-normal text-gray-500">
                  Companies are rethinking supply chain strategies in response
                  to global disruptions like the pandemic and the war in
                  Ukraine. This shift includes nearshoring, talent
                  reconfiguration, and adopting more sustainable practices
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Eight Section Start here */}
      {/* Statistics Section */}
      <section className="py-32">
        <div className="container">
          <h1 className="text-center text-4xl font-semibold lg:text-1xl">
            Our Impact on Client Success
          </h1>
          <div className="grid gap-10 pt-9 md:grid-cols-3 lg:gap-0 lg:pt-20">
            <div className="text-center">
              <p className="text-sm font-medium text-zinc-600">
                Average Portfolio Growth
              </p>
              <p className="pt-4 text-4xl font-semibold lg:pt-10">25%</p>
              <p className="text-2xl font-semibold text-zinc-600">
                annual returns
              </p>
            </div>
            <div className="text-center">
              <p className="text-sm font-medium text-zinc-600">
                Client Satisfaction Rate
              </p>
              <p className="pt-4 text-4xl font-semibold lg:pt-10">98%</p>
              <p className="text-2xl font-semibold text-zinc-600">
                satisfied clients
              </p>
            </div>
            <div className="text-center">
              <p className="text-sm font-medium text-zinc-600">
                Years of Experience
              </p>
              <p className="pt-4 text-4xl font-semibold lg:pt-10">20+</p>
              <p className="text-2xl font-semibold text-zinc-600">years</p>
            </div>
          </div>
        </div>
      </section>
      {/* nigth Section Start here */}
      <section class="py-10 bg-white sm:py-16 lg:py-24">
        <div class="max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
          <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
            Frequently Asked Questions
          </h2>

          <div class="flow-root mt-12 sm:mt-16">
            <div class="divide-y divide-gray--200 -my-9">
              <div class="py-9">
                <p class="text-xl font-semibold text-black">
                  1. What is business operations consulting?
                </p>
                <p class="mt-3 text-base text-gray-600">
                  {" "}
                  Business operations consulting helps companies streamline
                  processes, improve efficiency, and reduce costs by optimizing
                  workflows, implementing best practices, and leveraging
                  technology. Consultants guide organizations through
                  operational challenges to drive long-term success.
                </p>
              </div>

              <div class="py-9">
                <p class="text-xl font-semibold text-black">
                  2. How do consultants improve supply chain operations?
                </p>
                <p class="mt-3 text-base text-gray-600">
                  {" "}
                  Consultants analyze supply chain structures to identify
                  inefficiencies, improve inventory management, and reduce lead
                  times. They recommend solutions such as nearshoring,
                  automation, and digital tools to enhance resilience and
                  service levels.
                </p>
              </div>

              <div class="py-9">
                <p class="text-xl font-semibold text-black">
                  3. Why is technology important in operations consulting?
                </p>
                <p class="mt-3 text-base text-gray-600">
                  {" "}
                  Technology plays a key role in operations consulting by
                  automating processes, improving data management, and enabling
                  digital transformation. Consultants help businesses integrate
                  technologies like AI, machine learning, and IoT to increase
                  efficiency and adaptability.
                </p>
              </div>

              <div class="py-9">
                <p class="text-xl font-semibold text-black">
                  4. What role do consultants play in change management for
                  operations?
                </p>
                <p class="mt-3 text-base text-gray-600">
                  Consultants guide businesses through transitions by developing
                  strategies for smooth change implementation. This includes
                  managing employee resistance, ensuring alignment with business
                  goals, and tracking progress to minimize disruptions during
                  operational changes.
                  <a
                    href="#"
                    title=""
                    class="text-blue-600 transition-all duration-200 hover:text-blue-700 focus:text-blue-700 hover:underline"
                  >
                    {" "}
                    info@lugarprime.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Operation;
