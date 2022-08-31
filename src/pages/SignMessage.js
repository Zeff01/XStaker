const SignMessage = ({signMessage, message, handleInput, signature, truncateAddress, verified, verifyMessage}) => {
    return ( 

        <div className="border border-customize-bordercolor2 rounded-[30px] w-[34rem] flex flex-col justify-start px-5 py-10 bg-black">
        <div className=" flex items-center">
          <button
            onClick={signMessage}
            isisabled={!message}
            className="mybutton mr-2"
          >
            Sign Message
          </button>
          <textarea
            placeholder="Set Message"
            maxLength={20}
            onChange={handleInput}
            className="myinput text-center flex justify-center items-center grow "
          />
        </div>
        <div className="myinput mt-10 h-10 text-left">
          {signature ? (
            <span label={signature} placement="bottom">
              <h2 className="text-lg">
                &nbsp; Signature:{` ${truncateAddress(signature)}`}
              </h2>
            </span>
          ) : null}
        </div>
        <div className=" flex items-center mt-5">
          <button
            onClick={verifyMessage}
            isDisabled={!signature}
            className="mybutton mr-2"
          >
            Verify Message
          </button>
          {verified !== undefined ? (
            verified === true ? (
              <div className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="12.5"
                  stroke="currentColor"
                  className="w-6 h-6 mr-1 text-green-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>

                <h2>Signature Verified!</h2>
              </div>
            ) : (
              <div className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 mr-1 text-red-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>

                <h2>Signature Denied!</h2>
              </div>
            )
          ) : null}
        </div>
      </div>
     );
}
 
export default SignMessage;