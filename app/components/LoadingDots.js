// components/LoadingDots.js

const LoadingDots = () => {
    return (
      <div className="flex items-center space-x-2">
        <span>Loading</span>
        <div
          className="w-14 h-[26.9px] bg-no-repeat animate-dots"
          style={{
            background: `radial-gradient(circle closest-side, #474bff 90%, #0000) 0% 50%,
                         radial-gradient(circle closest-side, #474bff 90%, #0000) 50% 50%,
                         radial-gradient(circle closest-side, #474bff 90%, #0000) 100% 50%`,
            backgroundSize: 'calc(100%/3) 13.4px',
          }}
        ></div>
      </div>
    );
  };
  
  export default LoadingDots;
  