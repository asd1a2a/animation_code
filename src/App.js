import React from "react";
import { useState, useEffect } from "react";
import { animate, motion, useAnimation, useMotionValue, useTransform } from "framer-motion";
import "./App.css";

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
			</div>
		</div>
	);
}

export default App;
