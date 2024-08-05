import React from "react";
import { useState, useEffect, useRef } from "react";
import { animate, motion, useAnimation, useMotionValue, useTransform } from "framer-motion";
import "./App.css";
import TypingAnimator from "react-typing-animator";

function App() {
	const draw = {
		hidden: { pathLength: 0, opacity: 0 },
		visible: (i) => {
			const delay = 1 + i * 0.5;
			return {
				pathLength: 1,
				opacity: 1,
				transition: {
					pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
					opacity: { delay, duration: 0.01 },
					repeat: Infinity,
					repeatDelay: 0,
					duration: 2,
				},
			};
		},
	};

	const container = {
		hidden: { opacity: 1, scale: 0 },
		visible: {
			opacity: 1,
			scale: 1,
			transition: {
				delayChildren: 0.3,
				staggerChildren: 0.2,
			},
		},
	};

	const item = {
		hidden: { y: 0, opacity: 0 },
		visible: {
			y: 0,
			opacity: [0, 1, 1, 0],
			times: [0, 0.25, 0.5, 1],
			transition: {
				repeat: Infinity,
				repeatDelay: 1,
				duration: 2,
			},
		},
	};

	const count = useMotionValue(0);
	const rounded = useTransform(count, Math.round);
	useEffect(() => {
		const animation = animate(count, 100, { duration: 3 });
		return animation.stop;
	}, []);

	const constraintsRef = useRef(null);

	const [time, setTime] = useState(new Date());

	useEffect(() => {
		const timerID = setInterval(() => tick(), 1000);
		return () => clearInterval(timerID);
	}, []);

	const tick = () => {
		setTime(new Date());
	};

	const hours = time.getHours().toString().padStart(2, "0");
	const minutes = time.getMinutes().toString().padStart(2, "0");
	const seconds = time.getSeconds().toString().padStart(2, "0");

	const [isOn, setIsOn] = useState(false);

	const toggleSwitch = () => setIsOn(!isOn);

	const spring = {
		type: "spring",
		stiffness: 700,
		damping: 30,
	};

	return (
		<div className="animation-project">
			<h1>Animation Project</h1>
			<div className="animation-project-bar"></div>
			<div className="animation-project-box">
				<motion.div
					className="box"
					animate={{
						scale: [1, 1.2, 1.2, 1, 1],
						rotate: [0, 0, 180, 180, 0],
						borderRadius: ["0%", "0%", "50%", "50%", "0%"],
					}}
					transition={{
						duration: 2,
						ease: "easeInOut",
						times: [0, 0.2, 0.5, 0.8, 1],
						repeat: Infinity,
						repeatDelay: 1,
					}}
				/>
				<motion.div
					className="box2"
					animate={{
						scale: [1, 1.2, 1],
					}}
					transition={{
						duration: 1,
						ease: "easeInOut",
						repeat: Infinity,
						times: [0, 0.2, 0.5],
						repeatDelay: 0.5,
					}}
				/>
				<motion.ul className="box3" variants={container} initial="hidden" animate="visible">
					{[0, 1, 2, 3].map((index) => (
						<motion.li key={index} className="item" variants={item} />
					))}
				</motion.ul>
				<motion.div className="box4">
					<motion.div
						className="sub-box4"
						animate={{
							left: [0, 60, 60, 0, 0],
							bottom: [60, 60, 0, 0, 60],
							times: [0, 1, 2, 3, 4],
						}}
						transition={{
							repeat: Infinity,
							repeatDelay: 0,
							ease: "easeInOut",
							duration: 2,
						}}
					></motion.div>
				</motion.div>
				<motion.div className="box5">
					<motion.svg width="100" height="100" viewBox="0 0 100 100" initial="hidden" animate="visible">
						<motion.rect
							width="100"
							height="100"
							x="0"
							y="0"
							rx="20"
							stroke="#fff"
							animate={{
								pathLength: [0, 1],
								times: [0, 10],
								ease: "easeInOut",
							}}
							transition={{
								type: "spring",
								duration: 1.5,
								bounce: 0,
								repeat: Infinity,
								repeatDelay: 1,
							}}
						></motion.rect>
					</motion.svg>
				</motion.div>
				<motion.div className="box6">
					<motion.svg width="100" height="100" viewBox="0 0 100 100" initial="hidden" animate="visible">
						<motion.rect
							width="100"
							height="100"
							x="0"
							y="0"
							rx="50"
							stroke="#fff"
							animate={{
								pathLength: [0, 1],
								times: [0, 10],
								ease: "easeInOut",
							}}
							transition={{
								type: "spring",
								duration: 30,
								bounce: 0,
								repeat: Infinity,
								repeatDelay: 0.1,
							}}
						></motion.rect>
					</motion.svg>
				</motion.div>
				<div className="box7">
					<motion.h3>{rounded}</motion.h3>
				</div>
				<div className="box8">
					<motion.div
						className="div1"
						animate={{
							rotate: [0, 0, 45, 45, 0],
							y: [0, 0, 25, 25, 0],
						}}
						transition={{
							duration: 3,
							ease: "easeInOut",
							times: [0, 0.25, 0.5, 0.75, 1],
							repeat: Infinity,
							repeatDelay: 1,
						}}
					></motion.div>
					<motion.div
						className="div2"
						animate={{
							rotate: [0, 0, -45, -45, 0],
							y: [0, 0, -25, -25, 0],
						}}
						transition={{
							duration: 3,
							ease: "easeInOut",
							times: [0, 0.25, 0.5, 0.75, 1],
							repeat: Infinity,
							repeatDelay: 1,
						}}
					></motion.div>
				</div>
				<div className="box9">
					<motion.div
						className="circle1"
						animate={{
							x: [0, 60, 60, 0, 0],
							y: [0, 0, 60, 60, 0],
						}}
						transition={{
							duration: 3,
							ease: "easeInOut",
							times: [0, 0.25, 0.5, 0.75, 1],
							repeat: Infinity,
							repeatDelay: 0,
						}}
					></motion.div>
					<motion.div
						className="circle1"
						animate={{
							x: [0, 60, 0],
							y: [0, 60, 0],
						}}
						transition={{
							duration: 2,
							ease: "easeInOut",
							times: [0, 0.5, 1],
							repeat: Infinity,
							repeatDelay: 0,
						}}
					></motion.div>
				</div>
				<div className="box10">
					<motion.p>
						E
						<motion.span
							animate={{
								opacity: [1, 1, 0.4, 0.4, 1, 1, 0.4, 0.4],
							}}
							transition={{
								duration: 2,
								ease: "easeInOut",
								times: [0, 0.3, 0.31, 0.4, 0.41, 0.91, 0.91, 1],
								repeat: Infinity,
								repeatDelay: 0,
							}}
						>
							r
						</motion.span>
						ror
					</motion.p>
					<motion.p>
						<motion.span
							animate={{
								opacity: [1, 1, 0.4, 0.4, 1, 1, 0.4, 0.4],
							}}
							transition={{
								duration: 3,
								ease: "easeInOut",
								times: [0, 0.4, 0.41, 0.5, 0.51, 0.9, 0.91, 1],
								repeat: Infinity,
								repeatDelay: 0,
							}}
						>
							4
						</motion.span>
						0
						<motion.span
							animate={{
								opacity: [1, 1, 0.4, 0.4, 1, 1, 0.4, 0.4],
							}}
							transition={{
								duration: 4,
								ease: "easeInOut",
								times: [0, 0.3, 0.31, 0.4, 0.41, 0.91, 0.91, 1],
								repeat: Infinity,
								repeatDelay: 0,
							}}
						>
							4
						</motion.span>
					</motion.p>
				</div>
				<div className="box11">
					<motion.div className="out-box">
						<motion.div
							className="inner-box"
							animate={{
								width: [0, 300],
							}}
							transition={{
								duration: 4,
								repeat: Infinity,
								repeatDelay: 2,
							}}
						></motion.div>
					</motion.div>
				</div>
				<div className="box12">
					<TypingAnimator
						textArray={["Hello I'm Jeong In", "Front end developer"]}
						cursorColor="#fff"
						textColor="#fff"
						fontSize="30px"
						loop
						typingSpeed={60}
						delaySpeed={500}
						backspace
						height="100px"
					/>
				</div>
				<div className="box13">
					<motion.div className="drag-area" ref={constraintsRef} />
					<motion.div drag dragConstraints={constraintsRef} />
				</div>
				<div className="box14">
					<motion.div
						className="hour"
						animate={{
							rotate: [0, 360],
							transformOrigin: "left center",
						}}
						transition={{
							duration: 5,
							times: [0, 1],
							ease: "linear",
							repeat: Infinity,
							repeatDelay: 0,
						}}
					></motion.div>
					<motion.div
						className="m"
						animate={{
							rotate: [0, 360],
							transformOrigin: "left center",
						}}
						transition={{
							duration: 10,
							times: [0, 1],
							ease: "linear",
							repeat: Infinity,
							repeatDelay: 0,
						}}
					></motion.div>
				</div>
				<div className="box15">
					<div className="out">
						<p>
							{hours}
							<motion.span
								animate={{
									opacity: [1, 1, 0, 0],
								}}
								transition={{
									times: [0, 0.5, 0.501, 1],
									repeat: Infinity,
									repeatDelay: 0,
									duration: 1,
								}}
							>
								:
							</motion.span>
							{minutes}
						</p>
						<div className="btn-out">
							<div className="btn"></div>
							<div className="btn"></div>
							<div className="btn"></div>
						</div>
					</div>
				</div>
				<div className="box17">
					<motion.div
						className="dot"
						animate={{
							opacity: [1, 0, 1, 1, 1],
						}}
						transition={{
							times: [0, 0.5, 0.7, 1],
							repeat: Infinity,
							repeatDelay: 0.3,
							duration: 1,
						}}
					></motion.div>
					<motion.div
						className="dot"
						animate={{
							opacity: [1, 1, 0, 1, 1],
						}}
						transition={{
							times: [0, 0.5, 0.7, 1],
							repeat: Infinity,
							repeatDelay: 0.3,
							duration: 1,
						}}
					></motion.div>
					<motion.div
						className="dot"
						animate={{
							opacity: [1, 1, 1, 0, 1],
						}}
						transition={{
							times: [0, 0.5, 0.7, 1],
							repeat: Infinity,
							repeatDelay: 0.3,
							duration: 1,
						}}
					></motion.div>
				</div>
				<div className="box18">
					<motion.h3
						animate={{
							color: ["#fff", "#009900", "#fff"],
						}}
						transition={{
							times: [0, 0.5, 1],
							repeat: Infinity,
							repeatDelay: 0,
							duration: 2.5,
						}}
					>
						Ed Sheeran - Thinking Out Loud
					</motion.h3>
				</div>
				<div className="box19">
					<div className="switch" data-isOn={isOn} onClick={toggleSwitch}>
						<motion.div className="handle" layout transition={spring} />
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
