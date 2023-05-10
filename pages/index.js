import HeroBanner from "@/components/HeroBanner";
import ProductCard from "@/components/ProductCard";
import Wrapper from "@/components/Wrapper";
import { fetchDataFromApi } from "@/utils/api";

export default function Home({ products }) {
	return (
		<>
			<main>
				<Wrapper>
					<HeroBanner />
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
				<div className="min-h-screen hidden md:flex justify-center items-center bg-sea1 bg-fixed bg-cover bg-no-repeat w-[1920px] h-[480px] "></div>
				<div className="container mx-auto  flex flex-col justify-center  bg-white p-10">
					<span className="py-4">
						Mihaqi Textile adopts a "5-s management" approach, which not only
						continuously strengthens the quality of its excellent team, but also
						continuously improves the quality of the company's on-site
						environment to maintain the ability to deliver the highest quality
						products and services to customers at all times. Our professional
						team is dedicated to producing and providing the highest quality
						environmentally friendly textiles to renowned curtain brands around
						the world.
					</span>
					<hr className="mt-8" />
					<span className="flex justify-center">
						<img
							src="/icon/certifications.png"
							alt=""
						/>
					</span>
				</div>

				<div className="min-h-screen hidden md:flex justify-center items-center bg-sea2 bg-fixed bg-cover bg-no-repeat w-[1920px] h-[480px] "></div>
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
