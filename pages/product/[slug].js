import ProductDetailsCarousel from "@/components/ProductDetailsCarousel";
import RelatedProducts from "@/components/RelatedProducts";
import Wrapper from "@/components/Wrapper";
import { getDiscountedPricePercentage } from "@/utils/helper";
import React from "react";
import { fetchDataFromApi } from "@/utils/api";
import { useRouter } from "next/router";

const ProductDetails = ({ product, products, whatsapp }) => {
	const router = useRouter();
	const p = product?.data?.[0]?.attributes;
	return (
		<div className="w-full md:py-20">
			<Wrapper>
				<div className="flex flex-col lg:flex-row md:px-10 md:gap-[50px] lg:gap-[100px]">
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
						<div className="text-xs md:text-md  mb-5">{p.subtitle}</div>

						{/* Size Start */}
						<div className="grid grid-cols-3 gap-2 py-8">
							<button
								className="btn border py-4 text-lg text-white bg-green-500 rounded-md"
								onClick={() =>
									router.push(
										`https://wa.me/212${whatsapp}?text=${product.title}`,
									)
								}
							>
								whatsapp
							</button>
						</div>
						{/* Size End */}
					</div>
					{/* right colum end*/}
				</div>
				{/* <RelatedProducts /> */}
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
