"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { motion, AnimatePresence } from "framer-motion";
import {
  Heart,
  Ham,
  Music,
  PauseCircle,
  PlayCircle,
  ArrowRightCircle,
  Star,
  Sun,
  Cake,
  Gift,
  Palette,
  Plane,
  Home,
  Waves,
  Wind,
  Infinity,
  HandMetal,
  Smile,
  Brain,
  Lightbulb,
  ThermometerSun,
  ScrollText,
  Headphones,
  Cat,
  Hand,
  Calendar,
} from "lucide-react";
import Hearts from "./hearts";
// const scenes = [
//   {
//     icon: <Gift className="w-full h-full text-red-400" />,
//     background: "from-red-100 to-pink-200",
//     msg: "你是上天赐予我最美好的礼物",
//   },
//   {
//     icon: <Umbrella className="w-full h-full text-purple-500" />,
//     background: "from-purple-200 to-pink-200",
//   },

//   {
//     icon: <Heart className="w-full h-full text-red-500" />,
//     background: "from-pink-200 to-red-200",
//   },
//   {
//     icon: <Star className="w-full h-full text-yellow-400" />,
//     background: "from-indigo-200 to-purple-200",
//   },
//   {
//     icon: <Sun className="w-full h-full text-yellow-500" />,
//     background: "from-yellow-200 to-orange-200",
//   },
//   {
//     icon: <Moon className="w-full h-full text-blue-400" />,
//     background: "from-blue-200 to-indigo-200",
//   },
//   {
//     icon: <Cloud className="w-full h-full text-gray-400" />,
//     background: "from-blue-100 to-gray-200",
//   },
//   {
//     icon: <Umbrella className="w-full h-full text-purple-500" />,
//     background: "from-purple-200 to-pink-200",
//   },
//   {
//     icon: <Music className="w-full h-full text-green-500" />,
//     background: "from-green-200 to-teal-200",
//   },
//   {
//     icon: <Cake className="w-full h-full text-pink-600" />,
//     background: "from-pink-100 to-red-100",
//   },
//   {
//     icon: <Leaf className="w-full h-full text-green-400" />,
//     background: "from-green-100 to-emerald-200",
//   },
//   {
//     icon: <Bird className="w-full h-full text-sky-400" />,
//     background: "from-sky-100 to-blue-200",
//   },
//   {
//     icon: <Palette className="w-full h-full text-violet-500" />,
//     background: "from-violet-100 to-purple-200",
//   },
//   {
//     icon: <Compass className="w-full h-full text-amber-600" />,
//     background: "from-amber-100 to-yellow-200",
//   },
//   {
//     icon: <Plane className="w-full h-full text-blue-500" />,
//     background: "from-cyan-100 to-blue-200",
//   },
//   {
//     icon: <Home className="w-full h-full text-orange-400" />,
//     background: "from-orange-100 to-amber-200",
//   },
//   {
//     icon: <Trees className="w-full h-full text-emerald-600" />,
//     background: "from-emerald-100 to-green-200",
//   },
//   {
//     icon: <Waves className="w-full h-full text-cyan-500" />,
//     background: "from-cyan-100 to-sky-200",
//   },
//   {
//     icon: <Snowflake className="w-full h-full text-blue-300" />,
//     background: "from-blue-50 to-slate-200",
//   },
//   {
//     icon: <Wind className="w-full h-full text-slate-400" />,
//     background: "from-slate-100 to-gray-200",
//   },
//   {
//     icon: <Sunset className="w-full h-full text-orange-500" />,
//     background: "from-orange-200 to-rose-200",
//   },
//   {
//     icon: <Infinity className="w-full h-full text-indigo-500" />,
//     background: "from-indigo-100 to-violet-200",
//   },
// ];
const scenes = [
  {
    icon: <Gift className="w-full h-full text-red-400" />,
    background: "from-red-100 to-pink-200",
    msg: "你是上天赐予我最美好的礼物",
  },
  {
    icon: <HandMetal className="w-full h-full text-purple-500" />,
    background: "from-purple-200 to-pink-200",
    msg: "你的一切都让我着迷",
  },
  {
    icon: <Smile className="w-full h-full text-pink-600" />,
    background: "from-pink-100 to-red-100",
    msg: "我爱你可爱的小圆脸",
  },
  {
    icon: <Ham className="w-full h-full text-sky-400" />,
    background: "from-sky-100 to-blue-200",
    msg: "我爱你香香软软的肉肉",
  },
  {
    icon: <Heart className="w-full h-full text-green-400" />,
    background: "from-green-100 to-emerald-200",
    msg: "我爱你的体贴温柔",
  },
  {
    icon: <Brain className="w-full h-full text-violet-500" />,
    background: "from-violet-100 to-purple-200",
    msg: "我爱你的聪明细心",
  },
  {
    icon: <Home className="w-full h-full text-orange-400" />,
    background: "from-orange-100 to-amber-200",
    msg: "每一天有你相伴都是那么美好",
  },
  {
    icon: <Cake className="w-full h-full text-emerald-600" />,
    background: "from-emerald-100 to-green-200",
    msg: "每一次想到你都是那么幸福",
  },
  {
    icon: <Star className="w-full h-full text-yellow-400" />,
    background: "from-indigo-200 to-purple-200",
    msg: "你是我生命中最亮的星",
  },
  {
    icon: <Lightbulb className="w-full h-full text-orange-500" />,
    background: "from-orange-200 to-rose-200",
    msg: "给彼此的黑夜带来光明",
  },
  {
    icon: <Sun className="w-full h-full text-yellow-500" />,
    background: "from-yellow-200 to-orange-200",
    msg: "你是明亮的太阳",
  },
  {
    icon: <ThermometerSun className="w-full h-full text-blue-300" />,
    background: "from-blue-50 to-slate-200",
    msg: "寒风中送去暖意",
  },
  {
    icon: <Palette className="w-full h-full text-amber-600" />,
    background: "from-blue-100 to-red-200",
    msg: "你是最艳丽的色彩",
  },
  {
    icon: <Waves className="w-full h-full text-cyan-500" />,
    background: "from-cyan-100 to-sky-200",
    msg: "给我的生命增添乐趣",
  },
  {
    icon: <ScrollText className="w-full h-full text-gray-400" />,
    background: "from-blue-100 to-gray-200",
    msg: "你是最华美的诗",
  },
  {
    icon: <Wind className="w-full h-full text-slate-400" />,
    background: "from-slate-100 to-gray-200",
    msg: "我愿阅读你的点点滴滴",
  },
  {
    icon: <Music className="w-full h-full text-green-500" />,
    background: "from-green-200 to-teal-200",
    msg: "你是最动听的乐曲",
  },
  {
    icon: <Headphones className="w-full h-full text-amber-600" />,
    background: "from-amber-100 to-yellow-200",
    msg: "最喜欢聆听你娇滴滴的声音",
  },
  {
    icon: <Cat className="w-full h-full text-aqua-600" />,
    background: "from-amber-100 to-yellow-200",
    msg: "你是最可爱的小猫咪",
  },
  {
    icon: <Hand className="w-full h-full text-cyan-500" />,
    background: "from-cyan-100 to-sky-200",
    msg: "真想时刻都抚摸你",
  },
  {
    icon: <Infinity className="w-full h-full text-indigo-500" />,
    background: "from-indigo-100 to-violet-200",
    msg: "你是我心中永远的唯一",
  },
  {
    icon: <Calendar className="w-full h-full text-blue-400" />,
    background: "from-blue-200 to-indigo-200",
    msg: "想和你度过每一个四季",
  },
  {
    icon: <Plane className="w-full h-full text-amber-500" />,
    background: "from-cyan-100 to-blue-200",
    msg: "想和你看遍每一处风景",
  },
];

export function DynamicLoveScenesComponent() {
  const [currentScene, setCurrentScene] = useState(0);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [isAudioFinish, setIsAudioFinish] = useState(false);
  const [isNextPage, setIsNextPage] = useState(false);
  const [particlesLoaded, setParticlesLoaded] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [intervalId, setIntervalId] = useState<
    NodeJS.Timeout | number | undefined
  >();
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // 定义一个函数来判断是否为移动端
    const checkIsMobile = () => {
      // 使用正则表达式匹配常见的移动设备标识
      const mobileRegex =
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
      return mobileRegex.test(navigator.userAgent);
    };
    // 调用函数并更新状态
    setIsMobile(checkIsMobile());
  }, []);

  const setTimeInterval = useCallback(() => {
    const intervalIdTemp = setInterval(() => {
      setCurrentScene((prevScene) => (prevScene + 1) % scenes.length);
    }, Math.floor(130000 / scenes.length) + 1);
    console.log("lcw timeInterval", intervalIdTemp);
    setIntervalId(intervalIdTemp);
    return intervalIdTemp;
  }, []);

  const setClearTimeInterval = (tempIntervalId?: number | NodeJS.Timeout) => {
    console.log("lcw clear timeInterval", tempIntervalId, intervalId);
    clearInterval(tempIntervalId || intervalId);
    setIntervalId(undefined);
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
      setParticlesLoaded(true);
    });
  }, []);

  useEffect(() => {
    const audio = new Audio("/audio/huge.mp3");
    audioRef.current = audio;
    // audio.loop = true;
    const handleAudioEnded = () => {
      console.log("音频播放完毕");
      setIsAudioPlaying(false);
      setClearTimeInterval();
      setIsAudioFinish(true);
    };
    audio.addEventListener("ended", handleAudioEnded);

    audio.play().catch((error) => {
      console.error("音频播放失败:", error);
      setIsAudioPlaying(false);
    });

    return () => {
      setClearTimeInterval();
      audio.pause();
      audio.src = "";
      audio.removeEventListener("ended", handleAudioEnded); // 移除事件监听器
      console.log("lcw 1");
    };
  }, []);

  const toggleAudio = () => {
    if (isAudioFinish && !isMobile) {
      setIsNextPage(true);
      return;
    }
    if (audioRef.current) {
      if (isAudioPlaying) {
        audioRef.current.pause();
        console.log("lcw 2");

        setClearTimeInterval();
      } else {
        audioRef.current.play().catch((error) => {
          console.error("音频放失败:", error);
          setIsAudioPlaying(false);
        });
        setTimeInterval();
      }
      setIsAudioPlaying(!isAudioPlaying);
    }
  };

  const particlesOptions = {
    particles: {
      color: {
        value: ["#FF5555", "#FFD700", "#FF69B4", "#87CEFA", "#98FB98"],
      },
      move: {
        direction: "bottom",
        enable: true,
        outModes: {
          default: "out",
        },
        random: true,
        speed: 2,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 30,
      },
      opacity: {
        value: 0.7,
      },
      shape: {
        type: ["circle", "heart", "star"],
      },
      size: {
        value: { min: 5, max: 15 },
      },
    },
  };

  if (!isMounted) {
    return null;
  }

  console.log(isNextPage, isAudioPlaying, isAudioFinish, isMobile);
  return (
    <div
      className={`relative w-full min-h-screen overflow-hidden bg-gradient-to-br ${scenes[currentScene].background}`}
    >
      {particlesLoaded && (
        <Particles
          id="tsparticles"
          options={
            particlesOptions as import("@tsparticles/engine").ISourceOptions
          }
        />
      )}

      <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
        {isNextPage ? (
          <Hearts />
        ) : (
          <>
            <motion.div
              key={currentScene}
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: 180 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
              }}
              className="w-64 h-64 mb-8"
            >
              {scenes[currentScene].icon}
            </motion.div>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentScene}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5 }}
                className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-800"
              >
                {scenes[currentScene % scenes.length].msg}
              </motion.div>
            </AnimatePresence>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="px-6 py-3 bg-white text-pink-500 rounded-full font-semibold text-lg shadow-lg flex items-center space-x-2"
              onClick={toggleAudio}
            >
              {isAudioFinish && !isMobile ? (
                <>
                  <ArrowRightCircle />
                  <span>继续甜蜜生活</span>
                </>
              ) : isAudioPlaying ? (
                <>
                  <PauseCircle />
                  <span>暂停音乐播放</span>
                </>
              ) : (
                <>
                  <PlayCircle />
                  <span>开启幸福之旅</span>
                </>
              )}
            </motion.button>
          </>
        )}
      </div>
      <div
        style={{
          position: "fixed",
          bottom: "0px",
          height: "40px",
          // color: "white
          backgroundColor: "white",
          width: "100vw",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <a
          href="https://beian.miit.gov.cn"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "blue", textDecoration: "underline" }}
        >
          粤ICP备2025371442号-2
        </a>
      </div>
    </div>
  );
}
