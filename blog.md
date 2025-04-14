# 💘 在线告白页面

## 这是啥？

一个用来告白的网页，整体风格比较简约文艺。打开后会自动播放一些温馨的场景，配上一些告白的话，还加了点动画特效。适合用来表白或者给对象一个小惊喜～

## 主要功能

### 场景切换
- 20多个不同的场景随机切换
- 有爱心啊、星星月亮之类的小图标
- 背景色是渐变的，看着挺舒服
- 整体效果不会太花哨，挺清新的

### 特效
- 加了一些飘动的小粒子
- 像是萤火虫那种感觉
- 随机飘来飘去，看着挺治愈

### 告白文案
收录了一些还不错的情话，比如：
- "你是我生命中最美好的礼物"
- "想和你一起看遍世间美景"
- "愿陪你走过四季轮回"
这些都是比较文艺小清新的风格，不会太油腻

### 背景音乐
- 放了一首比较温柔的音乐
- 可以自己控制开关
- 氛围还挺到位的

## 技术小讲堂

### 用到了啥？

#### Next.js 14
- React的全栈框架，写起来贼方便
- App Router让路由管理超简单
- 自带的优化让页面加载飞快
- 开发模式下改代码立即生效
- 部署到Vercel上特别容易

#### TypeScript
- JavaScript的增强版，写代码不容易出错
- 能自动提示属性和方法
- 改代码的时候能及时发现问题
- 配合VSCode写代码体验特别好
- 方便团队协作和代码维护

#### Tailwind CSS
- 用类名直接写样式，不用写CSS文件
- 响应式设计特别方便（sm:、md:、lg:）
- 暗黑模式一键切换（dark:）
- 动画效果直接加类名就行
- 自定义样式也很简单

#### Framer Motion
- React专用的动画库，效果很丝滑
- 简单的动画几行代码就搞定
- 支持手势操作和3D效果
- 性能优化做得特别好
- 动画过渡特别自然

#### tsparticles
- 超强大的粒子效果库
- 可以自定义粒子形状和运动
- 支持交互效果（比如鼠标跟随）
- 性能优化做得不错
- 配置特别灵活

#### Lucide React
- 高质量的图标库，风格统一
- 支持按需加载，不会影响性能
- 图标可以自定义颜色和大小
- 动画图标也支持
- 经常更新，图标越来越多

### 学到了啥？
- React组件开发：把页面拆成一个个小组件
- 动画处理：学会了怎么让页面显得不那么死板
- 响应式布局：在手机上也能看，不会变形
- 性能优化：让页面加载更快，动画更流畅

## 怎么用？

1. 直接打开链接就能用
2. 等场景自动切换
3. 看完了可以转发给对方
4. 简单粗暴，无需操作

## 适合用在这些场合

- 表白的时候发给对方
- 恋爱纪念日整点小惊喜
- 平时想对对象说点啥的时候
- 想整点浪漫的时候都能用

## 想自己改改？

如果你也想整一个：
1. 先装个Node.js（就是个运行环境）
2. 克隆代码到本地（git clone）
3. 装依赖：`npm install`（等它装完就行）
4. 运行：`npm run dev`
5. 改代码，加自己想要的功能

### 想换文案？
- 打开 `components/dynamic-love-scenes.tsx`
- 找到 `loveMessages` 数组
- 直接改里面的文字就行
- 想加多少句都行，数组里加就完事了

### 想换背景？
- 还是在 `components/dynamic-love-scenes.tsx`
- 找到 `scenes` 数组
- 每个场景都有个 `background` 属性
- 可以改颜色渐变，比如 `from-pink-100 to-red-200`
- 想加新场景就往数组里加对象

### 想换音乐？
1. 先把你的音乐文件（最好是mp3）放到 `public` 文件夹
2. 在 `components/dynamic-love-scenes.tsx` 里
3. 找到 `<audio>` 标签
4. 改 `src` 属性指向你的音乐文件

### 想换图标？
- 用的是 Lucide React 的图标
- 在 `components/dynamic-love-scenes.tsx` 里
- 找到 `scenes` 数组里的 `icon` 属性
- 可以去 [Lucide Icons](https://lucide.dev/icons/) 找喜欢的图标
- 记得先在文件顶部引入新图标

### 小提示：
- 改完代码保存后页面会自动刷新
- 改坏了不要慌，ctrl+z 撤销就行
- 实在搞不定就去GitHub看看源码或者提issue

## 最后说两句

现在谈恋爱都讲究个仪式感，这个页面就是个不错的选择。虽然是网页，但胜在方便又有心意。关键是不用自己憋半天话，文案都给你写好了，哈哈。

对了，整个项目是开源的，欢迎来玩，说不定你改改就能整出更好的版本～

---
*代码也可以很浪漫* 😉

## 代码解析

### 项目结构详解

```
show_love/
├── app/                        # Next.js 14 的应用目录
│   ├── page.tsx               # 首页组件
│   ├── layout.tsx             # 全局布局组件
│   ├── globals.css            # 全局样式文件
│   └── fonts/                 # 字体文件目录
│       ├── GeistVF.woff      # Geist Sans 字体
│       └── GeistMonoVF.woff  # Geist Mono 字体
│
├── components/                # 组件目录
│   ├── ui/                   # 通用UI组件
│   │   ├── button.tsx       # 按钮组件
│   │   └── icons/          # 图标组件
│   └── dynamic-love-scenes.tsx  # 主场景组件
│
├── lib/                      # 工具函数和配置
│   └── utils.ts             # 通用工具函数
│
├── public/                   # 静态资源目录
│   ├── music/               # 音乐文件
│   │   └── bgm.mp3         # 背景音乐
│   └── images/             # 图片资源
│
├── styles/                   # 样式相关
│   └── tailwind.css         # Tailwind 样式
│
├── package.json             # 项目依赖配置
├── tailwind.config.ts       # Tailwind 配置
├── tsconfig.json           # TypeScript 配置
├── next.config.mjs         # Next.js 配置
└── README.md               # 项目说明文档
```

### 目录说明

#### `/app` 目录
- 这是Next.js 14的核心目录
- `page.tsx`：网站首页的主要内容
- `layout.tsx`：全局布局，包括字体加载
- `globals.css`：全局样式，包括Tailwind的基础样式
- `fonts/`：存放自定义字体文件

#### `/components` 目录
- 存放所有React组件
- `ui/`：放一些通用的小组件
- `dynamic-love-scenes.tsx`：主要的场景切换逻辑

#### `/lib` 目录
- 放一些工具函数和配置
- `utils.ts`：通用的工具函数，比如样式处理

#### `/public` 目录
- 静态文件都放这里
- `music/`：背景音乐文件
- `images/`：图片资源

#### `/styles` 目录
- CSS相关的都在这
- 主要是Tailwind的配置和自定义样式

#### 配置文件
- `package.json`：项目依赖和脚本
- `tailwind.config.ts`：Tailwind的配置
- `tsconfig.json`：TypeScript的配置
- `next.config.mjs`：Next.js的配置

### 核心代码讲解

#### 场景切换这块
```typescript
// 场景数据长这样
const scenes = [
  {
    icon: <Heart />,  // 爱心图标
    background: "from-pink-100 to-red-200",  // 粉色背景
  },
  // 后面还有很多场景...
]

// 自动切换的代码
useEffect(() => {
  // 每5秒换一次场景
  const timer = setInterval(() => {
    setCurrentScene((prev) => (prev + 1) % scenes.length);
  }, 5000);
  
  return () => clearInterval(timer);  // 记得清理定时器
}, []);
```

#### 粒子动画
```typescript
// 粒子配置，可以自己调
const particlesConfig = {
  particles: {
    number: { value: 50 },  // 粒子数量
    color: { value: "#ff0000" },  // 粒子颜色
    shape: { type: "heart" },  // 形状是爱心
    move: {
      speed: 3,  // 移动速度
      random: true  // 随机运动
    }
  }
}
```

#### 文字动画
```typescript
// 文字淡入淡出效果
<motion.div
  initial={{ opacity: 0 }}  // 开始是透明的
  animate={{ opacity: 1 }}  // 慢慢显示
  transition={{ duration: 1 }}  // 动画持续1秒
>
  {loveMessages[currentMessage]}  // 显示当前的告白语
</motion.div>
```

### 实用小技巧

1. 改背景颜色超简单
```typescript
// 在scenes数组里加新场景
{
  icon: <Star />,
  // 用这种格式，from是开始的颜色，to是结束的颜色
  background: "from-blue-100 to-purple-200"  
}
```

2. 加新的告白语
```typescript
const loveMessages = [
  "你是我生命中最美好的礼物",
  "想和你一起看遍世间美景",
  // 想加多少加多少...
  "你自己想写的话",  // ←加在这里
]
```

3. 改音乐
```typescript
// 找到这个标签
<audio
  src="/music/your-music.mp3"  // ←改这里就行
  loop  // 循环播放
  autoPlay  // 自动播放
/>
```

### 踩过的坑

1. 音乐自动播放
- 现在浏览器都禁止自动播放
- 得加个按钮让用户点一下
- 或者监听用户第一次点击事件

2. 动画卡顿
- 粒子数量别整太多，手机受不了
- 建议控制在50-100个之间
- 要是还卡，就把一些动画效果关了

3. 移动端适配
- 记得测试手机上的效果
- 文字大小要适当调整
- 图标也要适应屏幕大小

### 想加新功能？

1. 加个点击特效
```typescript
const handleClick = () => {
  // 可以放烟花效果
  // 或者爱心特效
  // 想加啥加啥
}
```

2. 整个照片墙
```typescript
// 可以搞个数组放照片
const photos = [
  "/photos/1.jpg",
  "/photos/2.jpg",
  // 想放多少放多少
]
```

3. 加个音乐播放器
```typescript
// 可以加个控制按钮
<button onClick={() => setIsPlaying(!isPlaying)}>
  {isPlaying ? "暂停" : "播放"}
</button>
```