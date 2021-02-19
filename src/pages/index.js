import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

const features = [
  {
    title: "Easy to Use",
    imageUrl: "img/undraw_docusaurus_mountain.svg",
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
  },
  {
    title: "Focus on What Matters",
    imageUrl: "img/undraw_docusaurus_tree.svg",
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ),
  },
  {
    title: "Powered by React",
    imageUrl: "img/undraw_docusaurus_react.svg",
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx("col col--4", styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

const Backlinks = (props) => (
  <div className="moreProjects">
    <h1 id="moreProjectsHeading">Related Projects</h1>
    <br></br>
    <div>
      <div className="backlink">
        <div>
          <h2>
            <span>
              <a href="https://syncstate.github.io/" target="_blank">
                <img src="../static/img/synchState-logo.png" width="25px"></img>
                SyncState
              </a>
            </span>
          </h2>
          <p>A state management library for React & JS apps</p>
        </div>
      </div>

      <div className="backlink">
        <div>
          <h2>
            <span>
              <a href="https://nativebase.io/" target="_blank">
                <img src="../static/img/native-base.jpeg" width="25px"></img>
                NativeBase
              </a>
            </span>
          </h2>
          <p>
            Essential cross-platform UI components for React Native & Vue
            Native.
          </p>
        </div>
      </div>
      <div className="backlink">
        <div>
          <h2>
            <span>
              <a href="https://vue-native.io/" target="_blank">
                <img src="../static/img/vueNative.png" width="25px"></img>
                Vue Native
              </a>
            </span>
          </h2>
          <p>
            Vue Native is a framework to build cross platform native mobile apps
            using JavaScript. It is a wrapper around the APIs of React Native.
          </p>
        </div>
      </div>
      <div className="backlink">
        <div>
          <h2>
            <span>
              <a href="https://builderx.io/" target="_blank">
                <img src="../static/img/builderx.png" width="25px"></img>
                BuilderX
              </a>
            </span>
          </h2>
          <p>
            BuilderX is a browser based design tool that codes React Native &
            React for you.
          </p>
        </div>
      </div>
    </div>
  </div>
);

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <header className={clsx("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                "button button--outline button--secondary button--lg",
                styles.getStarted
              )}
              to={useBaseUrl("docs/introduction")}
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              {/* <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div> */}
              <Backlinks />
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
