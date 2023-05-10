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
						className="aspect-[16/10] md:aspect-auto object-cover"
					/>
				</div>
				<div>
					<img
						src="/slide-2.png"
						className="aspect-[16/10] md:aspect-auto object-cover"
					/>
				</div>
				<div>
					<img
						src="/slide-3.png"
						className="aspect-[16/10] md:aspect-auto object-cover"
					/>
				</div>
			</Carousel>
		</div>
	);
};

export default HeroBanner;
