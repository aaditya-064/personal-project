import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500 text-white">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl font-bold mb-4"
      >
        I’m Sorry 😞
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="text-lg text-center w-96"
      >
        Mayaluuuuuu, narisaunnaa pilichhhhhh, ma esso jiskeko matra hooooo k
        pookieeeeee. Aajkal ramro sanga kura bhathyena scl ma so text ma halka
        testo garekoooo 😭😭
      </motion.p>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/f_e06C2XQ7w?autoplay=1&start=26"
        title="YouTube video player"
        frameborder="0"
        allow="autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <Link
        to="/memories"
        className="mt-6 px-6 py-3 bg-white text-purple-500 rounded-lg shadow-md hover:bg-gray-200 transition"
      >
        View Our Memories
      </Link>
    </div>
  );
}

export default Home;
