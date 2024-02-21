import React from "react";
import MenuCard from "../../ui/menu-card/menuCard";
import usersData from "./content.json";

export const CardMenu = () => {
  console.log(usersData);
  return (
    <div>
      {usersData.users.map((userData, i) => {
        return <MenuCard key={i} userData={userData} />;
      })}
    </div>
  );
};
