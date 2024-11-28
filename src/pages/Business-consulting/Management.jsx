import { ChevronsLeft, ChevronsRight } from 'lucide-react';

function Management() {
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
      Transforming Business Efficiency through <span className="text-red-500"> Expert Management Consulting
      </span> 
      </h1>

      <p className="text-gray-100 text-sm mb-6 pl-[15%]">
      Management consulting helps organizations improve performance, streamline operations, and enhance decision-making. Consultants analyze existing processes, identify inefficiencies, and implement strategies to optimize organizational structures, increase productivity, and drive sustainable growth. Their expertise in leadership, change management, and strategic planning enables businesses to navigate challenges and achieve long-term success.
      </p>

      <div className="pl-[15%]"></div>
    </div>

    {/* Right Section */}
    <div className="w-full md:w-1/2 flex items-center justify-center px-4">
      <img
        src="https://trafft.com/wp-content/uploads/2019/11/management-consultation.jpg"
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
          Master Your Management Future
        </h1>
        <p className="text-zinc-600 mb-8 w-full mx-auto">
        Management consulting focuses on optimizing business operations, improving organizational efficiency, and fostering leadership growth. Consultants assess current management structures, identify areas for improvement, and implement strategies to enhance productivity, streamline processes, and support business goals. Their expertise helps companies navigate complex challenges, drive innovation, and sustain long-term success.

       </p>
      </div>
    </section>
     {/* Three Section Start here */}
    <section>
      <div className="container py-24">
        <div className="flex flex-wrap items-center mx-auto max-w-7xl">
          <div className="flex flex-col items-start mb-16 text-left lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:mb-0">
            <span className="mb-8 text-xs font-bold tracking-widest text-blue-600 uppercase">Management Consulting</span>
            <p className="mb-12 text-base leading-relaxed text-gray-900">Focuses on aligning business goals with strategic initiatives, fostering leadership, and guiding companies to long-term success through clear vision and structured decision-making.

            </p>
            <a className="inline-flex items-center w-full mb-4">
              <img alt="blog" src="https://res.cloudinary.com/dovhqn80g/image/upload/v1732800283/LP-LOGO.svg"
                className="flex-shrink-0 object-cover object-center w-10 h-10 rounded-full" />
              <span className="flex flex-col flex-grow pl-3">
                <h2 className="text-xs font-semibold tracking-widest text-blue-600 uppercase">
                  LugarPrime
                  <span href="#" className="font-semibold text-gray-500 lg:mb-0"> Team </span>
                </h2>
              </span>
            </a>
          </div>
          <div className="w-full lg:w-5/6 lg:max-w-lg md:w-1/2 rounded-xl">
            <div>
              <img className="object-cover object-center mx-auto rounded-lg" alt="hero"
                src="https://www.reliablesoft.net/wp-content/uploads/2023/03/digital-marketing-definition-new.png" />
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
                    src='https://img.freepik.com/free-vector/isometric-with-people-working-new-brand-strategy-3d-illustration_1284-63994.jpg?t=st=1732770767~exp=1732774367~hmac=34f931749b6ce86d2ddd462fb902dec7bb14ee4577625d806d1c77133c03c1bf&w=826' />
                </div>
              </div>
            </div>
          </div>
          <div className="mb-16 mt-12 flex flex-col items-start text-left md:mb-0 lg:w-1/2 lg:grow lg:pl-6 xl:mt-0 xl:pl-24">
            <span className="mb-8 text-xs font-bold uppercase tracking-widest text-blue-600">
              Management Guidence
            </span>
            <h1 className="mb-8 text-4xl font-bold leading-none tracking-tighter text-gray-900 md:text-7xl lg:text-4xl">
            Change Management
            </h1>
            <p className="mb-8 text-left text-base leading-relaxed text-gray-500">
            Helps organizations navigate transitions by managing the human and operational aspects of change, ensuring smooth adaptation to new processes, technologies, or cultural shifts.
            </p>
            <div className="mt-0 max-w-7xl flex-col sm:flex lg:mt-6">
              <div className="prose-md prose">
                <ul>
                  <li className="text-gray-500">Manage organizational transitions effectively                  </li>
                  <li className="text-gray-500">Minimize resistance and support employees through change                  </li>
                  <li className="text-gray-500">Ensure smooth implementation of new processes</li>
                  <li className="text-gray-500">Promote a culture of continuous improvement
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
              Management Consulting
            </span>
            <h1 className="mb-8 text-4xl font-bold leading-none tracking-tighter text-gray-900 md:text-7xl lg:text-4xl">
            Operational Efficiency
            </h1>
            <p className="mb-8 text-left text-base leading-relaxed text-gray-500">
            Aims to improve internal processes, reduce waste, optimize workflows, and enhance resource utilization, ensuring maximum productivity and cost-effectiveness.

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
                  Identify inefficiencies within current systems
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
                  Implement performance measurement and accountability.
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
                    src='https://img.freepik.com/free-vector/blogging-fun-content-creation-online-streaming-video-blog-young-girl-making-selfie-social-network-sharing-feedback-self-promotion-strategy_335657-2386.jpg?t=st=1732770938~exp=1732774538~hmac=9f09717226a8f59bc4730bc97b25ef3619f0d8119a532823955149c6dc61dae5&w=826' />
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
                src="https://img.freepik.com/free-vector/people-with-digital-content-creation-concept_53876-43057.jpg?t=st=1732770964~exp=1732774564~hmac=1dff5bde112786c3146a85db5125ac90263539d48dbb8cd15f16d8ec993467c1&w=1060" />
            </div>
          </div>
          <div className="flex flex-col items-start mb-16 text-left lg:flex-grow md:w-1/2 lg:pr-24 md:pl-16 md:mb-0">
            <span className="mb-8 text-xs font-bold tracking-widest text-blue-600 uppercase">Management</span>
            <p className="mb-12 text-base leading-relaxed text-gray-900">Operational Efficiency
 Aims to improve internal processes, reduce waste, optimize workflows, and enhance resource utilization, ensuring maximum productivity and cost-effectiveness.

</p>
            <a className="inline-flex items-center w-full mb-4">
              <img alt="blog" src="https://res.cloudinary.com/dovhqn80g/image/upload/v1732800283/LP-LOGO.svg"
                className="flex-shrink-0 object-cover object-center w-10 h-10 rounded-full" />
              <span className="flex flex-col flex-grow pl-3">
                <h2 className="text-xs font-semibold tracking-widest text-blue-600 uppercase">
                  LugarPrime
                  <span href="#" className="font-semibold text-gray-500 lg:mb-0"> Team </span>
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
              <img className="w-full rounded-md object-cover sm:size-32" src="https://img.freepik.com/premium-vector/content-marketing-landing-page_146120-87.jpg?w=826" alt="Investment Strategies" />
            </div>
            <div>
              <span className="text-sm text-gray-500">Latest Insights</span>
              <p className="mt-3 text-lg font-medium leading-6">
                <a href="#" className="text-xl text-gray-800 hover:text-gray-500">
                Consulting Firms Focus on Tech Integration
                </a>
              </p>
              <p className="text mt-2 leading-normal text-gray-500">
              As technology disruption continues to rise, consulting firms are increasingly focusing on helping businesses leverage new technologies like generative AI. Accenture reports that companies are rapidly adapting to these changes, with 88% of executives expecting faster transformation in 2024</p>
            </div>
          </div>

          <div className="group sm:flex lg:items-start">
            <div className="mb-4 shrink-0 sm:mb-0 sm:mr-4">
              <img className="w-full rounded-md object-cover sm:size-32" src="https://img.freepik.com/free-vector/customer-loyalty-concept-marketing-program-development-client-retention-idea-communication-relationship-with-customers-flat-vector-illustration_613284-2323.jpg?t=st=1732771214~exp=1732774814~hmac=61104ce06c78e51efbf22aa1465cb7763b4feffd0f8d4d77a58f759c0336d850&w=1380" alt="Retirement Planning" />
            </div>
            <div>
              <span className="text-sm text-gray-500">latest news of Management</span>
              <p className="mt-3 text-lg font-medium leading-6">
                <a href="#" className="text-xl text-gray-800 hover:text-gray-500">
                Talent Strategy Challenges
                </a>
              </p>
              <p className="text mt-2 leading-normal text-gray-500">
              Talent Strategy Challenges: With a shortage of skilled workers and ongoing shifts in the talent landscape, consulting firms are aiding businesses in navigating these human resource challenges. A recent survey revealed that talent strategy remains a critical area for firms seeking growth and adaptation in 2024. </p>
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
      <section class="py-10 bg-white sm:py-16 lg:py-24">
    <div class="max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Frequently Asked Questions</h2>

        <div class="flow-root mt-12 sm:mt-16">
            <div class="divide-y divide-gray--200 -my-9">
                <div class="py-9">
                    <p class="text-xl font-semibold text-black">What is management consulting?
                    </p>
                    <p class="mt-3 text-base text-gray-600"> Management consulting helps organizations optimize their operations, improve efficiency, and develop strategies for long-term success. Consultants analyze business processes, identify inefficiencies, and provide tailored solutions to enhance performance.
                    </p>
                    
                </div>

                <div class="py-9">
                    <p class="text-xl font-semibold text-black">How can management consulting benefit my business?</p>
                    <p class="mt-3 text-base text-gray-600">Management consulting can streamline operations, improve decision-making, and introduce best practices. Consultants bring expertise in leadership, strategic planning, and change management to help businesses navigate complex challenges and achieve growth.
                    </p>
                </div>

                <div class="py-9">
                    <p class="text-xl font-semibold text-black">When should I hire a management consultant?
                    </p>
                    <p class="mt-3 text-base text-gray-600"> You should hire a management consultant when facing business challenges, such as inefficiencies, stagnant growth, or changes in strategy. Their expertise helps address these issues and guide your company toward better performance.

                    </p>
                </div>

                <div class="py-9">
                    <p class="text-xl font-semibold text-black">What areas do management consultants focus on?
                    </p>
                    <p class="mt-3 text-base text-gray-600">
                    Management consultants specialize in areas like strategic planning, organizational design, operational efficiency, and change management. They provide tailored solutions to improve leadership, streamline processes, and drive business growth.


<a href="#" title="" class="text-blue-600 transition-all duration-200 hover:text-blue-700 focus:text-blue-700 hover:underline"> info@lugarprime.com</a>
                    </p>
                </div>
            </div>
        </div>
    </div>
        </section>

 
  </div>
  );
}

export default Management;