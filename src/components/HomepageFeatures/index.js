import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Training and Enablement Leader',
    Svg: require('@site/static/img/leader.svg').default,
    description: (
      <>
        Over a decade building Training and Enablement programs that make the complicated seem simple.  I focus on the total learning experience, from training to documentation, from unknown to known.
        My goal is to support users from day 1 with tools, training, guides, and support.
      </>
    ),
  },
  {
    title: 'Instructional Designer and Trainer',
    Svg: require('@site/static/img/instructor.svg').default,
    description: (
      <>
        Expertly trained by the USAF with over 10,000 hours on podium teaching students from all over the world in a variety of commercial industries as well as DoD/Government. 
        Designed and built learning content in a variety of industries.
      </>
    ),
  },
  {
    title: 'Product and Organizational Support',
    Svg: require('@site/static/img/product.svg').default,
    description: (
      <>
        As a certified SAFE Agile PO/PM and long-time "Product Guy" I am always focused on the Voice of the Customer when part of product teams.  I am not just experienced with Enablement and Support, I have experience as a Product Owner and Product Manager.
        My focus is always centered around user experience and adoption.
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
