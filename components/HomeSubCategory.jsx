import Link from "next/link";
import React from "react";

const HomeSubCategory = () => {
	return (
		<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-3 lg:gap-4">
			<div>
				<Link href={"/category/jacquard-fabric"}>
					<img
						src="/homesubcategory/jacquard.jpg"
						width={400}
						height={400}
						alt=""
					/>
				</Link>
			</div>
			<div>
				<Link href={"/category/velvet-fabric"}>
					<img
						src="/homesubcategory/velvet.jpg"
						width={400}
						height={400}
						alt=""
					/>
				</Link>
			</div>
			<div>
				<Link href={"/category/gilded-fabric"}>
					<img
						src="/homesubcategory/gilded.jpg"
						width={400}
						height={400}
						alt=""
					/>
				</Link>
			</div>
			<div>
				<Link href={"/category/embossed-fabric"}>
					<img
						src="/homesubcategory/embossed.jpg"
						width={400}
						height={400}
						alt=""
					/>
				</Link>
			</div>
			<div>
				<Link href={"/category/gauze-fabric"}>
					<img
						src="/homesubcategory/gauze.jpg"
						width={400}
						height={400}
						alt=""
					/>
				</Link>
			</div>
			<div>
				<Link href={"/category/printed-fabric"}>
					<img
						src="/homesubcategory/printed.jpg"
						width={400}
						height={400}
						alt=""
					/>
				</Link>
			</div>
			<div>
				<Link href={"/category/embroidered-fabric"}>
					<img
						src="/homesubcategory/embroidered.jpg"
						width={400}
						height={400}
						alt=""
					/>
				</Link>
			</div>
			<div>
				<Link href={"/category/solid-fabric"}>
					<img
						src="/homesubcategory/solid.jpg"
						width={400}
						height={400}
						alt=""
					/>
				</Link>
			</div>
		</div>
	);
};

export default HomeSubCategory;
