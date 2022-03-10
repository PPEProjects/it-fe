import MasterLayout from 'layouts/MasterLayout';
import { LayoutAdmin } from 'layouts/LayoutAdmin';
import { InformationMember } from './InformationMember';

const MemberAdmin = () => {
  return (
    <MasterLayout>
      <LayoutAdmin>
        <div className="grid grid-cols-3 gap-4 p-3">
          <InformationMember />
        </div>
      </LayoutAdmin>
    </MasterLayout>
  );
};

export default MemberAdmin;
