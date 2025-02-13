import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const images = [
  "/sami1.png",
  "/sami2.png",
  "/sami3.png",
  "/sami4.jpg",
  "/sami5.png",
  "/sami6.jpg",
  "/sami7.jpg",
  "/sami8.jpg ",
  "/sami9.png",
  "/sami10.png",
  "/sami11.png",
  "/sami12.png",
  "/sami13.jpg",
  "/sami14.jpg",
  "/sami15.jpg",
  "/sami16.jpg",
  "/sami17.jpg",
  "/sami18.jpg",
];

const images2 = [
  "/aaditya1.jpg",
  "/aaditya2.jpg",
  "/aaditya3.jpg",
  "/aaditya4.jpg",
  "/aaditya5.jpg",
  "/aaditya6.jpg",
  "/aaditya9.jpg",
  "/aaditya10.jpg",
  "/aaditya11.jpg",
  "/aaditya12.jpg",
  "/aaditya13.jpg",
  "/aaditya14.jpg",
  "/aaditya15.jpg",
];

function Memories() {
  return (
    <div className="p-6 text-center">
      <h1 className="text-3xl font-bold mb-4">Happy Sami 💖</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((img, index) => (
          <motion.img
            key={index}
            src={img}
            alt="memory"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="w-full h-auto rounded-lg shadow-md"
          />
        ))}
      </div>
      <div className="mt-10"></div>
      <Link
        to="/letter"
        className="text-white bg-blue-500 w-1/5 p-2 rounded underline hover:opacity-80 transition-all"
      >
        Read My Letter
      </Link>

      <h1 className="text-3xl font-bold mb-4 mt-10">Happy Me 🙃</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images2.map((img, index) => (
          <motion.img
            key={index}
            src={img}
            alt="memory"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="w-full h-auto rounded-lg shadow-md"
          />
        ))}
      </div>
    </div>
  );
}

export default Memories;
