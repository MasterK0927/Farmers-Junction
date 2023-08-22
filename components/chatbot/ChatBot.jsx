'use client';
import React, {useState, useRef} from 'react';
import styles from './chatbot.module.css';

const ChatBot = () => {

    const[messages, setMessages] = useState([]);
    const[input, setInput] = useState("");


    const formRef = useRef(null);

    const handleKeyUp = (e) => {
        if(e.key === "Enter" && !e.shiftKey){
            formRef.current.dispatchEvent(
                new Event("submit", {cancelable: true, bubbles: true})
            );
        };
    };

    const sendMessage = async (e) => {
        e.preventDefault();
        
        if(input.trim() === "") return;

        setMessages([...messages, {isUser: true, text: input.trim()}]);
        setInput("");

        try{
            const response = await fetch("http://localhost:3001", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({message:input})
            });

            const data = await response.json();
            const aiMessage = data.message || "Error from GPT Pov";

            setMessages((previousMessages)=> [
                ...previousMessages, {isUser: false, text: aiMessage}
            ]);
        }catch(error){
            console.log("Error fetching AI response", error);
        }
    }

  return (
    <div className={styles.chatContainer}>
        <div className={styles.chatBody}>
            {messages.map((message, index)=> (
                <div
                    key={index}
                    className={`styles.messageContainer ${
                        message.isUser ? styles.isUser : styles.isAi}`}
                >
                    <div className={styles.messageUserIdentification}>
                        <p>
                            {""}
                            <span>&#x1F7E2;</span>
                            {message.isUser ? "Keshav" : "ChatBot"}
                        </p>
                    </div>
                    <p className={styles.textChat}>{message.text}</p>
                </div>
            ))}
        </div>
        <form className={styles.formContainer} onSubmit={sendMessage} ref={formRef}>
            <textarea 
                type='text' 
                className={styles.textArea}
                placeholder='type your prompt'
                value={input} 
                onKeyUp={(e)=>handleKeyUp(e)} 
                onChange={(e)=> setInput(e.target.value)}
            />
            <button className={styles.sendButton} type='submit'>
                Send
            </button>
        </form>
    </div>
  )
}

export default ChatBot