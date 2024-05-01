import styled from "@emotion/styled";
import React from "react";

const CardStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 6px;
  width: 240px;
`;
const ImgStyle = styled.div`
  width: 240px;
  height: 180px;
  /* border-radius: 8px;
  border: 1px solid rgba(0, 0, 0, 0.1); */
`;
const DescStyle = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-start;
  gap: 6px;

  .number {
    color: #525252;
    font-family: Pretendard;
    font-size: 32px;
    font-style: normal;
    font-weight: 600;
    line-height: 80%;
  }
  .textbox {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
    flex: 1 0 0;
  }
  .title {
    color: #535353;
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
  }
  .tags {
    color: #ababab;
    font-family: Pretendard;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
  }
`;

const Card = ({ imgPath, title, tags, id }) => {
  return (
    <CardStyle>
      <ImgStyle>
        <img src={`${process.env.PUBLIC_URL}/images/${imgPath}`} alt={title} />
      </ImgStyle>
      <DescStyle>
        <div className="number">{id}</div>
        <div className="textbox">
          <div className="title">{title}</div>
          <div className="tags">{tags}</div>
        </div>
      </DescStyle>
    </CardStyle>
  );
};

export default Card;
