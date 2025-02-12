import { Link } from "react-router-dom";

function FinalMessage() {
  return (
    <div className="h-screen flex flex-col items-center justify-center text-center">
      <h1 className="text-3xl font-bold">
        No matter what happens, I’ll always care about you. 💙
      </h1>
      <p className="mt-4">
        Sorryyyyyyy my cutiepie gurlllll 🤌. Pleaseeee maaf kardijiyeeee 😭
      </p>
      <Link
        to="/"
        className="mt-6 px-6 py-3 bg-green-500 text-white rounded-lg"
      >
        Back to Home
      </Link>
    </div>
  );
}

export default FinalMessage;
