import React, { useEffect } from 'react'
import useFetch from '../hooks/useFetch';
import './styles/residentCard.css';

const ResidentCard = ({url}) => {
  const [resident, getResident ] = useFetch();

  useEffect(() =>  {
    getResident(url);
  }, []);
    
    console.log(resident);
  return (
    <article className='resident'>
      <figure className='resident__photo'>
        <img src={resident?.image} alt="resident image" />
        <figcaption className='resident__status'>
          <div className={`resident__circle ${resident?.status}`}></div>
          <p>{resident?.status}</p>
        </figcaption>
        </figure>
        <h3 className='resisdent__name'>{resident?.name}</h3>
        <hr />
        <ul className='resident__list'>
          <li className='resisdent__item'><span>Specie</span>{resident?.species}</li>
          <li className='resisdent__item'><span>Origin</span>{resident?.origin.name}</li>
          <li className='resisdent__item'><span>Episodes where appear</span>{resident?.episode.length}</li>
        </ul>
    </article>
  )
}

export default ResidentCard;