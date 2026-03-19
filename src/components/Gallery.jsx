import { Link } from 'react-router-dom'

const galleryItems = [
  { span: 'col-span-2 row-span-2', src: '/gallery/1.jpeg', alt: 'Hair styling at H\'s Place Hair Studio Melton' },
  { span: 'col-span-1 row-span-1', src: '/gallery/2.jpeg', alt: 'Hair transformation at H\'s Place Melton' },
  { span: 'col-span-1 row-span-1', src: '/gallery/3.jpeg', alt: 'Haircut by H\'s Place Hair Studio' },
  { span: 'col-span-1 row-span-2', src: '/gallery/4.jpeg', alt: 'Client hair styling at H\'s Place Melton' },
  { span: 'col-span-1 row-span-1', src: '/gallery/5.jpeg', alt: 'Hair work by H\'s Place Hair Studio' },
  { span: 'col-span-1 row-span-1', src: '/gallery/6.jpeg', alt: 'Salon work at H\'s Place Melton VIC' },
  { span: 'col-span-2 row-span-1', src: '/gallery/7.jpeg', alt: 'Hair styling at H\'s Place Hair Studio Melton VIC' },
]

export default function Gallery({ preview }) {
  const items = preview ? galleryItems.slice(0, 4) : galleryItems

  return (
    <section id="gallery" className="py-24 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {preview && (
          <div className="text-center mb-16 reveal">
            <p className="font-sans text-sage-600 text-xs tracking-[0.2em] uppercase mb-4">Our Work</p>
            <h2 className="font-display text-4xl md:text-5xl text-neutral-900 mb-3">
              The <span className="italic">Gallery</span>
            </h2>
            <div className="accent-line" />
            <p className="font-sans text-neutral-400 max-w-md mx-auto mt-4 text-sm">
              A showcase of our artistry. Each transformation tells a story.
            </p>
          </div>
        )}

        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[220px] gap-2 md:gap-3 stagger-children">
          {items.map((item, i) => (
            <div
              key={i}
              className={`gallery-item ${item.span} group cursor-pointer`}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-neutral-900/0 group-hover:bg-neutral-900/20 transition-all duration-400" />
            </div>
          ))}
        </div>

        <div className="text-center mt-12 reveal">
          {preview ? (
            <Link
              to="/gallery"
              className="btn-outline font-sans font-medium text-xs tracking-[0.12em] uppercase px-7 py-3 rounded-sm"
            >
              View Full Gallery
            </Link>
          ) : (
            <>
              <p className="font-sans text-neutral-400 text-sm mb-4">
                Follow us for more transformations
              </p>
              <a
                href="https://www.instagram.com/hsplacehairstudio"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-sans text-neutral-900 text-xs tracking-[0.12em] uppercase hover:text-sage-600 transition-colors duration-300"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="5" />
                  <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
                </svg>
                @hsplacehairstudio
              </a>
            </>
          )}
        </div>
      </div>
    </section>
  )
}
