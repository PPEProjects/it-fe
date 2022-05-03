import { ImageSingleUpload } from '@smileeye.edu.vn/image';
import { ReactComponent as ImageIcon } from 'assets/image-icon.svg';
import { ReactComponent as LinkIcon } from 'assets/link-icon.svg';
import { ReactComponent as DeleteIcon } from 'assets/delete-icon.svg';
import { Button } from 'antd';
import React from 'react';

const data = [{ nameFile: 'resume_backend...' }, { nameFile: 'resume_backend...' }];

const UploadReviewFile = ({ onCancel }) => {
  return (
    <div>
      <h5 className="font-semibold text-lg pb-3">Review Members</h5>
      <div className="">
        <ImageSingleUpload
          labelMain="Upload file review"
          isBorder
          isDelete
          isFull
          labelFormat={false}
          icon={<ImageIcon className="text-4xl mx-auto" />}
        />
        <div className="py-2"></div>

        {data.map((item, index) => {
          return (
            <div
              key={index}
              className="flex rounded px-2 py-2 border items-center align-center w-48"
            >
              <div className="px-1">
                <LinkIcon />
              </div>
              <div className="px-1"> {item.nameFile} </div>
              <div className=" flex justify-end">
                <DeleteIcon />
              </div>
            </div>
          );
        })}
        <div className="flex flex-row-reverse">
          <Button type="primary" onClick={() => onCancel()}>
            Upload
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UploadReviewFile;
