import { Container } from "../common/base/Container"

export function OurJourney() {
    return (
        <Container>
            <div className="pb-24">
                <div className="pb-5 border-b border-gray-200">
                    <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100">
                        Our journey so far...
                    </h2>
                </div>
                <div className="mx-auto w-full h-full">
                    <div className="relative wrap overflow-hidden p-10 h-full">
                        <div className="border-2-2 absolute border-opacity-20 border-gray-700 dark:border-gray-500 h-full border" style={{ left: "50%" }}></div>

                        {/* 1 */}
                        <div className="mb-8 flex justify-between items-center w-full right-timeline">
                            <div className="order-1 w-5/12"></div>
                            <div className="z-20 flex items-center order-1 bg-blue-600 shadow-xl w-8 h-8 rounded-full">
                                <h2 className="mx-auto font-semibold text-lg text-white">1</h2>
                            </div>
                            <div className="order-1 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-xl w-5/12 px-6 py-4">
                                <h3 className="mb-3 font-bold text-gray-800 dark:text-gray-200 text-xl">2018</h3>
                                <p className="text-sm font-medium leading-snug tracking-wide text-gray-600 dark:text-gray-300 text-opacity-100">
                                    Founder, Sonali Jha begin work on building simple, easy-to-use and cloud-native digital products.
                                    Cunomial is officially incorporated.
                                </p>
                            </div>
                        </div>

                        {/* 2 */}
                        <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                            <div className="order-1 w-5/12"></div>
                            <div className="z-20 flex items-center order-1 bg-blue-600 shadow-xl w-8 h-8 rounded-full">
                                <h2 className="mx-auto text-white font-semibold text-lg">2</h2>
                            </div>
                            <div className="order-1 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-xl w-5/12 px-6 py-4">
                                <h3 className="mb-3 font-bold text-gray-800 dark:text-gray-200 text-xl">2019</h3>
                                <p className="text-sm font-medium leading-snug tracking-wide text-gray-600 dark:text-gray-300 text-opacity-100">
                                    Cunomial launches its first product “Accubate” (Innovation Management Software)
                                    First institutional client starts using the product.
                                </p>
                            </div>
                        </div>

                        {/* 3 */}
                        <div className="mb-8 flex justify-between items-center w-full right-timeline">
                            <div className="order-1 w-5/12"></div>
                            <div className="z-20 flex items-center order-1 bg-blue-600 shadow-xl w-8 h-8 rounded-full">
                                <h2 className="mx-auto font-semibold text-lg text-white">3</h2>
                            </div>
                            <div className="order-1 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-xl w-5/12 px-6 py-4">
                                <h3 className="mb-3 font-bold text-gray-800 dark:text-gray-200 text-xl">2020</h3>
                                <p className="text-sm font-medium leading-snug tracking-wide text-gray-600 dark:text-gray-300 text-opacity-100">
                                    Cunomial got selected at IIM Bangalore for Goldman Sachs program and
                                    the program supported by Department of Science and Technology, Government of India.
                                </p>
                            </div>
                        </div>

                        {/* 4 */}
                        <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                            <div className="order-1 w-5/12"></div>
                            <div className="z-20 flex items-center order-1 bg-blue-600 shadow-xl w-8 h-8 rounded-full">
                                <h2 className="mx-auto text-white font-semibold text-lg">4</h2>
                            </div>
                            <div className="order-1 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-xl w-5/12 px-6 py-4">
                                <h3 className="mb-3 font-bold text-gray-800 dark:text-gray-200 text-xl">2021</h3>
                                <p className="text-sm font-medium leading-snug tracking-wide text-gray-600 dark:text-gray-300 text-opacity-100">
                                    Awarded by Meity, Nasscom, UN women for software product Accubate.
                                    Cunomial on-boards its first international client and was selected by Microsoft along
                                    with 23 other tech companies globally for Microsoft Cloud Accelerator program to co-build
                                    Microsoft&apos;s Cloud + AI innovations, co-market and co-sell with Microsoft and their distribution channels.
                                </p>
                            </div>
                        </div>

                        {/* 5 */}
                        <div className="mb-8 flex justify-between items-center w-full right-timeline">
                            <div className="order-1 w-5/12"></div>
                            <div className="z-20 flex items-center order-1 bg-blue-600 shadow-xl w-8 h-8 rounded-full">
                                <h2 className="mx-auto font-semibold text-lg text-white">5</h2>
                            </div>
                            <div className="order-1 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-xl w-5/12 px-6 py-4">
                                <h3 className="mb-3 font-bold text-gray-800 dark:text-gray-200 text-xl">2022</h3>
                                <p className="text-sm font-medium leading-snug tracking-wide text-gray-600 dark:text-gray-300 text-opacity-100">
                                    Cunomial launches its second product “WorkIt” (Task Management Software) First PSU starts using the product.
                                </p>
                            </div>
                        </div>

                        {/* 6 */}
                        <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                            <div className="order-1 w-5/12"></div>
                            <div className="z-20 flex items-center order-1 bg-blue-600 shadow-xl w-8 h-8 rounded-full">
                                <h2 className="mx-auto text-white font-semibold text-lg">6</h2>
                            </div>
                            <div className="order-1 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-xl w-5/12 px-6 py-4">
                                <h3 className="mb-3 font-bold text-gray-800 dark:text-gray-200 text-xl">At Present</h3>
                                <p className="text-sm font-medium leading-snug tracking-wide text-gray-600 dark:text-gray-300 text-opacity-100">
                                    Cunomial&apos;s revenue has been growing at more than 30% every month for more than 1 year now
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </Container>
    )
}