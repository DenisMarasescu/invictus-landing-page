import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="font-georgia">
      <Head>
        <title>Invictus</title>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Georgia&display=swap" />
      </Head>
      
      <header className="flex justify-between items-center p-5 bg-transparent pl-28 pr-28 absolute w-[100vw]">
        <div className="text-3xl font-bold font-georgia">
          <h2 className=' font-thin'>Invictus</h2>
        </div>
        <nav className="flex space-x-8 pr-28">
          <Link href="#story" legacyBehavior><a className="text-gray-900 font-thin hover:underline">Story</a></Link>
          <Link href="#mission" legacyBehavior><a className="text-gray-900 font-thin hover:underline">Mission</a></Link>
          <Link href="#timeline" legacyBehavior><a className="text-gray-900 font-thin hover:underline">Timeline</a></Link>
          <Link href="#contact" legacyBehavior><a className="text-gray-900 font-thin hover:underline">Contact</a></Link>
        </nav>
      </header>
      
      <main className='flex h-[100vh] w-[100vw]'>
          <div className='flex flex-col gap-4 w-[50vw] h-full justify-center items-start pl-28'>
              <h1 className='font-normal text-5xl leading-relaxed'>We want to make a change that’ll last</h1>
              <p>We are a group of 13 ambitious students from the Entrepreneurship Academy in Bucharest, each driven by a shared passion for business and a deep commitment to making a positive impact.</p>
              <Link href="#" legacyBehavior><a className=' bg-[#192B76] text-white rounded-md py-2 px-10'>Contact Us</a></Link>
          </div>
          <Image src='/invictus-hero.png' alt='Invictus team' width={1000} height={100}></Image>
      </main>
      
      <section className="text-center p-10 py-20 bg-[#0C193E] text-white">
        <p>Thanks to</p>
        <h3 className="text-3xl font-bold mb-14">Our Partners</h3>
        <div className="flex justify-center space-x-52">
          <Image src="/rotary.png" alt="Rotary Logo" width={110} height={110} />
          <Image src="/romania.png" alt="Embassy Logo" width={110} height={110} />
          <Image src="/ea.png" alt="EA Logo" width={110} height={110} />
        </div>
      </section>


      <section id="story" className="flex items-center justify-between p-20 px-40">
        <div className="w-[40%]">
          <p className="text-lg mb-2 text-gray-600">Get to know</p>
          <h3 className="text-4xl font-bold mb-6">Our story</h3>
          <p className="text-md leading-relaxed mb-6">Over the past year, we’ve worked side by side, helping each other grow our businesses and setting collective goals to challenge ourselves and make a difference.</p>
          <p className="text-md leading-relaxed mb-6">Together, we set an ambitious target of raising €6600 for a cause close to our hearts. Through creativity and collaboration, we achieved this goal, organizing football tournaments, promoting our university, and hosting a memorable event featuring four of Romania’s leading entrepreneurs. This experience united us, reinforcing our belief in the power of teamwork and purpose-driven action.</p>
          <Link href="#" legacyBehavior><a className=' bg-[#192B76] text-white rounded-md py-2 px-10'>Contact Us</a></Link>
        </div>
        <div className="relative w-[45%]">
          <Image src="/invictus.png" alt="Our Story" width={600} height={400} className="rounded-lg" />
          <div className="absolute top-4 left-4 w-full h-full rounded-lg -z-10 transform translate-x-4 translate-y-4"></div>
        </div>
      </section>


      <section id="timeline" className="p-20 bg-[#0C193E] text-white">
        <div className="text-center mb-10">
          <p className="text-lg mb-2">What is</p>
          <h3 className="text-5xl font-bold">Our timeline</h3>
        </div>
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 bg-gray-400 h-full"></div>
          <div className="space-y-20">
            <div className="relative flex justify-between items-center w-full">
              <div className="w-[45%] text-right pr-10">
                <p className="text-lg font-bold mb-2">Arrival - 11th November</p>
              </div>
              <div className="w-4 h-4 bg-blue-900 border-4 border-white rounded-full z-10"></div>
              <div className="w-[45%] pl-10">
                <h4 className="text-xl font-bold mb-4">Team sessions</h4>
                <p className="text-lg">Our team sessions will be a space for reflection, learning, and planning for greater impact. We’ll dive deep into every aspect of our trip—discussing our goals, the insights we gain along the way, and the best strategies to extend our entrepreneurial knowledge.</p>
              </div>
            </div>
            <div className="relative flex justify-between items-center w-full">
              <div className="w-[45%] text-right pr-10">
                <h4 className="text-xl font-bold mb-4">Social Project</h4>
                <p className="text-lg">We aim to help children in kindergarten by providing essential support and engaging activities, focusing on emotional development and core values, with the help of Romanian Embassy in Cape Town and Rotary.</p>
              </div>
              <div className="w-4 h-4 bg-blue-900 border-4 border-white rounded-full z-10"></div>
              <div className="w-[45%] pl-10">
              </div>
            </div>
            <div className="relative flex justify-between items-center w-full">
              <div className="w-[45%] text-right pr-10">
              </div>
              <div className="w-4 h-4 bg-blue-900 border-4 border-white rounded-full z-10"></div>
              <div className="w-[45%] pl-10">
                <h4 className="text-xl font-bold mb-4">Entrepreneurial workshops</h4>
                <p className="text-lg">How to build a fast-growing start-up? How do social enterprises work? E-commerce, Market entry strategies, How to transform abandoned space for entrepreneurial activities and Women Entrepreneurs Fuel Economic.</p>
              </div>
            </div>
            <div className="relative flex justify-between items-center w-full">
              <div className="w-[45%] text-right pr-10">
                <p className="text-lg font-bold mb-2">Departure - 6th of December</p>
              </div>
              <div className="w-4 h-4 bg-blue-900 border-4 border-white rounded-full z-10"></div>
              <div className="w-[45%] pl-10">
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section id="mission" className="flex items-center justify-between">
        <div className="w-[40%] pl-40">
          <p className="text-lg mb-2 text-gray-600">What is</p>
          <h3 className="text-4xl font-bold mb-6">Our mission</h3>
          <p className="text-md leading-relaxed mb-6">Our next mission leads us to Cape Town, where we’re committed to supporting children living in under-resourced communities. We aim to share our knowledge, teach new skills, and provide essential support, all with the goal of fostering hope and resilience.</p>
          <p className="text-md leading-relaxed mb-6">For us, this isn’t just a project; it’s a chance to give back, grow, and leave a meaningful legacy. Together, we’re dedicated to evolving as entrepreneurs who make a difference—transforming not only ourselves but the world around us..</p>
          <Link href="#" legacyBehavior><a className=' bg-[#192B76] text-white rounded-md py-2 px-10'>Contact Us</a></Link>
        </div>
          <Image src="/volunteer.png" alt="Our Story" width={700} height={700} className="rounded-lg" />
      </section>

      <section id='contact' className='flex bg-[#0C193E] items-center justify-between py-20 w-[100vw]'>
        <div className='flex flex-col w-1/2 pl-40'>
          <p className="text-lg mb-2 text-white">Let's get</p>
          <h3 className="text-4xl font-normal mb-8 text-white">In touch</h3>
          <span className='flex text-white items-center gap-4 text-xl font-sans mb-6'><Image src='telefon-invictus.svg' alt='telefon 1' width={30} height={30}></Image>+40 (728) 904 103</span>
          <span className='flex text-white items-center gap-4 text-xl font-sans mb-6'><Image src='telefon-invictus.svg' alt='telefon 2' width={30} height={30}></Image>+40 (751) 131 334</span>
          <span className='flex text-white items-center gap-4 text-xl font-sans mb-6'><Image src='telefon-invictus.svg' alt='telefon 3' width={30} height={30}></Image>+40 (733) 336 787</span>
          <span className='flex text-white items-center gap-4 text-xl font-sans mb-6'><Image src='mail-invictus.svg' alt='mail 1' width={30} height={30}></Image>invictusthebrand@gmail.com</span>
        </div>
        <div className='w-fit pr-40'>
          <Image src='contact-invictus.svg' alt='Email' width={400} height={400}></Image>
        </div>
      </section>

      <footer className='flex justify-between items-center px-40 py-20'>
        <div className='flex flex-col'>
        <h3 className="text-4xl font-thin mb-2">Invictus</h3>
          <p>Copyright © 2024 Invictus-Team</p>
        </div>
        <div className='flex gap-12 items-center'>
          <Link href="#" legacyBehavior><Image src='/tiktok-invictus.svg' alt='TikTok' width={25} height={25}></Image></Link>
          <Link href="#" legacyBehavior><Image src='/instagram-invictus.svg' alt='TikTok' width={25} height={25}></Image></Link>
          
        </div>
      </footer>
    </div>
  );
}
