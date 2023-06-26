import Link from "next/link";
import React from "react";
import { FaFacebookF, FaTwitter, FaYoutube, FaWhatsapp } from "react-icons/fa";

import Wrapper from "./Wrapper";

const Footer = () => {
	return (
		<footer className="bg-black text-white pt-4 pb-3">
			<Wrapper className="flex justify-between items-center flex-col md:flex-row gap-[50px] md:gap-0 py-4">
				<div className="text-[12px] text-white/[0.5] hover:text-white cursor-pointer text-center md:text-left">
					© 2023 Mihaqi, Inc. All Rights Reserved
				</div>

				{/* RIGHT END */}

				<div className="flex gap-4 justify-center md:justify-start">
					<Link
						href={"https://facebook.com"}
						className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer"
					>
						<FaTwitter size={20} />
					</Link>

					<Link
						href={"https://api.whatsapp.com/send?phone=18658584885"}
						className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer"
					>
						<FaWhatsapp size={20} />
					</Link>
				</div>
			</Wrapper>
		</footer>
	);
};

export default Footer;
