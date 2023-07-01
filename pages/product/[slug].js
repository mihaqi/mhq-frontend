import ProductDetailsCarousel from "@/components/ProductDetailsCarousel";
import RelatedProducts from "@/components/RelatedProducts";
import Wrapper from "@/components/Wrapper";
import { getDiscountedPricePercentage } from "@/utils/helper";
import React from "react";
import { fetchDataFromApi } from "@/utils/api";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import { AiOutlineClose } from "react-icons/ai";
import { MdMarkEmailUnread } from "react-icons/md";
import { RiWhatsappFill } from "react-icons/ri";
import { useRef, useState } from "react";
import axios from "axios";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductDetails = ({ product, products, whatsapp }) => {
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const [showForm, setShowForm] = useState(false);
	const router = useRouter();
	const formRef = useRef();
	const handleCloseForm = () => setShowForm(false);
	const handleEmail = (e) => {
		e.preventDefault();

		// service id, template id, public key
		emailjs
			.sendForm(
				"service_r1y667c",
				"template_xawu22j",
				formRef.current,
				"IchOEgLgYWg5ok6ar",
			)
			.then(
				() => {
					toast.success(
						"Email has been sent succcessfully to your email " + email,
					);
					handleCloseForm();
				},
				(err) => {
					toast.error(err.text);
				},
			);
	};
	const p = product?.data?.[0]?.attributes;
	return (
		<div className="w-full md:py-20 relative">
			<Wrapper>
				<div className="flex flex-col lg:flex-row md:px-10 md:gap-[50px] lg:gap-[100px] ">
					{/* left colum start */}
					<div className="w-full md:w-auto flex-[1.5] max-[500px] lg:max-w-full mx-auto lg:mx-0">
						<ProductDetailsCarousel images={p.image.data} />
					</div>

					{/* left colum end */}

					{/* right colum start*/}
					<div className="flex-[1] py-3">
						<div></div>
						{/* product title */}
						<div className="text-sm md:text-xl lg:text-2xl font-semibold mb-2">
							{p.name}
						</div>

						{/* product subtitle */}
						<div className="text-xs md:text-md text-gray-400  mb-5">
							{p.subtitle}
						</div>
						{/* product desc */}
						{/* product Weight(Grams) */}
						<div className="text-xs md:text-md   mb-2">Weight(GRAMS):</div>
						{/* product height */}
						<div className="text-xs md:text-md   mb-2">
							Composition:{p.composition}
						</div>
						<div className="text-xs md:text-md   mb-2">
							Goods number:{p.goodsnumber}
						</div>
						{/* product desc */}
						<div className="text-xs md:text-md mt-2 mb-5">{p.desc}</div>

						{/* Size Start */}
						<div className="flex justify-between items-center gap-3">
							<ul>
								<li>{p.red}</li>
								<li>{p.blue}</li>
								<li>{p.yellow}</li>
							</ul>
						</div>
						{/* Size end */}

						{/*Email whatsapp contact start */}
						<div className="flex justify-center items-center gap-4">
							<button
								className="py-4 bg-amber-500 p-4 text-white shadow-md rounded-md flex justify-center items-center gap-2"
								onClick={() => setShowForm(true)}
							>
								<p>
									<MdMarkEmailUnread className="w-6 h-6" />
								</p>
								<p>Email Now</p>
							</button>
							<Link
								href={"https://api.whatsapp.com/send?phone=18758887700"}
								target={"_blank"}
								className="py-4 bg-green-500 p-4 text-white shadow-md rounded-md flex justify-center items-center gap-2"
							>
								<p>
									<RiWhatsappFill className="w-6 h-6" />
								</p>
								<p>Whatsapp</p>
							</Link>
						</div>
						{/*Email whatsapp contact end*/}
					</div>
					{/* right colum end*/}
				</div>
				{/* <RelatedProducts /> */}
				{showForm && (
					<div
						className="absolute m-auto top-0 inset-x-0 left-0 bottom-9 w-full md:w-[480px] h-full flex justify-center items-center z-10"
						onClick={handleCloseForm}
					>
						<div
							className="flex flex-col justify-center items-center bg-white shadow-md rounded-md relative w-full h-[680px]"
							onClick={(e) => e.stopPropagation()}
						>
							<h2 className="text-2xl py-4">Email me</h2>
							<form
								className="flex flex-col justify-center items-center w-full  gap-12 p-2"
								onSubmit={handleEmail}
								ref={formRef}
							>
								<input
									className="w-full py-4 border border-gray-500 p-2"
									type="email"
									placeholder="Your Email"
									name="from_name"
									onChange={(e) => setEmail(e.target.value)}
								/>
								<textarea
									className="w-full py-4 border border-gray-500 p-2"
									type="text"
									placeholder="Message..."
									name="message"
									onChange={(e) => setMessage(e.target.value)}
								/>
								<button
									onClick={() => setShowForm(true)}
									className="w-full py-2 bg-lime-400 text-white"
								>
									Send
								</button>
							</form>
							<AiOutlineClose
								onClick={handleCloseForm}
								className="absolute top-8 right-8 w-6 h-6 text-red-600"
							/>
							<div className=""></div>
						</div>
					</div>
				)}
			</Wrapper>
		</div>
	);
};

export default ProductDetails;

export async function getStaticPaths() {
	const products = await fetchDataFromApi("/api/products?populate=*");
	const paths = products?.data?.map((p) => ({
		params: {
			slug: p.attributes.slug,
		},
	}));

	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps({ params: { slug } }) {
	const product = await fetchDataFromApi(
		`/api/products?populate=*&filters[slug][$eq]=${slug}`,
	);
	const products = await fetchDataFromApi(
		`/api/products?populate=*&[filters][slug][$ne]=${slug}`,
	);

	return {
		props: {
			product,
			products,
		},
	};
}
