// Import the SpinningCircle component


import SpinningCircle from "@/app/components/Wheel";


// Your page component
const YourPageComponent = () => {
    const contentString = "Your string content goes here";
    
  return (
    <div>
      <h1>Your Page Title</h1>
      <SpinningCircle />
      {/* Other content on your page */}


    </div>
  );
};

export default YourPageComponent;
