import { useState } from "react";

const Assistant = () =>{
    const {Input, setInput} = useState("");

    const sendMessage = (message) => {
        fetch("https://api.openai.com/v1/chat/completions", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer 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",
          },
          body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [
              { role: "system", content: "You are a budget assistant" },
              { role: "user", content: Input },
            ],
          }),
        })
          .then((response) => response.json())
          .then((data) => {
            // console.log(data);
             console.log(data);
           // setMessages([...messages, data.choices[0].message.content]);
          })
          .catch((error) => {
            // Handle errors
          });
      };
    return 
    <div>
        <input
        Placeholder="Enter information for hellp"
        onChange={(event) => {
            setInput (event.target.value);
        }}
        />

        
        <button id="assistantButton" onClick ={() => {
            sendMessage(Input);
        }}> Submit </button>
        <h2>{Input}</h2>
        </div>;
};

export default Assistant;