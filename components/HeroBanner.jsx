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
						className="aspect-[16/10] md:aspect-auto object-cover w-[320px] sm:w-[390px]   md:h-[360px] lg:h-[500px] "
					/>
					<span className="backdrop-opacity-10 backdrop-invert bg-black/25 flex flex-col justify-center items-center text-center md:w-[580px] lg:w-[680] absolute top-1 sm:top-7 md:top-20 lg:top-36  left-0 md:left-10 sm:mt-2 md:mt-8 p-2 md:p-2">
						<h1 className="text-sm sm:text-md md:text-md lg:text-xl">
							China Curtain Fabric Factory
						</h1>

						<p className="mt-0 md:mt-1 text-xs sm:text-xs md:text-sm lg:text-md">
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
						className="aspect-[16/10] md:aspect-auto object-cover w-[320px] sm:w-[390px] md:h-[360px] lg:h-[500px] "
					/>

					<span className="backdrop-opacity-10 backdrop-invert bg-black/25 flex flex-col justify-center items-center text-center md:w-[580px] lg:w-[680] absolute top-1 sm:top-7 md:top-20 lg:top-36  left-0 md:left-10 sm:mt-2 md:mt-8 p-2 md:p-2">
						<h1 className="text-sm sm:text-md md:text-md lg:text-xl">
							China Curtain Fabric Factory
						</h1>

						<p className="mt-0 md:mt-1 text-xs sm:text-xs md:text-sm lg:text-md">
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
						className="aspect-[16/10] md:aspect-auto object-cover md:w-full md:h-[360px] lg:h-[500px]"
					/>
					<span className="backdrop-opacity-10 backdrop-invert bg-black/25 flex flex-col justify-center items-center text-center md:w-[580px] lg:w-[680] absolute top-1 sm:top-7 md:top-20 lg:top-36  left-0 md:left-10 sm:mt-2 md:mt-8 p-2 md:p-2">
						<h1 className="text-sm sm:text-md md:text-md lg:text-xl">
							China Curtain Fabric Factory
						</h1>

						<p className="mt-0 md:mt-1 text-xs sm:text-xs md:text-sm lg:text-md">
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
