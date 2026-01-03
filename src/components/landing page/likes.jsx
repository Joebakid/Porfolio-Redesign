import { useState } from "react";

const pdfs = [
  {
    name: "Outwitting the Devil",
    href: "https://drive.google.com/file/d/1XuH5P9IMh7wo3q3OwMOeA-zc4JIZYoL8/view",
    cover: "https://covers.openlibrary.org/b/id/10958362-L.jpg",
    year: "1938",
  },
  {
    name: "Entrepreneurial You",
    href: "https://drive.google.com/file/d/1ux6K2rZGMT7F44-iCY27G-C77_x-Haml/view",
    cover: "https://images-na.ssl-images-amazon.com/images/I/81vpsIs58WL.jpg",
    year: "2017",
  },
  {
    name: "The Psychology of Money",
    href: "https://drive.google.com/file/d/14hgkddEMnUrrerZ1dM1BPEAZueCyI1cF/view",
    cover: "https://images-na.ssl-images-amazon.com/images/I/71g2ednj0JL.jpg",
    year: "2020",
  },
  {
    name: "The Richest Man in Babylon",
    href: "https://drive.google.com/file/d/15L-k6JbX77GJjuCSuHp6Qm9zpmkw9zgi/view",
    cover: "https://covers.openlibrary.org/b/id/8231856-L.jpg",
    year: "1926",
  },
];

export default function Likes() {
  const [activeKey, setActiveKey] = useState(null);

  const sections = [
    {
      title: "Movies",
      items: [
        { title: "Beautiful Boy", year: "2018", videoId: "y23HyopQxEg" },
        { title: "Interstellar", year: "2014", videoId: "zSWdZVtXT7E" },
        { title: "Inception", year: "2010", videoId: "YoHD9XEInc0" },
        { title: "The Social Network", year: "2010", videoId: "lB95KLmpLR4" },
        { title: "Oppenheimer", year: "2023", videoId: "uRJQJcy3f8w" },
      ],
    },
    {
      title: "Series",
      items: [
        { title: "Breaking Bad", year: "2008", videoId: "HhesaQXLuRY" },
        { title: "Stranger Things", year: "2016", videoId: "b9EkMc79ZSU" },
        { title: "Game of Thrones", year: "2011", videoId: "KPLWWIOCOOQ" },
      ],
    },
    {
      title: "Music",
      items: [
        { title: "Blinding Lights", artist: "The Weeknd", videoId: "4NRXx6U8ABQ" },
        { title: "Ocean Eyes", artist: "Billie Eilish", videoId: "viimfQi_pUw" },
        { title: "Glimpse of Us", artist: "Joji", videoId: "FvOpPeKSf_4" },
      ],
    },
    {
      title: "Books",
      items: pdfs.map((pdf) => ({
        title: pdf.name,
        year: pdf.year,
        cover: pdf.cover,
        href: pdf.href,
      })),
    },
  ];

  return (
    <section className="container-main mt-20 flex justify-center">
      <div className="w-full max-w-6xl flex flex-col gap-24">
        {sections.map((section, sectionIndex) => (
          <div key={sectionIndex} className="flex flex-col items-center">
            <p className="py-2 opacity-60 text-sm text-center">
              [ click to open {section.title.toLowerCase()} ]
            </p>

            <h2 className="section-title text-center mb-10">
              {section.title}
            </h2>

            {/* FLEX WRAP CONTAINER */}
            <div className="flex flex-wrap justify-center gap-8">
              {section.items.map((item, index) => {
                const key = `${sectionIndex}-${index}`;
                const isBook = !item.videoId;

                return (
                  <div
                    key={key}
                    className="
                      p-4
                      rounded-xl
                      flex flex-col items-center
                      text-center
                      hover:bg-white/5
                      transition
                      w-[400px]
                    "
                  >
                    {isBook ? (
                      <a href={item.href} target="_blank" rel="noreferrer">
                        <img
                          src={item.cover}
                          alt={item.title}
                          className="rounded-lg w-full"
                        />
                      </a>
                    ) : (
                      <div
                        className="cursor-pointer"
                        onClick={() => setActiveKey(key)}
                      >
                        {activeKey !== key ? (
                          <img
                            src={`https://img.youtube.com/vi/${item.videoId}/hqdefault.jpg`}
                            alt={item.title}
                            className="rounded-lg w-full"
                          />
                        ) : (
                          <iframe
                            src={`https://www.youtube.com/embed/${item.videoId}?autoplay=1`}
                            title={item.title}
                            frameBorder="0"
                            allow="autoplay; encrypted-media"
                            allowFullScreen
                            className="w-full aspect-video rounded-lg"
                          />
                        )}
                      </div>
                    )}

                    <h3 className="title-text-like mt-4">
                      {item.title}
                      {item.artist ? ` – ${item.artist}` : ""}
                      {item.year ? ` (${item.year})` : ""}
                    </h3>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
