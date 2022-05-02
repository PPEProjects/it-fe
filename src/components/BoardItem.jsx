import React, { useState } from 'react';
import { Menu, Dropdown, Modal, Button, Popconfirm } from 'antd';
import { TopComment } from 'pages/home/AllPage/TopComment';
import { Reviewer } from 'admin/AdminIstrator/AllAdmin/Reviewer';
import { AssignReviewer } from 'admin/AdminIstrator/AllAdmin/AssignReviewer';
import { UpdateInformation } from 'admin/AdminIstrator/AllAdmin/UpdateInformation';
import { Link } from 'react-router-dom';
import { MenuItemHover } from 'components/MenuItemHover';
import { thumbImage } from 'services/convert';
import classNames from 'classnames';
import { ManageMember } from 'admin/ProjectManager/ManageMember';
import { AddProjectLevel } from 'admin/ProjectManager/AddProjectLevel';
import { DownloadFiles } from 'admin/ProjectManager/DownloadFiles';
import { UpdateFiles } from 'admin/ProjectManager/UpdateFiles';
import { UpdateProjectStatus } from 'admin/ProjectManager/UpdateProjectStatus';
import { userSelector, setUserMerge, deleteProject } from 'pages/user/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { updateStatusProject } from 'pages/project/projectSlice';

import { BiDotsVerticalRounded } from 'react-icons/bi';
import { FiEdit } from 'react-icons/fi';
import { AiOutlineLike, AiOutlineMessage } from 'react-icons/ai';
import { setData } from 'pages/user/userSlice';
import { UpdateStatusIdea } from 'admin/AdminIstrator/IdeasProjectAdmin/DraftIdeasProject/UpdateStatusIdea';
import { UpdateStatusProject } from 'admin/AdminIstrator/IdeasProjectAdmin/DraftIdeasProject/UpdateStatusProject';
import { ModalComment } from 'pages/home/AllPage/ModalComment';
import { AddCompany } from 'admin/AdminIstrator/IdeasProjectAdmin/AddCompany';
import UploadReviewFile from 'admin/AdminIstrator/IdeaReview/UploadReviewFile';
import { UpdateProject } from 'pages/user/MyProject/UpdateProject';

export const BoardItem = ({
  imgPage,
  imgAvatar,
  nameProject,
  numberLikeIdeas,
  numberCommentIdeas,
  link,
  children,
  user,
  shadowNone,
  linkViewDetail,
  linkViewDescription,
  placement,
  admin,
  minSize,
  ideas,
  level,
  projectManager,
  ReviewProject,
  clickNode,
  item,
  modalDraft,
  modalDraftProject,
  borderRounded = true,
  approve,
  containerClassName,
  company,
}) => {
  const dispatch = useDispatch();
  const { upProject, dataProject } = useSelector(userSelector);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModalAssignReviewer, setIsModalAssignReviewer] = useState(false);
  const [isModalReviewer, setIsModalReviewer] = useState(false);
  const [isModalUpdateInformation, setIsModalUpdateInformation] = useState(false);
  const [isModalManageMembers, setIsModalManageMembers] = useState(false);
  let [isModalAddProjectLevel, setIsModalAddProjectLevel] = useState(false);
  const [isModalDownloadFiles, setIsModalDownloadFiles] = useState(false);
  const [isModalUpdateFiles, setIsModalUpdateFiles] = useState(false);
  const [isModalUpdateProjectStatus, setIsModalUpdateProjectStatus] = useState(false);
  const [isModalUpdateInformationPro, setIsModalUpdateInformationPro] = useState(false);
  const [isModalDraftIdeasProject, setIsModalDraftIdeasProject] = useState(false);
  const [isModalUpdateStatusIdea, setIsModalUpdateStatusIdea] = useState(false);
  const [isModalUpdateStatusProject, setIsModalUpdateStatusProject] = useState(false);
  const [isModalProjectManage, setIsModalProjectManage] = useState(false);
  const [isModalComment, setModalComment] = useState(false);
  const [isModalCompany, setModalCompany] = useState(false);
  const [isModalUploadReviewFiles, setModalUploadReviewFiles] = useState(false);

  const showModalComment = () => {
    setModalComment(true);
  };
  const handleCancelComment = () => {
    setModalComment(false);
  };
  const showModalCompany = () => {
    setModalCompany(true);
  };
  const handleCancelCompany = () => {
    setModalCompany(false);
  };

  const showModalUpdateStatusProject = () => {
    setIsModalUpdateStatusProject(true);
  };
  const handleCancelUpdateStatusProject = () => {
    setIsModalUpdateStatusProject(false);
  };
  const showModalUpdateStatusIdea = () => {
    setIsModalUpdateStatusIdea(true);
  };
  const handleCancelUpdateStatusIdea = () => {
    setIsModalUpdateStatusIdea(false);
  };

  const showModalProjectManage = () => {
    setIsModalProjectManage(true);
  };
  const handleCancelProjectManage = () => {
    setIsModalProjectManage(false);
  };

  const showModalDraftIdeasProject = () => {
    setIsModalDraftIdeasProject(true);
  };
  const handleCancelDraftIdeasProject = () => {
    setIsModalDraftIdeasProject(false);
  };
  const handleCloseDraftIdeasProject = () => {
    setIsModalDraftIdeasProject(false);
  };
  const showModalUpdateInformationPro = () => {
    setIsModalUpdateInformationPro(true);
  };
  const handleCancelUpdateInformationPro = () => {
    setIsModalUpdateInformationPro(false);
  };
  const showModalUpdateProjectStatus = () => {
    setIsModalUpdateProjectStatus(true);
  };
  const handleCancelUpdateProjectStatus = () => {
    setIsModalUpdateProjectStatus(false);
  };
  const showModalUpdateFiles = () => {
    setIsModalUpdateFiles(true);
  };
  const handleCancelUpdateFiles = () => {
    setIsModalUpdateFiles(false);
  };
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const showModalAssignReviewer = () => {
    setIsModalAssignReviewer(true);
  };

  const handleCancelAssignReviewer = () => {
    setIsModalAssignReviewer(false);
  };
  const showModalReviewer = () => {
    setIsModalReviewer(true);
  };

  const handleModalReviewer = () => {
    setIsModalReviewer(false);
  };
  const showModalUpdateInformation = () => {
    setIsModalUpdateInformation(true);
  };

  const handleCancelUpdateInformation = () => {
    setIsModalUpdateInformation(false);
  };
  const showModalManageMembers = () => {
    setIsModalManageMembers(true);
  };

  const handleCancelManageMembers = () => {
    setIsModalManageMembers(false);
  };

  const showModalAddProjectLevel = () => {
    setIsModalAddProjectLevel(true);
  };

  const handleCancelAddProjectLevel = () => {
    setIsModalAddProjectLevel(false);
  };
  const showModalDownloadFiles = () => {
    setIsModalDownloadFiles(true);
  };

  const handleCancelDownloadFiles = () => {
    setIsModalDownloadFiles(false);
  };

  const handlerShowUploadReviewFiles = () => {
    setModalUploadReviewFiles(true);
  };

  const handlerCancelUploadReviewFiles = () => {
    setModalUploadReviewFiles(false);
  };

  const renderModalComment = () => {
    return (
      <Modal
        className="!w-[500px]  !rounded-lg"
        visible={isModalComment}
        onCancel={handleCancelComment}
        footer={null}
      >
        <ModalComment />
      </Modal>
    );
  };

  const renderModalReviewer = () => {
    return (
      <Modal visible={isModalReviewer} onCancel={handleModalReviewer} footer={null}>
        <Reviewer />
      </Modal>
    );
  };

  const renderModalAssignReviewer = () => {
    return (
      <Modal
        className="!w-[800px]"
        visible={isModalAssignReviewer}
        onCancel={handleCancelAssignReviewer}
        footer={null}
      >
        <AssignReviewer role="Reviewer" />
      </Modal>
    );
  };

  const renderModalAssignProjectManage = () => {
    return (
      <Modal
        className="!w-[800px]"
        visible={isModalProjectManage}
        onCancel={handleCancelProjectManage}
        footer={null}
      >
        <AssignReviewer
          role="Project Manage"
          position="project_manage"
          item={item}
          closeModal={handleCancelProjectManage}
        />
      </Modal>
    );
  };

  const renderModalTopComment = () => {
    return (
      <Modal visible={isModalVisible} onCancel={handleCancel} footer={null}>
        <TopComment />
      </Modal>
    );
  };
  const renderModalUpdateInformation = () => {
    return (
      <Modal
        visible={isModalUpdateInformation}
        onCancel={handleCancelUpdateInformation}
        footer={null}
      >
        <UpdateInformation />
      </Modal>
    );
  };
  const renderModalUpdateStatusIdea = () => {
    return (
      <Modal
        visible={isModalUpdateStatusIdea}
        onCancel={handleCancelUpdateStatusIdea}
        footer={null}
      >
        <UpdateStatusIdea item={item} closeModal={handleCancelUpdateStatusIdea} />
      </Modal>
    );
  };

  const renderModalUpdateStatusProject = () => {
    return (
      <Modal
        visible={isModalUpdateStatusProject}
        onCancel={handleCancelUpdateStatusProject}
        footer={null}
      >
        <UpdateStatusProject item={item} closeModal={handleCancelUpdateStatusProject} />
      </Modal>
    );
  };

  // datvnt
  const renderModalDraftIdeasProject = () => {
    return (
      <Modal
        className="!w-[800px]"
        visible={isModalDraftIdeasProject}
        onCancel={handleCancelDraftIdeasProject}
        footer={null}
      >
        <AssignReviewer
          role="Reviewer"
          position="project_review"
          item={item}
          handleCancelDraftIdeasProject={handleCancelDraftIdeasProject}
          closeModal={handleCancelDraftIdeasProject}
        />
      </Modal>
    );
  };

  const renderModalAddProjectLevel = () => {
    return (
      <Modal
        className="!w-[500px]"
        visible={isModalAddProjectLevel}
        onCancel={handleCancelAddProjectLevel}
        footer={null}
      >
        <AddProjectLevel project={item} callback={() => setIsModalAddProjectLevel(false)} />
      </Modal>
    );
  };
  const renderModalDownloadFiles = () => {
    return (
      <Modal visible={isModalDownloadFiles} onCancel={handleCancelDownloadFiles} footer={null}>
        <DownloadFiles />
      </Modal>
    );
  };
  const renderModalUpdateFiles = () => {
    return (
      <Modal visible={isModalUpdateFiles} onCancel={handleCancelUpdateFiles} footer={null}>
        <UpdateFiles />
      </Modal>
    );
  };
  const renderModalUpdateProjectStatus = () => {
    return (
      <Modal
        visible={isModalUpdateProjectStatus}
        onCancel={handleCancelUpdateProjectStatus}
        footer={null}
      >
        <UpdateProjectStatus item={item} closeModal={handleCancelUpdateProjectStatus} />
      </Modal>
    );
  };

  const renderModalManageMembers = () => {
    return (
      <Modal
        className="!w-[500px]"
        visible={isModalManageMembers}
        onCancel={handleCancelManageMembers}
        footer={null}
      >
        <ManageMember
          item={item}
          openModal={showModalManageMembers}
          closeModal={handleCancelManageMembers}
        />
      </Modal>
    );
  };

  const renderModalUpdateInformationPro = () => {
    return (
      <Modal
        className="!w-[1045px]"
        visible={isModalUpdateInformationPro}
        onCancel={handleCancelUpdateInformationPro}
        footer={null}
      >
        <UpdateInformation
          item={item}
          openModal={showModalUpdateInformationPro}
          closeModal={handleCancelUpdateInformationPro}
        />
        {/* <UpdateProject
          updateMyProject={item?.project}
          openModal={showModalUpdateInformationPro}
          closeModal={handleCancelUpdateInformationPro}
        /> */}
      </Modal>
    );
  };

  const renderModalAddCompany = () => {
    return (
      <Modal
        className="!w-[555px]"
        visible={isModalCompany}
        onCancel={handleCancelCompany}
        footer={null}
      >
        <AddCompany item={item} closeModal={handleCancelCompany} />
      </Modal>
    );
  };

  const renderModalUploadReviewFile = () => {
    return (
      <Modal
        className="!w-[500px]"
        visible={isModalUploadReviewFiles}
        onCancel={handlerCancelUploadReviewFiles}
        footer={null}
      >
        <UploadReviewFile
          openModal={showModalUpdateInformationPro}
          closeModal={handleCancelUpdateInformationPro}
        />
      </Modal>
    );
  };

  const menu = item => {
    return (
      <Menu>
        <Link to={`${linkViewDescription}`}>
          <MenuItemHover nameMenu="View Description" />
        </Link>
        {company && <MenuItemHover nameMenu="Add company" onClick={showModalCompany} />}
        {user && (
          <>
            <MenuItemHover nameMenu="Top Comment" onClick={showModal} />
          </>
        )}

        {admin && (
          <>
            <MenuItemHover nameMenu="Download" onClick={showModal} />
            <MenuItemHover nameMenu="Review" onClick={showModalReviewer} />
            <MenuItemHover nameMenu="Assign Reviewer" onClick={showModalAssignReviewer} />
            <MenuItemHover nameMenu="Update Information" onClick={showModalUpdateInformation} />
          </>
        )}
        {projectManager && (
          <>
            <MenuItemHover nameMenu="Manage Members" onClick={showModalManageMembers} />
            {(item?.project?.status === 'approve' ||
              item?.project?.status === 'stuck' ||
              item?.project?.status === 'in use') && (
              <MenuItemHover nameMenu="Add Project Levels" onClick={showModalAddProjectLevel} />
            )}
            {item?.project?.status === 'done' && (
              <MenuItemHover nameMenu="Review Members" onClick={showModalUpdateInformationPro} />
            )}
            {(item?.project?.status === 'preparing' ||
              item?.project?.status === 'onboard' ||
              item?.project?.status === 'running' ||
              item?.project?.status === 'approve' ||
              item?.project?.status === 'stuck' ||
              item?.project?.status === 'in use') && (
              <>
                <MenuItemHover nameMenu="Download Files" onClick={showModalDownloadFiles} />
                <MenuItemHover nameMenu="Update Files" onClick={showModalUpdateFiles} />
                <MenuItemHover
                  nameMenu="Update Project Status"
                  onClick={showModalUpdateProjectStatus}
                />
                <MenuItemHover
                  nameMenu="Update Information"
                  onClick={showModalUpdateInformationPro}
                />
              </>
            )}
          </>
        )}
        {ReviewProject && (
          <>
            <MenuItemHover nameMenu="Download Files" />
            <MenuItemHover nameMenu="Upload Review Files " onClick={handlerShowUploadReviewFiles} />
          </>
        )}
        {clickNode && (
          <>
            <MenuItemHover
              onClick={() => {
                dispatch(setData({ dataProject: { item } }));
                dispatch(setUserMerge('upProject', { isOpen: true }));
              }}
              nameMenu="Update Ideas"
            />
            <Popconfirm
              title={
                <div>
                  Do you want to delete the project
                  <span className="font-bold"> {dataProject?.item?.name}</span>
                </div>
              }
              onConfirm={() => {
                dispatch(deleteProject(dataProject?.item?.id));
              }}
              okText="Yes"
              cancelText="No"
            >
              <MenuItemHover
                onClick={() => {
                  dispatch(setData({ dataProject: { item } }));
                }}
              />
            </Popconfirm>
          </>
        )}
        {modalDraft && (
          <>
            <MenuItemHover nameMenu="Download" />
            {(item?.status === 'created' || item?.status === 'reviewing & improving') && (
              <MenuItemHover nameMenu="Assign Reviewer" onClick={showModalDraftIdeasProject} />
            )}
            <MenuItemHover nameMenu="Update Status Idea" onClick={showModalUpdateStatusIdea} />
          </>
        )}
        {modalDraftProject && (
          <>
            <MenuItemHover nameMenu="Download" />
            {(item?.status === 'created' || item?.status === 'reviewing & improving') && (
              <MenuItemHover
                nameMenu="Assign Reviewer"
                onClick={showModalDraftIdeasProject}
                itemMember={item}
              />
            )}
            {!(item?.status === 'created' || item?.status === 'reviewing & improving') && (
              <MenuItemHover nameMenu="Assign Project Manage" onClick={showModalProjectManage} />
            )}
            <MenuItemHover
              nameMenu="Update Status Project"
              onClick={showModalUpdateStatusProject}
            />
          </>
        )}
      </Menu>
    );
  };

  return (
    <section
      className={classNames('pb-3 shadow-sm', containerClassName, {
        '!shadow-none': shadowNone,
        'border-l border-b rounded-b-md': borderRounded,
      })}
    >
      {renderModalAddCompany()}
      {renderModalTopComment()}
      {renderModalAssignReviewer()}
      {renderModalReviewer()}
      {renderModalUpdateInformation()}
      {renderModalManageMembers()}
      {renderModalAddProjectLevel()}
      {renderModalDownloadFiles()}
      {renderModalUpdateFiles()}
      {renderModalUpdateProjectStatus()}
      {renderModalUpdateInformationPro()}
      {renderModalDraftIdeasProject()}
      {renderModalUpdateStatusIdea()}
      {renderModalUpdateStatusProject()}
      {renderModalComment()}
      {renderModalAssignProjectManage()}
      {renderModalUploadReviewFile()}
      <div className="group aspect-w-4 rounded-md relative aspect-h-4 overflow-hidden bg-gray-300">
        <div className="relative">
          <img
            className="h-[215px] w-full object-cover rounded cursor-pointer"
            src={imgPage}
            alt=""
          />
        </div>
        {level && (
          <div className="absolute top-3 right-3 bg-white w-[60px] font-semibold text-black rounded-full border h-[60px] flex items-center justify-center">
            {level}
          </div>
        )}

        <div className="invisible rounded-md opacity-0 transition group-hover:!visible group-hover:opacity-100">
          <Link to={`${linkViewDetail}`}>
            <div className="absolute top-0 left-0 cursor-pointer right-0 flex space-x-2 h-full bg-black !bg-opacity-60 items-center justify-center text-white">
              <span className="text-xs">View detail</span>
              <FiEdit />
            </div>
          </Link>
        </div>
      </div>

      <div className="px-3">
        <div className="flex items-center justify-between py-2">
          <Link to={`${link}`} className="flex items-center space-x-3 w-[60%]">
            <img
              className="h-10 w-10 object-cover rounded-full cursor-pointer"
              src={thumbImage(imgAvatar)}
              alt=""
            />
            <span className="text-[#0369A1] font-semibold overflow-hidden line-clamp-2 max-h-10">
              {nameProject}
            </span>
          </Link>

          <div className="flex items-center space-x-2">
            {ideas && (
              <>
                <p className="flex items-center space-x-1 cursor-pointer">
                  <AiOutlineLike className="text-xl" />
                  <span>{numberLikeIdeas}</span>
                </p>
                <p className="flex items-center space-x-1 cursor-pointer">
                  <AiOutlineMessage className="text-xl" />
                  <span>{numberCommentIdeas}</span>
                </p>
              </>
            )}
            <Dropdown overlay={menu(item)} placement={placement} trigger={['click']}>
              <p
                className={classNames(
                  'w-10 h-10 hover:border hover:bg-gray-50 rounded-full flex items-center justify-center cursor-pointer',
                  {
                    '!w-8 !h-8': minSize,
                  }
                )}
              >
                <BiDotsVerticalRounded
                  className={classNames('!text-2xl text-gray-400', {
                    '!text-xl': minSize,
                  })}
                />
              </p>
            </Dropdown>
          </div>
        </div>
        {approve && (
          <div className="text-right pr-5 pb-1">
            {item?.project?.status === 'approve' ? (
              <Button disabled className={classNames('!h-[40px] !rounded-md !text-sm')}>
                Approve
              </Button>
            ) : (
              <Button
                onClick={() => {
                  const values = { status: 'approve', id: item?.projectId || item?.id };
                  dispatch(updateStatusProject({ data: values }));
                }}
                className={classNames('!bg-[#3B82F6] !h-[40px] !rounded-md !text-white !text-sm')}
              >
                Approve
              </Button>
            )}
          </div>
        )}
      </div>

      <div className="pt-2">{children}</div>
    </section>
  );
};
