import React from "react";
import { WishList } from "../models/WishList";
import WishListView from "./wishlist/WishListView";

const Mobx: React.FC = () => {
  const wishList = WishList.create({
    items: [
      {
        name: "LEGO Mindstorms EV3",
        price: 349.95,
        image:
          "https://images-na.ssl-images-amazon.com/images/I/71CpQw%2BufNL._SL1000_.jpg",
      },
      {
        name: "Miracles - C.S. Lewis",
        price: 12.91,
        image:
          "https://images-na.ssl-images-amazon.com/images/I/51a7xaMpneL._SX329_BO1,204,203,200_.jpg",
      },
    ],
  });
  setInterval(() => {
    wishList.items[0].changePrice(wishList.items[0].price + 1);
    // 下でeditしてもここは変わらない
    // console.log('wishList', wishList.items[0].name);
  }, 10000);
  return (
    <section>
      <WishListView wishList={wishList}></WishListView>
    </section>
  );
};

export default Mobx;