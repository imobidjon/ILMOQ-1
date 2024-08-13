import styled from "@emotion/styled";

export const Content = styled.div``;
export const MainContainer = styled.div`
  display: flex;
  flex: 1;
  height: 100vh;

  .sidebarContainer {
    width: 264px;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background: #fff;
    color: #171a2b;

    .scrollHide {
      ::-webkit-scrollbar {
        width: 0; /* Remove scrollbar space */
        background: transparent; /* Optional: just make scrollbar invisible */
      }
      /* Optional: show position indicator in red */
      ::-webkit-scrollbar-thumb {
        background: transparent;
      }
    }

    @media (max-width: 992px) {
      width: 80px;
    }

    @media (max-width: 480px) {
      display: none;
    }
  }

  .mainBlock {
    width: calc(100vw - 264px);
    left: 264px;
    position: relative;
    background-color: #fff;

    .childContent {
      background-color: #f9fafb;
      min-height: 100vh;
      position: relative;
      padding-bottom: 100px;
    }

    @media (max-width: 992px) {
      width: calc(100vw - 80px);
      left: 80px;
    }

    @media (max-width: 480px) {
      width: 100vw;
      left: 0;
    }
  }
`;
