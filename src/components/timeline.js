import Skeleton from "react-loading-skeleton";
import usePhotos from "../hooks/use-photos";
import Post from "./post/inddex";

export default function Timeline() {
  const { photos } = usePhotos();
  // console.log('username', content);
  
  // console.log('Photos', photos)
  return (
    <div className="container col-span-2">
      {!photos ? (
            <Skeleton count={4} width={640} height={600} className='mb-5'/>
      ) :  photos?.length > 0 ? (
        photos.map((content) => <Post key={content.docId} conten={content} />
        
        )
      ) :(
        <p className="text-center text-2xl"> Follow people to see photos</p>
      )}
    </div>
  );
}