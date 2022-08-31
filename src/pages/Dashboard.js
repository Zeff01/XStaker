const Dashboard = ({
  active,
  truncateAddress,
  connect,
  disconnect,
  chainId,
  account,
  networkIDNames,
  signMessage,
  message,
  handleInput,
  signature,
}) => {
  return (
    <div className="border border-customize-bordercolor rounded-lg p-10">
      <div className="flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-12 h-12 text-white mr-2 border rounded-full border-customize-buttoncolor p-1 "
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
          />
        </svg>

        <h1 className="text-4xl font-bold text-left">Dashboard</h1>
      </div>

      <div className="flex justify-between mt-10 ">
        <div className="flex flex-col justify-start ">
          <div className="flex justify-between items-start  w-96">
            <div className=" w-60">
              {active ? (
                <span className="flex text-left w-60">
                  <b>Connected with:&nbsp;</b>
                  <p className="accountAddress"> {truncateAddress(account)}</p>
                </span>
              ) : (
                <b className="flex text-left w-60">Not connected</b>
              )}
            </div>

            <div>
              <h2 className="w-60 text-left ">
                <b>Network:&nbsp;</b>
                {`${chainId ? networkIDNames(chainId) : "No Network"}`}
              </h2>
            </div>
          </div>

          <div className="flex justify-between items-start w-96">
            <div className="flex  w-60 text-left">
              <h2 className="w-60">
                <b>Connection Status:</b>
                {active ? " 🟢" : " 🔴"}
              </h2>
            </div>

            <div className="">
              <h2 className="w-60 text-left">
                <b> Network ID:&nbsp;</b>
                {` ${chainId ? chainId : "No Network"}`}
              </h2>
            </div>
          </div>
        </div>

       
       
        <div className="flex">         
          <button
            onClick={connect}
            className="text-customize-buttoncolor font- bold border border-customize-buttoncolor rounded-lg p-1.5"
          >
            Connect to Metamask
          </button>
          <button
            onClick={disconnect}
            className="ml-3 border font-bold border-customize-buttoncolor2 bg-customize-buttoncolor2 rounded-lg p-1.5"
          >
            Disconnect
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
