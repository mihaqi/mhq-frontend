import React from "react";
import Link from "next/link";
import Image from "next/image";

const ProductFilter = ({ data: { attributes: p, id } }) => {
	return (
		<div className="group rounded-md shadow-xl">
			<Link href={`/product/${p.slug}`}>
				<div className="transform overflow-hidden cursor-pointer">
					<Image
						className="w-full h-full object-cover group-hover:scale-110 duration-500"
						src={p.thumbnail?.data?.attributes.url || "/p1.png"}
						width={640}
						height={640}
						alt={p.name}
					/>
				</div>
				<div className="p-4 text-black/[0.9]">
					<h2 className="text-sm md:text-md lg:text-lg font-medium">
						{p.name.length > 10 ? `${p.name.slice(10, 60)}` : p.name}
					</h2>
				</div>
			</Link>
		</div>
	);
};

export default ProductFilter;

export async function getStaticPaths() {
	const category = await fetchDataFromApi("/api/categories?populate=*");
	const paths = category.data.map((c) => ({
		params: {
			slug: c.attributes.slug,
		},
	}));

	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps({ params: { slug } }) {
	const category = await fetchDataFromApi(
		`/api/categories?filters[slug][$eq]=${slug}`,
	);
	const products = await fetchDataFromApi(
		`/api/products?populate=*&[filters][category][slug][$eq]=${slug}&pagination[page]=2&pagination[pageSize]=${maxResult}`,
	);

	return {
		props: {
			category,
			products,
			slug,
		},
	};
}
