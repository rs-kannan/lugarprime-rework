import BgImage from "../../assets/seo-DM.png";

function Seo() {
  return (
    <div className="py-10">
      <section>
        <div
          className="relative h-screen flex items-center justify-center bg-cover bg-center"
          style={{ backgroundImage: `url(${BgImage})` }}
        >
          <div className="absolute inset-0 bg-white bg-opacity-10"></div>{" "}
          {/* Dark overlay */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white z-10 text-center">
            Search Engine Optimization <span className="">(SEO)</span>
          </h1>
        </div>
      </section>
      {/* Section-one-end-here */}
      {/* space-top div */}
      <div className="py-20"></div>
      {/* Section-two-start-here */}
      <section>
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
                  <p className="max-w-xs  md:max-w-[256px]">
                    Say goodbye to payment headaches with SecurePay!
                  </p>
                </div>
                <h3 className="text-2xl font-bold md:text-3xl text-blue-800">
                  Search Engine Optimization (SEO).
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
                  <p className="max-w-xs  md:max-w-[256px]">
                    Say goodbye to payment headaches with SecurePay!
                  </p>
                </div>
                <h3 className="text-2xl font-bold md:text-3xl text-red-500">
                  Pay Per Click(PPC)
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
                  <p className="max-w-xs  md:max-w-[256px]">
                    Say goodbye to payment headaches with SecurePay!
                  </p>
                </div>
                <h3 className="text-2xl font-bold md:text-3xl text-red-500">
                  Social Media marketing
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
                  <p className="max-w-xs  md:max-w-[256px]">
                    Say goodbye to payment headaches with SecurePay!
                  </p>
                </div>
                <h3 className="text-2xl font-bold md:text-3xl text-red-500">
                  Content Marketing
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
                  <p className="max-w-xs  md:max-w-[256px] md:text-right">
                    Say goodbye to payment headaches with SecurePay!
                  </p>
                </div>
                <h3 className="text-2xl font-bold md:text-right md:text-3xl text-red-500">
                  Email Marketing.
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
                  <p className="max-w-xs  md:max-w-[256px] md:text-right">
                    Say goodbye to payment headaches with SecurePay!
                  </p>
                </div>
                <h3 className="text-2xl font-bold md:text-right md:text-3xl text-red-500">
                  <link
                    rel=""
                    type=""
                    href="/services/digital-marketing/mobile-marketing"
                  />
                  Mobile Marketing.
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
                  <p className="max-w-xs md:max-w-[256px] md:text-right">
                    Say goodbye to payment headaches with SecurePay!
                  </p>
                </div>
                <h3 className="text-2xl font-bold md:text-right md:text-3xl text-red-500">
                  Marketing Analytics.
                </h3>
              </div>{" "}
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
                  <p className="max-w-xs md:max-w-[256px] md:text-right">
                    Say goodbye to payment headaches with SecurePay!
                  </p>
                </div>
                <h3 className="text-2xl font-bold md:text-right md:text-3xl text-red-500">
                  Affiliate Marketing.
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* space-top div */}
      <div className="py-20"></div>
      {/* Two start Here */}
      <section class="pt-10 pb-8 overflow-hidden bg-gray-100 sm:pt-16 lg:pt-24">
        <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div class="max-w-2xl mx-auto text-center">
            <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
              Connect with all apps
            </h2>
            <p class="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis.
            </p>
            <a
              href="#"
              title=""
              class="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-gray-900 transition-all duration-200 border-2 border-gray-200 rounded-md mt-9 hover:bg-gray-900 hover:text-white hover:border-gray-900 focus:bg-gray-900 focus:text-white focus:border-gray-900"
              role="button"
            ></a>
          </div>
        </div>

        <img
          class="w-full min-w-full mx-auto mt-12 scale-150 max-w-7xl lg:min-w-0 lg:mt-0 lg:scale-100"
          src="https://cdn.rareblocks.xyz/collection/celebration/images/integration/1/services-icons.png"
          alt=""
        />
      </section>
      {/* space-top div */}
      <div className="py-20"></div>
      {/* Three Start Here */}
      <section className=" text-gray-100 pt-40">
        <div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-center sm:text-5xl text-gray-900">
              Search Engine Optimization(SEO)
            </h2>
            <p className="max-w-3xl mx-auto mt-4 text-xl text-center text-gray-600"></p>
          </div>
          <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <h3 className="text-2xl font-bold tracking-tight sm:text-3xl text-red-600">
                what is UI & UX ?
              </h3>
              <p className="mt-3 text-lg text-gray-600">
                UI/UX development involves creating user-friendly digital
                experiences by designing intuitive interfaces (UI) and
                optimizing user interactions (UX) to ensure functionality,
                accessibility, and satisfaction.
              </p>
              <div className="mt-12 space-y-12">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md bg-red-600 text-gray-100">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-7 h-7"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium leading-6 text-gray-900">
                      {" "}
                      User Interface (UI) Design
                    </h4>
                    <p className="mt-2 text-gray-600">
                      UI design focuses on the visual aspects of a product,
                      including layout, typography, colors, and elements like
                      buttons and menus. The goal is to create aesthetically
                      pleasing and consistent designs that enhance usability and
                      reflect the brand identity.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md bg-red-600 text-gray-100">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-7 h-7"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium leading-6 text-gray-900">
                      User Experience (UX) Design
                    </h4>
                    <p className="mt-2 text-gray-600">
                      UX design emphasizes user interaction, ensuring smooth and
                      intuitive navigation. It involves understanding user
                      behavior, solving pain points, and creating seamless
                      journeys that meet user needs while achieving business
                      objectives.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md bg-red-600 text-gray-100">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-7 h-7"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium leading-6 text-gray-900">
                      Development & Implementation
                    </h4>
                    <p className="mt-2 text-gray-600">
                      This stage involves translating designs into functional
                      products using front-end and back-end technologies. It
                      ensures responsiveness, performance optimization, and
                      adherence to usability standards, delivering a polished
                      and accessible experience across devices.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div aria-hidden="true" className="mt-10 lg:mt-0">
              <img
                src="https://5.imimg.com/data5/NV/RH/FF/SELLER-67473100/search-engine-optimization-seo-services-.jpg"
                alt=""
                className="mx-auto rounded-lg shadow-lg bg-gray-500"
              />
            </div>
          </div>
          <div>
            <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
              <div className="lg:col-start-2">
                <h3 className="text-2xl font-bold tracking-tight sm:text-3xl text-blue-600">
                  Our Solution
                </h3>
                <p className="mt-3 text-lg text-gray-600">
                  Our UI/UX development solutions provide tailored digital
                  experiences by combining innovative design with user-centered
                  functionality. We deliver scalable, accessible, and visually
                  stunning interfaces that drive engagement and business growth.
                </p>
                <div className="mt-12 space-y-12">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-12 h-12 rounded-md bg-blue-600 text-gray-100">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="w-7 h-7"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium leading-6 text-gray-900">
                        Custom UI/UX Design Solutions
                      </h4>
                      <p className="mt-2 text-gray-600">
                        We craft personalized designs that align with your brand
                        identity and target audience. From unique layouts to
                        innovative features, our solutions are tailored to
                        reflect your vision while enhancing user satisfaction
                        and loyalty.
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-12 h-12 rounded-md bg-blue-600 text-gray-100">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="w-7 h-7"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium leading-6 text-gray-900">
                        Cross-Platform Design
                      </h4>
                      <p className="mt-2 text-gray-600">
                        Our solutions ensure a consistent and responsive
                        experience across devices, including desktops, tablets,
                        and mobiles. By optimizing designs for all screen sizes,
                        we help you reach and engage users seamlessly across
                        multiple platforms.
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-12 h-12 rounded-md bg-blue-600 text-gray-100">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="w-7 h-7"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium leading-6 text-gray-900">
                        Usability Enhancement
                      </h4>
                      <p className="mt-2 text-gray-600">
                        We focus on simplifying user interactions by identifying
                        pain points and eliminating friction in navigation. Our
                        designs enhance usability through intuitive layouts,
                        meaningful feedback, and accessibility compliance to
                        maximize user engagement and retention.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1">
                <img
                  src="https://www.webnode.com/blog/wp-content/uploads/2019/07/1-SEO.jpg"
                  alt=""
                  className="mx-auto rounded-lg shadow-lg bg-gray-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* space-top div */}
      <div className="py-20"></div>
      {/* Four Start Here */}
      <section class="py-10 bg-white sm:py-16 lg:py-24">
        <div class="max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
          <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
            Search Engine Optimization(SEO) Services
          </h2>

          <div class="flow-root mt-12 sm:mt-16">
            <div class="divide-y divide-gray--200 -my-9">
              <div class="py-9">
                <p class="text-xl font-semibold text-black">On-Page SEO</p>
                <p class="mt-3 text-base text-gray-600">
                  This involves optimizing individual web pages to rank higher
                  in search results. Key activities include keyword research,
                  meta tag optimization, content improvement, internal linking,
                  and ensuring mobile-friendliness for better user experience
                  and search engine performance.
                </p>
                {/* <p class="mt-3 text-base text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> */}
              </div>

              <div class="py-9">
                <p class="text-xl font-semibold text-black">Off-Page SEO</p>
                <p class="mt-3 text-base text-gray-600">
                  Focuses on building credibility and authority through
                  activities outside the website. This includes link building,
                  social media engagement, influencer outreach, and guest
                  blogging to generate quality backlinks and increase domain
                  authority.
                </p>
              </div>

              <div class="py-9">
                <p class="text-xl font-semibold text-black">Technical SEO</p>
                <p class="mt-3 text-base text-gray-600">
                  Enhances a website’s technical elements for better
                  crawlability and indexing by search engines. Activities
                  include optimizing site speed, fixing broken links,
                  implementing structured data, creating XML sitemaps, and
                  ensuring SSL security for improved search rankings.
                </p>
              </div>

              <div class="py-9">
                <p class="text-xl font-semibold text-black">Local SEO</p>
                <p class="mt-3 text-base text-gray-600">
                  Aimed at improving visibility for businesses in specific
                  geographic areas. This involves optimizing Google My Business
                  profiles, managing online reviews, and using location-specific
                  keywords to attract local customers and enhance foot traffic
                  to physical locations.{" "}
                  <a
                    href="#"
                    title=""
                    class="text-blue-600 transition-all duration-200 hover:text-blue-700 focus:text-blue-700 hover:underline"
                  >
                    info@lugarprime.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* five start here */}
      {/* space-top div */}
      <div className="py-20"></div>
      <section class="py-10 bg-gray-100 sm:py-16 lg:py-24">
        <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div class="max-w-2xl mx-auto text-center">
            <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
              How do we create success
            </h2>
            <p class="max-w-lg mx-auto mt-4 text-base leading-relaxed text-gray-600">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis.
            </p>
          </div>

          <ul class="max-w-md mx-auto mt-16 space-y-12">
            <li class="relative flex items-start">
              <div
                class="-ml-0.5 absolute mt-0.5 top-14 left-8 w-px border-l-4 border-dotted border-gray-300 h-full"
                aria-hidden="true"
              ></div>

              <div class="relative flex items-center justify-center flex-shrink-0 w-16 h-16 bg-white rounded-full shadow">
                <svg
                  class="w-10 h-10 text-fuchsia-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <div class="ml-6">
                <h3 class="text-lg font-semibold text-black">
                  Create a free account
                </h3>
                <p class="mt-4 text-base text-gray-600">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                </p>
              </div>
            </li>

            <li class="relative flex items-start">
              <div
                class="-ml-0.5 absolute mt-0.5 top-14 left-8 w-px border-l-4 border-dotted border-gray-300 h-full"
                aria-hidden="true"
              ></div>

              <div class="relative flex items-center justify-center flex-shrink-0 w-16 h-16 bg-white rounded-full shadow">
                <svg
                  class="w-10 h-10 text-fuchsia-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1"
                    d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                  />
                </svg>
              </div>
              <div class="ml-6">
                <h3 class="text-lg font-semibold text-black">
                  Build your website
                </h3>
                <p class="mt-4 text-base text-gray-600">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                </p>
              </div>
            </li>

            <li class="relative flex items-start">
              <div class="relative flex items-center justify-center flex-shrink-0 w-16 h-16 bg-white rounded-full shadow">
                <svg
                  class="w-10 h-10 text-fuchsia-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <div class="ml-6">
                <h3 class="text-lg font-semibold text-black">
                  Release & launch
                </h3>
                <p class="mt-4 text-base text-gray-600">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>
      {/* six start here */}
      {/* space-top div */}
      <div className="py-20"></div>
      <section class="py-10  sm:py-16 lg:py-24">
        <div class="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
          <div class="max-w-2xl mx-auto text-center">
            <h2 class="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl text-gray-900">
              FAQ`s
            </h2>
            <p class="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-500">
              Digital marketing FAQs address common queries about online
              marketing strategies, tools, and techniques, helping businesses
              enhance their online presence.
            </p>
          </div>

          <div class="grid grid-cols-1 mt-12 md:mt-20 md:grid-cols-2 gap-y-16 gap-x-20">
            <div class="flex items-start">
              <div class="flex items-center justify-center flex-shrink-0 w-8 h-8 bg-gray-700 rounded-full">
                <span class="text-lg font-semibold text-white">?</span>
              </div>
              <div class="ml-4">
                <p class="text-xl font-semibold text-gray-900">
                  What is digital marketing?
                </p>
                <p class="mt-4 text-base text-gray-400">
                  Digital marketing promotes products or services using online
                  platforms like search engines, social media, email, and
                  websites.
                </p>
              </div>
            </div>

            <div class="flex items-start">
              <div class="flex items-center justify-center flex-shrink-0 w-8 h-8 bg-gray-700 rounded-full">
                <span class="text-lg font-semibold text-white">?</span>
              </div>
              <div class="ml-4">
                <p class="text-xl font-semibold text-gray-900">
                  Why is digital marketing important?
                </p>
                <p class="mt-4 text-base text-gray-400">
                  It helps businesses reach a global audience, improve brand
                  visibility, and drive targeted traffic, leading to better
                  conversions.
                </p>
              </div>
            </div>

            <div class="flex items-start">
              <div class="flex items-center justify-center flex-shrink-0 w-8 h-8 bg-gray-700 rounded-full">
                <span class="text-lg font-semibold text-white">?</span>
              </div>
              <div class="ml-4">
                <p class="text-xl font-semibold text-gray-900">
                  What are the key strategies in digital marketing?
                </p>
                <p class="mt-4 text-base text-gray-400">
                  Strategies include SEO, PPC advertising, content marketing,
                  social media marketing, and email campaigns tailored to
                  specific business goals.
                </p>
              </div>
            </div>

            <div class="flex items-start">
              <div class="flex items-center justify-center flex-shrink-0 w-8 h-8 bg-gray-700 rounded-full">
                <span class="text-lg font-semibold text-white">?</span>
              </div>
              <div class="ml-4">
                <p class="text-xl font-semibold text-gray-900">
                  How do you measure digital marketing success?
                </p>
                <p class="mt-4 text-base text-gray-400">
                  Success is measured using KPIs like website traffic,
                  conversion rates, click-through rates, ROI, and engagement
                  metrics across digital channels.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* seven start here */}
      <section class="py-10 bg-gray-50 sm:py-16 lg:py-24">
        <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div class="text-center">
            <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
              3,583 Customers are using Celebration
            </h2>
          </div>

          <div class="px-5 py-8 mt-12 bg-white lg:mt-20 lg:p-16">
            <div class="grid grid-cols-1 gap-12 lg:gap-16 sm:grid-cols-2">
              <div class="flex items-start">
                <svg
                  class="flex-shrink-0 w-16 h-16 text-fuchsia-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
                <div class="ml-5">
                  <h3 class="text-lg font-semibold text-black">
                    Made for Developers
                  </h3>
                  <p class="mt-4 text-base text-gray-600">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit.
                  </p>
                </div>
              </div>

              <div class="flex items-start">
                <svg
                  class="flex-shrink-0 w-16 h-16 text-fuchsia-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1"
                    d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
                <div class="ml-5">
                  <h3 class="text-lg font-semibold text-black">
                    Helpful Video Tutorials
                  </h3>
                  <p class="mt-4 text-base text-gray-600">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit.
                  </p>
                </div>
              </div>

              <div class="flex items-start">
                <svg
                  class="flex-shrink-0 w-16 h-16 text-fuchsia-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1"
                    d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                  />
                </svg>
                <div class="ml-5">
                  <h3 class="text-lg font-semibold text-black">
                    120+ Coded Blocks
                  </h3>
                  <p class="mt-4 text-base text-gray-600">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit.
                  </p>
                </div>
              </div>

              <div class="flex items-start">
                <svg
                  class="flex-shrink-0 w-16 h-16 text-fuchsia-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
                <div class="ml-5">
                  <h3 class="text-lg font-semibold text-black">
                    Secured Payments
                  </h3>
                  <p class="mt-4 text-base text-gray-600">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Seo;
