import { ChevronsLeft, ChevronsRight } from 'lucide-react';

function HumanResource() {
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
        Strategic <span className="text-red-500">Human Resource</span> Consulting for Business Success
      </h1>

      <p className="text-gray-300 text-sm mb-6 pl-[15%]">
        Expert guidance in aligning HR practices with business goals, enhancing workforce efficiency, fostering talent
        development, and driving organizational growth through innovative and strategic solutions.
      </p>

      <div className="pl-[15%]"></div>
    </div>

    {/* Right Section */}
    <div className="w-full md:w-1/2 flex items-center justify-center px-4">
      <img
        src="https://www.championpsi.com/wp-content/uploads/2023/01/Champion-HR-coach-benefits-desktop.jpg"
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
            Master Your Human Resource
            </h1>
            <p className="text-zinc-600 mb-8 w-full mx-auto">
            Unlock the full potential of your workforce with expert HR strategies. From talent acquisition and employee engagement to performance management and leadership development, we empower organizations to create a thriving, productive workplace. Drive success with tailored solutions that align your human resource capabilities with your business goals.</p>
          </div>
        </section>
         {/* Three Section Start here */}
        <section>
          <div className="container py-24">
            <div className="flex flex-wrap items-center mx-auto max-w-7xl">
              <div className="flex flex-col items-start mb-16 text-left lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:mb-0">
                <span className="mb-8 text-xl font-bold tracking-widest text-blue-600 uppercase">Talent Acquisition and Recruitment</span>
                <p className="mb-12 text-base leading-relaxed text-gray-900">Streamline hiring processes to attract and select top talent for your organization. Leverage modern tools, effective strategies, and inclusive practices to build a skilled and diverse workforce that aligns with your company’s vision and values.</p>
                <div className="mt-0 max-w-7xl flex-col sm:flex lg:mt-6">
                  <div className="prose-md prose">
                    <ul>
                      <li className="text-gray-900">Developing job descriptions and candidate profiles.</li>
                      <li className="text-gray-900">Leveraging recruitment technology and platforms.</li>
                      <li className="text-gray-900">Ensuring diversity and inclusion in hiring.</li>
                      <li className="text-gray-900">Designing effective onboarding processes.</li>
                    </ul>
                  </div>
                </div>
                <div className='pb-10'>
                </div>
                <a className="inline-flex items-center w-full mb-4">
                  <img alt="blog" src="https://res.cloudinary.com/dovhqn80g/image/upload/v1732800283/LP-LOGO.svg "
                    className="flex-shrink-0 object-cover object-center w-10 h-10 rounded-full" />
                  <span className="flex flex-col flex-grow pl-3">
                    <h2 className="text-xs font-semibold tracking-widest text-blue-600 uppercase">
                      LugarLimited
                      <span href="#" className="font-semibold text-gray-500 lg:mb-0"> HR Team</span>
                    </h2>
                  </span>
                </a>
              </div>
              <div className="w-full lg:w-5/6 lg:max-w-lg md:w-1/2 rounded-xl">
                <div>
                  <img className="object-cover object-center mx-auto rounded-lg" alt="hero"
                    src="https://www.totaljobs.com/advice/wp-content/uploads/human-resources-hr-consultant-job-description-1024x576.jpg " />
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
                        src='https://cdn-cchkmpj.nitrocdn.com/CJXGnJvCvbQYOSNVvxpLvOYcHhpJDKbH/assets/images/optimized/rev-0a95796/ossisto.com/wp-content/uploads/2023/05/What-is-HR-outsourcing.webp ' />
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-16 mt-12 flex flex-col items-start text-left md:mb-0 lg:w-1/2 lg:grow lg:pl-6 xl:mt-0 xl:pl-24">
                <span className="mb-8 text-xs font-bold uppercase tracking-widest text-blue-600">
                   Human Resourse
                </span>
                <h1 className="mb-8 text-4xl font-bold leading-none tracking-tighter text-gray-900 md:text-7xl lg:text-4xl">
                Employee Engagement and Retention
                </h1>
                <p className="mb-8 text-left text-base leading-relaxed text-gray-900">
                Foster a positive workplace culture that motivates employees to stay committed and perform their best. Implement strategies to boost job satisfaction, recognize achievements, and maintain open communication to reduce turnover and enhance team morale.
                </p>
                <div className="mt-0 max-w-7xl flex-col sm:flex lg:mt-6">
                  <div className="prose-md prose">
                    <ul>
                      <li className="text-gray-900">Conducting regular employee satisfaction surveys.</li>
                      <li className="text-gray-900">Implementing reward and recognition programs.</li>
                      <li className="text-gray-900">Promoting work-life balance initiatives.</li>
                      <li className="text-gray-900">Encouraging open feedback and career development.</li>
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
                <span className="mb-8 text-xl font-bold uppercase tracking-widest text-blue-600">
                Human Resourse
                </span>
                <h1 className="mb-8 text-4xl font-bold leading-none tracking-tighter text-gray-900 md:text-7xl lg:text-4xl">
                Performance Management and Development
                </h1>
                <p className="mb-8 text-left text-base leading-relaxed text-gray-900">
                Optimize employee performance through clear goals, constructive feedback, and continuous learning opportunities. Develop programs to measure, reward, and improve productivity while addressing individual and team growth needs.
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
                      <h2 className="mb-3 text-lg font-medium tracking-tighter text-gray-900">
                      Designing training and upskilling programs.</h2>
                      <p className="mb-3 text-lg font-medium tracking-tighter text-gray-900">
                      Aligning personal development with organizational objectives.
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
                      <h2 className="mb-3 text-lg font-medium tracking-tighter text-gray-900">
                      Setting measurable performance goals
                      </h2>
                      <p className="mb-3 text-lg font-medium tracking-tighter text-gray-900">
                      Providing constructive and timely feedback.
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
                        src='https://cdn-cchkmpj.nitrocdn.com/CJXGnJvCvbQYOSNVvxpLvOYcHhpJDKbH/assets/images/optimized/rev-0a95796/ossisto.com/wp-content/uploads/2023/05/What-are-the-challenges-and-risks-of-HR-outsourcing.webp' />
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
                    src="https://cdn-cchkmpj.nitrocdn.com/CJXGnJvCvbQYOSNVvxpLvOYcHhpJDKbH/assets/images/optimized/rev-0a95796/ossisto.com/wp-content/uploads/2023/05/What-services-does-an-outsourcing-HR-consultant-provide.webp" />
                </div>
              </div>
              <div className="flex flex-col items-start mb-16 text-left lg:flex-grow md:w-1/2 lg:pr-24 md:pl-16 md:mb-0">
                <span className="mb-8 text-xl font-bold tracking-widest text-blue-600 uppercase">  Performance Management and Development </span>
                <p className="mb-12 text-base leading-relaxed text-gray-900">Optimize employee performance through clear goals, constructive feedback, and continuous learning opportunities. Develop programs to measure, reward, and improve productivity while addressing individual and team growth needs.</p>
                <a className="inline-flex items-center w-full mb-4">
                  <img alt="blog" src="https://res.cloudinary.com/dovhqn80g/image/upload/v1732800283/LP-LOGO.svg"
                    className="flex-shrink-0 object-cover object-center w-10 h-10 rounded-full" />
                  <span className="flex flex-col flex-grow pl-3">
                    <h2 className="text-xs font-semibold tracking-widest text-blue-600 uppercase">
                      Lugar Limited
                      <span href="#" className="font-semibold text-gray-500 lg:mb-0"> HR Team</span>
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
                  <img className="w-full rounded-md object-cover sm:size-32" src="https://s3.eu-west-1.amazonaws.com/people.com.pk/wp-content/uploads/2021/12/09194418/384b36bd149e162eecf22fb27dbb5bc6.jpg " alt="Investment Strategies" />
                </div>
                <div>
                  <span className="text-sm text-gray-500">November 2024</span>
                  <p className="mt-3 text-lg font-medium leading-6">
                    <a  className="text-xl text-gray-900 ">
                    AI Transformations in HR
                    </a>
                  </p>
                  <p className="text mt-2 leading-normal text-gray-500">
                  Artificial intelligence is reshaping HR practices, moving beyond being just a feature to becoming a fundamental part of HR systems. Applications include talent acquisition, skills analysis, and workforce planning. HR leaders are also adopting responsible AI principles to mitigate risks such as algorithmic biases. </p>
                </div>
              </div>

              <div className="group sm:flex lg:items-start">
                <div className="mb-4 shrink-0 sm:mb-0 sm:mr-4">
                  <img className="w-full rounded-md object-cover sm:size-32" src="
https://www.championpsi.com/wp-content/uploads/2023/01/Champion-HR-coach-benefits-desktop.jpg " />
                </div>
                <div>
                  <span className="text-sm text-gray-500">November 2024</span>
                  <p className="mt-3 text-lg font-medium leading-6">
                    <a className="text-xl text-gray-900">
                    Support for Managers Amid Growing Burnout
                    </a>
                  </p>
                  <p className="text mt-2 leading-normal text-gray-500">
                  Managers are increasingly recognized as key to sustaining employee engagement and performance. In 2024, HR teams are focusing on providing better training, emotional intelligence resources, and career path planning to support managers. This response comes as research highlights significant burnout risks for managers, impacting overall organizational performance​
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
              latest updates statistics in 2024
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
                <p className="pt-4 text-4xl font-semibold lg:pt-10">10+</p>
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
                    <p class="text-xl font-semibold text-black">What is HR consulting, and how can it benefit my business?</p>
                    <p class="mt-3 text-base text-gray-600">HR consulting involves providing expert guidance to optimize human resource practices. Consultants can help with talent acquisition, performance management, compliance, and employee engagement, ensuring alignment with business goals. This leads to improved productivity, legal compliance, and a thriving workplace culture.</p>
                    
                </div>

                <div class="py-9">
                    <p class="text-xl font-semibold text-black">How do HR consultants assist with compliance and legal issues?</p>
                    <p class="mt-3 text-base text-gray-600">HR consultants stay updated on labor laws and industry regulations. They help businesses establish compliant policies, manage risks, and address issues like workplace safety, discrimination, and disputes, protecting companies from potential legal challenges.</p>
                </div>

                <div class="py-9">
                    <p class="text-xl font-semibold text-black">Can HR consulting help improve employee retention?</p>
                    <p class="mt-3 text-base text-gray-600">Yes, HR consultants analyze workplace culture, compensation structures, and employee engagement strategies. They develop tailored solutions, such as recognition programs, career development plans, and flexible work policies, to boost satisfaction and reduce turnover rates.</p>
                </div>

                <div class="py-9">
                    <p class="text-xl font-semibold text-black">How is technology integrated into HR consulting services?</p>
                    <p class="mt-3 text-base text-gray-600">
                    Modern HR consulting often includes implementing HR technology like applicant tracking systems, employee engagement platforms, and performance management tools. Consultants also advise on using data analytics and AI to streamline HR processes and enhance decision-making. <a href="#" title="" class="text-blue-600 transition-all duration-200 hover:text-blue-700 focus:text-blue-700 hover:underline">info@lugarprime.com</a>
                    </p>
                </div>
            </div>
        </div>
    </div>
        </section>

      </div>


    
  )
}
export default HumanResource
