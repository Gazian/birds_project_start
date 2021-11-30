import { deleteSighting } from "./SightingService"
import { updateSighting } from "./SightingService"

const SightingCard = ({sighting, removeSighting}) => {

    console.log(sighting);
    const handleDelete = () => {
        deleteSighting(sighting._id).then(()=>{
            removeSighting(sighting._id);
        })
    }

    const handleUpdate = () => {
        updateSighting(sighting._id).then(()=>{
            amendSighting(sighting._id);
        })
    }


    return (
        <>
            <h1>{sighting.species}</h1>
            <p>Location: {sighting.location}</p>
            <p>Date: {sighting.date}</p>
            <button onClick={handleUpdate}> Edit</button>
            <button onClick={handleDelete}> 🗑 </button>
            <hr></hr>
        </>
    )
}

export default SightingCard;