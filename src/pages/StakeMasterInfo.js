const StakeMasterInfo = ({isStakeMasterBalance, getxTokenAddress, account, TokenAddress, stake, unStake, claimRewards, viewRewards, isViewRewards}) => {
    return ( 
        <div className="border border-customize-bordercolor2 rounded-[30px] w-[34rem] flex flex-col justify-center items-center px-3 py-5 bg-black">
        <div className="flex flex-col justify-center items-center border-2 border-customize-circleborder rounded-full w-60 h-60 bg-customize-backgroundcolor mb-10">
          <h1>Total StakeMaster Balance</h1>
          <b className="text-4xl">{isStakeMasterBalance ? isStakeMasterBalance : '0'}</b>
          <h1>XTC</h1>
        </div>

        <div className="flex w-full p-2 items-center">
          <button
            onClick={() => getxTokenAddress(account)}
            className="mybutton"
          >
            XToken Address
          </button>
          <h2>&nbsp;{TokenAddress}</h2>
        </div>

        <div className="flex w-full p-2">
          <div className="flex  w-[50%] justify-start">
            <button onClick={() => stake(account, 1)} className="mybutton">
              Stake:
            </button>
            <input type="number" className="myinput w-14 ml-5 " />
          </div>

          <div className="flex  w-[50%] ml-2 justify-start">
            <button onClick={() => unStake(account, 1)} className="mybutton">
              Unstake:
            </button>
            <input type="number" className="myinput w-14 ml-5" />
          </div>
        </div>

        <div className="flex w-full p-2 ">
          <div className="w-[50%]  text-left ">
            <button
              onClick={() => claimRewards(account)}
              className="mybutton "
            >
              Claim Rewards
            </button>
          </div>

          <div className="flex items-center ml-2  w-[50%] text-left justify-between">
            <button onClick={() => viewRewards(account)} className="mybutton">
              View Rewards
            </button>
            <h2>&nbsp;{isViewRewards}</h2>
          </div>
        </div>
      </div>
     );
}
 
export default StakeMasterInfo;