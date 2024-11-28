import { ChevronsLeft, ChevronsRight } from 'lucide-react';

function Financial() {
  return (
    <div>
        {/* Hero Section */}
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
      Driving <span className="text-red-500">Financial Excellence</span> and Strategic Growth
      
      </h1>

      <p className="text-gray-300 text-sm mb-6 pl-[15%]">
      Offering tailored financial consulting services to optimize budgets, enhance cash flow, and develop strategic plans that align financial performance with business objectives, ensuring sustainable growth and profitability.

      </p>

      <div className="pl-[15%]"></div>
    </div>

    {/* Right Section */}
    <div className="w-full md:w-1/2 flex items-center justify-center px-4">
      <img
        src="https://img.freepik.com/free-vector/online-banking-isometric-composition-with-financial-information-operations-purple-with-glow_1284-29169.jpg?t=st=1732766154~exp=1732769754~hmac=0d2ccb94d01df0e309732b5ebb7770cbcff035d9d78dcfc50174c31d5df08120&w=826 "
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
                <span className="mb-8 text-xs font-bold tracking-widest text-blue-600 uppercase">Financial</span>
                <p className="mb-12 text-base leading-relaxed text-gray-500">Financial is your guide to achieving financial freedom and stability. Gain insights on budgeting, investing, and wealth management with practical tips tailored for every stage of life. Empower yourself to make informed decisions, eliminate debt, and build a secure financial future with confidence and control.
                </p>
                <a className="inline-flex items-center w-full mb-4">
                  <img alt="blog" src="https://res.cloudinary.com/dovhqn80g/image/upload/v1732800283/LP-LOGO.svg"
                    className="flex-shrink-0 object-cover object-center w-10 h-10 rounded-full" />
                  <span className="flex flex-col flex-grow pl-3">
                    <h2 className="text-xs font-semibold tracking-widest text-blue-600 uppercase">
                      LugarPrime
                      <span href="#" className="font-semibold text-gray-500 lg:mb-0"> Financial Team </span>
                    </h2>
                  </span>
                </a>
              </div>
              <div className="w-full lg:w-5/6 lg:max-w-lg md:w-1/2 rounded-xl">
                <div>
                  <img className="object-cover object-center mx-auto rounded-lg" alt="hero"
                    src="https://img.freepik.com/free-vector/accounting-administration-taxes-comprehensive-isometric-flowchart-with-financial-statements-files-documents-folders-cash-counting-machine_1284-26683.jpg?t=st=1732766209~exp=1732769809~hmac=2704c9532f2848e7cd2a1347689e284e40a3b0649e081d87b1a0076b521c66cf&w=826 " />
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
                        src='https://img.freepik.com/free-vector/financial-technology-isometric-flowchart_1284-25565.jpg?t=st=1732766238~exp=1732769838~hmac=eae97b3c3b1d32630c8273f2d4c7b01cd84d0551b030caff2756d97cd31ff232&w=826 ' />
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-16 mt-12 flex flex-col items-start text-left md:mb-0 lg:w-1/2 lg:grow lg:pl-6 xl:mt-0 xl:pl-24">
                <span className="mb-8 text-xs font-bold uppercase tracking-widest text-blue-600">
                  Financial Guidence
                </span>
                <h1 className="mb-8 text-4xl font-bold leading-none tracking-tighter text-gray-600 md:text-7xl lg:text-4xl">
                Budgeting and Personal Finance Management
                </h1>
                <p className="mb-8 text-left text-base leading-relaxed text-gray-500">
                Learn how to create and stick to a budget, track expenses, and save effectively to achieve financial goals.
                </p>
                <div className="mt-0 max-w-7xl flex-col sm:flex lg:mt-6">
                  <div className="prose-md prose">
                    <ul>
                      <li className="text-gray-500">Track income and expenses for better financial awareness.</li>
                      <li className="text-gray-500">Set short-term and long-term savings goals.</li>
                      <li className="text-gray-500">Create a realistic budget using the 50/30/20 rule</li>
                      <li className="text-gray-500">Regularly review and adjust your budget to stay on track.
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
                  Financial Excellence
                </span>
                <h1 className="mb-8 text-4xl font-bold leading-none tracking-tighter text-gray-600 md:text-7xl lg:text-4xl">
                Investing Basics and Strategies
                </h1>
                <p className="mb-8 text-left text-base leading-relaxed text-gray-500">
                Explore investment options, risk management, and strategies to grow wealth through stocks, bonds, real estate, and more.

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
                      Diversify investments across stocks, bonds, and real estate.
                      </h2>
                      <p className="text-base leading-relaxed text-gray-400">
                       
                      </p>
                
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
                      Keep long-term goals in mind and avoid emotional decision-making.

                      </h2>
                      <p className="text-base leading-relaxed text-gray-400">
                      
                      </p>
                     
                    </dd>
                  </div>
                </dl>
              </div>
              <div className="mt-12 w-full rounded-xl lg:w-5/6 lg:max-w-lg xl:mt-0">
                <div>
                  <div className="relative w-full max-w-lg">
                    <div className="relative">
                      <img className="mx-auto rounded-lg object-cover object-center" alt="Financial Planning"
                        src='https://www.advisorkhoj.com/resources/images/articles/Importance-Budgeting-Foundation/Importance-Budgeting-Foundation.png 
' />
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
                    src="https://img.freepik.com/free-vector/pension-fund-typographic-header-saving-money-retirement-financial-independence-idea-economy-wealth-pension-plan-vector-illustration-cartoon-style_613284-396.jpg?t=st=1732766813~exp=1732770413~hmac=e94372ca96af4f4d34b96977d8b2bb86ccfcaa9ed7d02b3a3aa2e8a07587f832&w=1480" />
                </div>
              </div>
              <div className="flex flex-col items-start mb-16 text-left lg:flex-grow md:w-1/2 lg:pr-24 md:pl-16 md:mb-0">
                <span className="mb-8 text-xs font-bold tracking-widest text-blue-600 uppercase">Financial</span>
                <p className="mb-12 text-base leading-relaxed text-gray-500">Debt Management and Credit Improvement
 Understand how to reduce debt, manage loans, and improve your credit score for better financial opportunities.
</p>
                <a className="inline-flex items-center w-full mb-4">
                  <img alt="blog" src="https://res.cloudinary.com/dovhqn80g/image/upload/v1732800283/LP-LOGO.svg"
                    className="flex-shrink-0 object-cover object-center w-10 h-10 rounded-full" />
                  <span className="flex flex-col flex-grow pl-3">
                    <h2 className="text-xs font-semibold tracking-widest text-blue-600 uppercase">
                      LugarPrime
                      <span href="#" className="font-semibold text-gray-500 lg:mb-0"> Financial Team </span>
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
                  <img className="w-full rounded-md object-cover sm:size-32" src="https://techmanconsulting.com.np/media/2024/08/IMG_20240909_225114-1024x606.png" alt="Investment Strategies" />
                </div>
                <div>
                  <span className="text-sm text-gray-500">Latest Insights</span>
                  <p className="mt-3 text-lg font-medium leading-6">
                    <a href="#" className="text-xl text-gray-800 hover:text-gray-500">
                    PwC Focuses on AI Policy Compliance
                    </a>
                  </p>
                  <p className="text mt-2 leading-normal text-gray-500">
                  With AI risks increasing, PwC highlights that businesses, especially CIOs, are navigating the expanding complexity of AI regulations. Compliance and managing reputational risks are top priorities as AI technology evolves
                  </p>
                </div>
              </div>

              <div className="group sm:flex lg:items-start">
                <div className="mb-4 shrink-0 sm:mb-0 sm:mr-4">
                  <img className="w-full rounded-md object-cover sm:size-32" src="https://teensmeanbusiness.com/wp-content/uploads/2024/02/1.jpeg " alt="Retirement Planning" />
                </div>
                <div>
                  <span className="text-sm text-gray-500">Financial Planning</span>
                  <p className="mt-3 text-lg font-medium leading-6">
                    <a href="#" className="text-xl text-gray-800 hover:text-gray-500">
                    Consultants Address Flat Productivity Despite Tech Advances
                    </a>
                  </p>
                  <p className="text mt-2 leading-normal text-gray-500">
                  A recent report from Accenture reveals that global productivity remains stagnant despite significant investments in technology. Consultants are being called on to bridge the gap between tech advancements and actual productivity improvements

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
        {/* <section className="py-32">
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
        </section> */}
      </div>
  );
}

export default Financial;