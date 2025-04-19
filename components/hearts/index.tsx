import React from "react";
import Modal from "react-modal";
import { useState, useRef } from "react";
import styles from "./App.module.css";

const images: string[] = [
  "1744990696920.jpg",
  "1744990696952.jpg",
  "1744990696955.jpg",
  "1744990696957.jpg",
  "1744990696959 (2).jpg",
  "1744990696961.jpg",
  "1744990696962.jpg",
  "mmexport1736267526280.jpg",
  "mmexport1742396923824.jpg",
  "mmexport1742396936155.jpg",
  "mmexport1742396940786.jpg",
  "mmexport1742396964409.jpg",
  "mmexport1742396971090.jpg",
  "mmexport1742396975323.jpg",
  "mmexport1742396982721.jpg",
  "mmexport1742397025251.jpg",
  "mmexport1742397036258.jpg",
  "mmexport1742397042310.jpg",
  "mmexport1742397048557.jpg",
  "mmexport1742397058985.jpg",
  "mmexport1742397081108.jpg",
  "mmexport1742397085874.jpg",
];

const smImages: string[] = [
  "sm1744990696920.jpg",
  "sm1744990696952.jpg",
  "sm1744990696955.jpg",
  "sm1744990696957.jpg",
  "sm1744990696959 (2).jpg",
  "sm1744990696961.jpg",
  "sm1744990696962.jpg",
  "smmmexport1736267526280.jpg",
  "smmmexport1742396923824.jpg",
  "smmmexport1742396936155.jpg",
  "smmmexport1742396940786.jpg",
  "smmmexport1742396964409.jpg",
  "smmmexport1742396971090.jpg",
  "smmmexport1742396975323.jpg",
  "smmmexport1742396982721.jpg",
  "smmmexport1742397025251.jpg",
  "smmmexport1742397036258.jpg",
  "smmmexport1742397042310.jpg",
  "smmmexport1742397048557.jpg",
  "smmmexport1742397058985.jpg",
  "smmmexport1742397081108.jpg",
  "smmmexport1742397085874.jpg",
  "smsm1744990696920.jpg",
  "smsm1744990696952.jpg",
  "smsm1744990696955.jpg",
  "smsm1744990696957.jpg",
  "smsm1744990696959 (2).jpg",
  "smsm1744990696961.jpg",
  "smsm1744990696962.jpg",
  "smsmmmexport1736267526280.jpg",
  "smsmmmexport1742396923824.jpg",
  "smsmmmexport1742396936155.jpg",
  "smsmmmexport1742396940786.jpg",
  "smsmmmexport1742396964409.jpg",
  "smsmmmexport1742396971090.jpg",
  "smsmmmexport1742396975323.jpg",
  "smsmmmexport1742396982721.jpg",
  "smsmmmexport1742397025251.jpg",
  "smsmmmexport1742397036258.jpg",
  "smsmmmexport1742397042310.jpg",
  "smsmmmexport1742397048557.jpg",
  "smsmmmexport1742397058985.jpg",
  "smsmmmexport1742397081108.jpg",
  "smsmmmexport1742397085874.jpg",
];

// 简化的爱心形状坐标
const heartCoordinates: [number, number][] = [
  [0, 1],
  [0, 2],
  [0, 3],
  [1, 0],
  [1, 4],
  [2, 0],
  [2, 5],
  [3, 1],
  [3, 6],
  [4, 1],
  [4, 7],
  [5, 1],
  [5, 7],
  [6, 1],
  [6, 6],
  [7, 0],
  [7, 5],
  [8, 0],
  [8, 4],
  [9, 1],
  [9, 2],
  [9, 3],
];

// 计算相恋时间
const startDate = new Date("2023-03-17");
const currentDate = new Date();
const timeDifference = currentDate.getTime() - startDate.getTime();
const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

const getWidthHeight = (id: number) => {
  const img = document.getElementById(id + "") as HTMLImageElement;
  console.log("elemennt", img);
  if (!img) {
    return { width: 400, height: 400 };
  }
  const screenWidth = window.innerWidth * 0.8;
  const screenHeight = window.innerHeight * 0.8;
  const naturalWidth = img.naturalWidth;
  const naturalHeight = img.naturalHeight;

  let width = naturalWidth;
  let height = naturalHeight;

  if (naturalWidth > screenWidth || naturalHeight > screenHeight) {
    const widthRatio = screenWidth / naturalWidth;
    const heightRatio = screenHeight / naturalHeight;
    const ratio = Math.min(widthRatio, heightRatio);
    width = naturalWidth * ratio;
    height = naturalHeight * ratio;
  }

  console.log("width height func", {
    width,
    height,
    screenWidth,
    screenHeight,
    naturalWidth,
    naturalHeight,
  });

  return { width, height };
};

const HomePage: React.FC = () => {
  const [showedImg, setShowedImg] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={styles.heartContainer}>
      {heartCoordinates.map(([x, y], index) => (
        <img
          onClick={() => {
            setShowedImg(index);
            openModal();
          }}
          key={index}
          id={index + ""}
          src={`\\imgs\\sm\\${smImages[index]}`}
          alt={`Heart Image ${index + 1}`}
          className={styles.heartImage}
          style={{
            left: `${x * 40}px`,
            top: `${y * 40}px`,
            width: "40px",
            height: "40px",
          }}
        />
      ))}
      <div className={styles.heartText}>
        <p>亲爱的</p>
        <p>我们已经相恋</p>
        <p>{daysDifference} 天啦</p>
      </div>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="原版图片模态框"
        style={{
          content: {
            width: `${getWidthHeight(showedImg).width}px`,
            height: `${getWidthHeight(showedImg).height}px`,
            margin: "auto",
            padding: 0,
          },
        }}
      >
        <img
          style={{ width: "100%", height: "100%" }}
          src={`\\imgs\\${images[showedImg]}`}
          alt="Original Image"
          ref={imgRef}
        />
      </Modal>
    </div>
  );
};

export default HomePage;
