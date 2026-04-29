import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          Hi, I&apos;m Pratiksha Jain
        </Heading>
        <p className={styles.heroSubtitle}>
          Software Development Engineer specializing in backend systems, AI-driven platforms, and cloud-native solutions.
        </p>

        <div className={styles.heroSummary}>
          <p>
            3.8+ years of experience building scalable services at BillDesk and Reliance Jio. I help teams deliver reliable APIs, automation, and performance improvements across payment and AI domains.
          </p>
        </div>

        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="/portfolio">
            View Portfolio
          </Link>
          <a className="button button--secondary button--lg" href="mailto:your.email@example.com">
            Contact Me
          </a>
        </div>

        <div className={styles.stats}>
          <div className={styles.statItem}>
            <strong>3.8+</strong>
            <span>Years experience</span>
          </div>
          <div className={styles.statItem}>
            <strong>AI / Backend</strong>
            <span>Platforms built</span>
          </div>
          <div className={styles.statItem}>
            <strong>Reliability</strong>
            <span>Performance focus</span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout title="Pratiksha Jain" description="Pratiksha Jain portfolio landing page">      
      <HomepageHeader />
    </Layout>
  );
}
