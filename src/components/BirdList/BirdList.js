import { useDispatch, useSelector } from 'react-redux';
import React, { useState } from 'react';


function BirdList(){
    const pictureResults = useSelector(store => store.imageResultList)
    let [chosenPicture, setChosenPicture]= useState('');
    
    const chosenPic = (img) => {
        let imgUrl= `https://live.staticflickr.com/${img.server}/${img.id}_${img.secret}.jpg`
        console.log('chosen picture is', imgUrl);
        setChosenPicture(imgUrl);
      }

    return(
        <>
        <div>
            {pictureResults && 
          <div className= 'pictureDiv'> 
            {pictureResults.photos.photo.map((img, index) => (
                <img
                    key= {index}
                    src= {`https://live.staticflickr.com/${img.server}/${img.id}_${img.secret}.jpg`} 
                    alt= 'cool image'
                    width= {300}
                    height= {350}
                    // STRUGGLING WITH HOW TO SEND THIS IMAGE TO SAGA -> SQL TO STORE AS CORRESPONDING BIRD
                    // FOR THE BIRD THAT THE CLIENT IS SPECIFYING
                    //prefer to send it as an img src url but it img.src returns undefined 
                    onClick= {event => chosenPic(img)}
                />
            ))}
          </div>
          }
        </div>
        </>
    )
}
export default BirdList;