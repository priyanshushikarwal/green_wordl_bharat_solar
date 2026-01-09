import { useEffect } from 'react';

interface SEOHeadProps {
    title: string;
    description: string;
    canonical?: string;
    keywords?: string;
}

export const SEOHead: React.FC<SEOHeadProps> = ({ title, description, canonical, keywords }) => {
    useEffect(() => {
        // Update document title
        document.title = title;

        // Update or create meta description
        let metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute('content', description);
        } else {
            metaDescription = document.createElement('meta');
            metaDescription.setAttribute('name', 'description');
            metaDescription.setAttribute('content', description);
            document.head.appendChild(metaDescription);
        }

        // Update or create canonical link
        if (canonical) {
            let canonicalLink = document.querySelector('link[rel="canonical"]');
            if (canonicalLink) {
                canonicalLink.setAttribute('href', canonical);
            } else {
                canonicalLink = document.createElement('link');
                canonicalLink.setAttribute('rel', 'canonical');
                canonicalLink.setAttribute('href', canonical);
                document.head.appendChild(canonicalLink);
            }
        }

        // Update or create keywords
        if (keywords) {
            let metaKeywords = document.querySelector('meta[name="keywords"]');
            if (metaKeywords) {
                metaKeywords.setAttribute('content', keywords);
            } else {
                metaKeywords = document.createElement('meta');
                metaKeywords.setAttribute('name', 'keywords');
                metaKeywords.setAttribute('content', keywords);
                document.head.appendChild(metaKeywords);
            }
        }

        // Update Open Graph tags
        let ogTitle = document.querySelector('meta[property="og:title"]');
        if (ogTitle) ogTitle.setAttribute('content', title);

        let ogDescription = document.querySelector('meta[property="og:description"]');
        if (ogDescription) ogDescription.setAttribute('content', description);

        // Cleanup function to restore original values when component unmounts
        return () => {
            document.title = 'Best Solar Company in Jaipur | Green World Bharat Solar – MNRE Approved EPC';
        };
    }, [title, description, canonical, keywords]);

    return null;
};
