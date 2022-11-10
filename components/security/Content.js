import { Container } from "../common/base/Container"

export function Content() {
    return (
        <div className="py-20">
            <Container>

                {/* Left Image Right Content */}
                <div className="relative bg-white dark:bg-gray-900">
                    <div className="lg:absolute lg:inset-0">
                        <div className="lg:absolute lg:inset-y-0 lg:left-0 lg:w-1/2">
                            <img
                                className="h-56 w-full object-cover lg:absolute lg:h-full"
                                src="/images/security/security-home.svg"
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="relative pt-12 pb-16 px-4 sm:pt-16 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:grid lg:grid-cols-2">
                        <div className="lg:col-start-2 lg:pl-8">
                            <div className="text-base max-w-prose mx-auto lg:max-w-lg lg:ml-auto lg:mr-0">
                                <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                                    Best practices in security
                                </h3>
                                <div className="mt-5 prose prose-indigo text-gray-500 dark:text-gray-100">
                                    <p>
                                        Our products and services are empowering our clients with world-class software. However, providing a safe and trustworthy data storage environment is the key to our success.
                                    </p>
                                    <br />
                                    <p>
                                        Cunomial Offer Impeccable Data Security Standards and uses best-practice security measures to protect your personal and organization data.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Centered Content */}
                <div className="mt-28 relative px-4 sm:px-6 lg:px-8">
                    <div className="text-lg max-w-prose mx-auto text-center">
                        <h2>
                            <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                                Our security practices
                            </span>
                        </h2>
                        <p className="mt-8 text-xl text-gray-500 dark:text-gray-100 leading-8">
                            Cunomial has industry&apos;s most comprehensive and best-in-class enterprise-grade solutions. Our mission is to provide best quality products and outstanding customer service. We aim to build a better digital experience for everyone by extending institutional resources to meet the growing demands of the industry.
                        </p>
                    </div>
                </div>

                {/* Left Content Right Image */}
                <div className="mt-24 relative bg-white dark:bg-gray-900">
                    <div className="lg:absolute lg:inset-0">
                        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                            <img
                                className="h-56 w-full object-cover lg:absolute lg:h-full"
                                src="/images/security/data-encryption.svg"
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="relative pt-12 pb-16 px-4 sm:pt-16 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:grid lg:grid-cols-2">
                        <div className="lg:col-start-1 lg:pr-8">
                            <div className="text-base max-w-prose mx-auto lg:max-w-lg lg:ml-auto lg:mr-0">
                                <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                                    Data Encryption
                                </h3>
                                <div className="mt-5 prose prose-indigo text-gray-500 dark:text-gray-100">
                                    <p>
                                        In keeping with the best practices in security, all data in transit, including login credentials and credit card details for payments, is protected using TLS 1.2 (https) by default, with 256-bit encryption key and SHA-256 signed certificates.
                                    </p>
                                    <br />
                                    <p>
                                        Robust network security controls provided by Google Cloud Platform (GCP) and Amazon Web Services (AWS) are used to help protect data in transit. Network security solutions, including firewalls and network access control, help secure the networks used to transmit data against malware attacks or intrusions.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Left Image Right Content */}
                <div className="mt-24 relative bg-white dark:bg-gray-900">
                    <div className="lg:absolute lg:inset-0">
                        <div className="lg:absolute lg:inset-y-0 lg:left-0 lg:w-1/2">
                            <img
                                className="h-56 w-full object-cover lg:absolute lg:h-full"
                                src="/images/security/access-control.svg"
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="relative pt-12 pb-16 px-4 sm:pt-16 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:grid lg:grid-cols-2">
                        <div className="lg:col-start-2 lg:pl-8">
                            <div className="text-base max-w-prose mx-auto lg:max-w-lg lg:ml-auto lg:mr-0">
                                <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                                    Access Control
                                </h3>
                                <div className="mt-5 prose prose-indigo text-gray-500 dark:text-gray-100">
                                    <p>
                                        Cunomial has an extensible system for defining user roles and associated system use permissions so that users can only access functionality they are permitted to, whether they be administrators, managers, employees or other users.
                                    </p>
                                    <br />
                                    <p>
                                        Role and permission based access control implemented by Cunomial is a policy neutral access control mechanism defined around roles and privileges. The components include role-permissions, user-role and role-role relationships, which make it simple to perform user assignments. The access control mechanism is appropriate to facilitate administration of security in small to large organizations with thousands of users and hundreds of permissions.   </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Left Content Right Image */}
                <div className="mt-24 relative bg-white dark:bg-gray-900">
                    <div className="lg:absolute lg:inset-0">
                        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                            <img
                                className="h-56 w-full object-cover lg:absolute lg:h-full"
                                src="/images/security/server-security.svg"
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="relative pt-12 pb-16 px-4 sm:pt-16 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:grid lg:grid-cols-2">
                        <div className="lg:col-start-1 lg:pr-8">
                            <div className="text-base max-w-prose mx-auto lg:max-w-lg lg:ml-auto lg:mr-0">
                                <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                                    Server Security
                                </h3>
                                <div className="mt-5 prose prose-indigo text-gray-500 dark:text-gray-100">
                                    <p>
                                        Cunomial has its entire server infrastructure on Google Cloud Platform (GCP) and Amazon Web Services (AWS). Within the AWS or GCP cloud infrastructure, Cunomial&apos;s servers are secured in a Virtual Private Cloud (VPC). Cunomial&apos;s servers, powered by AWS and GCP, are infinitely scalable and they run in isolated execution environments, ensuring that security problems that may arise do not spread beyond a specific server.
                                    </p>
                                    <br />
                                    <p>
                                        Extensive and enforced usage of Secure Shell (SSH) keys, selective opening of ports through firewalls and service auditing through AWS and GCP complete Cunomial&apos;s robust security infrastructure. In addition, Intrusion Detection System (IDS) alerts the teams at Cunomial of security risks.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Left Image Right Content */}
                <div className="mt-24 relative bg-white dark:bg-gray-900">
                    <div className="lg:absolute lg:inset-0">
                        <div className="lg:absolute lg:inset-y-0 lg:left-0 lg:w-1/2">
                            <img
                                className="h-56 w-full object-cover lg:absolute lg:h-full"
                                src="/images/security/cloud-product.svg"
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="relative pt-12 pb-16 px-4 sm:pt-16 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:grid lg:grid-cols-2">
                        <div className="lg:col-start-2 lg:pl-8">
                            <div className="text-base max-w-prose mx-auto lg:max-w-lg lg:ml-auto lg:mr-0">
                                <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                                    Cloud Product
                                </h3>
                                <div className="mt-5 prose prose-indigo text-gray-500 dark:text-gray-100">
                                    <p>
                                        Cunomial high-resilience Virtual Private Cloud (VPC) is hosted on Google Cloud Platform (GCP) and Amazon Web Services (AWS). All our application stack physical infrastructure and data storage is within AWS and GCP data centres worldwide. Both AWS and GCP data centre and network architecture are built to comply with stringent global standards and meet the requirements of the most security-sensitive organisations.
                                    </p>
                                    <br />
                                    <p>
                                        AWS and GCP data centres are housed in nondescript facilities. Physical access is strictly controlled both at the perimeter and at building ingress points by professional security staff utilising video surveillance, intrusion detection systems and other electronic means.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Left Content Right Image */}
                <div className="mt-24 relative bg-white dark:bg-gray-900">
                    <div className="lg:absolute lg:inset-0">
                        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                            <img
                                className="h-56 w-full object-cover lg:absolute lg:h-full"
                                src="/images/security/security-operations.svg"
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="relative pt-12 pb-16 px-4 sm:pt-16 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:grid lg:grid-cols-2">
                        <div className="lg:col-start-1 lg:pr-8">
                            <div className="text-base max-w-prose mx-auto lg:max-w-lg lg:ml-auto lg:mr-0">
                                <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                                    Security Operations
                                </h3>
                                <div className="mt-5 prose prose-indigo text-gray-500 dark:text-gray-100">
                                    <p>
                                        Development teams at Cunomial approach security holistically with a common controls framework. Security threats are prevented using secure software development practices and industry-accepted operational practices.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Left Image Right Content */}
                <div className="mt-24 relative bg-white dark:bg-gray-900">
                    <div className="lg:absolute lg:inset-0">
                        <div className="lg:absolute lg:inset-y-0 lg:left-0 lg:w-1/2">
                            <img
                                className="h-56 w-full object-cover lg:absolute lg:h-full"
                                src="/images/security/best-practices.svg"
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="relative pt-12 pb-16 px-4 sm:pt-16 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:grid lg:grid-cols-2">
                        <div className="lg:col-start-2 lg:pl-8">
                            <div className="text-base max-w-prose mx-auto lg:max-w-lg lg:ml-auto lg:mr-0">
                                <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                                    Best Practices
                                </h3>
                                <div className="mt-5 prose prose-indigo text-gray-500 dark:text-gray-100">
                                    <p>
                                        Cunomial has an elaborate self-test and regular audit procedure in place. A secure and robust logging infrastructure, leveraging latest technology platforms, enables Cunomial to trace an event end-to-end. Real-time security monitoring and protection and web application firewalls protect Cunomial from a range of perspectives, both internal and external.
                                    </p>
                                    <br />
                                    <p>
                                        The operating systems, network infrastructure and the software, which Cunomial uses, are always up-to-date with latest versions, to ensure that all diagnosed and fixed security vulnerabilities are embedded in the architecture.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </Container>
        </div>
    )
}
