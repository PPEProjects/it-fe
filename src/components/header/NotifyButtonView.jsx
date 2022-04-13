import {useContext} from "react";
import {NotifyContex, UserAvatarView} from "ppe-notify";

export default () => {

  const ctx = useContext(NotifyContex)

  const $auth = () => {
    return Object.keys(ctx.user).length > 0
  }

  return (

    <button
      className='!w-[36px] !h-[36px] rounded-full header-notify-avatar relative'
    >
      {

        $auth()
          ? <UserAvatarView avatar='/assets/images/icon-hand.jpg' />
          : (
            <img
              src="/assets/images/icon-hand.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
          )

      }

    </button>

  )

}
