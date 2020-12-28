import Head from 'next/head';
import PropsTypes from 'prop-types';
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(process.env.PUBLISHABLE_KEY);
export default function MainLayout({ children, title }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>

      <main>
        <Elements stripe={stripePromise}>{children}</Elements>
      </main>
    </div>
  );
}

MainLayout.propTypes = {
  children: PropsTypes.oneOfType([
    PropsTypes.arrayOf(PropsTypes.node),
    PropsTypes.node
  ]),
  title: PropsTypes.string
};