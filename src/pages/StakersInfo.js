const StakersInfo = ({getStakers, account, stakeDetails, enrollStakeMaster, stakeMasterEnrolled,isAddressEnrolled}) => {
    return ( 
        <div className="border border-customize-bordercolor2 rounded-[30px] w-[34rem] flex flex-col justify-center items-center px-5 py-10 bg-black">
        <div className="flex items-center w-full mb-2 ">
          <button onClick={() => getStakers(account)} className="mybutton">
            Get Stakers Info
          </button>
        </div>
        <div className="flex w-full my-5">
          <ul className="p-2 my-2 w-full flex flex-col border-2 rounded-2xl border-customize-buttoncolor text-left">
            <b className="text-2xl ">Stakers info</b>
            <hr className="my-2" />
            <li>
              <p className="text-1xl font-bold"> Address:&nbsp;</p>
              {stakeDetails[0] ? stakeDetails : ""}
            </li>
            <li>
              <p className="text-1xl font-bold"> Staking:&nbsp;</p>
              {stakeDetails[1]?.toString().toUpperCase()}
            </li>
            <li>
              <p className="text-1xl font-bold"> Lock period:&nbsp;</p>
              {stakeDetails[2]?.toString().toUpperCase()}
            </li>
            <li>
              <p className="text-1xl font-bold"> Amount Staked:&nbsp; </p>
              {stakeDetails[3]}
            </li>
            <li>
              <p className="text-1xl font-bold">Unclaimed Rewards:&nbsp;</p>
              {stakeDetails[4]}
            </li>
            <li>
              <p className="text-1xl font-bold">Duration of stake:&nbsp;</p>
              {stakeDetails[5]}
            </li>
          </ul>
        </div>

        <div className="flex  w-full ml-2 justify-between">
          <div className="w=[50%]">
            <button
              onClick={() => enrollStakeMaster(account)}
              className="mybutton"
            >
              Enroll StakeMaster
            </button>
          </div>

          <div className="w=[50%] flex items-center justify-between">
            <button
              onClick={() => stakeMasterEnrolled(account)}
              className="mybutton"
            >
              StakeMaster Enrolled
            </button>
            <h2>
            &nbsp;{isAddressEnrolled ? isAddressEnrolled : "Not yet enrolled"}
            </h2>
          </div>
        </div>
      </div>

     );
}
 
export default StakersInfo;