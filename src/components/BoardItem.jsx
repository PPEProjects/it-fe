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
import { UpdateProject } from 'pages/user/MyProject/UpdateProject';
import { userSelector, setUserMerge, deleteProject } from 'pages/user/userSlice';
import { useDispatch, useSelector } from 'react-redux';

import { BiDotsVerticalRounded } from 'react-icons/bi';
import { FiEdit } from 'react-icons/fi';
import { AiOutlineLike, AiOutlineMessage, AiOutlineHeart, AiOutlineShareAlt } from 'react-icons/ai';
import { setData } from 'pages/user/userSlice';
import { ModalDraft } from 'admin/AdminIstrator/IdeasProjectAdmin/DraftIdeasProject/ModalDraft';
import { UpdateStatusIdea } from 'admin/AdminIstrator/IdeasProjectAdmin/DraftIdeasProject/UpdateStatusIdea';
import { UpdateStatusProject } from 'admin/AdminIstrator/IdeasProjectAdmin/DraftIdeasProject/UpdateStatusProject';
import { ModalComment } from 'pages/home/AllPage/ModalComment';

export const BoardItem = ({
  imgPage,
  imgAvatar,
  nameProject,
  numberLike,
  numberLikeIdeas,
  numberCommentIdeas,
  numberComment,
  numberHeart,
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
  lever,
  projectManager,
  myIdea,
  clickNode,
  item,
  modalDraft,
  modalDraftProject,
  borderRounded = true,
}) => {
  const dispatch = useDispatch();
  const { upProject, dataProject } = useSelector(userSelector);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModalAssignReviewer, setIsModalAssignReviewer] = useState(false);
  const [isModalReviewer, setIsModalReviewer] = useState(false);
  const [isModalUpdateInformation, setIsModalUpdateInformation] = useState(false);
  const [isModalManageMembers, setIsModalManageMembers] = useState(false);
  const [isModalAddProjectLevel, setIsModalAddProjectLevel] = useState(false);
  const [isModalDownloadFiles, setIsModalDownloadFiles] = useState(false);
  const [isModalUpdateFiles, setIsModalUpdateFiles] = useState(false);
  const [isModalUpdateProjectStatus, setIsModalUpdateProjectStatus] = useState(false);
  const [isModalUpdateInformationPro, setIsModalUpdateInformationPro] = useState(false);
  const [isModalDraftIdeasProject, setIsModalDraftIdeasProject] = useState(false);
  const [isModalUpdateStatusIdea, setIsModalUpdateStatusIdea] = useState(false);
  const [isModalUpdateStatusProject, setIsModalUpdateStatusProject] = useState(false);
  const [isModalComment, setModalComment] = useState(false);

  const showModalComment = () => {
    setModalComment(true);
  };
  const handleCancelComment = () => {
    setModalComment(false);
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

  const showModalDraftIdeasProject = () => {
    setIsModalDraftIdeasProject(true);
  };
  const handleCancelDraftIdeasProject = () => {
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

  const renderModalUpdateProject = () => {
    return (
      <Modal
        className="!w-[1280px]"
        visible={upProject?.isOpen}
        onCancel={() => dispatch(setUserMerge('upProject', { isOpen: false }))}
        footer={null}
      >
        <UpdateProject updateMyProject={dataProject} />
      </Modal>
    );
  };

  const renderModalUpdateProject1 = () => {
    return (
      <Modal
        className="!w-[1280px]"
        visible={upProject?.isOpen}
        onCancel={() => dispatch(setUserMerge('upProject', { isOpen: false }))}
        footer={null}
      >
        <UpdateProject updateMyProject={dataProject} />
      </Modal>
    );
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
        <AssignReviewer />
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
        <UpdateStatusIdea />
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
        <UpdateStatusProject />
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
        <ManageMember />
      </Modal>
    );
  };
  const renderModalDraftIdeasProject = () => {
    return (
      <Modal
        className="!w-[800px]"
        visible={isModalDraftIdeasProject}
        onCancel={handleCancelDraftIdeasProject}
        footer={null}
      >
        <AssignReviewer />
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
        <AddProjectLevel />
        {/* <ManageMember /> */}
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
        <UpdateProjectStatus />
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
        <UpdateInformation />
      </Modal>
    );
  };
  const menu = () => {
    return (
      <Menu>
        {user && (
          <>
            <Link to={`${linkViewDescription}`}>
              <MenuItemHover nameMenu="View Description" />
            </Link>
            <MenuItemHover nameMenu="Top Comment" onClick={showModal} />
          </>
        )}

        {admin && (
          <>
            <Link to={`${linkViewDescription}`}>
              <MenuItemHover nameMenu="View Description" />
            </Link>
            <MenuItemHover nameMenu="Download" onClick={showModal} />
            <MenuItemHover nameMenu="Review" onClick={showModalReviewer} />
            <MenuItemHover nameMenu="Assign Reviewer" onClick={showModalAssignReviewer} />
            <MenuItemHover nameMenu="Update Information" onClick={showModalUpdateInformation} />
          </>
        )}

        {projectManager && (
          <>
            <Link to={`${linkViewDescription}`}>
              <MenuItemHover nameMenu="View Description" />
            </Link>
            <MenuItemHover nameMenu="Manage Members" onClick={showModalManageMembers} />
            <MenuItemHover nameMenu="Add Project Levels" onClick={showModalAddProjectLevel} />
            <MenuItemHover nameMenu="Download Files" onClick={showModalDownloadFiles} />
            <MenuItemHover nameMenu="Update Files" onClick={showModalUpdateFiles} />
            <MenuItemHover
              nameMenu="Update Project Status"
              onClick={showModalUpdateProjectStatus}
            />
            <MenuItemHover nameMenu="Update Information" onClick={showModalUpdateInformationPro} />
          </>
        )}
        {myIdea && (
          <>
            <Link to={`${linkViewDescription}`}>
              <MenuItemHover nameMenu="View Description" />
            </Link>
            <MenuItemHover nameMenu="Download Files" />
            <MenuItemHover nameMenu="Upload Review Files " />
          </>
        )}
        {clickNode && (
          <>
            <Link to={`${linkViewDescription}`}>
              <MenuItemHover nameMenu="View Description" />
            </Link>
            <MenuItemHover
              onClick={() => {
                dispatch(setData({ dataProject: { item } }));
                dispatch(setUserMerge('upProject', { isOpen: true }));
              }}
              nameMenu="Update Ideas"
            />
            <Popconfirm
              // icon={<QuestionCircleOutlined style={{color: "red"}}/>}
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
                nameMenu=" project"
              />
            </Popconfirm>
          </>
        )}
        {modalDraft && (
          <>
            <Link to={`${linkViewDescription}`}>
              <MenuItemHover nameMenu="View Description" />
            </Link>
            <MenuItemHover nameMenu="Download" />
            <MenuItemHover nameMenu="Assign Reviewer" onClick={showModalDraftIdeasProject} />
            <MenuItemHover nameMenu="Update Status Idea" onClick={showModalUpdateStatusIdea} />
          </>
        )}
        {modalDraftProject && (
          <>
            <Link to={`${linkViewDescription}`}>
              <MenuItemHover nameMenu="View Description" />
            </Link>
            <MenuItemHover nameMenu="Download" />
            <MenuItemHover nameMenu="Assign Reviewer" onClick={showModalDraftIdeasProject} />
            <MenuItemHover nameMenu="Update Status Idea" onClick={showModalUpdateStatusProject} />
          </>
        )}
      </Menu>
    );
  };

  return (
    <section
      className={classNames('pb-3 shadow-sm', {
        '!shadow-none': shadowNone,
        'border-l border-b rounded-b-md': borderRounded,
      })}
    >
      {renderModalUpdateProject1()}
      {renderModalUpdateProject()}
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
      <div className="group aspect-w-4 rounded-md relative aspect-h-4 overflow-hidden bg-gray-300">
        <div className="relative">
          <img
            className="h-[215px] w-full object-cover rounded cursor-pointer"
            src={imgPage}
            alt=""
          />
        </div>
        {lever && (
          <div className="absolute top-3 right-3 bg-white w-[60px] font-semibold text-black rounded-full border h-[60px] flex items-center justify-center">
            {lever}
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
            <span className="font-[600] text-[#0369A1]">{nameProject}</span>
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
        {admin && (
          <div className="text-right pr-6 pb-1">
            <Button className="!bg-[#3B82F6] !h-[40px] rounded !text-white !text-sm">
              Approve
            </Button>
          </div>
        )}

        {/* {user && (
          <div className="flex items-center justify-between text-sm text-[#164E63]">
            <p className="flex items-center space-x-1 cursor-pointer">
              <AiOutlineLike className="text-2xl stroke-[20px]" />
              <span>{numberLike}</span>
            </p>
            <p onClick={showModalComment} className="flex items-center space-x-1 cursor-pointer">
              <AiOutlineMessage className="text-2xl stroke-[20px]" />
              <span>{numberComment}</span>
            </p>
            <p className="flex items-center space-x-1 cursor-pointer">
              <AiOutlineHeart className="text-2xl stroke-[20px]" />
              <span>{numberHeart}</span>
            </p>
            <p className="pr-2 cursor-pointer">
              <AiOutlineShareAlt className="text-2xl stroke-[20px]" />
            </p>
          </div>
        )} */}
      </div>

      <div className="pt-2">{children}</div>
    </section>
  );
};
