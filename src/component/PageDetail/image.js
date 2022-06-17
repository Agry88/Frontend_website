import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Carousel.css";

export default function Carousels() {
    const data = ["https://cloud.hhh.com.tw/gs/columnpage/3722/issue04_334_01.jpg?hhh","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7arfUGOQlh6H2XBtCX_PaKHJ6aG9-kIZeog&usqp=CAU","https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=1000"]
    return (
        <Carousel sx={{backgroundColor:"#007A78" }}>
            {data.map((img,index) =>
            <div key={index}>
                <img alt='aa' size='lg'  src={img} />
            </div> )}
        </Carousel>
    );
}