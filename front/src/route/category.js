import '../compenent/grid.css';
import Navbar from '../compenent/navbar';
import sample from '../views/2.mp4';


function Category() {
  return (
    <div>
      <Navbar />
      <div class="vid">
        <video class="bgvid" autoplay="autoplay" muted="muted" preload="auto" loop>
          <source src={sample} type="video/webm"/>
        </video>
      </div>
    </div>
  );
}
export default Category;
