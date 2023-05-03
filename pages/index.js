import HeroBanner from "@/components/HeroBanner";
import ProductCard from "@/components/ProductCard";
import Wrapper from "@/components/Wrapper";
import { fetchDataFromApi } from "@/utils/api";

export default function Home({ products }) {
	return (
		<>
			<main>
				<Wrapper>
					{/* products grid start */}
					<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-3 lg:gap-4 my-14  md:px-0">
						{products?.data?.map((product) => (
							<ProductCard
								key={product?.id}
								data={product}
							/>
						))}
					</div>
					{/* products grid end */}
				</Wrapper>
			</main>
		</>
	);
}

export async function getStaticProps() {
	const products = await fetchDataFromApi("/api/products?populate=*");

	return {
		props: { products },
	};
}
