import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://www.sharkfunded.com'

    const routes = [
        '',
        '/about-us',
        '/affiliate',
        '/blog',
        '/careers',
        '/contact-us',
        '/privacy-policy',
        '/reviews',
        '/rewards',
        '/symbols',
        '/terms-and-conditions',
        '/what-is-prop-trading',
    ]

    return routes.map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: route === '' ? 'daily' :
            route === '/blog' ? 'daily' :
                route === '/reviews' ? 'weekly' :
                    'monthly' as const,
        priority: route === '' ? 1 :
            route === '/affiliate' ? 0.9 :
                route === '/blog' ? 0.8 :
                    route === '/careers' ? 0.8 :
                        0.7,
    }))
}
