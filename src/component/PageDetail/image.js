import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Carousel.css";
const data = ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7arfUGOQlh6H2XBtCX_PaKHJ6aG9-kIZeog&usqp=CAU","https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=1000"]
export default function Carousels() {
    return (
        <Carousel sx={{backgroundColor:"#007A78" }}>
            {data.map((img) =><div>
                <img alt='aa' size='lg' src={img} />
            </div> )}
        </Carousel>
    );
}