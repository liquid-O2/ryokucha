export default function Head({ slug }: { slug: string }) {
  return (
    <>
      <title>{`Ryokucha | ${slug}`}</title>
      <meta content='width=device-width, initial-scale=1' name='viewport' />
      <link rel='icon' href='/favicon.png' />
    </>
  )
}
