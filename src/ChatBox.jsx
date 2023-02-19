import React, { useState } from "react";
import { BsMessenger, BsQuestionCircleFill } from "react-icons/bs";
import { dummyMessage } from "./dummyData";
import Style from "./ChatBox.module.css";
import Header from "./Header";
import SideBar from "./SideBar";
const style = {
  display: "inline-block",
  maxWidth: "75%",
  width: "auto",
  wordWrap: "break-word",
};
const suggestions = [
  "I want to use Bing anymore",
  "I'm sacred of you",
  "I'll use Google instead",
];

const ChatBox = () => {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");

  const handleSubmit = (message) => {
    if (message.trim().length === 0) {
      return;
    }
    let prev = [...messages];
    prev.unshift({ content: message, role: 0 });
    prev.unshift({ content: dummyMessage, role: 1 });
    setMessages(prev);
    setText("");
  };

  const onKeyPress = (e) => {
    if (e.keyCode === 13 && e.shiftKey) {
      e.preventDefault();
      let start = e.target.selectionStart,
        end = e.target.selectionEnd;
      setText((prevState) => {
        return (
          prevState?.substring(0, start) + "\n" + prevState?.substring(end)
        );
      });
    } else if (e.keyCode === 13) {
      e.preventDefault();
      handleSubmit(text);
    }
  };

  return (
    <div className="d-flex justify-content-between" style={{ height: "600px" }}>
      <div className="w-100">
        <Header />
        <div
          className="w-100 h-100  ps-5 pe-3 pt-2 d-flex flex-column "
          style={{ backgroundColor: "#ccccff55" }}
        >
          <div
            className="fs-1 w-100"
            style={{
              height: "70px",
              position: "fixed",
            }}
          >
            NeuralMind.io
          </div>
          <div className={Style.scroll}>
            {messages.map((message, index) => {
              return (
                <>
                  {message.role === 1 ? (
                    <div className="w-100" key={index}>
                      <div
                        key={index}
                        className="rounded-3 mt-2 mb-2 p-2  bg-light"
                        style={style}
                      >
                        {message.content}
                      </div>
                    </div>
                  ) : (
                    <div
                      className="w-100 d-flex justify-content-end"
                      key={index}
                    >
                      <div className="w-75 d-flex justify-content-end">
                        <div
                          key={index}
                          className="rounded-3 mt-2 mb-2 text-white p-2 bg-primary "
                          style={style}
                        >
                          {message.content}
                        </div>
                      </div>
                    </div>
                  )}
                </>
              );
            })}
          </div>
          <div className="d-flex justify-content-end mt-2 mb-3">
            <BsQuestionCircleFill
              style={{
                fontSize: "30px",
                alignSelf: "center",
                color: "white",
              }}
            />
            {suggestions.map((item, index) => {
              return (
                <div
                  key={index}
                  onClick={(e) => {
                    handleSubmit(item);
                  }}
                  className={
                    "p-1 ps-2 pe-2 text-primary-emphasis ms-1 me-1  rounded bg-light" +
                    " " +
                    Style.pointer
                  }
                  style={{ border: "2px solid blue" }}
                >
                  {item}
                </div>
              );
            })}
          </div>
          <div className="d-flex justify-content-between mb-5 mt-2">
            <BsMessenger style={{ fontSize: "40px", marginRight: "10px" }} />
            <form
              className="w-100"
              onSubmit={(e) => {
                onKeyPress(e);
              }}
            >
              <textarea
                value={text}
                className={"rounded-pill w-100 ps-3" + " " + Style.textArea}
                placeholder="Ask Me Anything...."
                onChange={(e) => {
                  setText(e.target.value);
                }}
                onKeyDown={(e) => {
                  onKeyPress(e);
                }}
              />
            </form>
          </div>
        </div>
      </div>
      <SideBar />
    </div>
  );
};

export default ChatBox;
