import { ChevronsLeft, ChevronsRight } from 'lucide-react';

function Financial() {
  return (
    <div>
        {/* Hero Section */}
        <div className="w-full h-[92vh] mt-[70px] bg-gray-100 flex flex-wrap items-center relative">
          <div className="w-full md:w-1/2 flex flex-col justify-center md:pl-16 px-0">
            <h1 className="text-gray-900 text-sm ml-[15%] font-bold w-[160px] h-7 flex items-center justify-center rounded-full mb-6 bg-yellow-500 ">
              <ChevronsRight className="text-black font-bold mr-1" />
              <span>FINANCIAL</span>
              <ChevronsLeft className="text-black font-bold ml-1" />
            </h1>

            <h1 className="text-black text-4xl font-bold mb-4 pl-[15%]">
            Driving <span className='text-blue-500'>Financial </span> Excellence and Strategic Growth
            </h1>

            <p className="text-gray-500 text-sm mb-6 pl-[15%]">
            Offering tailored financial consulting services to optimize budgets, enhance cash flow, and develop strategic plans that align financial performance with business objectives, ensuring sustainable growth and profitability.
</p>

            <div className="pl-[15%]">
              {/* <button
                type="button"
                className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-6 py-2.5 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
              >
                Start Planning
              </button> */}
            </div>
          </div>

          <div className="w-full md:w-1/2 flex items-center justify-center px-4">
            <img
              src="https://digitalaptech.com/wp-content/uploads/2024/03/What-is-Pay-Per-Click.png"
              alt="Financial Planning"
              className="max-h-[70vh] object-contain"
            />
          </div>
        </div>

        {/* Overview Section */}
        <section className="mt-[12%] mb-[8%] bg-white">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl font-semibold mb-6">
              Master Your Financial Future
            </h1>
            <p className="text-zinc-600 mb-8 w-full mx-auto">
            Financial is your guide to achieving financial freedom and stability. Gain insights on budgeting, investing, and wealth management with practical tips tailored for every stage of life. Empower yourself to make informed decisions, eliminate debt, and build a secure financial future with confidence and control.
            </p>
          </div>
        </section>
         {/* Three Section Start here */}
        <section>
          <div className="container py-24">
            <div className="flex flex-wrap items-center mx-auto max-w-7xl">
              <div className="flex flex-col items-start mb-16 text-left lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:mb-0">
                <span className="mb-8 text-xs font-bold tracking-widest text-blue-600 uppercase"> Wickedblocks </span>
                <p className="mb-12 text-base leading-relaxed text-gray-500">"Something that really cooks. Alright, alright this is
                  an oldie, but uh, it's an oldie where I come from. Alright guys, let's do some blues riff in b, watch me for
                  the changes, and uh, try and keep up, okay. Nothing, nothing, nothing, look tell her destiny has brought you
                  together, tell her that she's the most beautiful you have ever seen. Girls like that stuff. What, what are you
                  doing George?"</p>
                <a className="inline-flex items-center w-full mb-4">
                  <img alt="blog" src="https://digitalaptech.com/wp-content/uploads/2024/03/What-is-Pay-Per-Click.png"
                    className="flex-shrink-0 object-cover object-center w-10 h-10 rounded-full" />
                  <span className="flex flex-col flex-grow pl-3">
                    <h2 className="text-xs font-semibold tracking-widest text-blue-600 uppercase">
                      Wickedblocks
                      <span href="#" className="font-semibold text-gray-500 lg:mb-0">Acme's HR </span>
                    </h2>
                  </span>
                </a>
              </div>
              <div className="w-full lg:w-5/6 lg:max-w-lg md:w-1/2 rounded-xl">
                <div>
                  <img className="object-cover object-center mx-auto rounded-lg" alt="hero"
                    src="https://digitalaptech.com/wp-content/uploads/2024/03/What-is-Pay-Per-Click.png" />
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
                      <img className="mx-auto rounded-lg object-cover object-center" alt="hero"
                        src='https://digitalaptech.com/wp-content/uploads/2024/03/What-is-Pay-Per-Click.png' />
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-16 mt-12 flex flex-col items-start text-left md:mb-0 lg:w-1/2 lg:grow lg:pl-6 xl:mt-0 xl:pl-24">
                <span className="mb-8 text-xs font-bold uppercase tracking-widest text-blue-600">
                  Financial Guidence
                </span>
                <h1 className="mb-8 text-4xl font-bold leading-none tracking-tighter text-gray-600 md:text-7xl lg:text-4xl">
                  Medium length display headline.
                </h1>
                <p className="mb-8 text-left text-base leading-relaxed text-gray-500">
                  Wicked Blocks offers a wide array of both free and premium components specifically designed for Tailwind CSS.
                  Our extensive collection features meticulously crafted Tailwind blocks that cater to various design needs and
                  preferences.
                </p>
                <div className="mt-0 max-w-7xl flex-col sm:flex lg:mt-6">
                  <div className="prose-md prose">
                    <ul>
                      <li className="text-gray-500">Incredible reason to purchase.</li>
                      <li className="text-gray-500">Expensive feature.</li>
                      <li className="text-gray-500">Really good feauture.</li>
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
                  Financial Excellence
                </span>
                <h1 className="mb-8 text-4xl font-bold leading-none tracking-tighter text-gray-600 md:text-7xl lg:text-4xl">
                  Expert Financial Planning Solutions
                </h1>
                <p className="mb-8 text-left text-base leading-relaxed text-gray-500">
                  Discover our comprehensive suite of financial management tools and advisory services designed to help you achieve your monetary goals and secure your financial future.
                </p>
                <dl className="grid grid-cols-1 gap-12 md:grid-cols-2">
                  <div>
                    <dt className="mb-5 inline-flex size-12 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                      <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-aperture size-6" width="24"
                        height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none"
                        strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <circle cx="12" cy="12" r="9"></circle>
                        <line x1="3.6" y1="15" x2="14.15" y2="15"></line>
                        <line x1="3.6" y1="15" x2="14.15" y2="15" transform="rotate(72 12 12)"></line>
                        <line x1="3.6" y1="15" x2="14.15" y2="15" transform="rotate(144 12 12)"></line>
                        <line x1="3.6" y1="15" x2="14.15" y2="15" transform="rotate(216 12 12)"></line>
                        <line x1="3.6" y1="15" x2="14.15" y2="15" transform="rotate(288 12 12)"></line>
                      </svg>
                    </dt>
                    <dd className="grow">
                      <h2 className="mb-3 text-lg font-medium tracking-tighter text-gray-600">
                        Investment Planning
                      </h2>
                      <p className="text-base leading-relaxed text-gray-400">
                        Strategic investment solutions tailored to your risk profile and financial goals.
                      </p>
                      <a href="#"
                        className="mt-6 inline-flex items-center font-semibold text-blue-500 hover:text-gray-600 md:mb-2 lg:mb-0"
                        title="read more">
                        Learn More
                        <svg className="ml-2 size-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20"
                          fill="currentColor">
                          <path fill="none" d="M0 0h24v24H0z"></path>
                          <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"></path>
                        </svg>
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt className="mb-5 inline-flex size-12 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                      <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-aperture size-6" width="24"
                        height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none"
                        strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <circle cx="12" cy="12" r="9"></circle>
                        <line x1="3.6" y1="15" x2="14.15" y2="15"></line>
                        <line x1="3.6" y1="15" x2="14.15" y2="15" transform="rotate(72 12 12)"></line>
                        <line x1="3.6" y1="15" x2="14.15" y2="15" transform="rotate(144 12 12)"></line>
                        <line x1="3.6" y1="15" x2="14.15" y2="15" transform="rotate(216 12 12)"></line>
                        <line x1="3.6" y1="15" x2="14.15" y2="15" transform="rotate(288 12 12)"></line>
                      </svg>
                    </dt>
                    <dd className="grow">
                      <h2 className="mb-3 text-lg font-medium tracking-tighter text-gray-600">
                        Wealth Management
                      </h2>
                      <p className="text-base leading-relaxed text-gray-400">
                        Comprehensive wealth management services for long-term financial security.
                      </p>
                      <a href="#"
                        className="mt-6 inline-flex items-center font-semibold text-blue-500 hover:text-gray-600 md:mb-2 lg:mb-0"
                        title="read more">
                        Learn More
                        <svg className="ml-2 size-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20"
                          fill="currentColor">
                          <path fill="none" d="M0 0h24v24H0z"></path>
                          <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"></path>
                        </svg>
                      </a>
                    </dd>
                  </div>
                </dl>
              </div>
              <div className="mt-12 w-full rounded-xl lg:w-5/6 lg:max-w-lg xl:mt-0">
                <div>
                  <div className="relative w-full max-w-lg">
                    <div className="relative">
                      <img className="mx-auto rounded-lg object-cover object-center" alt="Financial Planning"
                        src='https://digitalaptech.com/wp-content/uploads/2024/03/What-is-Pay-Per-Click.png' />
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
                  <img className="object-cover object-center mx-auto rounded-lg" alt="hero"
                    src="https://digitalaptech.com/wp-content/uploads/2024/03/What-is-Pay-Per-Click.png" />
                </div>
              </div>
              <div className="flex flex-col items-start mb-16 text-left lg:flex-grow md:w-1/2 lg:pr-24 md:pl-16 md:mb-0">
                <span className="mb-8 text-xs font-bold tracking-widest text-blue-600 uppercase"> Wickedblocks </span>
                <p className="mb-12 text-base leading-relaxed text-gray-500">"Something that really cooks. Alright, alright this is
                  an oldie, but uh, it's an oldie where I come from. Alright guys, let's do some blues riff in b, watch me for
                  the changes, and uh, try and keep up, okay. Nothing, nothing, nothing, look tell her destiny has brought you
                  together, tell her that she's the most beautiful you have ever seen. Girls like that stuff. What, what are you
                  doing George?"</p>
                <a className="inline-flex items-center w-full mb-4">
                  <img alt="blog" src="https://digitalaptech.com/wp-content/uploads/2024/03/What-is-Pay-Per-Click.png"
                    className="flex-shrink-0 object-cover object-center w-10 h-10 rounded-full" />
                  <span className="flex flex-col flex-grow pl-3">
                    <h2 className="text-xs font-semibold tracking-widest text-blue-600 uppercase">
                      Wickedblocks
                      <span href="#" className="font-semibold text-gray-500 lg:mb-0">Acme's HR </span>
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
                  <img className="w-full rounded-md object-cover sm:size-32" src="https://digitalaptech.com/wp-content/uploads/2024/03/What-is-Pay-Per-Click.png" alt="Investment Strategies" />
                </div>
                <div>
                  <span className="text-sm text-gray-500">Latest Insights</span>
                  <p className="mt-3 text-lg font-medium leading-6">
                    <a href="#" className="text-xl text-gray-800 hover:text-gray-500">
                      5 Essential Investment Strategies for 2024
                    </a>
                  </p>
                  <p className="text mt-2 leading-normal text-gray-500">
                    Discover the most effective investment strategies to grow and protect your wealth in today's dynamic market environment.
                  </p>
                </div>
              </div>

              <div className="group sm:flex lg:items-start">
                <div className="mb-4 shrink-0 sm:mb-0 sm:mr-4">
                  <img className="w-full rounded-md object-cover sm:size-32" src="https://digitalaptech.com/wp-content/uploads/2024/03/What-is-Pay-Per-Click.png" alt="Retirement Planning" />
                </div>
                <div>
                  <span className="text-sm text-gray-500">Financial Planning</span>
                  <p className="mt-3 text-lg font-medium leading-6">
                    <a href="#" className="text-xl text-gray-800 hover:text-gray-500">
                      Building Your Retirement Nest Egg: A Complete Guide
                    </a>
                  </p>
                  <p className="text mt-2 leading-normal text-gray-500">
                    Learn how to create a robust retirement plan that ensures financial security and peace of mind for your future.
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
              Our Impact on Client Financial Success
            </h1>
            <div className="grid gap-10 pt-9 md:grid-cols-3 lg:gap-0 lg:pt-20">
              <div className="text-center">
                <p className="text-sm font-medium text-zinc-600">Average Portfolio Growth</p>
                <p className="pt-4 text-4xl font-semibold lg:pt-10">25%</p>
                <p className="text-2xl font-semibold text-zinc-600">annual returns</p>
              </div>
              <div className="text-center">
                <p className="text-sm font-medium text-zinc-600">Client Satisfaction Rate</p>
                <p className="pt-4 text-4xl font-semibold lg:pt-10">98%</p>
                <p className="text-2xl font-semibold text-zinc-600">satisfied clients</p>
              </div>
              <div className="text-center">
                <p className="text-sm font-medium text-zinc-600">Years of Experience</p>
                <p className="pt-4 text-4xl font-semibold lg:pt-10">20+</p>
                <p className="text-2xl font-semibold text-zinc-600">years</p>
              </div>
            </div>
          </div>
        </section>
        {/* nigth Section Start here */}
        <section className="py-32">
          <div className="container flex flex-col items-center gap-16 lg:px-16">
            <div className="text-center">
              <p className="mb-6 text-xs font-medium uppercase tracking-wider">Financial Tips</p>
              <h2 className="mb-3 text-pretty text-3xl font-semibold md:mb-4 md:text-4xl lg:mb-6 lg:max-w-3xl lg:text-5xl">
                Money Management Insights
              </h2>
              <p className="mb-8 text-zinc-700 md:text-base lg:max-w-2xl lg:text-lg">
                Discover practical advice and proven strategies to manage your finances effectively and build a secure future.
              </p>
              <button
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-zinc-600 underline-offset-4 hover:underline h-10 px-4 py-2 w-full sm:w-auto">
                Explore all articles<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                  className="lucide lucide-arrow-right ml-2 size-4">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </button>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
              <a href="#" className="flex flex-col overflow-clip rounded-xl border border-border">
                <div>
                  <img src="https://digitalaptech.com/wp-content/uploads/2024/03/What-is-Pay-Per-Click.png" alt="Budgeting Basics" className="aspect-[16/9] h-full w-full object-cover object-center" />
                </div>
                <div className="px-6 py-8 md:px-8 md:py-10 lg:px-10 lg:py-12">
                  <h3 className="mb-3 text-lg font-semibold md:mb-4 md:text-xl lg:mb-6">
                    Budgeting Basics: Start Your Journey to Financial Freedom
                  </h3>
                  <p className="mb-3 text-zinc-600 md:mb-4 lg:mb-6">
                    Learn how to create a budget, stick to it, and achieve your financial goals step by step.
                  </p>
                  <p className="flex items-center hover:underline">
                    Read more<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                      className="lucide lucide-arrow-right ml-2 size-4">
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </p>
                </div>
              </a>
              <a href="#" className="flex flex-col overflow-clip rounded-xl border border-border">
                <div>
                  <img src="https://digitalaptech.com/wp-content/uploads/2024/03/What-is-Pay-Per-Click.png" alt="Investing Tips" className="aspect-[16/9] h-full w-full object-cover object-center" />
                </div>
                <div className="px-6 py-8 md:px-8 md:py-10 lg:px-10 lg:py-12">
                  <h3 className="mb-3 text-lg font-semibold md:mb-4 md:text-xl lg:mb-6">
                    Investing Tips for Beginners: Where to Start
                  </h3>
                  <p className="mb-3 text-zinc-600 md:mb-4 lg:mb-6">
                    Explore beginner-friendly investment strategies to grow your wealth without unnecessary risks.
                  </p>
                  <p className="flex items-center hover:underline">
                    Read more<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                      className="lucide lucide-arrow-right ml-2 size-4">
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </p>
                </div>
              </a>
              <a href="#" className="flex flex-col overflow-clip rounded-xl border border-border">
                <div>
                  <img src="https://digitalaptech.com/wp-content/uploads/2024/03/What-is-Pay-Per-Click.png" alt="Saving Tips" className="aspect-[16/9] h-full w-full object-cover object-center" />
                </div>
                <div className="px-6 py-8 md:px-8 md:py-10 lg:px-10 lg:py-12">
                  <h3 className="mb-3 text-lg font-semibold md:mb-4 md:text-xl lg:mb-6">
                    10 Smart Saving Tips for Every Income Level
                  </h3>
                  <p className="mb-3 text-zinc-600 md:mb-4 lg:mb-6">
                    Uncover actionable saving tips to build an emergency fund and achieve your short-term financial goals.
                  </p>
                  <p className="flex items-center hover:underline">
                    Read more<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                      className="lucide lucide-arrow-right ml-2 size-4">
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </p>
                </div>
              </a>
            </div>
          </div>
        </section>
      </div>
  );
}

export default Financial;