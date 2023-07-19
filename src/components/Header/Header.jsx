import React, { useContext } from "react";
import "./Header.css";
import { AppContext } from "../../store/AppContextProvider";

export const Header = () => {
  const appCtx = useContext(AppContext);
  console.log(appCtx);
  return (
    <>
      <header className="main-invoice">
        <div>
          <div className="header-section">
            <h1>Invoice Generator</h1>
          </div>
        </div>
      </header>
    </>
  );
};
