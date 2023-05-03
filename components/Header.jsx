"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { MdOutlineClose } from "react-icons/md";
import Image from "next/image";

const Header = () => {
	const [mobileMenu, setMobileMenu] = useState(false);
	const [showMenu, setShowMenu] = useState(false);
	return (
		<header className="bg-white flex items-center justify-between w-full z-20 sticky shadow-md ">
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.5 }}
			>
				<div>
					<img
						className="sml:w-[126px] sml:h-[40px] md:w-[146px] md:h-[40px] lg:w-[180px] lg:h-[60px]"
						src={"/logo.png"}
						width={180}
						height={60}
						alt="logo"
					/>
				</div>
			</motion.div>
			<div className="py-2 hidden mdl:flex">
				<ul className="flex justify-center items-center gap-16">
					<Link href={"/"}>
						<motion.li
							initial={{ y: -10, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							transition={{ duration: 0.1 }}
							className="hover:text-teal-500 cursor-pointer duration-300 py-4"
						>
							Home
						</motion.li>
					</Link>
					<Link href={"/"}>
						<motion.li
							initial={{ y: -10, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							transition={{ duration: 0.1, delay: 0.2 }}
							className="hover:text-teal-500 cursor-pointer duration-300 py-4"
						>
							About Us
						</motion.li>
					</Link>
					<Link href={"/"}>
						<motion.li
							initial={{ y: -10, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							transition={{ duration: 0.1, delay: 0.3 }}
							className="hover:text-teal-500 cursor-pointer duration-300 py-4"
						>
							Product
						</motion.li>
					</Link>
					<Link href={"/"}>
						<motion.li
							initial={{ y: -10, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							transition={{ duration: 0.1, delay: 0.4 }}
							className="hover:text-teal-500 cursor-pointer duration-300 py-4"
						>
							Contact
						</motion.li>
					</Link>
				</ul>
			</div>

			{/* mobile menu start */}
			<div className=" relative bg-white py-8">
				<div
					onClick={() => setShowMenu(true)}
					className="w-7 h-6 flex flex-col justify-between mdl:hidden 
      items-center  
       text-4xl text-teal-400 cursor-pointer 
      overflow-hidden group absolute top-5 right-4"
				>
					<span
						className="w-full h-[2px] bg-teal-500  inline-flex transform 
        group-hover:translate-x-2
        transition-all ease-in-out duration-300"
					></span>
					<span
						className="w-full h-[2px] bg-teal-500  inline-flex transform
          translate-x-3 group-hover:translate-x-0
        transition-all ease-in-out duration-300"
					></span>
					<span
						className="w-full h-[2px] bg-teal-500  inline-flex transform
          translate-x-1 group-hover:translate-x-3
        transition-all ease-in-out duration-300"
					></span>
				</div>
			</div>
			{showMenu && (
				<div className="absolute mdl:hidden top-0 right-0 w-full  bg-black bg-opacity-50 flex flex-col items-end">
					<motion.div
						initial={{ x: 20, opacity: 0 }}
						animate={{ x: 0, opacity: 1 }}
						transition={{ duration: 0.1 }}
						className="w-[80%] h-screen  bg-[#f0f2f5] flex flex-col items-center px-4 py-10 relative  "
					>
						<MdOutlineClose
							className=" text-4xl text-teal-400 cursor-pointer hover:text-red-500 absolute top-4 right-4"
							onClick={() => setShowMenu(false)}
						/>
						<div className="py-16 ">
							<ul className="flex flex-col justify-center items-center gap-16">
								<Link href={"/"}>
									<motion.li
										initial={{ x: 20, opacity: 0 }}
										animate={{ x: 0, opacity: 1 }}
										transition={{ duration: 0.1 }}
										className="hover:text-teal-500 cursor-pointer duration-300"
									>
										Home
									</motion.li>
								</Link>
								<Link href={"/"}>
									<motion.li
										initial={{ x: 20, opacity: 0 }}
										animate={{ x: 0, opacity: 1 }}
										transition={{ duration: 0.2, delay: 0.2 }}
										className="hover:text-teal-500 cursor-pointer duration-300"
									>
										Aubot Us
									</motion.li>
								</Link>
								<Link href={"/"}>
									<motion.li
										initial={{ x: 20, opacity: 0 }}
										animate={{ x: 0, opacity: 1 }}
										transition={{ duration: 0.3, delay: 0.3 }}
										className="hover:text-teal-500 cursor-pointer duration-300"
									>
										Product
									</motion.li>
								</Link>
								<Link href={"/catact"}>
									<motion.li
										initial={{ x: 20, opacity: 0 }}
										animate={{ x: 0, opacity: 1 }}
										transition={{ duration: 0.4, delay: 0.4 }}
										className="hover:text-teal-500 cursor-pointer duration-300"
									>
										Catact
									</motion.li>
								</Link>
							</ul>
						</div>
					</motion.div>
				</div>
			)}

			{/* {mobileMenu ? (
        <VscChromeClose
          className="text-[16px]"
          onClick={() => setShowMenu(false)}
        />
      ) : (
        <BiMenuAltRight
          className="text-[20px]"
          onClick={() => setShowMenu(true)}
        />
      )} */}
			{/* mobile menu end */}
		</header>
	);
};

export default Header;
