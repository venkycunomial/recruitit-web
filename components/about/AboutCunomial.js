export function AboutCunomial() {
  return (
    <div className="relative bg-white dark:bg-gray-900 pt-16 pb-32 overflow-hidden">
      <div className="relative">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
          <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
            <div>
              <div className="mt-6">
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100">
                  We solve problems together
                </h2>
                <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
                  Cunomial celebrates teams, hard work and collaboration.
                  We not only partner with each other but also with our clients to build best-in-class products.
                  <br />
                  <br />
                  We aim to build a better experience for everyone by responding to demands for simple,
                  easy to use and next generation cloud native software.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0">
            <div className="pl-4  sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
              <img
                className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                src="/images/about/company-home.svg"
                alt="Inbox user interface"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-24">
        <div className="lg:mx-auto lg:max-w-full lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
          <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
            <div>
              <div className="">
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100">
                  Our core values
                </h2>
                <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
                  Our core values express the fundamental principles and beliefs that guide us in achieving our mission,
                  vision and commitments and is the driving force behind our exemplary work and performance. Our culture
                  is transparent and built on ownership and trust. Our people-first philosophy has helped us weave a stellar
                  experience for our folks and also create a customer-obsessed dream team. We believe that performance and
                  enjoyment go hand in hand. We show clients and colleagues that we are passionate about what we do, and
                  we expect our leaders to prioritise work that is meaningful and value creating.
                </p>
                <br />
                <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
                  Great teamwork requires more than just great tools. We practice the method that help make work better, and people happier.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
            <div className="pr-4 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
              <img
                className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                src="/images/about/company-values.png"
                alt="Customer profile user interface"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
