import Banner from "@/components/custom/banner";
import IndexSection from "@/components/custom/index_section";
import videoBanner from '../src/assets/videos/5g_banner.mp4';
import newsImage from '../src/assets/images/5g_news.jpeg';
import NewsBanner from "@/components/custom/news_banner";
import TwoColumnSection from "@/components/custom/two_column_section";
import InsightsSection from "@/components/custom/insights_section";
import image1 from '../src/assets/images/5g_insight_1.jpeg';
import image2 from '../src/assets/images/5g_insight_2.jpeg';
import image3 from '../src/assets/images/5g_insight_3.jpeg';
import image4 from '../src/assets/images/5g_insight_4.jpeg';
import diagram from '../src/assets/images/comparing_5g_diagram.png';
import relatedCapabilities from '../src/assets/images/accenture_related_capabilities.jpg';
import caseStudyImage from '../src/assets/images/rakuten_v2.jpg';
import joinTeam from '../src/assets/images/dt_join_team.jpeg';
import fiveGPortrait from '../src/assets/images/5g_foundational_technology_portrait.jpeg';
import fiveGParallax from '../src/assets/images/Accenture_5G_Parallax.jpg';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Footer from "./footer";
import NavBar from "./navbar";

const indexData = {
  centered: true,
  image: false,
  progress: false,
  sticky: true,
  links: [ 'Explore Our Latest Insights', 'Why Does 5G Matter?', 'How Is 5G Different From 4G?', 'What Can 5G Offer?', 'How Can Businesses Prepare For 5G?' ]
}

const accordionData = [
  {
    title: 'Communications service providers',
    content: 'CSPs will become the provider of 5G networks, devices and services, and a crucial partner across industries. Greater bandwidth, lower latency and the proliferation of post-smart phone era devices will enable enhanced services and higher revenues, as well as open the doors for telcos to expand their products and service offerings beyond pure connectivity.'
  },
  {
    title: 'Manufacturing',
    content: '5G will offer higher flexibility, visibility and security for configurable factories, mobile robots, time-sensitive networks and lower maintenance costs.'
  },
  {
    title: 'Automotive',
    content: '5G will provide improved safety of transportation, especially with automated vehicles. It will also offer higher bandwidth and edge computing power for vehicle-to-infrastructure (V2I), vehicle-to-network (V2N) services and machine-to-machine (M2M) feedback loops.'
  },
  {
    title: 'Retail',
    content: '5G will provide reinvented shopping and brand experiences using technologies like virtual reality (VR) in the metaverse.'
  },
  {
    title: 'Healthcare',
    content: '5G will offer rapid processing of high-quality and high-quantity medical data and richer mobile and home care, as well as greater reliability and lower latency in critical patient applications.'
  },
  {
    title: 'Utilities',
    content: '5G will provide enhanced worker productivity and safety and improved asset management through real-time data monitoring and risk mitigation. It will also provide a new foundation for grid modernization and grid resiliency, optimized operational costs and the ability to monetize assets.'
  },
  {
    title: 'Education',
    content: '5G will offer more interactive and connected classrooms through augmented reality (AR)-driven learning, as well as greater access to resources to enable stronger interactions and democratize education.'
  },
];

const videoData = {
  link: 'https://www.youtube.com/embed/Uu0n4SItPkc?si=RVJ59dqgWj7eiILa',
  title: 'Making 5G work for your business',
  description: 'Accenture has the real-world experience, capabilities and solutions to make 5G work for your business.',
  transcript: true
}

const bannerData = {
  title: 'The future is 5G',
  tagLine: 'Explore the technology transforming how we work, play and learn.',
  video: videoBanner
}

const insightData = [
  {
    title: 'Modern networks: How to fast track competitive advantage',
    description: 'Network modernization can yield greater business resiliency and cost efficiency, creating a ripple effect of innovation.',
    tag: 'Cloud',
    image: image1,
  },
  {
    title: 'Leading with edge: How to reinvent with data and AI',
    description: 'Our research reveals how the most successful adopters are using edge to fuel innovation.',
    tag: 'Cloud',
    image: image2,
    class: 'mt-[3rem]'
  },
  {
    title: 'Powering reinvention with private wireless networks',
    description: 'Learn how you can use private wireless networks to upgrade, extend and modernize connectivity to challenging industrial sites.',
    tag: 'Cloud Infrastructure',
    image: image3,
    class: 'mt-[6rem]'
  },
  {
    title: 'Build for the cloud: Five steps to modern networks',
    description: 'Learn why now is a good time to rearchitect enterprise networks and how to succeed.',
    tag: 'Cloud',
    image: image4,
    class: 'mt-[9rem]'
  }
]

const FiveGIndex = () => {
  return (
    <>
    <NavBar />
      <Banner data={ bannerData } />
      <IndexSection data={ indexData } />
      <NewsBanner
        image={ newsImage }
        title={ 'ACCENTURE AT MWC 2023' }
        subTitle={ 'From the heart of change' }
      />
      <TwoColumnSection
        video={ true }
        videoData={ videoData }
        title={ 'What is 5G?' }
        description={ ['5G is the fifth generation of cellular technology. It is a generational leap in technology where everything is new: new spectrum frequencies, new radio and new core network. While 4G’s speed and capacity have accelerated the app economy and mobile video, 5G is a platform for entirely new innovations.', 'Accenture research shows that companies that invest in advanced network capabilities such as 5G will grow revenue 2.5 times faster in the next three years.'] }
        links={ true }
      />
      <InsightsSection
        data={ insightData }
        centered={ false }
        description={null}
        title={ 'Explore our latest insights' }
      />
      <TwoColumnSection
        title='Why does 5G matter?'
        background={ true }
        note={ true }
        noteText='Investing in 5G and transforming enterprise networks is a must for companies seeking to unlock the full potential of the Cloud Continuum.'
      >
        <h5 className="font-bold">5G and cloud</h5>
        <div className="text-lg">
          <p className="mb-8">Previous <a href="#" className="text-blue-700 underline">network technologies</a> were not built for today’s highly distributed world of cloud, edge devices and remote work. <a href="#" className="text-blue-700 underline">Cloud-enabled networks</a> powered by 5G—along with other technologies such as edge, open radio access network (O-RAN), and software-defined wide area network/secure access service edge (SD-WAN/SASE)—seamlessly connect across the dynamic capabilities of the <a href="#" className="text-blue-700 underline">Cloud Continuum</a>, from the public through the edge, and everything in between. As more and more companies are migrating to the cloud, we are only starting to see the business impact of 5G.</p>
          <h5 className="font-bold">5G impact on industries</h5>
          <p className="mb-8">5G technology is already having a transformative impact on the economy, spurring economic growth by:</p>
          <ul className="pl-12 mb-8">
            <li className="list-disc">Creating new industries, products and business models. As 4G unlocked the app economy, 5G is poised to unlock higher bandwidth, near real-time responses, the industrial Internet of Things (IIoT), and mission-critical products and applications.</li>
            <li className="list-disc">Improving productivity and reducing costs, leading to increased economic output from the same inputs.</li>
            <li className="list-disc">Optimizing service quality significantly and, therefore, consumer willingness to pay for goods and services.</li>
          </ul>
          <p className="mb-8">5G unlocks rapid data and insight-driven decision-making. It is estimated that 5G could add up to <a href="#" className="text-blue-700 underline">$1.5 trillion to US GDP</a> and up to <a href="#" className="text-blue-700 underline">€1 trillion to European GDP</a> over the next five years (2021-25).</p>
          <p className="mb-8">Here’s a snapshot of the impact on communications service providers (CSPs) and industries:</p>
        </div>
        <Accordion type='multiple' className="w-[45rem] bg-white">
          { accordionData.map((accordionItem, i) => (
            <AccordionItem value={ `item-${ i }` } key={ `item-${ i }` }>
              <AccordionTrigger className='px-4 py-3 font-normal text-lg'>
                { accordionItem.title }
              </AccordionTrigger>
              <AccordionContent className='px-4 py-3 font-normal text-lg bg-[#F2F2F2] shadow-inner'>
                { accordionItem.content }
              </AccordionContent>
            </AccordionItem>
          )) }
        </Accordion>
      </TwoColumnSection>
      <img src={ fiveGParallax } alt="" />
      <TwoColumnSection
        title='How is 5G different from 4G?'
        description={ [
          'It all began with 1G, which was the network that unlocked mobile voice. Then came 2G, which added the ability to send text messages. 3G expanded on that with a network that could handle mobile voice, text and data. Eventually, 4G added mobile internet to the mix, connecting humans with devices.',
          'With 5G, things get even more exciting because 5G will connect everything—humans, machines, objects and devices. 5G will converge the physical world with the digital while adding hyper-personalization for particular use cases. For example, 5G can be deployed as a private network or a network slice, both of which can further customize and enable the Cloud Continuum.',
          '5G’s economic importance could be as revolutionary as electricity or the automobile, and it will play a massive role in transforming economies.'
        ] }
        image={ true }
        imageLink={ diagram }
        background={ false }
      />
      <TwoColumnSection
        title='What can 5G offer?'
        image={ true }
        imageLink={ fiveGPortrait }
        background={ true }
      >
        <div className="flex-col text-lg">
          <p className="mb-4">5G is fueling a massive digital shift, from product development to transportation, from entertainment to agriculture.</p>
          <p className="mb-4">There are <a href="#" className="text-blue-700 underline">five areas</a> that underpin 5G’s transformative power:</p>
          <p className="font-bold">Enhanced mobile broadband (eMBB)</p>
          <p className="mb-4">5G delivers high bandwidth and speeds of up to 10 gigabytes per second to enable ultra-high-definition video and data volumes. High-speed mobile broadband enables applications that require rich data transfer in both upstream and downstream directions, like virtual reality and extended reality (XR).</p>
          <p className="font-bold">Massive Internet of Things (mIoT)</p>
          <p className="mb-4">5G can provide simultaneous connectivity of up to 1 million connections per square kilometer. This dense connectivity is key to implementing advanced massive IoT applications.</p>
          <p className="font-bold">Mission-critical services (MCS)</p>
          <p className="mb-4">Mission-critical applications like remote intensive care units demand reliability and speed. 5G can carry network traffic with latencies as low as a millisecond when that time is the difference between life and death.</p>
          <p className="font-bold">Private wireless</p>
          <p className="mb-4">Private wireless networks offer an on-premise and purpose-built network solution that secures business-critical operations. A private 5G network supports indoor and outdoor operations without the impact of legacy and ad hoc wireless designs. Of the executives in our Accenture study, 84% plan to invest in a new campus network or modernize the existing one, and 67% are planning to set up a 5G campus network.</p>
          <p className="font-bold">Network slicing</p>
          <p className="mb-4">A network slice is a useful solution for wide area networks. It allows a connectivity provider (e.g. a carrier) to create a fit-for-purpose connectivity solution in which the customer (e.g. a utility company) gets a “slice” of the public network tailored to their goals.</p>
        </div>
      </TwoColumnSection>
      <TwoColumnSection
        title='How can businesses prepare for 5G?'
        background={ false }
        note={ true }
        noteText='5G connectivity unlocks new high-speed, low latency applications where edge + artificial intelligence can be used to perform processes 10x or 100x better than humans.'
      >
        <div className="text-lg">
          <p className="mb-4">5G technology creates new experiences, delivers cost and productivity benefits, unlocks new products, services and revenue streams, and helps harness the value of the Cloud Continuum. 5G networks also support sustainability thanks to the technological shift from legacy networks, driving significant energy demand reductions and reducing carbon emissions.</p>
          <ul className="pl-12 mb-8 list-decimal">
            <li>
              <p className="font-bold">Explore new use cases made possible by 5G connectivity</p>
              <p>Companies in the manufacturing, healthcare and natural resources industries are the furthest along in their journeys to 5G.</p>
            </li>
            <li>
              <p className="font-bold">Make 5G part of your sustainability strategy</p>
              <p><a href="#" className="text-blue-700 underline">There are countless high-impact ways to use 5G technology</a>—not only to make our world greener through the likes of connected and automated farming, intelligent energy grids and intelligent asset management, but also to make it safer through enhanced vehicle safety and automation and to drastically improve remote healthcare and even remote surgeries.</p>
            </li>
          </ul>
          <ul className="list-disc">
            <li><span className="font-bold">Manufacturing:</span> Energy savings are driven through automation, machine learning and digital twins enabled by 5G, fiber and cloud.</li>
            <li><span className="font-bold">Agriculture:</span> The use of sensors, alongside <a href="#" className="text-blue-700 underline">real-time monitoring solutions</a> enabled by 5G connectivity and automation, is a crucial solution for limiting agriculture’s impact on the environment.</li>
            <li><span className="font-bold">Utilities:</span> In grid optimization, energy supply is balanced with existing demand to prevent any losses on the grid. 5G-enabled real-time monitoring, coupled with the use of sensors and drones, can help reduce emissions and predict faults before they happen.</li>
          </ul>
        </div>
      </TwoColumnSection>
      <TwoColumnSection
        title='Related capabilities'
        description={[
          'Accenture offers a full spectrum of services for companies replatforming their business on cloud and developing new solutions at the edge. We help enterprises shift to experience-led, data-driven and open platform-based models to succeed at the time of compressed transformation.'
        ]}
        image={ true }
        imageLink={ relatedCapabilities }
      >
        <div className="flex flex-col">
          <a href="#" className="my-8 text-blue-700 underline">5G Enterprise Networks</a>
          <a href="#" className="text-blue-700 underline">5G Communications Networks</a>
        </div>
      </TwoColumnSection>
      <TwoColumnSection
        title='Case study'
        reverse={ true }
        image={ true }
        imageLink={ caseStudyImage }
        description={[
          {
            tag: 'Redefining the way the world connects',
            value: 'Accenture helps Rakuten Mobile build the world’s first fully virtualized cloud-native telecommunication network.'
          }
        ]}
        background={ false }
      >
        <a href="#" className="text-blue-700 font-bold mt-12">READ MORE</a>
      </TwoColumnSection>
      <TwoColumnSection
        title='Join the team'
        description={[
          'Ideate, innovate, change the world, repeat. Be part of a team of talented people using the latest technology to create experiences that make a difference by solving the world’s biggest challenges.'
        ]}
        image={ true }
        imageLink={ joinTeam }
      >
        <div className="w-fit relative">
          <button className="p-3 text-sm bg-black font-bold z-[3] relative transition-all duration-500 hover:-translate-x-2 hover:-translate-y-2 text-white shadow-sm">VIEW OPEN POSITIONS</button>
          <span className="w-full h-full translate-x-1 translate-y-1 bg-gray-400 z-[2] block absolute top-0"></span>
        </div>
      </TwoColumnSection>
      <TwoColumnSection
        title='Frequently asked questions'
        background={ false }
      >
        <Accordion type='multiple' className='w-[45rem]'>
          <AccordionItem value='item-1'>
            <AccordionTrigger className='px-4 py-3 font-normal text-lg'>
              What does 5G mean for IoT?
            </AccordionTrigger>
            <AccordionContent className='px-4 py-3 font-normal text-lg bg-[#F2F2F2] shadow-inner'>
              5G’s substantially-increased network capacity will ensure reliable connectivity for the surging number of simultaneously-connected devices and their diverse usage patterns. 5G can provide simultaneous connectivity to potentially one million connections per square kilometer. This massively dense connectivity is essential to the <a href="#" className='text-blue-700 underline'>effective implementation of advanced IoT applications.</a> One example of this is enabling large networks of sensors and machines to capture the rich datasets necessary to apply AI in smart power plants.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='item-2'>
            <AccordionTrigger className='px-4 py-3 font-normal text-lg'>
              How is 5G related to edge computing?
            </AccordionTrigger>
            <AccordionContent className='px-4 py-3 font-normal text-lg bg-[#F2F2F2] shadow-inner'>
              While 5G and <a href="#" className="text-blue-700 underline">edge computing</a> are each powerful technologies, when combined they offer so much more. 5G technology supports the high speed, low latency and device density that are essential for edge computing. With 5G connectivity, edge computing becomes easier to manage, deploy and use. 5G is a catalyst that amplifies edge computing. It makes the edge more mobile, enabling new use cases (e.g. self-driving vehicles, automated retail transactions, smart city projects and more). Together, 5G and edge keep computation and data storage closer to where data is generated, which means better data control, faster insights, continuous operations and increased security. The blend of 5G and edge results in lower operations costs and bandwidth consumption and increased network responsiveness.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='item-3'>
            <AccordionTrigger className='px-4 py-3 font-normal text-lg'>
              What does 5G mean for Wi-Fi?
            </AccordionTrigger>
            <AccordionContent className='px-4 py-3 font-normal text-lg bg-[#F2F2F2] shadow-inner'>
              Wi-Fi is a best-effort technology that is not truly mobile. While Wi-Fi offers low-cost connectivity, ease of use and a large developer community, it can also be less secure than 5G. Compared to Wi-Fi, 5G is more reliable and secure. 5G can also support mobility and is more responsive with ultra-low latency (1ms).
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='item-4'>
            <AccordionTrigger className='px-4 py-3 font-normal text-lg'>
              Is 5G secure?
            </AccordionTrigger>
            <AccordionContent className='px-4 py-3 font-normal text-lg bg-[#F2F2F2] shadow-inner'>
              5G comes with security controls such as International Mobile Subscriber Identity (IMSI) encryption and the <a href="#" className='text-blue-700 underline'>Security</a> Edge Protection Proxy (SEPP) function. These features create new tools that a cybersecurity team can use to reduce risk and create a more secure network. However, the exponential increase in devices, services and zones would require a fundamental reimagining of security design.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='item-5'>
            <AccordionTrigger className='px-4 py-3 font-normal text-lg'>
              What radio spectrum is 5G using?
            </AccordionTrigger>
            <AccordionContent className='px-4 py-3 font-normal text-lg bg-[#F2F2F2] shadow-inner'>
              Radiofrequency spectrum is the fuel of all wireless communications. Depending on geography, regulators allocate 5G spectrum into two to three broad ranges: high-band spectrum (e.g. millimeter-wave), which supports the fastest 5G speeds; mid-band spectrum or sub-6 gigahertz (e.g. 1-6 gigahertz), which offers a good mix of coverage and capacity; and low-band spectrum (e.g. below 1 gigahertz), which provides strong wide-area and in-building coverage.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </TwoColumnSection>
      <Footer />
    </>
  );
}

export default FiveGIndex;