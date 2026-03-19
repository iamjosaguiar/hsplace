import { Helmet } from 'react-helmet-async'

const defaults = {
  siteName: "H's Place Hair Studio",
  siteUrl: 'https://hsplace.com.au',
  image: 'https://hsplace.com.au/logo.png',
}

export default function SEO({ title, description, path = '/', schema }) {
  const fullTitle = path === '/'
    ? title
    : `${title} | ${defaults.siteName}`
  const url = `${defaults.siteUrl}${path}`

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={defaults.image} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={defaults.siteName} />
      <meta property="og:locale" content="en_AU" />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={defaults.image} />

      {schema && (Array.isArray(schema) ? schema : [schema]).map((s, i) => (
        <script key={i} type="application/ld+json">{JSON.stringify(s)}</script>
      ))}
    </Helmet>
  )
}
