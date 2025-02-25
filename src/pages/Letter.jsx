import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const message =
  "Soorrrrryyyyyyyy my princesss, timi eklo yesto manxey hau mero life ma jo sanga bolda ma harek moment happy hunxu, no matter what. I'm always waiting for you messages. You're always in my head. Timi aayesi I've been a lot more happier than I was. Never thought I would find someone who takes care of me like this (sayad garxau hola, ma bhram ma ni hunxa sakxu 😒). Aba mero side bata you're more than a friend to me. You mean soooooooo much to me. I'm always afraid ki timi ma bata bored hunxau ani you'll stop talking, insecurity at it's peak, tei ni aba k garammmm. K GARUUUU, ma k garuuuu. MAYALUUUUUUUUU, narisauuuuu naaaaa...";

function Letter() {
  const [text, setText] = useState(""); // Start with an empty string

  useEffect(() => {
    let i = 0;
    setText(""); // Ensure text starts empty
    const interval = setInterval(() => {
      if (i < message.length) {
        setText((prev) => prev + message.charAt(i)); // Use charAt(i) safely
        i++;
      } else {
        clearInterval(interval);
      }
    }, 40);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-800">
      <h1 className="text-2xl font-bold">My Apology Letter ✍</h1>
      <p className="mt-4 text-lg italic w-96">{text}</p>
      <Link
        to="/final-message"
        className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-lg"
      >
        Final Message
      </Link>
    </div>
  );
}

export default Letter;
