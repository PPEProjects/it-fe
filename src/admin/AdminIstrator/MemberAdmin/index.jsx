import MasterLayout from 'layouts/MasterLayout';
import { LayoutAdmin } from 'layouts/LayoutAdmin';
import { InformationMember } from './InformationMember';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { myListUser, userSelector } from 'pages/user/userSlice';

const MemberAdmin = () => {
  const dispatch = useDispatch();
  const { mlUser } = useSelector(userSelector);

  useEffect(() => {
    dispatch(myListUser());
  }, [dispatch]);

  return (
    <MasterLayout>
      <LayoutAdmin admin>
        <div className="grid grid-cols-3 gap-5 p-3">
          {(mlUser?.myListUser ?? []).map((item, index) => {
            return (
              <div key={index}>
                <InformationMember
                  nameMember={item?.name}
                  goadMember={item?.userAdvance?.goal}
                  emailMember={item?.email}
                  phoneMember={item?.phone_number}
                  dropDown
                  icon
                />
              </div>
            );
          })}
        </div>
      </LayoutAdmin>
    </MasterLayout>
  );
};

export default MemberAdmin;
