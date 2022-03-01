import { ChatEngine } from "react-chat-engine"; //import using destructuring
import ChatFeed from "./components/ChatFeed";
import { projectConfig } from "./env_vars";
import "./App.css";

function App() {
  return (
    <div className="App">
      <ChatEngine
        height="100vh"
        projectID={projectConfig.id}
        userName={projectConfig.userName}
        userSecret={projectConfig.userSecret}
        renderChatFeed={chatAppProps => <ChatFeed {...chatAppProps} />}
        onNewMessage={() =>
          new Audio(
            "https://chat-engine-assets.s3.amazonaws.com/click.mp3"
          ).play()
        }
      />
    </div>
  );
}

export default App;
