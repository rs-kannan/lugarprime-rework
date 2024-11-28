import { ChevronsLeft, ChevronsRight } from "lucide-react";

function Education() {
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
        <span>Education</span>
        <ChevronsLeft className="text-black font-bold ml-1" />
      </h1>

      <h1 className="text-white text-4xl font-bold mb-4 pl-[15%]">
      Transforming <span className="text-red-500">Education </span> with Strategic Business Consulting
      
      </h1>

      <p className="text-gray-300 text-sm mb-6 pl-[15%]">
      Business consulting in education focuses on optimizing organizational performance, enhancing learning outcomes, and integrating innovative technologies. Consultants guide educational institutions through curriculum development, administrative efficiency, and strategic planning to improve student experiences, drive operational success, and align with evolving industry demands.
      </p>

      <div className="pl-[15%]"></div>
    </div>

    {/* Right Section */}
    <div className="w-full md:w-1/2 flex items-center justify-center px-4">
      <img
        src="https://img.freepik.com/free-vector/gradient-mba-illustration_23-2149350374.jpg?t=st=1732782002~exp=1732785602~hmac=c4b79aa283902ac2495f9cfe5e457af30f02a90f6354e130f20bcb9b22422194&w=996"
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
            Business consulting in operations focuses on enhancing efficiency,
            optimizing processes, and reducing costs. Consultants work with
            organizations to streamline workflows, implement best practices, and
            leverage technology to improve performance. The goal is to achieve
            greater productivity, better resource utilization, and sustainable
            growth, ensuring that all business functions operate seamlessly.
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
                Curriculum Development Consultants assist educational
                institutions in designing and implementing updated, relevant
                curricula that align with industry trends and academic
                standards. This includes integrating technology and addressing
                the needs of diverse student populations. Assess current
                curriculum effectiveness. Develop industry-relevant content.
                Integrate technology and online learning tools. Ensure alignment
                with accreditation standards.
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
                  src="https://img.freepik.com/free-vector/student-using-laptop-studying-desk_1262-21429.jpg?t=st=1732780703~exp=1732784303~hmac=d95831093bec4eac62022bae397c62229d54ec68fd421adb3856bb4e8a39eab7&w=1380"
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
                      src="https://img.freepik.com/free-vector/college-project-concept-illustration_114360-10211.jpg?t=st=1732780757~exp=1732784357~hmac=6ed93024f657803b12937f9e18dd0ee677fa5a158727d01e84fc8ac117795f48&w=1380"
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
                Educational Technology Integration
              </h1>
              <p className="mb-8 text-left text-base leading-relaxed text-gray-900">
                Educational consultants guide schools and universities in
                adopting and integrating modern technologies to enhance the
                learning experience. This includes selecting platforms for
                online learning, virtual classrooms, and tools that improve
                teaching efficiency.
              </p>
              <div className="mt-0 max-w-7xl flex-col sm:flex lg:mt-6">
                <div className="prose-md prose">
                  <ul>
                    <li className="text-gray-900 text-xl">
                      Identify suitable educational technologies.
                    </li>
                    <li className="text-blue-500 text-xl">
                      Train staff for tech adoption.
                    </li>
                    <li className="text-gray-900 text-xl">
                      Integrate digital tools into classrooms.
                    </li>
                    <li className="text-blue-500 text-xl">
                      Measure the impact of tech on learning outcomes.
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
                Student Engagement & Retention Strategies
              </h1>
              <p className="mb-8 text-left text-base leading-relaxed text-gray-900">
                Consultants help institutions improve student engagement and
                retention through targeted strategies, including personalized
                learning paths, support services, and creating inclusive
                environments. These efforts aim to enhance student success and
                satisfaction.
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
                      Strengthen support services (e.g., counseling, tutoring).
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
                      src="https://hospitalityinsights.ehl.edu/hubfs/employee-retention-strategies.webp"
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
                  src="https://img.freepik.com/free-vector/employee-training-concept-illustration_114360-25570.jpg?t=st=1732782060~exp=1732785660~hmac=205c73faf20b17c16eb1bc3add6a4f088c173130aff9dd485ec1ef2c073f3050&w=826"
                />
              </div>
            </div>
            <div className="flex flex-col items-start mb-16 text-left lg:flex-grow md:w-1/2 lg:pr-24 md:pl-16 md:mb-0">
              <span className="mb-8 text-xs font-bold tracking-widest text-blue-600 uppercase">
                Operational Efficiency in Education
              </span>
              <p className="mb-12 text-base leading-relaxed text-gray-900">
                {" "}
                Education consultants work on improving the operational aspects
                of educational institutions, focusing on resource management,
                administrative workflows, and cost control. The goal is to
                maximize efficiency and reduce operational overhead. Streamline
                administrative processes. Optimize resource allocation (staff,
                facilities). Implement data-driven decision-making. Reduce costs
                while maintaining quality.
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
                  src="https://img.freepik.com/free-vector/virtual-graduation-ceremony-with-students_23-2148568872.jpg?t=st=1732782191~exp=1732785791~hmac=d266631521596cb6e923d4ec63424233d57e12568773500ad1ec020b437b63e5&w=1380"
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
                    Consulting Firms Target Emerging Education Technologies
                  </a>
                </p>
                <p className="text mt-2 leading-normal text-gray-500">
                  A focus is emerging on the integration of AI-driven solutions
                  in education. Consulting firms are partnering with
                  universities and training institutions to enhance their
                  digital learning platforms, providing tech-savvy strategies to
                  improve engagement and learning outcomes
                </p>{" "}
              </div>
            </div>

            <div className="group sm:flex lg:items-start">
              <div className="mb-4 shrink-0 sm:mb-0 sm:mr-4">
                <img
                  className="w-full rounded-md object-cover sm:size-32"
                  src="https://img.freepik.com/free-photo/academy-certification-curriculum-knowldege-icon_53876-120062.jpg?t=st=1732781462~exp=1732785062~hmac=cfa2dd12ef62443cf928eaea7347755a450b81338aac571499b489cee6c0b71f&w=1380"
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
                    Rise of Purpose-Driven Education Strategies
                  </a>
                </p>
                <p className="text mt-2 leading-normal text-gray-500">
                  Educational institutions are increasingly adopting
                  purpose-driven models that align teaching with societal impact
                  and sustainability. Consultants are advising on integrating
                  ESG (Environmental, Social, and Governance) goals into
                  curricula, reflecting a broader trend toward values-driven
                  education
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
                  1. What is the role of business consulting in education?
                </p>
                <p class="mt-3 text-base text-gray-600">
                  {" "}
                  Business consultants in education help institutions improve
                  operational efficiency, integrate new technologies, and
                  develop strategies to enhance student engagement and learning
                  outcomes. They guide educational transformations to align with
                  industry trends.
                </p>
              </div>

              <div class="py-9">
                <p class="text-xl font-semibold text-black">
                  2. How do consultants assist in curriculum development?
                </p>
                <p class="mt-3 text-base text-gray-600">
                  {" "}
                  Consultants support institutions in designing and updating
                  curricula to align with current industry demands and
                  educational standards. They also integrate technology and
                  create more personalized, flexible learning pathways for
                  students.
                </p>
              </div>

              <div class="py-9">
                <p class="text-xl font-semibold text-black">
                  3. What are the benefits of digital transformation in
                  education?
                </p>
                <p class="mt-3 text-base text-gray-600">
                  {" "}
                  Digital transformation allows educational institutions to
                  enhance learning experiences with online tools, improve
                  administrative processes, and better manage resources.
                  Consultants assist in selecting and integrating the right
                  technologies for growth.
                </p>
              </div>

              <div class="py-9">
                <p class="text-xl font-semibold text-black">
                  4. Why is student retention important in education consulting?
                </p>
                <p class="mt-3 text-base text-gray-600">
                  Retention is vital for institutional success. Consultants
                  develop strategies to engage students through personalized
                  learning, support services, and inclusive campus environments,
                  leading to higher graduation rates and long-term institutional
                  growth.
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

export default Education;
