/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	eslint: {
		ignoreDuringBuilds: true,
	},
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "res.cloudinary.com",
				// You can add these as well
				// port: '',
				// pathname: 'arifscloud/image/upload/**',
			},
		],
	},
};

module.exports = nextConfig;
