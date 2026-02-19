import { DefaultSeo, DefaultSeoProps } from "next-seo";

const DEFAULT_SEO: DefaultSeoProps = {
	title: "Dev - Lee Mijin",
	description: "기록 저장소",
	canonical: "https://dev-leemj.github.io",
	openGraph: {
		type: "website",
		locale: "ko_KR",
		url: "https://dev-leemj.github.io",
		title: "Dev - Lee Mijin",
		site_name: "Dev - Lee Mijin",
		description: "기록 저장소"
	}
};

export function DefaultSEO() {
	return <DefaultSeo {...DEFAULT_SEO} />;
}
