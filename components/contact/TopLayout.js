import { Container } from '../common/base/Container';
import { alertService } from '../services/alert.service';
import { Alert } from './alert';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import { useState } from 'react';

export function TopLayout() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [howCanWeHelp, setHowCanWeHelp] = useState('');
  const { executeRecaptcha } = useGoogleReCaptcha();
  const emailRegex =
    /[a-z0-9!#$%&'*+/=?^_‘{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_‘{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/i;

  const handleSubmitForm = async () => {
    if (!firstName || !email || !howCanWeHelp || !emailRegex.test(email.trim())) {
      alertService.error('Please check your input', {
        autoClose: 500,
        keepAfterRouteChange: false,
        id: 'right-alert',
      });
      return;
    }
    if (!executeRecaptcha) {
      console.log('Execute recaptcha not yet available');
      return;
    }
    const response = await executeRecaptcha('contactForm');
    if (response) {
      onSubmitForm(response);
    }
  };

  const onSubmitForm = (gReCaptchaToken) => {
    fetch('/api/contact', {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstName,
        lastName,
        company,
        phone,
        email,
        howCanWeHelp,
        gReCaptchaToken,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res, 'response from backend');
        alertService.success('Thank you for contacting us, we will be in touch soon.', {
          autoClose: 500,
          keepAfterRouteChange: false,
          id: 'right-alert',
        });
        setFirstName('');
        setLastName('');
        setEmail('');
        setCompany('');
        setPhone('');
        setHowCanWeHelp('');
      });
  };

  return (
    <div>
      <div className="bg-blue-600 p-10 dark:bg-gray-700 sm:h-auto lg:h-96 lg:p-20">
        <Container>
          <div className="grid sm:grid-cols-1 lg:grid-cols-2">
            <div className="mr-16">
              <h2 className="text-4xl text-white">We&apos;d love to hear from you</h2>
              <p className="mt-10 text-white">
                Have questions about our products, features, trials, or pricing? Need a demo? Our teams will help you.
              </p>
            </div>
          </div>
        </Container>
      </div>
      <div>
        <Container>
          <div className="grid sm:grid-cols-1 lg:grid-cols-2">
            <div className="lg:mr-16">
              {/* 1st Column Content */}
              <h3 className="mt-10 text-center text-2xl">Trusted by valuable institutions</h3>
              <div className="mt-4 flex flex-wrap justify-center dark:rounded-xl dark:bg-gray-300">
                <img src="/images/logos/AideaNaarm.png" className="rounded-box px-4 lg:px-4 lg:pr-4" />
                <img src="/images/logos/dlabs-logo.png" className="rounded-box px-4 lg:px-4 lg:pr-4" />
                <img src="/images/logos/Derbi-Foundation.png" className="rounded-box px-4 lg:px-4 lg:pr-4" />
                <img src="/images/logos/deshpande-startups.png" className="rounded-box px-4 lg:px-4 lg:pr-4" />
                <img src="/images/logos/Hummingbird.png" className="rounded-box px-4 lg:px-4 lg:pr-4" />
                <img src="/images/logos/Presidency.png" className="rounded-box px-4 lg:px-4 lg:pr-4" />
                <img src="/images/logos/Nasscom.png" className="rounded-box px-4 lg:px-4 lg:pr-4" />
                <img src="/images/logos/FiiRE.png" className="rounded-box px-4 lg:px-4 lg:pr-4" />
              </div>
              <div className="mt-10 flex rounded-lg bg-gray-300 p-5 dark:text-black">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <p className="pl-4">
                  For general queries please email us at{' '}
                  <a className="underline" href="mailto:sales@cunomial.com">
                    sales@cunomial.com
                  </a>
                </p>
              </div>
            </div>
            <div>
              {/* 2nd Column Content */}
              <div className="mx-auto mt-10 max-w-md rounded-xl bg-white p-10 shadow-xl dark:bg-gray-800 sm:mt-10 sm:max-w-lg lg:-mt-80">
                <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Let&apos;s work together</h2>
                <p className="mt-4 text-lg text-gray-500 dark:text-gray-300 sm:mt-3">
                  Get in touch with us. Send us a message or email us.
                </p>

                <div className="mt-9 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      First name
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="firstName"
                        id="firstName"
                        autoComplete="given-name"
                        className="dark:text-gray-900 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                        onChange={(event) => setFirstName(event.target.value)}
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Last name
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="lastName"
                        id="lastName"
                        autoComplete="family-name"
                        className="dark:text-gray-900 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                        onChange={(event) => setLastName(event.target.value)}
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Email
                    </label>
                    <div className="mt-1">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        className="dark:text-gray-900 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                        onChange={(event) => setEmail(event.target.value)}
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Company
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="company"
                        id="company"
                        autoComplete="organization"
                        className="dark:text-gray-900 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                        onChange={(event) => setCompany(event.target.value)}
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <div className="flex justify-between">
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        Phone
                      </label>
                      <span id="phone-description" className="text-sm text-gray-500 dark:text-gray-300">
                        Optional
                      </span>
                    </div>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="phone"
                        id="phone"
                        autoComplete="tel"
                        aria-describedby="phone-description"
                        className="dark:text-gray-900 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                        onChange={(event) => setPhone(event.target.value)}
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <div className="flex justify-between">
                      <label
                        htmlFor="howCanWeHelp"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                      >
                        How can we help you?
                      </label>
                      <span id="how-can-we-help-description" className="text-sm text-gray-500 dark:text-gray-300">
                        Max. 500 characters
                      </span>
                    </div>
                    <div className="mt-1">
                      <textarea
                        id="howCanWeHelp"
                        name="howCanWeHelp"
                        aria-describedby="how-can-we-help-description"
                        rows={4}
                        className="dark:text-gray-900 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                        defaultValue={''}
                        onChange={(event) => setHowCanWeHelp(event.target.value)}
                      />
                    </div>
                  </div>
                  <div className="text-center sm:col-span-2">
                    <button
                      type="submit"
                      className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                      onClick={handleSubmitForm}
                    >
                      Submit
                    </button>
                  </div>
                </div>
                <div className="mt-2 text-center sm:col-span-2">
                  <Alert id="right-alert" />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
