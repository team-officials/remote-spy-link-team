import { useState } from "react";
import { useNavigate } from 'react-router-dom'; // For navigating after the loader

const RemoteLink = () => {
  const navigate = useNavigate();
  
  // States for access code, subscription code, error messages, loader, and button disable
  const [accessCode, setAccessCode] = useState('');
  const [subSerial, setSubSerial] = useState('');
  const [accessCodeError, setAccessCodeError] = useState('');
  const [subSerialError, setSubSerialError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false); // Disable buttons during loading

  // Function to handle Access Code validation
  const handleAccessCodeSubmit = () => {
    setIsLoading(true); // Show loader
    setIsButtonDisabled(true); // Disable button to prevent multiple clicks
    
    setTimeout(() => {
      if (accessCode === "WRQZ100981QR1") {
        setAccessCodeError("Access Code is Valid");
    
      } else {
        setAccessCodeError("Invalid Access Code");
      }
      setIsLoading(false); // Hide loader after 20 seconds
      setIsButtonDisabled(false); // Enable button again
    }, 3000); // Loader for 20 seconds
  };

  // Function to handle Subscription Code validation
  const handleSubscriptionSubmit = () => {
    setIsLoading(true); // Show loader
    setIsButtonDisabled(true); // Disable button to prevent multiple clicks
    
    setTimeout(() => {
      if (subSerial === "R12QWO1QWE") {
        setSubSerialError("Subscription Code is Valid");
        
        // Show loader for 9 seconds before navigating to the second page
        setTimeout(() => {
          navigate("/secondpage"); // Navigate to SecondPage after 9 seconds
        }, 3000); // 9 seconds delay after valid subscription
      } else {
        setSubSerialError("Invalid Subscription Code");
      }
      setIsLoading(false); // Hide loader after 20 seconds
      setIsButtonDisabled(false); // Enable button again
    }, 20000); // Loader for 20 seconds
  };

  return (
    <div className="font-sans antialiased">
      {/* Main Content Section with darkened background */}
      <section className="bg-green-800 bg-opacity-70 py-16 text-center text-white">
        <h2 className="text-3xl">Real Time Spy</h2>
      </section>

      {/* Access Code Section */}
      <section className="py-10">
        <div className="container mx-auto text-center">
          <h3 className="text-xl font-semibold">Enter Access Code:</h3>
          <input
            type="text"
            value={accessCode}
            onChange={(e) => setAccessCode(e.target.value)}
            className="mt-2 p-2 border border-green-500 rounded-md"
            disabled={isButtonDisabled} // Disable input during loading
          />
          <button
            onClick={handleAccessCodeSubmit}
            className="mt-4 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-400"
            disabled={isButtonDisabled} // Disable button during loading
          >
            Continue
          </button>

          {/* Access Code Validation Message */}
          {accessCodeError && (
            <div className={`mt-4 ${accessCodeError.includes("Invalid") ? 'text-red-500' : 'text-green-500'}`}>
              {accessCodeError}
            </div>
          )}
        </div>
      </section>

      {/* Subscription Code Section */}
      <section className="py-10">
        <div className="container mx-auto text-center">
          <h3 className="text-xl font-semibold">Enter Subscription Serial Number:</h3>
          <input
            type="text"
            value={subSerial}
            onChange={(e) => setSubSerial(e.target.value)}
            className="mt-2 p-2 border border-green-500 rounded-md"
            disabled={isButtonDisabled} // Disable input during loading
          />
          <button
            onClick={handleSubscriptionSubmit}
            className="mt-4 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-400"
            disabled={isButtonDisabled} // Disable button during loading
          >
            Continue
          </button>

          {/* Subscription Code Validation Message */}
          {subSerialError && (
            <div className={`mt-4 ${subSerialError.includes("Invalid") ? 'text-red-500' : 'text-green-500'}`}>
              {subSerialError}
            </div>
          )}

          {/* Loader Message */}
          {isLoading && (
            <div className="mt-4 flex justify-center">
              <div className="loader"></div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default RemoteLink;
