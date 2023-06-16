import React from 'react';
import Link from "next/link";

const PrivacyPolicy = () => (
    <div>
        <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
            <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                Privacy Policy
            </h2>
        </div>
        <article className={"prose dark:prose-invert"}>
            <div>
                <h3>Information We Collect</h3>
                <p>
                    We collect only a minimum amount of data such as your IP address and comply with the GDPR.
                    To keep operating and improve our services we include several third-party tools that are listed
                    below.
                </p>

                <h4> Third Party Tools </h4>
                <h5>Google Search Console</h5>
                <p>
                    We use Google Search Console to understand how users interact with our website in Google Search
                    results. Google Search Console provides us with anonymized data about our search traffic, but does
                    not
                    identify individual users.

                    Please check their privacy policy here: <Link href={"https://policies.google.com/privacy?hl=en-GB"}>Google
                    Search Console - Privacy Policy</Link>
                </p>

                <h4 className={"pt-2 font-bold"}>Vercel Analytics</h4>
                <p>
                    We use Vercel Analytics to understand how users interact with our website. Vercel Analytics collects
                    data about our traffic and usage patterns. The data collected is anonymized and does not include
                    personally identifiable information.
                </p>
                <p>Please check their privacy policy here: <Link href={"https://vercel.com/legal/privacy-policy"}>
                    Vercel Analytics - Privacy Policy
                </Link>
                </p>

                <h4>YouTube Cookies</h4>
                <p>
                    We embed videos from our official YouTube channel. When you watch these videos, YouTube may store
                    cookies on your device. Please refer to <Link
                    href={"https://www.youtube.com/howyoutubeworks/our-commitments/protecting-user-data/"}>YouTube&apos;s
                    privacy policy</Link> for more information.
                </p>
            </div>

            <div>
                <h3>How We Use Information We Collect</h3>
                <p>
                    We use the data that we receive only to understand which topics are relevant for our clients
                    to create new videos, blog articles and other facts that could be interesting for our clients.
                </p>
            </div>

            <div>
                <h2>Information Security</h2>
                <p>
                    We work hard to protect our users from unauthorized access to or unauthorized alteration, disclosure
                    or destruction of information we hold.
                </p>
            </div>

            <div>
                <h2>Changes</h2>
                <p>
                    Our Privacy Policy may change from time to time. We will not reduce your rights under this Privacy
                    Policy without your explicit consent.
                </p>
                <ul>
                    <li><span
                        className={"font-bold"}>16.06.23</span><span className={"px-4"}>First version</span></li>
                </ul>
            </div>
        </article>
    </div>
);

export default PrivacyPolicy;
