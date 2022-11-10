import { Container } from '../common/base/Container'
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/solid'

export function CallToAction() {
    return (
        <div className="pb-10">
            <Container>
                <div className="bg-blue-400 my-10 rounded-lg">
                    <div className="max-w-md mx-auto text-center py-10 px-4 sm:max-w-2xl sm:py-10 sm:px-6 lg:px-8 lg:py-10">
                        <h2 className="text-3xl font-extrabold sm:text-4xl">
                            <span className="block text-white">Looking for a new career?</span>
                            <span className="block text-blue-900">We’re hiring.</span>
                        </h2>
                        <a
                            href="careers"
                            className="mt-8 w-full inline-flex items-center justify-center py-3 px-5 bg-white border border-transparent rounded-md shadow-md text-base font-medium text-blue-600 hover:bg-blue-50 sm:w-auto"
                        >
                            <span>See open positions</span>
                            <ArrowTopRightOnSquareIcon className="ml-3 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                        </a>
                    </div>
                </div>
            </Container>
        </div>
    )
}
