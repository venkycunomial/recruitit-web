const faqs = [
  {
    question: 'Does the website support translations for non-native English speakers?',
    answer:
      'Yes, Cunomial’s content is available in the following languages excluding English: Hindi,  French, Spanish, Arabic and Indian Regional Languages.',
  },
  {
    question: 'How supportive is Cunomial for their customers?',
    answer: 'Once you are registered with us, you will have a committed and personalised support team member, who will lead you through the features and functions of Cunomial, and help make your experience with us worthwhile. The said member will always be up and ready to assist his/her customer.',
  },
  {
    question: 'Does Cunomial provide a role based system with restricted access?',
    answer:
      'Cunomial has an extensible system for defining user roles and associated system permissions. This way, users can access functions solely when permitted, irrespective of their designation. This includes managers, administrators and employees.',
  },
]

export function Faqs() {
  return (
    <section id="faq">
      <div className="bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
          <div className="lg:grid lg:grid-cols-3 lg:gap-8">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 dark:text-gray-100">Frequently asked questions</h2>
              <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
                Can’t find the answer you’re looking for? Reach out to our{' '}
                <a href="mailto:sales@cunomial.com" className="font-medium text-blue-600 hover:text-blue-500">
                  customer support
                </a>{' '}
                team.
              </p>
            </div>
            <div className="mt-12 lg:mt-0 lg:col-span-2">
              <dl className="space-y-12">
                {faqs.map((faq) => (
                  <div key={faq.question}>
                    <dt className="text-lg leading-6 font-medium text-gray-900 dark:text-gray-100">{faq.question}</dt>
                    <dd className="mt-2 text-base text-gray-500 dark:text-gray-400">{faq.answer}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-12 flex justify-center space-x-6">
                {/* <ButtonLink href="/frequently-asked-questions" className="dark:text-slate-900 dark:bg-gray-300">
                  More FAQs
                </ButtonLink> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}