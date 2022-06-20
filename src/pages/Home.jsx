import React from 'react';

import Sort from '../components/Sort';
import Categories from '../components/Categories';
import PizzaBlock from '../components/PizzaBlocks';
import Skeleton from '../components/PizzaBlocks/Skeleton';

function Home() {
  let [items, setItems] = React.useState([]);
  let [isLoading, setIsLoading] = React.useState(true);
  const [categoryId, setCategoryId] = React.useState(0);
  const [sortType, setSortType] = React.useState({
    name: 'популярности',
    sortProperty: 'rating',
  });
  const [sortWay, setSortWay] = React.useState(false);

  console.log(sortType);
  //https://629c7c523798759975d66627.mockapi.io/items?category=2&sortBy=price&order=asc
  React.useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://629c7c523798759975d66627.mockapi.io/items?${
        categoryId > 0 ? `category=${categoryId}` : ''
      }&sortBy=${sortType.sortProperty}&order=${sortWay ? 'asc' : 'desc'}`,
    )
      .then((res) => res.json())
      .then((arr) => {
        setItems(arr);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, [categoryId, sortType, sortWay]);

  return (
    <>
      <div className="container">
        <div className="content__top">
          <Categories value={categoryId} onClickCat={(id) => setCategoryId(id)} />
          <Sort
            sortValue={sortType}
            sortWay={sortWay}
            onClickSortType={(sortProperty) => setSortType(sortProperty)}
            onClickSortWay={(way) => setSortWay(way)}
          />
        </div>
        <h2 className="content__title"> Все пиццы </h2>
        <div className="content__items">
          {/* {items.map((obj) => (isLoading ? <Skeleton /> : <PizzaBlock key={obj.id} {...obj} />))} */}
          {isLoading
            ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
            : items.map((obj) => <PizzaBlock key={obj.id} {...obj} />)}
        </div>
      </div>
    </>
  );
}

export default Home;
