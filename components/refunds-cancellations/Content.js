import { Container } from "../common/base/Container"

export function Content() {
    return (
        <div className="py-20">
            <Container>
                <div>
                    <div>
                        <div>
                            <p>You have the right to terminate your user account if Cunomial breaches its obligations under the
                                <a href="https://cunomial.com/web/resources/terms" rel="noopener noreferrer" target="_blank">
                                    Terms
                                </a>
                                and in such event, you will be entitled to prorated refund of any prepaid fees. You also have the right to cancel your subscriptions according to the terms agreed. In such event if the payment is made in advance such as for yearly subscriptions or multi-year subscriptions, the cancellation will result into refund of a prorated amount as the terms of agreement.
                                <br />
                                For payment related enquiries and refund requests, please write to support@cunomial.com
                            </p>
                        </div>
                    </div>
                    <div>
                        <br />
                        <p>
                            Cunomial can also collects payments on behalf of its clients for Accubate. The amount collected includes fees and taxes, which are settled by Cunomial for various counter-parties.
                            <br />
                            <br />
                            For payment related enquiries and refund requests, please write to support@cunomial.com
                            <br />
                        </p>
                        <br />
                        <p>Once a request for refund is raised, it will be issued within 7 business days. Cunomial only does source refunds. It means that money is refunded to the payment method that the customer used to make the payment. For example, if a credit card was used to make the payment, the refund is pushed to the same credit card. Similarly, in the case of UPI payments, the refund is pushed to the VPA used while making the payment.

                        </p>
                    </div>
                </div>
            </Container>
        </div>
    )
}
