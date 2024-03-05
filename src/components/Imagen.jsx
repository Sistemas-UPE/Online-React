import 'bootstrap/dist/css/bootstrap.min.css';
import FigureImage from 'react-bootstrap/FigureImage'
import { Link } from 'react-router-dom';


export function ImagenZoom({u1,u2}) {
    const isInternal = u1.startsWith('/');

    if (isInternal) {
        return (
            <Link to={u1} className='zoom'>
                <ItemContent img={u2} />
            </Link>
        );
    } else {
        return (
            <a href={u1} className='zoom'>
                <ItemContent img={u2} />
            </a>
        );
    }
        }
export function Imagen({u1,u2}) {
    return (
            <a href={u1}><FigureImage src={u2} alt='img'/></a>      
    );
}
function ItemContent({img}) {
    return (
        <>
            <FigureImage  className='zoom'src={img} alt='img'/>
        </>
    );
}