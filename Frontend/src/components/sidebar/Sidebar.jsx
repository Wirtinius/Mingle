import React from "react";
import SearchInput from "./SearchInput";
import Conversations from "../../components/sidebar/Conversations";
import LogoutButton from "./LogoutButton";

const Sidebar = () => {
  return (
    <div className="flex flex-col h-full p-1">
      <SearchInput />
      <div className="divider px-3"></div>
      <Conversations />
      <LogoutButton />
    </div>
  );
};

export default Sidebar;
