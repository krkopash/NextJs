'use client';
import dynamic from 'next/dynamic';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Carousel = dynamic(
  () => import('react-responsive-carousel').then((mod) => mod.Carousel),
  { ssr: false }
);

const imgCarousel=()=>{
    return(
        <div style={{backgroundColor:"#233585c9", margin:"90px"}}>
            <br/>
            <h1 style={{textAlign:"center"}}>
                Image carousel example
            </h1>
            <br/>
            <Carousel showArrows={true} infiniteLoop={true} showStatus={true}
  showThumbs={true} emulateTouch={true}  swipeable={true} useKeyboardArrows={true} >
                <div>
                    <img src="https://png.pngtree.com/png-clipart/20230511/ourmid/pngtree-isolated-front-view-cat-on-white-background-png-image_7094909.png"  alt='img1' style={{height:"20%", width:"20%"}}></img><br/>
                    <button style={{padding:"5px"}}><a href='https://png.pngtree.com/png-clipart/20230511/ourmid/pngtree-isolated-front-view-cat-on-white-background-png-image_7094909.png'>View more</a></button><br/><br/>
                </div>
                <div>
                    <img src="https://png.pngtree.com/png-vector/20241123/ourmid/pngtree-adorable-golden-cat-clipart-standing-illustration-png-image_14489824.png" alt='img2' style={{height:"20%", width:"20%"}}></img><br/>
                    <button style={{padding:"5px"}}><a href='https://png.pngtree.com/png-vector/20241123/ourmid/pngtree-adorable-golden-cat-clipart-standing-illustration-png-image_14489824.png'>View more</a></button>
                </div>
                <div>
                    <img src="https://file.aiquickdraw.com/imgcompressed/img/compressed_e0f3ccb51c4823f8cf5e4f65ee95a1c5.webp" alt='img3' style={{width:"20%", height:"20%"}}></img><br/>
                    <button style={{padding:"5px"}}><a href='https://file.aiquickdraw.com/imgcompressed/img/compressed_e0f3ccb51c4823f8cf5e4f65ee95a1c5.webp'>View more</a></button>
                </div>
                <div>
                    <img src="https://png.pngtree.com/png-vector/20241012/ourmid/pngtree-cat-peeking-from-frame-png-image_14067902.png" alt='img4' style={{height:"20%", width:"20%"}}></img><br/>
                    <button style={{padding:"5px"}}><a href='https://png.pngtree.com/png-vector/20241012/ourmid/pngtree-cat-peeking-from-frame-png-image_14067902.png'>View more</a></button>
                </div>
                <div>
                    <img src="https://png.pngtree.com/png-vector/20241018/ourmid/pngtree-gif-transparent-cat-claws-png-image_13506404.png" alt="img5" style={{height:"20%", width:"20%"}}></img><br/>
                    <button style={{padding:"5px"}}><a href='https://png.pngtree.com/png-vector/20241018/ourmid/pngtree-gif-transparent-cat-claws-png-image_13506404.png'>View more</a></button>
                </div>
            </Carousel>
        </div>
    )
}

export default imgCarousel;