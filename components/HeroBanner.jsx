import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const HeroBanner = () => {
	return (
		<div className="relative text-white text-[20px] w-full ">
			<Carousel
				autoPlay={true}
				infiniteLoop={true}
				showThumbs={false} //缩略图
				showIndicators={true} //显示指标（白色点）
				showStatus={false}
				transitionTime={1000} //过度时间
				swipeable={true}
			>
				<div>
					<img
						src="/slide-1.png"
						className="aspect-[16/10] md:aspect-auto object-cover  md:h-[360px] lg:h-[500px] "
					/>
					<span className="backdrop-opacity-10 backdrop-invert bg-black/25 w-[380px] md:w-[580px] lg:w-[680] absolute top-2 md:top-20 lg:top-36  left-10 mt-8 p-4">
						<h1 className="text-md lg:text-xl">
							China Curtain Fabric Factory Mihaqi Company
						</h1>
						<p className="mt-2 text-xs md:text-sm lg:text-md">
							The factory mainly produces home textile series, curtain fabrics,
							medical curtain fabrics, tablecloth fabrics, and various auxiliary
							materials. The styles involve various series such as jacquard,
							printing, embossing, embroidery, flannel, etc. Welcome to consult,
							you can customize according to the drawings and samples.
						</p>
					</span>
				</div>
				<div className="relative">
					<img
						src="/slide-2.png"
						className="aspect-[16/10] md:aspect-auto object-cover md:h-[360px] lg:h-[500px] "
					/>

					<span className="backdrop-opacity-10 backdrop-invert bg-black/25 w-[380px] md:w-[580px] lg:w-[680] absolute top-2 md:top-20 lg:top-36  left-10 mt-8 p-4">
						<h1 className="text-md lg:text-xl">
							China Curtain Fabric Factory Mihaqi Company
						</h1>
						<hr className="py-1 md:py-2 mt-1 md:mt-2" />
						<p className="mt-1 text-xs md:text-sm lg:text-md">
							The factory mainly produces home textile series, curtain fabrics,
							medical curtain fabrics, tablecloth fabrics, and various auxiliary
							materials. The styles involve various series such as jacquard,
							printing, embossing, embroidery, flannel, etc. Welcome to consult,
							you can customize according to the drawings and samples.
						</p>
					</span>
				</div>

				<div>
					<img
						src="/slide-3.png"
						className="aspect-[16/10] md:aspect-auto object-cover md:h-[360px] lg:h-[500px]"
					/>
					<span className="backdrop-opacity-10 backdrop-invert bg-black/25 w-[380px] md:w-[580px] lg:w-[680] absolute top-2 md:top-20 lg:top-36  left-10 mt-8 p-4">
						<h1 className="text-md lg:text-xl">
							China Curtain Fabric Factory Mihaqi Company
						</h1>
						<hr className="py-1 md:py-2 mt-1 md:mt-2" />
						<p className="mt-1 text-xs md:text-sm lg:text-md">
							The factory mainly produces home textile series, curtain fabrics,
							medical curtain fabrics, tablecloth fabrics, and various auxiliary
							materials. The styles involve various series such as jacquard,
							printing, embossing, embroidery, flannel, etc. Welcome to consult,
							you can customize according to the drawings and samples.
						</p>
					</span>
				</div>
			</Carousel>
		</div>
	);
};

export default HeroBanner;
