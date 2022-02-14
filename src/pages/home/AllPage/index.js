import React from "react";
import { BoardItem } from "./BoardItem";
import { SeeMore } from "./SeeMore";

const dataBoardItem = [
  {
    imgAvatar: "https://i.pravatar.cc/100?img=2",
    imgPage: "https://i.pravatar.cc/100?img=2",
    project: "Project 123 Project Project",
    numberLike: "1",
    numberComment: "2",
    numberHeart: "3",
  },
  {
    imgAvatar: "https://i.pravatar.cc/100?img=2",
    imgPage: "https://i.pravatar.cc/100?img=2",
    project: "Project 123 Project Project",
    numberLike: "1",
    numberComment: "2",
    numberHeart: "3",
  },
  {
    imgAvatar: "https://i.pravatar.cc/100?img=2",
    imgPage: "https://i.pravatar.cc/100?img=2",
    project: "Project 123 Project 456",
    numberLike: "1",
    numberComment: "2",
    numberHeart: "3",
  },
  {
    imgAvatar: "https://i.pravatar.cc/100?img=2",
    imgPage: "https://i.pravatar.cc/100?img=2",
    project: "Project 123 Project 456",
    numberLike: "1",
    numberComment: "2",
    numberHeart: "3",
  },
  {
    imgAvatar: "https://i.pravatar.cc/100?img=2",
    imgPage: "https://i.pravatar.cc/100?img=2",
    project: "Project 123 Project 456",
    numberLike: "1",
    numberComment: "2",
    numberHeart: "3",
  },
  {
    imgAvatar: "https://i.pravatar.cc/100?img=2",
    imgPage: "https://i.pravatar.cc/100?img=2",
    project: "Project 123 Project 456",
    numberLike: "1",
    numberComment: "2",
    numberHeart: "3",
  },
  {
    imgAvatar: "https://i.pravatar.cc/100?img=2",
    imgPage: "https://i.pravatar.cc/100?img=2",
    project: "Project 123 Project 456",
    numberLike: "1",
    numberComment: "2",
    numberHeart: "3",
  },
  {
    imgAvatar: "https://i.pravatar.cc/100?img=2",
    imgPage: "https://i.pravatar.cc/100?img=2",
    project: "Project 123 Project 456",
    numberLike: "1",
    numberComment: "2",
    numberHeart: "3",
  },
];
export const AllPage = () => {
  return (
    <section className="p-3 pl-5 space-y-1">
      <section>
        <h3 className="text-[18px]">Project Board</h3>
        <p className="text-sm -mt-2 text-gray-500">
          Projects that allow registration to participate.
        </p>
        <div className="grid grid-cols-4 gap-4">
          {dataBoardItem?.map((item, index) => {
            return (
              <div key={index}>
                <BoardItem
                  imgPage={item?.imgPage}
                  project={item?.project}
                  numberComment={item?.numberComment}
                  numberHeart={item?.numberHeart}
                  numberLike={item?.numberLike}
                  imgAvatar={item?.imgAvatar}
                />
              </div>
            );
          })}
        </div>
        <SeeMore />
      </section>

      <section>
        <h3 className="text-[18px]">Ideas</h3>
        <div className="grid grid-cols-4 gap-4">
          {dataBoardItem?.map((item, index) => {
            return (
              <div key={index}>
                <BoardItem
                  imgPage={item?.imgPage}
                  project={item?.project}
                  numberComment={item?.numberComment}
                  numberHeart={item?.numberHeart}
                  numberLike={item?.numberLike}
                  imgAvatar={item?.imgAvatar}
                />
              </div>
            );
          })}
        </div>
        <SeeMore />
      </section>

      <section>
        <h3 className="text-[18px]">Project Running</h3>
        <div className="grid grid-cols-4 gap-4">
          {dataBoardItem?.map((item, index) => {
            return (
              <div key={index}>
                <BoardItem
                  imgPage={item?.imgPage}
                  project={item?.project}
                  numberComment={item?.numberComment}
                  numberHeart={item?.numberHeart}
                  numberLike={item?.numberLike}
                  imgAvatar={item?.imgAvatar}
                />
              </div>
            );
          })}
        </div>
        <SeeMore />
      </section>

      <section>
        <h3 className="text-[18px]">Project Done</h3>
        <div className="grid grid-cols-4 gap-4">
          {dataBoardItem?.map((item, index) => {
            return (
              <div key={index}>
                <BoardItem
                  imgPage={item?.imgPage}
                  project={item?.project}
                  numberComment={item?.numberComment}
                  numberHeart={item?.numberHeart}
                  numberLike={item?.numberLike}
                  imgAvatar={item?.imgAvatar}
                />
              </div>
            );
          })}
        </div>
        <SeeMore />
      </section>

      <section>
        <h3 className="text-[18px]">Project In Use</h3>
        <div className="grid grid-cols-4 gap-4">
          {dataBoardItem?.map((item, index) => {
            return (
              <div key={index}>
                <BoardItem
                  imgPage={item?.imgPage}
                  project={item?.project}
                  numberComment={item?.numberComment}
                  numberHeart={item?.numberHeart}
                  numberLike={item?.numberLike}
                  imgAvatar={item?.imgAvatar}
                />
              </div>
            );
          })}
        </div>
        <SeeMore />
      </section>
    </section>
  );
};
