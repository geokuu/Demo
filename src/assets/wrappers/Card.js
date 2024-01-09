import styled from "styled-components";

const Wrapper = styled.div`
  .card {
    padding: 12px;
    background: #f5f5f5;
    border-radius: 20px;
    gap: 14px;
    display: flex;
    flex-direction: column;
    cursor: pointer;
    width: fit-content;
  }

  .card:hover {
    transform: scale(1.03);
  }

  .image-container {
    width: 210px;
    height: 210px;
    flex-direction: column;
    display: flex;
  }

  img {
    width: 210px;
    height: 210px;
    border-radius: 9px;
  }

  .about {
    width: 210px;
    height: 70px;
    text-overflow: ellipsis;
    overflow: hidden;
    gap: 3px;
  }

  h3 {
    color: #66574b;
    font-size: 17px;
    font-weight: 700;
    word-wrap: break-word;
  }

  .creator {
    font-size: 14px;
    font-weight: 400;
  }

  .footer {
    width: 100%;
    flex-direction: column;
    justify-content: flex-end;
    gap: 3px;
    display: flex;
  }

  .bar {
    height: 9px;
    position: relative;
  }

  .bar-background {
    width: 100%;
    height: 100%;
    position: absolute;
    background: #ece7e2;
    border-radius: 9px;
  }

  .bar-percentage {
    height: 100%;
    position: relative;
    background: #ff900e;
    border-radius: 9px;
  }

  .stats {
    gap: 13px;
    display: flex;
  }

  p {
    color: #66574b;
    font-size: 14px;
    font-weight: 400;
  }

  .days-left {
    flex: 1;
    text-align: right;
  }
`;

export default Wrapper;
