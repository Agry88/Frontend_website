import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Carousel.css";

export default function Carousels() {
    return (
        <Carousel>
            <div>
                <img alt='aa' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTScPh7i6O3KlEwRX7zUFYLGMipbdudwsjrxQ&usqp=CAU" />
                <p >照片1</p>
            </div>
            <div>
                <img alt='aa' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7arfUGOQlh6H2XBtCX_PaKHJ6aG9-kIZeog&usqp=CAU" />
                <p className="legend">照片2</p>
            </div>
            <div>
                <img alt='aa' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7arfUGOQlh6H2XBtCX_PaKHJ6aG9-kIZeog&usqp=CAU" />
                <p className="legend">照片3</p>
            </div>
            <div>
                <img alt='aa' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7arfUGOQlh6H2XBtCX_PaKHJ6aG9-kIZeog&usqp=CAU" />
                <p className="legend">照片4</p>
            </div>
            <div>
                <img alt='aa' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7arfUGOQlh6H2XBtCX_PaKHJ6aG9-kIZeog&usqp=CAU" />
                <p className="legend">照片5</p>
            </div>
            <div>
                <img alt='aa' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7arfUGOQlh6H2XBtCX_PaKHJ6aG9-kIZeog&usqp=CAU" />
                <p className="legend">照片6</p>
            </div>
        </Carousel>
    );
}