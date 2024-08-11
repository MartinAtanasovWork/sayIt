export default function NotFound(){
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center p-8 bg-white rounded-lg shadow-lg shadow-pink-500/50 max-w-md">
        <h1 className="text-4xl font-extrabold text-green-600 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-6">
          Oops! The page you are looking for does not seem to exist. 
          It might have been moved or deleted.
        </p>      
      </div>
    </div>
  );
}