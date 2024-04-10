export default function ChatBox() {
    return (
      <>
        <div className="flex flex-col h-screen overflow-hidden sm:flex-row">

          <div className="w-full sm:w-1/2 bg-white border-r border-gray-300 overflow-y-auto m-2 p-2 border rounded">

            Messages to Show
          </div>
  

          <div className="flex-1 flex flex-col justify-end sm:justify-start">

            <div className="bg-white p-2 m-2 rounded border max-h-48 overflow-y-auto">
              <h2 className="text-lg font-semibold mb-2">Message Suggestions</h2>

              <p>
                Suggest
              </p>
            </div>
  

            <div className="bg-white border-t border-gray-300 p-4 flex flex-col sm:flex-row">
              <input
                type="text"
                placeholder="Type a message..."
                className="flex-1 p-2 rounded-md border border-gray-400 focus:outline-none focus:border-blue-500 mb-2 sm:mb-0 sm:mr-2"
              />
              <button className="bg-indigo-500 text-white px-4 py-2 rounded-md">
                Send
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
  