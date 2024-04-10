"use client";
import ChatBox from "@/comps/chatbox";
import { socket } from "../socket";
import { useEffect, useState } from "react";
import { ChangeEvent } from "react";
import {
  uniqueNamesGenerator,
  NumberDictionary,
  countries,
} from "unique-names-generator";

export default function Home() {
  const [message, setMessage] = useState("");
  const [username, setUsername] = useState("username");
  const [recievemsg, setRecievemsg] = useState("");
  const [apiResponse, setApiresponse] = useState("");
  const [recieveusername, setUser] = useState<string>("");
  const [displayMsg, setDisplayMsg] = useState([{ showuser: "", showmsg: "" }]);

  const numberDictionary = NumberDictionary.generate({ min: 0, max: 10 });
  const randomName = uniqueNamesGenerator({
    dictionaries: [countries, numberDictionary],
    length: 2,
    separator: "-",
  });

  //username allocated
  useEffect(() => {
    setUsername(randomName);
  }, []);
  //recieved message username and message
  useEffect(() => {
    const obj = {
      showuser: recieveusername,
      showmsg: recievemsg,
    };
    setDisplayMsg((prevDisplayMsg) => [obj, ...prevDisplayMsg]);
    console.log(displayMsg);
  }, [recievemsg]);
  //Socket IO - implementation
  useEffect(() => {
    socket.on("connect", () => {
      console.log("Client connected");
    });

    socket.on("sent-messageUsername-to-client", (msg, user) => {
      setUser(user.toString());
      setRecievemsg(msg);
      console.log("message: ", recievemsg, " username: ", username);
    });

    socket.on("sent-api-response", (text) => {
      setApiresponse(text);
      console.log("Api response : ", apiResponse);
    });
  });

  const handleClick = () => {
    socket.emit("sent-messageUsername-to-server", message, username);
    setMessage("");
  };
  const handleClickAPI = () => {
    socket.emit("sent-api-question", message);
    setMessage("");
  };
  const handleMessageChange = (event: ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
  };

  return (
    <>
      <div className="flex flex-col h-screen overflow-hidden sm:flex-row">
        <nav className="bg-gray-800 shadow-lg p-2 m-2">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-center h-16 items-center">
              <div className="flex-shrink-0 flex items-center">
                <div className="text-white text-2xl font-semibold">
                  ITI Jammu
                </div>
              </div>
            </div>
          </div>
        </nav>
        <div className="w-full sm:w-1/2 bg-white border-r border-gray-300 overflow-y-auto m-2 p-2 border rounded">
          <div className="p-2 m-2 flex justify-center items-center">
            <h2 className="text-lg font-semibold mb-2">Talk Here</h2>
          </div>
          {displayMsg.map((val, index) => {
            return (
              <div key={index}>
                <div className="font-bold font-serif">{val.showuser}</div>

                <div className="w-full">{val.showmsg}</div>
              </div>
            );
          })}
        </div>

        <div className="flex-1 flex flex-col justify-end sm:justify-start">
          <div className="bg-white p-2 m-2 rounded-md border max-h-48 overflow-y-auto">
            <h2 className="text-lg font-semibold mb-2">
              Google Gemini Suggestions
            </h2>

            <p>{apiResponse}</p>
          </div>

          <div className="bg-white border-t border-gray-300 p-4 flex flex-col sm:flex-row">
            <input
              type="text"
              value={message}
              onChange={handleMessageChange}
              placeholder="Type a message..."
              className="flex-1 p-2 rounded-md border border-gray-400 focus:outline-none focus:border-blue-500 mb-2 sm:mb-0 sm:mr-2"
            />
            <button
              onClick={handleClick}
              className="bg-indigo-500 text-white px-4 py-2 rounded-md mx-1 my-1"
            >
              Send
            </button>
            <button
              onClick={handleClickAPI}
              className="bg-indigo-500 text-white px-4 py-2 rounded-md mx-1 my-1"
            >
              Ask Google AI
            </button>
          </div>
        </div>
      </div>
      <div className="p-2 m-2 border rounded-md bg-gray-100">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              About the website
            </h2>
            <ul className="list-disc list-inside text-lg text-gray-700">
              <li>A random username will be allocated on every visit.</li>
              <li>You can ask anything from Google Gemini AI.</li>
              <li>There are no chat backups.</li>
              <li>Your identity is safe here.</li>
            </ul>
          </div>
      <footer className="bg-gray-800 text-white py-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center">
            <p className="text-sm">
              &copy; 2024 Designed by Parteek. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
