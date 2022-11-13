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
    title: 'Rust: A better C++',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        <ul>
          <li>Rust: C/C++ 语言平替, 性能同级别.</li>
          <li>当前系统编程(Rust/Zig/C/C++)语言首选.</li>
          <li>No GC, 零抽象成本.</li>
          <li>Trait: 面向接口(interface)编程</li>
          <li>组合式(替代继承式)编程</li>
          <li>生态丰富, 各种场景的库/产品项目, 一应俱全.</li>
          <li>FFI 操作体验极佳.</li>
        </ul>
      </>
    ),
  },
  {
    title: '语法特性',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        <ul>
          <li>Rust: C/C++ 语言平替, 性能同级别.</li>
          <li>当前系统编程(Rust/Zig/C/C++)语言首选.</li>
          <li>No GC: 比 Go/Java 更适合实时系统编程.</li>
          <li>零抽象成本.</li>
          <li>Trait: 面向接口(interface)编程</li>
          <li>组合式(替代继承式)编程</li>
        </ul>
      </>
    ),
  },
  {
    title: '应用场景',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        <ul>
          <li>系统级编程: OS, IoT</li>
          <li>驱动类场景, db 场景.</li>
          <li>实时系统: 交易引擎, db引擎.</li>
          <li>GUI 编程: GUI框架.</li>
          <li>Game 编程: 游戏引擎.</li>
        </ul>
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
