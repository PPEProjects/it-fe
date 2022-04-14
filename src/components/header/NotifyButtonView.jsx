import {useContext, useEffect, useState} from "react";
import {FacebookNotifies, AppNotifyContext, NotifyAvatarAnimation, NotifiesWrapper, NotifiesContext} from "ppe-notify";
import classNames from "classnames";

export default () => {

  const [showNotifies, setShowNotifies] = useState(false)

  const [headerHeight, setHeaderHeight] = useState(0)

  useEffect(()=> {
    setHeaderHeight(document.querySelector('#siteHeader').offsetHeight)
  }, [])

  // đặt component về y = 0 so với trình duyệt
  const resetOffset = () => {
    // độ cao widget = 36px
    // 0 => y: 0 sơ với widget
    // => space bị miss => total - widget-height / 2
    // cần tranfor về vị trí dưới header
    return -(headerHeight - 36) / 2
  }

  const openShowNotifies = () => {
    if(!showNotifies) {
      setShowNotifies(true)
    }
  }

  useEffect(() => {

    const _handler = (event) => {
      if(showNotifies && !document.querySelector('#notifiesContainer').contains(event.target)) {
        setShowNotifies(false)
      }
    }

    window.addEventListener('click', _handler)

    return ()=> window.removeEventListener('click', _handler)

  }, [showNotifies])

  return (

    <AppNotifyContext.Consumer>
      {
        ctx => (


          <button
            className='!w-[36px] !h-[36px] rounded-full header-notify-avatar relative'
            disabled={ !Object.keys(ctx.user).length }
            onClick={ openShowNotifies }
          >
            {

              Object.keys(ctx.user).length
                ? <NotifyAvatarAnimation avatar='/assets/images/icon-hand.jpg' />
                : (
                  <img
                    src="/assets/images/icon-hand.jpg"
                    alt=""
                    className="w-full h-full object-cover"
                  />
                )

            }

            <div
              id='notifiesContainer'
              className={classNames('w-[350px] absolute z-20 right-0 bg-white pt-3 animate shadow-lg overflow-auto', showNotifies ? '' : 'opacity-0 invisible')}
              style={{
                top: resetOffset() + 'px',
                height: `calc(90vh - ${headerHeight}px)`,
                transform: `translateY(${headerHeight}px)`
              }}
            >
              {
                Object.keys(ctx.user).length ?
                  <NotifiesWrapper>

                    <FacebookNotifies>

                      <_ShowMoreButton />

                    </FacebookNotifies>

                  </NotifiesWrapper>
                  : null
              }
            </div>

          </button>

        )
      }
    </AppNotifyContext.Consumer>

  )

}

const _ShowMoreButton = () => {

  const ctx = useContext(NotifiesContext)

  return (
    <button
      className={ classNames(
        'text-white bg-primary-500 px-10 py-1.5 my-4 rounded-lg',
        ctx.isLoading || ctx.isEmpty ? 'invisible' : ''
      ) }
      onClick={ ()=> ctx.getNotifies() }
    >Xem Thêm</button>
  )

}
