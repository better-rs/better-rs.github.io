import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};


// todo x: 首页内容
const FeatureList: FeatureItem[] = [
  {
    title: 'A better C',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Zig, 更好的 C, 替代 C 语言.
        <br />
        与 C 语言有极佳的互操作性, 可以直接 import c lib.
        <br />
        FFI 操作体验极佳.
      </>
    ),
  },
  {
    title: '语法简单',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        语法简单, 吸收 Rust/Go 大量优秀设计.
        <br />
        语法噪音比 Rust 小.
        <br />
        无 GC, 避免 Go GC 问题.
      </>
    ),
  },
  {
    title: 'IoT 生态',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        嵌入式, IoT 场景.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
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

export default function HomepageFeatures(): JSX.Element {
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
