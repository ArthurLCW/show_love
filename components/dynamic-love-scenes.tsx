"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { motion, AnimatePresence } from "framer-motion";
import {
  Heart,
  Music,
  PauseCircle,
  PlayCircle,
  ArrowRightCircle,
  Star,
  Sun,
  Moon,
  Cloud,
  Umbrella,
  Cake,
  Gift,
  Leaf,
  Bird,
  Palette,
  Compass,
  Plane,
  Home,
  Trees,
  Waves,
  Snowflake,
  Wind,
  Sunset,
  Infinity,
} from "lucide-react";
import Hearts from "./hearts";

const scenes = [
  {
    icon: <Heart className="w-full h-full text-red-500" />,
    background: "from-pink-200 to-red-200",
  },
  {
    icon: <Star className="w-full h-full text-yellow-400" />,
    background: "from-indigo-200 to-purple-200",
  },
  {
    icon: <Sun className="w-full h-full text-yellow-500" />,
    background: "from-yellow-200 to-orange-200",
  },
  {
    icon: <Moon className="w-full h-full text-blue-400" />,
    background: "from-blue-200 to-indigo-200",
  },
  {
    icon: <Cloud className="w-full h-full text-gray-400" />,
    background: "from-blue-100 to-gray-200",
  },
  {
    icon: <Umbrella className="w-full h-full text-purple-500" />,
    background: "from-purple-200 to-pink-200",
  },
  {
    icon: <Music className="w-full h-full text-green-500" />,
    background: "from-green-200 to-teal-200",
  },
  {
    icon: <Cake className="w-full h-full text-pink-600" />,
    background: "from-pink-100 to-red-100",
  },
  {
    icon: <Gift className="w-full h-full text-red-400" />,
    background: "from-red-100 to-pink-200",
  },
  {
    icon: <Leaf className="w-full h-full text-green-400" />,
    background: "from-green-100 to-emerald-200",
  },
  {
    icon: <Bird className="w-full h-full text-sky-400" />,
    background: "from-sky-100 to-blue-200",
  },
  {
    icon: <Palette className="w-full h-full text-violet-500" />,
    background: "from-violet-100 to-purple-200",
  },
  {
    icon: <Compass className="w-full h-full text-amber-600" />,
    background: "from-amber-100 to-yellow-200",
  },
  {
    icon: <Plane className="w-full h-full text-blue-500" />,
    background: "from-cyan-100 to-blue-200",
  },
  {
    icon: <Home className="w-full h-full text-orange-400" />,
    background: "from-orange-100 to-amber-200",
  },
  {
    icon: <Trees className="w-full h-full text-emerald-600" />,
    background: "from-emerald-100 to-green-200",
  },
  {
    icon: <Waves className="w-full h-full text-cyan-500" />,
    background: "from-cyan-100 to-sky-200",
  },
  {
    icon: <Snowflake className="w-full h-full text-blue-300" />,
    background: "from-blue-50 to-slate-200",
  },
  {
    icon: <Wind className="w-full h-full text-slate-400" />,
    background: "from-slate-100 to-gray-200",
  },
  {
    icon: <Sunset className="w-full h-full text-orange-500" />,
    background: "from-orange-200 to-rose-200",
  },
  {
    icon: <Infinity className="w-full h-full text-indigo-500" />,
    background: "from-indigo-100 to-violet-200",
  },
];

const loveMessages = [
  "你是我生命中最美好的礼物",
  "每一天有你相伴都是那么美好",
  "你的笑容是我最大的幸福",
  "我愿意用一生的时间去爱你",
  "你是我心中永远的唯一",
  "愿做你生命中的一抹温暖",
  "你是我最想写的诗",
  "想和你一起数星星到天明",
  "你是我最甜蜜的牵挂",
  "愿陪你走过四季轮回",
  "你是我心中最美的风景",
  "想和你一起看遍世界每个角落",
  "愿做你永远的依靠",
  "你是我生命中最亮的星",
  "想和你一起走过漫长岁月",
  "愿做你生命中的一缕阳光",
  "你是我最想珍惜的人",
  "想和你一起看遍春花秋月",
  "愿做你永远的港湾",
  "你是我心中最美的期待",
  "想陪你看遍世间美景",
  "愿做你生命中的一片绿叶",
  "你是我最想守护的人",
  "想和你一起品味生活点滴",
  "愿做你永远的依靠",
  "你是我最想执手到老的人",
  "想和你一起看云卷云舒",
  "愿做你生命中的一首诗",
  "你是我最想珍藏的回忆",
  "想和你一起聆听四季变换",
  "愿做你永远的知己",
  "你是我最想讲述的故事",
  "想和你一起看潮起潮落",
  "愿做你生命中的一抹色彩",
  "你是我最想细数的温柔",
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
    }, 5000);
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
                {loveMessages[currentScene % loveMessages.length]}
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
    </div>
  );
}
