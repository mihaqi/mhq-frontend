import React, { useState, useEffect } from "react";
import Wrapper from "../Wrapper";
import Menu from "./Menu";
import Link from "next/link";
import { fetchDataFromApi } from "@/utils/api";
import MenuMobile from "./MenuMobile";

const Header = () => {
	const [mobileMenu, setMobileMenu] = useState(false);
	const [showCatMenu, setShowCatMenu] = useState(false);
	const [show, setShow] = useState("translate-y-0");
	const [lastScrollY, setLastScrollY] = useState(0);
	const [categories, setCategories] = useState(null);

	const controlNavbar = () => {
		if (window.scrollY > 200) {
			if (window.scrollY > lastScrollY && !mobileMenu) {
				setShow("translate-y-[20px]");
			} else {
				setShow("shadow-md");
			}
		} else {
			setShow("translate-y-0");
		}
		setLastScrollY(window.scrollY);
	};

	useEffect(() => {
		window.addEventListener("scroll", controlNavbar);
		return () => {
			window.removeEventListener("scroll", controlNavbar);
		};
	}, [lastScrollY]);

	useEffect(() => {
		fetchCategories();
	}, []);

	const fetchCategories = async () => {
		const { data } = await fetchDataFromApi(`/api/categories?populate=*`);
		setCategories(data);
	};

	return (
		<header
			className={`w-full h-[50px] md:h-[80px] bg-white flex 
			items-center justify-between z-20 sticky 
			top-0 transition-transform duration-300 ${show}`}
		>
			<Wrapper className="h-[60px] flex justify-between items-center">
				<Link href="/">
					<img
						src="/logo.png"
						className="w-[124px] h-[28px] lg:w-[160px] lg:h-[36px]"
						alt="Mihaqi logo"
					/>
				</Link>
				<Menu
					showCatMenu={showCatMenu}
					setShowCatMenu={setShowCatMenu}
					categories={categories}
				/>
				<MenuMobile
					showCatMenu={showCatMenu}
					setShowCatMenu={setShowCatMenu}
					setMobileMenu={setMobileMenu}
					categories={categories}
				/>
			</Wrapper>
		</header>
	);
};

export default Header;
