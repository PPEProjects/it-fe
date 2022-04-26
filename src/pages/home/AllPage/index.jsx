import React from 'react';
import { Ideas } from 'pages/home/IdeasPage/Ideas';
import { Board } from 'pages/home/OnBoardPage/Board';

export const AllPage = () => {
  return (
    <section className="p-3 pl-5 space-y-1">
      <Board />
      <Ideas />
      {/* <section>
        <h3 className="text-[18px] font-[600]">Project Running</h3>
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
                >
                  <div className="relative">
                    <div className="grid grid-cols-7 gap-2 px-3">
                      <BoardPosition
                        running

                        text="Leader"
                      />
                      <BoardPosition
                        running

                        text="PO"
                      />
                      <BoardPosition
                        running

                        text="Dev"
                      />
                      <BoardPosition
                        running

                        text="Leader"
                      />
                      <BoardPosition
                        running

                        text="Leader"
                      />
                      <BoardPosition
                        running

                        text="Tester"
                      />
                      <BoardPosition
                        running

                        text="Leader"
                      />
                      <BoardPosition
                        running

                        text="QA"
                      />
                      <BoardPosition
                        running

                        text="Leader"
                      />
                    </div>
                    <button className="shadow-sm absolute right-4 bottom-3 bg-white p-1.5 flex text-[#F97316] items-center space-x-1.5 w-[90px] rounded-md">
                      <AiOutlineHeart className="text-xl stroke-[20px]" />
                      <span className="text-[11px]">Follow</span>
                    </button>
                  </div>
                </BoardItem>
              </div>
            );
          })}
        </div>
        <SeeMore name='See more' />
      </section>

      <section>
        <h3 className="text-[18px] font-[600]">Project Done</h3>
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
                >
                  <div className="relative">
                    <div className="grid grid-cols-7 gap-2 px-3">
                      <BoardPosition
                        done

                        text="Leader"
                      />
                      <BoardPosition
                        done

                        text="PO"
                      />
                      <BoardPosition
                        done

                        text="Dev"
                      />
                      <BoardPosition
                        done

                        text="Leader"
                      />
                      <BoardPosition
                        done

                        text="Leader"
                      />
                      <BoardPosition
                        done

                        text="Tester"
                      />
                      <BoardPosition
                        done

                        text="Leader"
                      />
                      <BoardPosition
                        done

                        text="QA"
                      />
                      <BoardPosition
                        done

                        text="Leader"
                      />
                    </div>
                    <button className="shadow-sm absolute right-4 bottom-3 bg-white p-1.5 flex text-[#F97316] items-center space-x-1.5 w-[90px] rounded-md">
                      <AiOutlineHeart className="text-xl stroke-[20px]" />
                      <span className="text-[11px]">Follow</span>
                    </button>
                  </div>
                </BoardItem>
              </div>
            );
          })}
        </div>
        <SeeMore name='See more' />
      </section>

      <section>
        <h3 className="text-[18px] font-[600]">Project In Use</h3>
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
                >
                  <div className="px-2.5 space-y-1.5">
                    <div className="flex font-[500] text-[#164E63] items-center space-x-1.5">
                      <RiCommunityFill className="text-xl" />
                      <span>Company: Smile Eye</span>
                    </div>
                    <div className="flex items-center justify-end">
                      <button className="shadow-sm bg-white p-1.5 flex text-[#F97316] items-center space-x-1.5 w-[90px] rounded-md">
                        <AiOutlineHeart className="text-xl stroke-[20px]" />
                        <span className="text-[11px]">Follow</span>
                      </button>
                    </div>
                  </div>
                </BoardItem>
              </div>
            );
          })}
        </div>
        <SeeMore name='See more' />
      </section> */}
    </section>
  );
};
