import { ChevronsLeft, ChevronsRight } from "lucide-react";

function Marketing() {
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
      Accelerating Business Growth through Strategic <span className="text-red-500">Marketing Consulting
      </span>  
      
      </h1>

      <p className="text-gray-100 text-sm mb-6 pl-[15%]">
      Marketing consulting helps businesses enhance their brand presence, optimize marketing strategies, and drive customer engagement. Experts provide tailored solutions in areas such as digital marketing, market research, product positioning, and campaign management to accelerate growth and maximize return on investment.
      </p>

      <div className="pl-[15%]"></div>
    </div>

    {/* Right Section */}
    <div className="w-full md:w-1/2 flex items-center justify-center px-4">
      <img
        src="https://www.reliablesoft.net/wp-content/uploads/2023/03/digital-marketing-definition-new.png"
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
            Master Your Marketing Future
          </h1>
          <p className="text-zinc-900 mb-8 w-full mx-auto">
            Marketing consulting focuses on improving brand awareness, customer
            engagement, and market positioning. By analyzing data, optimizing
            strategies, and leveraging digital tools, consultants help
            businesses reach target audiences more effectively. Their insights
            guide companies in crafting impactful campaigns, driving
            conversions, and ultimately enhancing their overall marketing
            performance and profitability.
          </p>
        </div>
      </section>
      {/* Three Section Start here */}
      <section>
        <div className="container py-24">
          <div className="flex flex-wrap items-center mx-auto max-w-7xl">
            <div className="flex flex-col items-start mb-16 text-left lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:mb-0">
              <span className="mb-8 text-xs font-bold tracking-widest text-blue-600 uppercase">
                Marketing Consulting
              </span>
              <p className="mb-12 text-base leading-relaxed text-gray-900">
                {" "}
                Focuses on utilizing online platforms, including social media,
                SEO, and email campaigns, to build a brand, drive traffic, and
                increase sales. This approach is data-driven, helping businesses
                optimize their digital presence and reach their target audience
                effectively.
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
                  src="https://img.freepik.com/free-vector/people-with-digital-content-creation-concept_53876-43057.jpg?t=st=1732770964~exp=1732774564~hmac=1dff5bde112786c3146a85db5125ac90263539d48dbb8cd15f16d8ec993467c1&w=1060"
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
                      src="https://img.freepik.com/free-vector/organic-flat-public-relations-illustration_52683-59273.jpg?t=st=1732771013~exp=1732774613~hmac=c245eb806ba5ef87f8d4269aa31a9f59cdbafb84ab799509b3969bbe4cf76161&w=1380"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-16 mt-12 flex flex-col items-start text-left md:mb-0 lg:w-1/2 lg:grow lg:pl-6 xl:mt-0 xl:pl-24">
              <span className="mb-8 text-xs font-bold uppercase tracking-widest text-blue-600">
                Marketing Guidence
              </span>
              <h1 className="mb-8 text-4xl font-bold leading-none tracking-tighter text-gray-900 md:text-7xl lg:text-4xl">
                Brand Development and Positioning
              </h1>
              <p className="mb-8 text-left text-base leading-relaxed text-gray-900">
                Involves creating a strong brand identity and positioning it in
                the market to stand out from competitors. Consultants help
                businesses define their unique value proposition and align
                messaging to attract and retain customers.
              </p>
              <div className="mt-0 max-w-7xl flex-col sm:flex lg:mt-6">
                <div className="prose-md prose">
                  <ul>
                    <li className="text-gray-900">
                      Brand Identity: Create a compelling brand image through
                      logos, colors, and messaging.
                    </li>
                    <li className="text-gray-900">
                      Market Differentiation: Develop a unique selling
                      proposition (USP) that sets the brand apart.{" "}
                    </li>
                    <li className="text-gray-900">
                      Target Audience Analysis: Understand the needs,
                      preferences, and behaviors of the target market.
                    </li>
                    <li className="text-gray-900">
                      Reputation Management: Actively monitor and shape public
                      perception through consistent messaging.
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
                Content Marketing
              </h1>
              <p className="mb-8 text-left text-base leading-relaxed text-gray-500">
                Content marketing aims to create valuable, relevant content that
                resonates with target audiences. It includes blogs, videos,
                infographics, and social media posts designed to inform,
                entertain, or solve problems, ultimately driving engagement and
                conversions.
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
                      Blogging and Articles: Create valuable, informative
                      content that engages your audience
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
                      Video Marketing: Use video platforms like YouTube for
                      product demonstrations, customer stories, and educational
                      content.
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
                      src="https://img.freepik.com/premium-vector/content-marketing-landing-page_146120-87.jpg?w=826"
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
                  src="https://img.freepik.com/free-vector/hand-drawn-flat-design-crm-illustration_23-2149377871.jpg?t=st=1732771141~exp=1732774741~hmac=e47470f99c9c54be510cc58068a121c1484430382cd7536f5ad85581b70e2226&w=826"
                />
              </div>
            </div>
            <div className="flex flex-col items-start mb-16 text-left lg:flex-grow md:w-1/2 lg:pr-24 md:pl-16 md:mb-0">
              <span className="mb-8 text-xs font-bold tracking-widest text-blue-600 uppercase">
                Customer Retention and Engagement
              </span>
              <p className="mb-12 text-base leading-relaxed text-gray-900">
                {" "}
                Strategies aimed at fostering long-term relationships with
                existing customers. This involves loyalty programs, personalized
                marketing, and maintaining consistent communication to ensure
                repeat business and high customer satisfaction.
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
                  src="https://img.freepik.com/free-vector/customer-relationship-management-concept-illustration_114360-7442.jpg?t=st=1732771169~exp=1732774769~hmac=26f9f5f1530b917508899a643ad8117523ca45fba22b3c2c6fc9cc5dba8c180f&w=1380"
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
                    AI is increasingly transforming marketing strategies
                  </a>
                </p>
                <p className="text mt-2 leading-normal text-gray-500">
                  AI is increasingly transforming marketing strategies,
                  providing organizations with a competitive edge. A report on
                  marketing AI highlights the importance of AI tools for better
                  customer engagement, segmentation, and decision-making.
                </p>{" "}
              </div>
            </div>

            <div className="group sm:flex lg:items-start">
              <div className="mb-4 shrink-0 sm:mb-0 sm:mr-4">
                <img
                  className="w-full rounded-md object-cover sm:size-32"
                  src="https://img.freepik.com/free-vector/customer-loyalty-concept-marketing-program-development-client-retention-idea-communication-relationship-with-customers-flat-vector-illustration_613284-2323.jpg?t=st=1732771214~exp=1732774814~hmac=61104ce06c78e51efbf22aa1465cb7763b4feffd0f8d4d77a58f759c0336d850&w=1380"
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
                    Marketing consultants
                  </a>
                </p>
                <p className="text mt-2 leading-normal text-gray-500">
                  Marketing consultants are focusing on digital transformation
                  as businesses strive for innovation. In 2024, firms are
                  prioritizing strategic digital solutions to optimize customer
                  experiences and improve efficiency.
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
                  What does marketing consulting involve?
                </p>
                <p class="mt-3 text-base text-gray-600">
                  {" "}
                  Marketing consulting provides expert guidance to optimize
                  brand strategies, enhance customer engagement, and increase
                  revenue through tailored marketing plans that leverage digital
                  tools and data-driven insights.
                </p>
              </div>

              <div class="py-9">
                <p class="text-xl font-semibold text-black">
                  How can a marketing consultant improve my business?
                </p>
                <p class="mt-3 text-base text-gray-600">
                  {" "}
                  A marketing consultant helps refine your messaging, reach the
                  right audience, optimize advertising campaigns, and track ROI,
                  ensuring your marketing efforts are aligned with business
                  goals and drive measurable results.
                </p>
              </div>

              <div class="py-9">
                <p class="text-xl font-semibold text-black">
                  When should I hire a marketing consultant?
                </p>
                <p class="mt-3 text-base text-gray-600">
                  {" "}
                  Consider hiring a marketing consultant when facing challenges
                  in brand growth, entering new markets, or optimizing your
                  marketing campaigns to achieve better performance and higher
                  customer engagement.
                </p>
              </div>

              <div class="py-9">
                <p class="text-xl font-semibold text-black">
                  What are the benefits of marketing consulting?
                </p>
                <p class="mt-3 text-base text-gray-600">
                  Marketing consulting provides expert advice, industry
                  insights, and strategic planning to boost your marketing
                  efficiency, enhance brand visibility, and ultimately improve
                  your competitive edge in the market.
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

export default Marketing;
