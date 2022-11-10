import { Container } from '../common/base/Container';

const testimonials = [
  {
    content:
      'I really appreciate the responsiveness and agility of the Cunomial team, and by extension platform itself. Everyone is quick and helpful and I feel like the company itself really listens and responds to the need of the customers. Using the Accubate platform has really helped us in saving a lot of effort and now we have everything uploaded on accubate cloud which is easy to access anywhere, anytime.',
    logo: '/images/testimonialLogos/pusa-krishi-logo.png',
    author: {
      name: 'Dr. Amarjeet Singh',
      role: 'COO, Pusa Krishi',
      image: '/images/avatars/amarjeet-singh.jpg',
    },
  },
  {
    content:
      'We started using Accubate and ever since the software has helped us organize the information better.It has proven to be a huge value add. Most of the tracking for our program is handled seamlessly. Accubate has helped us focus on our mission and gain time and have more insights into the core work.',
    logo: '/images/testimonialLogos/aideanaarm-logo.png',
    author: {
      name: 'Dr. S. Senthil Vinayagam',
      role: 'CEO, a-IDEA & Principal Scientist',
      image: '/images/avatars/senthil-vinayagam.jpg',
    },
  },
  {
    content:
      'Cunomial platform gives you the real experience of handling the incubation program and it is very easy to use. I was amazed with their data analytics in applications and simply loved it. Moreover, the response from the technical team for all queries is 24*7. The platform can be completely customized based on the program/events.',
    logo: '/images/testimonialLogos/derbifoundation-logo.png',
    author: {
      name: 'Dr. Lakshmi Jagannathan',
      role: 'CEO, DERBI Foundation',
      image: '/images/avatars/lakshmi-jagannatham.jpeg',
    },
  },
  {
    content:
      'The key factors for choosing to work with Cunomial Technologies is in-depth product knowledge, dedication to our needs and requirements, as well as ability to service our needs with innovative design solution within the means of our budget.',
    logo: '/images/testimonialLogos/neatehub-logo.png',
    author: {
      name: 'Dr K Karthikeyan',
      role: 'CEO, NEATEHUB',
      image: '/images/avatars/k-karthikeyan.png',
    },
  },
  {
    content:
      'Amazed to see the world class Incubator Management Solution having a super smooth UI offering end to end encrypted & integrated data platform to manage the Incubator, Accelerator operations and also to track the investment (grant/equity) flow with easy Go customizable options.',
    logo: '/images/testimonialLogos/igkvrabi-logo.png',
    author: {
      name: 'Dr. Hulas Pathak',
      role: 'CEO, IGKV R-ABI',
      image: '/images/avatars/hulas-pathak.jpg',
    },
  },
  {
    content:
      'Cunomial Team are amazingly professional. They really believe in understanding and supporting the customers needs. I have recommended Cunomial to other entrepreneurs and no one has been disappointed.',
    logo: '/images/testimonialLogos/hummingbird-logo.png',
    author: {
      name: 'Poornima Shenoy',
      role: 'CEO, Hummingbird',
      image: '/images/avatars/poornima-shenoy.jpg',
    },
  },
  {
    content:
      'The Cunomial, Accubate product has a wide array of features and flexibility for all of your innovation and idea management needs.However, Cunomial team exceeded our expectations in every way and the support we received from their team was top-notch.',
    logo: '/images/testimonialLogos/iimkashipur-logo.png',
    author: {
      name: 'Safal Batra',
      role: 'Associate Prof., IIM Kashipur',
      image: '/images/avatars/safal-batra.jpg',
    },
  },
  {
    content:
      'Accubate put everything in one place. The software was such a huge value add. Most of the tracking for our program was handled through secure spreadsheets before Accubate. Now all our processes are automated which saves administrative time. I really appreciate the responsiveness and agility of the Cunomial team and by extension the platform itself. Everyone is quick and helpful and I feel like the company really listens and responds to the needs of its customers.',
    logo: '/images/testimonialLogos/ncl-logo.png',
    author: {
      name: 'Pradeep Kumar',
      role: 'Dy. Manager at Coal India Limited',
      image: '/images/avatars/pradeep-kumar.jpg',
    },
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" aria-labelledby="testimonials-title" className=" py-20 dark:bg-gray-900 sm:py-32">
      <Container>
        <div className="mx-auto max-w-4xl md:text-center">
          <h2 id="testimonials-title" className="font-display text-3xl tracking-tight text-base-content sm:text-4xl">
            Institutions around the world are using our products
          </h2>
          <p className="mt-4 text-lg tracking-tight text-base-content">
            We are a leading provider of modern SaaS solutions that solve multiple, complex business problems to
            companies of all sizes.
          </p>
        </div>
        <div className="carousel w-full mt-16 lg:mt-20">
          {testimonials.map((testimonial, index) => (
            <div key={index} id={index} className="carousel-item relative w-full">
              <div className="w-full overflow-hidden bg-gray-50 dark:bg-gray-700 py-12 md:py-20 lg:py-24 rounded-4xl">
                <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                  <svg
                    className="absolute top-full right-full translate-x-1/3 -translate-y-1/4 transform lg:translate-x-1/2 xl:-translate-y-1/2"
                    width={404}
                    height={404}
                    fill="none"
                    viewBox="0 0 404 404"
                    role="img"
                    aria-labelledby="svg-workcation"
                  >
                    <title id="svg-Accubate">Accubate</title>
                    <defs>
                      <pattern
                        id="ad119f34-7694-4c31-947f-5c9d249b21f3"
                        x={0}
                        y={0}
                        width={20}
                        height={20}
                        patternUnits="userSpaceOnUse"
                      >
                        <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                      </pattern>
                    </defs>
                    <rect width={404} height={404} fill="url(#ad119f34-7694-4c31-947f-5c9d249b21f3)" />
                  </svg>

                  <div className="relative">
                    <img
                      className="mx-auto h-24"
                      src={testimonial.logo}
                      alt={testimonial.author.role}
                    />
                    <blockquote className="mt-10">
                      <div className="mx-auto max-w-3xl text-center sm:text-xl lg:text-2xl font-medium leading-9 text-base-content">
                        <p>&ldquo;{testimonial.content}&rdquo;</p>
                      </div>
                      <footer className="mt-8">
                        <div className="md:flex md:items-center md:justify-center">
                          <div className="md:flex-shrink-0">
                            <img
                              className="mx-auto h-14 w-14 rounded-full"
                              src={testimonial.author.image}
                              alt={testimonial.author.name}
                            />
                          </div>
                          <div className="mt-3 text-center md:mt-0 md:ml-4 md:flex md:items-center">
                            <div className="text-base font-medium text-base-content">{testimonial.author.name}
                              <br />
                              <div className="text-base font-medium text-gray-500">{testimonial.author.role}
                              </div>
                            </div>
                          </div>
                        </div>
                      </footer>
                    </blockquote>
                  </div>
                </div>
              </div>
              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href={`#${index - 1}`} className="btn btn-circle">
                  ❮
                </a>
                <a href={`#${index + 1}`} className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
