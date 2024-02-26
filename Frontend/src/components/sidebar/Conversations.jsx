import React from "react";
import useGetConversations from "../../hooks/useGetConversations";
import Conversation from "./Conversation";

const Conversations = () => {
  const { loading, conversations } = useGetConversations();
  console.log("CONVERSATIONS", Conversations);
  return (
    <>
      <div className="py-2 flex flex-col overflow-auto">
        {conversations.map((conversation, idx) => (
          <Conversation
            key={conversation.id}
            conversation={conversation}
            lastIdx={idx === conversations.length - 1}
          />
        ))}
        {loading ? <span className='loading loading-spinner mx-auto'></span> : null}
      </div>
    </>
  );
};

export default Conversations;
