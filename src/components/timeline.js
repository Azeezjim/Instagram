import Skeleton from "react-loading-skeleton";
import usePhotos from "../hooks/use-photos";

export default function Timeline() {
  const { photos } = usePhotos();
  
  console.log('Photos', photos)
  return (
    <div className="container col-span-2">
      {!photos ? (
        <>
          {[ ...new Array(4)].map(item => 
            <Skeleton key={i}>

            </Skeleton>
          )}
        </>
      )}
    </div>
  )
}