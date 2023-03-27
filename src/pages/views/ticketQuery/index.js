import { Fragment, memo, useEffect, useState } from "react";

// Sidebar
import Chatsidebar from "./chat/components/partials/chat-sidebar";

// Scss Chat
import "../../../assets/modules/chat/scss/chat.scss";
import Chat from "./chat/pages/chat";

const ChatSystem = memo((props) => {
  useEffect(() => {
    document.getElementsByTagName("html")[0].classList.add("theme-fs-md");
    return () => {
      document.getElementsByTagName("html")[0].classList.remove("theme-fs-md");
    };
  });
  const [userName, setuserName] = useState("1");
  return (
    <Fragment>
      <Chatsidebar show={userName} event={setuserName} />
      <main className="main-content">
        <Chat show={userName} />
      </main>
    </Fragment>
  );
});

ChatSystem.displayName = "ChatSystem";
export default ChatSystem;
