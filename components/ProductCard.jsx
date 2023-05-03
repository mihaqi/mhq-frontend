import React from "react";
import Link from "next/link";
import Image from "next/image";

const ProductCard = ({ data: { attributes: p, id } }) => {
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
						{p.name}
					</h2>
				</div>
			</Link>
		</div>
	);
};

export default ProductCard;
