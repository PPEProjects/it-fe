import MasterLayout from 'layouts/MasterLayout';
import { LayoutAdmin } from 'layouts/LayoutAdmin';
import { InformationMember } from './InformationMember';

const dataInformationMember = [
  {
    nameMember: 'Alidabet',
    goadMember: 'Leader',
    emailMember: '123@gmail.com',
    phoneMember: '0905797979',
  },
  {
    nameMember: 'Alidabet',
    goadMember: 'Leader',
    emailMember: '123@gmail.com',
    phoneMember: '0905797979',
  },
  {
    nameMember: 'Alidabet',
    goadMember: 'Leader',
    emailMember: '123@gmail.com',
    phoneMember: '0905797979',
  },
  {
    nameMember: 'Alidabet',
    goadMember: 'Leader',
    emailMember: '123@gmail.com',
    phoneMember: '0905797979',
  },
];

const MemberAdmin = () => {
  return (
    <MasterLayout>
      <LayoutAdmin admin>
        <div className="grid grid-cols-3 gap-5 p-3">
          {(dataInformationMember ?? []).map((item, index) => {
            return (
              <div key={index}>
                <InformationMember
                  nameMember={item?.nameMember}
                  goadMember={item?.goadMember}
                  emailMember={item?.emailMember}
                  phoneMember={item?.phoneMember}
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
