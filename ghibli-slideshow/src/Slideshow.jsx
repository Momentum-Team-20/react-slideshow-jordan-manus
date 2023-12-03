import filmData from './data/mega-film-data.json'
import { useState } from 'react'

export function Slideshow() {
    const [index, setIndex] = useState(0)

    const next = () => {
        setIndex(index + 1);
    }

    const previous = () => {
        setIndex(index - 1);
    }

    const first = () => {
        setIndex(0);
    }

    return (
        <>
            <FilmCard
                key={filmData[index].id}
                film_title={filmData[index].title}
                film_og_title={filmData[index].original_title}
                release_date={filmData[index].release_date}
                desc={filmData[index].description}
                cover_image={filmData[index].image}
            />
            <div>
                <button disabled={index === 0} className='button is-success mr-1' onClick={first}>First</button>
                <button disabled={index === 0} className='button is-success mr-1' onClick={previous}>Previous</button>
                <button disabled={index === filmData.length - 1} className='button is-success' onClick={next}>Next</button>
            </div>
        </>
    )
}


const FilmCard = ({ film_title, film_og_title, release_date, desc, cover_image }) => {
    return (
        <div className='film-box card' >

            <div className='card-content'>
                <div className='media'>
                    <div className='media-left'>
                        <figure className='image '>
                            <img src={cover_image} alt='movie poster' className='poster ' />
                        </figure>
                    </div>
                    <div className='media-content mt-2'>
                        <h1 className='title is-size-2'>{film_title}</h1>
                        <p className='subtitle'>{film_og_title}</p>
                        {/* <div className='content'> */}
                        <p className='release-date is-size-7 pt-6'>{release_date}</p>
                        <p className='desc'>{desc}</p>
                        {/* </div> */}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Slideshow;