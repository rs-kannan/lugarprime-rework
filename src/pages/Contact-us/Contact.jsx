import React from 'react'
const whatsappNumber = '+44 7443322220'
const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}`, '_blank')
  }
function Contact() {
  return (
    <div>
      <section class="py-32">
  <div class="container">
    <div
      class="flex w-full flex-col overflow-hidden rounded-lg border border-border  md:rounded-xl lg:flex-row lg:items-center">
      <div class="w-full shrink-0 self-stretch lg:w-1/2">
        <img src="src/assets/LP.png" alt="placeholder hero"
          class="aspect-[2/2] w-full rounded-md object-cover" />
      </div>
      <div class="w-full shrink-0 px-4 py-6 md:p-8 lg:w-1/2 lg:px-16">
        <h3 class="mb-3 text-2xl font-semibold md:mb-4 md:text-4xl lg:mb-6 text-red-500">Lugar<span className='text-blue-900'>Prime</span></h3>
        <p class="mb-8 text-zinc-600 lg:text-lg">
          Feel Free to Connect-Us
        </p>
        <button
   onClick={handleWhatsAppClick}
  className="inline-flex items-center justify-center whitespace-nowrap bg-blue-500 rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-zinc-900 text-white hover:bg-zinc-900/90 h-10 px-4 py-2">
  Connect Us
</button>


      </div>
    </div>
  </div>
</section>
<section>
      {/* Container */}
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
        <h5 className="mb-6 text-xl font-semibold md:mb-10 lg:mb-12">
          {/* The world’s innovative companies use Flowspark */}
        </h5>
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-12 md:grid-cols-3 md:gap-6">
          <div className="flex justify-center">
            <img
              src="../../src/assets/Lugar-pay.webp"
              alt=""
              className="inline-block"
            />
          </div>
          <div className="flex justify-center">
            <img
              src="../../src/assets/LugarAcademy.webp"
              alt=""
              className="inline-block"
            />
          </div>
          <div className="flex justify-center">
            <img
              src="../../src/assets/Lugar-Energy.webp"
              alt=""
              className="inline-block"
            />
          </div>
        </div>
      </div>
    </section>

    </div>
  )
}

export default Contact
