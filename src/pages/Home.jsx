import React from 'react';

import Sort from '../components/Sort';
import Categories from '../components/Categories';
import PizzaBlock from '../components/PizzaBlocks';
import Skeleton from '../components/PizzaBlocks/Skeleton';

function Home() {
  let [items, setItems] = React.useState([]);
  let [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    fetch('https://629c7c523798759975d66627.mockapi.io/items')
      .then((res) => res.json())
      .then((arr) => {
        setItems(arr);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title"> Все пиццы </h2>
      <div className="content__items">
        {/* {items.map((obj) => (isLoading ? <Skeleton /> : <PizzaBlock key={obj.id} {...obj} />))} */}
        {isLoading
          ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
          : items.map((obj) => <PizzaBlock key={obj.id} {...obj} />)}
      </div>
    </>
  );
}

export default Home;
