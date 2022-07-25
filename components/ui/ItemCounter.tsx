interface Props {}
export const ItemCounter: React.FC<Props> = () => {
  return (
    <div className="font-bold">
      <span className="cursor-pointer">-</span>
      <span className="mx-4">1</span>
      <span className="cursor-pointer">+</span>
    </div>
  );
};
