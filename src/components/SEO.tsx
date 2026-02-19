import { NextSeo, NextSeoProps } from "next-seo";

interface SEOProps extends NextSeoProps {}

export function SEO(props: SEOProps) {
	const title = `${
		props.title != null ? `${props.title} | ` : ""
	} Dev - Lee Mijin`;

	return <NextSeo {...props} title={title} />;
}

export function getCanonicalAbsolutePath(relativePath: string) {
	const isStartWithSlash = relativePath.startsWith("/");

	return `https://dev-leemj.github.io${
		isStartWithSlash ? relativePath : `/${relativePath}`
	}`;
}
