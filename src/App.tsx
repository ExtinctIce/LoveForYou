// import { useEffect, useState } from "react";
import image2 from "./assets/MainPageIcons/woman.jpg";
import image from "./assets/MainPageIcons/love.jpg";
import image3 from "./assets/MainPageIcons/genshin.jpg";
import image4 from "./assets/MainPageIcons/photo.jpg";
import heart from "./assets/Heartyo.webp";
import image6 from "./assets/thx.jpg";
import mack from "./assets/mack.png";
import image5 from "./assets/xd.jpg";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";

const notify = () => toast("идем сегодня в дс?");

interface Memory {
  date?: string;
  title?: string;
  description?: string;
  image: any;
}

const getRandomValue = (min: number, max: number) => {
  return Math.random() * (max - min) + min;
};

const getHeartColor = () => {
  if (Math.random() < 0.7) {
    return getRandomValue(-30, 30);
  }
  return getRandomValue(0, 360);
};

const FloatingHeart = ({ delay, x }: { delay: number; x: number }) => {
  const size = getRandomValue(20, 40);
  const xOffset = getRandomValue(-20, 20);

  return (
    <motion.div
      style={{
        position: "fixed",
        bottom: -100,
        left: `calc(${x}% + ${xOffset}px)`,
        width: `${size}px`,
        height: `${size}px`,
        zIndex: 10,
        filter: `hue-rotate(${getHeartColor()}deg)`,
      }}
      animate={{
        y: [0, -window.innerHeight - 100],
        rotate: [0, getRandomValue(-360, 360)],
        scale: [1, getRandomValue(0.8, 1.2)],
      }}
      transition={{
        duration: 7,
        repeat: Infinity,
        delay,
        ease: [0.4, 0, 0.6, 1],
      }}
    >
      <img src={heart} alt="heart" className="w-full h-full object-contain" />
    </motion.div>
  );
};

const FloatingMack = ({ delay, x }: { delay: number; x: number }) => {
  const size = getRandomValue(30, 50);
  const xOffset = getRandomValue(-20, 20);

  return (
    <motion.div
      style={{
        position: "fixed",
        bottom: -100,
        left: `calc(${x}% + ${xOffset}px)`,
        width: `${size}px`,
        height: `${size}px`,
        zIndex: 10,
      }}
      animate={{
        y: [0, -window.innerHeight - 100],
        rotate: [0, getRandomValue(-180, 180)],
        scale: [1, getRandomValue(0.9, 1.1)],
      }}
      transition={{
        duration: 7,
        repeat: Infinity,
        delay,
        ease: [0.4, 0, 0.6, 1],
      }}
    >
      <img src={mack} alt="mack" className="w-full h-full object-contain" />
    </motion.div>
  );
};

const animate = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const memories: Memory[] = [
  {
    image: image2,
    title: "Только с тобой у меня самые приятные воспоминания.",
  },
  {
    image: image,
    title: "Сколько бы не было трудностей, я всегда буду с тобой.",
  },
  {
    image: image4,
    title: "Пиши мне всегда, я готов поддержать тебя в любую минуту.",
  },
  {
    image: image5,
    title: "Ты самая лучшая, красивая и добрая девушка в мире.",
  },
  {
    image: image6,
    title: "Спасибо что ты всегда рядом, заботишься и беспокоишься за меня.",
  },
  {
    title: "Сколько бы не было трудностей, я всегда буду с тобой.",
    image: image3,
  },
];

export function MainPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-purple-100 overflow-hidden relative">
      {/* Floating Hearts */}
      {[...Array(10)].map((_, i) => (
        <FloatingHeart
          key={i}
          delay={getRandomValue(0, 5)}
          x={getRandomValue(5, 95)}
        />
      ))}

      {/* Floating Macks */}
      {[...Array(2)].map((_, i) => (
        <FloatingMack
          key={`mack-${i}`}
          delay={getRandomValue(0, 8)}
          x={getRandomValue(5, 95)}
        />
      ))}

      <motion.header
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={animate}
        className="p-8 text-center max-w-4xl mx-auto mt-8 md:mt-16"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mt-4">
          С годовщиной, милая!
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mt-4 md:mt-6">
          я очень сильно тебя люблю хехе
        </p>
      </motion.header>

      <div className="max-w-6xl mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 md:gap-12">
          {memories.map((memory, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={animate}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={memory.image}
                  alt={memory.title}
                  className="w-full h-64 md:h-56 object-cover rounded-t-xl"
                />
              </div>
              <div className="p-6 md:p-6">
                <div className="flex items-center">
                  <span className="text-sm text-gray-600">{memory.date}</span>
                </div>
                <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mt-2 text-center">
                  {memory.title}
                </h3>
                <p className="text-gray-600 mt-2 md:text-lg">
                  {memory.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={animate}
          className="text-center mt-16 md:mt-24 mb-8"
        >
          <button
            className="bg-purple-300 text-white px-4 py-2 rounded-md cursor-pointer transition-all duration-300 hover:bg-purple-400 hover:shadow-lg active:bg-purple-500 active:scale-95 font-medium text-lg"
            onClick={notify}
          >
            Кликни на меня!
          </button>
          {/* <NoLinkLocation /> */}
          <p className="text-lg md:text-xl text-gray-600 mt-4 md:mt-6">
            Спасибо за все, я люблю тебя. ❤️
          </p>
          <ToastContainer />
        </motion.div>
      </div>
    </div>
  );
}
