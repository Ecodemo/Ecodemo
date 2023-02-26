module.exports = {
	title: "开源镜像索引",
	description: "Moieo 开源镜像索引站",
	permalink: "/:slug",
	plugins: ['@vuepress/nprogress'],
	themeConfig: {
		nav: [
			{ text: '综合镜像索引', link: '/' },
			{ text: 'Fedora 镜像与配置', link: '/fedora/' },
			{ text: '博客', link: 'https://blog.moieo.top' },
		]
	}
};
