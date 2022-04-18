import { InformationMember } from './InformationMember';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { myListUser, userSelector } from 'pages/user/userSlice';
import { thumbImage } from 'services/convert';

export const AllMember = () => {
  const dispatch = useDispatch();
  const { mlUser } = useSelector(userSelector);

  useEffect(() => {
    dispatch(myListUser());
  }, [dispatch]);

  return (
    <div className="grid grid-cols-3 gap-5 p-3">
      {(mlUser?.myListUser ?? []).map((item, index) => {
        console.log('item', item);
        return (
          <div key={index}>
            <InformationMember
              imgSrcAvatar={thumbImage(item?.avatar_attachment?.file)}
              idMember={item?.id}
              nameMember={item?.name}
              goadMember={item?.userAdvance?.goal}
              emailMember={item?.email}
              phoneMember={item?.phone_number}
              dropDown
              icon
              item={item?.id}
              numberStartActive={item?.avgUserFeedback}
            />
          </div>
        );
      })}
    </div>
  );
};
