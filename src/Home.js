import homePic from "./pics/homePic.jpeg"

const Home = () => {
  return ( 
    <div className="home">
      <div className="home-image">
        <img src={homePic} alt="" className="home-pic"/>
      </div>
      <div className="home-content">
        <h2>
          creating the most natural eyebrows possible for an undetectable finish
        </h2>
        <p>
          Microblading is a manual, semipermanent technique of hyper-realistic eyebrow
          drawing in which the shape is calculated according to facial morphology and 
          golden proportion. Our approach to microblading is always cantered around our clients 
          specific goals and desires to create their unique dream brows.
        </p>
      </div>
    </div>
   );
}
 
export default Home;