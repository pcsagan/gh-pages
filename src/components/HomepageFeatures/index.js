import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'GIS',
    Svg: require('@site/static/img/nb.svg').default,
    description: (
      <>
        Geographic Information Systems!
      </>
    ),
  },
  {
    title: 'Boating',
    Svg: require('@site/static/img/boats.svg').default,
    description: (
      <>
        Boating on the waters of new Brunswick!
      </>
    ),
  },
  {
    title: 'Programming',
    Svg: require('@site/static/img/raspberrypi.svg').default,
    description: (
      <>
        Python, C++, and more!
      </>
    ),
  },
  {
    title: 'Remote Control',
    Svg: require('@site/static/img/rc.svg').default,
    description: (
      <>
        Everything is fun when it's remote control!
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--3')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
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
