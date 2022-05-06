import { InformationMember } from '../AllMember/InformationMember';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { myListUser, userSelector } from 'pages/user/userSlice';
import { thumbImage } from 'services/convert';
import { adminIstratorSelector } from '../../adminIstratorSlice';

export const DefaultMember = () => {
  const dispatch = useDispatch();
  const { mlUser } = useSelector(userSelector);
  const { aPosition, dPosition } = useSelector(adminIstratorSelector);

  useEffect(() => {
    dispatch(myListUser());
  }, [dispatch, aPosition, dPosition]);

  return (
    <div className="grid grid-cols-3 gap-5 p-3">
      {(mlUser?.myListUser ?? [])
        .filter(item => item?.userAdvance === null)
        .map((item, index) => {
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
                item={item}
                numberStartActive={item?.avgUserFeedback}
              />
              {/* <pre> {JSON.stringify(item, null, ' ')} </pre> */}
            </div>
          );
        })}
    </div>
  );
};
