import React from "react";
import Image from "next/image";

//背景图像视差效果，类样式在tailwind.config.js 里定义图像类：bg-sea1, bg-sea2
const Contact = () => {
	return (
		<div className="container mx-auto mt-4 ">
			<span className="text-left text-sm md:text-md md:text-center text-md py-4 flex md:justify-center items-center p-2 ">
				With over 37 years of experience in the curtain industry, we, Mihaqi
				Textiles, have great aspirations for the future. If you have any
				questions or requirements about our products and services, please feel
				free to contact us at any time.
			</span>
			<hr className="py-2 md:py-6 mt-2 md:mt-2" />
			<div className="flex flex-col md:flex-row gap-4">
				{/* left start */}
				<div className=" w-full  flex flex-col text-left gap-6 p-2 text-sm md:text-md md:mt-10 ">
					<span>Mihaqi Marketing Department</span>
					<span>Phone number: (+86) 18758887700 /</span>
					<span>
						Company address: North China Industrial Park, Keqiao District,
						Shaoxing, Zhejiang Province
					</span>
					<span>E-mail: mihaqi.cn@gmail.com</span>
				</div>
				{/* left end */}
				{/* right start */}
				<div className="w-[480px] h-[480px] overflow-hidden">
					<Image
						src="/office.jpg"
						width={640}
						height={480}
						alt="office"
					/>
				</div>
				{/* right end */}
			</div>
		</div>
	);
};

export default Contact;
