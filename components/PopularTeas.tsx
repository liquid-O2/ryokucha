import Container from './container'
import Card from './productCard'
import Tea1 from '../public/Tea1.png'

const PopularTeas = () => {
  return (
    <>
      <div className='popularTeas w-screen'>
        <Container className='rounded-[3rem] h-[800px]'>
          <p className='text-4xl font-bold pt-8 mb-10 '>Popular Teas</p>
          <Card img={Tea1} price={`$30`} title={'Gyokuro Cha Musume'} attributes={['Smooth', 'Savoury']} />
        </Container>
      </div>
    </>
  )
}

export default PopularTeas
