import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Not sure if I will keep this',
    Svg: require('@site/static/img/eyeD.svg').default,
    description: (
      <>
        Topic 1
      </>
    ),
  },
  {
    title: 'something else',
    Svg: require('@site/static/img/eyeD.svg').default,
    description: (
      <>
        Topic 2
      </>
    ),
  },
  {
    title: 'I like having three things here, what should go here?',
    Svg: require('@site/static/img/eyeD.svg').default,
    description: (
      <>
        topic 3
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
