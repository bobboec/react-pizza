import React from 'react';

import styles from './NotFoundBlock.module.scss';

console.log(styles);

const NotFoundBlock = () => {
  return (
    <div className="container">
      <div className={styles.root}>
        <h1>
          <span>&#128514;</span>
          <br />
          Ничего не найдено :(
        </h1>
        <p className={styles.description}>К сожалению данная страница отсутсвует на нашем сайте</p>
      </div>
    </div>
  );
};

export default NotFoundBlock;
