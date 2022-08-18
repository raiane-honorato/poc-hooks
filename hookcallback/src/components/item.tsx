import { memo } from "react";

type ItemProps = {
  title: string;
  onAddToWishList: (item: string) => void;
}

function ItemComponent(props: ItemProps) {
  return(
    <>
      <li>{props.title}</li>
      <button onClick={() => props.onAddToWishList(props.title)}>add to wish list</button>
    </>
  )
};

export const Item = memo(ItemComponent);