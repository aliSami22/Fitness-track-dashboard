import hero from "../assets/hero.svg"; // استيراد الصورة كـ URL

const Splash = () => {
  return (
    <div>
      <div className="flex items-center h-screen">
        <div>
          <h1>Achieve Your Fitness Goals With LifeFit</h1>
          <p>
            Your Fitness. Your Data. Your Journey. LifeFit is your personal
            fitness dashboard — log workouts, set goals, and visualize your
            progress like never before. Simple to use, powerful to track, built
            to keep you moving forward. Join now and start taking control.
          </p>
          <button>Start Your Journey</button>
        </div>
        <div className="">
          <img src={hero} alt="Hero" /> {/* استخدم alt للصورة */}
        </div>
      </div>
    </div>
  );
};

export default Splash;
