import Carousel from './carouselFramer'
import Card from './productCardCopy'

export const PopularTeas = () => {
  // let teas = await fetchTeas()
  const teas = [
    {
      name: 'a',
      price: '$99',
      id: 'sfsefsd',
      attributes: ['smooth', 'sweet'],
      image:
        'https://firebasestorage.googleapis.com/v0/b/complexapp-5d19d.appspot.com/o/Teas%2FGyokuro%20Cha%20Meijin.png?alt=media&token=ccfd0628-d450-43a4-849b-313f44843e24',
    },
    {
      name: 'a',
      price: '$99',
      id: 'sfsefsd',
      attributes: ['smooth', 'sweet'],
      image:
        'https://firebasestorage.googleapis.com/v0/b/complexapp-5d19d.appspot.com/o/Teas%2FGyokuro%20Cha%20Meijin.png?alt=media&token=ccfd0628-d450-43a4-849b-313f44843e24',
    },
    {
      name: 'a',
      price: '$99',
      id: 'sfsefsd',
      attributes: ['smooth', 'sweet'],
      image:
        'https://firebasestorage.googleapis.com/v0/b/complexapp-5d19d.appspot.com/o/Teas%2FGyokuro%20Cha%20Meijin.png?alt=media&token=ccfd0628-d450-43a4-849b-313f44843e24',
    },
    {
      name: 'a',
      price: '$99',
      id: 'sfsefsd',
      attributes: ['smooth', 'sweet'],
      image:
        'https://firebasestorage.googleapis.com/v0/b/complexapp-5d19d.appspot.com/o/Teas%2FGyokuro%20Cha%20Meijin.png?alt=media&token=ccfd0628-d450-43a4-849b-313f44843e24',
    },
    {
      name: 'a',
      price: '$99',
      id: 'sfsefsd',
      attributes: ['smooth', 'sweet'],
      image:
        'https://firebasestorage.googleapis.com/v0/b/complexapp-5d19d.appspot.com/o/Teas%2FGyokuro%20Cha%20Meijin.png?alt=media&token=ccfd0628-d450-43a4-849b-313f44843e24',
    },
    {
      name: 'a',
      price: '$99',
      id: 'sfsefsd',
      attributes: ['smooth', 'sweet'],
      image:
        'https://firebasestorage.googleapis.com/v0/b/complexapp-5d19d.appspot.com/o/Teas%2FGyokuro%20Cha%20Meijin.png?alt=media&token=ccfd0628-d450-43a4-849b-313f44843e24',
    },
    {
      name: 'a',
      price: '$99',
      id: 'sfsefsd',
      attributes: ['smooth', 'sweet'],
      image:
        'https://firebasestorage.googleapis.com/v0/b/complexapp-5d19d.appspot.com/o/Teas%2FGyokuro%20Cha%20Meijin.png?alt=media&token=ccfd0628-d450-43a4-849b-313f44843e24',
    },
    {
      name: 'a',
      price: '$99',
      id: 'sfsefsd',
      attributes: ['smooth', 'sweet'],
      image:
        'https://firebasestorage.googleapis.com/v0/b/complexapp-5d19d.appspot.com/o/Teas%2FGyokuro%20Cha%20Meijin.png?alt=media&token=ccfd0628-d450-43a4-849b-313f44843e24',
    },
    {
      name: 'a',
      price: '$99',
      id: 'sfsefsd',
      attributes: ['smooth', 'sweet'],
      image:
        'https://firebasestorage.googleapis.com/v0/b/complexapp-5d19d.appspot.com/o/Teas%2FGyokuro%20Cha%20Meijin.png?alt=media&token=ccfd0628-d450-43a4-849b-313f44843e24',
    },
  ]
  return (
    <>
      <div className='popularTeas flex '>
        <Carousel>
          {teas.map((teas) => {
            const { id, image, price, name, attributes } = teas
            return (
              <Card
                key={id}
                img={image}
                price={price}
                title={name}
                attributes={attributes}
                id={id}
                className={'w-[300px] min-w-[300px] md:w-[360px] md:min-w-[360px] mr-4'}
              />
            )
          })}
        </Carousel>
      </div>
    </>
  )
}
