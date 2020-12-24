import Head from 'next/head';
import PropsTypes from 'prop-types';

export default function MainLayout({ children, title }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>

      <main>
        {children}
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