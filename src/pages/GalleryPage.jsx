import SEO from '../components/SEO'
import Gallery from '../components/Gallery'
import { imageGallerySchema, breadcrumbSchema } from '../schema'

export default function GalleryPage() {
  const crumbs = breadcrumbSchema([
    { name: 'Home', url: 'https://hsplace.com.au' },
    { name: 'Gallery', url: 'https://hsplace.com.au/gallery' },
  ])

  return (
    <>
      <SEO
        title="Gallery — Hair Transformations by Melton's Best Colourists"
        description="Browse stunning hair transformations by H's Place Hair Studio in Melton. Balayage, blonde specialist, creative colour, precision cuts and hair extensions by our award-winning team."
        path="/gallery"
        schema={[imageGallerySchema, crumbs]}
      />
      <div className="hero-gradient pt-36 pb-20 text-center relative">
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <p className="font-sans text-white/40 text-xs tracking-[0.2em] uppercase mb-4">Our Work</p>
          <h1 className="font-display text-5xl md:text-6xl text-white mb-3">
            The <span className="italic text-sage-300">Gallery</span>
          </h1>
          <div className="accent-line" />
          <p className="font-sans text-white/40 max-w-md mx-auto mt-4 text-sm">
            Every transformation tells a story. Here's a showcase of our artistry.
          </p>
        </div>
      </div>
      <Gallery />
    </>
  )
}
