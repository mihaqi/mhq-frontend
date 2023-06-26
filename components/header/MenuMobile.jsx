"use client";
import Link from "next/link";

import { motion } from "framer-motion";
import { MdOutlineClose } from "react-icons/md";
import Image from "next/image";
import * as React from "react";

import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";

import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";

import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

const MenuMobile = ({ showCatMenu, setShowCatMenu, categories }) => {
	const [open, setOpen] = React.useState(false);

	const handleClick = () => {
		setOpen(!open);
	};

	return (
		<React.Fragment>
			{/* mobile menu start */}
			<div className=" relative bg-white py-8">
				<div
					onClick={() => setShowCatMenu(true)}
					className="w-6 h-6 flex flex-col justify-between mdl:hidden 
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
			{showCatMenu && (
				<div className="absolute mdl:hidden top-0 right-0 w-full  bg-black bg-opacity-50 flex flex-col items-end">
					<motion.div
						initial={{ x: 20, opacity: 0 }}
						animate={{ x: 0, opacity: 1 }}
						transition={{ duration: 0.1 }}
						className="w-[80%] h-screen  bg-[#f0f2f5] flex flex-col items-center px-4 py-4 relative  "
					>
						<MdOutlineClose
							className=" text-4xl text-teal-400 cursor-pointer hover:text-red-500 absolute top-2 right-4"
							onClick={() => setShowCatMenu(false)}
						/>
						<div className="py-16 ">
							<ul className="flex flex-col justify-center items-center gap-4">
								<Link href={"/"}>
									<motion.li
										initial={{ x: 20, opacity: 0 }}
										animate={{ x: 0, opacity: 1 }}
										transition={{ duration: 0.1 }}
										className="hover:text-teal-500 cursor-pointer duration-300"
										onClick={() => setShowCatMenu(false)}
									>
										Home
									</motion.li>
								</Link>
								<Link href={"/about"}>
									<motion.li
										initial={{ x: 20, opacity: 0 }}
										animate={{ x: 0, opacity: 1 }}
										transition={{ duration: 0.2, delay: 0.2 }}
										className="hover:text-teal-500 cursor-pointer duration-300"
										onClick={() => setShowCatMenu(false)}
									>
										Aubot Us
									</motion.li>
								</Link>

								<motion.li
									initial={{ x: 20, opacity: 0 }}
									animate={{ x: 0, opacity: 1 }}
									transition={{ duration: 0.3, delay: 0.3 }}
									className="hover:text-teal-500 cursor-pointer duration-300 flex flex-col justify-center gap-1"
								>
									<List sx={{ m: -2 }}>
										<ListItemButton onClick={handleClick}>
											<ListItemText primary="Product" />
											{open ? <ExpandLess /> : <ExpandMore />}
										</ListItemButton>
										<Collapse
											in={open}
											timeout="auto"
											unmountOnExit
										>
											{categories?.map(({ attributes: c, id }) => {
												return (
													<Link
														key={id}
														href={`/category/${c.slug}`}
													>
														<List
															component="div"
															disablePadding
														>
															<ListItemButton sx={{ pl: 4 }}>
																<ListItemText
																	primary={c.name}
																	onClick={() => setShowCatMenu(false)}
																/>
															</ListItemButton>
														</List>
													</Link>
												);
											})}
										</Collapse>
									</List>
								</motion.li>

								<Link href={"/contact"}>
									<motion.li
										initial={{ x: 20, opacity: 0 }}
										animate={{ x: 0, opacity: 1 }}
										transition={{ duration: 0.4, delay: 0.4 }}
										className="hover:text-teal-500 cursor-pointer duration-300"
										onClick={() => setShowCatMenu(false)}
									>
										Contact
									</motion.li>
								</Link>
							</ul>
						</div>
					</motion.div>
				</div>
			)}
		</React.Fragment>
	);
};

export default MenuMobile;
