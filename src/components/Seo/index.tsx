import { NextSeo } from 'next-seo';

const data = {
  title: 'Italo Sousa',
  description:
    'Passionate about the incredible world of software development, always seeking to develop and learn technologies that can positively impact society.',
  url: 'https://italosa.github.io',
};

export default function Seo() {
  return (
    <NextSeo
      title={data.title}
      description={data.description}
      canonical={data.url}
      openGraph={{
        url: data.url,
        title: data.title,
        description: data.description,
        images: [
          {
            url: 'https://italosa.github.io/images/og_image.png',
            alt: "There's a big white IS in the image that stands for Italo Sousa",
          },
        ],
        site_name: `${data.title} | Profile`,
      }}
      twitter={{
        handle: '@anditsou',
        site: '@anditsou',
        cardType: 'summary_large_image',
      }}
    />
  );
}
