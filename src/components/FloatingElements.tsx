
const FloatingElements = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-gradient-to-r from-pink-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
      
      {/* Floating particles */}
      <div className="absolute top-10 left-10 w-2 h-2 bg-blue-400/50 rounded-full animate-bounce delay-100"></div>
      <div className="absolute top-20 right-20 w-3 h-3 bg-purple-400/50 rounded-full animate-bounce delay-300"></div>
      <div className="absolute bottom-20 left-20 w-2 h-2 bg-pink-400/50 rounded-full animate-bounce delay-500"></div>
      <div className="absolute bottom-10 right-10 w-3 h-3 bg-blue-400/50 rounded-full animate-bounce delay-700"></div>
    </div>
  );
};

export default FloatingElements;
