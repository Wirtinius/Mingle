import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import MessageContainer from "../components/messages/MessageContainer";
import ErrorBoundary from "../pages/ErrorBoundary"
const Chat = () => {
  return (
    <div className="p-4 h-screen flex items-center justify-center">
      <div
        className="flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding
      backdrop-filter backdrop-blur-lg bg-opacity-0"
      >
        <Sidebar />
        <ErrorBoundary>
          <MessageContainer />
        </ErrorBoundary>

      </div>
    </div>
  );
};

export default Chat;
