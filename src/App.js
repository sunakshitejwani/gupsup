import {ChatEngine} from "react-chat-engine"; //import using destructuring 
import {projectConfig} from "./env_vars";
import './App.css';

function App() {
  return (
    <div className="App">
      <ChatEngine 
        height="100vh"
        projectID={projectConfig.id}
        userName={projectConfig.userName}
        userSecret={projectConfig.userSecret}
      />
     </div>
  );
}

export default App;
