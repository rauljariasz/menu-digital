type UserData = {
  // Define las propiedades de userData según tu estructura de datos
  name: string;
  // Otras propiedades...
};
const MenuCard = ({ userData }: { userData: UserData }) => {
  return (
    <div className="flex justify-between  w-container bg-black  ">
      <p className="text-2xl text-white">{userData.name}</p>
      <span className="text-white">EditIcon</span>
    </div>
  );
};
export default MenuCard;
