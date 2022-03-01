import MessageForm from "./MessageForm";
import MyMessage from "./MyMessage";
import TheirMessage from "./TheirMessage";

const ChatFeed = props => {
  console.log(props);

  const { chats, activeChat, userName, messages } = props; // destructuring
  const chat = chats && chats[activeChat]; //activechat is an ID

  //function to render messages in chat feed. 
  const renderMessages = () => {
    const keys = Object.keys(messages);

    return keys.map((key, index) => {
      const message = messages[key];
      const lastMessageKey = index === 0 ? null : keys[index - 1]; //find lastmessage sent 
      const isMyMessage = userName === message.sender.userName;// differeciate bw yours messages and other person messages

      return (
        <div key={`msg_${index}`} style={{ width: "100%" }}>
          <div className="message-block">
            {isMyMessage ? <MyMessage message={message}/> : <TheirMessage message={message} lastMessage={messages[lastMessageKey]}/>}
          </div>

          <div className="read-reciepts" style={{marginRight:isMyMessage ? '18px' : '0px', marginLeft: isMyMessage ? '0px' : '68px' }}></div>
        </div>
      );
    });
  };

  return <div className="chat-feed">
            <div className="chat-title-container">
                <div className="chat-title">{chat ? chat.title : ""}</div>
                <div className="chat-subtitle">
                
                </div>
                {renderMessages()}
                <div style={{height:'100px'}} />

                <div className="message-form-container">
                    <MessageForm {...props} chatId ={activeChat}/>
                </div>
            </div>
  </div>;
};

export default ChatFeed;