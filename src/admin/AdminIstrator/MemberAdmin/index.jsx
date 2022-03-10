import MasterLayout from 'layouts/MasterLayout';
import { LayoutAdmin } from 'layouts/LayoutAdmin';
import { InformationMember } from './InformationMember';

const MemberAdmin = () => {
  return (
    <MasterLayout>
      <LayoutAdmin>
        <InformationMember />
      </LayoutAdmin>
    </MasterLayout>
  );
};

export default MemberAdmin;
