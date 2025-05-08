import React from 'react'

export default function Footer() {
    return (
        <footer className='p-5'>

            <div className='flex flex-col md:flex-row items-start md:items-center justify-between px-4'>
                {/* سمت چپ */}
                <div className='w-full md:w-1/2 mb-8 md:mb-0'>
                    <nav>
                        <ul className='flex flex-col md:flex-row items-start gap-8 md:gap-12'>
                            {/* بخش Explore */}
                            <li className='flex flex-col md:flex-row items-start gap-5 w-full md:w-max'>
                                <span className='text-lg font-medium mb-2 md:mb-0'>explore</span>
                                <ul className='text-xl md:text-2xl space-y-4 md:space-y-6'>
                                    <li><a href="#" className='hover:text-gray-500 transition-colors'><span>Work</span></a></li>
                                    <li><a href="#" className='hover:text-gray-500 transition-colors'><span>About</span></a></li>
                                    <li><a href="#" className='hover:text-gray-500 transition-colors'><span>Services</span></a></li>
                                    <li><a href="#" className='hover:text-gray-500 transition-colors'><span>Blog</span></a></li>
                                </ul>
                            </li>

                            {/* بخش Stalk us */}
                            <li className='flex flex-col md:flex-row items-start gap-5 w-full md:w-max'>
                                <span className='text-lg font-medium mb-2 md:mb-0'>stalk us</span>
                                <ul className='text-xl md:text-2xl space-y-4 md:space-y-6'>
                                    <li><a href="#" className='hover:text-gray-500 transition-colors'><span>LinkedIn</span></a></li>
                                    <li><a href="#" className='hover:text-gray-500 transition-colors'><span>Instagram</span></a></li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                </div>

                {/* سمت راست */}
                <div className='w-full md:w-1/2'>
                    <nav>
                        <ul className='flex flex-col items-end gap-8 md:gap-12'>
                            {/* بخش SAY HELLO */}
                            <li className='flex flex-col items-end gap-5 w-full md:w-max'>
                                <span className='text-lg font-medium'>SAY HELLO</span>
                                <ul className='text-xl md:text-2xl text-right'>
                                    <li>
                                        <a href="mailto:hello@serious.business" className='hover:text-gray-500 transition-colors whitespace-nowrap'>
                                            <span>hello@serious.business</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>

                            {/* بخش Exceptional talent */}
                            <li className='flex flex-col items-end gap-5 w-full md:w-max'>
                                <span className='text-lg font-medium'>Exceptional talent?</span>
                                <ul className='text-xl md:text-2xl text-right'>
                                    <li>
                                        <a href="mailto:apply@serious.business" className='hover:text-gray-500 transition-colors whitespace-nowrap'>
                                            <span>apply@serious.business</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div className='w-full flex flex-col sm:flex-row items-center justify-center text-4xl md:text-6xl lg:text-8xl gap-2 md:gap-4 lg:gap-5 px-4'>
  <div className='whitespace-nowrap'><span>SERIOUS</span></div>
  <div>
    <div className='relative ring-4 md:ring-6 lg:ring-8 w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 rounded-full p-3 md:p-4 lg:p-6 rotate-[5deg] md:rotate-[8deg] lg:rotate-[10deg] translate-x-[5px] md:translate-x-[8px] lg:translate-x-[10px] animate-rotate-change'>
      <div className='w-full h-full border-[6px] md:border-[9px] lg:border-[12px] border-t-transparent border-l-transparent rotate-45 rounded-full'>
      </div>
      <div className='w-4 h-4 md:w-5 md:h-5 lg:w-7 lg:h-7 bg-black rounded-full absolute top-4 left-6 md:top-6 md:left-8 lg:top-8 lg:left-10 animate-height-change'></div>
      <div className='w-4 h-4 md:w-5 md:h-5 lg:w-7 lg:h-7 bg-black rounded-full absolute top-4 right-6 md:top-6 md:right-8 lg:top-8 lg:right-10 animate-height-change'></div>
    </div>
  </div>
  <div className='whitespace-nowrap'><span>BUSINESS</span></div>
</div>
        </footer>
    )
}
