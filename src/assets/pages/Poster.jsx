import pos from "../files/PosterGuidelines.pdf";
import { PDFObject } from 'react-pdfobject';

const Poster = () => {

    return(
        <>
        <div className="heading">
            <h1>Poster Guidelines</h1>
        </div>
            <div className="guidelines flex justify-center">
                <PDFObject url={pos} height="125vh" />
            </div>
        </>
    )
}

export default Poster;